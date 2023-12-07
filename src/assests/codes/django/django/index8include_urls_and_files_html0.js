export default function index8include_urls_and_files_html0(){
    return `from django.contrib import admin
from django.urls import include, path

from django.conf import settings              
from django.conf.urls.static import static   



urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),  #new
    path('admin/', admin.site.urls),
    path('', include('book.urls')),   #app book in my project
] 

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)   
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`
}