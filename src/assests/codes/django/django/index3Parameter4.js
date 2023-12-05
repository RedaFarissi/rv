export default function index3Parameter4(){
    return`from django.shortcuts import render
from .models import Author , Book

def author_books(request, author_id):
    author = Author.objects.get(id=author_id) 
    return render(request ,"author_books.html" , {"author_books": author.books.all() , "author_name": author.name})`
}