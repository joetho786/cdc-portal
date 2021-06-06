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
        profile = StudentProfile.objects.create(user=user, **data, program_branch=ProgramAndBranch.objects.get(abbreviation=getter))
        profile.save()
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
        resumes = Resume.objects.filter(student__user=request.user).order_by('id')
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
