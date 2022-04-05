from import_export import resources
from import_export.fields import Field
from .models import StudentProfile


class StudentProfileResource(resources.ModelResource):
    user__first_name = Field(
        column_name='First Name',
        attribute='user__first_name',
    )
    user__last_name = Field(
        column_name='Last Name',
        attribute='user__last_name',
    )
    roll_no = Field(
        column_name='Roll Number',
        attribute='roll_no',
    )
    user__email = Field(
        column_name='Email',
        attribute='user__email',
    )
    year = Field(
        column_name='Year',
        attribute='year',
    )
    gpa = Field(
        column_name='GPA',
        attribute='gpa',
    )
    ug_college = Field(
        column_name='UG College',
        attribute='ug_college',
    )
    ug_program_branch = Field(
        column_name='UG Program and Branch',
        attribute='ug_program_branch',
    )
    dob = Field(
        column_name='Date of birth',
        attribute='dob',
    )
    nationality = Field(
        column_name='Nationality',
        attribute='get_nationality_display',
    )
    category = Field(
        column_name='Category',
        attribute='get_category_display')

    program_branch = Field(
        column_name='Program and Branch',
        attribute='program_branch')

    class Meta:
        model = StudentProfile
        fields = (
            'user__first_name', 'user__last_name', 'roll_no', 'user__email', 'year', 'gpa', 'ug_college',
            'ug_gpa', 'ug_passing_year', 'ug_program_branch', 'phone', 'dob',
            'jee_air', 'physical_disability', 'permanent_address', 'current_address', 'x_year',
            'x_board_name', 'x_percentage', 'xii_year', 'xii_board_name', 'xii_percentage', 'banned')
        export_order = (
            'user__first_name', 'user__last_name', 'roll_no', 'user__email', 'program_branch', 'year', 'gpa',
            'ug_college', 'ug_gpa', 'ug_passing_year', 'ug_program_branch', 'phone', 'dob',
            'jee_air', 'category', 'physical_disability', 'permanent_address', 'current_address', 'x_year',
            'x_board_name', 'x_percentage', 'xii_year', 'xii_board_name', 'xii_percentage', 'banned', 'nationality')
