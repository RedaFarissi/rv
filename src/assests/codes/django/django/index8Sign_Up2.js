export default function index8Sign_Up2(){
    return `from django.urls import path
from .views import signUp

urlpatterns = [
    path('sign_up/', signUp, name='sign_up'),
]`
}