export default function index7annotate5(){
    return`from django.shortcuts import render
from django.db.models import Count, Sum, Avg
from .models import Author , Book

def testing(request):
    # Count the number of books for each author
    authors_book_count = Author.objects.annotate(count_books=Count('book'))

    # Sum the number of pages for each author's books
    authors_page_sum = Author.objects.annotate(page_sum=Sum('book__number_page'))

    # Calculate the average number of pages for each author's books
    authors_page_avg = Author.objects.annotate(page_avg=Avg('book__number_page'))

    context = {
        'books': Book.objects.all(),    # all books 
        'authors': authors_book_count,
        'authors_page_sum': authors_page_sum,
        'authors_page_avg': authors_page_avg,
    }
    return render(request, 'testing.html', context)`
}