import images from "../imagesLaravel";
import "./Mvc.css";
import { CodeCommand , CodeHighlighter ,  Result , ResultAlert } from "../../path";
import { useState } from "react";

export default function Mvc(props){
   const [resultAlertDisplayAlert ,setResultAlertDisplayAlert] = useState(true);   
   function clickOk(){ setResultAlertDisplayAlert(false); }

   const [getAbsoluteUrl, setgetAbsoluteUrl] = useState({
      route: "",
      title_route: "Exemple",
      id: "",
      country: "",
      nationality: "",
      visibility: false
   });

   return(
<>
   <h1 className="heading-style mb-5">Laravel MVC </h1>
      <article id="what_is_MVC">
         <h2 className="title-h2">1 - ما هو MVC </h2>
         <p className="style_divv">
            تعتبر MVC في Laravel نمطًا معماريًا يتبعه Laravel.<br/><br/>
            إليك نظرة عامة على كل مكون:
            <ul>
               <li><b className="text-success">النموذج (Model):</b> يُمثل النموذج البيانات والمنطق التجاري للتطبيق. في Laravel، تُمثل النماذج عادة جداول قواعد البيانات، وهي مسؤولة عن التفاعل مع قاعدة البيانات لأداء عمليات CRUD (الإنشاء، القراءة، التحديث، الحذف).</li>
               <li><b className="text-success">العرض (View):</b> يُمثل العرض طبقة العرض للتطبيق. العروض مسؤولة عن عرض البيانات للمستخدم ومعالجة تفاعلات واجهة المستخدم. في Laravel، تكتب العروض عادة بناءً على بنية Blade templating engine وتُستخدم لتوليد الإخراج HTML.</li>
               <li><b className="text-success">التحكم (Controller):</b> يعمل المتحكم كوسيط بين النموذج والعرض. يتولى المتحكم معالجة الطلبات الواردة عبر HTTP، واسترجاع البيانات من النموذج، وتمرير تلك البيانات إلى العرض للعرض. كما يتولى المتحكم معالجة أي إدخال من المستخدم وتحديث النموذج بناءً عليه. في Laravel، يتولى المتحكم تعريف منطق معالجة الطريق للتطبيق.</li>
            </ul>
            في الهندسة المعمارية MVC في Laravel، يوجه نظام التوجيه الطلبات الواردة إلى المتحكم المناسب، الذي يتفاعل بعد ذلك مع النموذج لاسترداد أو تلاعب البيانات. وأخيرًا، يقوم المتحكم بتمرير البيانات إلى العرض، الذي يقوم بتقديم الاستجابة HTML المناسبة للمستخدم. تساعد هذه الفصل في المخاوف على الحفاظ على تنظيم القاعدة البرمجية وصيانتها وتوسيعها.<br/>
         </p>
   </article>
   <article  id="First_Laravel_Project">
         <h2 className='title-h2'>2 - مشروع Laravel الأول</h2>
         <h3 className='title-h3'>1 -  إلغاء التعليق على ;extension=zip </h3>
         <p className='style_divv'>
            <ul>
               <li> افتح ملف <b>php.ini</b> المستخدم بواسطة تثبيت <b>XAMPP</b> الخاص بك. لقد ذكرت أنه موجود في <kbd>C:\xampp\php\php.ini</kbd></li>
               <li>ابحث عن السطر الذي يحتوي على <kbd>;extension=zip</kbd></li>
               <li>قم بإزالة الفاصلة المنقوطة في بداية السطر لإلغاء التعليق عليها.</li>
               <li> حفظ التغيير </li>
            </ul>
         </p>
         <h3 className='title-h3'>2 - انتقل إلى الدليل htdocs </h3>
         <p className='style_divv'>
            <ul><li>أولاً لإنشاء مشروع <b>Laravel</b>، عليك اتباع المسار :</li></ul>
            <CodeCommand>cd C:\xampp\htdocs</CodeCommand>
         </p>
         <h3 className='title-h3'>3 - تثبيت مجلد لارافيل  </h3>
         <p className='style_divv'>
            <ul><li>في المسار  <b>htdocs</b> استخدم :</li></ul>
            <CodeCommand> composer create-project laravel/laravel:^9.0 example-app </CodeCommand>
            <b className="text-success"> أو يمكنك إستخدام </b>
            <CodeCommand>composer global require laravel/installer</CodeCommand>
            <CodeCommand>laravel new example-app</CodeCommand>
         </p>
         <h3 className='title-h3'>4 - تحقق من إصدار مشروعك laravel </h3>
         <p className='style_divv'>
            <ul><li>انتقل أولاً إلى المجلد الذي تم إنشاؤه</li></ul>
            <CodeCommand>cd example-app</CodeCommand>
            <CodeCommand>php artisan --version</CodeCommand>
         </p>
   </article>
   <article id="run_project">
         <h2 className='title-h2'>3 - تشغيل المشروع </h2>
         <p className='style_divv'>
            <CodeCommand>php artisan serve</CodeCommand>
            <ul><li>تشغيل المشروع في <b>port</b> معين</li></ul>
            <CodeCommand>php artisan serve --port=7000</CodeCommand>
            <ul><li> قم بتغيير <b>Host</b> أو عنوان <b>IP</b>. بشكل افتراضي يرتبط بـ <b>127.0.0.1</b></li></ul>
            <CodeCommand>php artisan serve --host=0.0.0.0</CodeCommand>
         </p>
   </article>
   <article id="artisan">
         <h2 className='title-h2'>4 - artisan </h2>
         <p className='style_divv'>
            <ul><li>استخدم هذا الأمر لمعرفة كل شيء عن الأوامر في <b>Laravel</b></li></ul>
            <CodeCommand>php artisan</CodeCommand>
         </p>
   </article>
   <article id="views">
         <h2 className='title-h2'>5 - views</h2>
         <p className='style_divv'>
            <ul>
               <li>عندما نقوم بتشغيل <b>example-app</b>، فإن الصفحة التي تظهر افتراضيًا هي <b>Welcome.blade.php</b> في المسار : <br/><kbd>example-app/resources/views/welcome.blade.php</kbd></li>
               <li className="mt-2"> يمكنك كتابة <b>html</b> و <b>php</b> </li>
            </ul>
         </p>
   </article>
   <article id="route">
         <h2 className='title-h2'> 6 - route </h2>
         <p className="style_divv">
             في <b>Laravel</b>، تعمل المسارات كآلية لتحديد كيفية يجب التعامل مع الطلبات الواردة <b>HTTP</b> من قبل التطبيق. تقوم بإنشاء الاتصال بين عناوين <b>URL</b> محددة <b>(URIs)</b> وإجراءات التحكم أو الإغلاقات المقابلة. تعمل المسارات كنقاط دخول إلى التطبيق، حيث تحدد كيفية استجابته لطلبات <b>HTTP</b> المختلفة. من خلال تحديد المسارات، يمكن للمطورين تنظيم وهيكلة وظائف التطبيق، مما يسهل إدارته وصيانته.
         </p>
         <ul> <li>عندما نقوم بتشغيل <b>example-app</b>، فإن الصفحة التي تظهر افتراضيًا هي <kbd>welcome.blade.php</kbd></li> </ul>
         <CodeHighlighter  code={`Route::get('/',function(){
   return view('welcome') ;         # "welcome" : is file in => resources / views / welcome.blade.php
});

# New Route
Route::get('/route-name/{somthinhg}' , function( $somthinhg ){
   return view('welcome',["key"=> $somthinhg]) ;
});`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
  
         <CodeHighlighter  code={`<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    @if( isset($key) )
            <p>Key: {{ $key }}</p>
    @else
            <p>No data available for key.</p>
    @endif
</body>
</html>`} file_name="example-app / resources / views / welcome.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <Result title='Welcome' route="http://localhost:8000" url_change="/route-name/reda">
             Key: reda
         </Result>
         <Result title='Welcome' route="http://localhost:8000">
             No data available for key.
         </Result>
   </article>
   <article id="request">     
         <h2 className='title-h2'>7 - request</h2>
         <p className="style_divv">
              استخدم الطلب <bdi><b>request('')</b></bdi> مثل المتغير .<br/><br/>
              دالة <bdi><b>request()</b></bdi> في <b>Laravel</b> تُستخدم للوصول إلى قيم المتغيرات المرسلة في الطلب <b>HTTP</b>. يمكن استخدامها لاسترداد قيمة معينة مرسلة في الجسم <b>(body)</b> أو في الرأس <b>(header)</b> أو في الوسم <b>(tag)</b> الذي تم إرساله في الطلب.<br/>
              على سبيل المثال، إذا كان لديك طلب <b>POST</b> يحتوي على حقل يُسمى <b>"username"</b>، يمكنك استخدام <bdi><b>request('username')</b></bdi> لاسترداد قيمة هذا الحقل من الطلب.
         </p>
         <CodeHighlighter code={`Route::get('/store',function(){
    $variable = request('style') ;
    return '<h2>' . $variable . '</h2>' ;
});`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <div className="mital"> متال 1 : </div>
         <Result title='Welcome' route="http://localhost:8000/store" url_change="?style=Reda%20Eskouni">
             Reda Eskouni
         </Result>
         <div className="mital"> متال 2 : </div>
         <ResultAlert title='Welcome' logo={images.html_logo} clickOk={clickOk} displayAlert={resultAlertDisplayAlert} alertValue={`I'am Haker`}  route="http://localhost:8000/store"  url_change={`?style=<script>window.alert("I%27am%20Haker")</script>`}>
         </ResultAlert>
         <ul><li>يمكن استخدام <b>JavaScript</b> لإلغاء هذا إستخدام <b>strip_tags</b></li></ul>
         <CodeHighlighter code={`Route::get('/store',function(){
    $variable = request('style');
    return '<h2>' . strip_tags($variable) . '</h2>'
})`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
   </article>
   <article id="Controller"> 
         <h2 className='title-h2'>8 - Controller</h2>
         <p className="style_divv">
               في <b>Laravel</b> ، يُعد المُتحكم <b>(Controller)</b> فئة تتعامل مع طلبات <b>HTTP</b> و <b>HTTPS</b>  وتنفذ المنطق المناسب لتلك الطلبات. المُتحكمات هي جزء أساسي من نمط العمارة <b>MVC (Model-View-Controller)</b> الذي يتبعه <b>Laravel</b>.<br/><br/>
               هنا تفصيل لما يقوم به المُتحكم ومكوناته:
               <ul>
                  <li><b className="text-success">استقبال طلبات HTTP:</b> عندما يتفاعل المستخدم مع تطبيق الويب المبني باستخدام <b>Laravel</b> ، فإن أفعالهم عادة ما تُشغّل طلبات <b>HTTP</b>. يتم توجيه هذه الطلبات إلى مُتحكم بناءً على المسارات المعرفة في التطبيق.</li>
                  <li><b className="text-success">تنفيذ المنطق:</b> يحتوي المُتحكم على أساليب (أو أفعال) تتوافق مع مسارات أو نقاط نهاية مختلفة. تقوم كل طريقة عادة بأداء مهام محددة مثل استعلام قاعدة البيانات أو معالجة البيانات أو التفاعل مع الخدمات.</li>
                  <li><b className="text-success">إرجاع الردود:</b> بعد تنفيذ المنطق اللازم، يُرجع المُتحكم استجابة <b>HTTP</b> إلى العميل. يمكن أن تكون هذه الاستجابة بتنسيقات مختلفة مثل <b>HTML</b> أو <b>JSON</b> أو <b>XML</b>، وفقًا لمتطلبات التطبيق.</li>
                  <li><b className="text-success">التفاعل مع النماذج والعروض (المشاهد):</b> في عمارة <b>MVC</b> لـ <b>Laravel</b> ، تعمل المُتحكمات كوسيط بين النماذج (التي تمثل بيانات التطبيق) والعروض (التي تعرض البيانات للمستخدمين). يمكن للمُتحكمات استرداد البيانات من النماذج وتلاعب بها وتمريرها إلى العروض للتقديم.</li>
                  <li><b className="text-success">الوسيط (Middleware):</b> يمكن للمُتحكمات أيضًا استخدام الوسيط، وهو آلية لتصفية طلبات <b>HTTP</b> التي تدخل تطبيقك. يمكن أن يقوم الوسيط بمهام مثل المصادقة، والتفويض، ومعالجة الطلبات قبل وصول الطلب إلى طريقة العمل في المُتحكم.</li>
               </ul>
         </p>   
         <h3 className="title-h3">1 - لمعرفة كل شيء عن Controller  استخدام الأمر :</h3>
         <CodeCommand>php artisan make:controller -h</CodeCommand>
         <h3 className="title-h3">2 - إذا كنت تريد إنشاء Controller استخدام :</h3>
         <CodeCommand>php artisan make:controller ControllerName</CodeCommand>
         <ul><li>ستجد اسم وحدة التحكم للملف في التطبيق <bdi><b>example-app / Http / Controllers /</b></bdi></li></ul>
         <div className="mital"> متال : </div>
         <div dir="ltr" className="alert bg-dark text-light">
            C:\xampp\htdocs\example-app{">"} php artisan make:controller ControllerName <br/><br/>
            <span className="alert-primary p-1 rounded-1">INFO</span>  Controller [C:\xampp\htdocs\example-app\app/Http/Controllers/ControllerName.php] created successfully.
         </div>
         <CodeHighlighter code={`<?php

namespace App\\Http\\Controllers;
use Illuminate\\Http\\Request;

class ControllerName extends Controller
{
     public function welcome(){
         return view("welcome");
     }
     public function home(){
         return view("home");
     }
     public function about(){
         return view("about");
     }
}`} file_name="example-app / app / Http / Controllers / ControllerName.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`<?php

use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\ControllerName;

Route::get("/",     [ControllerName::class , "welcome" ]) -> name('index');
Route::get("/home", [ControllerName::class , "home" ]) -> name('home');
Route::get("/about",[ControllerName::class , "about" ]) -> name('about');`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome</title>
</head>
<body>
    <h2>Welcome</h2>
</body>
</html>`} file_name="example-app / resources / views / welcome.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
</head>
<body>
    <h2>Home</h2>
</body>
</html>`} file_name="example-app / resources / views / home.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>About</title>
</head>
<body>
    <h2>About</h2>
</body>
</html>`} file_name="example-app / resources / views / about.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <Result title='Welcome' route="http://localhost:8000">
               <h2>Welcome</h2>
         </Result>
         <Result title='Home' route="http://localhost:8000/home">
               <h2>Home</h2>
         </Result>
         <Result title='About' route="http://localhost:8000/about">
               <h2>About</h2>
         </Result>
   </article>
   <article id="layoute_page"> 
         <h2 className='title-h2'>9 - صفحة القالب layoute </h2>
         <p className="style_divv">
               صفحة القالب في <b>Laravel</b> تمثل الهيكل الأساسي لصفحات التطبيق، وتُستخدم لتعريف العناصر المشتركة مثل الهيدر والفوتر وشريط القائمة وغيرها التي تظهر على جميع صفحات التطبيق. تُستخدم صفحة القالب لتوحيد تصميم الصفحات وتسهيل عملية الصيانة، حيث يمكن إضافة محتوى الصفحة الفرعية داخلها باستخدام تعليمات <b>Blade</b> مثل <bdi><b>@yield</b></bdi> أو <bdi><b>@include</b></bdi> .
         </p>
         <div className="mital"> متال : </div>
         <ul><li>في <kbd>example-app/resources/views/</kbd> قم بإنشاء ملف <b>layoute.blade.php</b></li></ul>
         <CodeHighlighter code={`<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title> @yield('title') </title>
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" 
                        rel="stylesheet">
        <link rel="stylesheet" href="{{ url('style.css') }}">
   </head>

   <body class="antialiased">
      <nav>
         <a href="{{ route('index') }}"> welcome </a>
         <a href="{{ route('home') }}"> home </a>
         <a href="{{ route('about') }}"> about </a>
      </nav>
        @yield('content')
   </body>
</html>`} file_name="example-app / resources / views / layoute.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
   
   <CodeHighlighter code={`@extends('layoute')
@section('title','Welcome')

@section('content')
    <h2> Welcome </h2>
@endsection`} file_name="example-app / resources / views / welcome.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
   <CodeHighlighter code={`@extends('layoute')
@section('title','Home')

@section('content')
    <h2> Home </h2>
@endsection`} file_name="example-app / resources / views / home.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
   <CodeHighlighter code={`@extends('layoute')
@section('title','About')

@section('content')
    <h2> About </h2>
@endsection`} file_name="example-app / resources / views / about.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
   </article>
   <article id="css_and_javaScript">
         <h2 className='title-h2'>10 - استخدم CSS و javaScript </h2>
         <p className="style_divv">
            لاستخدام <b>CSS</b> أو <b>JS</b>، اكتبه في المجلد <kbd>example-app/public/</kbd><br/><br/>
            <ul>
               <li>يمكنك إنشاء مجلد باسم <bdi><b>css/</b></bdi> وكتابة ملفات <b>css</b> فيه . في حالتي قمت بإنشاء ملف بالاسم <b>style.css</b></li>
               <li>يمكنك إنشاء مجلد باسم <bdi><b>js/</b></bdi> وكتابة ملفات <b>js</b> فيه . </li>
            </ul>
            لاستخدام <b>style.css</b> في ملف ذو ملحق <bdi><b>.blade.php</b></bdi> بدون أخطاء استخدم <b>url</b>:
            <CodeHighlighter code={`<link rel="stylesheet" href="{{ url('css/style.css') }}" />`} language="html" number={false} addclassName="mt-3 mb-3" copie={true}/>
         </p>
   </article>
   <article id="route_name">
         <h2 className='title-h2'>11 - route name </h2>
         <p className="style_divv">
            تعد تسمية المسارات مفيدة لإنشاء عناوين <b>URL</b> وعمليات إعادة التوجيه. يمكنك تسمية طريق مثل هذا
         </p>
         <CodeHighlighter code={`Route::get("/",     [ControllerName::class , "welcome" ]) -> name('home.index');
Route::get("/contact", [ControllerName::class , "home" ]) -> name('home.contact');
Route::get("/about",[ControllerName::class , "about" ]) -> name('home.about');`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`<a href="{{ route('home.index') }}"> index </a>
<a href="{{ route('home.contact') }}"> contact </a>
<a href="{{ route('home.about') }}"> about </a>`} file_name="example-app / resources / views / file_name.blade.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
   </article>
   <article id="controller_resource">
         <h2 className='title-h2'>12 - controller resource</h2>
         <h3 className='title-h3'>1 - resource</h3>
         <p className="style_divv">
            في <b>Laravel</b> ، المتحكم <b>(Controller)</b> هو فصيلة تتعامل مع طلبات <b>HTTP</b> وتدير منطق التطبيق لمورد معين. المورد <b>(Resource)</b> في هذا السياق يشير عادة إلى نموذج أو مجموعة من الكيانات البيانات التي يتفاعل التطبيق معها.<br/><br/>
            عند تعريف مورد <b>(resource)</b> في <b>Laravel</b> ، فإنك تقوم في الأساس بإنشاء مجموعة من المسارات وطرق المتحكم التي تتوافق مع العمليات الأساسية <b>CRUD</b> (إنشاء، قراءة، تحديث، حذف) على هذا المورد. يتبع هذا النمط التصميمي <b>RESTful</b> ، حيث تُستخدم الأفعال <b>HTTP</b> مثل <b>GET</b> و <b>POST</b> و <b>PUT</b> و <b>DELETE</b> لأداء الإجراءات على الموارد.<br/><br/>
            لتعريف مورد في <b>Laravel</b> ، عادةً ما تستخدم الطريقة <bdi><b>Route::resource()</b></bdi> في ملف <kbd>routes/web.php</kbd> الخاص بك. تقوم هذه الطريقة بتوليد مسارات للمورد المحدد تلقائيًا ، وتعين الأفعال <b>HTTP</b> لطرق المتحكم.<br/><br/>
            <b>على سبيل المثال سيؤدي هذا إلى توليد المسارات التالية:</b>
            <CodeHighlighter code={`use App\\Http\\Controllers\\YourController;
Route::resource('your-resource', YourController::class);`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
               <ul>
                   <li><b className="text-success">GET /your-resource</b>  - الطريقة <bdi><b>index()</b></bdi> في <b>YourController</b></li>
                   <li><b className="text-success">GET /your-resource/create</b>  - الطريقة <bdi><b>create()</b></bdi> في <b>YourController</b></li>
                   <li><b className="text-success">POST /your-resource</b>  - الطريقة <bdi><b>store()</b></bdi> في <b>YourController</b></li>
                   <li><b className="text-success">GET /your-resource/{"{"}id{"}"}</b>  - الطريقة <bdi><b>show()</b></bdi> في <b>YourController</b></li>
                   <li><b className="text-success">GET /your-resource/{"{"}id{"}"}/edit</b>  - الطريقة <bdi><b>edit()</b></bdi> في <b>YourController</b></li>
                   <li><b className="text-success">PUT/PATCH /your -resource/{"{"}id{"}"}</b> - الطريقة <bdi><b>update()</b></bdi> في <b>YourController</b></li>
                   <li><b className="text-success">DELETE /your-resource/{"{"}id{"}"}</b>  - الطريقة <bdi><b>destroy()</b></bdi> في <b>YourController</b></li>
               </ul>
               فصيلة <b>YourController</b> ستعرف ثمود تطابق لهذه الإجراءات (<bdi><b>index()</b></bdi>، <bdi><b>create()</b></bdi>، <bdi><b>store()</b></bdi>، <bdi><b>show()</b></bdi>، <bdi><b>edit()</b></bdi>، <bdi><b>update()</b></bdi>، <bdi><b>destroy()</b></bdi>) للتعامل مع الطلبات <b>HTTP</b> المقابلة وأداء الإجراءات اللازمة على المورد (مثل الاستعلام عن قاعدة البيانات، وتلاعب البيانات، وإرجاع الردود، وما إلى ذلك).
         </p>
         <h3 className='title-h3'>2 - إنشاء controller resource </h3>
         <p className="style_divv">
            لإنشاء <b>controller resource</b> إستخدام :
            <CodeCommand>php artisan make:controller YourController --resource</CodeCommand>   
            <b>أو</b> 
            <CodeCommand>php artisan make:controller YourController -r</CodeCommand>    
            ستجد ملف <b>YourController.php</b> في  <kbd>/app/Http/Controllers/</kbd>
         </p>
         <CodeHighlighter code={`<?php

namespace App\\Http\\Controllers;
use Illuminate\\Http\\Request;

class YourController extends Controller {
     public function index(){    }
     public function create(){    }
     public function store(Request $request){    }
   public function show($id){    }
   public function edit($id){    }
   public function update(Request $request, $id){    }
   public function destroy($id){    }
}`} file_name="example-app / app / Http / Controllers / YourController.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
   </article>
   <article id="list_all_route_in_project">
         <h2 className="title-h2"> 13 - قائمة كافة الطرق (route) في المشروع</h2>
         <CodeCommand>php artisan route:list</CodeCommand>
   </article>
   <article id="Exemple">
         <h2 className="title-h2"> 14 - متال </h2>
         <CodeCommand>php artisan make:controller CountryController -r</CodeCommand>
         <CodeHighlighter code={`<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class CountryController extends Controller {
    private function somedata(){
        return [
            ["id" => 1, "country" => "Maroc",  "nationality" => "Moroccan"],
            ["id" => 2, "country" => "Maroc",  "nationality" => "Moroccan"],
            ["id" => 3, "country" => "Maroc",  "nationality" => "Moroccan"],
            ["id" => 4, "country" => "Espain", "nationality" => "Moroccan"],
            ["id" => 5, "country" => "Egypt",  "nationality" => "Egyptian"]
        ];
    }
      
    public function index(){
        return view('countries.index', ['countries' => self::somedata()]);
    }
    
    public function create(){  }
    public function store(Request $request){  }

    public function show($country){
         $data = self::somedata();
         $index = array_search($country, array_column($data, 'id'));

         if ($index === false) {
           abort(404);
         }
         return view('countries.show', ['country' => $data[$index]]);
    }
    
    public function edit($id){  }
    public function update(Request $request, $id){  }
    public function destroy($id){  }
}`} file_name="example-app / app / Http / Controllers / CountryController.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`<?php

use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\CountryController;

Route::resource('countries', CountryController::class);
?>`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="stylesheet" href="{{ url('css/style.css') }}">
     <title> Exemple </title>
</head>
<body>
     @yield('content')
</body>
</html>`} file_name="example-app / resources / wiews / layoute.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <ul>
             <li> قم بإنشاء مجلد جديد <bdi><b>countries/</b></bdi> في طرق العرض <b>views</b> </li>
             <li> في مجلد <bdi><b>countries/</b></bdi> قم بإنشاء ملف <b>index.blade.php</b> </li>
         </ul>
         <CodeHighlighter code={`@extends('layoute')

@section('content')
   <h1 class="r">localhost:8000/country/index</h1>

   <section id='section'>
      @foreach ($countries as $country)
            <a class="box" href="{{ route('countries.show', ['country' => $country['id'] ]) }}" >
                id: <b>{{ $country['id'] }}</b> <br/>
                contry: <b>{{ $country['country'] }}</b> <br/>
                nationality: <b>{{ $country ['nationality'] }}</b>
            </a>
      @endforeach
   </section>
@endsection`} file_name="example-app / resources / wiews / countries / index.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <ul> <li> في مجلد <bdi><b>countries/</b></bdi> قم بإنشاء ملف <b>show.blade.php</b> </li> </ul>
         <CodeHighlighter code={`@extends('layoute')

@section('content')    
    <h2>
       <ul>
           <li> id : {{ $country['id'] }} </li>
           <li> country : {{ $country['country'] }} </li>
           <li> nationality : {{ $country['nationality'] }} </li>
       </ul>
    </h2>  
@endsection`} file_name="example-app / resources / wiews / countries / show.blade.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         <CodeHighlighter code={`#section {
    display: flex;
    flex-wrap: wrap;
}

.box {
    background-color: red;
    border: 4px solid green;
    margin: 8px;
    padding: 8px;
    box-sizing: border-box;
    color: white;
    font-size: 18px;
}`} file_name="example-app / public / css / style.css" language="css" number={true} addclassName="mt-3 mb-3" copie={true}/>
      <ul><li> انتقل إلى المسار <bdi><b>http://localhost:8000/countries/</b></bdi> </li></ul>
      <Result title={getAbsoluteUrl.title_route} route={`http://localhost:8000/countries/${getAbsoluteUrl.route}`}>
               {(getAbsoluteUrl.visibility)?(
                  <>
                     <h2>
                        <ul>
                            <li>id : {getAbsoluteUrl.id} </li>
                            <li>country : {getAbsoluteUrl.country}</li>
                            <li>nationality : {getAbsoluteUrl.nationality}</li>
                        </ul>
                     </h2>
                  </>
               ):(
                  <>
                  <h1>localhost:8000/country/index</h1>
                  <section id='section-mvc'>
                        <div className="box-mvc" onClick={()=>{ setgetAbsoluteUrl({title_route:"Exemple",route:"1/",id:"1",country:"Maroc",nationality:"Moroccan",visibility:true}) }}>
                            id: <b>1</b> <br/>
                            contry: <b>Maroc</b><br/>
                            nationality: <b>Moroccan</b>
                        </div>
                        <div className="box-mvc" onClick={()=>{ setgetAbsoluteUrl({title_route:"Exemple",route:"2/",id:"2",country:"Maroc",nationality:"Moroccan",visibility:true}) }}>
                            id: <b>2</b> <br/>
                            contry: <b>Maroc</b><br/>
                            nationality: <b>Moroccan</b>
                        </div>
                        <div className="box-mvc" onClick={()=>{ setgetAbsoluteUrl({title_route:"Exemple",route:"3/",id:"3",country:"Maroc",nationality:"Moroccan",visibility:true}) }}>
                            id: <b>3</b> <br/>
                            contry: <b>Maroc</b><br/>
                            nationality: <b>Moroccan</b>
                        </div>
                        <div className="box-mvc" onClick={()=>{ setgetAbsoluteUrl({title_route:"Exemple",route:"4/",id:"4",country:"Espain",nationality:"Moroccan",visibility:true}) }}>
                            id: <b>4</b> <br/>
                            contry: <b>Espain</b><br/>
                            nationality: <b>Moroccan</b>
                        </div>
                        <div className="box-mvc" onClick={()=>{ setgetAbsoluteUrl({title_route:"Exemple",route:"5/",id:"5",country:"Egypt",nationality:"Egyptian",visibility:true}) }}>
                            id: <b>5</b> <br/>
                            contry: <b>Egypt</b><br/>
                            nationality: <b>Egyptian</b>
                        </div>
                  </section>
                  </>
               )}
            </Result>  
            

   </article>
</>
   )
}