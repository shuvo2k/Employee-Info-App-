from rest_framework import serializers 
from . models import Employees

class EmployeeSerializer(serializers.ModelSerializer):
	class Meta:
		model = Employees
		fields = 'id', 'first_name', 'last_name', 'position', 'sallery', 'brance'

