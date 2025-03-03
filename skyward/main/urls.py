from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('privacy', views.privacy, name='privacy_pdf'),
    path('telegram', views.telegram, name='telegram'),
    path('vk', views.vk, name='vk'),
]