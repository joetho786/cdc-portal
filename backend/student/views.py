from company.serializers import InternshipAdvertisementSerializer, InternshipOfferSerializer, JobAdvertisementSerializer, JobOfferSerializer
from django.shortcuts import get_object_or_404
from company.models import InternshipAdvertisement, InternshipOffer, JobAdvertisement, JobOffer
from cdc_portal.utils import get_config_value
from django.db.utils import IntegrityError
from rest_framework.response import Response
from .serializers import StudentProfileSerializer, ResumeSerializer
from .models import StudentProfile, Resume, ProgramAndBranch
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


class addStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def get_data_from_rollno(self, roll):
        import re
        dic = {}
        lis1 = re.split("\d+", roll)  # noqa: W605
        lis2 = re.split("\D+", roll)  # noqa: W605
        dic["RollNo"], dic["Year"], dic["Batch"], dic["Branch"] = lis2[-1], lis2[-2], lis1[0], lis1[1]
        return dic

    def post(self, request, *args, **kwargs):
        data = {}
        for key in request.data.keys():
            if request.data.get(key) != '':
                if request.data.get(key) == 'true':
                    data[key] = True
                elif request.data.get(key) == 'false':
                    data[key] = False
                else:
                    data[key] = request.data.get(key)
        user = request.user
        r_dic = self.get_data_from_rollno(user.username)
        data["year"] = r_dic["Year"]
        data["roll_no"] = user.username
        getter = r_dic["Batch"] + '/' + r_dic["Branch"]
        try:
            profile = StudentProfile.objects.create(user=user, **data, program_branch=ProgramAndBranch.objects.get(getter=getter))
            profile.save()
        except IntegrityError:
            return Response({'Error': 'Invalid/Empty Fields in Form'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(StudentProfileSerializer(profile).data, status=status.HTTP_200_OK)


class getStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        user = request.user
        student_profile = StudentProfile.objects.filter(user=user)
        serializer = StudentProfileSerializer(student_profile, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class updateStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def put(self, request, *args, **kwargs):
        data = {}
        for key in request.data.keys():
            if request.data.get(key) != '':
                if request.data.get(key) == 'true':
                    data[key] = True
                elif request.data.get(key) == 'false':
                    data[key] = False
                else:
                    data[key] = request.data.get(key)
        serializer = StudentProfileSerializer(instance=request.user, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class deleteStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, *args, **kwargs):
        user = request.user
        profile = StudentProfile.objects.get(user=user)
        operation = profile.delete()
        data = {}
        if operation:
            data["operation status"] = "Successfully deleted user profile"
        else:
            data["operation status"] = "Failed to delete user profile"
        return Response(data=data)


class getResumes(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        if not StudentProfile.objects.filter(user=request.user).exists():
            return Response(status=status.HTTP_403_FORBIDDEN)
        resumes = Resume.objects.filter(student__user=request.user).order_by('id')
        if len(resumes) == 0:
            profile = StudentProfile.objects.get(user=request.user)
            return Response(StudentProfileSerializer(profile).data, status=status.HTTP_200_OK)
        serializer = ResumeSerializer(resumes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class getApprovedResumes(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        resumes = Resume.objects.filter(student__user=request.user, is_verified=True).order_by('id')
        serializer = ResumeSerializer(resumes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class addResume(APIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser,)

    def post(self, request, format=None):
        serializer = ResumeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(student=StudentProfile.objects.get(user=request.user))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class deleteResume(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, pk):
        resume = Resume.objects.get(id=pk)
        user = request.user
        if resume.student.user.id != user.id:
            return Response({'Error': 'Cannot delete others resume'}, status.HTTP_403_FORBIDDEN)
        data = {}
        if(resume.is_verified):
            return Response({'Error': 'Can not delete verified resume'}, status.HTTP_403_FORBIDDEN)
        else:
            operation = resume.delete()
            if operation:
                return Response({'Error': 'Successfully deleted resume'}, status.HTTP_200_OK)
            else:
                return Response({'Error': 'Cannot delete the resume'}, status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(data=data)


class StudentAvailableOffers(APIView):
    permission_classes = (IsAuthenticated,)

    def get_applied_ad_list(self, user, model):
        if model == InternshipAdvertisement:
            m = InternshipOffer
        else:
            m = JobOffer
        return model.objects.filter(
            id__in=m.objects.filter(student__user=user).values_list('profile'))

    def get_offers(self, profile, model):
        if profile.program_branch.check_gpa:
            offers = model.objects.filter(min_gpa__lte=profile.gpa,
                                          eligible_program_branch__name__contains=profile.program_branch.name,
                                          active=True).difference(self.get_applied_ad_list(profile.user, model))
        else:
            offers = model.objects.filter(
                eligible_program_branch__name__contains=profile.program_branch.name,
                active=True).difference(self.get_applied_ad_list(profile.user, model))
        return offers

    def get(self, request):
        show = get_config_value('ShowAdertisements')
        profile = get_object_or_404(StudentProfile, user=request.user)
        IntershipYears = get_config_value('IntershipYears')
        JobYears = get_config_value('JobYears')
        if profile.banned:
            Response({'Error': 'You are Banned', }, status.HTTP_403_FORBIDDEN)
        if profile.placed:
            Response({'Error': 'You are Placed', }, status.HTTP_403_FORBIDDEN)
        year_combo = profile.program_branch.getter.split('/')[0] + str(profile.year)
        offers = {}
        if year_combo in IntershipYears:
            model = InternshipAdvertisement
            serializer = InternshipAdvertisementSerializer
            off = self.get_offers(profile, model)
            offers['Internships'] = serializer(off, many=True).data if show else []
        if year_combo in JobYears:
            model = JobAdvertisement
            serializer = JobAdvertisementSerializer
            off = self.get_offers(profile, model)
            offers['Jobs'] = serializer(off, many=True).data if show else []
        return Response(offers, status.HTTP_200_OK)


class StudentAppliedOffers(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        data = {}
        off = InternshipOffer.objects.filter(student__user=request.user)
        data['Internships'] = InternshipOfferSerializer(off, many=True).data
        off = JobOffer.objects.filter(student__user=request.user)
        data['Jobs'] = JobOfferSerializer(off, many=True).data
        return Response(data, status=status.HTTP_200_OK)

    def post(self, request,):
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)
        user = request.user
        if data['type'] == 'Intern':
            model = InternshipOffer
            model_ad = InternshipAdvertisement
        elif data['type'] == 'Job':
            model = JobOffer
            model_ad = JobAdvertisement
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        ad_id = data.pop('ad_id')
        ad = get_object_or_404(model_ad, id=ad_id)
        rs_id = data.pop('resume')
        res = get_object_or_404(Resume, id=rs_id)
        student = get_object_or_404(StudentProfile, user=user)
        model.objects.create(profile=ad, resume=res, student=student, company=ad.company)
        return Response(status=status.HTTP_200_OK)
