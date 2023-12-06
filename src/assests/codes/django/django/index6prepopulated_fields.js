export default function index6prepopulated_fields(){
    return `from django.contrib import admin
from .models import Category
 
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = { 'slug': ('name',)}

admin.site.register(Category, CategoryAdmin)`
}