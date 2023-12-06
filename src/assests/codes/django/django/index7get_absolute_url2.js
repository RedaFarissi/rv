export default function index7get_absolute_url2(){
    return`from django.urls import path
from . import views
 
urlpatterns = [
    path('', views.home_view, name='home'),
    path('<slug:slug>/', views.home_detail, name='home_detail'),
]`
}