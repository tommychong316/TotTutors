from django.db import models
from authentication.models import User 

# Create your models here.
class TuteeTask (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.CharField(max_length=255)
    is_completed = models.BooleanField('completed status', default=False)