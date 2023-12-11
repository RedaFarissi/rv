export default function index9send_email3(){
    return `from django.urls import path
from .views import sendEmail

urlpatterns = [
    path('', sendEmail, name="send_email"),
]`
}