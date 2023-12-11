export default function index10Django_Pagination3(){
    return `from django.shortcuts import render
from .models import Blog
from django.core.paginator import Paginator


def index_blog(request):
    blog_list = Blog.objects.all()  # Get all data from database.
    paginator = Paginator(blog_list, 2)  # Paginator with 2 items per page.

    page_number = request.GET.get('page')  # Paginator.
    page_obj = paginator.get_page(page_number)  # Paginator.

    return render(request, 'blogs.html', {'data': page_obj})`
}