export default function index6list_display(){
    return`from django.contrib import admin
from .models import Product
 
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'price', 'available', 'created', 'updated']

admin.site.register(Product, ProductAdmin)`
}