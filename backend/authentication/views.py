from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer, OtherUserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes




User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_tutees(request):
    # use filter to get back only tutors
    # copy whole method for only tuttees
    tutees = User.objects.filter(is_tutee=True)
    # use OtherUserSerializer
    serializer = OtherUserSerializer(tutees, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_users(request):
    users = User.objects.exclude(username="admin")
    serializer = OtherUserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_tutors(request):
    # use filter to get back only tutors
    # copy whole method for only tuttees
    tutors = User.objects.filter(is_tutor=True)
    # use OtherUserSerializer
    serializer = OtherUserSerializer(tutors, many=True)
    return Response(serializer.data)