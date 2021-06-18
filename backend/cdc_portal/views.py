import jwt
import datetime
import requests
import subprocess

from rest_framework import views
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User

from student.models import StudentProfile


class Login(views.APIView):

    def post(self, request, *args, **kwargs):
        if not request.data:
            return Response({'Error': "Please provide email/password"}, status="400", content_type="application/json")

        email = request.data['email']
        password = request.data['password']
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'Error': "Invalid email/password"}, status=400, content_type="application/json")
        if user and user.check_password(password):

            payload = {
                'id': user.id,
                'email': user.email,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            }
            data = {'token': jwt.encode(payload, "SECRET_KEY", algorithm="HS256")}
            data['Dname'] = user.email
            return Response(
                data,
                status=status.HTTP_200_OK)
        else:
            return Response(
                {'Error': "Invalid credentials"},
                status=400,
                content_type="application/json"
            )


class LDAPOAuth(views.APIView):
    testing_mode = False

    def post(self, request, *args, **kwargs):
        if not request.data:
            return Response({'Error': "Please provide valid credentials"}, status="400", content_type="application/json")

        user_id = request.data['id']
        password = request.data['password']
        if not self.testing_mode:
            try:
                result = subprocess.check_output(['java', 'LDAP_login_api', user_id, password])
                result = result.decode('utf-8')
                if (result == "0"):
                    return Response(
                        {'Error': "Invalid credentials : Please provide valid credentials"},
                        status=400,
                        content_type="application/json"
                    )
                email = result.split("mail=mail: ")[1].split(",")[0].replace("}", "").replace("{", "")
                name = result.split("givenname=givenName: ")[1].split(",")[0].replace("}", "").replace("{", "").split(" ")
                roll_no = result.split("sn=sn: ")[1].split(",")[0].replace("(", "").replace(")", "").replace("}", "").replace("{", "")
            except:  # noqa: E722
                return Response(
                    {'Error': "LDAP Server Down"},
                    status=500,
                    content_type="application/json"
                )
        else:
            email = "test@iitj.ac.in"
            roll_no = "B19EE048"
            name = ["test", "user"]
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            user = User.objects.create(username=roll_no, email=email, first_name=name[0], last_name=name[1])
        if user:
            payload = {
                'id': user.id,
                'email': user.email,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            }
            data = {'token': jwt.encode(payload, "SECRET_KEY", algorithm="HS256")}
            data['Dname'] = name[0] + " (" + roll_no + ")"
            try:
                StudentProfile.objects.get(user=user)
                return Response(
                    data,
                    status=status.HTTP_200_OK)
            except StudentProfile.DoesNotExist:
                return Response(
                    data,
                    status=status.HTTP_201_CREATED)
        else:
            return Response(
                {'Error': "Server Down"},
                status=500,
                content_type="application/json"
            )


class GoogleLogin(views.APIView):

    def post(self, request, *args, **kwargs):
        if not request.data:
            return Response({'Error': "Please provide the token"}, status="400")

        token = request.data['token']
        resp = requests.post('https://oauth2.googleapis.com/tokeninfo', data={'id_token': token})
        data = resp.json()
        if not data['email'] or resp.status != 200:
            return Response(
                {'Error': "Invalid credentials"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        user = User.objects.filter(email=data['email']).first()
        if user is None:
            user = User.objects.create_user(
                email=data["email"], username=data["name"])
        if user:

            payload = {
                'id': user.id,
                'email': user.email,
                'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            }
            jwt_token = {'token': jwt.encode(payload, "SECRET_KEY", algorithm="HS256")}

            return Response(
                jwt_token,
                status=status.HTTP_200_OK)
