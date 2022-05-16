from rest_framework import serializers
from .models import Reply
from django.contrib.auth.models import User


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields =["id", "text", "comment_id", "user_id"]
        depth = 1
        
user_id = serializers.IntegerField(write_only = True)
comment_id = serializers.IntegerField(write_only = True)    