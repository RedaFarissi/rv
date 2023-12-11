export default function index13row_filter(){
    return `from django.shortcuts import render , get_object_or_404 
from .models import Category , Product

def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.raw(" SELECT * FROM product_product WHERE  available=True ")
 
    if category_slug:  
        category = get_object_or_404(Category, slug=category_slug)
        products = Product.objects.raw("""
            SELECT * 
            FROM product_product 
            WHERE available=True 
            AND category_id=%s
        """,[category.id])
    return render(request, 'product_list.html', {
        'category': category,
        'categories': categories,
        'products': products,
    })`
}