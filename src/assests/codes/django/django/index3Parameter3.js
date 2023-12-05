export default function index3Parameter3(){
    return`from django.urls import path
from .views import author_books
   
urlpatterns = [
    path('authors/<int:author_id>/books/', author_books , name='book_list'),
]`
}