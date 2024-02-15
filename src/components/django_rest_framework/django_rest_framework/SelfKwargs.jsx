import images from "../imagesDjangoRest"
import { CodeCommand , CodeHighlighter } from "../../path";

export default function SelfKwargs(){

   return(
<>
   <h1 className="heading-style">DRF self-kwargs </h1>
   <article className="mt-5">
         <h2 className="title-h2" id="Why_we_use_self-kwargs">1 - لماذا نستخدم self.kwargs </h2>
         <p className="style_divv">
            <b>self.kwargs</b> عبارة عن كائن يشبه القاموس يحتوي على وسائط الكلمات الرئيسية التي تم التقاطها من عنوان <b>URL</b> بواسطة نظام توجيه <b>URL</b> الخاص بـ <b>Django</b>.<br/><br/>
            عند تحديد نمط عنوان <b>URL</b> في ملف <b>urls.py</b>، يمكنك استخدام الأقواس الزاوية <b>({"<"}type:name{">"})</b> لالتقاط القيم من عنوان <b>URL</b> وتمريرها إلى وظائف العرض الخاصة بك كوسيطات للكلمات الرئيسية. على سبيل المثال، نمط عنوان <b>URL</b> مثل <kbd  className="text-danger fs-5">path('books/{"<"}int:pk{">"}/', views.BookDetailView.as_view())</kbd> يلتقط قيمة عددية (المفتاح الأساسي للكتاب) ويمررها إلى عرض <b>BookDetailView</b> ككلمة رئيسية حجة تسمى <b>pk</b><br/><br/>
            <b>self.kwargs</b> خاص ب <b>class-based views</b> في <b>Django</b>. إنها طريقة للوصول إلى وسيطات الكلمات الرئيسية التي تم تمريرها إلى العرض ضمن أساليب الفصل. في طرق العرض المستندة إلى الوظيفة، يمكنك الوصول مباشرة إلى المعلمات من معلمات الوظيفة.<br/>
         </p>
         <h2 className="title-h2" id="get_URL_param_from_function">2 - احصل على المعلمة (param) من URL في الوظيفة (function) </h2>
         <p className="style_divv">
            عندما نستخدم الوظيفة <b>(function)</b> نحصل على المعلمة في الوظيفة من عنوان <b>URL</b> المباشر دون استخدام <b>self.kwargs</b>
         </p>
         <div className="mital"> متال : </div>
            <ul><li>إنشاء التطبيق <b>app</b> </li></ul>
            <CodeCommand>python manage.py startapp app</CodeCommand>
            <ul><li>لنفترض أن لدينا <b>Python dictionary</b> يمثل بعض البيانات التي نريد إجراء تسلسل لها <b>(serialize)</b></li></ul>
            <CodeHighlighter  code={`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',       # install django rest framework
    'app.apps.AppConfig',   # new app 
]`} language="python" file_name="project_name / project_name / setting.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) ,
    path('app/', include('app.urls')),     # new path 
]`} language="python" file_name="project_name / project_name / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
            <CodeHighlighter  code={`from django.urls import path
from . import views
   
urlpatterns = [
    path('<str:name>/<int:age>/', views.home, name='home'),
]`} language="python" file_name="project_name / app / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
            <CodeHighlighter  code={`from rest_framework import serializers

class MySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()`} language="python" file_name="project_name / app / serializers.py" addclassName="mt-3 mb-3" copie={true}/>        
            <CodeHighlighter  code={`from .serializers import MySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def home(request, name, age):
    data = {
        'name': name,
        'age': age
    }
    
    serializer = MySerializer(data=data)
    if serializer.is_valid():
        return Response({"message": serializer.data})
    else:
        return Response({"message": "serializer is not valid"})`} language="python" file_name="project_name / app / views.py" addclassName="mt-3 mb-3" copie={true}/>
         <img src={images.django_rest_11} alt="django rest" className="w-100 mb-2" />
         <h2 className="title-h2" id="get_URL_param_from_class">3 - احصل على المعلمة (param) من URL في الفئة (class)  </h2>
         <p className="style_divv">
            عندما نستخدم الفصل <b>(class)</b> نحصل على المعلمة في الوظيفة من <b>URL</b> باستخدام <b>self.kwargs</b>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في المثال العلوي قم بتغيير وظيفة المشاهدات من طريقة <b>(function)</b> إلى فئة <b>(class)</b></li></ul>
         <CodeHighlighter  code={`from .serializers import MySerializer
from rest_framework.response import Response
from rest_framework import generics

class Home(generics.ListAPIView):
    serializer_class = MySerializer
    
    def get(self , request, *args, **kwargs):
        name = self.kwargs['name']
        age = self.kwargs['age']
        return Response({"message": {'name':name , 'age':age} })`} language="python" file_name="project_name / app / views.py" addclassName="mt-3 mb-3" copie={true}/>
         <img src={images.django_rest_12} alt="django rest" className="w-100 mb-2" />
   </article>
</>
   )
}