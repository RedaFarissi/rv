export default function index4Media_files6(){
    return `from django.urls import path
from .views import list_products
   
urlpatterns = [
    path('', list_products , name='list_products'),
]`
}