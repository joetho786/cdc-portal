from celery import shared_task
from django.core.mail import get_connection, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from .models import Resume


@shared_task
def send_resume_verification_email():
    print("Sending Resume Verification Mail! It Works!!!")
    resumes = Resume.objects.all()
    unverifiedResumesStudents = set()
    message = ""
    for resume in resumes:
        if resume.is_verified is False:
            name = str(resume.student.user.get_full_name())
            name = name + ' ' + str(resume.student.roll_no)
            unverifiedResumesStudents.add(name)
            message = message + name
    unverifiedResumesStudents = list(unverifiedResumesStudents)
    if len(unverifiedResumesStudents) > 0:
        with get_connection(
                username=settings.SERVER_EMAIL,
                password=settings.SERVER_EMAIL_PASSWORD
        ) as connection:
            subject = 'Resume Verification Required'
            to_email = ['jain.38@iitj.ac.in', ]
            from_email = settings.SERVER_EMAIL
            html_content = render_to_string("student/resume_verification.html", {'students': unverifiedResumesStudents})
            text_content = strip_tags(html_content)
            message = EmailMultiAlternatives(subject=subject, body=text_content, from_email=from_email, to=to_email,
                                             connection=connection)
            message.attach_alternative(html_content, "text/html")
            return message.send()
    return "No unverified resumes"
