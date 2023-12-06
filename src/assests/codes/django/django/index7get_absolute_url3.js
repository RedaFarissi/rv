export default function index7get_absolute_url3(){
    return`from django.shortcuts import render, get_object_or_404
from .models import Book

def home_view(request):
    books = Book.objects.all()
    return render(request, 'index.html', {'all': books})

def home_detail(request, slug):
    book = get_object_or_404(Book, slug=slug)
    return render(request, 'home_detail.html', {'book': book})`
}