from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def members(request):
    return render(request, "admin-panel/anggota.html")


def add_members(request):
    return render(request, "admin-panel/tambah-anggota.html")
