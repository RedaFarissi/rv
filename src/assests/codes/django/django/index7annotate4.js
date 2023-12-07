export default function index7annotate4(){
    return`from django.urls import path
from .views import testing
   
urlpatterns = [
    path('', testing , name='testing'),
]`
}