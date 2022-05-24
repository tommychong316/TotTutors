from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username')

    class Meta:
        model = Review
        fields = ["id", "user_id", "username", "review" ]
        depth = 1

    def get_username(self, comment):
        username = comment.user.username
        return username


user_id = serializers.IntegerField(write_only=True)
