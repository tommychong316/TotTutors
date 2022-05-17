from django.urls import path, include
from reviews import views

urlpatterns = [
    path('', views.user_review),
    path('all/', views.get_all_reviews),
    path('<int:id>/', views.review_detail),
]