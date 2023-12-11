export default function index13models_Objecjs_filter2(){
    return `from django.urls import path
from .views import product_list

urlpatterns = [
    path('products/', product_list, name='product_list'),
    path('products/<slug:category_slug>/', product_list, name='product_list_by_category'),
]`
}