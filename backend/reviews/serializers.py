from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Review
        fields = ["id", "user_id", "review"]
        depth = 1

user_id = serializers.IntegerField(write_only = True)