from django.urls import path, include
from replies import views 

urlpatterns = [
 
    path('', views.reply), #// GET ALL replies for a comment
    path('allreplies/<int:comment_id>/', views.comment_replies), #// GET ALL replies for a comment
    path('commentreply/<int:comment_id>/', views.comment_reply) #// GET ALL replies for a comment
    
]