export default function index15Context_Processors2(){
    return `from django.urls import path
from . import views

urlpatterns = [
    #...
    path('request_products_to_test/', views.request_products_to_test, name='request_products_to_test'),
]`
}