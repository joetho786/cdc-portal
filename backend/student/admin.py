from django.contrib import admin
from student.models import StudentProfile, Resume, ProgramAndBranch, ProgramEmailId
from .resources import StudentProfileResource
from import_export.admin import ImportExportActionModelAdmin


class ResumeInline(admin.StackedInline):
    model = Resume


def approve_resumes(modeladmin, request, queryset):
    queryset.update(is_verified=True)


def unapprove_resumes(modeladmin, request, queryset):
    queryset.update(is_verified=False)


def ban(modeladmin, request, queryset):
    queryset.update(banned=True)


def mark_placed(modeladmin, request, queryset):
    queryset.update(placed=True)


def mark_unplaced(modeladmin, request, queryset):
    queryset.update(placed=False)


@admin.register(ProgramAndBranch)
class ProgramAndBranchAdmin(admin.ModelAdmin):
    class Meta:
        model = ProgramAndBranch
        fields = '__all__'


@admin.register(ProgramEmailId)
class ProgramEmailIdAdmin(admin.ModelAdmin):
    list_display = ['email', 'program', 'year']

    class Meta:
        model = ProgramEmailId
        fields = '__all__'


@admin.register(StudentProfile)
class StudentProfileAdmin(ImportExportActionModelAdmin):
    readonly_fields = ['registration_timestamp', ]
    resource_class = StudentProfileResource
    inlines = (ResumeInline,)
    list_display = ['__str__', 'roll_no', 'program_branch', 'year', 'registration_timestamp']
    list_filter = ['program_branch', 'year', 'registration_timestamp', 'placed']
    ordering = ['roll_no', ]
    search_fields = ['roll_no', 'user__first_name', 'user__last_name']
    actions = [ban, mark_placed, mark_unplaced]

    class Meta:
        model = StudentProfile
        fields = '__all__'


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    readonly_fields = ['timestamp', ]
    ordering = ['student', ]
    list_display = ['get_roll_no', 'student', 'get_gpa', 'reference', 'file', 'is_verified', 'timestamp', ]
    search_fields = ['student__user__first_name', 'student__user__last_name', 'student__user__username']
    list_filter = ['is_verified', 'timestamp', 'student__program_branch', 'student__year']
    actions = [approve_resumes, unapprove_resumes]

    def get_roll_no(self, instance):
        return instance.student.roll_no
    get_roll_no.admin_order_field = 'student__roll_no'

    def get_gpa(self, instance):
        return instance.student.gpa
    get_gpa.admin_order_field = 'student__gpa'

    class Meta:
        model = Resume
        fields = '__all__'
