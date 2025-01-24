from rest_framework import serializers
from nethra_app.models import *

class AppointmentSerializer(serializers.ModelSerializer):
    # name = serializers.CharField(max_length=100)
    # contact_num = models.CharField(max_length=10)
    class Meta:
        model = Appointment
        fields ='__all__'
        