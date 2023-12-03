function index2includes_app_to_urlpatterns1(){
return `from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('helloapp.urls')),
    path('admin/', admin.site.urls),
] `
}
export default index2includes_app_to_urlpatterns1