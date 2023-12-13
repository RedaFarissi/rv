export default function index14Session1(){
    return `from django.urls import path
from . import views

urlpatterns = [
  path('', views.home_view, name='home'),
]`
}