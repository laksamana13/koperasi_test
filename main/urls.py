from django.urls import path

from . import views

urlpatterns = [
    path('anggota', views.members),
    path('tambah-anggota', views.add_members),
]
