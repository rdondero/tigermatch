from django.db import models

class Person(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    pic = models.CharField(max_length=500)
    # cloudinary img link (in Postgres DB)

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    filter_gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    major = models.CharField(max_length=30)
    grad_year = models.IntegerField()
    settle_location = models.CharField(max_length=30)
    career = models.CharField(max_length=30)
    bio = models.CharField(max_length=500)

