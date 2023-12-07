export default function index7annotate3(){
    return`from django.contrib import admin
from django.urls import include, path

from django.conf import settings              
from django.conf.urls.static import static   

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('book.urls')),  #new
] 

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)   
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`
}