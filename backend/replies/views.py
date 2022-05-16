from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_object_or_404

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_reply(request, comment_id):
    serializer = ReplySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user = request.user, comment_id = comment_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def comment_replies(request, comment_id):
    replies = Reply.objects.filter(comment_id = comment_id)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)