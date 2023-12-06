export default function index4Media_files3(){
    return `from django.contrib import admin
from django.urls import include, path

from django.conf import settings             
from django.conf.urls.static import static   



urlpatterns = [
    path('helloapp/', include('helloapp.urls')),
    path('admin/', admin.site.urls),
] 

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)   
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)    #new add`
}