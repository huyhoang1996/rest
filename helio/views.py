# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from rest_framework.exceptions import APIException

from helio.models import *
from helio.serializers import *
# Create your views here.

# api exceptions
class ServiceUnavailable(APIException):
    status_code = 500
    default_detail = 'Service temporarily unavailable, try again later.'



class UserAll(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    queryset = User


class UserAppAll(generics.ListCreateAPIView):
    serializer_class = UserAppSerializer
    queryset = UserApp.objects.all()


class UserAppUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = UserAppSerializer
    queryset = UserApp


@api_view(['POST'])
def relateUser(request):
    user_id = request.data.get('user_id', None)
    userApp_id = request.data.get('userApp_id', None)
    if user_id and userApp_id:
        print('*********')
        # check app is related
        check_userApp_exist = User.objects.filter(app_id=userApp_id)

        if check_userApp_exist:
            return Response({'error': "account app is related"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.get(pk=user_id)
        userApp = UserApp.objects.get(pk=userApp_id)
        # check account web is related
        if user.app_id:
            return Response({'error': "account is related"}, status=status.HTTP_400_BAD_REQUEST)
        # check equal info
        if user.name != userApp.name or user.email != userApp.email or user.phone != userApp.phone or user.birthday != userApp.birthday or user.government_id != userApp.government_id or user.address != userApp.address:
            return Response({'error': "two account don't same"}, status=status.HTTP_400_BAD_REQUEST)

        user.app_id = userApp
        user.mapping_by = request.user.username
        user.save()
        return Response({'success': 'success'}, status=200)
    raise ServiceUnavailable

       
