from django.db import models


class ToDo(models.Model):
    fname = models.CharField(max_length=200)
    lname=models.CharField(max_length=200)
    position=models.CharField(max_length=200)
    sallery=models.CharField(max_length=200)
    office=models.CharField(max_length=200)
