from django.urls import path
from . import views


urlpatterns = [
    path('details_add/', views.addStudentDetails.as_view(), name="student-details-add"),
    path('details/', views.getStudentDetails.as_view(), name="student-details"),
    path('details_update/', views.updateStudentDetails.as_view(), name="student-details-update"),
    path('details_delete/', views.deleteStudentDetails.as_view(), name="student-details-delete"),
    path('get_resumes/', views.getResumes.as_view(), name="student-resumes"),
    path('get_approved_resumes/', views.getApprovedResumes.as_view(), name="student-approved-resumes"),
    path('add_resume/', views.addResume.as_view(), name="add-student-resume"),
    path('delete_resume/<int:pk>', views.deleteResume.as_view(), name="delete-student-resume"),
    path('offers/', views.StudentAvailableOffers.as_view(), name="student-offers"),
    path('applied_offers/', views.StudentAppliedOffers.as_view(), name="student-applied-offers")
]
