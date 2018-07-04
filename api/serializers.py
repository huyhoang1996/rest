from rest_framework import serializers
from api.models import User, Role

class UserSerializer(serializers.ModelSerializer):
	id = serializers.IntegerField(read_only=True)
	name = serializers.CharField(required=True, max_length=100)
	email = serializers.CharField(required=True, max_length=100)
	users = serializers.StringRelatedField(many=True)

	class Meta:
		model = User
		fields = ('id', 'name', 'email', 'users')

class RoleSerializer(serializers.ModelSerializer):
	user = UserSerializer(many= False)
	class Meta:
		model = Role
		fields = '__all__'


		


	
