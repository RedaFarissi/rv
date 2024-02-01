import { Routes, Route , Link } from "react-router-dom";
import React, { useEffect, useRef} from 'react';
//import {} from "./pathDjangoRestFramework"
export default function DjangoRestFramework(props){
    const AsideRef = useRef(null);
   useEffect(() => {
      AsideRef.current.scrollTop = localStorage.getItem("django_aside") || 0;
   }, []); 
   
    const matrix = props.django_rest_framework_matrix.map(e =>{ 
        var keys_map;  
        if (Array.isArray(e)) { 
            let dt_title;
            keys_map = e.map((key,index) => {
                if(index === 0){
                dt_title = key.toLowerCase().replace(/_/g, '-');
                return(<dt className="aside-dl-dt" key={key}>
                            <Link to={`/django-rest-framework/${dt_title}/`}>
                            <i className="fa-solid fa-caret-right"></i> {key.replace(/_/g, ' ')}
                            </Link>
                        </dt>)  
                }else{
                    return(<dd className="aside-dl-dd" key={key}>
                            <a href={`/django-rest-framework/${dt_title}#${key}`}>
                                <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                            </a>
                            </dd>)
                } 
            });
        }else {
            keys_map = <dt className="aside-dl-simple" key={e}><a href={`/django-rest-framework/${e.toLowerCase().replace(/_/g, '-')}`}><i className="fa-solid fa-caret-right"></i> {e.replace(/_/g, ' ')} </a></dt>;
        }
        return keys_map
    });

    return (
    <main>
        <aside className="aside" onScroll={()=>{ localStorage.setItem("django_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
            <ul className="list-group m-0">
               {matrix}
            </ul>
        </aside>
        <section className="section-conetent">
        <a href="https://balajidharma.medium.com/free-store-api-for-developers-to-practice-front-end-e-commerce-development-fcf5b75e4982" target="_blank"> Free API for testing </a> 
<br/><br/>
<h1>serializers.</h1>
<p className="fs-4">
  In Django, a serializer is a component that converts complex data types such as QuerySets and model instances into native Python data types that can be easily rendered into JSON, XML or other content types.<br/><br/>
  Serializers are a vital part of Django's web framework, as they allow developers to easily build APIs that can communicate with other applications or services. Django comes with a built-in serializer module called <b>django.core.serializers</b>, but developers can also create their custom serializers using Django's REST framework.<br/><br/>
  Some of the key features and benefits of serializers in Django include:<br/><br/>
  <p dir="rtl">تتضمن بعض الميزات والفوائد الرئيسية لل serializers في Django ما يلي :</p>
  <ul  className="fs-4">
    <li>Simplifying the process of converting complex data types into simpler, native Python data types that can be rendered into different formats.</li>
    <li>Providing an easy way to validate and deserialise incoming data from requests.</li>
    <li>Enabling developers to customize how data is serialized and deserialized using fields, widgets and validators.</li>
    <li>Supporting serialization of nested objects and complex relationships between objects.</li>
    <li>Allowing for the creation of APIs that can be easily consumed by other applications or services.</li>
  </ul>
</p>

<br id="Serializers_are_not_specific_for_models"/><br/>
<h2>1 - Serializers are not bound to any specific model.</h2>
<p className="fs-4">
  Serializers are not bound to any specific model, and can be used to serialize and deserialize any data that you want to transmit over an API.<br/>
  Sometimes we may want to serialize data into a JSON or another type without actually pushing it into a database or making any modifications to the data. 
</p>
<h3>Exemple :</h3>
<h4>Let's say we have a Python dictionary representing some data that we want to serialize:</h4>
<img src="{% static 'django/ApiViews/ApiViews_method14.png' %}" className="w-100"/>
<img src="{% static 'django/ApiViews/ApiViews_method15.png' %}" className="w-100"/>
<p className="alert alert-danger">
  so in this case  <b>MySerializer(</b>data=data<b>)</b> work like check validation 
</p>

<br id="Serializers_and_model_validation_from_Serializers"/><br/>
<h2>2 - Serializers and model (validation from Serializers).</h2>
<p className="fs-4">
  When using serializers with models, the serializer is usually created with reference to a specific model class, which specifies the fields and relationships to be serialized.<br/><br/>
  Serializers allow us to perform various operations on the data such as validation, deserialization, and serialization. The data passed to the serializer is validated against the fields defined in the serializer. If the data passes validation, the serializer can create a new instance of the model and save it to the database.<br/><br/>
  serializers with models help to manage data processing and validation, making it easier to convert complex data types to simpler ones for use in different applications or systems.<br/><br/>
</p>
<h3>Exemple 1:</h3>
<img src="{% static 'django/ApiViews/ApiViews_method16.png' %}" className="w-100"/>
<p><b>views.py</b></p>
<img src="{% static 'django/ApiViews/ApiViews_method17.png' %}" className="w-100"/>
<p className="alert alert-danger">
  we get request post and check for validity data with <b>MySerializer(<span className="text-success">data</span>=<span className="b">data</span>.<span className="text-success">request</span>)</b> and if the data valid we can do somethings
</p>

<br id="Serializers_and_model_validation_from_models"/><br/>
<h2>3 -  validation logic for models using model </h2>
<h3> exemple 1 </h3>
<img src="{% static 'django/ApiViews/ApiViews_method18.png' %}" className="w-100"/>
<img src="{% static 'django/ApiViews/ApiViews_method19.png' %}" className="w-100 mt-2"/>
<img src="{% static 'django/ApiViews/ApiViews_method20.png' %}" className="w-100 mt-2"/>

<br id="Serializers-and-related_name"/><br/>
<h2>4 - Serializers and related_name .</h2>
<h3>app/models.py</h3>
<p className="fs-3">In this models file the <b>Book</b> is the CLASS determine the relation shap :</p>
<img src="{% static 'django/ApiViews/ApiViews_method23.png' %}" className="w-100 mt-2"/>
<h3>app/serializers.py.py</h3>
<p className="fs-3">In this case wi will get all eact Author with all books for him :</p>
<img src="{% static 'django/ApiViews/ApiViews_method24.png' %}" className="w-100 mt-2"/>
<p className="fs-3"> Result: </p>
<img src="{% static 'django/ApiViews/ApiViews_method25.png' %}" className="w-100 mt-2"/>



<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

<h1>self.kwargs in django  </h1>
<div>
<br id="Why_we_use_self-kwargs"/>
<h2>1 - Why we use self.kwargs </h2>
<div className="fs-3">
  <b>self.kwargs</b> is a <b>dictionary-like object</b> that contains the keyword arguments captured from the <b className="text-success">URL by Django's URL routing system</b> .<br/><br/><br/>        
  When you define a <b>URL</b> pattern in your <b>urls.py</b> file, you can use angle brackets (<b>&lt;type:name{">"}</b>) to capture values from the <b>URL</b> and pass them to your view functions as keyword arguments. For example, a <b>URL pattern like</b> <kbd><b className="text-danger">path('books/&lt;int:pk{">"}/', views.BookDetailView.as_view())</b></kbd> captures an integer value (the primary key of a book) and passes it to the BookDetailView view as a keyword argument called pk
</div>
<br id="using_self-kwargs_in_models_witout_relationships"/><br/>
<h2> 2 - using self.kwargs in models witout relationships </h2>
<h3>urls.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method26.png' %}" className="w-100 mt-2"/>
<h3>views.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method27.png' %}" className="w-100 mt-2"/>
<h3>models.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method28.png' %}" className="w-100 mt-2"/>
<h2> 2 - using self.kwargs in models with relationships </h2>
<h3>urls.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method29.png' %}" className="w-100 mt-2"/>
<h3>files</h3>
<img src="{% static 'django/ApiViews/ApiViews_method30.png' %}" className="w-100 mt-2"/>
</div>





<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1> APIView </h1>
<br id="get_and_post"/><br/>
<h2>GET and POST </h2>
<div className="h2">exemple 1</div>
<h3>modeles.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method35.png' %}" className="w-100 mt-2"/>

<h3>urls.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method33.png' %}" className="w-100 mt-2"/>
<h3>views.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method32.png' %}" className="w-100 mt-2"/>
<h3>serializers.py</h3>
<img src="{% static 'django/ApiViews/ApiViews_method34.png' %}" className="w-100 mt-2"/>
<h3>RESULT</h3>
<img src="{% static 'django/ApiViews/ApiViews_method36.png' %}" className="w-100 mt-2"/>
<img src="{% static 'django/ApiViews/ApiViews_method37.png' %}" className="w-100 mt-2"/>

<br id="get_put_delete"/><br/>







<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1>CreateAPIView</h1>
<p className="fs-5">
  generics.CreateAPIView is a class in the Django REST framework, which is used for creating new objs of a model
  <a href="https://www.django-rest-framework.org/api-guide/generic-views/"> site generic views </a>
</p>
<img src="{% static 'django/ApiViews/ApiViews_method0.png' %}" className="w-100"/>
<div className="alert alert-secondary tet-light fs-5 m-4">
    <b className="b">get_queryset()</b> - Returns the queryset that will be used for creating a new obj.<br/><br/>
    <b className="b">get_serializer_class()</b> - Returns the serializer class that will be used for creating a new obj.<br/><br/>
    <b className="b">perform_create(serializer)</b> - Creates a new obj of the model based on the validated serializer data.<br/><br/>
    <b className="b">post(request, *args, **kwargs)</b> - Handles the HTTP POST request for creating a new obj of the model.<br/><br/>
    <b className="b">get(request, *args, **kwargs)</b>- Handles the HTTP GET request for retrieving a list of objs of the model.<br/><br/>
    <b className="b">put(request, *args, **kwargs)</b>- Handles the HTTP PUT request for updating an existing obj of the model.<br/><br/>
    <b className="b">patch(request, *args, **kwargs)</b>- Handles the HTTP PATCH request for partially updating an existing obj of the model.<br/><br/>
    <b className="b">delete(request, *args, **kwargs)</b> - Handles the HTTP DELETE request for deleting an existing obj of the model.<br/><br/>
</div>
<h2>1 - get_queryset()</h2>
<p className="fs-5">
  This method is used to customize the list of objects that the view will return, by allowing you to filter, order, or modify the queryset before it is returned. By default, the get_queryset() method returns all objs of the model, but you can override it to return a custom queryset that fits your needs.
</p>
<h3>exemple 1</h3>
<img src="{% static 'django/ApiViews/ApiViews_method1.png' %}" className="w-100"/>
<h3>exemple 2</h3>
<img src="{% static 'django/ApiViews/ApiViews_method2.png' %}" className="w-100"/>
<h3>exemple 3</h3>
<img src="{% static 'django/ApiViews/ApiViews_method3.png' %}" className="w-100"/>
<img src="{% static 'django/ApiViews/ApiViews_method4.png' %}" className="w-100"/>
<h2>2 - get_serializer_class()</h2>
<p className="fs-5 m-3">
 you may need to use a different serializer class depending on the request, 
 such as when creating or updating an obj (object of a particular class) of the model
</p>
<h3>exemple 1</h3>
<h5>serializers.py</h5>
<img src="{% static 'django/ApiViews/ApiViews_method5.png' %}" className="w-100"/>
<h5>views.py</h5>
<img src="{% static 'django/ApiViews/ApiViews_method6.png' %}" className="w-100"/>
<h2>3 - perform_create(self, serializer)</h2>
<p className="fs-5 m-3">
It's called after the serializer validates the incoming data and before the new object is created and saved to the database.<br/>
<p dir='rtl'>هي طريقة تم توفيرها بواسطة CreateAPIView في إطار عمل Django REST. يتم استدعاؤه بعد أن يتحقق serializer من صحة البيانات الواردة وقبل إنشاء الكائن الجديد وحفظه في قاعدة البيانات</p>
</p>
<img src="{% static 'django/ApiViews/ApiViews_method7.png' %}" className="w-100"/>
<h2>4 - post(self, request, *args, **kwargs)</h2>
<p className="fs-5 m-3">
The post method is called when a HTTP POST request is made to the view. This is typically used when a form is submitted by the user, and the data from the form is sent in the POST request.<br/><br/>
When the post method is called, it receives a request object that contains information about the HTTP request. The <b>request.POST</b> attribute contains the data from the &lt;form{">"}, <b className="text-success">encoded as a dictionary</b>.<br/>
</p>
<h3>exemple 1</h3>
<img src="{% static 'django/ApiViews/ApiViews_method9.png' %}" className="w-100"/>
<img src="{% static 'django/ApiViews/ApiViews_method11.png' %}" className="w-100 mt-2"/>
<img src="{% static 'django/ApiViews/ApiViews_method10.png' %}" className="w-100 mt-2"/>
<p className="fs-4" dir="rtl">
في طريقة <bdi>post()</bdi> ، نقوم أولاً بإنشاء مثيل ل serializer مع بيانات request ، والتي تحتوي على البيانات المقدمة من خلال طلب POST. نتحقق بعد ذلك مما إذا كان ال serializer صالحًا (أي البيانات المقدمة صالحة وفقًا لقواعد التحقق من صحة الserializer). إذا كانت البيانات غير صحيحة ، فإننا نثير استثناءً.<br/><br/>
<bdi>get_serializer()</bdi> هي طريقة تم توفيرها بواسطة CreateAPIView في إطار عمل Django REST والذي يقوم بإرجاع مثيل لفئة ال serializer المقترنة بالطريقة العرضية.<br/><br/>
عند تلقي طلب ، يستدعي DRF أولاً طريقة <bdi>get_serializer_class()</bdi> لطريقة العرض للحصول على فئة ال serializer لاستخدامها في الطلب. تقوم هذه الطريقة بإرجاع فئة جهاز التسلسل التي تم تحديدها لطريقة العرض.<br/><br/>
ثم يقوم DRF بإنشاء مثيل لفئة ال serializer عن طريق استدعاء طريقة <bdi>get_serializer()</bdi> لطريقة العرض. تقوم هذه الطريقة بإنشاء مثيل لفئة ال serializer وتمرير بيانات الطلب ، والتي تكون عادةً في سمة request.data.<br/><br/>
بمجرد إنشاء ال serializer ، يتحقق DRF مما إذا كانت البيانات صالحة عن طريق استدعاء طريقة <bdi>is_valid()</bdi> الخاصة بال serializer. إذا كانت البيانات غير صالحة ، يقوم DRF بإصدار خطأ التحقق من الصحة. إذا كانت البيانات صحيحة ، يستدعي DRF طريقة الحفظ ال <bdi>serializer()</bdi> لحفظ البيانات في قاعدة البيانات.<br/><br/>
أخيرًا ، تُرجع طريقة العرض كائن استجابة بالبيانات المتسلسلة ورمز حالة HTTP يشير إلى ما إذا كان الطلب ناجحًا أم لا.<br/><br/>
باختصار ، طريقة <bdi>get_serializer()</bdi> مسؤولة عن إنشاء مثيل لفئة ال serializer والتحقق من صحة بيانات الطلب. إنها طريقة ملائمة لإنشاء مثيل serializer واستخدامه دون الحاجة إلى إنشاء مثيل <bdi>serializer</bdi> يدويًا واستدعاء طرقه
</p>
<h3>exemple 2</h3>
<img src="{% static 'django/ApiViews/ApiViews_method8.png' %}" className="w-100"/>
<h2>5 - get(self, request, *args, **kwargs) </h2>
<p className="fs-4" dir="rtl">
عندما يتم تقديم طلب GET إلى طريقة العرض ، يتم استدعاء طريقة <bdi>get()</bdi> ويمكننا القيام بكل ما نحتاج إلى القيام به بهذه الطريقة. في هذه الحالة ، نعيد ببساطة رد JSON برسالة "Hello world".
</p>
<img src="{% static 'django/ApiViews/ApiViews_method13.png' %}" className="w-100 mt-2"/>
<img src="{% static 'django/ApiViews/ApiViews_method12.png' %}" className="w-100 mt-2"/>








<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="border border-5 m-2">
<br id="django_rest_framework"/><br/><br/><br/>
<h1> django rest framework </h1>
<b className="text-center"><a href="https://www.django-rest-framework.org/" target="_blank"> All What need Here</a></b>
<h2>1 - What is API </h2>
<h3> 1 - Why we create Api</h3>
<p><b> We Create Api to secure your data and for speed and more , the Api Convert data to <u>Json</u> File .</b></p>
<h3>2 - Built In Api</h3>
<p><b>Built In Api is api Created and All you need is bring him</b></p>

<h2>2 - install  django rest framework</h2>
<b>To install  django rest framework you need to create <a href="#create_virtualenv"><b>virtualenv</b></a> and activate it </b>
<h3>1 - install packages django </h3>
<div className="bg-dark text-light fs-5 p-4 pb-2 rounded mb-3"><pre>pip install djangorestframework</pre></div>
<img src="{% static 'django/django43.png' %}" className="w-100"/>
<h3>2 - install last version rest </h3>
<p>we use this just if we use Django templates </p>
<div className="bg-dark text-light fs-5 p-4 pb-2 rounded mb-3"><pre>pip install markdown</pre></div>
<img src="{% static 'django/django44.png' %}" className="w-100"/>
<h3>3 - project_name/setting.py </h3>
<b>go to INSTALLED_APPS and add 'rest_framework'</b>
<div className="alert alert-warning mt-3 pb-0">
<pre>
INSTALLED_APPS = [
...
'rest_framework',
]</pre>
</div>
<h3>4 - project_name/urls.py </h3>
<b>go to urlpatterns and add :</b>
<div className="alert alert-warning mt-3 pb-0">
<pre>
<span className="text-success">#localhost:8000/api-auth/login</span>
<span className="text-success">#go to this path and input your username and password</span>
urlpatterns = [
...
path('api-auth/', include('rest_framework.urls')) ,
]</pre>
</div>
<img src="{% static 'django/django46.png' %}" className="w-100"/>

<h2>3 - File needed</h2>
<h3>1 - serializers.py</h3>
<p><b>The only mission for <u>serializers.py</u> file is get data from database and change it to <u>JSON</u></b></p>
<h3>2 - api.py <small>(you_can_use_any_name)</small></h3>
<p><b> The <u>api.py</u> file is like <u>views.py</u> , we use it for write logic </b></p>

<h2>4 - Change Content From database to Json <small>(API)</small> </h2>
<h3> 1 - Get all Data </h3>
<ul>
<li><b>In this Chapter we use django project named <b><i><u>project</u></i></b></b></li>
<li><b>And app with name  <b><i><u>helloapp</u></i></b></b></li>
</ul>
<h3>project/helloapp/urls.py</h3>
<img src="{% static 'django/django49.png' %}" className="w-100"/>
<h3>project/helloapp/api.py</h3>
<img src="{% static 'django/django48.png' %}" className="w-100"/>
<h3>project/helloapp/serializers.py</h3>
<img src="{% static 'django/django47.png' %}" className="w-100"/>
<h3>localhost:8000/json/</h3>
<img src="{% static 'django/django50.png' %}" className="w-100 border border-dark"/>
<h3> 2 - Get Data from id </h3>
<h3>project/helloapp/urls.py</h3>
<img src="{% static 'django/django51.png' %}" className="w-100"/>
<h3>project/helloapp/api.py</h3>
<img src="{% static 'django/django52.png' %}" className="w-100"/>
<h3>project/helloapp/serializers.py</h3>
<img src="{% static 'django/django53.png' %}" className="w-100"/>
<h3>localhost:8000/json/2</h3>
<img src="{% static 'django/django54.png' %}" className="w-100"/>
<h2>5 - CORS  </h2>
<p><b>There’s one last step we need to do and that’s deal with Cross-Origin Resource Sharing (CORS). Wheneveraclient interacts with an API hosted on a different domain (mysite.com vs yoursite.com) or port (localhost:3000 vs localhost:8000) there are potential security issues. Specifically, CORS requires the server to include specific HTTP headers that allow for the client to determine if and when cross-domain requests should be allowed</b></p>
<p dir="rlt">هناك خطوة أخيرة يتعين علينا القيام بها وهي التعامل مع مشاركة الموارد عبر الأصول (CORS). عندما يتفاعل العميل مع واجهة برمجة تطبيقات مستضافة على مجال أو منفذ مختلف ، فهناك مشكلات أمنية محتملة. على وجه التحديد ، يتطلب CORS من الخادم تضمين رؤوس HTTP معينة تسمح للعميل بتحديد ما إذا كان يجب السماح بالطلبات عبر النطاقات ومتى</p>
<p><b>The package we will use is <a href="https://www.geeksforgeeks.org/how-to-enable-cors-headers-in-your-django-project/" target="_blank"> django-cors-headers </a> which can be easily added to our existing project.</b></p>
</div>















<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="border border-5 m-2">
<br id="django_rest_framework_filter"/><br/><br/><br/>
<h1> <small>django rest framework filter</small> <small><small>(generics.ListAPIView)</small></small></h1>
<h2> 1 - install django-filter </h2>
<div className="bg-dark text-light fs-5 p-4 pb-2 rounded mb-3"><pre>pip install django-filter</pre></div>
<img src="{% static 'django/django45.png' %}" className="w-100"/>
<h2> 2 - add to project/settings</h2>
<div className="alert alert-warning pb-0">
<pre>INSTALLED_APPS = [
...
'rest_framework',
'django_filters', <span className="text-success">#new</span>
]</pre>
</div>


</div>















<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="border border-5 m-2">
<br id="Connect_django_with_react"/><br/><br/><br/>
<h1>Connect django with react </h1>
<a href="https://www.geeksforgeeks.org/integrating-django-with-reactjs-using-django-rest-framework/?ref=rp">  Easy Toturial </a>
<p className="mt-3"><b>To Connect django with react </b></p>
<h2>1 - Craete virtual env  </h2>
<h2>2 - Activate virtual env  </h2>
<h2>3 - install django  </h2>
<h2>4 - create  django project </h2>
<p><b><b>in this exemple we named (project)</b></b></p>
<h2>5 - Install React.js </h2>
<p><b><b>got to django project/ and  create-react-app &nbsp; &nbsp; &nbsp; &nbsp;  in this exemple we named (front)</b></b></p>
<h2>6 - Use build in react-app </h2>
<p><b><b>go to path front/ and use : <b>use it evry time you change front to get chanage</b></b></b></p>
<div className="alert bg-dark text-light pb-0"><pre>npm run build</pre></div>
<h2>7 - Return to project/ </h2>
<div className="alert bg-dark text-light pb-0"><pre>cd ..</pre></div>
<h2>8 - go to  project/settings.py </h2>
<p><b>
add in top
</b></p>
<div className="alert alert-warning text-dark p-4 pb-2">
<pre>
import os
.<br/>.<br/>.<br/>.

TEMPLATES = [
{"{"}
'BACKEND': 'django.template.backends.django.DjangoTemplates',
'DIRS': [<b className="text-danger">os</b>.<b className="g">path</b>.<b className="g">join</b>(<b className="g">BASE_DIR</b>, <b className="o">'front'</b>, <b className="o">'build'</b>)],
'APP_DIRS': True,
'OPTIONS': {"{"}
   'context_processors': [
       'django.template.context_processors.debug',
       'django.template.context_processors.request',
       'django.contrib.auth.context_processors.auth',
       'django.contrib.messages.context_processors.messages',
   ],
{"}"},
{"}"},
]
.<br/>.<br/>.<br/>.
STATICFILES_DIRS = [<b className="text-danger">os</b>.<b className="g">path</b>.<b className="g">join</b>(<b className="g">BASE_DIR</b>, <b className="o">'front'</b>, <b className="o">'build'</b>, <b className="o">'static'</b>)]
</pre>
</div>
<h2>9 - Create App in Project </h2>
<div className="alert bg-dark text-light pb-0"><pre>python manage.py startapp app</pre></div>
<h3>1- app/views.py</h3>
<div className="alert alert-warning text-dark p-4 pb-2">
<pre>
from django.shortcuts import render<br/>
def front(request):
context = { }
return render(request, "index.html", context)</pre>
</div>
<h3>2- project/project/urls.py</h3>
<div className="alert alert-warning text-dark p-4 pb-2">
<pre>
from django.contrib import admin
from django.urls import path
from app.views import front

urlpatterns = [
path('admin/', admin.site.urls),
path("", front , name="front"),
]</pre>
</div>
<h2>10 - Runserver </h2>
<p><b>Go to project/ and run :</b></p>
<div className="alert bg-dark text-light pb-0"><pre>python manage.py runserver</pre></div>
<h3 className="text-secondary">Exemple:</h3>
<h3>project/project/urls.py</h3>
<img src="{% static 'django/django55.png' %}" className="w-100"/>
<h3>project/app/views.py</h3>
<img src="{% static 'django/django56.png' %}" className="w-100"/>
<h3>Result</h3>
<img src="{% static 'django/django57.png' %}" className="w-100"/>
<h2>11 - Change React Code </h2>
<p><b>To change React code remove bulid/ folder from react-folder and in your directory folder react use :</b></p>
<div className="alert bg-dark text-light pb-0"><pre>npm run build</pre></div>
<h2>12 - Install Django rest framework  </h2>
<div className="alert bg-dark text-light pb-0"><pre>pip install djangorestframework</pre></div>
<div className="alert bg-dark text-light pb-0"><pre>pip install markdown</pre></div>
<div className="alert bg-dark text-light pb-0"><pre>pip install django-filter</pre></div>
<div className="alert alert-warning">
<pre>
INSTALLED_APPS = [
...
'rest_framework',
] </pre>
</div>
<h2>13 - CORS headers in your Django Project </h2>
<h3>1 - Install django-cors-headers using PIP</h3>
<div className="alert bg-dark text-light pb-0"><pre>pip install django-cors-headers </pre></div>
<h3>2 - project/settings</h3>
<div className="alert alert-warning pb-0">
<pre>INSTALLED_APPS = [
...
'corsheaders',
...
]</pre>
</div>

<div className="alert alert-warning pb-0">
<pre>MIDDLEWARE = [
'django.middleware.security.SecurityMiddleware',
'django.contrib.sessions.middleware.SessionMiddleware',
'corsheaders.middleware.CorsMiddleware', <span className="text-success">#new</span>
'django.middleware.common.CommonMiddleware',
'django.middleware.csrf.CsrfViewMiddleware',
'django.contrib.auth.middleware.AuthenticationMiddleware',
'django.contrib.messages.middleware.MessageMiddleware',
'django.middleware.clickjacking.XFrameOptionsMiddleware',
]</pre>
</div> 

<div className="alert alert-warning pb-0">
<pre>CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = ( 
'http://localhost:8000', 
)</pre>
</div>



<h2>14 - Create App With Name api </h2>
<div className="alert bg-dark text-light pb-0"><pre>python manage.py startapp api</pre></div>
<h3> Add to project/project/urls.py</h3>
<div className="alert alert-warning">
<pre><span className="text-success">#project/project/serializers.py </span><br/>
urlpatterns = [
 ...<br/>
  path('api/', include('api.urls')),
]</pre>
</div>  
<img src="{% static 'django/django73.png' %}" className="w-100"/>

<h3> Add to project/settings.py</h3>

<img src="{% static 'django/django77.png' %}" className="w-100"/>


<h2>15 - Create serializers.py in api/ </h2>
<h3> Add to project/api/serializers.py</h3>
<div className="alert alert-warning">
<pre><span className="text-success">#project/api/serializers.py </span><br/>
from rest_framework import serializers 
from app.models import Profile <span className="text-success">#to get Profile model created in app/models.py  </span>

class ProfileSerializer(serializers.ModelSerializer): 
class Meta: 
model = Profile
<span className="text-success"><small>#"user_name","email","sex" is column from app.models in table profile</small></span>
fields = ("user_name","email","sex",)</pre>
</div>  
<img src="{% static 'django/django74.png' %}" className="w-100"/>
<h2>16 - add to views.py in api/ </h2>
<h3> Add to project/api/views.py</h3>
<div className="alert alert-warning">
<pre><span className="text-success">#project/api/views.py </span><br/>
from django.shortcuts import render

# Create your views here.
from rest_framework import generics 
from app.models import Profile 
from .serializers import ProfileSerializer 

class ProfileAPIView(generics.ListAPIView): 
queryset = Profile.objects.all() 
serializer_class = ProfileSerializer
</pre>
</div>  
<img src="{% static 'django/django75.png' %}" className="w-100"/>
<h2>17 - create urls.py in api/ </h2>
<div className="alert alert-warning">
<pre><span className="text-success">#project/api/urls.py </span><br/>
from django.urls import path 
from .views import ProfileAPIView 

urlpatterns = [ 
path('', ProfileAPIView.as_view()), 
]</pre>
</div>  
<img src="{% static 'django/django78.png' %}" className="w-100"/>
<h2>18 - get data from django in App.js Component </h2>
<img src="{% static 'django/django76.png' %}" className="w-100"/>
<h2>19 - real example </h2>
<h3>project/produit/models.py</h3>
<img src="{% static 'django/django98.png' %}" className="w-100"/>
<h3>project/api/serializers.py</h3>
<img src="{% static 'django/django99.png' %}" className="w-100"/>
<h3>project/api/views.py</h3>
<img src="{% static 'django/django100.png' %}" className="w-100"/>
<h3>project/api/urls.py</h3>
<p><b> Each url will create api </b></p>
<img src="{% static 'django/django101.png' %}" className="w-100"/>
<h3>category_name is created in serializers when we use : </h3>
<div className="alert bg-secondary pb-0 text-light">
<pre>category_name = serializers.ReadOnlyField(source='category.name')</pre>
</div>
<img src="{% static 'django/django102.png' %}" className="w-100"/>
<h3>get API and saved it in state content many state using axios: </h3>
<img src="{% static 'django/django103.png' %}" className="w-100"/>
<h3><a href="https://www.youtube.com/watch?v=uhSmgR1hEwg&list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j&index=2">importaint to wash</a></h3>
</div>










<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="border mt-3 border-5">
<div className="d-flex justify-content-between align-items-center">
<h1 id="BOOK_DJANGO">BOOK DJANGO</h1>
</div>
<div className="container">
<object width="100%" height="900px" type="application/pdf"data="pdf/django/book_django.pdf"></object>
</div>
</div>





















<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="border m-2 border-5">
<br id="class_generic_views"/><br/><br/>
<h1> class generic views <small><small>(Django REST Framework)</small></small></h1>
<a href="https://www.django-rest-framework.org/api-guide/generic-views/#retrieveapiview" className="fs-5 ms-2" target="_blank">api-guide</a>
<p className="fs-3 m-2"> Generics are a set of pre-built class-based views provided by <span className="text-success">Django REST Framework</span> that can be used to quickly create common RESTful functionality. Here are some of the most commonly used generics:</p>
<h2>APIView: <small className="b"> This allows me to demonstrate how to handle incoming data from a request and use a serializer to perform validation and deserialization without being limited by any pre-defined behavior.</small></h2>
<h2>ListAPIView: Used to retrieve a list of objects.</h2>
<h2>CreateAPIView: Used to create a new object.</h2>
<h2>RetrieveAPIView: Used to retrieve a single object.</h2>
<h2>UpdateAPIView: Used to update a single object.</h2>
<h2>DestroyAPIView: Used to delete a single object.</h2>
<h2>ListCreateAPIView: Combines ListAPIView and CreateAPIView.</h2>
<h2>RetrieveUpdateAPIView: Combines RetrieveAPIView and UpdateAPIView.</h2>
<h2>RetrieveDestroyAPIView: Combines RetrieveAPIView and DestroyAPIView.</h2>
<h2>RetrieveUpdateDestroyAPIView: Combines RetrieveAPIView, UpdateAPIView, and DestroyAPIView.</h2>
<img src="{% static 'django/django109.png' %}" className="w-100 mt-2"/>
</div>













<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="border m-2 border-5">
<br id="Django_Rest_Framework_Permissions"/><br/><br/>
<h1>Django Rest Framework Permissions</h1>
<ul>
<li><b>my project Django is : project</b></li>
<li><b>my app in project is : posts</b></li>
</ul>
<h2> 1 - don't give Permissions to All users  </h2>
<h3> 1 - posts/models.py </h3>
<img src="{% static 'django/django125.png' %}" className="w-100"/>
<h3> 2 - project/settings.py </h3>
<p><b> to use permissions you need to change settings </b></p>
<img src="{% static 'django/django113.png' %}" className="w-100"/>
<div className="alert p-3 alert-warning fs-4 pb-0 mt-2"><pre>
REST_FRAMEWORK = {"{"}
'DEFAULT_PERMISSION_CLASSES': [
   <span className="o">'rest_framework.permissions.IsAuthenticated'</span>, <span className="text-success">#new</span>
]
{"}"}</pre>
</div>
<h3> 1 - project/urls.py</h3>
<img src="{% static 'django/django110.png' %}" className="w-100"/>
<h3> 2 - posts/urls.py</h3>
<img src="{% static 'django/django111.png' %}" className="w-100"/>
<h3> 3 - posts/views.py</h3>
<img src="{% static 'django/django112.png' %}" className="w-100"/>
<div className="fs-4 m-3" dir="rtl" >
إذا قمت بتحديث صفحات قائمة المنشورات وقائمة التفاصيل ، فستظل ترى نفس 403
رمز الحالة. لقد طلبنا الآن من جميع المستخدمين المصادقة قبل أن يتمكنوا من الوصول
واجهة برمجة التطبيقات ، ولكن يمكننا دائمًا إجراء تغييرات إضافية على مستوى العرض حسب الحاجة أيضًا</div>
<img src="{% static 'django/django114.png' %}" className="w-100"/>
<div className="fs-4 m-3" dir="rtl">
أي شخص يمتلك حساب يمكنه رؤية البيانات وتغييرها وتحديثها وحذفها
</div>
<img src="{% static 'django/django115.png' %}" className="w-100"/>
<h2> 2 - Custom permissions </h2>
<h3> 1 - posts/permissions.py </h3>
<img src="{% static 'django/django116.png' %}" className="w-100"/>
<h4 className="ms-2">props</h4>
<ul className="fs-4 mt-3" dir="rtl">
<li className="m-5"><b>self</b> : هو إشارة إلى ال class . </li>
<li className="m-5"><b>request</b> : مثيل لفئة Request التي تمثل طلب HTTP الوارد. يوفر هذا الكائن معلومات حول المستخدم الذي قدم الطلب وطريقة HTTP المستخدمة (GET و POST وما إلى ذلك) وأي بيانات يتم إرسالها مع الطلب. </li>
<li className="m-5"><b>view</b> :  مثيل للفئة الفرعية APIView التي تعالج الطلب الوارد. يوفر هذا الكائن معلومات حول طريقة العرض التي يتم الوصول إليها ، مثل عنوان URL الخاص به وطريقة HTTP المستخدمة وأي معلمات تم تمريرها في الطلب.</li>
<li className="m-5"><b>obj</b> :  هو الكائن المطلوب.</li>
</ul>
<h4 className="ms-2">use props </h4>
<ul className="fs-4 mt-3" dir="rtl">
<li className="m-5"><b>request.method </b> :  تقوم بإرجاع HTTP Request المستخدم من طرف المستخدم post , put , get , options , ..</li>
<li className="m-5"><b>SAFE_METHODS</b> : هي tuple تحتوي على طرق HTTP التي تعتبر طرقًا "آمنة". تتضمن المجموعة طرق GET و HEAD و OPTIONS. </li>
<li className="m-5"><b>request.user</b> : هي attribute تمثل المستخدم الذي قدم الطلب .<br/> عندما يقدم المستخدم طلبًا إلى عرض Django ، يملأ Django تلقائيًا كائن الطلب بمعلومات حول الطلب ، بما في ذلك كائن المستخدم المصادق عليه (إذا تمت مصادقة المستخدم). يتم استخدام سمة request.user للوصول إلى كائن المستخدم هذا.</li>
<li className="m-5"><b>obj.author</b> : في Django ، يشير obj.author إلى مالك مثيل الكائن. يُستخدم هذا عادةً في المواقف التي يحتاج فيها المستخدم إلى الحصول على إذن للوصول إلى بياناته الخاصة فقط أو تعديلها .</li>
</ul>
<h3> 2 - posts/views.py </h3>
<img src="{% static 'django/django117.png' %}" className="w-100"/>
<p><b> adil is Author so he can use <span className="text-success">RetrieveUpdateDestroyAPIView</span></b></p>
<img src="{% static 'django/django118.png' %}" className="w-100"/>
<h2>3 - built-in permission classes</h2>
<p><b>Django provides several built-in permission classes that can be used to control access to views and endpoints in Django REST Framework</b></p>
<ul className="fs-4 mt-3">
<li><b>AllowAny</b> :  - السماح لأي شخص </li>
<li><b>IsAuthenticated</b> :  - المصادقة المطلوبة </li>
<li><b>IsAdminUser</b> :  - مستخدم المسؤول فقط </li>
<li><b>IsAuthenticatedOrReadOnly</b> :  - المصادقة المطلوبة أو القراءة فقط </li>
<li><b>IsOwnerOrReadOnly</b> :  - مالك العنصر فقط أو القراءة فقط </li>
<li><b>DjangoModelPermissions</b> :  - صلاحيات نموذج دجانجو </li>
<li><b>DjangoModelPermissionsOrAnonReadOnly</b> :  - صلاحيات نموذج دجانجو أو القراءة فقط للمستخدم المجهول </li>
<li><b>DjangoObjectPermissions</b> :  - صلاحيات الكائن دجانجو </li>
<li><b>DjangoObjectPermissionsBackend</b> :  - صلاحيات الكائن دجانجو من الخلفية </li>
<li><b>IsAdminUserOrReadOnly</b> :  - مستخدم المسؤول فقط أو القراءة فقط </li>
<li><b>IsAuthenticatedAndOwnerOrReadOnly</b> :  - المصادقة المطلوبة ومالك العنصر فقط أو القراءة فقط </li>
<li><b>TokenHasReadWriteScope</b> :  - الرمز المميز مطلوب للقراءة والكتابة </li>
<li><b>TokenHasScope</b> :  - الرمز المميز مطلوب للوصول </li>
<li><b>IsAuthenticatedOrTokenHasScope</b> :  - المصادقة المطلوبة أو الرمز المميز مطلوب للوصول </li>
</ul>
</div>
















<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div className="border border-5 m-2">
<br id="user_authentication_Rest_framework"/><br/><br/>
<h1>user authentication Rest framework (DRF)</h1>
<p><b>Django REST Framework is a framework built on top of Django that is designed for building RESTful APIs. It provides several features that are specifically designed for API development, including authentication and serialization.</b></p>
<div className="fs-5" dir="rtl">
في هذا الفصل ، يتم التركيز على كيفية تنفيذ مصادقة المستخدم في واجهة برمجة تطبيقات Django. المصادقة هي عملية التحقق من هوية المستخدم ، وهو أمر مهم لتقييد الوصول إلى موارد أو وظائف معينة.<br/><br/>
يتمثل أحد التحديات في مصادقة واجهة برمجة التطبيقات في أن HTTP بروتوكول عديم الحالة ، مما يعني أنه لا توجد طريقة مضمنة لتذكر ما إذا كان المستخدم قد تمت مصادقته من طلب إلى آخر. للتغلب على هذا التحدي ، يتم تمرير معرفات فريدة مع كل طلب HTTP للتحقق من هوية المستخدم.<br/><br/>
يوفر إطار عمل Django REST العديد من خيارات المصادقة المضمنة ، مثل المصادقة الأساسية والمصادقة الرمزية ، وهناك أيضًا العديد من حزم الجهات الخارجية المتاحة ، مثل JSON Web Tokens (JWTs).<br/><br/>
المصادقة الأساسية هي طريقة مصادقة شائعة الاستخدام حيث يرسل العميل بيانات اعتماده في رأس التخويل لطلب HTTP. يتحقق الخادم من صحة بيانات الاعتماد ويستجيب وفقًا لذلك.<br/><br/>
ومع ذلك ، تجدر الإشارة إلى أن المصادقة الأساسية ترسل بيانات الاعتماد بنص عادي ، وهو ما يمثل مخاطرة أمنية كبيرة. لذلك ، يجب استخدامه فقط عبر اتصال HTTPS آمن لمنع التنصت وهجمات الرجل في الوسط.<br/><br/>
في هذا الفصل ، يستكشف المؤلف العديد من خيارات المصادقة وإيجابياتها وسلبياتها وكيفية تنفيذها في واجهة برمجة تطبيقات Django. يوفر المؤلف أيضًا نموذج التعليمات البرمجية لإنشاء نقاط نهاية API للتسجيل وتسجيل الدخول وتسجيل الخروج. <br/>
</div>

<h2>1 - Session authentication</h2>
<div className="fs-5" dir="rtl">
هو نظام مصادقة شائع يستخدم في مواقع الويب المتجانسة مثل Django التقليدية. تتمثل الميزة الرئيسية لهذا الأسلوب في أنه أكثر أمانًا حيث يتم إرسال بيانات اعتماد المستخدم مرة واحدة فقط ، وليس في كل دورة طلب / استجابة كما هو الحال في المصادقة الأساسية. كما أنه أكثر كفاءة نظرًا لأن الخادم لا يتعين عليه التحقق من بيانات اعتماد المستخدم في كل مرة ، فهو يطابق فقط session ID مع session object الذي يعد بحثًا سريعًا.<br/><br/>
ومع ذلك ، هناك أيضًا بعض الجوانب السلبية لمصادقة الجلسة. أولاً ، يكون معرف الجلسة صالحًا فقط داخل المتصفح حيث تم إجراء تسجيل الدخول ولن يعمل عبر نطاقات متعددة. قد يكون هذا مشكلة عندما تحتاج واجهة برمجة التطبيقات إلى دعم واجهات أمامية متعددة مثل موقع ويب وتطبيق جوال. ثانيًا ، يجب أن يظل session object محدثًا مما قد يمثل تحديًا في المواقع الكبيرة ذات الخوادم المتعددة. وثالثًا ، يتم إرسال ملف تعريف الارتباط لكل طلب ، حتى تلك التي لا تتطلب مصادقة ، وهو أمر غير فعال.<br/>
</div>
<h3>real example about sessions and cookie</h3>
<div className="alert alert-danger fs-4" dir="rtl">
<b>User authentication</b> :  قد يستخدم تطبيق الويب sessions لتتبع ما إذا كان المستخدم قد قام بتسجيل الدخول أم لا. عندما يقوم المستخدم بتسجيل الدخول ، يتم إنشاء session على جانب ال server ، ويتم إرسال cookie يحتوي على session ID إلى متصفح المستخدم. تتضمن الطلبات اللاحقة من متصفح المستخدم session ID (cookie), ، مما يسمح server بتحديد المستخدم والحفاظ على حالة تسجيل الدخول الخاصة به.<br/>
<div dir="ltr">
 <b>Shopping cart</b> : A web application might use cookies to remember the contents of a user's shopping cart. When the user adds an item to their cart, a cookie is created on the client-side containing the item ID and quantity. When the user checks out, the contents of the shopping cart are retrieved from the cookies and sent to the server.<br/><br/>
 <b>Localization</b> : A web application might use cookies to remember the user's preferred language. When the user selects a language, a cookie is created on the client-side containing the language code. Subsequent requests from the user's browser include the language cookie, allowing the server to serve content in the user's preferred language.<br/><br/>
 <b>CSRF protection</b> : A web application might use sessions to protect against cross-site request forgery (CSRF) attacks. When a user submits a form, a unique token is generated on the server-side and stored in the user's session. The token is also included in a hidden field in the form. When the form is submitted, the server checks that the token in the session matches the token in the form, ensuring that the request is legitimate and not an attack.<br/><br/>
</div>
</div>   

<h2>2 - Token Authentication </h2>
<div className="fs-5" dir="rtl">
بمجرد أن يرسل العميل بيانات اعتماد المستخدم الأولية إلى الخادم ، يتم إنشاء رمز مميز فريد ثم تخزينه بواسطة العميل إما <b>Cookie </b> أو في <b>local storage</b>. ثم يتم تمرير هذا الرمز المميز في رأس كل وارد
طلب HTTP والخادم يستخدمه للتحقق من مصادقة المستخدم. الخادم      نفسها لا تحتفظ بسجل للمستخدم ، فقط ما إذا كان الرمز المميز صالحًا أم لا.<br/><br/>   
مصادقة الرمز المميز هي نوع من المصادقة المستخدمة في تطبيقات الويب ، بما في ذلك واجهات برمجة التطبيقات ، حيث يتم إصدار رمز مميز للعميل بعد المصادقة الناجحة. ثم يتم استخدام هذا الرمز المميز لمصادقة الطلبات اللاحقة من العميل.<br/><br/>
في مصادقة الرمز المميز ، عندما يقوم المستخدم بتسجيل الدخول ، يقوم الخادم بإنشاء رمز مميز وإرساله مرة أخرى إلى العميل ، عادةً على شكل JSON Web Token (JWT) أو سلسلة عشوائية. يقوم العميل بعد ذلك بتخزين هذا الرمز المميز وإرساله مرة أخرى إلى الخادم في الطلبات اللاحقة ، عادةً في رأس التفويض لطلب HTTP.<br/><br/>
ثم يتحقق الخادم من الرمز المميز وإذا كان صالحًا ، تتم معالجة الطلب. يحتوي هذا النهج على عدد من الفوائد ، بما في ذلك تحسين الأمان (نظرًا لعدم إرسال بيانات اعتماد المستخدم مع كل طلب) ، وقابلية التوسع (نظرًا لأن الخادم لا يحتاج إلى تتبع حالة الجلسة) ، ودعم أنواع متعددة من العملاء (منذ الرمز المميز) يمكن استخدامها عبر مجالات وأنظمة أساسية متعددة).<br/><br/>
تُعد مصادقة الرموز خيارًا شائعًا لواجهات برمجة التطبيقات ، وهي مدعومة بواسطة إطار عمل Django REST من خلال فئة TokenAuthentication المدمجة. توفر حزم الجهات الخارجية الأخرى ، مثل OAuth2 و JSON Web Tokens (JWTs) ، أيضًا دعمًا للمصادقة المستندة إلى الرمز المميز.
<h3 dir="ltr"> Cookies vs localStorage </h3>
<div>
 <div className="alert-warning">
    <ul className="m-3">
       <li className="m-2 p-3">Cookies : تُستخدم ملفات تعريف الارتباط لقراءة المعلومات من جانب الخادم. هم أصغر (4 كيلوبايت) في الحجم ويتم إرسالها تلقائيًا مع كل طلب HTTP</li>
       <li className="m-2 p-3">localStorage : تم تصميمه معلومات من جانب العميل. إنه أكبر بكثير (5120 كيلوبايت) ولا يتم إرسال محتوياته بواسطة الافتراضي مع كل طلب HTTP. الرموز المخزنة في كل من ملفات تعريف الارتباط والتخزين المحلي هي عرضة لهجمات XSS. أفضل الممارسات الحالية هي تخزين الرموز المميزة في cookie باستخدام علامتا  httpOnly و Secure cookie flag</li>
    </ul>
 </div>
 
 في Token Authentication ، يتم عادةً تخزين الرمز المميز في جانب العميل ، إما كملف تعريف ارتباط أو في وحدة تخزين محلية في المتصفح. وذلك لأن العميل يحتاج إلى تضمين الرمز المميز في رأس كل طلب HTTP لاحق إلى الخادم ، بحيث يمكن للخادم التحقق من مصادقة العميل
 <img src="{% static 'django/django121.png' %}" className="w-100"/>
</div>   
</div>

<h2>3 - comparaison <u>Session authentication</u> and <u>Token Authentication</u> </h2>
<div className="fs-5" dir="rtl">
تعتبر <b className="text-success">Token Authentication</b> أفضل من <b className="text-danger">Session authentication</b> لتطبيقات الويب الحديثة وواجهات برمجة التطبيقات لأنها عديمة الحالة وأكثر قابلية للتوسع. باستخدام مصادقة الرمز المميز ، لا يحتاج الخادم إلى الحفاظ على حالة الجلسة ، مما يعني أنه يمكنه التعامل مع المزيد من الطلبات في وقت واحد دون زيادة التحميل على النظام. كما أنه يسمح بمرونة أفضل من حيث الطلبات عبر النطاقات والواجهات الأمامية المتعددة. عادةً ما تكون الرموز المميزة قصيرة العمر ويمكن إبطالها بسهولة إذا لزم الأمر ، مما يضيف طبقة أمان إضافية.
</div>
<h2>4 - Default Authentication</h2>
<div className="fs-5" dir="rtl">
يأتي إطار عمل Django REST مع عدد من الإعدادات التي تم تعيينها ضمنيًا. على سبيل المثال ، DEFAULT_- تم تعيين PERMISSION_CLASSES على AllowAny قبل أن نقوم بتحديثه إلى IsAuthenticated.    يتم تعيين DEFAULT_AUTHENTICATION_CLASSES افتراضيًا على SessionAuthentication و       المصادقة الأساسية. دعونا نضيفها صراحةً إلى ملف project/settings.py الخاص بنا.
</div>
<div className="alert alert-warning mb-0"><pre>
REST_FRAMEWORK = {"{"}
... ,
<span className="o">'DEFAULT_AUTHENTICATION_CLASSES'</span>: [ <span className="text-success">#new</span>
  <span className="o">'rest_framework.authentication.SessionAuthentication'</span> ,
  <span className="o">'rest_framework.authentication.BasicAuthentication'</span> ,
],
{"}"}</pre>
</div>
<img src="{% static 'django/django119.png' %}" className="w-100"/>
<img src="{% static 'django/django120.png' %}" className="w-100"/>
<h2>5 - Implementing token authentication </h2>
<p>
<b>Now we need to update our authentication system to use <b>tokens</b> . <br/>
The first step is to update our DEFAULT_AUTHENTICATION_CLASSES setting to use TokenAuthentication as follows:</b>
</p>
<div className="alert alert-warning mb-0"><pre>
INSTALLED_APPS = [
 <span className="o">'django.contrib.admin'</span>,
 <span className="o">'django.contrib.auth'</span>,
 <span className="o">'django.contrib.contenttypes'</span>,
 <span className="o">'django.contrib.sessions'</span>,
 <span className="o">'django.contrib.messages'</span>,
 <span className="o">'django.contrib.staticfiles'</span>,
 
 <span className="o">'rest_framework',</span>
 <span className="o">'rest_framework.authtoken'</span>, <span className="text-success">#new</span>
 <span className="o">'posts.apps.PostsConfig'</span>,
]</pre>
</div>
<div className="alert alert-warning mb-0"><pre>
REST_FRAMEWORK = {"{"}
... ,
<span className="o">'DEFAULT_AUTHENTICATION_CLASSES'</span> : [ 
  <span className="o">'rest_framework.authentication.SessionAuthentication'</span> ,
  <span className="o">'rest_framework.authentication.TokenAuthentication'</span> , <span className="text-success">#new</span>
],
{"}"}</pre>
</div>
<p dir="rtl" className="fs-5m m-3"><b>نحتفظ بمصادقة SessionAuthentication لأننا ما زلنا بحاجة إليها لواجهة برمجة التطبيقات القابلة للتصفح الخاصة بنا ، ولكن الآن استخدام الرموز لتمرير بيانات اعتماد المصادقة ذهابًا وإيابًا في رؤوس HTTP الخاصة بنا</b></p>
<h2>6 - Dj-rest-auth (is a newer fork of the project.)</h2>
<a className="fs-4" href="https://dj-rest-auth.readthedocs.io/en/latest/" target="_blank"> dj-rest-auth </a>
<p><b></b></p>
<h3> 1 - install django-rest-auth</h3>
<div className="alert bg-dark text-light pb-0"><pre>pip install dj-rest-auth</pre></div>
<div className="alert alert-warning mb-0"><pre>
INSTALLED_APPS = [
 ...
 'rest_framework',
 'rest_framework.authtoken', #new
 'dj_rest_auth', <span className="text-success">#new</span>
 ...
]</pre>
</div>
<h3> 2 - why we use django-rest-auth</h3>
<img src="{% static 'django/django123.png' %}" className="w-100"/>
<h4> what mean endpoints ?</h4>
<img src="{% static 'django/django124.png' %}" className="w-100"/>

<h3> 3 - project/urls.py</h3>
<div className="alert alert-warning mb-0"><pre>
from django.contrib import admin
from django.urls import include, path 

urlpatterns = [
path(<span className="o">'admin/'</span>, admin.site.urls),
path(<span className="o">'api/v1/'</span>, include(<span className="o">'posts.urls'</span>)), 
path(<span className="o">'api-auth/'</span>, include(<span className="o">'rest_framework.urls'</span>)), 
path(<span className="o">'api/v1/rest-auth/'</span>, include(<span className="o">'dj_rest_auth.urls'</span>)), <span className="text-success">#new</span>
]</pre>
</div>

<div className="alert bg-dark text-light"><pre>python manage.py migrate</pre></div>
<h2>7 - User Registration </h2>
<h3>1 - django-allauth</h3>
<div className="fs-5"> with user registration as well as a number of additional features to the Django auth system such as social authentication via Facebook, Google, Twitter, etc. If we add rest_auth.registration from the django-rest-auth package then we have user registration endpoints too!</div>
<div className="alert bg-dark text-light pb-0"><pre>pip install django-allauth</pre></div>
<h3>2 - project/settings.py</h3>
<div className="alert alert-warning"><pre>
INSTALLED_APPS = [
<span className="o">'django.contrib.admin'</span>,
<span className="o">'django.contrib.auth'</span>,
<span className="o">'django.contrib.contenttypes'</span>,
<span className="o">'django.contrib.sessions'</span>,
<span className="o">'django.contrib.messages'</span>,
<span className="o">'django.contrib.staticfiles'</span>,
<span className="o">'django.contrib.sites'</span>, <span className="text-success">#new</span>


<span className="text-success">#3rd-party apps</span>
<span className="o">'rest_framework'</span>, 
<span className="o">'rest_framework.authtoken'</span>, 
<span className="o">'allauth'</span>, <span className="text-success">#new</span>
<span className="o">'allauth.account'</span>, <span className="text-success">#new</span>
<span className="o">'allauth.socialaccount'</span>, <span className="text-success">#new</span>
<span className="o">'dj_rest_auth'</span>,
<span className="o">'dj_rest_auth.registration'</span>,  <span className="text-success">#new</span>

<span className="text-success">#Local</span>
<span className="o">'posts.apps.PostsConfig'</span>, 
]
...

EMAIL_BACKEND = <span className="o">'django.core.mail.backends.console.EmailBackend'</span> <span className="text-success">#new</span>
SITE_ID = 1 <span className="text-success">#new</span></pre>
</div>
<div className="alert bg-dark text-light pb-0"><pre>python manage.py migrate</pre></div>
<h3>3 - project/urls.py</h3>
<div className="alert alert-warning"><pre>
urlpatterns = [
path('admin/', admin.site.urls),
path('api/v1/', include('posts.urls')), 
<span className="text-success">#sets up the URL path for the Django REST framework authentication views.</span>
path('api-auth/', include('rest_framework.urls')), 
<span className="text-success">#These endpoints include /login/, /logout/, /password/reset/, and /password/change/, 
#which are accessible through HTTP requests.</span>
path('api/v1/rest-auth/', include('dj_rest_auth.urls')), 
<span className="text-success">#sets up the URL path for the Django REST framework registration API endpoints. 
#These endpoints include /register/ and /verify-email/, which are used to create and verify user accounts</span>
path('api/v1/rest-auth/registration/', include('dj_rest_auth.registration.urls')), <span className="text-success">#new</span>
]</pre>
</div>
<div className="alert bg-dark text-light pb-0"><pre>python manage.py runserver</pre></div>
<h3>4 - Create registration </h3>
<img src="{% static 'django/django128.png' %}" className="w-100"/>
<h3>5 - login  </h3>
<h5>without axios</h5>
<img src="{% static 'django/django129.png' %}" className="w-100"/>
<h5>with axios</h5>
<img src="{% static 'django/django130.png' %}" className="w-100"/>
<div className="alert">use localStorage to save token key is to risk, to solve this issue i recommended to use package like :</div>
<ul>
<li><b>passport</b>  </li>
<li>or <b>bcrypt</b></li>
<li>or <b>express-session</b></li>
<li>or <b>csurf</b></li>
</ul>
<img src="{% static 'django/django131.png' %}" className="w-100"/>
<div className="fs-4 mt-3">By adding TokenAuthentication to the authentication_classes attribute of a view or viewset, you are requiring that any request made to that endpoint must include a valid token in the Authorization header. </div>











<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h2>9 - Viewsets and Routers </h2>
<h3>1 - The first two endpoints </h3>
<div className="fs-5">

The first two endpoints were created by us while <b>django-rest-auth</b> provided the five others.<br/>
Let’s now add two additional endpoints to <b>list all users</b> and individual users.<br/>   
<ul dir='ltr'>
<li>new serializer class for the model</li>
<li>new views for each endpoint</li>
<li>new URL routes for each endpoint</li>
</ul>
Start with our serializer. We need to import the <b>User</b> model and then create a
<b>UserSerializer</b> class that uses it. Then add it to our existing <kbd>posts/serializers.py</kbd> file.
</div>
<h3>2 - posts/serializers.py</h3>
<div className="alert alert-warning "><pre>
from django.contrib.auth import get_user_model <span className="text-success">#new</span>
from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
class Meta:
model = Post
fields = ('id', 'author', 'title', 'body', 'created_at',)

class UserSerializer(serializers.ModelSerializer): <span className="text-success">#new</span>
class Meta:
model = get_user_model()
fields = ('id', 'username',)</pre>
</div>
<h3>2 - posts/views.py</h3>
<div className="alert alert-warning "><pre>
from django.contrib.auth import get_user_model <span className="text-success">#new</span>
from rest_framework import generics
from .models import Post
from .permissions import IsAuthorOrReadOnly
from .serializers import PostSerializer, UserSerializer <span className="text-success">#new</span>

class PostList(generics.ListCreateAPIView):
queryset = Post.objects.all()
serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
permission_classes = (IsAuthorOrReadOnly,)
queryset = Post.objects.all()
serializer_class = PostSerializer

class UserList(generics.ListCreateAPIView): <span className="text-success">#new</span>
queryset = get_user_model().objects.all()
serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView): <span className="text-success">#new</span>
queryset = get_user_model().objects.all()
serializer_class = UserSerializer</pre>
</div>
<h3>3 - posts/urls.py </h3>
<div className="alert alert-warning ">
<pre>
from django.urls import path
from .views import UserList, UserDetail, PostList, PostDetail <span className="text-success">#new</span>

urlpatterns = [
path('users/', UserList.as_view()), <span className="text-success">#new</span>
path('users/&lt;int:pk{">"}/', UserDetail.as_view()), <span className="text-success">#new</span>
path('', PostList.as_view()), <span className="text-success">#new</span>
path('&lt;int:pk{">"}/', PostDetail.as_view()), <span className="text-success">#new</span>
]</pre>
</div>
<h4>get_user_model()</h4>
<img src="{% static 'django/django132.png' %}" className="w-100"/>
</div>



<br id="JWT_tokens"/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1>  JWT tokens </h1>
<div>
<h2> JWT tokens </h2>
<div className="fs-2 mb-5"> 
<b>JWTAuthentication</b> provides more flexibility and granularity in terms of authentication and authorization. JWT tokens can contain various claims or attributes such as user roles or permissions, which can be used to grant or restrict access to certain resources or endpoints.<br/><br/>
<b>For example</b> 
in a blogging application, you may have different types of users such as authors, editors, and administrators. You can use JWT tokens to differentiate between these user roles and restrict access to certain API endpoints or actions based on the user's role.<br/><br/>
In contrast, TokenAuthentication is a simpler authentication scheme that only provides a single token for a user, without any additional claims or attributes. This may be sufficient for simple use cases where you only need to authenticate a user without requiring any additional information about them.<br/><br/>
<b>If you need to implement a more complex authentication system that involves user roles or permissions, then JWTAuthentication would be a better choice because it provides greater flexibility and control over authentication and authorization. For example, you could use JWTAuthentication to restrict access to certain parts of your application based on the user's role or permissions. (like page admin)</b>
</div>
<h3> install djangorestframework_simplejwt </h3>
<div className="alert bg-dark text-light pb-0">
<pre>pip install djangorestframework_simplejwt</pre>
</div>
<h3>project/settings.py</h3>
<img src="{% static 'django/django132.png' %}" className="w-100"/>
<img src="{% static 'django/django133.png' %}" className="w-100"/>
<div className="fs-2 mb-5"> 
By default, <b>dj-rest-auth</b> uses the <b>SECRET_KEY</b> setting of your Django project as the key for signing the tokens. However, you can customize this key by adding the <b>JWT_AUTH</b> dictionary to your <b>settings.py</b> file and setting the <b>JWT_SECRET_KEY</b> parameter to your desired value.<br/><br/>
For example, to set a custom signing key for <b>JWT tokens</b>, you can add the following code to your <b>settings.py</b> file:
</div> 
<h3>React login</h3>
<img src="{% static 'django/django134.png' %}" className="w-100"/>
<img src="{% static 'django/django135.png' %}" className="w-100 mt-2"/>
<div className="alert alert-warning">
<pre><span className="text-success">//so you need to use this each request :</span>
const accessToken = localStorage.getItem('access_token');
const config = {"{"}
 headers: {"{"} 'Authorization': `JWT ${"{"}accessToken{"}"}` {"}"}
{"}"};</pre>
</div>
</div>

           {/* <Routes>
               <Route path='/'  element={<Introduction  />} />
               
           </Routes> */}
        </section>
    </main>
    )
}