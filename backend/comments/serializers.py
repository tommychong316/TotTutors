from rest_framework import serializers

from authentication.views import User
from .models import Comment
from authentication.models import User
class CommentSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username')
    class Meta:
        model = Comment
        fields = ["id", "user_id", "text", "username"]
        depth = 1
    
    def get_username(self, comment):
        username = comment.user.username
        return username
        
        


user_id = serializers.IntegerField(write_only = True)