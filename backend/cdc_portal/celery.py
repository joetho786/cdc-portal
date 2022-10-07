# from __future__ import absolute_import
# import os
# from celery import Celery
# from django.conf import settings


# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cdc_portal.settings')
# app = Celery('cdc_portal')
# app.conf.enable_utc = False
# app.conf.update(timezone='Asia/Kolkata')
# app.config_from_object('django.conf:settings',  namespace='CELERY')
# app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

# app.conf.beat_schedule = {
#     'send-resume-verification-email': {
#         'task': 'student.tasks.send_resume_verification_email',
#         'schedule': 864000.0  # 10 Days
#     }
# }


# @app.task(bind=True)
# def debug_task(self):
#     print('Request: {0!r}'.format(self.request))
