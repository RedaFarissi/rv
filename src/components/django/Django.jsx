import { CodeCommand , CodeHighlighter , Result } from "../path";
import images from "./imagesDjango";
import codes from "../../assests/codes/django/django"
import { useState } from "react";

export default function Django(props){
    
   const [getAbsoluteUrl1, setGetAbsoluteUrl1] = useState({
      route: "",
      title_route:"index",
      title: "",
      author:"",
      visibility: false
   })
   const [getAbsoluteUrl2, setGetAbsoluteUrl2] = useState({
      id: "",
      route: "categories/",
      title_route:"categories",
      title: "",
      author:"",
      visibility: false
   })

   const arrays = codes.map(e =>{ 
      const keys = Object.keys(e) 
      var keys_map;
      if (keys.includes("title")) { 
        keys_map = keys.map((key) => (
          key === "title" ? <dt className="aside-dl-dt" key={key}><a href={`/django#${e[key]}`}><i className="fa-solid fa-caret-right"></i> {e[key].replace(/_/g, ' ')}</a></dt> : <dd className="aside-dl-dd" key={key}><a href={`/django#${key}`}><i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}</a></dd>
        ));
      } else {
        keys_map = <dt className="aside-dl-simple" key={keys[0]}><a href={`/django#${keys[0]}`}><i className="fa-solid fa-caret-right"></i> {keys[0].replace(/_/g, ' ')} </a></dt>;
      }
      return keys_map
   });

    return (
<main>
   <aside className="aside">
       <ul className="list-group m-0">
          {arrays}
       </ul>
   </aside>
   <section className="section-conetent ">
      <h1 className="heading-style heading-style-django-color"> Django </h1>   
      <article id="Introduction">
            <h2 className="title-h2 mt-5">1 -مقدمة حول Django</h2>
            <h3 className="title-h3" id="What_is_Django">1 - ما هو Djnago . </h3>
            <p className="style_divv">
               ديجانغو هو إطار عالي المستوى ومفتوح المصدر لبناء تطبيقات الويب الديناميكية باستخدام لغة البرمجة python .يتبع إطار العمل نمط البرمجة المعماري Model-View-Controller (MVC) ويشجع على التطوير السريع والتصميم النظيف والعملي.<br/>
               تم تطوير Django أصلاً من قبل Django Software Foundation ، وهدفه الرئيسي هو تسهيل عمل المطورين في بناء تطبيقات الويب من خلال توفير أساس قوي وقابل لإعادة الاستخدام.<br/><br/>
               من الميزات والمفاهيم الرئيسية لـ Django:<br/>
               <ul>
                  <li className="mb-3"><span className="text-success">Object-Relational Mapping (ORM)</span> : يوفر Django نظام تطبيق الربط الجغرافي القوي الذي يتيح للمطورين التفاعل مع قواعد البيانات باستخدام رموز Python بدلاً من استعلامات SQL. وهذا يبسط المهام المتعلقة بقواعد البيانات ويعزز قراءة الشيفرة.</li>
                  <li className="mb-3"><span className="text-success">Admin Interface</span>(واجهة المسؤول) : يقدم Django واجهة مسؤول تلقائية لإدارة سجلات قواعد البيانات. يمكن للمطورين بسهولة إنشاء وقراءة وتحديث وحذف السجلات من خلال لوحة مسؤول قابلة للتخصيص والقابلة للتوسيع.</li>
                  <li className="mb-3"><span className="text-success">URL Routing</span> (توجيه العناوين) (URL): يستخدم Django نظام توجيه URL نظيفًا ومرنًا ، مما يجعل من السهل ربط عناوين الويب بالعروض. وهذا يسمح بإنشاء هياكل URL ودية لمحركات البحث وسهولة الصيانة.</li>
                  <li className="mb-3"><span className="text-success">Template Engine</span> : يأتي Django مع محرك قوالب مدمج يتيح للمطورين إنشاء صفحات HTML ديناميكية عن طريق تضمين رموز Python داخل قوالب HTML. وهذا يعزز فصل الشيفرة والعرض.</li>
                  <li className="mb-3"><span className="text-success">Security Features</span> (ميزات الأمان) : يضم Django عدة ميزات أمان ، مثل الحماية من حقن SQL ، والبرمجة النصية عبر المواقع (XSS) ، وتزوير الطلبات عبر المواقع (CSRF) ، وغيرها. تساعد هذه الميزات المطورين في بناء تطبيقات الويب بشكل آمن افتراضيًا.</li>
                  <li className="mb-3"><span className="text-success">Middleware</span> (الوسيط) : يتيح نظام الوسيط في Django للمطورين معالجة الطلبات والاستجابات على مستوى عالمي قبل أن يصلوا إلى العرض أو بعدما يغادروا العرض. وهذا يتيح تنفيذ مزايا مختلفة ، مثل المصادقة وتسجيل الدخول والتخزين المؤقت.   </li>
               </ul>
               بشكل عام، Django هو إطار قوي ومتعدد الاستخدامات حاز على شهرة واسعة بسبب بساطته ومرونته وقابليته للتوسيع. إنه مناسب لمشاريع مختلفة من التطبيقات الصغيرة إلى المواقع الكبيرة والمعقدة
            </p>
            <h3 className="title-h3" id="What_you_need_to_get_started"> 2 - django  ما تحتاجه لاستخدام. </h3>
            <p className="style_divv">
               <ul>
                  <li><span className="text-success"><bdi>فهم جيد لل Python :</bdi></span> Django هو إطار عمل مكتوب بلغة Python، والفهم الجيد لـ Python سيسهل عليك الاندماج مع مكونات Django وفهم كيفية تحقيق الأمور في سياق تطوير الويب.</li>
                  <li><span className="text-success"><bdi>تثبيت Python :</bdi></span> Django يعتمد على لغة البرمجة Python. قم بتثبيت Python من الموقع الرسمي: <a href="https://www.python.org/downloads/" target="_blanck" rel="noreferrer"> https://www.python.org/downloads/ </a> </li>
               </ul>
            </p>
            <h3 className="title-h3" id="Verify_required_installations"> 3 - التحقق من التثبيتات المطلوبة</h3>
            <h5 className="title-h5"> 1 - تحقق من إصدار Python المثبت لديك. </h5>
            <CodeCommand>python --version</CodeCommand>
            <h5 className="title-h5">2 - تحقق من تثبيت pip </h5>
            <CodeCommand>pip --version</CodeCommand>
            <h5 className="title-h5"> 3 - تحديث Python  .</h5> 
            <CodeCommand>python -m pip install --upgrade pip</CodeCommand>
            <h3 className="title-h3" id="Struct_django"> 4 - هيكل djnago . </h3>
            <img src={images.django67} className="img"/>
            <img src={images.django25} className="img"/>
      </article>





      <article className="mt-5" id="virtualenv">
            <h2 className="title-h2"> 2- virtualenv .</h2> 
            <h3 className="title-h3" id="What_is_virtualenv">1 - ما هو virtualenv</h3>
            <p className="style_divv"> 
               virtualenv (اختصار ل virtual environment) هو أداة في Python تساعد في إدارة عدة بيئات Python على نفس الجهاز. إليك بعض الأسباب الرئيسية التي تجعل استخدام البيئات الظاهرية، مثل virtualenv، شائعًا في تطوير Python:<br/><br/>
               <ul>
                  <li  className="mb-3"><span className="text-success">عزل التبعيات (Isolation of Dependencies)</span> : تسمح البيئات الظاهرية بإنشاء بيئات معزولة لمشاريع مختلفة. يمكن أن تحتوي كل بيئة على مجموعتها الخاصة من حزم Python والتبعيات، مضمونة بأن الحزم المستخدمة في مشروع واحد لا تتداخل مع تلك المستخدمة في مشروع آخر.</li>
                  <li  className="mb-3"><span className="text-success">توافق الإصدارات (Version Compatibility)</span> : قد تتطلب مشاريع مختلفة إصدارات مختلفة من Python أو حزم محددة. تمكين البيئات الظاهرية من إنشاء بيئة بإصدار معين من Python وتثبيت الحزم الضرورية لمشروع معين، مما يضمن التوافق.</li>
                  <li  className="mb-3"><span className="text-success">بنية المشروع النظيفة (Cleaner Project Structure)</span> : عند العمل على مشروع، تُخزن التبعيات داخل دليل المشروع بدلاً من تثبيتها على نطاق النظام بأكمله. ينتج عن ذلك بنية مشروع أنظف، ويسهل مشاركة المشروع مع الآخرين أو نشره في بيئات مختلفة.</li>
                  <li  className="mb-3"><span className="text-success">إدارة التبعيات (Dependency Management)</span> : </li>
                  <li  className="mb-3"><span className="text-success"></span> : تجعل البيئات الظاهرية من السهل إدارة التبعيات للمشروع. يمكنك تجميد (freeze) قائمة التبعيات المثبتة في بيئة النظير الظاهري، مما يخلق ملف requirements.txt يمكن استخدامه لتثبيت نفس مجموعة التبعيات في مكان آخر.</li>
                  <li  className="mb-3"><span className="text-success">تجنب التغييرات العالمية (Avoiding System-Wide Changes)</span> : عند تثبيت تبعيات Python على نطاق النظام بأكمله، قد تواجه مشكلات إذا احتاجت مشاريع مختلفة إلى إصدارات مختلفة من نفس الحزمة. تتجنب البيئات الظاهرية هذه المشكلة من خلال الاحتفاظ بالتبعيات محليًا للمشروع.</li>
                  <li  className="mb-3"><span className="text-success">اختبار وتطوير (Testing and Development)</span> : تكون البيئات الظاهرية مفيدة بشكل خاص للاختبار والتطوير. تتيح لك إنشاء بيئة نظيفة للاختبار دون التأثير على تثبيت Python على نطاق النظام. هذا أمر حيوي عند العمل على مشاريع مع إصدارات Python أو تبعيات مختلفة.</li>
                  <li  className="mb-3"><span className="text-success">تعطيل وحذف البيئة الظاهرية بسهولة (Easy Deactivation and Deletion)</span> : تفعيل أو تعطيل بيئة ظاهرية أمر بسيط، مما يجعل من السهل الانتقال بين بيئات المشروع المختلفة. أيضًا، حذف البيئة الظاهرية يتم بسهولة ولا يترك ملفات أو تبعيات متبقية على النظام.</li>
               </ul>
            </p>
            <h3 className="title-h3" id="Install_virtualenv"> 1 - تثبيت virtualenv </h3>
            <ul><li>لتثبيت Virtualenv، افتح موجه الأوامر (Command Prompt) واستخدمه  :</li></ul>
            <CodeCommand>pip install virtualenv</CodeCommand>
            <img src={images.django26} className="img"/>
            <h3 className="title-h3" id="Create_virtualenv"> 2 - إنشاء virtualenv </h3>
            <ul><li>لإنشاء virtualenv، انتقل إلى المسار الذي تريد إنشاء virtualenv فيه واستخدمه :</li></ul>
            <CodeCommand>python -m virtualenv Your_Folder_Name</CodeCommand>
            <div className="mital">متال : </div>
            <img src={images.django27} className="img"/>
            <h3 className="title-h3" id="Activate_virtualenv"> 3 - تفعيل  virtualenv </h3>
            <CodeCommand>cd Your_Folder_Name</CodeCommand>
            <CodeCommand>.\\Scripts\activate</CodeCommand>
            <img src={images.django28} className="img"/>
            <h3 className="title-h3" id="Deactivate_virtualenv"> 4 - إلغاء التنشيط virtualenv </h3>
            <CodeCommand>deactivate</CodeCommand>
            <h3 className="title-h3" id="Check_packages_installed"> 5 -  التحقق من الحزم المثبتة</h3>
            <CodeCommand>pip freeze</CodeCommand>
            <img src={images.django29} className="img"/>
            <ul><li>في هذه الحالة لم نقوم بتثبيت أي شيء حتى الآن</li></ul>
            <h3 className="title-h3" id="Install_django"> 6 -  تثبيت django في virtualenv</h3>
            <ul><li>لدي تثبيت django في جهازي، ولكن لاستخدامه داخل virtualenv أحتاج إلى تثبيته مرة أخرى</li></ul>
            <CodeCommand>python -m pip install django</CodeCommand>
            <img src={images.django30} className="img"/>
            <img src={images.django31} className="img"/>
            <h3 className="title-h3" id="Creating_Django_project"> 7 - إنشاء مشروع django </h3>
            <CodeCommand>django-admin startproject project_name</CodeCommand>
            <ul><li> إذا كان لديك أخطاء استخدم :</li></ul>
            <CodeCommand> python -m django startproject project_name  </CodeCommand>
            <ul><li> إذا كنت ترغب في إنشاء مشروع في نفس الدليل استخدم : </li></ul>
            <CodeCommand>python -m django startproject project_name .</CodeCommand>
            <img src={images.django32} className="img"/>
            <h3 className="title-h3" id="Get_version_installed_django">8 - احصل على إصدار Django المثبت لديك</h3>
            <CodeCommand>python -m django --version</CodeCommand>

            <h3 className="title-h3" id="requirements">9 - ملف requirements.txt </h3>
            <p className="style_divv">
               في Django، يتم استخدام ملف requirements.txt عادةً لتحديد وإدارة تبعيات المشروع. يتيح لك هذا الملف سرد جميع حزم Python وإصداراتها التي يعتمد عليها مشروعك. وهذا مفيد بشكل خاص لإنشاء بيئة تطوير قابلة لإعادة الإنتاج.<br/><br/>
               يمكنك استخدام اسم مختلف لملف requirements.txt. تتمثل الاتفاقية في استخدام requirements.txt لأنه معترف به على نطاق واسع في مجتمع تطوير Python. ومع ذلك، إذا كنت تفضل اسمًا مختلفًا لأي سبب من الأسباب، فيمكنك اختيار الاسم المناسب لمشروعك.
            </p>
            <h5 className="title-h5"> 1 - احفظ جميع الحزم المستخدمة في virtualenv في ملف بامتداد txt </h5>
            <CodeCommand>pip freeze {">"} requirements.txt .</CodeCommand>
            <img src={images.django33} className="img"/>
            <h3 className="title-h5"> 2 - لتحميل كل هذه الحزم من مشروع آخر أو عند استخدام جيثب  </h3>
            <CodeCommand>pip install -r requirements.txt .</CodeCommand>
            <h3 className="title-h3" id="Running_development_server"> 10 - تشغيل خادم التطوير .</h3> 
            <CodeCommand>cd project_name</CodeCommand>
            <CodeCommand>python manage.py runserver</CodeCommand>
      </article>






      <article id="First_Exemple">
            <h2 className="title-h2 mt-5"> 3 - المثال الأول </h2>
            <ol>
               <li> أنشاء virtualenv </li>
               <li> تثبيت django  </li>
               <li> إنشاء مشروع django بالاسم project</li>
            </ol>
            <h3 className="title-h3" id="Creation_app_in_project"> 1- إنشاء app helloapp في المشروع .</h3> 
            <p className="style_divv">
               يتألف مشروع Django عادةً من عدة تطبيقات، ويتم تصميم كل تطبيق ليكون وحدة مستقلة يمكن إعادة استخدامها في مشاريع أخرى.<br/><br/>
            </p>
            <CodeCommand>python manage.py startapp helloapp</CodeCommand>
            <h3 className="title-h3" id="settings"> 2- Setting .</h3> 
            <ul><li>تحتاج إلى إضافة اسم التطبيق إلى INSTALLED_APPS في settings.py :</li></ul>
            <CodeHighlighter code={codes[2].settings[0]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            
            <h3 className="title-h3" id="includes_app_to_urlpatterns">3 - تضمين helloapp على urlpatterns .</h3> 
            <h5 className="title-h5">متال 1 : </h5>
            <CodeHighlighter code={codes[2].includes_app_to_urlpatterns[0]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <ul>
               <li>الآن كل المسار الذي تم إنشاؤها في helloapp/urls.py موجود في : <bdi><b>localhost:8000/helloapp/</b></bdi></li>
               <li> <b>سنستخدم المتال 1 في بقية المشروع </b> </li>
            </ul>
            <h5 className="title-h5">متال 2 : </h5>
            <CodeHighlighter code={codes[2].includes_app_to_urlpatterns[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <ul><li>الآن كل المسار الذي تم إنشاؤها في helloapp/urls.py موجود في : <bdi><b>localhost:8000/</b></bdi></li></ul>
            
         
            <h3 className="title-h3" id="templates"> 4 - مجلد templates/</h3>
            <p className="style_divv">
               في Django، يتم استخدام مجلد templates لتخزين ملفات القوالب (templates) الخاصة بتطبيقك. هذا المجلد يتيح لك تنظيم وتخزين أي ملفات HTML أو قوالب Django خاصة بواجهة مستخدم التطبيق.<br/>
               لتفعيل استخدام مجلد templates، يجب أن تتبع الخطوات التالية:<br/>
               <ul>
                  <li className="mb-3"> <span className="text-success">إنشاء المجلد</span> : قم بإنشاء مجلد يسمى templates داخل مجلد التطبيق الخاص بك. إذا كنت تستخدم هيكل تنظيم الملفات التقليدي، يكون المسار كالتالي: <bdi>project/helloapp/templates/</bdi></li>
                  <li className="mb-3"> <span className="text-success">إضافة القوالب</span> : قم بوضع ملفات القوالب الخاصة بك داخل مجلد templates. يمكنك إضافة ملفات HTML أو ملفات قوالب Django مع امتداد .html .</li>
               </ul>
            </p>
            <CodeHighlighter code={codes[2].templates[0]} file_name="project / helloapp / templates / home.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].templates[1]} file_name="project / helloapp / templates / articles.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].templates[2]} file_name="project / helloapp / templates / article.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3" id="urls"> 5 - ملف urls </h3>
            <p className="style_divv">
               في Django، يُستخدم ملف urls.py لتحديد كيفية ربط عناوين الـURL بدوال (views) محددة في تطبيقك. يحدد هذا الملف الطريقة التي يمكن للمستخدمين من خلالها الوصول إلى محتوى معين في تطبيقك.
            </p>
            <CodeHighlighter code={codes[2].urls[0]} file_name="project / helloapp / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3" id="views"> 6 - ملف views </h3>
            <p className="style_divv">
               في Django، الـViews تمثل الوحدات التي تدير المنطق الأساسي لتطبيقك. يمكنك تصور الـView كلمفتاح الوصول إلى البيانات والمنطق الخاص بتطبيقك، وهي المسؤولة عن استعراض البيانات وتحويلها إلى صيغة تظهر للمستخدم في المستعرض.<br/><br/>
               في Django، الـView هي دالة برمجية تستقبل طلب HTTP وتعيد استجابة. يمكن أن تقوم بالتفاعل مع قاعدة البيانات، والحصول على بيانات، وإرسال بيانات إلى القالب ليتم عرضها، أو تنفيذ أي منطق أخرى ذات صلة.
            </p>
            <CodeHighlighter code={codes[2].views[0]} file_name="project / helloapp / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3" id="models"> 7 - ملف models</h3>
            <p className="style_divv">
               في Django، ال models هو تمثيل لجدول في قاعدة البيانات. يستخدم ال models  لتحديد هيكل البيانات والعلاقات بينها، ويوفر وسيلة للتفاعل مع قاعدة البيانات بطريقة برمجية.<br/><br/>
               عند بدء مشروع Django جديد أو إجراء تغييرات على النماذج في مشروع موجود، فإنك تحتاج إلى إنشاء عمليات migrations  للتأكد من أن مخطط قاعدة البيانات الخاص بك متزامن مع التعليمات البرمجية الخاصة بك.<br/><br/>
              
               إعداد قاعدة البيانات الأولي (Initial Database Setup) : <br/>
               عند بدء مشروع Django جديد، يتم إنشاء هيكل قاعدة البيانات الأولي عند تشغيل python manage.py migrate. يُعد هذا إعدادًا أوليًا بناءً على النماذج المعرفة في تطبيقك.<br/><br/>
            
               فيما يلي تفاصيل عن سبب أهمية python manage.py migrate وما يفعله:<br/>
               <ul>
                  <li> (Database Schema Evolution)  </li>
                  <li>Keeping Database in Sync with Code </li>
                  <li>Version Control for Database Schema </li>
                  <li>Consistency Across Development Teams </li>
                  <li>Initial Database Setup </li>
               </ul>
            </p>
            <h5 className="title-h5"> 1 - إعداد قاعدة البيانات الأولي</h5>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <h5 className="title-h5"> 2 -  إسناد أوامر المرغوب تنفيدها على قواعد البيانات ذاخل ملف models و الذي بدوره ذاخل تطبيق helloapp </h5>
            <CodeHighlighter code={codes[2].models[0]} file_name="project / helloapp / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5"> 3 -  عكس الأوامر على قاعدة البيانات <bdi>( يجب إستخدامه في كل مرة قمة بإجراء تعديلات )</bdi></h5>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <div className="alert bg-dark text-light" dir="ltr">
                  <div className="text-info">Operations to perform:</div>
                  Apply all migrations: admin, auth, contenttypes, sessions<br/>
                  <div className="text-info">Running migrations:</div>
                  <div className="ms-4">Applying contenttypes.0001_initial... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0001_initial... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying admin.0001_initial... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying admin.0002_logentry_remove_auto_add... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying admin.0003_logentry_add_action_flag_choices... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying contenttypes.0002_remove_content_type_name... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0002_alter_permission_name_max_length... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0003_alter_user_email_max_length... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0004_alter_user_username_opts... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0005_alter_user_last_login_null... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0006_require_contenttypes_0002... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0007_alter_validators_add_error_messages... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0008_alter_user_username_max_length... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0009_alter_user_last_name_max_length... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0010_alter_group_name_max_length... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0011_update_proxy_permissions... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying auth.0012_alter_user_first_name_max_length... <span className="text-success">OK</span></div>
                  <div className="ms-4">Applying sessions.0001_initial... <span className="text-success">OK</span></div>
            </div>
            <ul><li>تشير المخرجات إلى أنه تم تطبيق عمليات الترحيل بنجاح. يؤكد كل سطر ينتهي بـ "OK" أنه تم تطبيق الترحيل المقابل لتطبيق معين دون أي مشاكل.</li></ul>
            <CodeHighlighter code={codes[2].models[1]} file_name="project / helloapp / migrations / 0001_initial.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <ul><li> سيتم إنشاء ملف projectظhelloapp/migrations/0001_initial.py تلقائيا . </li></ul>
            <h5 className="title-h5"> 4 - تشغيل خادم التطوير  </h5>
            <CodeCommand>python manage.py runserver</CodeCommand>
            <h5 className="title-h5"> 5 - نتيجة التشغيل  </h5>
            <ul> <li>http://localhost:8000/helloapp/home/</li> </ul>
            <Result title='home'  route="http://localhost:8000/helloapp/home/">
               <h1>Home</h1>
            </Result>
            <ul><li>http://localhost:8000/helloapp/articles/</li></ul>
            <Result title='articles'  route="http://localhost:8000/helloapp/articles/">
               <h1>Articles</h1>
            </Result>
            <ul><li><bdi>http://localhost:8000/helloapp/article/1/</bdi></li></ul>
            <Result styleAdd="p-0" title='DoesNotExist at /helloapp/artic'  route="http://localhost:8000/helloapp/article/1/">
               <div className="alert alert-warning">
                     <h2>DoesNotExist at /helloapp/article/1/</h2>
                     <h6>Article matching query does not exist.</h6>
                     <div className="fs-13 ms-5">Request Method:	GET</div>
                     <div className="fs-13 ms-5">Request URL:	http://localhost:8000/helloapp/article/1/</div>
                     <div className="fs-13 ms-5">Django Version:	4.2.7</div>
                     <div className="fs-13 ms-5">Exception Type:	DoesNotExist</div>
                     <div className="fs-13 ms-5">Exception Value:	</div>
                     <div className="fs-13 ms-5">Article matching query does not exist.</div>
                     <div className="fs-13 ms-5">Exception Location:	C:\Users\SURFACE BOOK\Desktop\env-test\lib\site-packages\django\db\models\query.py, line 637, in get</div>
                     <div className="fs-13 ms-5">Raised during:	helloapp.views.show_article</div>
                     <div className="fs-13 ms-5">Python Executable:	C:\Users\SURFACE BOOK\Desktop\env-test\Scripts\python.exe</div>
                     <div className="fs-13 ms-5">Python Version:	3.10.10</div>
                     <div className="fs-13 ms-5">Python Path: ['C:\\Users\\SURFACE BOOK\\Desktop\\env-test\\project',	</div>
                     <div className="fs-13 ms-100"> 'C:\\Users\\SURFACE '</div>
                     <div className="fs-13 ms-100"> 'BOOK\\AppData\\Local\\Programs\\Python\\Python310\\python310.zip',</div>
                     <div className="fs-13 ms-100"> 'C:\\Users\\SURFACE BOOK\\AppData\\Local\\Programs\\Python\\Python310\\DLLs',</div>
                     <div className="fs-13 ms-100"> 'C:\\Users\\SURFACE BOOK\\AppData\\Local\\Programs\\Python\\Python310\\lib',</div>
                     <div className="fs-13 ms-100"> 'C:\\Users\\SURFACE BOOK\\AppData\\Local\\Programs\\Python\\Python310',</div>
                     <div className="fs-13 ms-100"> 'C:\\Users\\SURFACE BOOK\\Desktop\\env-test',</div>
                     <div className="fs-13 ms-100"> 'C:\\Users\\SURFACE BOOK\\Desktop\\env-test\\lib\\site-packages']</div>
                     <div className="fs-13 ms-100">Server time:	Sun, 03 Dec 2023 15:55:54 +0000</div>
               </div>
            </Result>
            <ul><li>ستواجه هذا الخطأ لأننا لم نقم بإدراج أي article بهذا id </li></ul>
            <h3 className="title-h3" id="createsuperuser">8 - إنشاء مستخدم فائق  </h3>
            <p className="style_divv">
               إنشاء مستخدم فائق (superuser) في Django يتيح لك الوصول إلى واجهة الإدارة والتحكم الكامل في قاعدة البيانات. يمكنك إنشاء مستخدم فائق باستخدام أمر createsuperuser.
            </p>
            <CodeCommand>python manage.py createsuperuser</CodeCommand>
            <ul><li>   اذهب إلى الرابط <bdi>http://127.0.0.1:8000/admin/</bdi> وقم بتسجيل الدخول باستخدام الحساب الذي قمت بإنشائه</li></ul>
            <img src={images.django5} className="w-100 my-2 "/>
            <h3 className="title-h3" id="admin">9 - ملف admin </h3>
            <p className="style_divv">
               ملف admin.py هو ملف في مشروع Django يستخدم لتكوين وتخصيص واجهة الإدارة لتطبيق محدد. يحتوي هذا الملف عادة على إعدادات خاصة بالإدارة التي تسمح للمطور بتحديد كيفية عرض وتحرير البيانات في واجهة الإدارة. يتم تسجيل النماذج (Models) التي يرغب المطور في إدارتها في هذا الملف، ويمكن أيضًا إضافة تخصيصات إضافية مثل تحديد الحقول المعروضة، وتحديد البحث، وتطبيق الفلاتر، وغيرها من الإعدادات التي تجعل عملية الإدارة أكثر سهولة وفعالية
            </p>
            <CodeHighlighter code={codes[2].admin[0]} file_name="project / helloapp / admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <ul> <li> تحديث صفحة : <bdi>http://127.0.0.1:8000/admin/</bdi> </li> </ul>
            <img src={images.django5_5} className="w-100 my-2 "/>
            <ul> <li> انقر على add في Articles وأضاف article  تم اذهب إلى الرابط http://localhost:8000/helloapp/article/1/ </li> </ul>
            <h3 className="title-h3" id="layout_file_to_avoid_repeat"> 10 - إنشاء ملف layoute لتجنب التكرار وتعديل الملفات .  </h3>
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[0]} file_name="project / helloapp / templates / layoute.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[1]} file_name="project / helloapp / templates / articles.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[2]} file_name="project / helloapp / templates / article.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[3]} file_name="project / helloapp / templates / home.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
      </article>
      
      <article id="Model_Field_Reference">  
            <h2 className="title-h2"> 4 - Model Field Reference </h2>
            <h3 className="title-h3" id="Definition">1 - تعريف </h3>
            <p className="style_divv">
               في Django يشير (Model Field Reference) إلى مجموعة من الأنواع المدمجة للحقول التي يمكنك استخدامها لتعريف البيانات في نموذج Django. تُستخدم حقول النموذج لتحديد نوع البيانات التي يمكن أن يحتوي عليها كل حقل في نموذج Django، وبالتالي، يساعد في تحديد هيكل ومظهر قاعدة البيانات.<br/><br/>
               ببساطة، حقول النموذج تعتبر "البنية الأساسية" لنموذج Django وتحدد كيف يجب تخزين وتمثيل مختلف أنواع البيانات مثل النصوص، والأرقام، والتواريخ، وغيرها. عند تحديد نموذج Django، يمكنك استخدام حقول النموذج لتحديد ما إذا كان الحقل سيكون نصيًا أو رقميًا أو تاريخيًا، وما إذا كان يجب أن يكون له قيمة افتراضية أو لا.<br/><br/>
               باستخدام هذه الحقول، يمكنك تعريف كيف يجب أن تبدو البيانات في قاعدة البيانات وكيف يمكن لتطبيق Django التفاعل معها. يُسهل مرجع حقول النموذج على المطورين تحديد نموذج بيانات Django الذي يعكس بنية البيانات التي يحتاجونها لتطبيقهم.<br/><br/>
               <span className="mb-3">Model Field Reference يعطيك :</span>
               <ol>
                  <li className="mb-2">
                     <span className="text-success">عنصر HTML (HTML Widget):</span> حقول النموذج في Django لا تحدد فقط كيفية تخزين البيانات في قاعدة البيانات ولكنها تؤثر أيضًا على كيفية تقديمها في النماذج. يتم ربط كل حقل نموذج بعنصر HTML افتراضي، وهو عنصر النموذج الذي يُستخدم لجمع الإدخال من المستخدمين. على سبيل المثال:
                     <ul>
                        <li> <b>CharField</b> :   يُمثل باستخدام عنصر إدخال نصي. </li>
                        <li> <b>DateField</b> :   يُمثل باستخدام عنصر اختيار التاريخ. </li>
                     </ul>
                     يمكنك تخصيص العناصر المستخدمة في النماذج إذا لم تكن القيم الافتراضية مناسبة لتطبيقك.
                  </li>
                  <li className="mb-2">
                     <span className="text-success">التحقق (Validation):</span> حقول النموذج في Django توفر التحقق المدمج للبيانات المُدخلة في النماذج. يتأكد ذلك من أن البيانات تفي بمعايير معينة قبل تخزينها في قاعدة البيانات. على سبيل المثال:
                     <ul>
                        <li> <b>CharField</b> : يمكنه فرض طول أقصى. </li>
                        <li> <b>EmailField</b> : يمكنه التحقق مما إذا كانت القيمة المُدخلة هي عنوان بريد إلكتروني صالح.</li>
                     </ul>
                     Django يقوم بهذه التحققات على الجانب الخادم وأيضًا على الجانب العميل (في المتصفح، باستخدام JavaScript).
                  </li>
                  <li className="mb-2">
                     <span className="text-success">معالجة حجم قاعدة البيانات (Database Size Handling):</span> يؤثر كل حقل نموذج على كيفية تخزين البيانات في قاعدة البيانات، مما يؤثر على حجم قاعدة البيانات وكفاءتها:

                     CharField قد يستخدم VARCHAR في قاعدة البيانات.
                     IntegerField قد يستخدم INTEGER.
                     DateField قد يستخدم DATE.
                     اختيار أنواع الحقول المناسبة يمكن أن يؤثر على حجم قاعدة البيانات وأدائها. على سبيل المثال، استخدام CharField(max_length=100) سيخصص مساحة أكبر في قاعدة البيانات من CharField(max_length=20).
                  </li>
               </ol>     
            </p>
            <h3 className="title-h3" id="Fields">2 - الحقول Fields </h3>
            <h5 className="title-h5">1 - CharField </h5> 
            <p className="style_divv">
               يستخدم CharField عمومًا لتخزين سلاسل صغيرة مثل الاسم الأول واسم العائلة وما إلى ذلك.<br/>
               max_length: هو الحد الأقصى لطول الأحرف المسموح استخدامها.
               <CodeHighlighter code={`column_name = models.CharField(max_length = 200,**options)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">2 - TextField </h5>
            <p className="style_divv">
               يستخدم TextField بشكل عام لتخزين السلاسل الكبيرة (نص).
               <CodeHighlighter code={`column_name = models.TextField(**options)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>       
            <h5 className="title-h5"> 3 - IntegerField </h5>
            <p className="style_divv">
               يستخدم IntegerField بشكل عام لتخزين الأعداد الصحيحة .              
               <CodeHighlighter code={`column_name = models.IntegerField(default=default_Number)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5"> 4 - PositiveIntegerField </h5>
            <p className="style_divv">
               يشبه IntegerField، ولكنه يسمح فقط بالقيم الموجبة.
               <CodeHighlighter code={`column_name = models.PositiveIntegerField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">5 -  BigIntegerField </h5>
            <p className="style_divv">
               يستخدم BigIntegerField لتخزين القيم الصحيحة الكبيرة.
               <CodeHighlighter code={`column_name = models.BigIntegerField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">6 - DateTimeField </h5>
            <p className="style_divv">
               يمثل DateTimeField التاريخ والوقت. 
               <CodeHighlighter code={`column_name = models.DateTimeField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
               لجعله يحفظ البيانات تلقائيا
               <CodeHighlighter code={`column_name = models.DateTimeField(("Date"), auto_now_add = True)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">7 -  EmailField </h5>
            <p className="style_divv">
               مصمم خصيصًا لتخزين عناوين البريد الإلكتروني.
               <CodeHighlighter code={`column_name = models.EmailField(max_length=Number)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5"> 8 - BooleanField </h5>
            <p className="style_divv">
               يخزن BooleanField قيم True  أو False.
               <CodeHighlighter code={`column_name = models.BooleanField(default=False)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">9 - DecimalField </h5>
            <p className="style_divv">
               يستخدم DecimalField لتخزين الأرقام العشرية.
               <CodeHighlighter code={`column_name = models.DecimalField(max_digits=10, decimal_places=2)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">10 - URLField </h5>
            <p className="style_divv">
               مصمم خصيصًا لتخزين عناوين URL.
               <CodeHighlighter code={`column_name = models.URLField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">11 - FileField </h5>
            <p className="style_divv">
               يستخدم لتحميل الملفات (مثل الصور والمستندات وما إلى ذلك).
               <CodeHighlighter code={`column_name = models.FileField(upload_to="folder_to_upload_in_media")`} language="python" addclassName="mt-3 mb-3" copie={true}/>                
               لتحميل الملف تحتاج إلى استخدام  <a className="text-light" href="#Media_files">media</a>
            </p>
            <h5 className="title-h5">12 - ImageField </h5>
            <p className="style_divv">
               يستخدم ImageField للتعامل مع تحميلات الصور.
               <CodeHighlighter code={`column_name = models.ImageField(upload_to='folder_to_upload_in_media/')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
               لتحميل الملف تحتاج إلى استخدام  <a className="text-light" href="#Media_files">media</a>
            </p>
            <h5 className="title-h5">13 - SlugField </h5>
            <p className="style_divv">
               يُستخدم لتخزين تسمية قصيرة تحتوي فقط على أحرف أو أرقام أو واصلات أو شرطات سفلية.
               <CodeHighlighter code={`column_name = models.SlugField(unique=True)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h3 className="title-h3" id="Relations"> 3 - Relations </h3>
            <p className="style_divv">
               في Django، عند تحديد النماذج، يتم إنشاء العلاقات بينها باستخدام الحقول التي تمثل أنواعًا مختلفة من العلاقات. حقول العلاقة الأساسية الثلاثة التي يوفرها Django هي:
            </p>
            <h5 className="title-h5">1 - OneToOneField </h5>
            <p className="style_divv">
               OneToOneField هو حقل يُستخدم لإنشاء علاقة واحد إلى واحد بين نموذجين. يُستخدم عندما يكون لكل مثيل من مثيلات نموذج واحد تمامًا مرتبط مع مثيل واحد من نموذج آخر، والعكس صحيح. <br/><br/>
               مثل العلاقات بين المستخدم والملف الشخصي، يمكن للمستخدم أن يكون له ملف شخصي واحد، والملف الشخصي له مستخدم واحد.
               <CodeHighlighter code={`column_name = models.OneToOneField(ClassModelsToRelation, on_delete=models.CASCADE, related_name='name_to_get_related_data')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Relations[0]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            
            <h5 className="title-h5">2 - Foreginkey </h5>
            <p className="style_divv">
               ForeignKey هو حقل يُستخدم لإنشاء علاقة كثير إلى واحد بين نموذجين. يُستخدم عندما يكون لدى نموذج علاقة مع نموذج آخر، ويمكن ربط كل مثيل من مثيلات النموذج المتعلق بعدة مثيلات من نموذج المصدر، ولكن يتم ربط كل مثيل من مثيلات النموذج المصدر بمثيل واحد فقط من النموذج المتعلق.<br/><br/>
               مثل العلاقات بين المستخدم والمنشور، يمكن للمستخدم إنشاء العديد من المنشورات، ولكن يتم التحكم في النشر من قبل مستخدم واحد.
               <CodeHighlighter code={`column_name = models.Foreginkey(ClassModelsToRelation, on_delete=models.CASCADE, related_name='name_to_get_related_data')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Relations[1]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            
            <h5 className="title-h5">3 - ManyToManyField </h5>
            <p className="style_divv">
               ManyToManyField هو حقل يُستخدم لإنشاء علاقة كثير إلى كثير بين نموذجين. يُستخدم عندما يكون لكل مثيل من مثيلات نموذج واحد قد تم ارتباطه بمثيلات متعددة من نموذج آخر، والعكس صحيح.<br/><br/>
               مثل العلاقات بين المستخدم والمجموعات، يمكن للمستخدم إنشاء العديد من المجموعات ويمكن أن تضم المجموعات العديد من المستخدمين.
               <CodeHighlighter code={`column_name = models.ManyToManyField(ClassModelsToRelation,related_name='name_to_get_related_data')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Relations[2]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3" id="Parameter"> 4 - Parameter</h3>
            <h5 className="title-h5">1 - choices</h5>
            <p className="style_divv">
               لإنشاء خيار، تحتاج إلى (tuple) يتم فرضها من خلال التحقق من صحة النموذج وستكون أداة النموذج الافتراضية عبارة عن مربع تحديد يحتوي على هذه الاختيارات بدلاً من حقل النص القياسي.            
               <CodeHighlighter code={`choices=(  ("Key1", "value1"),    ("Key2", "value2"),   )`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Parameter[0]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5">2 - blank</h5>
            <p className="style_divv"> 
               لإخبار جانغو إذا كان الحقل إجباري أو إختياري .<br/><br/>
               <ul>
                  <li><b>blank=True</b> :  لإخبار django أن هذا العمود إختياري</li>
                  <li><b>blank=False</b> : لإخبار django أن هذا العمود إجباري  (قيمة الافتراضية)</li>
               </ul>
               <CodeHighlighter code="blank=True" language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Parameter[1]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5">3 - related_name</h5>
            <p className="style_divv">
               يستخدم Django الخاصية related_name في حقل ForeignKey أو OneToOneField لتحديد اسم العلاقة العكسية من النموذج المتعلق إلى النموذج الذي يعرّف المفتاح الخارجي. يتيح لك ذلك تحديد اسم أكثر إيضاحاً أو فهمًا للعلاقة العكسية.<br/><br/>
               في نماذج Django، عند إنشاء حقل ForeignKey أو OneToOneField، يقوم Django تلقائيًا بإنشاء علاقة عكسية من النموذج المتعلق إلى النموذج الذي يعرّف المفتاح الخارجي. يتم إنشاء هذه العلاقة العكسية كمدير يتيح لك الوصول إلى الكائنات المتعلقة بسهولة.<br/><br/>
               بشكل افتراضي، يقوم Django بتوليد اسم لهذه العلاقة العكسية استنادًا إلى اسم النموذج الذي يعرّف ForeignKey أو OneToOneField. ومع ذلك، في بعض الحالات، قد ترغب في توفير اسم مخصص وأكثر وضوحًا للعلاقة العكسية، وهنا يأتي دور related_name.
               <CodeHighlighter code={`related_name="name_to_get_related_data"`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p> 
            <CodeHighlighter code={codes[3].Parameter[2]} file_name="project / helloapp / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <div className="mital">مثال 1 : </div>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"}from helloapp.models import Author , Book<br/>
               {">>>"}<span className="text-success">#create two authors in database</span><br/>
               {">>>"}author1 = Author(name="reda eskouni") <br/>
               {">>>"}author2 = Author(name="Name 2")<br/>
               {">>>"}<span className="text-success">#save authors created</span><br/>
               {">>>"}author1.save()<br/>
               {">>>"}author2.save()<br/>
               {">>>"}<span className="text-success">#list all authors created</span><br/>
               {">>>"}for author in Author.objects.all():<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(author.name)<br/>
               {">>>"}...<br/>
               reda eskouni<br/>
               Name 2<br/>
               {">>>"}<span className="text-success">#Create 4 books and saved it</span><br/>
               {">>>"}book1 = Book.objects.create(title="My Book 1", author=author1) <br/>
               {">>>"}book2 = Book.objects.create(title="My Book 2", author=author1) <br/>
               {">>>"}book3 = Book.objects.create(title="My Book 3", author=author2) <br/>
               {">>>"}book4 = Book.objects.create(title="My Book 4", author=author1) <br/>
               {">>>"}<span className="text-success">#list all books created</span><br/>
               {">>>"}for book in Book.objects.all():<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(f"book title is : {"{"}book.title{"}"} and author is {"{"}book.author{"}"}"))<br/>
               {">>>"}...<br/>
               book title is : My Book 1 and author is reda eskouni <br/>
               book title is : My Book 2 and author is reda eskouni <br/>
               book title is : My Book 3 and author is Name 2 <br/>
               book title is : My Book 4 and author is reda eskouni <br/>
               {">>>"}<br/>
               {">>>"}<span className="text-success">#use related_name='books' created in models </span><br/>
               {">>>"}all_books_for_author1 = author1.books.all()<br/>
               {">>>"}for i in all_books_for_author1:<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(f"{"{"}author1.name{"}"} created {"=>"}  {"{"}i.title{"}"}")<br/>
               {">>>"}...<br/>
               reda eskouni created {"=>"}  My Book 1<br/>
               reda eskouni created {"=>"}  My Book 2<br/>
               reda eskouni created {"=>"}  My Book 4<br/>
            </CodeCommand>
            <ul><li>لنفترض أن البيانات بالفعل في قاعدة البيانات</li></ul>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"}from helloapp.models import Author , Book<br/>
               {">>>"}<span className="text-success">#get the autor you want all his book</span><br/>
               {">>>"}author = Author.objects.get(id=1) <br/>
               {">>>"}all_books_for_author1 = author.books.all()<br/>
               {">>>"}...<br/>
               {">>>"}for i in all_books_for_author1:<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(f"{"{"}author.name{"}"} created {"=>"}  {"{"}i.title{"}"}")<br/>
               {">>>"}...<br/>
               reda eskouni created {"=>"}  My Book 1<br/>
               reda eskouni created {"=>"}  My Book 2<br/>
               reda eskouni created {"=>"}  My Book 4<br/>
            </CodeCommand>
            <div className="mital">مثال 2 : </div>
            <CodeHighlighter code={codes[3].Parameter[3]} file_name="project / helloapp / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[3].Parameter[4]} file_name="project / helloapp / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[3].Parameter[5]} file_name="project / helloapp / templates /author_books.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <Result title='author_books'  route="http://localhost:8000/helloapp/authors/1/books/">
               <h2>Author : reda eskouni</h2>
               <div className="text-light mb-2" style={{backgroundColor:"red",fontSize:"26px"}}>My Book 1</div>
               <div className="text-light mb-2" style={{backgroundColor:"red",fontSize:"26px"}}>My Book 2</div>
               <div className="text-light mb-2" style={{backgroundColor:"red",fontSize:"26px"}}>My Book 4</div>
            </Result> 
      </article>

      <article id="Static_and_Media_files">
            <h2  className="title-h2 mt-5" > 5 - Static files && Media files </h2>
            <h3 className="title-h3" id="Manage_static_files"> 1 - إدارة الملفات الثابتة (static/)</h3>
            <p className="style_divv">
               في Django، يعتبر مجلد "static" مجلدًا حيث يمكنك تنظيم وتخزين الملفات الثابتة الخاصة بتطبيق الويب الخاص بك. تتضمن هذه الملفات الثابتة موارد مثل الصور وملفات JavaScript وورق الأنماط CSS وموارد أخرى يستخدمها صفحات الويب الخاصة بك. إليك تفصيل للغرض واستخدام مجلد "static" في Django:
            </p>
            <h5 className="title-h5"> 1 - أضف في ملف settings.py </h5>
            <CodeHighlighter code={codes[4].Manage_static_files[0]} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Manage_static_files[1]} file_name="project / settings.py" language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5"> 2 -  أضف في ملف urls.py </h5>
            <CodeHighlighter code={codes[4].Manage_static_files[2]} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Manage_static_files[3]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <ul><li>قم بإنشاء مجلد باسم static/ في نفس مسار ملف manage.py مما يعنب بجانب تطبيقات المنشأت في مشروعك </li></ul>
            <img src={images.django9} className="img"/>
            <ul><li>يمكنك الآن إضافة جميع الملفات الثابتة أو المجلدات التي تحتوي على ملفات ثابت في static/</li></ul>
            <h5  className="title-h5"> 3 - الحصول على الملفات من المجلد static/ </h5>
            <p className="style_divv">
                في المجلد static/ نضع صورة باسم img_pc.png . <br/>
               للحصول على أي شيء من static/ يجب عليك استخدام 
               <CodeHighlighter code={`{% load static %}`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[4].Manage_static_files[4]} file_name="test_static.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
         
            <h3 className="title-h3" id="Media_files"> 2 - إدارة ملفات الوسائط (media/)</h3>
            <h5 className="title-h5"> 1 - أضف في ملف settings.py </h5>
            <CodeHighlighter code={codes[4].Media_files[0]}  language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[1]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5"> 2 -  أضف في ملف urls.py </h5>
            <CodeHighlighter code={codes[4].Media_files[2]}  language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[3]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5" id="Media_files"> 3 - تثبيت الحزمة Pillow</h5>
            <p className="style_divv">
               للسماح للمستخدم بتحميل الملفات في Django، يجب عليك تثبيت Pillow 
            </p>
            <CodeCommand>python -m pip install Pillow</CodeCommand>
            <img src={images.django18} className="img"/>
            <div className="mital">مثال : </div>
            <h6 className="title-h6"> إنشاء تطبيق آخر (app)</h6>
            <CodeCommand>python manage.py startapp app</CodeCommand>
            <CodeHighlighter code={codes[4].Media_files[4]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[5]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[7]} file_name="project / app / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[6]} file_name="project / app / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[8]} file_name="project / app / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[9]} file_name="project / app / admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[10]} file_name="project / app / tempaltes / list_products.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <ul>
               <li>انتقل إلى صفحة ال admin وأضف بعض الفئات وبعض المنتجات.</li>
               <li> عند إضافة صورة من صفحة ال admin ، يتم إنشاء مجلد الوسائط في مشروعك تلقائيًا .</li>
            </ul>
      </article>

      <article id="about_templates" className="t-5">
            <h2  className="title-h2" > 6 -  templates </h2>
            <h3 className="title-h3" id="Create_Public_templates"> 1 - إنشاء public templates  </h3>    
            <p className="style_divv">
               قم بإنشاء قوالب عامة يمكنك استخدامها في جميع التطبيقات الموجودة في مشروعك   .<br/><br/>
               لإنشاء قوالب عامة في جميع التطبيقات، يجب عليك أولاً القيام بكل ما هو شائع في الملفات الثابتة وملفات الوسائط
            </p>
            <ul><li> أنشئ ملفًا بأي اسم تريده في templates/ في هذا المثال، الاسم هو base.html</li></ul>
            <img src={images.django12} className="img"/>
            <CodeHighlighter code={codes[5].Create_Public_templates[0]} file_name="project / tempaltes / base.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[5].Create_Public_templates[1]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[5].Create_Public_templates[2]} file_name="project / app / tempaltes / list_products.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <h3 className="title-h3" id="templates_tags">2 -  templates tags </h3>
           
            <table className="table table-bordered text-light">
               <tbody>
               <tr className="mb-2"> 
                  <td> عبارة شرطية لعرض المحتوى بناءً على شرط. تُستخدم لتحديد ما إذا كان يجب عرض جزء معين من الصفحة استنادًا إلى شرط معين. </td>
                  <td dir="ltr">{"{"}% if condition %{"}"} ... {"{"}% endif %{"}"}</td>
               </tr>
               <tr className="mb-2"> 
                  <td>  كتلة الشيفرة لكل عنصر. يستخدم لتكرار العمليات على مجموعة من العناصر. </td>
                  <td dir="ltr">{"{"}% for item in list %{"}"} ... {"{"}% endfor %{"}"}</td>
               </tr>
               <tr className="mb-2"> 
                  <td> يولد عنوان URL بناءً على اسم الرابط المقدم والوسائط. يُستخدم لتوليد عناوين الروابط بطريقة ديناميكية. </td>
                  <td dir="ltr">{"{"}% url 'url_name' arg1 arg2 %{"}"}</td>
               </tr>
               <tr className="mb-2"> 
                  <td> يعرف كتلة مسماة يمكن استبدالها في القوالب الفرعية. تُستخدم لإنشاء أماكن للتخصيص في القوالب الفرعية. </td>
                  <td dir="ltr">{"{"}% block block_name %{"}"} ... {"{"}% endblock %{"}"}</td>
               </tr>
               <tr className="mb-2"> 
                  <td>  يضم محتوى قالب آخر في تلك الموقع. يستخدم لإعادة استخدام قوالب الويب وتضمينها في قوالب أخرى. </td>
                  <td dir="ltr">{"{"}% include 'template_name.html' %{"}"}</td>
               </tr>
               <tr className="mb-2"> 
                  <td> يولد رمز CSRF لأمان تقديم النموذج. يستخدم لتضمين رمز حماية CSRF في نماذج الويب لتقديمها بشكل آمن. </td>
                  <td dir="ltr">{"{"}% csrf_token %{"}"}</td>
               </tr>
               <tr className="mb-2"> 
                  <td>  يحمل وسوم القوالب المخصصة من ملف محدد. يستخدم لتحميل واستخدام وسوم مخصصة معرفة مسبقًا في القوالب. </td>
                  <td dir="ltr">{"{"}% load custom_tags %{"}"}</td>
               </tr>
               </tbody>
            </table>
            <h3 className="title-h3" id="csrf_token"> 2 - {"{"}% csrf_token %{"}"} </h3>
            <p className="style_divv">
               من خلال تضمين العلامة {"{"}% csrf_token %{"}"} في النموذج الخاص بك، فإنك تضمن حماية عمليات إرسال النماذج ضد هجمات CSRF. إنه إجراء أمني حاسم عند التعامل مع إدخال المستخدم وعمليات إرسال النماذج في تطبيقات Django.
            </p>
            <h3 className="title-h3" id="template_filters">4 -   template filters </h3>
            <table className="table table-bordered text-light">
               <tbody>
                  <tr className="mb-2"> 
                     <td>يطبق المرشحات لتحويل قيمة المتغير قبل عرضه.</td>
                     <td dir="ltr"> {"{{"} variable|filter {"}}"}</td>
                  </tr>
                  <tr className="mb-2"> 
                     <td> يقوم بتنسيق قيمة التاريخ أو الوقت بناءً على التنسيق المحدد. </td>
                     <td dir="ltr"> {"{{"} variable|date:'Y-m-d' {"}}"}</td>
                  </tr>
                  <tr className="mb-2"> 
                     <td> إرجاع طول سلسلة (string) أو قائمة أو مجموعة استعلامات. </td>
                     <td dir="ltr"> {"{{"} variable|length {"}}"} </td>
                  </tr>
                  <tr className="mb-2"> 
                     <td> قتطع سلسلة (string) إلى عدد محدد من الأحرف . </td>
                     <td dir="ltr"> {"{{"} variable|truncatechars:20 {"}}"} </td>
                  </tr>
                  <tr className="mb-2"> 
                     <td> يحول فواصل الأسطر إلى علامات {"<"}br/{">"} .</td>
                     <td dir="ltr"> {"{{"} variable|linebreaksbr {"}}"} </td>
                  </tr>
                  <tr className="mb-2"> 
                     <td> يتم استخدامه لعرض قيمة متغير أو قيمة افتراضية إذا لم يتم تعريف المتغير أو لا شيء . </td>
                     <td dir="ltr"> {"{{"} variable|default:"value" {"}}"} </td>
                  </tr>
               </tbody>
            </table>
            <div className="mital">مثال : </div>
            <CodeHighlighter code={codes[5].template_filters[0]} file_name="views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[5].template_filters[1]} file_name="created_updated.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <Result title='date'  route="http://localhost:8000/helloapp/article/1/">
               <h2>Products created updated</h2>
               <div className="mb-2 bg-dark text-light">
                  <ul>
                     <li>created :December 5, 2023</li>
                     <li>updated :Dec. 5, 2023, 2:55 p.m.</li>
                  </ul>
               </div>
               <div className="bg-dark text-light">
                  <ul>
                     <li>created :December 5, 2023</li>
                     <li>updated :Dec. 5, 2023, 2:56 p.m.</li>
                  </ul>
               </div>
            </Result>            
      </article>
      <article className="mt-5"  id="about_admin">
            <h2 className="title-h2"> 7 - admin </h2>
            <h3 className="title-h3" id="list_display">1 - list_display </h3>
            <p className="style_divv">
               يمكنك استخدام list_editable لرؤية الأعمدة التي تريدها في صفحة المسؤول. 
            </p>
            <CodeHighlighter code={codes[6].list_display[0]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django174} className="img"/>
            <h3 className="title-h3" id="prepopulated_fields"> 2 - prepopulated_fields </h3>
            <p className="style_divv"> 
               يمكنك استخدام السمة prepopulated_fields في ملف المسؤول لتحديد الحقول حيث يتم تعيين القيمة تلقائيًا باستخدام قيمة الحقول الأخرى.
            </p> 
            <CodeHighlighter code={codes[6].prepopulated_fields[0]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django172} className="img"/>
            <h3 className="title-h3" id="list_editable"> 3 - list_editable  </h3>
            <p className="style_divv"> 
               نستخدم list_editable مع الأعمدة التي نريد تحديثها من صفحة المسؤول.<br/><br/>
               يجب أيضًا إدراج أي حقل في list_editable في سمة list_display، حيث يمكن تحرير الحقول المعروضة فقط.
            </p>
            <CodeHighlighter code={codes[6].list_editable[0]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django176} className="img"/>

            <h3 className="title-h3" id="inlines"> 4 - inlines  </h3>
            <p className="style_divv">
               في Django، يتم استخدام Inlines في واجهة الإدارة للتعامل مع النماذج ذات الصلة وتوفير طريقة لإدارتها في سياق النموذج الأصلي. تسمح لك السطور المضمّنة بعرض مثيلات النموذج ذات الصلة وإنشائها وتحديثها وحذفها مباشرةً من واجهة الإدارة الخاصة بالنموذج الأصلي.<br/><br/>
               يعد مفهوم السطور مفيدًا بشكل خاص عند التعامل مع علاقات واحد إلى متعدد أو متعدد إلى متعدد بين النماذج. فهو يساعد على تبسيط إدارة البيانات ذات الصلة من خلال تقديم واجهة ملائمة لتحرير الكائنات ذات الصلة وربطها
            </p>
            <CodeHighlighter code={codes[6].inlines[0]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[6].inlines[1]} file_name="admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django188} className="img"/> 
            <p className="fs-5"> عند النقر فوق حفظ المؤلف الذي تم إنشاؤه باستخدام كتاب ذي صلة</p>
            <img src={images.django189} className="img"/> 
      </article>

      <article className="mt-5" id='about_models'>
            <h2 className="title-h2"> 8 - models </h2>
            <h3 className="title-h3" id="get_absolute_url">1 - get_absolute_url() </h3>
            <p className="style_divv">
               get_absolute_url هي طريقة في نماذج Django تقوم بإرجاع عنوان URL للوصول إلى كائن معين، مما يسمح بربط هذا الكائن بسهولة في القوالب وطرق العرض. من خلال تحديد get_absolute_url فيmodels.py، يمكنك إنشاء عنوان URL للوصول إلى هذا الكائن دون بذل جهد كبير.<br/><br/>
               تُستخدم هذه الطريقة عادةً مع نظام توجيه URL الخاص بـ Django لتحديد أنماط URL التي تطابق عناوين URL التي يتم إرجاعها بواسطة get_absolute_url.
            </p>
            <div className="mital">مثال 1 : </div>
            <h5 className="title-h5">إنشاء app بالاسم testing</h5>
            <CodeCommand>python manage.py startapp testing</CodeCommand>
            <CodeHighlighter code={codes[7].get_absolute_url[0]} file_name="projet / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[1]} file_name="projet / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[2]} file_name="projet / testing / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[3]} file_name="projet / testing / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[4]} file_name="projet / testing / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[5]} file_name="projet / templates / index.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[6]} file_name="projet / templates / home_detail.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from testing.models import Author, Book<br/>
               {">>>"} <br/>
               {">>>"} author1 = Author.objects.create(name="author 1", age=30)<br/>
               {">>>"} author2 = Author.objects.create(name="author 2", age=35)<br/>
               {">>>"} <br/>
               {">>>"} Book.objects.create(title="Book 1 by Author 1", author=author1)<br/>
               {">>>"} Book.objects.create(title="Book 2 by Author 1", author=author1)<br/>
               {">>>"} Book.objects.create(title="Book 3 by Author 1", author=author1)<br/>
               {">>>"} <br/>
               {">>>"} Book.objects.create(title="Book 1 by Author 2", author=author2)<br/>
               {">>>"} Book.objects.create(title="Book 2 by Author 2", author=author2)<br/>
               {">>>"} Book.objects.create(title="Book 3 by Author 2", author=author2)<br/>
            </CodeCommand>
            <Result title={getAbsoluteUrl1.title_route} route={`http://localhost:8000/testing/${getAbsoluteUrl1.route}`}>
               {(getAbsoluteUrl1.visibility)?(
                  <>
                     <h2>home_detail</h2>
                     <table className="table table-dark table-bordered text-light">
                        <thead>
                           <tr>
                              <th className="mb-0"> title </th>
                              <th className="mb-0"> author </th>
                           </tr>
                        </thead>    
                        <tbody className="mt-0">
                           <tr>
                              <td> {getAbsoluteUrl1.title} </td>
                              <td> {getAbsoluteUrl1.author} </td>
                           </tr>
                        </tbody>
                     </table>
                  </>
               ):(
                  <table className="table table-dark table-bordered text-light">
                     <thead>
                        <tr>
                           <th className="mb-0"> Title </th>
                        </tr>
                     </thead>    
                     <tbody className="mt-0">
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-1-by-author-1/",title:"Book 1 by Author 1",author:"author 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 1 by Author 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-2-by-author-1/",title:"Book 2 by Author 1",author:"author 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 2 by Author 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-3-by-author-1/",title:"Book 3 by Author 1",author:"author 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 3 by Author 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-1-by-author-2/",title:"Book 1 by Author 2",author:"author 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 1 by Author 2</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-2-by-author-2/",title:"Book 2 by Author 2",author:"author 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 2 by Author 2</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-3-by-author-2/",title:"Book 3 by Author 2",author:"author 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 3 by Author 2</u></td></tr>
                     </tbody>
                  </table>
               )}
            </Result>  
            <div className="mital"> مثال 2 : </div>
            <h5 className="title-h5">إنشاء app بالاسم shop</h5>
            <CodeCommand>python manage.py startapp shop</CodeCommand>
            <CodeHighlighter code={codes[7].get_absolute_url[7]}  file_name="projet / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[8]}  file_name="projet / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[9]}  file_name="projet / shop / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[10]} file_name="projet / shop / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[11]} file_name="projet / shop / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[12]} file_name="projet / templates / home_detail.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[13]} file_name="projet / templates / home_detail.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from shop.models import Category<br/>
               {">>>"} Category.objects.create(name="category 1", slug="category-1")<br/>
               {">>>"} Category.objects.create(name="category 2", slug="category-2")<br/>
               {">>>"} Category.objects.create(name="category 3", slug="category-3")<br/>
               {">>>"} Category.objects.create(name="category 4", slug="category-4")<br/>
               {">>>"} Category.objects.create(name="category 5", slug="category-5")<br/>
               {">>>"} Category.objects.create(name="category 6", slug="category-6")<br/>
            </CodeCommand>
            <Result title={getAbsoluteUrl2.title_route} route={`http://localhost:8000/${getAbsoluteUrl2.route}`}>
               {(getAbsoluteUrl2.visibility)?(
                  <>
                     <h2> Category {getAbsoluteUrl2.id} </h2>
                     <table className="table table-dark table-bordered text-light">
                        <thead>
                           <tr>
                              <th className="mb-0"> category </th>
                           </tr>
                        </thead>    
                        <tbody className="mt-0">
                           <tr>
                              <td> {getAbsoluteUrl2.title} </td>
                           </tr>
                        </tbody>
                     </table>
                  </>
               ):(
                  <table className="table table-dark table-bordered text-light">
                     <thead>
                        <tr>
                           <th className="mb-0"> categories </th>
                        </tr>
                     </thead>    
                     <tbody className="mt-0">
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"1",title_route:"category 1",route:"category/category-1/",title:"category 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"2",title_route:"category 2",route:"category/category-2/",title:"category 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 2</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"3",title_route:"category 3",route:"category/category-3/",title:"category 3",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 3</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"4",title_route:"category 4",route:"category/category-4/",title:"category 4",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 4</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"5",title_route:"category 5",route:"category/category-5/",title:"category 5",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 5</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"6",title_route:"category 6",route:"category/category-6/",title:"category 6",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 6</u></td></tr>
                     </tbody>
                  </table>
               )}
            </Result> 

            <h3  className="title-h3" id="create_a_database_backup"> 2 - إنشاء نسخة احتياطية لقاعدة البيانات </h3>
            <p className="style_divv">
               إن إنشاء نسخة احتياطية لقاعدة البيانات يشير إلى إنشاء نسخة من الحالة الحالية لقاعدة البيانات.<br/><br/>
               عندما تقوم بإنشاء نسخة من قاعدة البيانات، ستحتوي القاعدة البيانات الجديدة على نسخة دقيقة من القاعدة البيانات الأصلية، بما في ذلك جميع الجداول، والفهارس، والإجراءات المخزنة، والعروض، والمشغلات، وما إلى ذلك. ستكون البيانات في القاعدة البيانات الجديدة هي نفس البيانات في القاعدة البيانات الأصلية في وقت إنشاء النسخة.<br/><br/>
               بعد إنشاء نسخة من قاعدة البيانات، يمكنك تعديل البيانات في القاعدة البيانات الجديدة دون التأثير على القاعدة البيانات الأصلية. يمكن أن يكون ذلك مفيدًا لاختبار الميزات الجديدة أو إجراء تغييرات على هيكل قاعدة البيانات دون التعرض لخطر التلف في البيانات الأصلية.
            </p>
            <CodeCommand>python manage.py dumpdata {">"} backup.json</CodeCommand>
            <ul>
               <li>تشغيل الأمر في دليل مشروع Django الخاص بك سيقوم بإنشاء نسخة احتياطية لقاعدة البيانات الخاصة بك بأكملها، بما في ذلك جميع البيانات من جميع التطبيقات داخل مشروعك.</li>
            </ul>
            <h3 className="title-h3" id="restore_the_data_from_the_backup"> 3 -استعادة البيانات من النسخة الاحتياطية </h3>
            <CodeCommand>python manage.py loaddata backup.json</CodeCommand>
            
            <h3 className="title-h3" id="remove_all_from_db_models"> 4 - إزالة جميع الأعمدة والصفوف من تطبيق معين في قاعدة البيانات</h3>
            <h5 className="title-h5"> 1 - افتح Django shell </h5>
            <CodeCommand>python manage.py shell</CodeCommand>
            <h5 className="title-h5"> 2 -داخل الصدفة، قم باستيراد نماذج التطبيق الذي تريد مسحه</h5>
            <CodeCommand>{">>>"}from myapp.models import *</CodeCommand>
            <h5 className="title-h5"> 3 - قم بتشغيل الأمر التالي لحذف كافة الصفوف في جداول النماذج</h5>
            <CodeCommand>{">>>"}MyModelCLASS.objects.all().delete()</CodeCommand>
            
            <h3 className="title-h3" id="annotate">5 - annotate</h3>
            <p className="style_divv">
               في Django، يقوم نظام الربط الكائني (ORM) تلقائيًا بتستخلص العلاقة بين النماذج استنادًا إلى تعاريف الحقول والعلاقات الرئيسية الخارجية التي قمت بتعريفها في ملف models.py <br/><br/>
               في نموذج Like الخاص بك، قمت بتعريف حقل مفتاح خارجي يسمى product والذي يشير إلى نموذج Product. يستخدم Django هذه العلاقة لفهم الاتصال بين نموذج Like ونموذج Product.<br/><br/>
               في حالتي، يحتوي نموذج Like على حقل ForeignKey يسمى product والذي يشير إلى نموذج Product. عند تحديد 'like' داخل Count()، يفهم Django أنه يحتاج إلى حساب حالات Like المتعلقة بكل Product استنادًا إلى العلاقة بمفتاح الخارجي product. لذا، يحل Django تلقائيًا العلاقة بين نموذج Product ونموذج Like من خلال تعريف حقل مفتاح خارجي ويستخدمها لحساب الإعجابات المتعلقة بكل منتج.
            </p>         
            <div className="mital">مثال 1 : </div>
            <CodeHighlighter code={codes[7].annotate[0]} file_name="models.py" language="py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[1]} file_name="views.py" language="python" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[2]} file_name="index.html" language="django" addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django194} className="img"/>
            <div className="mital">مثال 2 : </div>
            <ul>
               <li> أنشئ مشروعًا جديدًا  (لقد أطلقت عليه اسم project)</li>
               <li>وأضف إعدادات <bdi>media/</bdi> و <bdi>static/</bdi> واستخدم templates العام</li>
               <li>إنشاء app بالاسم book</li>
               <li> وأضف التطبيق الخاص بك في INSTALLED_APPS </li>
            </ul>
            <CodeHighlighter code={codes[7].annotate[3]} file_name="" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[4]} file_name="" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[5]} file_name="" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[6]} file_name="" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[7]} file_name="" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand> python manage.py makemigrations</CodeCommand>   
            <CodeCommand> python manage.py migrate</CodeCommand>   
            <CodeCommand> python manage.py shell</CodeCommand>   
            <CodeCommand>   
               {">>>"} from book.models import Author , Book<br/>
               {">>>"} author1 = Author.objects.create(name="author1")<br/>
               {">>>"} author2 = Author.objects.create(name="author2")<br/>
               {">>>"} author3 = Author.objects.create(name="author3")<br/>
               {">>>"}<br/>
               {">>>"} Book.objects.create(title="A" , author=author1 , number_page=90 )<br/>
               {">>>"} Book.objects.create(title="B" , author=author2 , number_page=29 )<br/>
               {">>>"} Book.objects.create(title="C" , author=author3 , number_page=239 )<br/>
               {">>>"} Book.objects.create(title="AA" , author=author1 , number_page=39 )<br/>
               {">>>"} Book.objects.create(title="BB" , author=author2 , number_page=39 )<br/>
               {">>>"} Book.objects.create(title="CC" , author=author3 , number_page=239 )<br/>
            </CodeCommand>
            <Result title='annotate' route="http://localhost:8000/">
               <h2> All Books </h2>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2">
                  <tr><th className="css-border-collapse-ex1 p-3">Title</th><th className="css-border-collapse-ex1 p-3">Author</th><th className="css-border-collapse-ex1 p-3">Number Page</th></tr>
                  <tr> <td className="css-border-collapse-ex1 px-3 py-2">A</td> <td className="css-border-collapse-ex1 px-3 py-2">author1</td><td className="css-border-collapse-ex1 p-2">90</td></tr>
                  <tr> <td className="css-border-collapse-ex1 px-3 py-2">B</td> <td className="css-border-collapse-ex1 px-3 py-2">author2</td><td className="css-border-collapse-ex1 p-2">29</td></tr>
                  <tr> <td className="css-border-collapse-ex1 px-3 py-2">C</td> <td className="css-border-collapse-ex1 px-3 py-2">author3</td><td className="css-border-collapse-ex1 p-2">239</td></tr>
                  <tr> <td className="css-border-collapse-ex1 px-3 py-2">AA</td><td className="css-border-collapse-ex1 px-3 py-2">author1</td><td className="css-border-collapse-ex1 p-2">39</td></tr>
                  <tr> <td className="css-border-collapse-ex1 px-3 py-2">BB</td><td className="css-border-collapse-ex1 px-3 py-2">author2</td><td className="css-border-collapse-ex1 p-2">39</td></tr>
                  <tr> <td className="css-border-collapse-ex1 px-3 py-2">CC</td><td className="css-border-collapse-ex1 px-3 py-2">author3</td><td className="css-border-collapse-ex1 p-2">239</td></tr>
               </table>
               <h2> annotate </h2>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2 mb-3">
                  <tr><th className="css-border-collapse-ex1 p-3">Authors</th> <th className="css-border-collapse-ex1 p-3">Number of books</th></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author1</td> <td className="css-border-collapse-ex1 px-3 py-2">2</td></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author2</td> <td className="css-border-collapse-ex1 px-3 py-2">2</td></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author3</td> <td className="css-border-collapse-ex1 px-3 py-2">2</td></tr>
               </table>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2 mb-3">
                  <tr><th className="css-border-collapse-ex1 p-3">Authors</th> <th className="css-border-collapse-ex1 p-3">Sum pages in all books for each author</th></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author1</td> <td className="css-border-collapse-ex1 px-3 py-2">129</td></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author2</td> <td className="css-border-collapse-ex1 px-3 py-2" >68</td></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author3</td> <td className="css-border-collapse-ex1 px-3 py-2">478</td></tr>
               </table>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2">
                  <tr><th className="css-border-collapse-ex1 p-3">Authors</th> <th className="css-border-collapse-ex1 p-3">Avg pages in all books for each author</th></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author1</td> <td className="css-border-collapse-ex1 px-3 py-2">64.5</td></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author2</td> <td className="css-border-collapse-ex1 px-3 py-2">34.0</td></tr>
                  <tr><td className="css-border-collapse-ex1 px-3 py-2">author3</td> <td className="css-border-collapse-ex1 px-3 py-2">239.0</td></tr>
               </table>
            </Result>  
      </article>
      

      <article id="User_Authentication">
            <h2 className="title-h2"> User Authentication </h2>
            <h4><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication" target="_blank"> Toturial </a></h4>

            <h3 className="title-h3" id="User_and_authontication"> 1 -  العلاقة بين فئة المستخدم (class User) والمصادقة (Authentication)  </h3>
            <p className="style_divv">
               في Django، تلعب فئة المستخدم (User class) دورًا مركزيًا في نظام المصادقة (Authentication) . إنه يمثل حساب مستخدم ويوفر طرقًا وسمات مختلفة تتعلق بالمصادقة. يتم تعريف فئة المستخدم في الوحدة النمطية "django.contrib.auth.models".<br/><br/>
              <ul>
               
                  <li className="mb-2"><span className="text-success">User Authentication :</span> توفر فئة المستخدم وظائف مدمجة لمصادقة المستخدم، بما في ذلك أساليب مثل المصادقة <bdi>authenticate()</bdi> و <bdi>login()</bdi> و <bdi>logout()</bdi>. تسمح لك هذه الطرق بمصادقة المستخدمين وتسجيل دخولهم وتسجيل خروجهم من التطبيق الخاص بك. تم تعريف هذه الوظيفة في "Django.contrib.auth"</li>
                  <li className="mb-2">
                     <span className="text-success">User Model :</span> تعمل فئة المستخدم <bdi>User class</bdi> كنموذج المستخدم الافتراضي لنظام مصادقة Django. ويشمل الحقول 
                     <ul>
                        <li><span className="text-warning">username :</span> لا توجد قيمة افتراضية + اسم مستخدم فريد .</li>
                        <li><span className="text-warning">password :</span> لا توجد قيمة افتراضية + كلمة مرور المستخدم . يتم تخزينه كتجزئة للأمن.</li>
                        <li><span className="text-warning">email :</span> سلسلة فارغة ('') بشكل افتراضي. + يجب أن يحتوي على عنوان البريد الإلكتروني للمستخدم.</li>
                        <li><span className="text-warning">first_name : </span> سلسلة فارغة ('') بشكل افتراضي.</li>
                        <li><span className="text-warning">last_name :</span> سلسلة فارغة ('') بشكل افتراضي.</li>
                        <li><span className="text-warning">is_staff :</span> False افتراضيا + قيمة منطقية تشير إلى ما إذا كان المستخدم موظفًا يتمتع بحق الوصول الإداري.</li>
                        <li><span className="text-warning">is_active :</span> True افتراضيا + يشير إلى ما إذا كان حساب المستخدم نشطًا أم لا. يتم استخدامه لتحديد حالة حساب المستخدم. عند ضبط is_active على True، فهذا يعني أن حساب المستخدم نشط ويمكن استخدامه للمصادقة والعمليات الأخرى. من ناحية أخرى، عند ضبط is_active على False، فهذا يشير إلى أن حساب المستخدم غير نشط أو معطل.</li>
                        <li><span className="text-warning">is_superuser :</span> False افتراضيا + يشير إلى ما إذا كان المستخدم لديه كافة ال Permissions.</li>
                        <li><span className="text-warning">date_joined :</span> التاريخ والوقت الحاليين عند إنشاء حساب المستخدم.</li>
                     </ul>
                  </li>
                  <li className="mb-2"><span className="text-success">User Manager :</span> في Django، يكون مدير المستخدم (User Manager) مسؤولاً عن إدارة إنشاء كائنات المستخدم ومعالجتها. يوفر Django نموذج مستخدم افتراضيًا إلى جانب فئة UserManager، والتي تُستخدم لأداء المهام المتعلقة بإدارة المستخدم. يوفر User Manager طرقًا لإنشاء المستخدمين وتعيين كلمات المرور وإدارة سمات المستخدم. كما رأينا في <a href="#createsuperuser">createsuperuser</a></li>
                  <li className="mb-2">
                     <span className="text-success">User Permissions :</span> يتضمن نظام مصادقة Django نظام permissions  مرنًا. بشكل افتراضي، يأتي نموذج المستخدم مع permissions : التالية
                     <ul>
                        <li>add_user</li>
                        <li>change_user</li>
                        <li>delete_user</li>
                     </ul>
                  </li>
                  <li className="mb-2"><span className="text-success">User Relationships :</span> يوفر Django طريقة لإقامة علاقات بين كائنات المستخدم والنماذج الأخرى. العلاقة الأكثر شيوعًا هي علاقة ForeignKey , حيث يمكن أن يحتوي النموذج على مفتاح خارجي لنموذج المستخدم. كما رأينا في <a href="#Relations">Relations</a></li>
               </ul> 
            </p>

            <h3 className="title-h3" id="include_urls_and_files_html"> 2 - تضمين عناوين URL وملفات HTML </h3>
            <h5 className="title-h5"> 1 - project/urls.py </h5>
            <p className="style_divv">
               تُعتبر URL (الروابط) الخاصة بالمصادقة المدمجة في Django مجموعة من أنماط الروابط والواجهات المُعرفة مُسبقًا تم توفيرها من قِبل Django للتعامل مع مهام المصادقة الشائعة للمستخدمين. عندما تقوم بتضمين django.contrib.auth.urls في تكوين الروابط الخاص بمشروعك، يتم إعداد تلك الروابط تلقائيًا لتنفيذ عمليات المصادقة مثل تسجيل الدخول، وتسجيل الخروج، وإعادة تعيين كلمة المرور، وغيرها.<br/><br/>
               تُبسط هذه الميزة عملية تنفيذ مصادقة المستخدم في مشروع Django عن طريق القضاء على الحاجة إلى تحديد كل رابط وواجهة عرض تتعلق بالمصادقة يدويًا. من خلال الاستفادة من هذه الروابط المدمجة، يستطيع المطورون إعداد نظام مصادقة آمن بسرعة دون الحاجة إلى كود مخصص طويل.<br/><br/>
               على النحو الأساسي، إنها وسيلة ملائمة لدمج وظائف مصادقة المستخدمين في مشروع Django بسهولة، متبعين في ذلك أفضل الممارسات ومعايير الأمان التي حددها إطار العمل Django.
            </p>
            <CodeHighlighter code={codes[8].include_urls_and_files_html[0]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <ul> <li>يحتوي هذا المسار (localhost:8000/accounts/) على العديد من المسارات حول المصادقة </li></ul>
            <Result styleAdd="p-0 pb-5" title='Page not found at /accounts/' route="http://localhost:8000/accounts/">
                  <div className="alert alert-warning">
                     <h2>Page not found <small><small><small className="text-secondary">(404)</small></small></small></h2>
                     <b className="ms-3 ps-2">Request Method:</b>	GET <br/>
                     <b className="ms-5 ps-2">Request URL:</b>	http://localhost:8000/accounts/
                  </div>
                  <p className="ps-1 fs-14">
                     Using the URLconf defined in project.urls, Django tried these URL patterns, in this order:
                     <ol className="ms-3 fs-12">
                        <li>accounts/ login/ [name='login']</li>
                        <li>accounts/ logout/ [name='logout']</li>
                        <li>accounts/ password_change/ [name='password_change']</li>
                        <li>accounts/ password_change/done/ [name='password_change_done']</li>
                        <li>accounts/ password_reset/ [name='password_reset']</li>
                        <li>accounts/ password_reset/done/ [name='password_reset_done']</li>
                        <li>accounts/ reset/{"<"}uidb64{">"}/{"<"}token{">"}/ [name='password_reset_confirm']</li>
                        <li>accounts/ reset/done/ [name='password_reset_complete']</li>
                        <li>admin/</li>
                        <li>[name='testing']</li>
                     </ol>
                     The current path, accounts/, didn’t match any of these.
                  </p>
                  <hr />
                  <p className="ms-2 fs-14">You’re seeing this error because you have DEBUG = True in your Django settings file. Change that to False, and Django will display a standard 404 page.</p>
            </Result>

            <ul><li>كل هذا المسار في الحسابات جاهز لاستخدام كل ما تحتاجه هو templates/ </li></ul>
            <h5 className="title-h5">2 - Create templates  </h5>
            <ul>
               <li> يمكنك إنشاء تطبيق باسم accounts وإنشاء templates بداخله وإنشاء مجلد آخر بالاسم <bdi>registration/</bdi> في مجلد <bdi>templates/</bdi> ثم إنشاء كافة الملفات التي تحتاجها بداخله</li>
               <li>أو يمكنك إنشاء مجلد templates/ ويجب أن يكون في الدليل الجذر لمشروعكه</li>
            </ul>
            <CodeHighlighter code={codes[8].include_urls_and_files_html[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
           
            
            <h5 className="title-h5"> Create All Conetnt html file in <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication" target="_blank"> Toturial </a> in <u><i>registration</i></u> folder</h5>
            <p className="fs-5"> After Creating all file </p>
            <img src={images.django202} className="img"/>
            <img src={images.django203} className="img"/> 
         

            <h3 className="title-h3" id="Sign_Up">3 - Sign Up </h3>
            <p className="fs-5"> By default Django give you <b className='text-success'>User</b> models  </p>
            <img src={images.django204} className="img"/> 
            <p className="fs-4"> Django give you build-in class to create User Form by using <b className="text-success">UserCreationForm</b></p>
            <img src={images.django205} className="img"/> 
            <img src={images.django206} className="img"/> 
            <img src={images.django207} className="img"/> 
            <img src={images.django208} className="w-100 mt-2 mb-3"/> 
            <p className="fs-5"> You can use any app to use <b className="text-success">UserCreationForm</b> and you need to create file html content code the handle <b>signUp</b></p>
         
            <h3 className="title-h3" id="Add_fields_to_User_SignUp">4 - Add fields to User Sign Up</h3>
            <h3> create forms file to add fields to User </h3>
            <img src={images.django209} className="w-100 mt-2 mb-3"/> 
            <h3> add login to your views for login when user created </h3>
            <img src={images.django210} className="img"/> 
            <img src={images.django211} className="img"/> 
            <img src={images.django212} className="img"/> 
         
         
            <h3 className="title-h3" id="verificationEmailInSignUp"> 5 - Confirmation Email in Sign Up</h3>
            <img src={images.django231} className="img"/> 
            <img src={images.django232} className="img"/> 
            <img src={images.django233} className="img"/> 
            <img src={images.django234} className="img"/> 
            <img src={images.django235} className="img"/> 
            <img src={images.django236} className="img"/> 
            <p className='fs-5'>On clikc link in email the user create </p>
            <p className="fs-3"> this <b>not</b> the most secure or robust solution for email verification. There are some potential weaknesses and areas for improvement:</p>
            <h3> To save this probleme about secure use Tutorial bellow: </h3>
            <p className="fs-4">
               Instead of create signup function to create registration , use :
               <a href="https://www.javatpoint.com/django-user-registration-with-email-confirmation" target="_blank"> django-user-registration-with-email-confirmation </a>
            </p>
         
            <h3 className="title-h3" id="Add_Social_Login_to_Django"> 6 - Add Social Login to Django</h3>
            <ul>
               <li><a href="https://studygyaan.com/django/how-to-add-social-login-to-django" target="_blank"> Tutorial </a></li>
               <li><a href="https://www.youtube.com/watch?v=E6LxUleoloU" target="_blank"> video Youtube to explain  </a></li>
            </ul>

         
            <h5><ul><li>Facebook Login Django</li></ul></h5>
            <p>Go to <a href="https://developers.facebook.com/">developers.facebook.com/</a> Login with your account and create app </p>
            <img src={images.django237} className="img"/> 
            <img src={images.django238} className="img"/> 
            <img src={images.django239} className="img"/> 
            <img src={images.django240} className="img"/> 
            <img src={images.django241} className="img"/> 
            <img src={images.django242} className="img"/> 
            <img src={images.django243} className="img"/> 
            <img src={images.django244} className="img"/> 
         
         
            <p className='fs-5 mt-3'>
               In <b>settings.py</b> change App ID and App Secret with yours
            </p>
            {/* <div className=''><pre>
            SOCIAL_AUTH_FACEBOOK_KEY = '985292215170699'  # App ID
            SOCIAL_AUTH_FACEBOOK_SECRET = '7b8483ff422109a7c17b3f7a03966bbf'  # App Secret
            </pre></div> */}

            <br/>
            <h5><ul><li>Linkedin Login Django</li></ul></h5>
            <ul>  <li><a href="https://www.youtube.com/watch?v=m5sHDaBwxjc" target="_blank"> video Youtube to explain  </a></li> </ul>
         
            <p>Go to <a href="https://developer.linkedin.com/">https://developer.linkedin.com/</a> Login with your account and create app </p>
            <img src={images.django245} className="img"/>
            <img src={images.django246} className="img"/> 
            <img src={images.django247} className="img"/> 
            <img src={images.django248} className="img"/> 
            <img src={images.django249} className="img"/> 
            <p className='fs-5 mt-3'>
               In <b>settings.py</b> change App ID and App Secret with yours
            </p>
            <div className=''><pre>
            SOCIAL_AUTH_LINKEDIN_OAUTH2_KEY =  = '985292215170699'  # App ID
            SOCIAL_AUTH_LINKEDIN_OAUTH2_SECRET = '7b8483ff422109a7c17b3f7a03966bbf'  # App Secret
            </pre></div>
      </article>
      <article>
            <div className="border-5 mt-5">
            <h1> django Email </h1>
            <br id="send_email"/><br/>
            <h2>Send Email</h2>
            <h3> 1 -  2-Step Verification Your Email </h3>
            <ul>
               <div className="h3"><li><a href="https://www.youtube.com/watch?v=iGPPhzhXBFg" target="_blank"> Youtube </a></li></div>
            </ul>
            <ul className="fs-5"> <li> First go to your email and click <b>Manage your Google Account</b> </li> </ul> 
            <img src={images.django214} className="w-100 mt-2 mb-3"/> 
            <ul className="fs-5"> 
               <li> Click <kbd> Security </kbd> in left </li> 
               <li> Click <kbd>2-Step Verification </kbd></li>
            </ul>
            <img src={images.django215} className="img"/> 
            <img src={images.django216} className="img"/> 
            <img src={images.django217} className="img"/> 
            <img src={images.django218} className="img"/> 
            <img src={images.django219} className="img"/> 
            <img src={images.django220} className="img"/> 
            <img src={images.django221} className="img"/> 
            <ul className="fs-5">
               <li>this code is the password for my account <b>redaredaeskouni@gmail.com</b> you need to copy it </li>
            </ul>
            <img src={images.django222} className="w-100 mt-2 mb-3"/> 
            <h3>  2 - django  Email </h3>
            <p className="fs-4"> In this exemple I use another email <b>redaesskouni@gmail.com</b> </p>
            <img src={images.django213} className="w-100 mt-2 mb-3"/> 
            <div className='h5'> project/settings.py</div>
            <div className=" p-2 fs-5">
               <pre><span style={{color:"#bd7db4"}}>import</span>  django <br/> ..<br/> ..</pre>
            </div>


            <div className=" p-2 fs-5">
               <pre>
            EMAIL_HOST = <span className="o">'smtp.gmail.com'</span>  <span className="text-success"># Replace with the hostname of your email server</span>
            EMAIL_HOST_USER = <span className="o">'redaesskouni@gmail.com'</span>  <span className="text-success"># Replace with your email address</span>
            EMAIL_HOST_PASSWORD = <span className="o">'svytlnnjlsojpdqc'</span>  <span className="text-success"># Replace with your email account password</span>
            EMAIL_PORT = 587 <span className="text-success"># Replace with the port number of your email server</span>
            EMAIL_USE_TLS = <span className="text-primary">True</span>
            EMAIL_BACKEND = <span className="o">'django.core.mail.backends.smtp.EmailBackend'</span></pre>
            </div>
            <img src={images.django223} className="img"/> 
            <img src={images.django224} className="img"/> 
            <img src={images.django225} className="img"/> 
            <p className="text-success fs-4 mt-2"><b>The Email is Sending Success</b></p>
            <img src={images.django226} className="img"/>
            <br id="list_emails"/><br/>
            <h2>List Emails</h2>
            <img src={images.django227} className="img"/> 
            <p className="fs-3"> 
               In the code snippet provided, <b>imap_server.select('INBOX')</b> is used to select the mailbox (folder) from which you want to fetch the emails. The 'INBOX' mailbox is a standard mailbox that represents the primary mailbox or the main folder in an email account.<br/><br/>
               By selecting the 'INBOX' mailbox, you specify that you want to fetch emails from the primary mailbox/folder of the email account. This is typically where the incoming emails are stored by default. 
            </p>
            <img src={images.django229} className="img"/> 
            <img src={images.django228} className="img"/> 
            <img src={images.django230} className="img"/> 

            <br id="UseEmailAsUsername"/><br/>
            <h2> Use Email As User Name </h2>
            <a href="https://www.youtube.com/watch?v=Um-rWZKhL3E"> Youtube </a>
            </div>
      </article>
      <article>
            <div className="border-5 mt-5">
            <br id="django_Pagination"/><br/><br/><br/>
            <h1> django Pagination </h1>
            <ul>
               <div className="h3"><li><a href="https://www.youtube.com/watch?v=2nCftuWRuHE&list=PLtGOJcWqvbqfv9yQelR4HETqU35alUoW6&index=13" target="_blank">Youtube</a></li></div>
               <div className="h3"><li><a href="https://docs.djangoproject.com/en/4.1/topics/pagination/" target="_blank">Toturial</a></li></div>
            </ul>
            <h3>Exemple </h3>
            <div className="alert-primary m-3">name django project = <b>project</b><br/>django app = <b>app</b></div>
            <p>
               <ul><li><b> Create model with name <u>Profile</u> </b></li><li><b> we add in this table 10 rows  </b></li> </ul>
            </p>
            <img src={images.django58} className="img"/>
            <p><ul><li><b> project/app/views.py </b></li></ul></p>
            <img src={images.django59} className="img"/>
            <p><ul><li><b> project/app/templates/home.html </b></li></ul></p>
            <img src={images.django60} className="img"/>
            <p><ul><li><b> Result </b></li></ul></p>
            <img src={images.django61} className="img"/>
            </div>
      </article>
      <article>
            <div className="border-5 m-2">
            <br id="django_Slug"/><br/><br/><br/>
            <h1> django Slug </h1>
            <h2>1 - Why we use slug</h2>
            <p><b>use slug to creaete specific route without space</b></p>
            <h2>2 - create field in models.py class </h2>
            <p><b>to use slug we create field in models.py class in database</b></p>
            <ul>
               <div className="h3"><li><a href="https://www.youtube.com/watch?v=E8-3uuqp19s&list=PLtGOJcWqvbqfv9yQelR4HETqU35alUoW6&index=14" target="_blank">Youtube</a></li></div>
            </ul>
            </div>
      </article>
      <article>
            <br id="ModelForm"/><br/><br/><br/>
            <h1>forms.ModelForm</h1>
            <div>
               <ul><li><b>my startapp in this case named <u><i>app</i></u></b></li></ul>
               <h2>use models Table <small><small>(database)</small></small> to affiche input fields to user and save it </h2>
               <h3> in app/ you need to create file with name <b><u>form.py</u></b>  </h3>
               <ul><li><b>in app/ you need to import model you want to let user push data inside him </b></li></ul>
            </div>
               <div className="  fs-5 p-4 pb-2 rounded">
               <b> app/form.py </b><br/><br/>
               <pre>
            <b>from</b> django <b>import</b> forms   <span className="text-success">#for using forms in django</span>
            <b>from</b> .models <b>import</b> Table_in_model   <span className="text-success">#you need to import table models</span>

            class ApplyForm(forms.ModelForm):  <span className="text-success">#forms for form</span> I have
                class  Meta:     
                    model = Table_in_model  <span className="text-success">#name Mode to connect with database</span>
                    fields = ['column1','column2','column3','column4'] <span className="text-success">#fields must content array with column allowed to push data</span>
                    <span className="text-success">#fields = "__all__"</span>   //to get all column
                </pre>
            </div>
            <h3> in views.py import class name in form.py  </h3>
            <div className="  fs-5 p-4 pb-2 rounded">
            <b> app/views.py </b><br/><br/>
            <pre>
            from django.shortcuts import render
            from .models import Users
            from .form import <b className="text-success fs-3">ApplyForm</b><br/><br/>
            def home(request):
                if request.method == 'POST': <span className="text-success">#if data send</span> 
                    form = <b className="text-success fs-3">ApplyForm(request.POST)</b> <span className="text-success">#if you want to save  file use (request.POST,request.FILES)</span>
                    if form.is_valid():
                        form.save()  
                else:
                    form = <b className="text-success fs-3">ApplyForm()</b><br/>
                content = {"{"}"data": Users.objects.all() , <span className="--o">'form'</span>:form{"}"}
                return render( request , 'home.html' , content )</pre>
            </div>

            <h3> in app/templates/home.html    </h3>
            <div className="  fs-5 p-4 pb-2 rounded">
            <b> app/views.py </b><br/><br/>
            {/* <pre>
            &lt;!DOCTYPE html>
            &lt;html>
               &lt;head>
                  &lt;title></title>
               &lt;/head>
               &lt;body>
                  &lt;form action="#" method="POST">
                        {"{{"}form{"}}"}
                  &lt;/form>
               &lt;/body>
            &lt;/html></pre>
            </div> */}
            <h3>Exemple 1 : </h3>
            <img src={images.django39} className="img"/>
            <img src={images.django40} className="img"/>
            <img src={images.django41} className="img"/>
            <h5>Result</h5>
            <img src={images.django42} className="img"/>
            <hr/>
            <h3>Exemple 2 : </h3>
            <img src={images.django62} className="img"/>
            <img src={images.django63} className="img"/>

            <img src={images.django64} className="img"/>
            <h5>Result</h5>
            <img src={images.django65} className="img"/>
            <hr/>
            <h3>Exemple 3 : </h3>
            <img src={images.django162} className="img"/>
            <img src={images.django163} className="img"/>
            <p className="mt-4"> 
               <ul className="fs-5">
                  <li><b>form.cleaned_data</b> is a dictionary that contains the cleaned and validated data from a submitted form.<br/> 
               The <b>cleaned_data</b> dictionary is available after the form has been successfully validated. <br/>
               The keys in the dictionary correspond to the field names defined in the form, and the values are the cleaned data for each field.</li>
               </ul>
            </p>
         
            <div className="h3">for more info Clikc <a href="https://www.youtube.com/watch?v=E8-3uuqp19s&list=PLtGOJcWqvbqfv9yQelR4HETqU35alUoW6&index=14">Here</a></div>
            <div className="alert-danger mt-3"><b>Note:</b> you can use this file for seend data to email is not private for hundle database is private to hundle form </div>   
            </div>   
      </article>
      <article>
            <br id="Form"/><br/><br/><br/>
            <h1> forms.From </h1>
            <div className="fs-5">
               <b>forms.Form</b>: This is a basic form class provided by Django.<br/> It allows you to define form fields and their validation directly in the form class.<br/> You have full control over the form fields and their behavior.<br/> You need to define each form field manually using the available field classes provided by Django (CharField, EmailField, etc.).<br/> You can perform custom validation and define custom form methods to handle form submission.
            </div>
            <h3>Exemple : </h3>
            <img src={images.django183} className="img"/>
            <img src={images.django184} className="img"/>
            <img src={images.django185} className="img"/>
      </article>
      <article>
            <h1> models filter </h1>
            <ul>
               <li><b> project django {"=>"} project</b></li>
               <li><b> app django {"=>"} app </b></li>
            </ul>
            <br id="models_Objecjs_filter"/><br/><br/>
            <h2> 1 - use objects.filter() </h2>
               <h2><a href="https://www.youtube.com/watch?v=niH01K8fFYQ" target="_blank">Youtube easy vidio</a></h2>

            <br id="filter_from_dataBase_directly"/><br/><br/>
            <h2> 2 - filter from dataBase directly </h2>
            <div> 
                <h2><a href="https://docs.djangoproject.com/en/4.1/topics/db/sql/">Toturial</a></h2>  
            </div>

            <br id="filter_using_Q"/><br/><br/>
            <h2> 3 - filter_using_Q </h2>
            <h3> exemple 1 </h3>
            <div> 
               <p><b><b className="text-danger">Q()</b> : is a Django object that allows you to build complex queries for filtering database records. It provides a way to perform OR operations between different filters.</b></p>
               <img src={images.django104} className="img"/>
            </div>
            <h3> exemple 2 (filter from difrent models class )</h3>
            <div> 
               <p><b>To filter using the <b className="text-danger">Q()</b> object across two related models, you can use the <b className="text-danger">__</b> <b className="text-success">syntax</b> in Django to traverse <b className="text-success">relationships</b>.</b></p>
               <img src={images.django105} className="img"/>
               <div className="  mt-3"><pre>
               from django.db.models import <b className="text-danger">Q</b>

               produits = Produit.objects.filter(<b className="text-danger">Q(</b>name__icontains='phone'<b className="text-danger">)</b> | <b className="text-danger">Q(</b>category<b className="text-success">__</b>name__icontains='electronics'<b className="text-danger">)</b>)</pre>
               </div>
               <img src={images.django106} className="img"/>
            </div>

            <br id="lookup_expr"/><br/>
            <h2>4 - lookup_expr </h2>
            <div className="alert">
               <h3>1 - iexact</h3>
               <div className="mt-2">
                  <p dir="rtl"><b>مطابقة تامة غير حساسة لحالة الأحرف. إذا كانت القيمة المقدمة للمقارنة لا شيء ، فسيتم تفسيرها على أنها SQL NULL</b></p>   
                  <div className="mb-2">
                     SELECT ... WHERE name ILIKE 'beatles blog';<br/>
                     SELECT ... WHERE name IS NULL;
                  </div>
               </div>
               <h3>2 - contains </h3>
               <div className="mt-2">
                  <p dir="rtl"><b>اختبار احتواء حساس لحالة الأحرف</b></p>   
                  <div className="mb-2">
                     SELECT ... WHERE name ILIKE 'beatles blog';<br/>
                     SELECT ... WHERE name IS NULL;

                  </div>
               </div>   
               <h3>3 - gte <small>(greater than or equal to)</small></h3>
               <p> <b className="text-success">__gte</b> is a lookup expression used in Django queryset filtering to specify a "greater than or equal to" comparison between a field and a value. It is used to filter objects where the value of the specified field is greater than or equal to the given value. </p>
               <h3>4 - filter number</h3>
               <img src={images.django107} className="img"/>
               <div className="bg-dark  pb-0">
                  <pre>will return 50 51 ...</pre>
               </div> 
               <h3>5 - filter date </h3>
               <img src={images.django108} className="w-100 mt-3"/>
               <h3>6 - id__in </h3>
               <img src={images.django186} className="w-100 mt-3"/>
            </div> 
      </article>
      <article>
            <div className="border-5 m-2">
               <br id="exercice"/><br/><br/>
               <h1>Exercise</h1>
               <a href="https://www.youtube.com/watch?v=FTUxl5ZCMb8">Youtube Video</a>
               <ul>
                  <li><b> app name is core </b></li>
               </ul>
               <h2>1 - core/models.py</h2>
               <img src={images.django68} className="w-100 mt-3"/>
               <p><b>in core/model we create table in databse name book with fields</b></p>
               <ul>
                  <li className="h5"> <b>class <u>GenereChoices(models.TextChoices):</u> is the best way to create choices in django</b></li>
                  <li className="h5"> <b> to get value of field choices in templets use <kbd><span className="text-primary">get_</span>COLUMN_FIELD_NAME<span className="text-primary">_display</span></kbd> </b> </li>
               </ul>
               <h2>2 - add data to database using django admin.py page</h2>
               <p><b><b>this part for create many book directly in database </b></b></p>
               <img src={images.django70} className="w-100 mt-3"/>
               <p className="alert-danger"><b>when run server book craeted in database but you need to remove this code or every time you run the code the data add in database </b></p>
               <h2>3 - core/form.py  </h2>
               <p><b> craete form class </b></p>
               <img src={images.django72} className="w-100 mt-3"/>
               <h2>4 - core/views  </h2>
               <ul style={{fontSize:"120%"}}>
                  <li><b> we use <kbd>request.GET.get('column_name')</kbd> to get data from user </b></li>
                  <li><b> filter(<span className="text-success">name</span>__icontains=<span className="text-danger">name</span>)</b> :</li>
                  <ol>
                     <li><span className="text-success">name : is name column to filter on it </span> </li>
                     <li><span className="text-danger">name : is data get from user </span> </li>
                  </ol>
               </ul>
               <img src={images.django71} className="w-100 mt-3"/>
               <h2>5- core/temlates/index.html</h2>
               <img src={images.django69} className="w-100 mt-3"/>
            </div>
      </article>
      <article>
            <div className="m-2">
            <br id="Ussing_Class_View"/><br/><br/>
            <h1> Using Class View </h1>
            <ul>
               <li>Project Name is : <b>project_name</b></li>
               <li>app name is : <b>helloapp</b> </li>
            </ul>
            <a href="https://ccbv.co.uk/" target="_blank" className="h3"> https://ccbv.co.uk/ </a>
            <div className="display-5" style={{fontWeight:"900"}}>class-based  views</div>   
            <br id="Push_data_from_urls_directly"/><br/><br/>
            <h2>1 - Push data from urls.py directly without views.py</h2>
            <p><b> to push data directly from <span className="text-success">helloapp/urls.py</span> direct without use <span className="text-danger">helloapp/views.py</span> you need to use: </b></p>
            <div className=" mt-2 pb-0 "/>
            {/* <pre>
            from django.urls import path
            <b>from django.views.generic import TemplateView </b>

            urlpatterns = [
                path(<span className="o">'home/'</span>, <span className="text-success">TemplateView</span>.<span className="g">as_view(</span>
                        <span className="b">template_name</span>=<span className="o">'home.html'</span>, 
                        <span className="b">extra_context</span>={<span className="o">'title'</span>:<span className="o">'Custom Title'</span> }
                     <span className="g">)</span>
                ),
            ]</pre> */}
            <img src={images.django79} className="mt-2 w-100"/>
            <img src={images.django80} className="mt-2 w-100"/>
            </div>
         
            <br id="use_basic_class-based_views"/><br/><br/>
            <h2>2 - use basic class-based views  </h2>
            <img src={images.django86} className="mt-2 w-100" />
            <img src={images.django87} className="mt-2 w-100" />
            <h3> in project_name/helloapp/templates/helloapp/ you need to create html in this path  </h3>
            <img src={images.django88} className="mt-2 w-100" />
            <h3>result</h3>
            <img src={images.django85} className="mt-2 w-100" />
            <h3 className="h4 text-danger"> to get data in temples use </h3>
            <img src={images.django89} className="mt-2 w-100" />
            <h3 className="h4 text-danger"> result  </h3>
            <img src={images.django90} className="mt-2 w-100" />
            <h3 className="h4 text-danger"> or you can use name of html file </h3>
            <img src={images.django91} className="mt-2 w-100" />
            <br id="get_context_data-and-template_name"/><br/><br/>
            <h2>3 - use <b>get_context_data</b> and <b>template_name</b> attribute </h2>
            <img src={images.django82} className="mt-2 w-100" />
            <img src={images.django83} className="mt-2 w-100" />
            <img src={images.django84} className="mt-2 w-100" />
            <img src={images.django81} className="mt-2 w-100" />
            <br id="context_object_name-attribute"/><br/><br/>
            <h2>4 - context_object_name  <small>(attribute)</small> </h2>
            <p><b>
               we use attribute context_object_name to specifies the name of the variable holding queryset in Django's generic views 
            </b></p>
            <img src={images.django92} className="mt-2 w-100" />
            <img src={images.django93} className="mt-2 w-100" />
            <br id="ordering"/><br/><br/>
            <h2>5 - ordering  <small>(attribute)</small> </h2>
            <p><b> we use attribute ordering to order by Specific field if we use - the equal </b></p>
            <img src={images.django94} className="mt-2 w-100" />
            <img src={images.django95} className="mt-2 w-100" />
            <br id="queryset"/><br/><br/>
            <h2>6 - queryset  <small>(attribute)</small> </h2>
            <p><b> we use attribute queryset to Specific data return from database . we can filter on it or </b></p>
            <img src={images.django96} className="mt-2 w-100" />
            <div className="display-5" style={{fontWeight:"900"}}>Form handling with class-based views</div>
            <div className="display-5" style={{fontWeight:"900"}}>Using_mixins_with_class-based_views</div>
            <br id="get_queryset"/><br/><br/>
            <h2>7 - get_queryset  <small>(attribute)</small> </h2>
            <img src={images.django97} className="img"/>
      </article>
      <article>
            <br id="SESSION"/>
            <h1> SESSION DJANGO  </h1>
            <div>
            <img src={images.django152} className="img"/>

            <h3> exemple 1 </h3>
            <img src={images.django148} className="img"/>
            <h3> Result </h3>
            <p className="fs-3"> the number increment each time you call the function and the function activate each reload </p>
            <img src={images.django149} className="img"/>

            <h3> exemple 2 </h3>
            <img src={images.django150} className="img"/>
            <h3> Result </h3>
            <img src={images.django151} className="img"/>

            <h3> exemple 3 </h3>
            <img src={images.django158} className="img"/>
            <h3> Result </h3>
            <img src={images.django159} className="img"/>
            </div>
      </article>
      <article>
      
           <br id="Context_Processors"/><br/>
           <h1> Context Processors  </h1>
           <div>
           <p className="fs-3"> Use context processors to Share data in all template . </p>
           <h2>Exemple </h2>
           <p className="fs-4">
              in this case we create file <b>context_processors.py</b> in app <b>requests_app_test</b>
              and we add to settings      
           </p>
           <div className=" text-black">
           {/* <pre>TEMPLATES = [
           {
           'BACKEND': 'django.template.backends.django.DjangoTemplates',
           'DIRS': ['templates'],
           'APP_DIRS': True,
           'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                    <span className="text-success">#app_name.file_name.function_name</span>
                    <b className="b">'requests_app_test.context_processors.requests_app',</b>
                ],
           },
           },
           ]</pre> */}
           </div>
           </div>
           <p className="fs-4">After that i can use data returned from function_name <small>(requests_app)</small> in any templates in my projects</p>
           <img src={images.django160} className="img"/>
           <p className="fs-4">Know i can use data retrned from <b>requests_app</b> in any templates in my project </p>
           <img src={images.django161} className="img"/>
      </article>
      <article>
            <br id="How_Django_Work"/><br/>
            <h1>  How Django Work </h1>
            <div>
            <h2> create button in work with server   </h2>
            <img src={images.django177} className="img"/>
            <img src={images.django178} className="img"/>
            <h2>  use models to handle data   </h2>
            <h3> 1 - use function creatred in models file in views file</h3>
            <img src={images.django179} className="img"/>
            <img src={images.django180} className="img"/>
            <h3> 2 - use function created in models in templates direct </h3>
            <img src={images.django181} className="img"/>
            <img src={images.django182} className="img"/>
            </div>
      </article>
      <article>
            <br id="ngrok"/><br/>
            <h1>  ngrok </h1>
            <ul>
               <li><a className='fs-4' href="https://ngrok.com/docs/getting-started/" target="_blanck"> use ngrok to securely share project with the world. <small>(Documentation)</small>  </a></li>
            </ul>
      </article>
      <article>
            <div className="m-2">
            <br id="End_project_in_DJANGO"/><br/><br/>
            <h1> End project in DJANGO </h1>
            <h2> DEBUG = False</h2>
            <p>
               <b>
                  when we end our project in development it is not recommended to keep DEBUG set to True in a production environment because 
                  it can expose sensitive information about your application and system to potential attackers. <br/>
               </b>
            </p>
            <div>
               <span className="text-success"> project/settings.py </span>
               <pre>DEBUG = False</pre>
               <div className="alert-danger"><b>CommandError</b>: You must set settings.ALLOWED_HOSTS if DEBUG is False.</div>
            </div>

            </div>
      </article>
   </section>
</main>
   )
}