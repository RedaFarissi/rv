import { CodeCommand , CodeHighlighter } from "../../path";
import images from "../imagesDjangoRest"

export default function Serializers(props){

   return(
   <>
      <h1 className="heading-style heading-style-python-color">Django Rest Framework Serializers </h1>
      <article className="mt-5">
            <h2 className="title-h2" id="What_is_Serializer"> 1 -  ما هو serializer </h2>
            <p className="style_divv">
                في <b>Django</b>، يعد المُسلسل <b>(serializer)</b> مكونًا يحول أنواع البيانات المعقدة مثل <b>QuerySets</b> ومثيلات النموذج إلى أنواع بيانات <b>Python</b> الأصلية التي يمكن تقديمها بسهولة إلى <b>JSON</b> أو <b>XML</b> أو أنواع محتوى أخرى.<br/><br/>
                تعد <b>serializers</b> جزءًا حيويًا من إطار عمل الويب الخاص بـ <b>Django</b>، لأنها تتيح للمطورين إنشاء واجهات برمجة التطبيقات (APIs) التي يمكنها التواصل مع التطبيقات أو الخدمات الأخرى بسهولة. يأتي <b>Django</b> مزودًا بوحدة <b>serializer</b> مدمجة تسمى <bdi><b>django.core.serializers</b></bdi>، ولكن يمكن للمطورين أيضًا إنشاء مُسلسلات مخصصة باستخدام <b>REST Framework</b> من <b>Django</b>.<br/><br/>
                تتضمن بعض الميزات والفوائد الرئيسية للمتسلسلات في <b>Django</b> ما يلي :
                <ul>
                    <li>تبسيط عملية تحويل أنواع البيانات المعقدة إلى أنواع بيانات <b>Python</b> أصلية أبسط يمكن تقديمها إلى تنسيقات مختلفة.</li>
                    <li>توفير طريقة سهلة للتحقق من صحة البيانات الواردة من الطلبات وإلغاء تسلسلها.</li>
                    <li>تمكين المطورين من تخصيص كيفية تسلسل البيانات وإلغاء تسلسلها باستخدام الحقول والأدوات وأدوات التحقق من الصحة.</li>
                    <li>دعم تسلسل الكائنات المتداخلة والعلاقات المعقدة بين الكائنات.</li>
                    <li>السماح بإنشاء واجهات برمجة التطبيقات التي يمكن أن تستهلكها التطبيقات أو الخدمات الأخرى بسهولة.</li>
                </ul>
            </p>
            <br id="Serializers_not_specific_for_models"/>
            <h2 className="title-h2"> 2 - لا ترتبط المُسلسلات (Serializers) بأي  محدد (model)</h2>
            <p className="style_divv">
                لا ترتبط <b>Serializers</b> بأي نموذج محدد، ويمكن استخدامها <b>serialize</b> و <b>deserialize</b> مع أي بيانات تريد إرسالها عبر واجهة برمجة التطبيقات.<br/>
                في بعض الأحيان قد نرغب في إجراء تسلسل للبيانات في ملف <b>JSON</b> أو أي نوع آخر دون دفعها فعليًا إلى قاعدة بيانات أو إجراء أي تعديلات على البيانات.
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
    path('', views.home, name='home'),
]`} language="python" file_name="project_name / app / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
            <CodeHighlighter  code={`from rest_framework import serializers

class MySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    age = serializers.IntegerField()`} language="python" file_name="project_name / app / serializers.py" addclassName="mt-3 mb-3" copie={true}/>        
            <CodeHighlighter  code={`from .serializers import MySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def home(request):
    data = {
        'name': "Reda Eskouni",
        'email': "redaeskouni@gmail.com",
        'age': 28
    }
    serializer = MySerializer(data=data)
    if serializer.is_valid():
        return Response({"message": serializer.data})
    else:
        return Response({"message": "serializer is not valid"})`} language="python" file_name="project_name / app / views.py" addclassName="mt-3 mb-3" copie={true}/>        
            <img src={images.django_rest_2} alt="django rest" className="w-100 mb-2" />
            
            
            <br id="Serializers_and_model" />
            <h2 className="title-h2"> 3 - Serializers والنموذج (التحقق من صحة Serializers). </h2>
            <p className="style_divv">
                عند استخدام المُسلسلات <b>(serializers)</b> مع النموذج <b>(models)</b> ، يتم عادةً إنشاء <b>serializer</b> بالرجوع إلى فئة نموذج معينة <b>(model class)</b> ، والتي تحدد الحقول والعلاقات التي سيتم إجراء تسلسل لها.<br/>
                تتيح لنا <b>Serializers</b> إجراء عمليات مختلفة على البيانات مثل التحقق من الصحة وإلغاء التسلسل والتسلسل . يتم التحقق من صحة البيانات التي تم تمريرها إلى <b>serializer</b> مقابل الحقول المحددة في <b>serializer</b>. إذا نجحت البيانات في التحقق من صحتها، فيمكن لـ <b>serializer</b> إنشاء مثيل جديد للنموذج وحفظه في قاعدة البيانات.<br/><br/>
                تساعد <b>serializers</b> مع <b>models</b> على إدارة معالجة البيانات والتحقق من صحتها، مما يسهل تحويل أنواع البيانات المعقدة إلى أنواع أبسط لاستخدامها في تطبيقات أو أنظمة مختلفة.<br/>
            </p>
            <div className="mital"> متال 1 : </div>
            <ul><li>إنشاء التطبيق <b>book</b> </li></ul>
            <CodeCommand>python manage.py startapp book</CodeCommand>
            <ul><li>لنفترض أن لدينا <b>Python dictionary</b> يمثل بعض البيانات التي نريد إجراء تسلسل لها <b>(serialize)</b></li></ul>
            <CodeHighlighter  code={`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',           # install django rest framework
    'app.apps.AppConfig',       
    'book.apps.BookConfig',     # new app
]`} language="python" file_name="project_name / project_name / setting.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) ,
    path('app/', include('app.urls')),
    path('book/', include('book.urls')),    #new path
]`} language="python" file_name="project_name / project_name / urls.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.urls import path
from . import views
   
