import { CodeCommand , CodeHighlighter } from "../../path";
import images from "../imagesDjangoRest"

export default function Introduction(props){
   return(
   <>
      <h1 className="heading-style heading-style-python-color"> DRF Introduction </h1>
      <article className="mt-5">
         <h2 className="title-h2" id="What_is_django_rest_framework">1 - ما هو Django Rest Framework (DRF) </h2>
         <p className="style_divv" >
            <b>Django Rest Framework (DRF)</b> هو مجموعة أدوات قوية ومرنة لبناء واجهات برمجة تطبيقات الويب <b>(APIs)</b> في إطار الويب <b>Django</b>. إنه حزمة منفصلة توسع قدرات <b>Django</b> لتبسيط إنشاء واجهات <b>API RESTful</b>. تم تصميم <b>DRF</b> لتسهيل إنشاء واختبار ونشر <b>APIs</b> استنادًا إلى مبادئ نقل الحالة التمثيلية <b>(REST)</b>.
         </p>
         <h2 className="title-h2" id="What_is_API">2 - ما هو API </h2>
         <p className="style_divv">
            <b>API</b> تعني واجهة برمجة التطبيقات. إنها مجموعة من القواعد والأدوات التي تتيح لتطبيقات البرمجة المختلفة التواصل مع بعضها البعض. تعرف واجهات برمجة التطبيقات الطرق وتنسيقات البيانات التي يمكن للتطبيقات استخدامها لطلب وتبادل المعلومات. إنها تعمل كوسيط، مما يتيح دمج نظم البرمجيات المختلفة أو الخدمات أو المنصات.<br/><br/>
            تلعب واجهات برمجة التطبيقات دورًا حاسمًا في تطوير البرمجيات الحديثة، حيث تيسر بناء تطبيقات مقسمة ومرنة. إنها تسمح للمطورين بالوصول إلى وظائف معينة في مكون برمجي معين أو خدمة أو منصة دون الحاجة إلى فهم العمليات الداخلية له. يسهل هذا التجريد عملية التطوير ويعزز التوافق بين نظم البرمجيات المختلفة.<br/><br/>
            الجوانب الرئيسية لواجهات برمجة التطبيقات تشمل:
            <ul>
               <li><b className="text-success">النقاط النهائية (Endpoints) :</b> تكشف واجهات برمجة التطبيقات عن نقاط نهائية أو عناوين <b>URL</b> معينة تمثل وظائف أو مواردًا مختلفة. تمثل كل نقطة نهائية عملية أو مجموعة بيانات معينة يمكن لواجهة البرمجة التعامل معها.</li>
               <li><b className="text-success">تنسيق الطلب والاستجابة (Request and Response Format) :</b> تعرف واجهات برمجة التطبيقات تنسيق الطلب والطريقة التي يجب فيها عمل الاستجابات. تشمل التنسيقات الشائعة <b>JSON (JavaScript Object Notation)</b> و <b>XML (eXtensible Markup Language)</b>.</li>
               <li><b className="text-success">طرق HTTP  :</b>  غالباً ما تستخدم واجهات برمجة التطبيقات طرق <b>HTTP</b> القياسية مثل <b>GET</b> و <b>POST</b> و <b>PUT</b> و <b>DELETE</b> لأداء عمليات على الموارد. على سبيل المثال، قد يستخدم طلب <b>GET</b> لاسترجاع البيانات، بينما يمكن استخدام طلب <b>POST</b> لإنشاء بيانات جديدة.</li>
               <li><b className="text-success">المصادقة (Authentication) :</b>  تتطلب العديد من واجهات برمجة التطبيقات مصادقة لضمان أنه يمكن للمستخدمين أو التطبيقات المصرح لها فقط الوصول إلى مواردها. يمكن أن يشمل ذلك استخدام مفاتيح <b>API</b> أو رموز أمان أو آليات مصادقة أخرى.</li>
               <li><b className="text-success">التوثيق(Documentation) :</b> يتضمن تصميم واجهات برمجة التطبيقات التوثيق الواضح والشامل الذي يساعد المطورين على فهم كيفية استخدام الواجهة والتي تتوفر بها نقاط النهاية والتنسيقات المقبولة للبيانات وأي متطلبات للمصادقة.</li>
            </ul>
         </p>
         <h2 className="title-h2" id="Install_Django_Rest_Framework">3 -  تثبيت Django Rest Framework (DRF)</h2>
         <h3 className="title-h3">1 - تحتاج إلى إنشاء virtualenv وتنشيطه أولاً </h3>
         <CodeCommand>python -m virtualenv env-project-rest</CodeCommand>
         <CodeCommand>.\\Scripts\activate</CodeCommand>
         <h3 className="title-h3">2 - تثبيت django </h3>
         <CodeCommand>python -m pip install django</CodeCommand>
         <h3 className="title-h3">3 - إنشاء مشروع django</h3>
         <CodeCommand> python -m django startproject project_name</CodeCommand>
         <CodeCommand>cd project_name</CodeCommand>
         <h3 className="title-h3">4 - تثبيت django rest framework</h3>
         <h5 className="title-h5">1 - تثبيت الحزمة </h5>
         <CodeCommand>pip install djangorestframework</CodeCommand>
         <h5 className="title-h5">2 - ملف setting داخل project_name </h5>
         <ul><li>انتقل إلى <b>INSTALLED_APPS</b> وأضف</li></ul>
         <CodeHighlighter code={`INSTALLED_APPS = [
   ...
   'rest_framework',   #new
]`} file_name="project_name / project_name / setting.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <h5 className="title-h5">3 - ملف urls داخل project_name</h5>
         <ul><li>انتقل إلى <b>urlpatterns</b> وأضف</li></ul>
         <CodeHighlighter code={`from django.contrib import admin
from django.urls import path , include

urlpatterns = [
   ...
   path('api-auth/', include('rest_framework.urls')) ,   #new
]

#localhost:8000/api-auth/login
#go to this path and input your username and password`} file_name="project_name / project_name / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <h5 className="title-h5">4 - localhost:8000/api-auth/login </h5>
         <img src={images.django_rest_1} alt="django rest" className="w-100" />
      </article>
   </>
   )
}