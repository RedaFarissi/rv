import { CodeCommand , CodeHighlighter , Result , CodePowerShell } from "../../path";
import images from "../imagesDjangoRest"
import react_logo from "../../../assests/images/logo/react_logo.svg";
import { Link } from "react-router-dom";
import PowerShell_logo from "../../../assests/images/logo/PowerShell_logo.png";

export default function ConnectDjangoWithReact(props){

   return(
   <>
      <h1 className="heading-style"> DRF and React </h1>
      <article className="mt-5">
         <h2 className="title-h2" id="Connect_Django_with_React"> 1 - قم بتوصيل إطار عمل Django Rest مع React </h2>
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
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'front', 'build', 'static')]   #new`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <h3 className="title-h3">9 - إنشاء التطبيق بالاسم app في المشروع</h3>
         <CodeCommand>python manage.py startapp app</CodeCommand>
         <CodeHighlighter code={`INSTALLED_APPS = [
   ...
   'app.apps.AppConfig', # new
]`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.shortcuts import render

def front(request):
   return render(request, "index.html")`} file_name="project_name / app / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.contrib import admin
from django.urls import path 
from app.views import front   # new

urlpatterns = [
   path('admin/', admin.site.urls),
   path("", front , name="front"),   # new
]`} file_name="project_name / project_name / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
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
]`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include # add include
from app.views import front 

urlpatterns = [
   path('admin/', admin.site.urls),
   path('api-auth/', include('rest_framework.urls')) ,  #  new authenticate
   path("", front , name="front"),   
]`} file_name="project_name / project_name / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django_rest_38} alt="django_rest_38" className="w-100" />
            <h3 className="title-h5">1 -   مصادقة لوحة الإدارة path('admin/', admin.site.urls) </h3>
            <ul>
                <li>هذا هو نظام المصادقة الافتراضي للوحة إدارة Django.</li>
                <li>عند الوصول إلى /admin/، تحتاج إلى تسجيل الدخول باستخدام حساب المشرف (superuser) أو حساب الموظف (staff).</li>
                <li>يتم إدارة المصادقة باستخدام نظام المصادقة المدمج في Django (django.contrib.auth)</li>
                <li>يمكنك إنشاء حساب مشرف باستخدام الأمر التالي</li>
                <CodeCommand>python manage.py createsuperuser</CodeCommand>
                <li>بعد تسجيل الدخول، يمكنك إدارة النماذج والمستخدمين من خلال لوحة الإدارة</li>
            </ul>
            <h3 className="title-h5">2 - مصادقة واجهة برمجة التطبيقات (API)  path('api-auth/', include('rest_framework.urls'))   </h3>
            <ul>
                <li>يتم توفيرها بواسطة Django REST Framework (DRF).</li>
                <li>تُتيح للمستخدمين تسجيل الدخول والخروج عند استخدام الواجهة القابلة للتصفح (Browsable API).</li>
                <li>عند زيارة /api-auth/login/، ستجد نموذج تسجيل دخول مشابهًا لنموذج Django admin، لكنه مخصص لمصادقة طلبات API.</li>
                <li>يدعم المصادقة المستندة إلى الجلسات (Session Authentication) بشكل افتراضي.</li>
                <li>يجب تفعيل مصادقة الجلسة في settings.py </li>
            </ul>

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
)`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <h3 className="title-h3">13 - إنشاء التطبيق بالاسم api  في المشروع  </h3>
         <CodeCommand>python manage.py startapp api</CodeCommand>
         <CodeHighlighter code={`INSTALLED_APPS = [
    ...
    'api.apps.ApiConfig', # new
]`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include
from app.views import front

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) ,  # authenticate
    path("", front , name="front"),
    path('api/', include('api.urls')),    # new
]`} file_name="project_name / project_name / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveSmallIntegerField(default=2)
    def __str__(self):
        return self.name`} file_name="project_name / api / models.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from .views import AuthorView
from django.urls import path 

urlpatterns = [
    path("author-list/", AuthorView.as_view() , name="author_list"),
]`} file_name="project_name / api / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from rest_framework import serializers 
from .models import Author 

class AuthorSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Author
        fields = "__all__"`} file_name="project_name / api / serializers.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`from .serializers import AuthorSerializer 
