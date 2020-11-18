from django.db import models

# Create your models here.


class Members(models.Model):
    full_name = models.CharField(max_length=30)
    birth = models.CharField(max_length=50)
    gender = models.BooleanField()
    phone = models.IntegerField()
    job = models.CharField(max_length=30)


class Address(models.Model):
    user = models.OneToOneField(Members, models.CASCADE)
    province = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    kecamatan = models.CharField(max_length=50)
    village = models.CharField(max_length=50)


class Cooperations(models.Model):
    user = models.OneToOneField(Members, models.CASCADE)
    name = models.CharField(max_length=30)
    rule = models.CharField(max_length=30)
    is_active = models.BooleanField()
    date_join = models.DateField()
    date_out = models.DateField()
    out_desc = models.CharField(max_length=255)
