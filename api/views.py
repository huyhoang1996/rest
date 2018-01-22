# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required

from api.models import *
from api.serializers import *
# Create your views here.


# class UserAll(APIView):
# 	# type method same django, serializer convert objects to json
#     def get(self, request, format=None):
# 		user = User.objects.all()
# 		serializer = UserSerializer(user, many=True )
# 		return Response(serializer.data)

class UserAll(generics.ListCreateAPIView):
	serializer_class = UserSerializer

	# set return object 
	def get_queryset(self):
		print('get_queryset', self.request.data)
		user = User.objects.all()
		return user

class UserDetail(generics.RetrieveUpdateAPIView):
	serializer_class = UserSerializer
	lookup_field = "id"

	def get_queryset(self):
		id = self.kwargs.get(self.lookup_field)
		user = User.objects.filter(id = id)
		return user

@api_view(['POST'])
def updateUser(request, id):
	try:
		user = User.objects.get(id = id)
		form = UserSerializer(data = request.data, instance = user)
		if form.is_valid():
			form.save()
			return Response({'status': 'oki'})
	except Exception, e:
		print "Error action updateUser : ", e
		return Response(status=500)





