import { CodeCommand , CodeHighlighter } from "../../path";
import images from "../imagesDjangoRest"

export default function Serializers(props){

   return(
   <>
      <h1 className="heading-style heading-style-python-color">DRF Serializers </h1>
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
            <h2 className="title-h2"> 4 - التحقق من صحة التسلسل (Serializers validation)</h2>
            <p className="style_divv">
                يعد التحقق من الصحة في المُسلسلات <b>(serializers)</b> أمرًا مهمًا للتأكد من أن البيانات التي يتم إدخالها أو إخراجها تلتزم بقيود ومتطلبات معينة. يوفر <b>Django</b> طريقة لإجراء التحقق من صحة حقول المُسلسل باستخدام الدوال على صيغة <bdi><b>validate_{"<"}field_name{">"}</b></bdi>.
            </p>
            <div className="mital">متال : </div>
            <ul><li>إنشاء التطبيق <b>myApp</b> </li></ul>
            <CodeCommand>python manage.py startapp myApp</CodeCommand>
            <CodeHighlighter  code={`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',           # install django rest framework
    'app.apps.AppConfig',       
    'book.apps.BookConfig',     
    'myApp.apps.MyappConfig',     # new app
]`} language="python" file_name="project_name / project_name / setting.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) ,
    path('app/', include('app.urls')),
    path('book/', include('book.urls')),    
    path('my-app/', include('myApp.urls')),    #new path
]`} language="python" file_name="project_name / project_name / urls.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.urls import path
from . import views
   
urlpatterns = [
    path('', views.create_book, name='my_app_test'),
]`} language="python" file_name="project_name / myApp / urls.py" addclassName="mt-3 mb-3" copie={true}/>

            <CodeHighlighter  code={`from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    publication_year = models.PositiveIntegerField()`} language="python" file_name="project_name / myApp / models.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from .models import Book
from rest_framework import serializers
from datetime import datetime

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

    def validate_publication_year(self, value):
        # Get the current date and time
        current_datetime = datetime.now()
        # Extract the year from the datetime object
        current_year = current_datetime.year

        current_year += 1  # add 1 to current year

        if value > current_year:
            raise serializers.ValidationError("Publication year cannot be in the future")

        return value`} language="python" file_name="project_name / myApp / serializers.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer

@api_view(['POST'])
def create_book(request):
    if request.method == 'POST':
        serializer = BookSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`} language="python" file_name="project_name / myApp / views.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <h3 className="title-h3">نشر بيانات صالحة (POST valid data)</h3>
            <img src={images.django_rest_6} alt="django rest" className="w-100" />
            <ul className="my-3"><li> عند النقر فوق زر <b>POST</b> </li></ul>
            <img src={images.django_rest_7} alt="django rest" className="w-100" />
            <h3 className="title-h3">حاول نشر بيانات غير صالحة (Try to POST invalid data)</h3>
            <img src={images.django_rest_8} alt="django rest" className="w-100" />
            <ul className="my-3"><li> عند النقر فوق زر <b>POST</b> </li></ul>
            <img src={images.django_rest_9} alt="django rest" className="w-100 mb-2" />

            <br id="Serializers_and_related_name"/>
            <h2 className="title-h2" > 5 - المسلسلات والأسماء ذات الصلة (Serializers and related_name)</h2>
            <p className="style_divv">
                عندما تقوم بتعريف <b>ExternalKey</b>، يقوم <b>Django</b> تلقائيًا بإنشاء علاقة عكسية على النموذج ذي الصلة. تتيح لك السمة ذات الصلة تحديد اسم هذه العلاقة العكسية.
            </p>           
            <div className="mital">متال : </div>
            <ul><li>إنشاء التطبيق <b>myApp</b> </li></ul>
            <CodeCommand>python manage.py startapp new_app</CodeCommand>
            <CodeHighlighter  code={`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',  
    'app.apps.AppConfig',
    'book.apps.BookConfig',   
    'myApp.apps.MyappConfig',     
    'new_app.apps.NewAppConfig',     # new app
]
`} language="python" file_name="project_name / project_name / setting.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) ,
    path('app/', include('app.urls')),
    path('book/', include('book.urls')),
    path('my-app/', include('myApp.urls')),    
    path('new_app/', include('new_app.urls')),    #new path   
]`} language="python" file_name="project_name / project_name / urls.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.urls import path
from . import views
   
urlpatterns = [
    path('', views.author_list, name='author_list'),
]`} language="python" file_name="project_name / new_app / urls.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from django.db import models

class Author(models.Model):
    class Choices(models.TextChoices):
        ONE = '1'
        TWO = '2'
        THREE = '3'
        
    name = models.CharField(max_length=100)
    age = models.PositiveSmallIntegerField(default=2)
    start_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')

    def __str__(self):
        return f"{self.title} by {self.author}"`} language="python" file_name="project_name / new_app / models.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from rest_framework import serializers
from .models import Book, Author


class BookSerializer(serializers.ModelSerializer):
  class Meta:
    model = Book
    fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Author
    fields = ("pk", "name", "books", "start_date")`} language="python" file_name="project_name / new_app / serializers.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter  code={`from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Author
from .serializers import AuthorSerializer

@api_view(['GET'])
def author_list(request):
    authors = Author.objects.all()
    serializer = AuthorSerializer(authors , many=True).data
    return Response(serializer , status=status.HTTP_200_OK)`} language="python" file_name="project_name / new_app / views.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand> 
                {">>>"} from new_app.models import Author, Book<br/>
                {">>>"}<br/>
                {">>>"} <span style={{color:"green"}}># Create two authors</span><br/>
                {">>>"} author1 = Author.objects.create(name='Author 1', age=30, start_date='2022-01-01')<br/>
                {">>>"} author2 = Author.objects.create(name='Author 2', age=25, start_date='2023-09-01')<br/>
                {">>>"}<br/>
                {">>>"} <span style={{color:"green"}}># Create two books for each author</span><br/>
                {">>>"} book1_author1 = Book.objects.create(title='Book 1 by Author 1', author=author1)<br/>
                {">>>"} book2_author1 = Book.objects.create(title='Book 2 by Author 1', author=author1)<br/>
                {">>>"}<br/>
                {">>>"} book1_author2 = Book.objects.create(title='Book 1 by Author 2', author=author2)<br/>
                {">>>"} book2_author2 = Book.objects.create(title='Book 2 by Author 2', author=author2)<br/>
            </CodeCommand>
            <img src={images.django_rest_10} alt="django rest" className="w-100 mb-2" />

        </article>
   </>
   )
}