export default function index9send_email4(){
    return `from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

def sendEmail(request):
    if request.method == "POST":
        message = request.POST['message']
        email = request.POST['email']
        name = request.POST['name']

        send_mail(
            name,  # title
            message,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )
    return render(request, 'send_email.html')`
}