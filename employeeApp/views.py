from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from . serializers import EmployeeSerializer
from . models import Employees

# Create your views here.


class EmployeeView(APIView):

	def get(self, request):
		employees = Employees.objects.all()
		serializer = EmployeeSerializer(employees, many=True)

		return Response(serializer.data)
