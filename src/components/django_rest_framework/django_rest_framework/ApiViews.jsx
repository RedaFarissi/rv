import { CodeCommand , CodeHighlighter} from "../../path";
import images from "../imagesDjangoRest"

export default function ApiViews(props){

   return(
   <>
      <h1 className="heading-style heading-style-python-color">Django Rest Framework APIView </h1>
      <article className="mt-5">   
         <h2 className="title-h2" id="What_is_APIView">1 -  ما هو APIView </h2>
         <p className="style_divv">
            <b>APIView</b> عبارة عن فئة <b>(class)</b> مقدمة من <b>Django REST Framework</b> والتي تم تصميمها للتعامل مع أساليب <b>HTTP</b> (<b>GET، POST، PUT، DELETE</b>، وما إلى ذلك) لعروض <b>API</b> الخاصة بك.
            <CodeHighlighter  code={`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class Home(APIView):
    def get(self, request, *args, **kwargs):
        # Your GET logic here
        return Response({"message": "This is a GET request"})

    def post(self, request, *args, **kwargs):
        # Your POST logic here
        return Response({"message": "This is a POST request"})

    def put(self, request, *args, **kwargs):
        # Your PUT logic here
        return Response({"message": "This is a PUT request"})

    def delete(self, request, *args, **kwargs):
        # Your DELETE logic here
        return Response({"message": "This is a DELETE request"})`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            <ul>
               <li>تتعامل طريقة <b>get</b> مع طلبات <b>GET</b>.</li>
               <li>تتعامل طريقة <b>post</b> مع طلبات <b>POST</b>.</li>
               <li>يعالج الأسلوب <b>put</b> طلبات <b>PUT</b>.</li>
               <li>يعالج أسلوب <b>delete</b> طلبات <b>Delete</b>.</li>
            </ul>
         </p>
         <h2 className="title-h2" id="post">2 - post </h2>
         <div className="mital"> متال : </div>
         <ul>
            <li>إنشاء التطبيق <b>app</b> </li>
            <li>في هذا المثال نقوم بإنشاء مثال حول <b>POST</b> و <b>GET</b></li>
         </ul>
         <CodeCommand>python manage.py startapp app</CodeCommand>
         <CodeHighlighter  code={`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',           # install django rest framework
    'app.apps.AppConfig',   # new app 
]`} language="python" file_name="project_name / project_name / setting.py" addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter  code={`from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) ,
    path('app/', include('app.urls')),  # new path
]`} language="python" file_name="project_name / project_name / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from django.urls import path
from .views import AuthorCreateList

urlpatterns = [
    path('author/add/', AuthorCreateList.as_view(), name="author_create_list"),
]`} language="python" file_name="project_name / app / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveSmallIntegerField(default=2)
    def __str__(self):
        return self.name`} language="python" file_name="project_name / app / models.py" addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter  code={`from rest_framework import serializers
from .models import Author 

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"`} language="python" file_name="project_name / app / serializers.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer 
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class AuthorCreateList(APIView):
    def get(self, request):
        data = Author.objects.all()
        serializer = AuthorSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`} language="python" file_name="project_name / app / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeCommand>python manage.py makemigrations</CodeCommand>
         <CodeCommand>python manage.py migrate</CodeCommand>
         <img src={images.django_rest_13} alt="django rest" className="w-100" />
         <ul className="my-2"><li>عند النقر فوق زر <b>POST</b></li></ul>
         <img src={images.django_rest_14} alt="django rest" className="w-100 mb-2" />
         <CodeCommand>python manage.py shell</CodeCommand>
         <CodeCommand>
            {">>>"}from app.models import Author<br/>
            {">>>"} Author.objects.create(name="Name 2" , age="22") <br/>
            {"<"}Author: Name 2{">"}<br/>
            {">>>"} Author.objects.create(name="Name 3" , age="28") <br/>
            {"<"}Author: Name 3{">"}<br/>
         </CodeCommand>
         <img src={images.django_rest_15} alt="django rest" className="w-100 mb-2" />
         <h2 className="title-h2" id="get">3 - get </h2>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import AuthorCreateList , AuthorDetail # new

urlpatterns = [
    path('author/add/', AuthorCreateList.as_view(), name="author_create_list"),
    path('author/<int:pk>/', AuthorDetail.as_view(), name="author_detail"),  # new
]`} language="python" file_name="project_name / app / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`# ...
from django.shortcuts import get_object_or_404

# ...

class AuthorDetail(APIView):
    def get(self, request, pk):
        obj = get_object_or_404(Author, pk=pk)
        serializer = AuthorSerializer(obj)
        return Response(serializer.data)`} language="python" file_name="project_name / app / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_16} alt="django rest" className="w-100 mb-2" />
         <h2 className="title-h2" id="put">4 - put </h2>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import AuthorCreateList , AuthorDetail , AuthorUpdate # new

urlpatterns = [
    path('author/add/', AuthorCreateList.as_view(), name="author_create_list"),
    path('author/<int:pk>/', AuthorDetail.as_view(), name="author_detail"), 
    path('author/<int:pk>/update', AuthorUpdate.as_view(), name="author_update"),  # new
]`} language="python" file_name="project_name / app / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`# ...


class AuthorUpdate(APIView):
    def put(self, request, pk):
        try:
            author_instance = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response({"error": "Author not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = AuthorSerializer(author_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`} language="python" file_name="project_name / app / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_17} alt="django rest" className="w-100 " />
         <ul className="my-2"><li>عند النقر فوق زر <b>PUT</b></li></ul>
         <img src={images.django_rest_18} alt="django rest" className="w-100 mb-2" />
         <h2 className="title-h2" id="delete">5 - delete </h2>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`# ...

class AuthorUpdate(APIView): 
    def put(self, request, pk):
        try:
            author_instance = Author.objects.get(pk=pk)
        except Author.DoesNotExist:
            return Response({"error": "Author not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = AuthorSerializer(author_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        try:
            obj = Author.objects.get(pk=pk)
            obj.delete()
        except Author.DoesNotExist:
            return Response({"error": "Author not found"}, status=status.HTTP_404_NOT_FOUND)`} language="python" file_name="project_name / app / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_19} alt="django rest" className="w-100 mb-2" />

      </article>
   </>
   )
}