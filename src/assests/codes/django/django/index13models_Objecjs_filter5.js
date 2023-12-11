export default function index13models_Objecjs_filter5(){
    return `from django.shortcuts import render , get_object_or_404 
from .models import Category , Product

def product_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    products = Product.objects.filter(available=True) # filter just row with available=True
 
    if category_slug:   # if category_slug not equal None
        category = get_object_or_404(Category, slug=category_slug) 
        products = products.filter(category=category) # filter just product with spesific category
    
    return render(request, 'product_list.html', {
        'category': category,
        'categories': categories,
        'products': products,
    })`
}