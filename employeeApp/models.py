from django.db import models

# Create your models here.


class Employees(models.Model):
	first_name = models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)
	position = models.CharField(max_length=200)
	sallery = models.IntegerField()
	brance = models.CharField(max_length=200)


