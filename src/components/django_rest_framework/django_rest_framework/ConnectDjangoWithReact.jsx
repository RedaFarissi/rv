import { CodeCommand , CodeHighlighter , Result } from "../../path";
import images from "../imagesDjangoRest"
import react_logo from "../../../assests/images/logo/react_logo.svg";

export default function ConnectDjangoWithReact(props){

   return(
   <>
      <h1 className="heading-style heading-style-python-color">Connect Django Rest Framework With React</h1>
      <article className="mt-5">
         <h2 className="title-h2"> 1 - قم بتوصيل إطار عمل Django Rest مع React </h2>
         <h3 className="title-h3">1 - إنشاء virtualenv </h3>
         <CodeCommand>python -m virtualenv env-project</CodeCommand>
         <h3 className="title-h3">2 - تفعيل Virtualenv </h3>
         <CodeCommand>.\\Scripts\activate</CodeCommand>
         <h3 className="title-h3">3 - تثبيت  django </h3>
         <CodeCommand>python -m pip install django</CodeCommand>
         <h3 className="title-h3">4 - إنشاء مشروع django </h3>
         <CodeCommand>python -m django startproject project_name</CodeCommand>
         <CodeCommand>cd project_name</CodeCommand>
         <h3 className="title-h3">5 - تثبيت React.js</h3>
         <CodeCommand>npx create-react-app front</CodeCommand>
         <h3 className="title-h3">6 - استخدم build في تطبيق React </h3>
         <CodeCommand>cd front</CodeCommand>
         <CodeCommand>npm run build</CodeCommand>
         <h3 className="title-h3">7 - العودة إلى المشروع django </h3>
         <CodeCommand>cd ..</CodeCommand>
         <h3 className="title-h3">8 - إضافة إلى ملف الإعدادات </h3>
         <CodeHighlighter code={`import os   #new
.
.
.
.

TEMPLATES = [
   {
      'BACKEND': 'django.template.backends.django.DjangoTemplates',
      'DIRS': [os.path.join(BASE_DIR, 'front', 'build')],     #new
      'APP_DIRS': True,
      'OPTIONS': {
         'context_processors': [
             'django.template.context_processors.debug',
             'django.template.context_processors.request',
             'django.contrib.auth.context_processors.auth',
             'django.contrib.messages.context_processors.messages',
         ],
      },
   },
]
.
.
.
.
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'front', 'build', 'static')]   #new`} file_name="project_name / project_name / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <h3 className="title-h3">9 - إنشاء التطبيق بالاسم app في المشروع</h3>
         <CodeCommand>python manage.py startapp app</CodeCommand>
         <CodeHighlighter code={`INSTALLED_APPS = [
   ...
   'app.apps.AppConfig', # new
]`} file_name="project_name / project_name / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.shortcuts import render

def front(request):
   return render(request, "index.html")`} file_name="project_name / app / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.contrib import admin
from django.urls import path
from app.views import front

urlpatterns = [
   path('admin/', admin.site.urls),
   path("", front , name="front"),
]`} file_name="project_name / project_name / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeCommand>python manage.py runserver</CodeCommand>
         <h3 className="title-h3">10 - تغيير React </h3>
         <p className="style_divv">
            لتحديت <b>React</b>، قم بإزالة المجلد <bdi><b>build/</b></bdi> من مجلد <b>React</b> وفي مجلد الدليل الخاص بك، استخدم :
         </p>
         <CodeCommand>npm run build</CodeCommand>
         <h3 className="title-h3">11 - تثبيت  Django rest framework</h3>
         <CodeCommand>pip install djangorestframework</CodeCommand>
         <CodeHighlighter code={`INSTALLED_APPS = [
   #...
   'rest_framework',   #new
]`} file_name="project_name / project_name / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <h3 className="title-h3">12 - تثبيت CORS headers </h3>
         <CodeCommand>pip install django-cors-headers </CodeCommand>
         <CodeHighlighter code={`INSTALLED_APPS = [
   #...
   'corsheaders',  #new
   #...
]
#...
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', #new
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
#...
# new
CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = ( 
    'http://localhost:8000', 
    'http://localhost:3000', 
)`} file_name="project_name / project_name / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <h3 className="title-h3">13 - إنشاء التطبيق بالاسم api  في المشروع  </h3>
         <CodeCommand>python manage.py startapp api</CodeCommand>
         <CodeHighlighter code={`INSTALLED_APPS = [
    ...
    'api.apps.ApiConfig', # new
]`} file_name="project_name / project_name / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include
from app.views import front

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front , name="front"),
    path('api/', include('api.urls')),    # new
]`} file_name="project_name / project_name / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveSmallIntegerField(default=2)
    def __str__(self):
        return self.name`} file_name="project_name / api / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from .views import AuthorView
from django.urls import path 

urlpatterns = [
    path("author-list/", AuthorView.as_view() , name="author_list"),
]`} file_name="project_name / api / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from rest_framework import serializers 
from .models import Author 

class AuthorSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Author
        fields = "__all__"`} file_name="project_name / api / serializers.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from .serializers import AuthorSerializer 
from .models import Author 
from rest_framework.generics import ListAPIView

class AuthorView(ListAPIView): 
    queryset = Author.objects.all() 
    serializer_class = AuthorSerializer`} file_name="project_name / api / views.py.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeCommand>python manage.py makemigrations</CodeCommand>
         <CodeCommand>python manage.py migrate</CodeCommand>
         <CodeCommand>python manage.py shell</CodeCommand>
         <CodeCommand>
            {">>>"} from api.models import Author <br/>
            {">>>"} <br/>
            {">>>"} Author.objects.create(name="Reda Eskouni" , age="28") <br/>
            {"<"}Author: Reda Eskouni{">"}<br/>
            {">>>"} Author.objects.create(name="author 2" , age="27") <br/>
            {"<"}Author: author 2{">"}<br/>
            {">>>"} Author.objects.create(name="author 3" , age="22") <br/>
            {"<"}Author: author 3{">"}<br/>
            {">>>"} Author.objects.create(name="author 4" , age="14") <br/>
            {"<"}Author: author 4{">"}<br/>
         </CodeCommand>
         <img src={images.django_rest_29} alt="django rest result" className="w-100 mb-2"/>
         <h2 className="title-h2"> 2 - احصل على البيانات من نقاط النهاية إلى React </h2>
         <CodeHighlighter code={`import axios from 'axios';
import { useState , useEffect} from 'react';

function App() {
    const [data,setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:8000/api/author-list/');
              setData(response.data);
          }catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
    },[]);


    return (
      <div className="App">
          { 
            data.map(item => 
              <ul key={item.id}>
                <li>ID: {item.id}</li>
                <li>Name: {item.name}</li>
                <li>Age: {item.age}</li>
              </ul>
            )
          }
      </div>
    );
}

export default App;`} file_name="project_name / front / src / App.js" language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <ul><li>ID: 1</li><li>Name: Reda Eskouni</li><li>Age: 28</li></ul><br/>
            <ul><li>ID: 2</li><li>Name: author 2</li><li>Age: 27</li></ul><br/>
            <ul><li>ID: 3</li><li>Name: author 3</li><li>Age: 22</li></ul><br/>
            <ul><li>ID: 4</li><li>Name: author 4</li><li>Age: 14</li></ul><br/>
        </Result>
      </article>
   </>
   )
}