from django.shortcuts import render

from rest_framework import generics,status
from nethra_app.serializers import *
from nethra_app.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def appointment_view(request):
    if request.method == 'GET':
        appointment_model = Appointment.objects.all()
        appointment_serializer = AppointmentSerializer(appointment_model,many=True)
        return Response(appointment_serializer.data)
    


from django.core.mail import send_mail

# @api_view(['POST'])
# def create_appointmentt(request):
#     if request.method == 'POST':
#         serializer = AppointmentSerializer(data=request.data)
#         if serializer.is_valid():
#             appointment = serializer.save()

#             # Send email with appointment details
#             subject = 'New Appointment Booking'
#             message = f"""
#               A new appointment has been successfully booked. Below are the details:

#             Patient Name: {appointment.name}
#             Contact Number: {appointment.contact_num}
#             Location: {appointment.place}
#             Age: {appointment.age}
#             Appointment Date: {appointment.appointment_date.strftime('%A, %B %d, %Y')}

#             """
#             recipient_email = 'aavanianilkumar1999@gmail.com'
#             send_mail(
#                 subject,
#                 message,
#                 'your_email@gmail.com',  # Replace with your email
#                 [recipient_email],
#                 fail_silently=False,
#             )

#             return Response(serializer.data, status=status.HTTP_200_OK)
#         else:
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def create_appointmentt(request):
    if request.method == 'POST':
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            appointment = serializer.save()

            # Send email with appointment details
            subject = f"Appointment - {appointment.name}"
            message = f"""
            A new appointment has been successfully booked. Below are the details:

            Patient Name: {appointment.name}
            Contact Number: {appointment.contact_num}
            Location: {appointment.place}
            Age: {appointment.age}
            Appointment Date: {appointment.appointment_date.strftime('%A, %B %d, %Y')}
            """
            recipient_email = 'anuranj8606@gmail.com'
            from_email = f"Appointment - {appointment.name}"  # Customize the sender name

            send_mail(
                subject,
                message,
                from_email,
                [recipient_email],
                fail_silently=False,
            )

            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

     
