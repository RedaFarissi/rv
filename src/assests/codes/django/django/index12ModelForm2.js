export default function index12ModelForm2(){
    return `from django.urls import path
from .views import create_post, post_list

urlpatterns = [
    path('create/', create_post, name='create_post'),
    path('posts/', post_list, name='post_list'),
    # Add more URL patterns as needed
]`
}