from .models import Author 
from rest_framework.generics import ListAPIView

class AuthorView(ListAPIView): 
    queryset = Author.objects.all() 
    serializer_class = AuthorSerializer`} file_name="project_name / api / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
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
         
        <h3 className="title-h3"> 14 - إزالة path('api-auth/', include('rest_framework.urls')) </h3>
        <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include
from app.views import front

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front , name="front"),
    path('api/', include('api.urls')),    # new
]`} file_name="project_name / project_name / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django_rest_30} alt="django rest result" className="w-100 mb-2"/>     
        
        <h2 className="title-h2" id="Get_data_in_React"> 2 - احصل على البيانات من نقاط النهاية إلى React </h2>
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

export default App;`} file_name="project_name / front / src / App.js" language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <ul><li>ID: 1</li><li>Name: Reda Eskouni</li><li>Age: 28</li></ul><br/>
            <ul><li>ID: 2</li><li>Name: author 2</li><li>Age: 27</li></ul><br/>
            <ul><li>ID: 3</li><li>Name: author 3</li><li>Age: 22</li></ul><br/>
            <ul><li>ID: 4</li><li>Name: author 4</li><li>Age: 14</li></ul><br/>
        </Result>
        <div className="alert alert-danger">
            يمكن لأي شخص الحصول على البيانات وهذا ليس عمليا .<br/>
        </div>


        <h2 className="title-h2 mt-3" id="Permissions">3 - الصلاحيات (Permissions) </h2>
        <p className="style_divv"> 
           <b>Django Rest Framework (DRF)</b> يوفر طريقة مرنة وقوية لمعالجة الأذونات لعروض <b>API</b> الخاصة بك. تحدد الأذونات في <b>DRF</b> ما إذا كان لدى المستخدم الحقوق اللازمة لأداء إجراء معين على مورد. هناك العديد من الأذونات المدمجة، ويمكنك أيضًا إنشاء أذونات مخصصة لتناسب احتياجاتك الخاصة. 
        </p>
        <h3 className="title-h3">1 - إضافة إلى ملف الإعدادات (settings.py)</h3>
        <CodeHighlighter code={`REST_FRAMEWORK = { #new
    'DEFAULT_PERMISSION_CLASSES': [
       'rest_framework.permissions.IsAuthenticated', 
    ]
}`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django_rest_31} alt="django rest result" className="w-100 mb-2"/>     
        <h3 className="title-h3">2 - إضافة إلى ملف عناوين (urls.py) </h3>
        <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include
from app.views import front

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) , #new authenticate
    path("", front , name="front"),
    path('api/', include('api.urls')),
]`} file_name="project_name / project_name / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django_rest_32} alt="django rest result" className="w-100 mb-2"/>     
        <CodeCommand>python manage.py createsuperuser</CodeCommand>
        <img src={images.django_rest_33} alt="django rest result" className="w-100 mb-2"/>     
        <ul className="fs-4"><li>أي شخص يمتلك حساب يمكنه رؤية البيانات</li></ul>
        <h3 className="title-h3">3 - تحديد الصلاحيات </h3>
        <CodeHighlighter code={`from .serializers import AuthorSerializer 
from .models import Author 
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny  #new

class AuthorView(ListAPIView):
    permission_classes = (AllowAny ,)   #new
    queryset = Author.objects.all() 
    serializer_class = AuthorSerializer`} file_name="project_name / api / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django_rest_29} alt="django rest result" className="w-100 mb-2"/>     
        <h3 className="title-h3">4 - فئات الصلاحيات المضمنة </h3>
        <p className="style_divv">
            يوفر <b>Django</b> العديد من فئات الصلاحيات المضمنة التي يمكن استخدامها للتحكم في الوصول إلى طرق العرض ونقاط النهاية في <b>DRF</b>
            <ul>
                <li><b className="text-success">AllowAny :</b> السماح لأي شخص</li>
                <li><b className="text-success">IsAuthenticated :</b> المصادقة المطلوبة</li>
                <li><b className="text-success">IsAdminUser :</b> مستخدم المسؤول فقط</li>
                <li><b className="text-success">IsAuthenticatedOrReadOnly :</b> المصادقة المطلوبة أو القراءة فقط</li>
                <li><b className="text-success">IsOwnerOrReadOnly :</b> مالك العنصر فقط أو القراءة فقط</li>
                <li><b className="text-success">DjangoModelPermissions :</b> صلاحيات نموذج دجانجو</li>
                <li><b className="text-success">DjangoModelPermissionsOrAnonReadOnly :</b> صلاحيات نموذج دجانجو أو القراءة فقط للمستخدم المجهول</li>
                <li><b className="text-success">DjangoObjectPermissions :</b> صلاحيات الكائن دجانجو</li>
                <li><b className="text-success">DjangoObjectPermissionsBackend :</b> صلاحيات الكائن دجانجو من الخلفية</li>
                <li><b className="text-success">IsAdminUserOrReadOnly :</b> مستخدم المسؤول فقط أو القراءة فقط</li>
                <li><b className="text-success">IsAuthenticatedAndOwnerOrReadOnly :</b> المصادقة المطلوبة ومالك العنصر فقط أو القراءة فقط</li>
                <li><b className="text-success">TokenHasReadWriteScope :</b> الرمز المميز مطلوب للقراءة والكتابة</li>
                <li><b className="text-success">TokenHasScope :</b> الرمز المميز مطلوب للوصول</li>
                <li><b className="text-success">IsAuthenticatedOrTokenHasScope :</b> المصادقة المطلوبة أو الرمز المميز مطلوب للوصول</li>
            </ul>
        </p>
        <h2 className="title-h2" id="Authentication">4 - المصادقة (Authentication)</h2>
        <p className="style_divv">
           في واجهة برمجة تطبيقات <b>Django</b>. المصادقة هي عملية التحقق من هوية المستخدم ، وهو أمر مهم لتقييد الوصول إلى موارد أو وظائف معينة.<br/><br/>
           يتمثل أحد التحديات في مصادقة واجهة برمجة التطبيقات في أن <b>HTTP</b> بروتوكول عديم الحالة ، مما يعني أنه لا توجد طريقة مضمنة لتذكر ما إذا كان المستخدم قد تمت مصادقته من طلب إلى آخر. للتغلب على هذا التحدي ، يتم تمرير معرفات فريدة مع كل طلب <b>HTTP</b> للتحقق من هوية المستخدم.<br/><br/>
           يوفر إطار عمل <b>Django REST</b> العديد من خيارات المصادقة المضمنة ، مثل المصادقة الأساسية والمصادقة الرمزية ، وهناك أيضًا العديد من حزم الجهات الخارجية المتاحة ، مثل <b>JSON Web Tokens (JWTs)</b>.
           <ul>
              <li><b className="text-success">SessionAuthentication :</b> تستخدم لمصادقة الجلسة باستخدام الجلسة الافتراضية في <b>Django</b>.</li>
              <li><b className="text-success">TokenAuthentication :</b> تستخدم لمصادقة باستخدام الرموز.</li>
              <li><b className="text-success">BasicAuthentication :</b> تستخدم لمصادقة <b>HTTP</b> الأساسية.</li>
              <li><b className="text-success">JWTAuthentication :</b> تستخدم لمصادقة باستخدام رموز الويب <b>JSON</b>.</li>
           </ul>
           <br/><br/>
           المصادقة الأساسية هي طريقة مصادقة شائعة الاستخدام حيث يرسل العميل بيانات اعتماده في رأس التخويل لطلب <b>HTTP</b>. يتحقق الخادم من صحة بيانات الاعتماد ويستجيب وفقًا لذلك.<br/><br/>
           ومع ذلك ، تجدر الإشارة إلى أن المصادقة الأساسية ترسل بيانات الاعتماد بنص عادي ، وهو ما يمثل مخاطرة أمنية كبيرة. لذلك ، يجب استخدامه فقط عبر اتصال <b>HTTPS</b> آمن لمنع التنصت وهجمات الرجل في الوسط.<br/><br/>
           في هذا الفصل ، يستكشف المؤلف العديد من خيارات المصادقة وإيجابياتها وسلبياتها وكيفية تنفيذها في واجهة برمجة تطبيقات <b>Django</b>. يوفر المؤلف أيضًا نموذج التعليمات البرمجية لإنشاء نقاط نهاية <b>API</b> للتسجيل وتسجيل الدخول وتسجيل الخروج.<br/><br/>
        </p>
        <h3 className="title-h3">1 - مصادقة الجلسة (Session authentication)</h3>
        <p className="style_divv">
              هو نظام مصادقة شائع يستخدم في مواقع الويب المتجانسة مثل <b>Django</b> التقليدية. تتمثل الميزة الرئيسية لهذا الأسلوب في أنه أكثر أمانًا حيث يتم إرسال بيانات اعتماد المستخدم مرة واحدة فقط ، وليس في كل دورة طلب / استجابة كما هو الحال في المصادقة الأساسية. كما أنه أكثر كفاءة نظرًا لأن الخادم لا يتعين عليه التحقق من بيانات اعتماد المستخدم في كل مرة ، فهو يطابق فقط <b>session ID</b> مع <b>session object</b> الذي يعد بحثًا سريعًا.<br/><br/>
              ومع ذلك ، هناك أيضًا بعض الجوانب السلبية لمصادقة الجلسة. أولاً ، <u>يكون <b>Session authentication</b> صالحًا فقط داخل المتصفح</u> حيث تم إجراء تسجيل الدخول ولن يعمل عبر نطاقات متعددة. قد يكون هذا مشكلة عندما تحتاج واجهة برمجة التطبيقات إلى دعم واجهات أمامية متعددة مثل موقع ويب وتطبيق جوال. ثانيًا ، يجب أن يظل <b>session object</b> محدثًا مما قد يمثل تحديًا في المواقع الكبيرة ذات الخوادم المتعددة. وثالثًا ، يتم إرسال ملف تعريف الارتباط لكل طلب ، حتى تلك التي لا تتطلب مصادقة ، وهو أمر غير فعال.
        </p>
        <h3 className="title-h3">2 - مصادقة الرمز (Token Authentication) </h3>
        <p className="style_divv">
           بمجرد أن يرسل العميل بيانات اعتماد المستخدم الأولية إلى الخادم ، يتم إنشاء رمز مميز فريد ثم تخزينه بواسطة العميل إما <b>Cookie</b> أو في <b>local storage</b>. ثم يتم تمرير هذا الرمز المميز في رأس كل وارد طلب <b>HTTP</b> والخادم يستخدمه للتحقق من مصادقة المستخدم. الخادم نفسها لا تحتفظ بسجل للمستخدم ، فقط ما إذا كان الرمز المميز صالحًا أم لا.<br/><br/>
           مصادقة الرمز المميز هي نوع من المصادقة المستخدمة في تطبيقات الويب ، بما في ذلك واجهات برمجة التطبيقات ، حيث يتم إصدار رمز مميز للعميل بعد المصادقة الناجحة. ثم يتم استخدام هذا الرمز المميز لمصادقة الطلبات اللاحقة من العميل.<br/><br/>
           في <b>Token Authentication</b> ، يتم عادةً تخزين الرمز المميز في جانب العميل ، إما كملف تعريف ارتباط أو في وحدة تخزين محلية في المتصفح. وذلك لأن العميل يحتاج إلى تضمين الرمز المميز في رأس كل طلب <b>HTTP</b> لاحق إلى الخادم ، بحيث يمكن للخادم التحقق من مصادقة العميل
        </p>
        <h3 className="title-h3">3 - مقارنة مصادقة الجلسة و مصادقة الرمز المميز </h3>
        <p className="style_divv">
           تعتبر <b className="text-success">Token Authentication</b> أفضل من <b className="text-danger">Session authentication</b> لتطبيقات الويب الحديثة وواجهات برمجة التطبيقات لأنها عديمة الحالة وأكثر قابلية للتوسع. باستخدام مصادقة الرمز المميز ، لا يحتاج الخادم إلى الحفاظ على حالة الجلسة ، مما يعني أنه يمكنه التعامل مع المزيد من الطلبات في وقت واحد دون زيادة التحميل على النظام. كما أنه يسمح بمرونة أفضل من حيث الطلبات عبر النطاقات والواجهات الأمامية المتعددة. عادةً ما تكون الرموز المميزة قصيرة العمر ويمكن إبطالها بسهولة إذا لزم الأمر ، مما يضيف طبقة أمان إضافية.
        </p>
        <h3 className="title-h3">4 - إدراج Token Authentication </h3>
      <CodeHighlighter code={`INSTALLED_APPS = [
   #...

   'rest_framework',
   'rest_framework.authtoken',      #new
]

REST_FRAMEWORK = {            
    # ...
   'DEFAULT_AUTHENTICATION_CLASSES' : [   #new
      'rest_framework.authentication.SessionAuthentication' ,
      'rest_framework.authentication.TokenAuthentication' , 
   ],
}`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <ul><li>نحتفظ بمصادقة <b>SessionAuthentication</b> لأننا ما زلنا بحاجة إليها لواجهة برمجة التطبيقات القابلة للتصفح الخاصة بنا ، ولكن الآن استخدام الرموز لتمرير بيانات اعتماد المصادقة ذهابًا وإيابًا في رؤوس <b>HTTP</b> الخاصة بنا</li></ul>
        <h3 className="title-h3">5 - تثبيت dj-rest-auth</h3>
        <p className="style_divv">
            <ul>
                <li><b className="text-success">يوفر وقت التطوير :</b>  يوفر <b>Django-rest-auth</b> نقاط نهاية <b>REST API</b> مسبقة الصنع للمصادقة والتسجيل، لذلك لا يتعين عليك قضاء الوقت في إنشاء نقاط النهاية هذه واختبارها من البداية.</li>
                <li><b className="text-success">قابل للتخصيص : </b>  يتيح لك <b>django-rest-auth</b> تخصيص سلوك نقاط نهاية المصادقة والتسجيل لتناسب المتطلبات المحددة لمشروعك.</li>
                <li><b className="text-success">التكامل مع الحزم الأخرى : </b>  يتكامل <b>django-rest-auth</b> مع الحزم الشائعة الأخرى لـ <b>Django</b>، مثل <b>Django Allauth</b> و <b>Django Rest Framework</b>، لتوفير حل شامل لإدارة المستخدم في مشروعك.</li>
            </ul>
        </p>
        <CodeCommand>pip install dj-rest-auth</CodeCommand>
        <CodeHighlighter code={`INSTALLED_APPS = [
    #...
    'rest_framework',
    'rest_framework.authtoken', 
    'dj_rest_auth', #new
    #...
]`} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include
from app.views import front

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", front , name="front"),
    path('api/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls')) , 
    path('rest-auth/', include('dj_rest_auth.urls')),   #new
]`} file_name="project_name / project_name / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeCommand>python manage.py migrate</CodeCommand>
        <div className="alert alert-light" dir="ltr">
            /rest-auth/ password/reset/ [name='rest_password_reset']<br/>
            /rest-auth/ password/reset/confirm/ [name='rest_password_reset_confirm']<br/>
            /rest-auth/ login/ [name='rest_login']<br/>
            /rest-auth/ logout/ [name='rest_logout']<br/>
            /rest-auth/ user/ [name='rest_user_details']<br/>
            /rest-auth/ password/change/ [name='rest_password_change']
        </div>
        <img src={images.django_rest_34} alt="django rest result" className="w-100 mb-2"/>
        <ul className="mb-2"><li>بعد النقر على الزر <b>POST</b></li></ul>    
        <img src={images.django_rest_35} alt="django rest result" className="w-100 mb-2"/>
        <h3 className="title-h3">6 - تثبيت  django-allauth (المصادقة) </h3>
        <p className="style_divv">
            <b>django-allauth</b> هو نظام مصادقة يستند إلى Django ويوفر مجموعة من طرق العرض والنماذج والقوالب للتعامل مع مصادقة المستخدم والتسجيل وإدارة الحساب.
        </p>
        <CodeCommand>pip install django-allauth</CodeCommand>
        <CodeHighlighter code={`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',   #new
    
    # 3rd-party apps
    'rest_framework',
    'corsheaders',
    'rest_framework.authtoken',   
    'allauth', #new
    'allauth.account', #new
    'allauth.socialaccount', #new
    'dj_rest_auth',
    'dj_rest_auth.registration',  #new
        
    # app created
    'app.apps.AppConfig',  
    'api.apps.ApiConfig', 
]
#...
#...
MIDDLEWARE = [
    #...
    'corsheaders.middleware.CorsMiddleware', 
    'allauth.account.middleware.AccountMiddleware', #new
    #...
]
#...
#...
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'    #new
SITE_ID = 1    #new `} file_name="project_name / project_name / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeCommand>python manage.py migrate</CodeCommand>
        <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include
