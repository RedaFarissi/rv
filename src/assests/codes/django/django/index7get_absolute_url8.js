export default function index7get_absolute_url8(){
    return`from django.contrib import admin
from django.urls import include, path

from django.conf import settings              
from django.conf.urls.static import static   



urlpatterns = [
    path('admin/', admin.site.urls),
    path('testing/', include('testing.urls')),  
    path('', include('shop.urls')),  #add route
] 

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)   
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`
}