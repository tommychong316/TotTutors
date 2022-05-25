from webbrowser import get
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_object_or_404
from .models import Comment

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def reply(request):
#     serializer = ReplySerializer(data=request.data)
#     if serializer.is_valid(raise_exception=True):
#         serializer.save(user=request.user)
#         return Response(serializer.data, status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def reply(request, comment_id):
    serializer = ReplySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user, comment_id=comment_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def comment_replies(request, pk):
    comment = get_object_or_404(Comment, pk=pk)
    replies = Reply.objects.filter(comment_id=comment.id)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def reply_detail(request, id):
    reply = get_object_or_404(Reply, id=id)
    serializer = ReplySerializer(reply, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)