from app.views import front

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')) , 
    path("", front , name="front"),
    path('api/', include('api.urls')),
    path('rest-auth/', include('dj_rest_auth.urls')), 
    path('rest-auth/registration/', include('dj_rest_auth.registration.urls')), #new
]`} file_name="project_name / project_name / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeCommand>python manage.py runserver</CodeCommand>
        <img src={images.django_rest_36} alt="django rest result" className="w-100 mb-2"/>
        <ul><li>تحديث ملف <b>views.py</b></li></ul>
        <CodeHighlighter code={`from .serializers import AuthorSerializer 
from .models import Author 
from rest_framework.generics import ListAPIView
from rest_framework.authentication import TokenAuthentication  #new

class AuthorView(ListAPIView):
    authentication_classes = (TokenAuthentication ,)   #new
    queryset = Author.objects.all() 
    serializer_class = AuthorSerializer`} file_name="project_name / api / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
        
        <h3 className="title-h3"> 7 - التعامل مع التسجيل في React </h3>
        <CodeHighlighter code={`import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import Home from "./home/Home"
import Login from "./login/Login"
import CreateCompte from "./create-compte/CreateCompte"

function App() {
    const url =  "http://localhost:8000";

    const logout =()=>{
        if(localStorage.getItem('auth_token') !== null){
            localStorage.removeItem('auth_token')
            window.location.reload()
        }
    }

    return (
    <Router>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/login">login</Link> </li>
            <li> <Link to="/create-compte">register</Link> </li>
            <li onClick={logout}> <u>logout</u> </li>
        </ul>
        <Routes>
            <Route path="/" element={<Home url={url}/>} />
            <Route path="/login" element={<Login url={url}/>} />
            <Route path="/create-compte" element={<CreateCompte url={url}/>} />
        </Routes>
    </Router>
    );
}

