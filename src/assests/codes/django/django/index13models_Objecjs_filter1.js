export default function index13models_Objecjs_filter1(){
    return `from django.contrib import admin
from django.urls import include, path

from django.conf import settings              
from django.conf.urls.static import static   



urlpatterns = [
    path('accounts/', include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
    path('', include('book.urls')),  
    path('handle-account/', include('handleAccount.urls')),   
    path('email-test/', include('sendEmail.urls')),  
    path('blog/', include('blog.urls')),   
    path('testing/', include('testing.urls')),   
    path('app/', include('app.urls')),   
    path('product/', include('product.urls')),   #new route
] 

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)   
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`
}