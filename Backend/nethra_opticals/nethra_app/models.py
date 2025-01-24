from django.db import models

class Appointment(models.Model):
    name = models.CharField(max_length=100)
    contact_num = models.CharField(max_length=10)
    place = models.CharField(max_length=20)
    # dob = models.DateField()
    age = models.CharField(max_length=10)
    appointment_date = models.DateField()