from rest_framework import serializers
from helio.models import User, UserApp
from rest_framework.response import Response
from rest_framework import status

class UserSerializer(serializers.ModelSerializer):

	class Meta:
		model = User
		fields = '__all__'

	# def update(self, instance, validated_data):
		# app_id = validated_data.get('app_id', None)
		# if app_id:
		# 	exist_app_id = User.objects.filter(app_id = app_id)
		# 	if exist_app_id:
		# 		return Response({'error': 'account app is related'}, status=status.HTTP_400_BAD_REQUEST)
		# 	instance.app_id = app_id
		# 	instance.save()
		# else:
		# print('validated_data', validated_data)
		# instance.save(**validated_data)
		# return instance

		

class UserAppSerializer(serializers.ModelSerializer):

	class Meta:
		model = UserApp
		fields = '__all__'

	def create(self, validated_data):
		userApp = UserApp.objects.create(**validated_data)
		return userApp

	


