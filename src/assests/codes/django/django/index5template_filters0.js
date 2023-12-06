export default function index5template_filters0(){
    return`from django.shortcuts import render
from .models import Product

def created_updated(request):
    products = Product.objects.values('created', 'updated')
    return render(request , "created_updated.html" , {'created_updated': list(products)})
`
}