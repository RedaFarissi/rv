import images from "../imagesLaravel";
import { CodeCommand , CodeHighlighter ,  Result , ResultAlert } from "../../path";
import { useState } from "react";

export default function Mvc(props){
   const [resultAlertDisplayAlert ,setResultAlertDisplayAlert] = useState(true);   

   function clickOk(){
       setResultAlertDisplayAlert(false);
   }

   return(
<>
   <h1 className="heading-style mb-5">Laravel MVC </h1>
   <article className="mt-5" id="what_is_laravel">
         <h2 className='title-h2' > 1 - ما هو laravel  </h2>
         <p className="style_divv">
            لارافيل هو إطار عمل <b>PHP</b> مفتوح المصدر لتطوير تطبيقات الويب. تأتي مع <b>ORM</b> يُسمى <b>Eloquent</b> ومحرك <b>Blade</b> لتصميم الواجهات. يوفر أداة <b>Artisan</b> لإدارة المهام والتكوين. يتبع نمط <b>MVC</b> ويشمل <b>Middleware</b> لمرشحات <b>HTTP</b>. يوفر توجيهًا بسيطًا وحقن إعتماد لإدارة التبعيات. يشمل نظام ترتيب قواعد البيانات وزرع البيانات. لديه بيئة نشطة ومجتمع وثائق جيدة. اشتهر ببنية أنيقة وميزات مطور ودية، مما يجعله خيارًا شائعًا لبناء تطبيقات الويب الحديثة.<br/><br/>
            <b>MVC</b> ، أو <b>Model-View-Controller</b>، هو نمط هندسة برمجيات يستخدم عادة في تطوير الويب. يقسم التطبيق إلى ثلاث مكونات مترابطة:<br/>
               <ul>
                  <li><b className='text-success'> النموذج (Model) :</b> يُمثل البيانات والمنطق التجاري للتطبيق. يدير البيانات، ويستجيب للاستعلامات، ويعالج التعليمات من المُتحكم.</li>
                  <li><b className='text-success'> العرض (View) :</b> يقدم البيانات للمستخدم ويتعامل مع تفاعلات واجهة المستخدم. يستقبل الإدخالات، ويعرض النتائج، ويُرسل تفاعلات المستخدم إلى المتحكم.</li>
                  <li><b className='text-success'> المتحكم (Controller) :</b> يدير تدفق البيانات بين النموذج والعرض. يفسر إدخالات المستخدم من العرض، ويُحدث النموذج وفقًا لذلك، ويضمن أن العرض يعكس التغييرات.</li>
               </ul>
            يعزز نمط <b>MVC</b> فصل الاهتمامات، مما يجعل قاعدة الشيفرة أكثر تنظيمًا وسهولة في الصيانة. ويسمح بالتعاون بشكل أسهل بين المطورين العاملين على جوانب مختلفة من التطبيق.
         </p>
   </article>
   <article id="what_we_need_to_use_laravel">
         <h2 className='title-h2'> 2 - ما نحتاجه لاستخدام laravel  </h2>
         <p className='style_divv'>
            نحتاج إلى بيئة تشغيل محلية لتطوير تطبيقات <b>Laravel</b> باستخدام <b>PHP</b>. هناك اثنان من أشهر البيئات هما <b>XAMPP</b> و <b>MAMP</b>، ويمكنك اختيار أي منهما حسب نظام التشغيل الخاص بك.<br/>
            <ul>
               <li>
                  <b>XAMPP أو MAMP:</b>
                  <ul>
                     <li>قم بتثبيت <b>XAMPP</b> أو <b>MAMP</b> على جهاز الكمبيوتر الخاص بك. هذا سيوفر لك خوادم <b>Apache</b> و <b>MySQL</b> و <b>PHP</b> جاهزة للاستخدام.</li>
                     <li>قم بتشغيل الخوادم لبدء تشغيل بيئتك المحلية.</li>
                  </ul>
               </li>
               <li>
                  <b>Composer:</b>
                  <ul>
                     <li>تحقق من توافر <b>Composer</b> على نظامك عبر الأمر  في واجهة الأوامر. إذا لم يكن مثبتًا، يمكنك تنزيله وتثبيته من الموقع الرسمي للمكتبة.</li>
                  </ul>
               </li>
               <CodeCommand>composer</CodeCommand>
               <li>
                  <b>Node.js:</b>
                  <ul>
                     <li>لتجميع ملفات <b>CSS</b> و <b>JavaScript</b>، ستحتاج إلى تثبيت <b>Node.js</b>. يمكنك تحقق من توافره باستخدام الأمر .</li>
                  </ul>
               </li>
               <CodeCommand>node -v</CodeCommand>
            </ul>
         </p>
         <div className='row mt-2'>
            <img src={images.laravel0_env} alt="laravel path"  className="col-md-4"/>
            <img src={images.laravel0_env2} alt="laravel path" className="col-md-4"/>
            <img src={images.laravel0_env3} alt="laravel path" className="col-md-4"/>
         </div>
   </article>
   <article  id="First_Laravel_Project">
         <h2 className='title-h2'>3 - مشروع Laravel الأول</h2>
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
         <h2 className='title-h2'>4 - تشغيل المشروع </h2>
         <p className='style_divv'>
            <CodeCommand>php artisan serve</CodeCommand>
            <ul><li>تشغيل المشروع في <b>port</b> معين</li></ul>
            <CodeCommand>php artisan serve --port=7000</CodeCommand>
            <ul><li> قم بتغيير <b>Host</b> أو عنوان <b>IP</b>. بشكل افتراضي يرتبط بـ <b>127.0.0.1</b></li></ul>
            <CodeCommand>php artisan serve --host=0.0.0.0</CodeCommand>
         </p>
   </article>
   <article id="artisan">
         <h2 className='title-h2'>5 - artisan </h2>
         <p className='style_divv'>
            <ul><li>استخدم هذا الأمر لمعرفة كل شيء عن الأوامر في <b>Laravel</b></li></ul>
            <CodeCommand>php artisan</CodeCommand>
         </p>
   </article>
   <article id="views">
         <h2 className='title-h2'>6 - views</h2>
         <p className='style_divv'>
            <ul>
               <li>عندما نقوم بتشغيل <b>example-app</b>، فإن الصفحة التي تظهر افتراضيًا هي <b>Welcome.blade.php</b> في المسار : <br/><kbd>example-app/resources/views/welcome.blade.php</kbd></li>
               <li className="mt-2"> يمكنك كتابة <b>html</b> و <b>php</b> </li>
            </ul>
         </p>
   </article>
   <article id="route">
         <h2 className='title-h2'> 7 - route </h2>
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
         <h2 className='title-h2'>8 - request</h2>
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
         <h2 className='title-h2'>9 - Controller</h2>
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
         <h2 className='title-h2'>10 - صفحة القالب layoute </h2>
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
         <h2 className='title-h2'>11 - استخدم CSS و javaScript </h2>
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
         <h2 className='title-h2'>12 - route name </h2>
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
         <h2  className='title-h2'>13 - controller resource</h2>
         <p className="style_divv">
               
         </p>
         <div className="alert alert-warning text-black fs-5">
            to use database start with command : 
            <div className="bg-dark text-light fs-5 p-4 pb-2 mb-2 rounded"><pre> php artisan make:controller ControllerData -r  </pre></div>
            or
            <div className="bg-dark text-light fs-5 p-4 pb-2 mb-2 rounded"><pre> php artisan make:controller ControllerData --resource  </pre></div>
            You will find a file ControllerData in app/Http/Controllers/<br/>
            <strong>path : example-app/app/Http/Controllers/ControllerData.php</strong><br/><br/>
            {/* <div className="alert bg-light"><pre>
         <span style="color:blue">&lt;?php</span>
            <span className="b">namespace</span> <span className="text-success">App</span>\<span className="text-success">Http</span>\<span className="text-success">Controllers</span>;
            <span className="b">use</span> <span className="text-success">Illuminate</span>\<span className="text-success">Http</span>\<span className="text-success">Request</span>;

            <span className="text-success">class</span> ControllerData <span className="text-success">extends</span> Controller{
               private static function data(){     <span style={{color:'green'}}>#private function for save data from haker</span>
                   <span className="v">return</span> [
                       ['id' => 1 , 'first_name' => 'Reda'   , 'last_name' => 'Eskouni' , 'age' => 26],
                       ['id' => 2 , 'first_name' => 'Adil'   , 'last_name' => 'Chardoud' , 'age' => 20],
                       ['id' => 3 , 'first_name' => 'Jaloul' , 'last_name' => 'Kharboucha' , 'age' => 70]
                   ];   
               }
               <span className="b">public function</span> index(){
                   <span className="v">return</span> view('data', ['data' => self::data()]);
               }
               <span className="b">public function</span> create(){}
               <span className="b">public function</span> store(Request $request){}
               <span className="b">public function</span> show($id){}
               <span className="b">public function</span> edit($id){}
               <span className="b">public function</span> update(Request $request, $id){}
               <span className="b">public function</span> destroy($id){}
            }
            </pre>
            </div> */}
            add route with name data in<br/>
            <strong>path : example-app/routes/web.php</strong><br/><br/>
            {/* <div className="alert bg-light"><pre>
            <span style={{color:'green'}}>#use ...</span>
            use App\Http\Controllers\ControllerData;
            <span style={{color:'green'}}>#route ...</span>
            Route::resource("/data", ControllerData::class);</pre>
            </div> */}
            <p> add link in nav in file layoute.blade.php </p>
            {/* <div className="alert bg-light"><pre>
            <span style={{color:'green'}}>&lt;!-- ... code -{"->"}</span>
               &lt;nav>
               <span style={{color:'green'}}>&lt;!-- ... another link -{"->"}</span>
                  &lt;a href="/data"> data &lt;/a>
               &lt;/nav>
            <span style={{color:'green'}}>&lt;!-- ... code -{"->"}</span></pre></div>    */}
            add data.blade.php with name data in<br/>
            <b>path: example-app/resources/views/ </b><br/>
            {/* <div className="alert bg-light"><pre>
         <span style={{color:'green'}}>&lt;!-- example-app/resources/views/data.blade.php -{"->"}</span>
            @extends('layout')
            @section('title','data')
            @section('content')
               @if( count($data) > 0 )
                  &lt;table>
                     &lt;thead>
                        &lt;tr>
                           &lt;th>Id&lt;/th>               
                           &lt;th>First name&lt;/th>
                           &lt;th>Last name&lt;/th>     
                           &lt;th>Age&lt;/th>
                           &lt;th>More&lt;/th>
                          </tr>
                     &lt;/thead>
                     &lt;tbody>
                          @foreach ($data as $d)
                              &lt;tr>
                                  &lt;td>&#123;&#123; $d['id'] &#125;&#125;&lt;/td> 
                                  &lt;td>&#123;&#123; $d['first_name'] &#125;&#125;&lt;/td> 
                                  &lt;td>&#123;&#123; $d['last_name'] &#125;&#125;&lt;/td> 
                                  &lt;td>&#123;&#123; $d['age'] &#125;&#125;&lt;/td> 
                                  &lt;td> .... &lt;/td> 
                              &lt;/tr>
                          @endforeach
                     &lt;/tbody>
                  &lt;/table>
               @endif
            @endsection</pre>
            </div> */}
         </div>
         
         <h3  className='title-h3' id="method_in_controller">2 - method in controller created by <kbd className="bg-black"><em>php artisan make:controller ControllerName -r</em></kbd> </h3>
         <div className="alert alert-warning text-black fs-5">
            php artisan make:controller ControllerName -r
            in path: <b>app/Http/Controllers/</b> class ControllerName will created by defalut .<br/> 
            This class have method :
            <ul>
               <li>index</li> <li>create</li> <li>store</li> <li>show</li><li>edit</li> <li>update</li> <li>destroy</li>
            </ul>
         </div>
         
         <h3 className='title-h3' id="recource">3 - recource</h3>
         <div className="alert alert-warning text-black fs-5">
         
            <img src={images.laravel11} className="w-100" alt="web.php"/>
         
            when we use <kbd>php artisan make:controller ControllerName -r</kbd> to create class .<br/> class content metheds by deafult :
            {/* <div className="alert alert-primary text-black fs-5 pb-0">
               <pre> <span className="text-success">Route</span><span className="bc">::resource(</span><span className="o">"./path"<span className="bc"></span>, <span className="text-success">ControllerData</span>::<span className="b">class</span><span className="bc">)</span>; </pre>
            </div> */}
            by default you can get all this method when we use <span className="bg-success p-2 rounded text-light">recource</span> instead of <span className="bg-danger p-2 rounded text-light">get</span>
            <br/><br/><b className="text-danger">example :</b><br/>
            create another controller with name <b>CountryController</b> use :<br/>
            <div className="bg-dark text-light"><pre>php artisan make:controller CountryController -r</pre></div>
            <b>Path: example-app/app/Http/Controllers/CountryController.php</b>
            <div className="alert bg-light mt-2">
               <img src={images.controller_r} className="w-100" alt="controller -r"/>
            </div>
            <b>Path: example-app/routes/web.php</b>
            <div className="alert bg-light mt-2">
               <img src={images.Laravel0} className="w-100" alt="web.php"/>
            </div>
            <b>create page layoute.php in views</b><br/>
            <b>Path: example-app/resources/wiews/layoute.php</b>
            <div className="alert bg-light mt-2">
               <img src={images.laravel0_layoute} className="w-100" alt="web.php"/>
            </div>
            <b className="text-success">create new folder countrys in views .</b><br/>
            <b>in countrys/ folder create file index.blade.php</b><br/>
            <b>Path: example-app/resources/wiews/countrys/index.blade.php</b>
            <div className="alert bg-light mt-2">
               <img src={images.index} className="w-100" alt="web.php"/>
            </div>
            <b>in countrys/ folder create file show.blade.php</b><br/>
            <b>Path: example-app/resources/wiews/countrys/show.blade.php</b>
            <div className="alert bg-light mt-2">
               <img src={images.laravel0_show} className="w-100" alt="web.php"/>
            </div>
            <div className="alert bg-danger text-light"><b>Result</b> </div>
            <div className="alert bg-light mt-2">
               <img src={images.laravel0_result} className="w-100" alt="web.php"/>
            </div>
            <b>new click on id : 3 </b>
            <div className="alert bg-light mt-2">
               <img src={images.laravel0_result2} className="w-100" alt="web.php"/>
            </div>
            <div className="alert alert-danger">
               <b>note</b> : you can't change name <em><u>show.blade.php</u></em> or <em><u>index.blade.php</u></em> because we use <b>Route::resource(...)</b> .
            </div>
         </div>
    </article>
    <article id="list_all_route_in_project">
            <h2 className="title-h2"> 14 - قائمة كافة الطرق (route) في المشروع</h2>
            <CodeCommand>php artisan route:list</CodeCommand>
    </article>
</>
   )
}