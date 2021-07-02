from rest_framework import serializers
from django.contrib.auth.models import User
from student.models import ProgramAndBranch
from .models import News, PastRecruiters, Volunteers,\
                    AlumniTestimonial, HomeImageCarousel, DesignationChoices,\
                    VolunteersYearChoices, CareerCommittee, CoreTeamContacts,\
                    NavBarSubOptions, NavBarOptions, AboutUs, DirectorMessage,\
                    Achievements, WhyRecruit, CareerDevelopmentActivity


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = '__all__'


class DirectorMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DirectorMessage
        fields = '__all__'


class ProgramAndBranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramAndBranch
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class PastRecruitersSerializer(serializers.ModelSerializer):
    class Meta:
        model = PastRecruiters
        fields = '__all__'


class VolunteersYearChoicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteersYearChoices
        fields = '__all__'


class VolunteersSerializer(serializers.ModelSerializer):
    year = VolunteersYearChoicesSerializer(read_only=True)
    program_branch = ProgramAndBranchSerializer(read_only=True)

    class Meta:
        model = Volunteers
        fields = '__all__'


class AlumniTestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlumniTestimonial
        fields = '__all__'


class AchievementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievements
        fields = '__all__'

class CareerDevelopmentActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = CareerDevelopmentActivity
        fields = '__all__'


class HomeImageCarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeImageCarousel
        fields = '__all__'


class DesignationChoicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignationChoices
        fields = '__all__'


class CareerCommitteeSerializer(serializers.ModelSerializer):
    designation = DesignationChoicesSerializer(read_only=True)

    class Meta:
        model = CareerCommittee
        fields = '__all__'


class CoreTeamContactsSerializer(serializers.ModelSerializer):
    designation = DesignationChoicesSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    program_branch = ProgramAndBranchSerializer(read_only=True)

    class Meta:
        model = CoreTeamContacts
        fields = '__all__'


class NavBarSubOptionsSerializer(serializers.ModelSerializer):
    file = serializers.FileField()

    class Meta:
        model = NavBarSubOptions
        fields = '__all__'


class NavBarOptionsSerializer(serializers.ModelSerializer):
    sub_options = NavBarSubOptionsSerializer(many=True)

    class Meta:
        model = NavBarOptions
        fields = '__all__'


class WhyRecruitSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhyRecruit
        fields = '__all__'
