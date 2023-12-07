export default function index7get_absolute_url9(){
    return`from django.urls import path
from . import views

app_name = 'shop'

urlpatterns = [
    path('categories/', views.categories, name='categories'),
    path('category/<slug:slug>/', views.category_detail, name='category_detail'),
]`
}