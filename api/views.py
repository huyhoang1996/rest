# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from rest_framework.response import Response
from api.models import *
from api.serializers import *
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
import traceback
from rest_framework.exceptions import APIException


class UserAll(generics.ListCreateAPIView):
    authentication_classes = ( BasicAuthentication,)
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    def get_queryset(self):
        user = User.objects.all()
        return user

class UserDetail(generics.RetrieveUpdateAPIView):    
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_field = "id"
    lookup_url_kwarg = "id_users"

    def get_exception_handler(self):
        print 'hoang'
        """
        Returns the exception handler that this view uses.
        """
        raise ServiceUnavailable()

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

class UserList(mixins.ListModelMixin,
                  generics.GenericAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
    	list_id = request.data.get('list_id', None)
    	if list_id:
    		list_user = User.objects.filter( id__in = list_id )
    		if list_user: 
    			list_user.delete()
    			return Response({"code": 200, "message": "success", "fields": ""}, status=200)
	        return Response({"code": 400, "message": "fail", "fields": ""}, status=400)
        return Response({"code": 400, "message": "fail", "fields": ""}, status=400)

class UserDetailMixin(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    mixins.CreateModelMixin,
                    generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class ServiceUnavailable(APIException):
    status_code = 500
    default_detail = 'Service temporarily unavailable, try again later.'
    default_code = 'service_unavailable'

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        return super(UserViewSet,self).list(request)

    def create(self, request):
        return super(UserViewSet,self).create(request)

    def get_exception_handler(self):
        print "Error UserViewSet : %s ", traceback.format_exc()
        # raise ServiceUnavailable()
        raise Exception(
            "ERROR : Internal Server Error .Please contact administrator.")


