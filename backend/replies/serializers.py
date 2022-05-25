from rest_framework import serializers
from .models import Reply
from django.contrib.auth.models import User
from comments.models import Comment


class ReplySerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username')
    class Meta:
        model = Reply
        fields =["id", "text", "comment_id", "user_id", "username"]
        depth = 1
        
    def get_username(self, reply):
        username = reply.user.username
        return username
    
    
user_id = serializers.IntegerField(write_only = True)
comment_id = serializers.IntegerField(write_only = True)    