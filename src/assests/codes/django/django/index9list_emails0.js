export default function index9list_emails0(){
    return `from django.urls import path
from .views import sendEmail , fetch_emails

urlpatterns = [
    path('', sendEmail, name="send_email"),
    path('fetch_emails/', fetch_emails, name='email_list'), #new
]`
}