urlpatterns = [
    path('', views.book, name='home'),
]`} language="python" file_name="project_name / book / urls.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    published_date = models.DateField()
    isbn_number = models.CharField(max_length=13, unique=True)
    description = models.TextField()
    
    def __str__(self):
        return self.title`} language="python" file_name="project_name / book / models.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
`} language="python" file_name="project_name / book / serializers.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from .serializers import BookSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['POST','GET'])
def book(request):
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data , status=status.HTTP_201_CREATED)
    return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)`} language="python" file_name="project_name / book / views.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <img src={images.django_rest_3} alt="django rest" className="w-100" />
            <ul className="my-3"><li> عند النقر فوق زر <b>POST</b> </li></ul>
            <img src={images.django_rest_4} alt="django rest" className="w-100" />
            <div className="mital mt-2"> متال 2 : </div>
            <ul><li>احتفظ بكل الملفات في المثال 1، فقط قم بتغيير ملف <b>views.py</b> إلى:</li></ul>
            <CodeHighlighter  code={`from .serializers import BookSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Book   # add this 

@api_view(['POST','GET'])
def book(request):
    if request.method == 'POST':     # check for request is POST
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status=status.HTTP_201_CREATED)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)
    elif  request.method == 'GET':   
        books = Book.objects.all()   #  return all objects book
        serializer = BookSerializer(books , many=True).data    # return data to JSON
        return Response(serializer , status=status.HTTP_200_OK)`} language="python" file_name="project_name / book / views.py" addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django_rest_5} alt="django rest" className="w-100 mb-2" />

            <br id="Serializers_validation" />
            <h2 className="title-h2"> 4 -  </h2>
           
        </article>
   </>
   )
}