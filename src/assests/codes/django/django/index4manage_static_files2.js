export default function index4manage_static_files2(){
    return`..
from django.conf import settings              
from django.conf.urls.static import static  

urlpatterns = [
    path('admin/', admin.site.urls),                
    ...  
] 

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)  
`
}