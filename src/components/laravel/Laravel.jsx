import { useEffect, useRef} from 'react';
import { Routes, Route , Link } from "react-router-dom";
import { CodeCommand , CodeHighlighter , Result } from "../path";


export default function Js(props){
    const AsideRef = useRef(null);
    useEffect(() => {
       AsideRef.current.scrollTop = localStorage.getItem("laravel_aside") || 0;
    }, []); 
    
    const matrix = props.laravel_matrix.map(e =>{ 
      var keys_map;
      let dt_title;
      keys_map = e.map((key,index) => {
         if(index === 0){
            dt_title = key.toLowerCase().replace(/_/g, '-');
           return(<dt className="aside-dl-dt" key={key}>
                     <Link to={`/laravel/${dt_title}/`}>
                        <i className="fa-solid fa-caret-right"></i> {key.replace(/_/g, ' ')}
                     </Link>
                  </dt>)  
         }else{
             return(<dd className="aside-dl-dd" key={key}>
                        <a href={`/laravel/${dt_title}#${key}`}>
                          <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                        </a>
                     </dd>)
         } 
      });
      return keys_map
   });


   return (
<main>
   <aside className="aside" onScroll={()=>{ localStorage.setItem("laravel_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
       <ul className="list-group m-0">
          {matrix}
       </ul>
   </aside>
   <section className="section-conetent">
     <h1 className="heading-style heading-style-laravel-color"> Laravel Introduction</h1>
      <article>
         <h2 className='title-h2' id="what_is_laravel"> 1 - ما هو laravel  </h2>
         <p className="style_divv">
            لارافيل هو إطار عمل PHP مفتوح المصدر لتطوير تطبيقات الويب. تأتي مع ORM يُسمى Eloquent ومحرك Blade لتصميم الواجهات. يوفر أداة Artisan لإدارة المهام والتكوين. يتبع نمط MVC ويشمل Middleware لمرشحات HTTP. يوفر توجيهًا بسيطًا وحقن إعتماد لإدارة التبعيات. يشمل نظام ترتيب قواعد البيانات وزرع البيانات. لديه بيئة نشطة ومجتمع وثائق جيدة. اشتهر ببنية أنيقة وميزات مطور ودية، مما يجعله خيارًا شائعًا لبناء تطبيقات الويب الحديثة.<br/><br/>
            MVC، أو Model-View-Controller، هو نمط هندسة برمجيات يستخدم عادة في تطوير الويب. يقسم التطبيق إلى ثلاث مكونات مترابطة:<br/>
               <ul>
                  <li>النموذج (Model): يُمثل البيانات والمنطق التجاري للتطبيق. يدير البيانات، ويستجيب للاستعلامات، ويعالج التعليمات من المُتحكم.</li>
                  <li>العرض (View): يقدم البيانات للمستخدم ويتعامل مع تفاعلات واجهة المستخدم. يستقبل الإدخالات، ويعرض النتائج، ويُرسل تفاعلات المستخدم إلى المتحكم.</li>
                  <li>المتحكم (Controller): يدير تدفق البيانات بين النموذج والعرض. يفسر إدخالات المستخدم من العرض، ويُحدث النموذج وفقًا لذلك، ويضمن أن العرض يعكس التغييرات.</li>
               </ul>
            يعزز نمط MVC فصل الاهتمامات، مما يجعل قاعدة الشيفرة أكثر تنظيمًا وسهولة في الصيانة. ويسمح بالتعاون بشكل أسهل بين المطورين العاملين على جوانب مختلفة من التطبيق.
         </p>

         <h2 className='title-h2' id="what_we_need_to_use_laravel"> 2 - ما نحتاجه لاستخدام laravel  </h2>
         <p className='style_divv'>
            نحتاج إلى بيئة تشغيل محلية لتطوير تطبيقات Laravel باستخدام PHP. هناك اثنان من أشهر البيئات هما XAMPP و MAMP، ويمكنك اختيار أي منهما حسب نظام التشغيل الخاص بك.<br/>
            <ul>
               <li>
                  <b>XAMPP أو MAMP:</b>
                  <ul>
                     <li>قم بتثبيت XAMPP (أو MAMP) على جهاز الكمبيوتر الخاص بك. هذا سيوفر لك خوادم Apache وMySQL و PHP جاهزة للاستخدام.</li>
                     <li>قم بتشغيل الخوادم لبدء تشغيل بيئتك المحلية.</li>
                  </ul>
               </li>
               <li>
                  <b>Composer:</b>
                  <ul>
                     <li>تحقق من توافر Composer على نظامك عبر الأمر  في واجهة الأوامر. إذا لم يكن مثبتًا، يمكنك تنزيله وتثبيته من الموقع الرسمي للمكتبة.</li>
                     <li><CodeCommand>composer</CodeCommand></li>
                  </ul>
               </li>
               <li>
                  <b>Node.js:</b>
                  <ul>
                     <li>لتجميع ملفات CSS و JavaScript، ستحتاج إلى تثبيت Node.js. يمكنك تحقق من توافره باستخدام الأمر .</li>
                     <li><CodeCommand>node -v</CodeCommand></li>
                  </ul>
               </li>
            </ul>
         </p>
         <div className='row mt-2'>
            <img src="{% static  'laravel/laravel0_env.png' %}"  className="col-md-4"/>
            <img src="{% static  'laravel/laravel0_env2.png' %}" className="col-md-4"/>
            <img src="{% static  'laravel/laravel0_env3.png' %}" className="col-md-4"/>
         </div>

         <h2 className='title-h2' id="First_Laravel_Project">3 - مشروع Laravel الأول</h2>
         <p className='style_divv'>
            <ul>
               <li> Open the <kbd>php.ini</kbd> file used by your <b>XAMPP</b> installation. You mentioned that it's located at <kbd>C:\xampp\php\php.ini</kbd></li>
               <li>Search for the line that contains <kbd>;extension=zip</kbd></li>
               <li>Remove the <b>semicolon</b> at the beginning of the line to uncomment it.</li>
               <li>save change </li>
            </ul>
            first to create laravel Project you need to go in path
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
         
            <img src="{% static  'laravel/laravel11.png' %}" className="w-100" alt="web.php"/>
         
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
               <img src="{% static  'laravel/controller-r.png' %}" className="w-100" alt="controller -r"/>
            </div>
            <b>Path: example-app/routes/web.php</b>
            <div className="alert bg-light mt-2">
               <img src="{% static  'laravel/Laravel0.png' %}" className="w-100" alt="web.php"/>
            </div>
            <b>create page layoute.php in views</b><br/>
            <b>Path: example-app/resources/wiews/layoute.php</b>
            <div className="alert bg-light mt-2">
               <img src="{% static  'laravel/laravel0_layoute.png' %}" className="w-100" alt="web.php"/>
            </div>
            <b className="text-success">create new folder countrys in views .</b><br/>
            <b>in countrys/ folder create file index.blade.php</b><br/>
            <b>Path: example-app/resources/wiews/countrys/index.blade.php</b>
            <div className="alert bg-light mt-2">
               <img src="{% static  'laravel/index.png' %}" className="w-100" alt="web.php"/>
            </div>
            <b>in countrys/ folder create file show.blade.php</b><br/>
            <b>Path: example-app/resources/wiews/countrys/show.blade.php</b>
            <div className="alert bg-light mt-2">
               <img src="{% static  'laravel/laravel0_show.png' %}" className="w-100" alt="web.php"/>
            </div>
            <div className="alert bg-danger text-light"><b>Result</b> </div>
            <div className="alert bg-light mt-2">
               <img src="{% static  'laravel/laravel0_result.png' %}" className="w-100" alt="web.php"/>
            </div>
            <b>new click on id : 3 </b>
            <div className="alert bg-light mt-2">
               <img src="{% static  'laravel/laravel0_result2.png' %}" className="w-100" alt="web.php"/>
            </div>
            <div className="alert alert-danger">
               <b>note</b> : you can't change name <em><u>show.blade.php</u></em> or <em><u>index.blade.php</u></em> because we use <b>Route::resource(...)</b> .
            </div>
            <br id='list_all_route_in_project'/><br/>
            <h2>List all route in project</h2>
            <div className="alert bg-dark text-light pb-0"><pre>php artisan route:list</pre></div>
         </div>
      </article>
      <article>
         <br/><hr style={{height: "0.9rem", border:"0.3rem solid black"}}/>
         <h1 className="mt-5"> Database </h1>
         <h2 id="Connect_with_database">1 - Connect with database </h2>
         <div className="alert alert-warning text-black fs-5">
            <p>To connect your project example-app go to path <kbd>.env</kbd></p>
            <b>Path : example-app/.env</b>
            <div className="alert bg-black text-white"><pre>
         ...

         DB_CONNECTION=mysql           <span style={{color:'green'}}> #mysql because we use MYSQL database</span>
         DB_HOST=127.0.0.1       
         DB_PORT=3306                
         DB_DATABASE=example-app       <span style={{color:'green'}}> #name database ussed</span>
         DB_USERNAME=root              
         DB_PASSWORD=                  

         ...
         </pre></div>
         Laravel supports different database like <b>MYSQL</b> and another .
         </div>

         <h2 id="Create_models">2 - model </h2>

            <p>   to use database you need to use model because as we seen </p>
            <div className="alert alert-danger mt-3">
               <ul>
                  <li><small><small>Modele : anything about data</small></small></li>
                  <li><small><small>View : anything about front-end</small></small></li>
                  <li><small><small>Controller : Control between Modele and View</small></small></li>
               </ul>
            </div>
            to create model use :
            <b>Create Model and Table</b>
            {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:model <span style="color:rgba(0 255 0/75%);">Country</span> --migration</pre></div> */}
            <b>Create Model and Table and Control</b>
            {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:model <span style="color:rgba(0 255 0/75%);">Country</span> -mc</pre></div> */}
            <b>Create Model and Table and Control recource</b>
            {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:model <span style="color:rgba(0 255 0/75%);">Country</span> -mcr</pre></div> */}

            <p>
               in this case Contry is name of model .<br/> 
               <ul>
                  <li><b>name of model must start with capital letter and word single.</b></li>
                  <li><b><u>--migration</u> : this with create table in database directelly or you can use <u>-m</u></b></li>
               </ul>
            </p>

            now go to <b>example-app\database\migrations\</b> you will see php file created automatically .<br/>
            <b>Path : example-app/databse/migrations/2023_01_24_235205_create_countries_table.php</b>
            <div className="alert bg-light mt-3"><img src="{% static  'laravel/laravel0_model1.png' %}" className="w-100" alt="model"/></div>
            <ul>
               <li> the function up() will create database countries and by defalut : $table-{">"}id() and $table-{">"}timestamps()
                  <ol>
                     <li><em>$table{"->"}id()</em> : create column id in table  </li>
                     <li><em>$table{"->"}string('contry')</em> : create column contry type string</li>
                     <li><em>$table{"->"}string('nationality')</em> : create column nationality type string</li>
                     <li><em>$table{"->"}timestamps()</em> : create two column in database first column get time to create <small>(create at)</small> and second get time to update <small>(updeted at)</small> </li>
                  </ol>
               </li>
            </ul>
            <div className='alert alert-info'><b>$table{"->"}timestamps()</b> : this create <u>updated_at</u> and <u>created_at</u>  </div>
            <b> This entity will be reflected on the database using the command </b>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>
            now in your database example-app countries table was created .
            <div className="alert bg-light mt-3"><img src="{% static  'laravel/laravel0_model2.png' %}" className="w-100" alt="model"/></div>
            <div className="alert alert-success"> 
               in <b>example-app/resources/views/countrys/</b> create file <b>create.blade.php</b>  <br/>
               we use page create.blade.php to get data from usser and puch him in store function in CountryController
            </div>
            to use data from <b>example-app/app/Http/Controllers/CountryController.php</b> use:
            <div className="alert bg-light pb-0 mt-3"><pre>use App\Models\Country;</pre></div>
            and add to function store variable content model Country 
            {/* <div className="alert bg-light pb-0 mt-3"><pre>
            <span className="b">public function</span> <span className="g">store(<span className="text-success">Request</span> <span className="bc">$request</span>)</span>{
               <span className="bc">$country</span> = <span className="b">new</span> <span className="text-success">Country()</span> ;
            } </pre></div> */}
            <b>When you create table wityh model in laravel you can use Conttry in your Controller or in Route</b>
            <img src="{% static  'laravel/laravel20.png' %}" className="w-100 mb-2" alt="model"/>
         
            <h2 id='create_table_in_db_from_laravel'>5 - create table in db from laravel</h2>
            <div>
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration create_sizes_table </pre></div>
               <div className='alert bg-info text-light'><b>Note</b>: the table will create with name <b>sizes</b></div>
               <img src="{% static  'laravel/laravel17.png' %}" className="w-100 mb-2" alt="model"/>
               <img src="{% static  'laravel/laravel19.png' %}" className="w-100 mb-2" alt="model"/>
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate</pre></div>
               <div className='row'>
                  <img src="{% static  'laravel/laravel18.png' %}" className="col-md-6 border border-dark border-3 mb-2" alt="model"/>
                  <img src="{% static  'laravel/laravel21.png' %}" className="col-md-6 border border-dark border-3 mb-2" alt="model"/>   
               </div>
            </div>
         
            <h2 id="AddColumnInTable">6 - Add Column In Table</h2>
            <div>
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration add_<span className='text-danger'>columnName</span>_to_<span className='text-danger'>tableName</span> </pre></div>      
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration add_description_to_sizes</pre></div>
               <img src="{% static  'laravel/laravel22.png' %}" className="w-100"/> 
               <img src="{% static  'laravel/laravel23.png' %}" className="w-100"/>   
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>      
               <img src="{% static  'laravel/laravel24.png' %}" className="w-25"/>   
            </div>
         
            <h2 id='droppingColumnsFromTable'>7 - dropping Columns From Table</h2>
            <div>
               {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration  remove_<span className='text-danger'>columnName</span>_from_<span className='text-danger'>tableName<span> --table=tableName</pre></div>      
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration remove_description_from_sizes --table=sizes</pre></div> */}
               <img src="{% static  'laravel/laravel32.png' %}" className="w-100"/> 

               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>      
            
            </div>
            
            <h2 id="Foreign_Keys"> 8 - Foreign Keys</h2>
            <a href='https://laravel.com/docs/9.x/migrations#foreign-key-constraints' target="_blanck">foreign-key-constraints</a>
            <div>
               <br/><br/>
               <h4 className='fs-2'>Exemple 1</h4>
               <p><b>By Default laravel create users table</b></p>
               <img src="{% static  'laravel/laravel25.png' %}" className="w-100 mb-2" alt="model"/>
               to use foreign key with user from sizes <></>table we can use :
               <div className="h3 text-success">Old method</div>
               <div className='alert border pb-0 '>
         <pre>$table{"->"}unsignedBigInteger(<span className='orange'>'user_id'</span>);
            
         $table{"->"}foreign(<span className='orange'>'user_id'</span>){"->"}references(<span className='orange'>'id'</span>){"->"}on(<span className='orange'>'users'</span>);</pre>
               </div>
               <img src="{% static  'laravel/laravel27.png' %}" className="w-100 mb-2" alt="model"/>
               <img src="{% static  'laravel/laravel26.png' %}" className="w-100 mb-2" alt="model"/>
               <img src="{% static  'laravel/laravel28.png' %}" className="w-25 mb-2" alt="model"/>
               <div className="h3 text-success">New method</div>
               {/* <div className='alert border pb-0 '>
                  <pre>$table{"->"}foreignId(<span className='orange'>'user_id'</span>){"->"}constrained(<span className='orange'>'users'</span>);</pre>
               </div> */}
               <b>You can use cascadeOnDelete with user_id</b>
               {/* <div className='alert border pb-0 '>
                  <pre>$table{"->"}foreignId(<span className='orange'>'user_id'</span>){"->"}constrained(<span className='orange'>'users'</span>){"->"}cascadeOnDelete();</pre>
               </div> */}
               <img src="{% static  'laravel/laravel29.png' %}" className="w-100 mb-2" alt="model"/>
               <br/><br/><br/><br/>
               <h4 className='fs-2'>Exemple 2</h4>
               <b> categories table </b>
               <img src="{% static  'laravel/laravel46.png' %}" className="w-100 mb-2" alt="model"/>
               <b> Products table </b>
               <img src="{% static  'laravel/laravel45.png' %}" className="w-100 mb-2" alt="model"/>
               <b> App/Models/Category.php </b>
               <img src="{% static  'laravel/laravel47.png' %}" className="w-100 mb-2" alt="model"/>
               <b> App/Models/Product.php </b>
               <img src="{% static  'laravel/laravel48.png' %}" className="w-100 mb-2" alt="model"/>
               <b> App/Http/Controllers/ControllerName.php </b>
               <img src="{% static  'laravel/laravel49.png' %}" className="w-100 mb-2" alt="model"/>
               <b> list.blade.php </b>
               <img src="{% static  'laravel/laravel50.png' %}" className="w-100 mb-2" alt="model"/>
            

            </div>
            
            
            <h2 id='truncate_models_table'>9 - truncate models table</h2>
            <div>
               <div className='alert alert-warning'> Product::truncate(); </div>
               <img src="{% static  'laravel/laravel6.png' %}" className="w-100 mb-2" alt="model"/>
            </div>
            
            <h2 id='DropTheLastMigrateInDB'>10 - Delete The Last Migrations in DataBase</h2>
            <div>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback</pre></div>
               <b>To delete many magration use (you can choose the number of migrations you want to delete)</b>
               {/* <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback --step=<sapn className='text-danger'>2</span></pre></div> */}
            </div>
            
            <h2 id="Clearalltableindbandcreatehimagain">11 - Clear all table in db and create him again</h2>
            <div>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:refresh</pre></div>
            </div>
            
            <h2 id="soft_delete">12 - soft delete</h2>
            <a href='https://laravel.com/docs/9.x/eloquent#soft-deleting' target='_blanck'>soft delete documentation</a>
            <a href='https://www.youtube.com/watch?v=TiCvGwxqWlQ&list=PLftLUHfDSiZ4GfPZxaFDsA7ejUzD7SpWa&index=40' target='_blanck'> Youtube </a> 
            <div className='alert fs-5 alert-info mt-3'><b>soft delete</b> : is way to retain data after deleting it </div>
            <h4> 1) First Go to Models you want to use soft delete with it </h4>
            {/* <div className='alert alert-warning pb-0'><pre>
         use Illuminate\Database\Eloquent\SoftDeletes;
            
         class Product extends Model{
             use SoftDeletes;
         }</pre>
            </div> */}
            <h4> 2) in your database add  </h4>
            {/* <div className='alert alert-warning pb-0'><pre>   Schema::table('products', function (Blueprint $table) {
                  .... 
                  $table{"->"}softDeletes();
            });</pre>
            </div> */}
            <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate</pre></div>

            <p className='fs-5'> 
               when you use <b>SoftDeletes</b> Laravel add Column <b>deleted_at</b> to your table.<br/>
               When you Create instance of Product the Column <b>deleted_at take null</b> .<br/>
               When you Delete the Product instance deleted_at take date and time So you can rerun him if you want .
            </p>

            <h4> 3) Get All instance deleted </h4>
            {/* <div className='alert alert-warning pb-0'><pre>Product::withTrashed()-{">"}get()</pre></div> */}
            <b>See documentation to restore and force Delete</b>

            <h2 id="eloquent_scopes">13 - Eloquent scopes </h2>
            <a href='https://laravel.com/docs/10.x/eloquent#local-scopes' target='_blanck'>eloquent scopes documentation</a>

         
            <h2 id="Seeder_class">14 - Seeder class  </h2>
            <a href='https://laravel.com/docs/10.x/seeding#writing-seeders' target='_blanck'>seeders documentation</a>
            <p className='fs-5'> 
               In Laravel, seeders are used to populate database tables with initial or test data, making it easier to develop and test applications by providing a consistent data structure for testing and development environments.<br/>
               In this course we use seeder to create an admin account that cannot be deleted from the database, you can follow these steps.
            </p>
            <h3>1 - Create Seeder Class</h3>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:seeder NameSeeder</pre></div>      
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:seeder SuperAdminSeeder</pre></div>  
            <p>the seeder class will create in database/seeders/ folder</p>    
            <h3>2 - Create super admin account in seeder class</h3>
            <img src="{% static  'laravel/laravel59.png' %}" className="w-100 mb-2" alt="model"/>
            <h3>3 - Run seeder class</h3>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan db:seed --className=SuperAdminSeeder</pre></div>  

            <br/><hr/>
            <br id='GetAllDataFromDB'/><br/>
            <h1 className='h1'>resource</h1>
            <h2>1 - Get All Data From DB with resource</h2>
            <div>
               <h3>1 - first create Controller resource in my case i named it "ControllerHome"</h3>
               <b>routes/web.php</b>
               <div className='alert alert-info'><pre>&lt;?php
         
         use Illuminate\Support\Facades\Route;
         use App\Http\Controllers\ControllerHome;
         
         Route::resource("/products", ControllerHome::class);</pre>
                  <div className='alert bg-danger text-light'>
                     You can't create resource with empty path the will give error on show page . 
                  </div>
               </div>
         
               <b>app/Http/Controllers/ControllerHome.php</b>   
               <img src="{% static  'laravel/laravel4.png' %}" className="w-100 mb-2" alt="model"/>
               <b>resources/views/home/index.blade.php</b>   
               <p className='fs-3 text-success'> in <b>views/</b> folder i create new folder with name <b>home/</b> this folder will content all file i need to use recource  </p>
               <img src="{% static  'laravel/laravel5.png' %}" className="w-100 mb-2" alt="model"/>

            </div>
         
            <h2 id='Upload_image'>2 - Upload image & create  </h2>
            <div>
               <div className='alert bg-dark pb-0 text-light'><pre>php artisan storage:link</pre></div>
            </div>
            <b>App\Http\ControllerHome</b>
            <img src="{% static  'laravel/laravel1.png' %}" className="w-100 mb-2" alt="model"/>
            <b>resources\views\home\create.blade.php</b>
            <img src="{% static  'laravel/laravel2.png' %}" className="w-100 mb-2" alt="model"/>
            <b>resources\views\home\index.blade.php</b>
            <img src="{% static  'laravel/laravel3.png' %}" className="w-100 mb-2" alt="model"/>
            <br id='Multiple_Images_Upload'/><br/>
            <h3>multiple-images-upload <a href='https://www.scratchcode.io/laravel-9-multiple-images-upload-example/' target="_blanck">Here</a></h3>
         

         
            <h2 id='ShowDetail_with_recource'>3 - Show Detail with id </h2>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src="{% static  'laravel/laravel9.png' %}" className="w-100 mb-2" alt="ControllersHome"/>
            <b>resources\views\home\index.blade.php</b>
            <img src="{% static  'laravel/laravel7.png' %}" className="w-100 mb-2" alt="index.blade.php"/>
            <b>resources\views\home\show.blade.php</b>
            <img src="{% static  'laravel/laravel8.png' %}" className="w-100 mb-2" alt="show.blade.php"/>
            <b>Result</b>
            <img src="{% static  'laravel/laravel10.png' %}" className="w-100 mb-2" alt="Result"/>
         
            <h2 id='Update_by_id_with_recource'>4 - Update by id with recource </h2>
            <b>resources\views\home\show.blade.php</b>
            <img src="{% static  'laravel/laravel12.png' %}" className="w-100 mb-2" alt="show.blade.php"/>
            <b>resources\views\home\edit.blade.php</b>
            <img src="{% static  'laravel/laravel13.png' %}" className="w-100 mb-2" alt="edit.blade.php"/>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src="{% static  'laravel/laravel14.png' %}" className="w-100 mb-2" alt="ControllerHome"/>
         
            <h2 id='Delete_by_id_with_recource'>5 - Delete by id with recource </h2>
            <b>resources\views\home\show.blade.php</b>
            <img src="{% static  'laravel/laravel15.png' %}" className="w-100 mb-2" alt="ControllerHome"/>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src="{% static  'laravel/laravel16.png' %}" className="w-100 mb-2" alt="ControllerHome"/>
         
            <h2 id='only_and_except'><span className='text-success'>only</span> and <span className='text-danger'>except</span> in recource Controller</h2>
            <div>
         <pre>use App\Http\Controllers\PhotoController;
         
         Route::resource('photos', PhotoController::class){"->"}only([
             'index', 'show'
         ]);

         Route::resource('photos', PhotoController::class){"->"}except([
             'create', 'store', 'update', 'destroy'
         ]);</pre>
            </div>





            <br/><hr/>

            <div className='h1'>Query builder</div>
            <br id='Intro_QueryBuilder'/><br/>
            <h2>1 - Intro Query Builder</h2>
            <p className='fs-5'>
               Query Builder allows you to construct database queries using a fluent and expressive syntax, 
               making it easier to retrieve, insert, update, and delete records in 
               your application's database with the Laravel PHP framework.
               <div className='alert bg-dark text-light pb-0'><pre> use Illuminate\Support\Facades\DB; </pre></div>
            </p>   

            <h2 id='insertInQueryBuilder'>1 - Insert With Query builder </h2>
            <ul className='fs-5'>
               <li> in this part I will create "posts" table in my Database and i will use it for exemple </li>
               <li> Create Controller to handle route && Insert Data with Query builder</li>
            </ul>
            <b> create "posts" table in my Database </b>
            <img src="{% static  'laravel/laravel30.png' %}" className="w-100 mb-2" alt="posts"/>
            <b> routes/web.php </b>
            <img src="{% static  'laravel/laravel31.png' %}" className="w-100 border mb-2" alt="web"/>
            <b> App/Http/Controller/ControllerPost.php </b>
            <img src="{% static  'laravel/laravel33.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/home.blade.php </b>
            <img src="{% static  'laravel/laravel34.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>

            <h2 id='GetWithQueryBuilder'>2 - Get With Query builder </h2>
            <b> routes/web.php </b>
            <img src="{% static  'laravel/laravel35.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> App/Http/Controller/ControllerPost.php </b>
            <img src="{% static  'laravel/laravel36.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/all_data.blade.php </b>
            <img src="{% static  'laravel/laravel37.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>

            <h2 id='full_Exemple_Create_Edit_Delete'>3 - full Exemple Create && Edit && Delete  </h2>
            <b> routes/web.php </b>
            <img src="{% static  'laravel/laravel38.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> App/Http/Controller/ControllerPost.php </b>
            <img src="{% static  'laravel/laravel39.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/layout.blade.php </b>
            <img src="{% static  'laravel/laravel40.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/index.blade.php </b>
            <img src="{% static  'laravel/laravel41.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/create.blade.php </b>
            <img src="{% static  'laravel/laravel42.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/edit.blade.php </b>
            <img src="{% static  'laravel/laravel43.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <b> Result</b>
            <img src="{% static  'laravel/laravel44.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>

            <h2 id='Delete_all_Data_with_Query_Builder'>3 -  Delete all Data with Query Builder  </h2>
            <div className='alert alert-warning'><pre>DB::table('tableName'){"->"}delete();</pre></div>
            <div className='alert alert-warning'><pre>DB::table('posts'){"->"}delete();</pre></div>

            <h2 id='truncate_with_Query_Builder'>4 -  truncate with Query Builder </h2>
            <div><pre>DB::table('tableName'){"->"}truncate();</pre></div>
            <div><pre>DB::table('posts'){"->"}truncate();</pre></div>
      </article>
      
      
      <article>
         <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
         <h1 className="mt-5"> Middleware </h1>
         <a href="https://laravel.com/docs/10.x/middleware#registering-middleware" target="_blanck"> https://laravel.com/docs/10.x/middleware#registering-middleware </a>
         <h2 id="middlewareExemple1">1 - middleware Exemple with Eloquent's built-in features to check if user is admin or not whit less code  </h2>
         <h3> - App\Models\User;</h3>
         <p className='fs-4'>Eloquent's built-in features to check if user is admin or not</p>
         <img src="{% static  'laravel/laravel51.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
         <h3>- Create Middleware with specific name </h3>
         <div className='alert bg-dark text-light pb-0'><pre>php artisan make:middleware <span className='text-danger'>NameMiddleware</span></pre></div>
         <div className='alert bg-dark text-light pb-0'><pre>php artisan make:middleware AdminMiddleware</pre></div>
         <p> this will create file AdminMiddleware in "App\Http\Middleware\AdminMiddleware.php" </p>
         <h3> - app\Http\Middleware\AdminMiddleware.php</h3>
         <img src="{% static  'laravel/laravel52.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - app/Http/Kernel.php</h3>
         <p> In laravel 10 you must add this line in $middlewareAliases array in other version you can add it in $routeMiddleware  . </p>
         <img src="{% static  'laravel/laravel53.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - App\Http\Controllers\ControllerName.php</h3>
         <p> You can use it in any Controller or in web.php if condition don't exept will take you to another page .</p>
         <img src="{% static  'laravel/laravel54.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>

         <h2 id="middlewareExemple2">2 - middleware Create Second middleware In the same Controller </h2>
         <b>create new Middleware with name SuperAdminMiddleware</b>
         <h3> - app\Http\Middleware\SuperAdminMiddleware.php</h3>
         <img src="{% static  'laravel/laravel57.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - app/Http/Kernel.php</h3>
         <img src="{% static  'laravel/laravel55.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - App\Http\Controllers\ControllerName.php</h3>
         {/* <div className='alert bg-dark text-light'>
         <pre><span className='b'>class</span> ControllerAdminUser <span className='b'>extends</span> Controller {
            <span className='text-success'> //give middleware('admin') to all method in class </span>
            <span className='b'>public function</span> <span className='gold'>__construct</span>(){
               <span className='b'>$this</span>{"->"}<span className='gold'>middleware(<span className='o'>'admin'</span>)</span>;
            }
            <span className='text-success'>//all method will use middleware admin by default</span>
            <span className='b'>public function</span> <span className='gold'>admin_users_list</span>(){
               return view('admin.users.list' , ["users"=>User::all()]);
            }
            <span className='text-success'> // ..... method </span>
            <span className='b'>public function</span> <span className='gold'>admin_user_delete</span>($id){  
                  $user = User::findOrFail($id);
                  $user{"->"}delete();
                  return redirect(){"->"} route('admin_users_list');
            }
            <span className='b'>public function</span> <span className='gold'>admin_users_delete_selected</span>(Request $request){  
               $selectedItems = $request{"->"}input('selected_items');
               if (!is_null($selectedItems) && is_array($selectedItems)) {
                   User::whereIn('id', $selectedItems){"->"}delete();
               }
               return redirect(){"->"}route('admin_users_list'){"->"}with('success', 'Selected items deleted.');
            }
         }</pre></div> */}
         <h3> - web.php</h3>
         <p> the second middleware('admin') will not run if the middleware('super_admin') passes successfully.</p>
         {/* <div className='alert bg-dark text-light'>
         <pre>Route::controller(ControllerAdminUser::class){"->"}group(function(){
            Route::get('admin/users/list', "admin_users_list"){"->"}name('admin_users_list');
            Route::get('admin/user/create/view', "admin_user_create_views"){"->"}name('admin_user_create_views');
            Route::post('admin/user/create/store', "admin_user_create_store"){"->"}name('admin_user_create_store');
            Route::get('admin/user/edit/{id}/views', "admin_user_edit_views"){"->"}name('admin_user_edit_views');
            Route::get('admin/user/delete/{id}', "admin_user_delete"){"->"}<span className='gold'>middleware(<span className='o'>'super_admin'</span>)</span>{"->"}name('admin_user_delete');
            Route::post('admin/users/delete/selected', "admin_users_delete_selected"){"->"}<span className='gold'>middleware(<span className='o'>'super_admin'</span>)</span>{"->"}name('admin_users_delete_selected');
         });</pre></div> */}
      </article>
      
      
      <article>
         <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
         <h1 className="mt-5"> Tinker </h1>
         <a href="https://laravel.com/docs/10.x/artisan#usage" target="_blank"> https://laravel.com/docs/10.x/artisan#usage </a>
         <h2 id="useTinker">1 - Use Tinker </h2>
         <div className="alert bg-dark text-light pb-0"><pre>php artisan tinker</pre></div>
         <h2 id="TinkerExemple1">2 - Tinker Exemple 1 </h2>
         <img src="{% static  'laravel/laravel60.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
      </article>
      
      
      <article>
         <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
         <h1 className="mt-5"> Send Mail </h1>
         <a href="https://www.itsolutionstuff.com/post/laravel-10-mail-laravel-10-send-mail-tutorialexample.html" target="_blank"> Tutoriale</a>
         <br id="send-mail"/><br/>
      </article>
      
      <article>
            <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
            <h1 className="mt-5"> Packages </h1>
            <h2 id="Authentication_UI">1 - Authentication UI </h2>
            <a href='https://techvblogs.com/blog/laravel-9-authentication-tutorial' target='_blanck'>
               Authentication UI Tutorial Easy
            </a>

            <h2 id="Authentication_Breeze">2 - Authentication Breeze </h2>
            <a href='https://www.itsolutionstuff.com/post/laravel-9-authentication-using-breeze-tutorialexample.html' target='_blanck'>
               Authentication Breeze Tutorial More Than Easy (You can use this just in first of project or you will lost your web.php file)
            </a>

            <h2 id="Paypal_Payment">3 - Paypal Payment </h2>

            <a className='d-block' href='https://www.laravelia.com/post/laravel-10-paypal-payment-and-dive-into-details#google_vignette' target='_blanck'> Tutorial all file for using paypal to pay with card or with paypal</a>

            <div className='alert bg-success'>
               <h2> About PayPal Developer Dashboard </h2>
               <div className="alert alert-secondary"> 
                  In this exemple we use the default app in <kbd>Apps & Credentials</kbd> :
                  <ul>
                     <li>By default paypal give you <span className='fs-5 text-success'>API Credentials</span> to test and you can create another one if you want .</li>
                  </ul>
               </div>
               <img src="{% static  'laravel/laravel64.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
               <ul  className="alert alert-secondary">
                  <li>in <span className='fs-5 text-success'>Testing Tools</span> you will find the app in to can test <span className='fs-5 text-success'>API Credentials</span>  </li>
                  <li>the <span className='fs-5 text-success'>API Credentials</span> in <span className='fs-5 text-success'>Testing Tools</span> is always business account </li>
               </ul>
               <img src="{% static  'laravel/laravel65.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
               <ul  className="alert alert-secondary">
                  <li>this is the default <span className='fs-5 text-success'>API Credentials</span> in <span className='fs-5 text-success'>Testing Tools</span> you can know that by Client ID</li>
               </ul>
               <img src="{% static  'laravel/laravel65.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            </div>
            <h3>1 - intall package </h3>
            <div className='alert bg-dark text-light pb-0'><pre>composer require srmklive/PayPal</pre></div>
            <h3>2 - config/app.php </h3>
            <div className='alert alert-warning'>
         {/* <pre>'providers' => ServiceProvider::defaultProviders(){"->"}merge([
               ....
               srmklive\PayPal\Providers\PayPalServiceProvider::class,
           ])</pre> */}
            </div>
            <h3>3 -  To publish the configuration files for the PayPal package . </h3>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan vendor:publish --provider="Srmklive\PayPal\Providers\PayPalServiceProvider::class"</pre></div>
            <p>
                Make sure that the PayPal service provider class file exists and is not corrupted. You can check this by opening the 
               "vendor/rmklive/paypal/src/Providers/PayPalServiceProvider.php" check if the class if exist 
            </p>
            <div className='alert alert-danger'>
               <b>If you got some error when try to publish vendor use like this : </b>
               <img src="{% static  'laravel/laravel61.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
               <b>Use this command so salve error </b>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan config:cache</pre></div>
               <b>and Then :</b>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan vendor:publish</pre></div>
               <b> Chose the number for the provider and you are done. (in my case i use <span className='text-success'>11</span>)</b>
               <img src="{% static  'laravel/laravel62.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
               <p>this will create file paypal.php inside folder config/  <kbd>config/paypal.php</kbd> </p>
            </div>
            <h3>4 - .env </h3>
            <p> add this to .env </p>
            <h4>The first method </h4>
            <div className='alert alert-warning pb-0'><pre>PAYPAL_MODE=sandbox
         PAYPAL_SANDBOX_API_USERNAME=..
         PAYPAL_SANDBOX_API_PASSWORD=..
         PAYPAL_SANDBOX_API_SECRET=..
         PAYPAL_CURRENCY=USD
         PAYPAL_SANDBOX_API_CERTIFICATE=</pre>
         </div>
         <h4>The second method </h4>
         <div className='alert alert-warning pb-0'><pre>PAYPAL_MODE=sandbox
         PAYPAL_SANDBOX_CLIENT_ID=
         PAYPAL_SANDBOX_CLIENT_SECRET=</pre>
         </div>
            <h4>Know we need to add info to .env to connect with paypal</h4>   
            <p className='alert alert-secondary'>
               <ul  className="alert alert-secondary">
                  <li>first you need to go to testing tools{">"}sandbox account and find the account business of you app created <kbd>Apps & Credentials</kbd> </li>
                  <li>is very important to choice <b>View/Edit account</b> </li>
               </ul>
            </p>
            <img src="{% static  'laravel/laravel67.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <img src="{% static  'laravel/laravel68.png' %}" className="w-100 border mb-2" alt="ControllerPost"/>
            <div className='alert alert-warning pb-0'><pre><span className='text-success'>//The first method</span>
         PAYPAL_MODE=sandbox
         PAYPAL_SANDBOX_API_USERNAME=<span className="text-danger fs-5">sb-enz1z26813155_api1.business.example.com</span>
         PAYPAL_SANDBOX_API_PASSWORD=<span className="text-danger fs-5">ABPFXEWWN2PK5RKZ</span>
         PAYPAL_SANDBOX_API_SECRET=<span className="text-danger fs-5">AMXv0WG6E0oyHPtur6YqWGuOvwuMAHF09Cm82S5lcy4IZswVrmaulq76</span>
         PAYPAL_CURRENCY=<span className="text-danger fs-5">USD</span>
         PAYPAL_SANDBOX_API_CERTIFICATE=
        
         <hr/>
        
         <span className='text-success'>//the second method</span>
         PAYPAL_SANDBOX_CLIENT_ID=<span className="text-success fs-5">AfILyKjspPjvt8p4rdHjB_PnX4IQcf_J4BLskhHZJF7ae8sxApDItgXzPqhBOUeYa1wYVQD5rHjjn7C9</span>
         PAYPAL_SANDBOX_CLIENT_SECRET=<span className="text-success fs-5">EMe7LGGXl1PUMYL7SUnlX8Mq4poVpaorCZX6ypxi9ZBEPp0bgF0m23Jox9iMcNvggjh4kXRQFG1A6327</span></pre>
            </div>
            <h3>5 - config/paypal.php </h3>
            <p> Handle paypal.php  code </p>
            <a href='https://stackoverflow.com/questions/64928459/i-tried-implementing-srmklive-paypal-1-0-into-my-laravel-project-locally' target="_blanck">Here</a>
            {/* <div className='alert alert-warning pb-0'><pre><span className='text-success'>//The first method compatible config</span>
         return [
         'mode'    => env('PAYPAL_MODE', 'sandbox'), // Can only be 'sandbox' Or 'live'. If empty or invalid, 'live' will be used.
         'sandbox' => [
             'username'    => env('PAYPAL_SANDBOX_API_USERNAME', ''),
             'password'    => env('PAYPAL_SANDBOX_API_PASSWORD', ''),
             'secret'      => env('PAYPAL_SANDBOX_API_SECRET', ''),
             'certificate' => env('PAYPAL_SANDBOX_API_CERTIFICATE', ''), 
             'app_id'      => 'APP-80W284485P519543T',
         ],

         'live' => [
              'username'    => env('PAYPAL_LIVE_API_USERNAME', ''),
              'password'    => env('PAYPAL_LIVE_API_PASSWORD', ''),
              'secret'      => env('PAYPAL_LIVE_API_SECRET', ''),
              'certificate' => env('PAYPAL_LIVE_API_CERTIFICATE', ''),
              'app_id'      => '',
         ],

         'payment_action' => env('PAYPAL_PAYMENT_ACTION', 'Sale'), // Can only be 'Sale', 'Authorization' or 'Order'
         'currency'       => env('PAYPAL_CURRENCY', 'USD'),
         'billing_type'   => 'MerchantInitiatedBilling',
         'notify_url'     => '', 
         'locale'         => '', 
         'validate_ssl'   => true, 
         ];   

         <hr/>
         <span className='text-success'>//the second method compatible config</span>
         return [
             'mode'    => env('PAYPAL_MODE', 'sandbox'), 
             'sandbox' => [
                 'client_id'         => env('PAYPAL_SANDBOX_CLIENT_ID', ''),
                 'client_secret'     => env('PAYPAL_SANDBOX_CLIENT_SECRET', ''),
                 'app_id'            => 'APP-80W284485P519543T',
             ],

             'live' => [
                 'client_id'         => env('PAYPAL_LIVE_CLIENT_ID', ''),
                 'client_secret'     => env('PAYPAL_LIVE_CLIENT_SECRET', ''),
                 'app_id'            => env('PAYPAL_LIVE_APP_ID', ''),
             ],
          
             'payment_action' => 'Sale', 
             'currency'       => env('PAYPAL_CURRENCY', 'USD'),
             'billing_type'   => 'MerchantInitiatedBilling',
             'notify_url'     => '', 
             'locale'         => '', 
             'validate_ssl'   => true,
         ];</pre>
                  </div> */}

               
            <br id="Stripe_Payment_Integration"/><br/>
            <h2>4 - Stripe Payment Integration</h2>
            <a href="https://www.itsolutionstuff.com/post/laravel-10-stripe-payment-gateway-integration-tutorialexample.html" target="_blanck"> Tutorial </a>
               
      </article>

               
      <article>
            <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
            <h1 className="mt-5"> LARAVEL GITHUB & DOCKER </h1>
            <h2 id="clone_laravel_project"> Clone Laravel project  </h2>
            <b> First clone your project </b>
            <div className='alert bg-dark text-light pb-0'><pre> git clone &lt;repository_url{">"} </pre></div>
            <b> Go to directory of your project </b>
            <div className='alert bg-dark text-light pb-0'><pre>cd project-directory </pre></div>
            <b> Install Project Dependencies  </b>
            <div className='alert bg-dark text-light pb-0'><pre>composer install </pre></div>
            <b> Error : if you got error like this install <a href="https://www.7-zip.org/">https://www.7-zip.org/</a> and run "composer install" again</b>
            <img src="{% static  'laravel/laravel58.png' %}" className="w-100 border mb-2 mt-3" alt="ControllerPost"/>
            <b>Set Up Environment Files </b>
            <div className='alert bg-dark text-light pb-0'><pre>copy .env.example .env </pre></div>
            <b> Generate an Application Key</b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan key:generate </pre></div>
            <b> migrate to </b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate </pre></div>
            <b> Run all seeder in your laravel project if needed </b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan db:seed</pre></div>
            <b> run project  </b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan serve </pre></div>
               
            <h2 id="laravel_docker"> Laravel Docker  </h2>
            <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
            <h1 className="mt-5"> LARAVEL DOCKER </h1>
      </article>      
   </section>
</main>
    )
}