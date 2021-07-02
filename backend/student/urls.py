from django.urls import path
from . import views


urlpatterns = [
    path('details/', views.StudentDetails.as_view(), name="student-details"),
    path('resumes/', views.Resumes.as_view(), name="student-resumes"),
    path('resume/<int:pk>', views.Resumes.as_view(), name="delete-student-resume"),
    path('offers/', views.AvailableOffers.as_view(), name="student-offers"),
    path('applied_offers/', views.AppliedOffers.as_view(), name="student-applied-offers"),
    path('suggestion_inquiry/', views.SendSuggestionsAndInquiry.as_view(), name="student-suggestion-inquiry")
]
