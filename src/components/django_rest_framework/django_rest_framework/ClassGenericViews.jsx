import { CodeCommand , CodeHighlighter } from "../../path";
import images from "../imagesDjangoRest"

export default function ClassGenericViews(props){
   return(
   <>
      <h1 className="heading-style heading-style-python-color">DRF Generic Views  </h1>
      <article className="mt-5">
         <p className="style_divv">
            يوفر <b>Django Rest Framework</b> مجموعة من طرق العرض العامة القائمة على الفئة <b>(class)</b> والتي تعمل على تبسيط تطوير واجهات برمجة تطبيقات <b>RESTful</b> من خلال التعامل مع الأنماط والمهام الشائعة.<br/>
            فيما يلي تعريف لطرق العرض العامة :
         </p>
         <h2 className="title-h2" id="ListAPIView">1 - ListAPIView </h2>
         <p className="style_divv">
            <ul>
               <li>يسترد قائمة الكائنات.</li>
               <li>يستخدم طريقة <b>HTTP GET</b>.</li>
               <li>يشيع استخدامها لإدراج الموارد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>إنشاء التطبيق <b>app</b> </li></ul>
         <CodeCommand>python manage.py startapp app_test</CodeCommand>
         <ul><li>لنفترض أن لدينا <b>Python dictionary</b> يمثل بعض البيانات التي نريد إجراء تسلسل لها <b>(serialize)</b></li></ul>
         <CodeHighlighter  code={`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',       # install django rest framework
    'app_test.apps.AppTestConfig',   # new app 
]`} language="python" file_name="project_name / project_name / setting.py" addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter  code={`from django.contrib import admin
from django.urls import path , include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) ,
    path('app/', include('app_test.urls')),
]`} language="python" file_name="project_name / project_name / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveSmallIntegerField(default=2)
    
    def __str__(self):
        return self.name`} language="python" file_name="project_name / app_test / models.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from django.urls import path
from .views import AuthorListView

urlpatterns = [
    path('author/list/', AuthorListView.as_view(), name="author_list"),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from rest_framework import serializers
from .models import Author 

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = "__all__"`} language="python" file_name="project_name / app_test / serializers.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import ListAPIView

class AuthorListView(ListAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeCommand>python manage.py makemigrations</CodeCommand>
         <CodeCommand>python manage.py migrate</CodeCommand>
         <CodeCommand>python manage.py shell</CodeCommand>
         <CodeCommand>
            {">>>"} from app_test.models import Author<br/>
            {">>>"}<br/>
            {">>>"} Author.objects.create(name="Author 1", age="27")<br/>
            {"<"}Author: Author 1{">"}<br/>
            {">>>"} Author.objects.create(name="Author 2", age="33")<br/>
            {"<"}Author: Author 2{">"}<br/>
            {">>>"} Author.objects.create(name="Author 3", age="30")<br/>
            {"<"}Author: Author 3{">"}<br/>
            {">>>"} Author.objects.create(name="Author 4", age="22")<br/>
            {"<"}Author: Author 4{">"}<br/>
         </CodeCommand>
         <img src={images.django_rest_20} alt="django rest" className="w-100 mb-2" />
         <h2 className="title-h2" id="CreateAPIView">2 - CreateAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>ينشئ كائنًا جديدًا.</li>
               <li>يستخدم طريقة <b>HTTP POST</b>.</li>
               <li>يشيع استخدامها لإنشاء الموارد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import AuthorCreateView

urlpatterns = [
    path('author/create/', AuthorCreateView.as_view(), name="author_create"), # new
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import CreateAPIView


class AuthorCreateView(CreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_21} alt="django rest" className="w-100 mb-2" />

         <h2 className="title-h2" id="RetrieveAPIView">3 - RetrieveAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>يسترد كائنًا واحدًا بواسطة مفتاحه الأساسي.</li>
               <li>يستخدم طريقة <b>HTTP GET</b>.</li>
               <li>يشيع استخدامها للحصول على طرق عرض تفصيلية للمورد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import  AuthorRetrieveView

urlpatterns = [
    path('author/<int:pk>/', AuthorRetrieveView.as_view(), name="retrieve"),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import RetrieveAPIView


class AuthorRetrieveView(RetrieveAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_22} alt="django rest" className="w-100 mb-2" />
         
         <h2 className="title-h2" id="UpdateAPIView">4 - UpdateAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>يقوم بتحديث كائن واحد بواسطة مفتاحه الأساسي.</li>
               <li>يستخدم طريقة <b>HTTP PUT</b>.</li>
               <li>يشيع استخدامها لتحديث الموارد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import  AuthorUpdateView

urlpatterns = [
    path('author/<int:pk>/', AuthorUpdateView.as_view(), name="author_update"),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import UpdateAPIView


class AuthorUpdateView(UpdateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_23} alt="django rest" className="w-100 mb-2" />

         <h2 className="title-h2" id="DestroyAPIView">5 - DestroyAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>حذف كائن واحد بواسطة مفتاحه الأساسي.</li>
               <li>يستخدم طريقة <b>HTTP DELETE</b>.</li>
               <li>يشيع استخدامها لحذف مورد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import  AuthorDestroyView

urlpatterns = [
    path('author/<int:pk>/', AuthorDestroyView.as_view(), name="author_delete"),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import DestroyAPIView


class AuthorDestroyView(DestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_24} alt="django rest" className="w-100 mb-2" />

         <h2 className="title-h2" id="ListCreateAPIView">6 - ListCreateAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>يجمع بين <b>ListAPIView</b> و <b>CreateAPIView</b>.</li>
               <li>يدعم كلاً من سرد الكائنات وإنشاء كائنات جديدة.</li>
               <li>يكون ذلك مفيدًا عندما تريد توفير طريقة عرض تعالج عمليات القراءة والكتابة.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import  AuthorListCreateView

urlpatterns = [
    path('list-create/', AuthorListCreateView.as_view(), name="author_list_create"),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import ListCreateAPIView


class AuthorListCreateView(ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_25} alt="django rest" className="w-100 mb-2" />

         <h2 className="title-h2" id="RetrieveUpdateAPIView">7 - RetrieveUpdateAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>يجمع بين <b>RetrieveAPIView</b> و <b>UpdateAPIView</b>.</li>
               <li>يدعم استرداد كائن واحد وتحديثه.</li>
               <li>يكون ذلك مفيدًا عندما تريد توفير طريقة عرض للاسترجاع التفصيلي وتحديث المورد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import  AuthorRetrieveUpdateView

urlpatterns = [
    path('author/<int:pk>/', AuthorRetrieveUpdateView.as_view(), name="author_update_retrieve"),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import RetrieveUpdateAPIView


class AuthorRetrieveUpdateView(RetrieveUpdateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_26} alt="django rest" className="w-100 mb-2" />

         <h2 className="title-h2" id="RetrieveDestroyAPIView">8 - RetrieveDestroyAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>يجمع بين <b>RetrieveAPIView</b> و <b>DestroyAPIView</b>.</li>
               <li>يدعم استرداد كائن واحد وحذفه.</li>
               <li>يكون ذلك مفيدًا عندما تريد توفير طريقة عرض لكل من الاسترداد التفصيلي وحذف المورد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import  AuthorRetrieveDestroyView

urlpatterns = [
    path('author/<int:pk>/', AuthorRetrieveDestroyView.as_view()),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import RetrieveDestroyAPIView


class AuthorRetrieveDestroyView(RetrieveDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_27} alt="django rest" className="w-100 mb-2" />

         <h2 className="title-h2" id="RetrieveUpdateDestroyAPIView">9 - RetrieveUpdateDestroyAPIView</h2>
         <p className="style_divv">
            <ul>
               <li>يجمع بين <b>RetrieveAPIView</b> و <b>UpdateAPIView</b> و <b>DestroyAPIView</b>.</li>
               <li>يدعم الاسترجاع التفصيلي والتحديث والحذف لكائن واحد.</li>
               <li>يكون هذا مفيدًا عندما تريد توفير طريقة عرض لعمليات CRUD الكاملة على أحد الموارد.</li>
            </ul>
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في نفس التطبيق <b>app_test</b> في المتال أعلاه قم بتحديت :</li></ul>
         <CodeHighlighter  code={`from django.urls import path
from .views import  AuthorRUDView

urlpatterns = [
    path('author/<int:pk>/', AuthorRUDView.as_view()),
]`} language="python" file_name="project_name / app_test / urls.py" addclassName="mt-3 mb-3" copie={true}/>        
         <CodeHighlighter  code={`from .models import Author
from .serializers import AuthorSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView

class AuthorRUDView(RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer`} language="python" file_name="project_name / app_test / views.py" addclassName="mt-3 mb-3" copie={true}/>        
         <img src={images.django_rest_28} alt="django rest" className="w-100 mb-2" />

      </article>
   </>
   )
}