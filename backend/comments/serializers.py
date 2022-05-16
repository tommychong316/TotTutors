from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = ["id", "user_id", "text"]
        depth = 1

user_id = serializers.IntegerField(write_only = True)