export default function index11Form3(){
    return `from django.urls import path
from .views import my_form_view

urlpatterns = [
    path('', my_form_view , name="my_form_view"),
]`
}