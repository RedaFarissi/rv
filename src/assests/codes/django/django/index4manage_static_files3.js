export default function index4manage_static_files3(){
    return`from django.contrib import admin
from django.urls import include, path

from django.conf import settings               #new add
from django.conf.urls.static import static   #new add

urlpatterns = [
    path('admin/', admin.site.urls),                  # page admine route 
    path('helloapp/', include('helloapp.urls')),  # my app 
] 

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)   #new add
`
}