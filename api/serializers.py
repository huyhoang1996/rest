from rest_framework import serializers
from api.models import User

class UserSerializer(serializers.ModelSerializer):
	# id = serializers.IntegerField(read_only=True)
	# name = serializers.CharField(required=False, allow_blank=True, max_length=100)
	# power = serializers.CharField(required=False, allow_blank=True, max_length=100)
	# email = serializers.CharField(required=False, allow_blank=True, max_length=100)
	class Meta:
		model = User
		fields = '__all__'
		

	
