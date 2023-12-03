export default function index2urls(){
    return `from django.urls import path
from . import views
   
urlpatterns = [
    path('home/', views.home, name='home'),
    path('articles/', views.show_all_articles, name='articles') ,
    path('article/<int:article_id>/', views.show_article, name='article') ,
    #path('route/', views.function_name, name='route_name'),
]`
}