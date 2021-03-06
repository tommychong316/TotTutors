from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comment),
    path('all/', views.get_all_comments),
    path('<int:id>/', views.comment_detail),  
]