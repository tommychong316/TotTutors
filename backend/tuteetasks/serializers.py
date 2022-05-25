from rest_framework import serializers
from .models import TuteeTask

class TuteeTaskSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TuteeTask
        fields = ["id", "user_id", "task", "is_completed",]
        depth = 1

user_id = serializers.IntegerField(write_only = True)