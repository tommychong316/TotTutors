from django.urls import path, include
from replies import views

urlpatterns = [

    path('reply<int:comment_id>/', views.reply),  # // GET ALL replies for a comment
    path('<int:pk>/', views.comment_replies),
    path('edit<int:id>/', views.reply_detail),


]
