from django.db import models
from django.contrib.auth.models import User
from student.models import ProgramAndBranch
from ckeditor_uploader.fields import RichTextUploadingField
from django.template.defaultfilters import slugify
import re


class News(models.Model):
    title = models.CharField(max_length=64, blank=True)
    order_no = models.PositiveSmallIntegerField(default=512)
    content = models.TextField(max_length=512)
    active = models.BooleanField(default=True)
    document = models.FileField(upload_to='news', blank=True, null=True)
    file_title = models.CharField(max_length=64, default='Read More')
    link = models.URLField(blank=True, null=True)
    link_title = models.CharField(max_length=64, default='Link')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'News'


class AboutUs(models.Model):
    title = models.CharField(max_length=64, blank=True, default="About Us")
    content = RichTextUploadingField(blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'AboutUs'


class DirectorMessage(models.Model):
    title = models.CharField(max_length=64, blank=True, default="Director Message")
    name = models.CharField(max_length=64, blank=True)
    image = models.ImageField(upload_to='people')
    content = RichTextUploadingField(max_length=5000)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'DirectorMessage'


class PastRecruiters(models.Model):
    company_order_no = models.PositiveIntegerField(default=64)
    company_name = models.CharField(max_length=64)
    company_logo = models.ImageField(upload_to='company-logo', blank=True, null=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.company_name

    class Meta:
        verbose_name_plural = 'Past recruiters'


class DesignationChoices(models.Model):
    Team_Member = 'Team Member'
    designation = models.CharField(max_length=64, default=Team_Member)

    def __str__(self):
        return self.designation

    class Meta:
        verbose_name_plural = 'Designation choices'


class CoreTeamContacts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    designation = models.ForeignKey(DesignationChoices, on_delete=models.SET_NULL, null=True, blank=True)
    sub_designation = models.CharField(max_length=64, default='Career Development Cell')
    program_branch = models.ForeignKey(ProgramAndBranch, on_delete=models.SET_NULL, null=True)
    phone = models.CharField(max_length=16, blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    linkedin_link = models.URLField(blank=True, null=True)
    profile_image = models.ImageField(upload_to='contacts', blank=True, null=True)
    active = models.BooleanField(default=True)
    order_no = models.PositiveIntegerField(default=64)

    def get_github_username(self):
        x = re.split("https://github.com/", str(self.github_link))
        return x[1]

    def get_linkedin_username(self):
        x = re.split("https://www.linkedin.com/in/", str(self.linkedin_link))
        return x[1]

    def __str__(self):
        return self.user.get_full_name()

    class Meta:
        verbose_name_plural = 'Core team contacts'


class VolunteersYearChoices(models.Model):
    year = models.CharField(max_length=64)

    def __str__(self):
        return self.year

    class Meta:
        verbose_name_plural = 'Volunteers year choices'


class Volunteers(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField()
    year = models.ForeignKey(VolunteersYearChoices, on_delete=models.SET_NULL, null=True, blank=True)
    program_branch = models.ForeignKey(ProgramAndBranch, on_delete=models.SET_NULL, null=True, blank=True)
    active = models.BooleanField(default=True)
    order_no = models.PositiveIntegerField(default=64)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Volunteers'


class AlumniTestimonial(models.Model):
    alumni_name = models.CharField(max_length=64)
    company_working = models.CharField(max_length=64)
    designation = models.CharField(max_length=64, null=True)
    testimonial = models.TextField(null=False)
    alumni_image = models.ImageField(upload_to='alumni-testimonial')
    linkedin = models.URLField(max_length=200, blank=True, null=True)
    facebook = models.URLField(max_length=200, blank=True, null=True)
    twitter = models.URLField(max_length=200, blank=True, null=True)
    mailId = models.EmailField(max_length=200, blank=True, null=True)
    active = models.BooleanField(default=True)
    ranking = models.PositiveSmallIntegerField(default=512)

    def __str__(self):
        return self.alumni_name


class Achievements(models.Model):
    CATEGORY = (
        ('Highlight', 'Highlight'),
        ('Other', 'Other'),
    )
    title = models.CharField(max_length=64)
    category = models.CharField(max_length=10, choices=CATEGORY)
    description = RichTextUploadingField(blank=True, null=True)
    details = RichTextUploadingField(blank=True, null=True)
    image = models.ImageField(upload_to='achievements', blank=True, null=True)
    active = models.BooleanField(default=True)
    ranking = models.PositiveSmallIntegerField(default=512)

    def __str__(self):
        return self.title


class CareerDevelopmentActivity(models.Model):
    CATEGORY = (
        ('Upcoming', 'Upcoming'),
        ('Past', 'Past'),
    )
    title = models.CharField(max_length=64)
    category = models.CharField(max_length=10, choices=CATEGORY)
    date = models.CharField(default="Thursday, January 10th", blank=True, null=True, max_length=100)
    time = models.CharField(default="4:00pm-6:00pm", blank=True, null=True, max_length=100)
    location = models.TextField(blank=True, null=True)
    description = RichTextUploadingField(blank=True, null=True)
    details = RichTextUploadingField(blank=True, null=True)
    image = models.ImageField(upload_to='CDActivities', blank=True, null=True)
    active = models.BooleanField(default=True)
    ranking = models.PositiveSmallIntegerField(default=512)

    def __str__(self):
        return self.title


class HomeImageCarousel(models.Model):
    ordering = models.PositiveIntegerField(default=64)
    title = models.CharField(max_length=64)
    image = models.ImageField(upload_to='homepage-carousel', blank=True, null=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class CareerCommittee(models.Model):
    name = models.CharField(max_length=64, blank=False, null=False, default='Member')
    email = models.EmailField(max_length=32, blank=False, null=False, default='member@gmail.com')
    designation = models.ForeignKey(DesignationChoices, on_delete=models.SET_NULL, null=True, blank=True)
    department = models.TextField(max_length=64, default="Department")
    profile_image = models.ImageField(upload_to='contacts', blank=True, null=True)
    active = models.BooleanField(default=True)
    order_no = models.PositiveIntegerField(default=64)

    def __str__(self):
        return self.name


class NavBarSubOptions(models.Model):
    title = models.CharField(max_length=64)
    description = RichTextUploadingField(blank=True, null=True)
    file = models.FileField(upload_to='files', null=True, blank=True)
    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = NavBarSubOptions.objects.all().filter(slug__iexact=original_slug).count()
        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = NavBarSubOptions.objects.all().filter(slug__iexact=slug).count()
        self.slug = slug
        super(NavBarSubOptions, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Navbar sub options'


class NavBarOptions(models.Model):
    title = models.CharField(max_length=64)
    sub_options = models.ManyToManyField(NavBarSubOptions)
    active = models.BooleanField(default=True)
    order_no = models.PositiveIntegerField(default=64)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Navbar options'


class WhyRecruit(models.Model):
    title = models.CharField(max_length=64)
    active = models.BooleanField(default=True)
    text = models.TextField(max_length=1000)
    img = models.ImageField(upload_to='whyrecruitimages', blank=False, null=False)

    def __str__(self):
        return self.title
