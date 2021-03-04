from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from main.models import News, AlumniTestimonial, PastRecruiters,\
     HomeImageCarousel, CoreTeamContacts, CareerCommittee, Volunteers,\
     NavBarSubOptions, NavBarOptions, DesignationChoices, VolunteersYearChoices
from main.serializers import NewsSerializer, AlumniTestimonialSerializer,\
     PastRecruitersSerializer, HomeImageCarouselSerializer, CoreTeamContactsSerializer,\
     CareerCommitteeSerializer, VolunteersSerializer, VolunteersYearChoicesSerializer,\
     NavBarSubOptionsSerializer, NavBarOptionsSerializer, DesignationChoicesSerializer


class NewsSerializer(ListAPIView):
    queryset = News.objects.filter(active=True).order_by('order_no')
    serializer_class = NewsSerializer


class AlumniTestimonialSerializer(ListAPIView):
    queryset = AlumniTestimonial.objects.filter(active='True').order_by('ranking')
    serializer_class = AlumniTestimonialSerializer


class PastRecruitersSerializer(ListAPIView):
    queryset = PastRecruiters.objects.filter(active=True)
    serializer_class = PastRecruitersSerializer


class HomeImageCarouselSerializer(ListAPIView):
    queryset = HomeImageCarousel.objects.filter(active=True)
    serializer_class = HomeImageCarouselSerializer


class DesignationChoicesSerializer(ListAPIView):
    queryset = DesignationChoices.objects.all()
    serializer_class = DesignationChoicesSerializer


class VolunteersYearChoicesSerializer(ListAPIView):
    queryset = VolunteersYearChoices.objects.all()
    serializer_class = VolunteersYearChoicesSerializer


class CoreTeamContactsSerializer(ListAPIView):
    queryset = CoreTeamContacts.objects.filter(active=True)
    serializer_class = CoreTeamContactsSerializer
    search_fields = ['designation__designation']
    filter_backends = (SearchFilter,)


class CareerCommitteeSerializer(ListAPIView):
    queryset = CareerCommittee.objects.filter(active=True)
    serializer_class = CareerCommitteeSerializer
    search_fields = ['designation__designation']
    filter_backends = (SearchFilter,)


class VolunteersSerializer(ListAPIView):
    queryset = Volunteers.objects.filter(active=True)
    serializer_class = VolunteersSerializer


class NavBarSubOptionsSerializer(ListAPIView):
    queryset = NavBarSubOptions.objects.all()
    serializer_class = NavBarSubOptionsSerializer


class NavBarOptionsSerializer(ListAPIView):
    queryset = NavBarOptions.objects.all()
    serializer_class = NavBarOptionsSerializer
