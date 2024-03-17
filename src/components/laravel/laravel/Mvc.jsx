import images from "../imagesLaravel";
import { CodeCommand } from "../../path";

export default function Mvc(props){
   return(
<>
    <h1 className="heading-style">Laravel MVC </h1>
    <article id="mt-5">
         <h2 className='title-h2' id="what_is_laravel"> 1 - ما هو laravel  </h2>
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

         <h2 className='title-h2' id="what_we_need_to_use_laravel"> 2 - ما نحتاجه لاستخدام laravel  </h2>
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

         <h2 className='title-h2' id="First_Laravel_Project">3 - مشروع Laravel الأول</h2>
         <p className='style_divv'>
            <ul>
               <li> افتح ملف <b>php.ini</b> المستخدم بواسطة تثبيت <b>XAMPP</b> الخاص بك. لقد ذكرت أنه موجود في <kbd>C:\xampp\php\php.ini</kbd></li>
               <li>ابحث عن السطر الذي يحتوي على <kbd>;extension=zip</kbd></li>
               <li>قم بإزالة الفاصلة المنقوطة في بداية السطر لإلغاء التعليق عليها.</li>
               <li> حفظ التغيير </li>
            </ul>
            <b>أولاً لإنشاء مشروع Laravel، عليك اتباع المسار :</b>
            <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre>cd C:\xampp\htdocs</pre></div>
         </p>

         <div className="alert alert-warning text-black fs-5">
            <p> in path htdocs use :</p>
            <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre> composer create-project laravel/laravel:^9.0 example-app </pre></div>
            <b>or</b>
         <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre>
         composer global require laravel/installer<br/>
         laravel new example-app</pre>
         </div>
            <h3>check for version of your project laravel</h3>
            <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre><span className='text-secondary'>example-app{">"}</span> php artisan --version</pre></div>
         </div>


         <h2 className='title-h2' id="run_project">4 - run project </h2>
         <div className="alert alert-warning text-black fs-5">
            <div className="bg-dark text-light fs-5 p-4 pb-2 mb-2 rounded"><pre> cd example-app </pre></div>
            <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre> php artisan serve </pre></div>
            <b> Run project in specific port   </b> 
            <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre>  php artisan serve --port=7000 </pre></div>
            <b>  Change the Host or IP Address . By default it binds to 127.0.0.1</b> 
            <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre>  php artisan serve --host=0.0.0.0 </pre></div>
         </div>

         <h2 className='title-h2' id="artisan">5 - artisan </h2>
         <div className="alert alert-warning text-black fs-5">
            use this command to new evrything about command in laravel
            <div className="bg-dark text-light fs-5 p-4 pb-2 rounded"><pre> php artisan </pre></div>
         </div>

         <h2 className='title-h2' id="views">6 - views</h2>
         <div className="alert alert-warning text-black fs-5">
            <strong>path : example-app/resources/views/welcome.blade.php</strong><br/><br/>
           <p>
               When we run example-app , the page that appears by default is <kbd>welcome.blade.php</kbd> <br/>
           </p>
           <p>
               you can write <b>html</b> and <b>php</b> and ..
           </p>
         </div>

         <h2 className='title-h2' id="route"> 7 - route </h2>
         <h3 className='title-h3' id="route_to_views_without_puch_data"> 1 - route to views without puch data </h3>
         <div className="alert alert-warning text-black fs-5">
         <strong>path : example-app/routes/web.php</strong> <br/><br/>
           <p> When we run example-app , the page that appears by default is <kbd>welcome.blade.php</kbd> <br/> </p>
           <p> you can write hrml and php </p>
         <div className="alert alert-primary text-black fs-5">
            <h3 className="fs-5 text-primary ms-0 ps-0"> Route </h3>
         {/* <pre>
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">'/'</span>,function(){
               <span className="v">return</span> <span className="b">view(</span><span className="o">'welcome'</span><span className="b">)</span> ;
            }<span className="bc">)</span> ;
         
            /////////////////
         
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">'/route_name'</span>,function(){
               <span className="v">return</span> <span className="b">view(</span><span className="o">'file_in_resources_views'</span><span className="b">)</span>;
            }<span className="bc">)</span> ;
         </pre> */}
         </div>
         </div>

         <h3 className='title-h3' id="route_to_views_and_puch_data"> 2 - route to views and puch data </h3>
         <div className="alert alert-warning text-black fs-5">
         <div className="alert alert-primary text-black fs-5">
               {/* <pre>
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">'/{somthinhg}'</span>,function($somthinhg){
               <span className="v">return</span> <span className="b">view(</span><span className="o">'welcome'</span>,<span className="b">[</span>"key"=> $somthinhg<span className="b">]</span>)</span> ;
            }<span className="bc">)</span> ;  </pre>       */}
            </div>
            <p>
               when user go to path doesn't exist in wath the views eppear is welcome <small><small><small>(welcome.blade.php)</small></small></small> .<br/>
               you can use data with key in page welcome
               <div className="alert bg-light"><pre> &#123;&#123;$name&#125;&#125;</pre></div>
            </p>
         </div>
         
         <h2 className='title-h2' id="request">8 - request</h2>
         <div className="alert alert-warning text-black fs-5">
         use <b className="b">request('')</b> like variable 
         <div className="alert alert-primary text-black fs-5 mt-3">
            {/* <pre>
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o"><span className="o">'/store'</span></span>,function(){
               $variable = <b className="b">request(</b><span className="o">'style'</span><b className="b">)</b> ;
               <span className="v">return</span> '&lt;h2>'.$variable.'&lt;/h2>' ;
            }<span className="bc">)</span>;</pre> */}
         </div>
         <div className="alert alert-info">
            go to link : <kbd>localhost:8000/store?style=textSS/</kbd> 
            <h5 className="mt-5"> Result </h5>
            <div className="alert alert-light mt-2">
               <div className="h2">textSS</div>
            </div>

         </div>
         {/* <div className="alert alert-danger">
            <kbd>localhost:8000/store?style=&lt;script>window.alert("I'am Haker")&lt;/script>/</kbd> <br/>JavaScript can be used so for protection you must use function <em><b>strip_tags()</b></em>
            <br/><b>Note :</b> strip_tags is php function remove all tags
         </div> */}

         <div className="alert alert-primary text-black fs-5 mt-3">
               {/* <pre>
               <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">'/store'</span>,function(){
                  $variable = <span className="b">request(</span><span className="o">'style'</span><span className="b">)</span>;
                  <span className="v">return</span>'&lt;h2>'.<b className="g">strip_tags(</b>$variable<b className="g">)</b>.'&lt;/h2>'
               }<span className="bc">)</span></pre> */}
            </div>
            well appear window.alert("I'am Haker") lik heading
            
            <div className="alert alert-primary text-black fs-5 mt-3">
               {/* <pre>
               <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">'/store'</span>,function(){
                  $variable = <span className="b">request(</span><span className="o">'style'</span><span className="b">)</span>;
                  <span className="v">return</span> '&lt;h2>'.<b className="g">strip_tags(</b>$variable<b className="g">)</b>.'&lt;/h2>';
               }<span className="bc">)</span>;</pre> */}
         </div>
            
         <span className="fs-3 text-danger">={">"} create auto route </span>
            
         <div className="alert alert-primary text-black fs-5 mt-3">
               {/* <pre>
               <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">'/store/{catego?}/{item?}'</span>,function($catego = <span className="o">null</span> ,$item = <span className="o">null</span>){
                  if( <b className="g">isset(</b>$catego<b className="g">)</b> ) {
                     if (<b className="g">isset(</b>$item<b className="g">)</b>){
                        <span className="v">return</span> "&lt;h1>{ <b className="g">strip_tags(</b>$item<b className="g">)</b> }&lt;/h1>";
                     }
                     <span className="v">return</span> "&lt;h1>{ <b className="g">strip_tags(</b>$catego<b className="g">)</b> }&lt;/h1>";
                  }
                  <span className="v">return</span> '&lt;h2> store &lt;/h2>';
               }<span className="bc">)</span>;</pre> */}
            </div>
            <span className="text-success">={">"} you can return views</span>
         </div>
            
         <h2 className='title-h2' id="Controller">9 - Controller</h2>
         <p className="alert alert-warning text-black fs-5">
            if you want to know everything about Controller use command :
            <div className="bg-dark text-light fs-5 p-4 pb-2 mb-2 rounded"><pre> php artisan make:controller -h </pre></div>
            if you want create normal controller use  :
            <div className="bg-dark text-light fs-5 p-4 pb-2 mb-2 rounded"><pre> php artisan make:controller <i>ControllerName</i> </pre></div>
            You will find a file ControllerName in app/Http/Controllers/<br/>
            
            <strong>path : example-app/app/Http/Controllers/ControllerName.php</strong>  
            {/* <div className="alert mt-4 bg-light"><pre>
            <span style="color:blue">&lt;?php</span> 

               <span className="b">namespace</span> <span className="text-success">App</span>\<span className="text-success">Http</span>\<span className="text-success">Controllers</span>;
               <span className="b">use</span> <span className="text-success">Illuminate</span>\<span className="text-success">Http</span>\<span className="text-success">Request</span>;

               <b className="text-success">class</b> ControllerName <span className="text-success">extends</span> Controller
               {
                  <span className="b">public function</span> welcome(){
                      <span className="v">return</span> view("welcome");
                   }
                   <span className="b">public function</span> home(){
                       <span className="v">return</span> view("home");
                   }
                   <span className="b">public function</span> about(){
                       <span className="v">return</span> view("about");
                   }
               }
            <span style="color:blue">?></span></pre></div> */}

         
            <strong>path : example-app/routes/web.php</strong>
            {/* <div className="alert alert-primary text-black fs-5"><pre>
         <span style="color:blue">&lt;?php</span>         
            <span className="b">use</span> <span className="text-success">Illuminate</span>\<span className="text-success">Support</span>\<span className="text-success">Facades</span>\<span className="text-success">Route</span>;
            <span className="b">use</span> <span className="text-success">App</span>\<span className="text-success">Http</span>\<span className="text-success">Controllers</span>\<span className="text-success">ControllerName</span>;
         
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">"/"</span>,     [<span className="text-success">ControllerName</span>::<span className="b">class</span> , <span className="o">"welcome"</span> ]<span className="bc">)</span> {"->"} <span className="b">name(</span><span className="o">'index'</span><span className="b">)</span>;
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">"/home"</span>, [<span className="text-success">ControllerName</span>::<span className="b">class</span> , <span className="o">"home"</span> ]<span className="bc">)</span> {"->"} <span className="b">name(</span><span className="o">'home'</span><span className="b">)</span>;
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">"/about"</span>,[<span className="text-success">ControllerName</span>::<span className="b">class</span> , <span className="o">"about"</span> ]<span className="bc">)</span> {"->"} <span className="b">name(</span><span className="o">'about'</span><span className="b">)</span>;
         <span style="color:blue">?{">"}</span></pre>
               </div> */}
            {/* <div className="alert mt-4 bg-light">
             <pre><strong> in path <kbd>example-app/resources/views/</kbd> create page with extension <kbd>.blade.php</kbd></strong></pre></div> */}
            <ul>
               <li>welcome.blade.php <span style={{color:'green'}}>#index page by default</span> .</li>
               <li>home.blade.php</li>
               <li>about.blade.php</li>
            </ul>
         </p>
          
         <h2 className='title-h2' id="group_duplicate_items_on_one_page">10 - layoute page </h2>
         <div className="alert alert-warning text-black fs-5">
         <strong> in <kbd>example-app/resources/views/</kbd> create file <u>layoute.blade.php</u> </strong><br/><br/>
         {/* <div className="alert bg-light"><pre>
            <span style={{color:'green'}}>&lt;!-- example-app/resources/views/layoute.blade.php -{"->"}</span><br/>
            &lt;!DOCTYPE html>
            &lt;html lang="&#123;&#123; str_replace('_', '-', app(){"->"}getLocale()) &#125;&#125;">
               &lt;head>
                    &lt;meta charset="utf-8">
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1">
                    &lt;title> example-app <b className="text-danger">@yield(<span className="o">'title'</span>)</b> &lt;/title>
                    &lt;link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" 
                                    rel="stylesheet">
                    &lt;link rel="stylesheet" href="<span className="o">&#123;&#123; url('style.css') &#125;&#125;</span>">
               &lt;/head>
          
               &lt;body className="antialiased">
                  &lt;nav>
                     &lt;a href="<span className="o">&#123;&#123; route('index') &#125;&#125;</span>"> welcome </a>
                     &lt;a href="<span className="o">&#123;&#123; route('home') &#125;&#125;</span>"> home </a>
                     &lt;a href="<span className="o">&#123;&#123; route('about') &#125;&#125;</span>"> about </a>
                  &lt;/nav>
                    <b className="text-danger">@yield(<span className="o">'content'</span>)</b>
               &lt;/body>
            &lt;/html></pre>
         </div> */}

         {/* <div className="alert bg-light"><pre>
         <span style={{color:'green'}}>&lt;!-- example-app/resources/views/welcome.blade.php -{"->"}</span><br/>

         @extends('layoute')

         @section('title','welcome')

         @section('content')
         &lt;div style="position:absolute; top:calc(50% - 90px); left:50%;width:180px;">
            &lt;h2> welcome &lt;/h2>
         &lt;/div>
         @endsection</pre>
         </div>


         <div className="alert bg-light"><pre>
            <span style={{color:'green'}}>&lt;!-- example-app/resources/views/about.blade.php -{"->"}</span><br/>

            @extends('layoute')

            @section('title','welcome')

            @section('content')
            &lt;div style="position:absolute; top:calc(50% - 90px); left:50%;width:180px;">
               &lt;h2> about &lt;/h2>
            &lt;/div>
            @endsection</pre>
         </div> */}
         </div>

         <h2 className='title-h2' id="ussing_css_and_javaScript">11 - ussing Css and javaScript </h2>
         <div className="alert alert-warning text-black fs-5">
            <p> to use css or js write him in example-app/public/ folder </p>
            <p> create style.css in public  </p>
            to use him in file with extension <small><kbd>.blade.php</kbd></small> use :
            {/* <div className="alert bg-light mt-2 mb-0 pb-0"><pre>&lt;link rel="stylesheet" href="<span className="o">&#123;&#123; url('style.css') &#125;&#125;</span>"></pre></div> */}
            <kbd className="text-light bg-danger d-inline-block  my-3">{"=>"} example :</kbd>
            <p>in <kbd>public/</kbd> folder create another folder with any name in this example a will name it <kbd>css/</kbd>  .</p>
            <p>in <kbd>public/css/</kbd> folder create file css with any name in this example a will name it <kbd>style.css</kbd>  .</p>
            to use style.css in file with extension <kbd>.blade.php</kbd>  without <span className="text-danger">error</span> use :
            <div className="alert bg-light mt-2 mb-0 pb-0"><pre>&lt;link rel="stylesheet" href="<span className="o">&#123;&#123; url('css/style.css') &#125;&#125;</span>"{">"}</pre></div>
         </div>

         <h2 className='title-h2' id="route_and_name">12 - route and name </h2>
         <div className="alert alert-warning text-black fs-5 pb-0 mb-0">
            in file with extension <kbd>.blade.php</kbd> we have we need to scroll between page so to avoid <span className="text-danger">error</span> use <b className="g">route()</b>.<br/>
            create file any file with extension .blade.php
            {/* <div className="alert bg-light"><pre>
         <span style={{color:'green'}}>&lt;!-- .blade.php --{">"}</span>
           <span className="b">&lt;a</span> <span className="bc">href</span>=<span className="o">"&#123;&#123; route('home.index') &#125;&#125;"</span><span className="b">> <span className="text-dark">index</span> &lt;/a></span> <span style={{color:'green'}}>&lt;!-- when you click you go to name route <b>in path : /routes/web.php -{"->"}</b></span>
           <span className="b">&lt;a</span> <span className="bc">href</span>=<span className="o">"&#123;&#123; route('home.contact') &#125;&#125;"</span><span className="b">> <span className="text-dark">contact</span> &lt;/a></span>
           <span className="b">&lt;a</span> <span className="bc">href</span>=<span className="o">"&#123;&#123; route('home.about') &#125;&#125;"</span><span className="b">> <span className="text-dark">about</span> &lt;/a></span></pre></div> */}

           <div className="alert alert-primary">
            {/* <pre>
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">"/"</span>,     [<span className="text-success">ControllerName</span>::<span className="b">class</span> , <span className="o">"welcome"</span> ]<span className="bc">)</span> {"->"} <span className="b">name(</span><span className="o">'home.index'</span><span className="b">)</span>;
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">"/contact"</span>, [<span className="text-success">ControllerName</span>::<span className="b">class</span> , <span className="o">"home"</span> ]<span className="bc">)</span> {"->"} <span className="b">name(</span><span className="o">'home.contact'</span><span className="b">)</span>;
            <b className="text-success">Route</b><span className="bc">::get(</span><span className="o">"/about"</span>,[<span className="text-success">ControllerName</span>::<span className="b">class</span> , <span className="o">"about"</span> ]<span className="bc">)</span> {"->"} <span className="b">name(</span><span className="o">'home.about'</span><span className="b">)</span>;
            </pre> */}
           </div>
         
           <div className="alert alert-danger">
            <b>note:</b> &nbsp; &nbsp; &nbsp; in laravel <kbd className="fs-3 bg">.</kbd> equal <kbd className="fs-3">/</kbd>  .<br/>
            <b>so </b> : <small>(home.contact {"<==>"} home/contact)</small>
           </div>
         
         </div>
         
         <h2 className='title-h2' id="handle_data_in_views">13 - handle data in views</h2>
         <h3  className='title-h3' id="create_controller_to_use_data">1 - create controller to use data</h3>
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
            <br id='list_all_route_in_project'/><br/>
            <h2>List all route in project</h2>
            <div className="alert bg-dark text-light pb-0"><pre>php artisan route:list</pre></div>
         </div>
    </article>
</>
   )
}