export default App;`} file_name="project_name / front / src / App.js" language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={`import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login(props){
  const [login , setLogin] = useState({ username:"" , password:"" });
  const navigate = useNavigate();
  
  const handleLogin =(e)=>{
    setLogin({...login , [e.target.name]: e.target.value});
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      try{
          const response = await axios.post(\`\${props.url}/rest-auth/login/\`, login);
          console.log(response.data.key)
          localStorage.setItem('auth_token', response.data.key );
          setLogin({ username:"" , password:"" });
          navigate('/');
      }catch(err){
          alert(err);
      }
  }

  return (
  <>
    <form method="POST" onSubmit={handleSubmit}>  
         <div className="form-group">
             <label htmlFor="username">username</label>
             <input type="text" name="username" onChange={handleLogin} 
               className="form-control mt-3" id="username"
             />
         </div>
         <div className="form-group last mb-4">
             <label htmlFor="password">password</label>
             <input type="password" name="password" onChange={handleLogin} 
               className="form-control mt-3" id="password"
             />
         </div>

         <input type="submit" name="submit" value="Submit" className="btn text-white btn-block btn-primary"/>
    </form>        

    <ul>
        <li><Link to="/forgot_password">forgot password</Link></li>
        <li><Link to="/create-compte"> Register </Link></li>
    </ul>
  </>
  )
}`} file_name="project_name / front / src / login / Login.jsx" language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={`import { useState } from "react"
import axios from 'axios';

export default function CreateAccount(props){
    const [formData, setFormData] = useState({
        username:"",
        email:"", 
        password1:"" ,
        password2:""
    })
    
    const hundleSubmit = async (event)=> {
        event.preventDefault()
        try{
          const request = await axios.post(\`\${props.url}/rest-auth/registration/\`, formData);
          alert(request.data);
        }catch(err){
          alert(err);
        }
    }

    const changeValue = (event) => {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    
    return(
        <div className="container">
            <form  method="POST" onSubmit={hundleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={formData.username} 
                        onChange={changeValue} id="user_name" className="form-control mt-2"
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={formData.email} 
                        onChange={changeValue} id="email" className="form-control mt-2"
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="password1">Password</label>
                    <input type="password" name="password1" value={formData.password1} 
                        onChange={changeValue}  id="password1" className="form-control mt-2"
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={formData.password2} 
                        onChange={changeValue}  id="password2" className="form-control mt-2"
                    />
                </div>
                <input type="submit" value="Sign up" className="btn mt-4 text-white btn-block btn-primary"/>
            </form>
        </div>
    )
}`} file_name="project_name / front / src / create-compte / CreateCompte.jsx" language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={`import axios from 'axios';
import { useState , useEffect} from 'react';

function Home() {
    const [data,setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
            const authToken = localStorage.getItem('auth_token');
            try {
                const response = await axios.get('http://localhost:8000/api/author-list/', {
                    headers: { Authorization: \`Token \${authToken}\` },
                });
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

export default Home;`} file_name="project_name / front / src / home / Home.jsx" language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django_rest_37} alt="django rest result" className="w-100 mb-2"/>

        <h2 className="title-h2" id="Ngrok_to_testing">5 - Ngrok لاختبار مشروع React و Django</h2>
        <h3 className="title-h3">1 - راجع الدرس السابق حول كيفية استخدام Ngrok</h3>
        <ul><li> <Link to="/django/ngrok-to-testing">من هنا</Link></li></ul>
        <h3 className="title-h3">2 - البحث عن ملف التكوين أو إنشائه </h3>
        <CodeCommand>ngrok config check</CodeCommand>
        <div className="alert bg-dark text-light" dir="ltr">
            C:\Users\Dell{">"} <span className="text-warning">ngrok config check</span> <br />
            Valid configuration file at C:\Users\Dell\AppData\Local/ngrok/ngrok.yml<br /><br />
        </div>
        <ul>
            <li>إذا كان ملف ngrok.yml موجودًا، فسوف يتم تأكيد مسار الملف. </li>
            <li>وإذا لم يكن موجودًا، فسوف نقوم بإنشائه (الدرس السابق). </li>
        </ul>
        <h3 className="title-h3">3 - اذهب إلى المسار الذي تم إرجاعه  </h3>
        <ul>
            <li>باستخدام الأمر :</li>
                <CodeCommand>notepad C:\Users\Dell\AppData\Local\ngrok\ngrok.yml</CodeCommand>
            <li> أو افتحه يدويا </li>
        </ul>
        <h3 className="title-h3">4 - أضف إلى ngrok.yml</h3>
       <CodeCommand>
            tunnels: <br />
            &nbsp;&nbsp;&nbsp; django: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; addr: 8000 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; proto: http <br />
            &nbsp;&nbsp;&nbsp; react: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; addr: 3000 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; proto: http <br />
        </CodeCommand>
        <h3 className="title-h3">5 - تشغيل المشروع باستخدام ngrok </h3>
        <CodeCommand>ngrok start --all</CodeCommand>
        <CodePowerShell>PS C:\Windows\system32{">"} <span className="text-warning">ngrok start --all</span> <br /><br /> </CodePowerShell>
        <br />
        <div className="text-light bg-black" dir="ltr">
            <h6 class="bg-light text-dark mb-3"> <img src={PowerShell_logo} alt="PowerShell_logo" className="ms-1 mb-1" style={{ width : "20px"}} />Administrator : Windows PowerShell</h6>
           <pre>
            <span style={{color : "aqua"}}>ngrok</span>                                                                                     (Ctrl+C to quit)  <br />                  
            <span className="text-secondary">❤️  ngrok? We're hiring https://ngrok.com/careers</span> <br /><br /> 
            <span className="text-success">Session Status                online</span>                    <br />                             
            Account                       RedaFarissi (Plan: Free)  <br />                             
            Version                       3.19.0  <br />                             
            Region                        Europe (eu) <br />                             
            Latency                       80ms    <br />                             
            Web Interface                 http://127.0.0.1:4040 <br />                             
            Forwarding                    https://4304-160-178-211-192.ngrok-free.app -{">"} http://localhost:8000<br />
            Forwarding                    https://654e-160-178-211-192.ngrok-free.app -{">"} http://localhost:3000 <br /> <br />      
            Connections                   ttl     opn     rt1     rt5     p50     p90  <br />
             &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;           0       0       0.00    0.00    0.00    0.00 <br />
           </pre>
        </div>
    </article>
</>
   )
}