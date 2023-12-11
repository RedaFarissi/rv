export default function index10Django_Pagination2(){
    return `from django.urls import path
from .views import index_blog

urlpatterns = [
    path('', index_blog, name="index_blog"),
]`
}