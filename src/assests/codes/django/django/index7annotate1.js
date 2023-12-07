export default function index7annotate1(){
    return`from django.shortcuts import render, get_object_or_404, redirect
from .models import Product, Category, Like
from django.db.models import Count

def index(request, category_slug=None):
    #..

    # This will return all rows with available=True and create key total_likes in each product 
    products = Product.objects.filter(available=True).annotate(total_likes=Count('like'))

    content = {
        #...
        "products": products,
    }
    return render(request, "index.html", content)`
}