from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentProfileSerializer, ResumeSerializer
from .models import StudentProfile, Resume
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.parsers import FileUploadParser, MultiPartParser, FormParser


class addStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)
        user = request.user
        user.first_name = data['user']['first_name']
        user.last_name = data['user']['last_name']
        user.save()
        profile = StudentProfile.objects.create(user = user, **data)
        profile.save()
        return Response(StudentProfileSerializer(profile).data, status=status.HTTP_200_OK)


class getStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        user = request.user
        student_profile = StudentProfile.objects.filter(user=user)
        serializer = StudentProfileSerializer(student_profile, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)


class updateStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def put(self, request, *args, **kwargs):
        serializer = StudentProfileSerializer(instance=request.user, data=request.data)
        data = {}
        for key in request.data.keys():
            data[key] = request.data.get(key)
        user = request.user
        user.first_name = data['user']['first_name']
        user.last_name = data['user']['last_name']
        user.save()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)



class deleteStudentDetails(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, *args, **kwargs):
        user = request.user
        profile = StudentProfile.objects.get(user = user)
        operation  = profile.delete()
        data = {}
        if operation:
            data["operation status"] = "Successfully deleted user profile"
        else:
            data["operation status"] = "Failed to delete user profile"
        return Response(data = data)


class getResumes(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        resumes = Resume.objects.filter(student__user = request.user)
        serializer = ResumeSerializer(resumes, many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)


class addResume(APIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = (FileUploadParser,)

    def post(self, request, format = None):
        user = request.user
        file = request.data['file']
        serializer = ResumeSerializer(file=file, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class deleteResume(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request, pk):
        user = request.user
        resume = Resume.objects.get(id = pk)
        data = {}
        if(resume.is_verified):
            data["operation status"] = "Can not delete verified resume"
        else:
            operation = resume.delete()
            if operation:
                data["operation status"] = "Successfully deleted resume"
            else:
                data["operation status"] = "Failed to delete resume"
        return Response(data = data)