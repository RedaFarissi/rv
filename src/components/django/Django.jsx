import { CodeCommand , CodeHighlighter , Result } from "../path";
import images from "./imagesDjango";
import codes from "../../assests/codes/django/django"

export default function Django(props){

   const arrays = codes.map(e =>{ 
      const keys = Object.keys(e) 
      var keys_map;
      if (keys.includes("title")) { 
        keys_map = keys.map((key) => (
          key === "title" ? <dt className="aside-dl-dt" key={key}><a href={`/django#${e[key]}`}><i className="fa-solid fa-caret-right"></i> {e[key]}</a></dt> : <dd className="aside-dl-dd" key={key}><a href={`/django#${key}`}><i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}</a></dd>
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
      <article>
            <h2 className="title-h2 mt-5" id="Introduction">1 -مقدمة حول Django</h2>
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
                  <li><span className="text-success"><bdi>تثبيت Python :</bdi></span> Django يعتمد على لغة البرمجة Python. قم بتثبيت Python من الموقع الرسمي: <a href="https://www.python.org/downloads/" target="_blanck"> https://www.python.org/downloads/ </a> </li>
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
      <article className="mt-5">
            <h2 className="title-h2" id="virtualenv"> 2- virtualenv .</h2> 
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
      <article>
            <h2 className="title-h2 mt-5"> 3 - المثال الأول </h2>
            <ol>
               <li> أنشاء virtualenv </li>
               <li> تثبيت django  </li>
               <li> إنشاء مشروع django بالاسم project</li>
            </ol>
            <h3 className="title-h3" id="Creation_app_in_project"> 1- إنشاء app helloapp في المشروع .</h3> 
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
            <CodeHighlighter code={codes[2].templates[0]} file_name="project / helloapp / templates / home.html" language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].templates[1]} file_name="project / helloapp / templates / articles.html" language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].templates[2]} file_name="project / helloapp / templates / article.html" language="jsx" number={true} addclassName="mt-3 mb-3" copie={true}/> 
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
            <Result title='home' logo={images.html_logo}  route="http://localhost:8000/helloapp/home/">
               <h1>Home</h1>
            </Result>
            <ul><li>http://localhost:8000/helloapp/articles/</li></ul>
            <Result title='articles' logo={images.html_logo}  route="http://localhost:8000/helloapp/articles/">
               <h1>Articles</h1>
            </Result>
            <ul><li>http://localhost:8000/helloapp/article/1/</li></ul>
            <Result title='DoesNotExist at /helloapp/artic' logo={images.html_logo}  route="http://localhost:8000/helloapp/article/1/">
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
            <ul><li>   اذهب إلى الرابط http://127.0.0.1:8000/admin/ وقم بتسجيل الدخول باستخدام الحساب الذي قمت بإنشائه</li></ul>
            <img src={images.django5} className="w-100 my-2 "/>
            <h3 className="title-h3" id="admin">9 - ملف admin </h3>
            <p className="style_divv">
               ملف admin.py هو ملف في مشروع Django يستخدم لتكوين وتخصيص واجهة الإدارة لتطبيق محدد. يحتوي هذا الملف عادة على إعدادات خاصة بالإدارة التي تسمح للمطور بتحديد كيفية عرض وتحرير البيانات في واجهة الإدارة. يتم تسجيل النماذج (Models) التي يرغب المطور في إدارتها في هذا الملف، ويمكن أيضًا إضافة تخصيصات إضافية مثل تحديد الحقول المعروضة، وتحديد البحث، وتطبيق الفلاتر، وغيرها من الإعدادات التي تجعل عملية الإدارة أكثر سهولة وفعالية
            </p>
            <CodeHighlighter code={codes[2].admin[0]} file_name="project / helloapp / admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <ul> <li> تحديث صفحة : http://127.0.0.1:8000/admin/ </li> </ul>
            <img src={images.django5_5} className="w-100 my-2 "/>
            <ul> <li> انقر على add في Articles وأضاف article  تم اذهب إلى الرابط http://localhost:8000/helloapp/article/1/ </li> </ul>
           













            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


            <div className="border-5 m-2">
          
            <h2 id="create_file_to_avoid_repeat">10 - create layoute or any name file to avoid repeat (mise a jour) </h2>
            <div className="  fs-5 p-4 pb-2 rounded">
         
            {/* <pre className="p-2 mb-2">
            <span style={{color:"green"}}>&lt;!-- helloapp/templates/layoute.html --></span>
         
            &lt;html>
            &lt;head>
               &lt;title> articles &lt;/title>
            &lt;/head>
            &lt;body>
               &lt;header>
                  &lt;a href="&#123;% url 'home' %&#125;">  home &lt;/a>
                  &lt;a href="&#123;% url 'articles' %&#125;">  articles &lt;/a>
               &lt;/header>
                  &#123;% block content %&#125;
                  &#123;% endblock content %&#125;
               </body>
            &lt;/body>
            &lt;/html><br/></pre>
            <h3 className="p-0 m-0 h3 "> => in another file you need to extends file layoute for use</h3>
            <pre className="classname= p-2 mb-2">
            <span style={{color:"green"}}>&lt;!-- templates/articles.html --></span><br/>
            &#123;% extends 'layoute.html' %&#125;<br/>
            &#123;% block content %&#125;
            &lt;h1>Articles: &lt;/h1><br/>
            &lt;ul>
               &#123;% for article in all_articles_list %&#125;
                  &lt;li> &lt;a href="&#123;% url 'article' article.id %&#125;">&#123;&#123; article.title &#125;&#125;&lt;/a> &lt;/li>
               &#123;% endfor %&#125;
            &lt;/ul>
            &#123;% endblock content %&#125;
            </pre> */}
            {/* <pre className=" p-2 mb-2">
            <span style={{color:"green"}}>&lt;!-- templates/article.html --></span><br/>
            &#123;% extends 'layoute.html' %&#125;
            &#123;% block content %&#125;
            &lt;h1>Article: &#123;&#123; article.title &#125;&#125;&lt;/h1>
            &lt;p>&#123;&#123; article.text &#125;&#125;&lt;/p>
            &#123;% endblock content %&#125;
            </pre> */}
            </div>
            </div>
      </article>
      <article>
            <h1> About templates </h1>
            <div>
            <br id="templates_tags"/><br/>
            <h2> templates tags </h2>
            <ul className="fs-5">
               <li> <b>&#123;% if condition %&#125; ... &#123;% endif %&#125;</b>: Conditional statements to display content based on a condition. </li>
               <li> <b>&#123;% for item in list %&#125; ... &#123;% endfor %&#125;</b>: Iterates over a list or queryset and executes the block of code for each item. </li>
               <li> <b>&#123;% url 'url_name' arg1 arg2 %&#125;</b>: Generates a URL based on the provided URL name and arguments. </li>
               <li> <b>&#123;% block block_name %&#125; ... &#123;% endblock %&#125;</b>: Defines a named block that can be overridden in child templates. </li>
               <li> <b>&#123;% include 'template_name.html' %&#125;</b>: Includes the content of another template at that position. </li>
               <li> <b>&#123;% csrf_token %&#125;</b>: Generates a CSRF token for form submission security. </li>
               <li> <b>&#123;% load custom_tags %&#125;</b>: Loads custom template tags from a specified file.  </li>
            </ul>

            <br id="csrf_token"/>
            <h3> 1 - &#123;% csrf_token %&#125; </h3>
            <div className="fs-5">
               By including the <b>&#123;% csrf_token %&#125;</b> tag in your form, you ensure that the form submissions are protected against CSRF attacks. It's a crucial security measure when dealing with user input and form submissions in Django applications.<br/><br/>
               It's essential to include the <b>&#123;% csrf_token %&#125;</b> tag in your forms, especially for POST requests. If you omit it, Django's form handling mechanisms will raise a CSRF verification failed error to prevent potential security risks
            </div>

            <br id="as_p"/><br/>
            <h3>2 - &#123;&#123; key.as_p &#125;&#125;</h3>
            <img src={images.django162} className="img"/>
            <img src={images.django166} className="img"/>
            <div className="fs-5">
               The &#123;&#123; form.as_p &#125;&#125; template tag in Django is used to render a form as a series of paragraphs (&lt;p{">"} elements), with each form field wrapped in its own paragraph.
            </div>

            <br id="load-custom_tags"/><br/>
            <h3>3 - &#123;% load custom_tags %&#125; </h3>
            <img src={images.django164} className="img"/>
            <img src={images.django165} className="img"/>


            <br id="template_filters"/><br/>
            <h2> template filters </h2>
            <ul className="fs-5">
               <li> <b>&#123;&#123; variable|filter &#125;&#125;</b> Applies filters to transform the value of a variable before rendering it. </li>
               <li> <b>&#123;&#123; variable|date:'Y-m-d' &#125;&#125;</b>: Formats a date or time value based on the specified format. </li>
               <li> <b>&#123;&#123; variable|length &#125;&#125;</b>: Returns the length of a string, list, or queryset.</li>
               <li> <b>&#123;&#123; variable|truncatechars:20 &#125;&#125;</b>: Truncates a string to a specified number of characters. </li>
               <li> <b>&#123;&#123; variable|linebreaksbr &#125;&#125;</b>: Converts line breaks to HTML &lt;br{">"} tags. </li>
            </ul>

            <br id="variable-date"/>
            <h3> 1 - &#123;&#123; variable|date:'Y-m-d' &#125;&#125;</h3>
            <img src={images.django167} className="img"/>
            <img src={images.django168} className="img"/>
            <img src={images.django169} className="w-100 my-2 "/>
            <br id="variable-length"/>
            <h3> 2 - &#123;&#123; variable|length &#125;&#125; </h3>
            <img src={images.django170} className="img"/>
            </div>
      </article>
      <article>
            <h1> About admin </h1>
            <br id="list_display"/><br/>
            <h2> list_display </h2>
            <p className="fs-5"> You use the <b>list_editable</b> to see column you want in admin page. </p>
            <img src={images.django173} className="img"/>
            <img src={images.django174} className="img"/>

            <br id="prepopulated_fields"/><br/>
            <h2> prepopulated_fields </h2>
            <p className="fs-5">  You use the <b>prepopulated_fields</b> attribute in admin file to specify fields where the value is automatically set using the value of other fields. </p>
            <img src={images.django171} className="img"/>
            <div className="h3">The slug created automatically </div>
            <img src={images.django172} className="img"/>

            <br id="list_editable"/><br/>
            <h2> list_editable  </h2>
            <div className="fs-5">
               <ul>
                  <li> Any field in <b>list_editable</b> must also be listed in the <b>list_display</b> attribute, since only the fields displayed can be edited. </li>
                  <li> Know you can update value in admin page </li>
               </ul>
            </div>
            <img src={images.django175} className="img"/>
            <img src={images.django176} className="img"/>

            <br id="inlines"/><br/>
            <h2> inlines  </h2>
            <div className="fs-5">
               In Django, inlines are used in the admin interface to handle related models and provide a way to manage them within the context of a parent model. Inlines allow you to display, create, update, and delete related model instances directly from the admin interface of the parent model.<br/><br/>
               The concept of inlines is particularly useful when dealing with one-to-many or many-to-many relationships between models. It helps simplify the management of related data by presenting a convenient interface for editing and associating related objects.<br/><br/>
               Django provides two types of inlines:
               <ul>
                  <li>admin.TabularInline</li>
                  <li>admin.StackedInline</li>
               </ul>
            </div>
            <img src={images.django187} className="img"/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <img src={images.django188} className="img"/> 
            <p className="fs-5"> when you click Save The Author created with related Book </p>
            <img src={images.django189} className="img"/> 
      </article>
      <article>
            <h1> About  models </h1>
            <div>
            <br id="get_absolute_url"/><br/>
            <h2> get_absolute_url() </h2>
            <a href="https://www.youtube.com/watch?v=b42B-xli-v" target="_blank"> youtube </a>
            <div className=" fs-5 p-4 pb-2 rounded">
               <b>get_absolute_url</b> is a method in Django models that returns a URL to access a specific object, allowing for easier linking to that object in templates and views. By defining <b>get_absolute_url</b> in a model, you can generate a URL to access that object without hardcoding the URL in your code. <br/><br/>
               This method is typically used in conjunction with Django's URL routing system to define <b>URL</b> patterns that match the URLs returned by <b>get_absolute_url</b>.
            </div>
            <div className="h2"> Exemple 1</div>
            <h3>models.py</h3>
            <img src={images.django154} className="img"/>
            <h3>urls.py</h3>
            <img src={images.django153} className="img"/>
            <h3>views.py</h3>
            <img src={images.django155} className="img"/>
            <h3> template/index.html </h3>
            <img src={images.django156} className="img"/>
            <h3> template/home_detail.html </h3>
            <img src={images.django157} className="img"/>
            <div className="h2"> Exemple 2</div>
            <h3>urls.py</h3>
            <img src={images.django144} className="img"/>
            <h3>models.py</h3>
            <img src={images.django145} className="img"/>
            <h3>views.py</h3>
            <img src={images.django146} className="img"/>
            <h3> template/category_list.html </h3>
            <img src={images.django147} className="img"/>

            <br id="create_a_database_backup"/><br/>
            <h2>   create a database backup </h2>
            <div className="fs-4">
               Creating a database backup refers to making a copy of the current state of a database.<br/><br/>
               When you create a copy of a database, the new database will contain an exact replica of the original database, including all of its tables, indexes, stored procedures, views, triggers, etc. The data in the new database will be the same as the data in the original database at the time the copy was made.<br/><br/>
               After creating a copy of the database, you can modify the data in the new database without affecting the original database. This can be useful for testing new features or making changes to the database schema without risking damage to the original data.<br/><br/>
            </div>
            <h4>Command Prompt <small>(project/)</small></h4>
            <CodeCommand>python manage.py dumpdata {">"} backup.json</CodeCommand>
            <div className="fs-4 mt-4">running the command <kbd>python manage.py dumpdata {">"} backup.json</kbd> in your Django project directory will create a <b>backup</b> of your entire database, including all the data from all the apps within your project.</div>
            <br id="restore_the_data_from_the_backup"/><br/>
            <h2> restore the data from the backup </h2>
            <CodeCommand>python manage.py loaddata backup.json</CodeCommand>
            <br id="remove_all_from_db_models"/><br/>
            <h2> remove all columns and rows from a specific app in the database </h2>
            <div className="fs-4 mb-4">Run the following command to open the Django shell:</div>
            <CodeCommand>python manage.py shell</CodeCommand>
            <div className="fs-4 mb-4">Inside the shell, import the models of the app you want to clear</div>
            <CodeCommand>{">>>"}from myapp.models import *</CodeCommand>
            <div className="fs-4 mb-4">Run the following commands to delete all rows in the models' tables</div>
            <CodeCommand>{">>>"}MyModelCLASS.objects.all().delete()</CodeCommand>
            <br id="annotate"/><br/>
            <h2>annotate</h2>
            <a href="https://www.youtube.com/watch?v=srs1jz0i73o" className="fs-5"> annotate in 15 min </a>
            <h3>Exemple 1</h3>
            <p className="fs-5">
               In Django, the ORM automatically infers the relationship between models based on the field definitions and the foreign key relationships you've defined in your models.<br/><br/>
               In your Like model, you have defined a foreign key field product which references the Product model. Django uses this relationship to understand the connection between the Like model and the Product model.<br/><br/>
               In my case, the <b>Like</b> model has a <b>ForeignKey</b> field named product that references the <b>Product</b> model. By specifying <b>'like'</b> inside <b>Count()</b> , Django understands that it needs to count the instances of Like related to each Product based on the product foreign key relationship.
               Therefore, Django automatically resolves the relationship between the Product model and the Like model through the foreign key field definition and uses it to count the related likes for each product.
            </p>
            <img src={images.django191} className="img"/>
            <img src={images.django192} className="img"/>
            <img src={images.django193} className="img"/>
            <img src={images.django194} className="img"/>

            <h3>Exemple 2</h3>
            <img src={images.django195} className="img"/>
            <img src={images.django196} className="img"/>
            <img src={images.django197} className="img"/>
            <img src={images.django198} className="img"/>
            <img src={images.django199} className="img"/>
            <img src={images.django200} className="img"/>
            </div>   
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className=" m-2">
               <div className="d-flex justify-content-between align-items-center">
               <h1>TP</h1>
               <a href="./django/InitDjango.rar" download>Download file for Result</a>
               </div>
               <object width="100%" height="900px" type="application/pdf"data="pdf/django/Django-initiation--v4.pdf"></object>
            </div>
      </article>
      <article>  
      
            <h1 className="mt-5"> Model Field Reference </h1>
            <p className="my-3">for more information go <a href="https://docs.djangoproject.com/en/4.1/ref/models/fields/" target="_blank">Here</a></p>
            <p>
               This section introduces the models defined with a field function (a vector as input and a field as output).<br/>
               <div dir="rtl"><small>يقدم هذا القسم النماذج المحددة بوظيفة الحقل (ناقل كمدخل وحقل كمخرج)</small></div>  
               Several types of physical models are available:
               <div dir="rtl"><small> ( تتوفر عدة أنواع من النماذج المادية )</small></div>
            </p>
            <p>
               <b> Django Model Field give you : </b>
               <ul>
                  <li> <b>html widget</b> : the html widget give you design </li>
                  <li> <b>validation</b> : do vlidation to your Field </li>
                  <li> <b>db size</b> : handle database size </li>
               </ul>
            </p>
            <h2 id="function">1 - function</h2>
            <ul>
               <li className="mt-3 fs-3"><b>models.CharFields()</b> :
                  <div className="">
                     <p>CharField is generally used for storing small strings like first name, last name, etc.<br/>
                     The default form widget for this field is <b>TextInput</b>.</p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0"><pre>column_name = models.CharField(max_length = 200,<small className="text-success">**options</small>)</pre></div>
                     max_length: is max length char to use.<br/>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>models.TextField()</b> :
                  <div className="">
                     <p>TextField is generally used for storing big strings <small>(Text)</small><br/>
                        The default form widget for this field is <b>Textarea</b>.</p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0"><pre>column_name = models.TextField(<small className="text-success">**options</small>)</pre></div>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>models.DateTimeField()</b> :
                  <div className="">
                     <p> DateTimeField is generally used for storing  date and this function take two params:<br/>
                     The default form widget for this field is <b>&lt;input type="date"{">"}</b>.
                     </p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0">
                        <pre>models.DateTimeField(auto_now=False <span className="text-success">or</span> auto_now_add=False,<small className="text-success">**options</small>)</pre>
                     </div>
                     <p>
                        by default <b>auto_now</b> and <b>auto_now_add</b> take <b>False</b> like value .<br/>
                        <ol>
                           <li><b>auto_now=True</b> : use this to save Now date in database. </li>
                           <li><b>auto_now_add=True</b> : save last update to date .</li>
                        </ol>
                     </p>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>models.IntegerField()</b> :
                  <div className="">
                     <p>IntegerField is generally used for storing integer <br/>
                        The default form widget for this field is <b>&lt;input type="number"{">"}</b>.</p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0">
                        <pre>column_name = models.IntegerField(default=default_Number)</pre>
                     </div>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>models.DateTimeField()</b> :
                  <div className="">
                     <p> to Create input with type="date" use :</p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0">
                        <pre> column_name = models.DateTimeField() </pre>
                     </div>
                     <p>to make him save date automaticly use : </p>
                     <div className="bg-light mt-2 p-2 pb-0">
                        <pre> column_name = models.DateTimeField(("Date"), auto_now_add = True) </pre>
                     </div>
                     <img src={images.django34} className="img"/>
                     <img src={images.django35} className="img"/>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>models.EmailField()</b> :
                  <div className="">
                     <p> to Create input with type="email" use :</p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0">
                        <pre> column_name = models.EmailField(max_length=Number) </pre>
                     </div>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>models.FileField()</b> :
                  <div className="">
                     <p> to Create input with type="file" use :</p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0">
                        <pre> column_name = models.FileField(upload_to="folder_to_upload_in_media") </pre>
                     </div>
                     <img src={images.django37} className="img"/>
                     <div className="alert-danger"><b>Note:</b> to upload file you need to use <a href="#Serving_files_uploaded_by_a_user_during_development">media</a></div>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>models.BooleanField(default=False||True)</b> :
                  <div className="">
                     <p>  rendered as a checkbox input by default, but can be customized with a widget object.</p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0">
                        <pre> my_boolean_field = models.BooleanField(default=False) </pre>
                     </div>
                     <img src={images.django37} className="img"/>
                     <div className="alert-danger"><b>Note:</b> to upload file you need to use <a href="#Serving_files_uploaded_by_a_user_during_development">media</a></div>
                  </div>
               </li>
            </ul>

            <br/> <h2 id="param">2 - param </h2>
            <ul>
               <li className="mt-3 fs-3"><b>choices</b> :
                  <div className="">
                     <p> 
                        for create choice you need a <b>tuple</b> , the tuple must created outside class.<br/>
                        they’re enforced by model validation and the default form widget will be a <b>select</b> box with these choices instead of the standard text field.<br/>  
                     </p>
                     <div dir="rtl"><small><small>يتم فرضها عن طريق التحقق من صحة النموذج وستكون أداة النموذج الافتراضية هي مربع تحديد مع هذه الاختيارات بدلاً من حقل النص القياسي.</small></small></div>

                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0"><pre>column_name = models.CharField(max_length = 200,<small className="text-success">**options</small>)</pre></div>
                     <img src={images.django6} className="img"/>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>blank</b> :
                  <div className="">
                     <p> 
                        to tell django that column not required use <u>blank=True</u>:<br/>
                        default value is <u>blank=False</u>
                     </p>
                     <div className="text-danger">Syntaxe</div>
                     <div className="bg-light mt-2 p-2 pb-0"><pre>column_name = models.CharField(max_length = 200,<span className="text-success">blank = True</span>)</pre></div>
                     <img src={images.django36} className="img"/>
                  </div>
               </li>
               <li className="mt-3 fs-3"><b>related_name</b> :

               <div className="">
                     <p> 
                        when we use Relations Ship between table in Django , we have just <b>one</b> table determine relation . <b>but</b> you can use the same relationship in the other table using related_name.<br/>
                        by default Django 
                     </p>
                     <h3 className="text-danger">Exemple </h3>
                     <img src={images.django136} className="img"/>
                     <h4 className="text-danger">get all book for author id 1 using <b>shell</b> </h4>
                     <img src={images.django137} className="img"/>
                     <h4 className="text-danger">in real code  </h4>
                     <h5>app/urls.py</h5>
                     <img src={images.django138} className="img"/>
                     <h5>app/views.py</h5>
                     <img src={images.django139} className="img"/>
                     <h5>Result</h5>
                     <img src={images.django140} className="img"/>
                     <div className="fs-2  m-5 text-danger">you don't need to use the related_name parameter in a Django view</div>
                  </div>
               </li>
            </ul>

            <br/> <h2 id="Relations">3 - Relations </h2>
            <p>
               In django Relations between models is Divided into 3 sections we take facebook like exemple :
               <ul>
                  <li className=" m-2 p-3">
                     <b>One to many</b> : like Relations between user and post the usser can create many post ,but post ctraeted by one user .<br/>      
                     to use this Relations in Django you must use
                     <div className="p-2 mt-3 ">
                        column_name = models.ForeignKey(<b className="o">'ClassModelsToRelation'</b>, <span className="g">on_delete</span>=models.<b className="bc">CASCADE</b>)
                     </div>
                  </li>
                  <h3> Foreginkey </h3>
                  <p>
                     <div className="m-2 alert-danger"><b>Note</b>: <b>To use Create Class and use <kbd>makemigrations</kbd> and <kbd>migrate</kbd> after that use <kbd>Foreginkey</kbd></b> </div>
                     <h4>Exemple:</h4>
                     <img src={images.django66_5} className="img"/>
                     <CodeCommand>python manage.py makemigrations</CodeCommand>
                     <CodeCommand>python manage.py migrate</CodeCommand>
                     <img src={images.django66} className="img"/>
                  </p>
                  <li className=" m-2 p-3">
                     <b>Many to many</b> : like Relations between user and groups the usser can create many groups ,
                     and groups can have many user . <br/> 
                     <div className="alert-dark p-2 mt-3 ">
                        ManyToManyField
                     </div>
                  </li>
                  <li className=" m-2 p-3">
                     <b>One to one</b> : like Relations between user and profile the usser can have one profile , 
                     and profile have one user . <br/> 
                     <div className="alert-dark p-2 mt-3 ">

                     </div>
                  </li>
               </ul>
            </p> 
      </article>
      <article>
            <div className="border-5 m-2">
            <br id="Static_files_Media_files"/><br/><br/>
            <h1 className="mt-5"> Static files && Media files  <small>(Version 4.1)</small></h1>
            <div className="alert-dark"><p>In this Chapter my django project is : django_project_test</p>
            <p>In this Chapter my django app is : app</p></div>
            <ul>
            <li><b>static files</b> : is evry thing about Front-end (HTML , CSS , JavaScript , All Templates like Vue.js and React.js and ....  )</li>
            <li><b>media  files</b> : is evry thing about <b>upload</b> </li> 
            </ul>
            <br id="manage_static_files"/><br/>
            <h2> 1 - manage static files</h2>
            <h3> 1 - add in <b>django_project_test/settings.py</b> </h3>
            <div className=" pb-0"><pre>
            STATIC_URL = 'static/'
            STATICFILES_DIRS = [
               BASE_DIR / "static",
               '/var/www/static/',
            ] </pre>
            </div>
            <h4 className="ms-0">Exemple : </h4>
            <img src={images.django7} className="img"/>
            <h3> 2 - add in <b>django_project_test/urls.py</b> </h3>
            <div className=" pb-0"><pre>
            from django.conf import settings
            from django.conf.urls.static import static</pre>
            </div>
            and add this in the same file 
            <div className=" pb-0"><pre> urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)</pre></div>
            <h4 className="ms-0">Exemple : </h4>
            <img src={images.django8} className="img"/>
            <p className="my-2"><b> Create folder with name static in the same path of helloapp like this . </b></p>
            <img src={images.django9} className="img"/>
            <p>Now you can add All File folder and file in static </p>
            <h3> 3 - Get File From static/ folder </h3>
            <p> in static/ folder we put image named <b>img_pc.png</b> </p>
            <p>to Get anithing ffrom static in templates you must use </p>
            <div className=" pb-0"><pre> &#123;% load static %&#125; </pre></div>
            and write syntaxe like this:
            <img src={images.django11} className="img"/>
            <br/>
                  <p className="mt-5">for more Info click <a href="https://docs.djangoproject.com/en/4.1/howto/static-files/" target="_blank"><b>Here</b></a></p>
         
            <h3> 4 - Create templates you can use it in all App in your Project_django </h3>
            <p> to create public templates in all app you must at first to do all common in  <a href="#Static_files_Media_files" style={{textDecoration: "none"}}>Static files && Media files</a> </p>
            <ul>
               <li><b> Create folder with name templates in the same path of helloapp like image bellow</b></li>
               <li className="my-3"> <b>create file witn any name you want in templates/ folder in this exemple the name is <u>base.html</u></b> </li>
               <img src={images.django12} className="img"/>
               <li className="my-3"><b> Add Content to base.html </b></li>
               <img src={images.django13} className="img"/>
               <li className="my-3"><b>add in <b>django_project_test/settings.py</b></b></li>
               <img src={images.django14} className="img"/>
               <div className="h4 my-3"> Now you Can Use File <b><u>base.html</u></b> in Any App you want to create.</div>
               <img src={images.django15} className="img"/>
               <div className="h4 my-3">result</div>
               <img src={images.django16} className="img"/>
            </ul>
            </div>
         
            <div className="border-5 m-2">
            <br id="Serving_files_uploaded_by_a_user_during_development"/><br/>
            <h2 className="mt-5"> 2 - Serving files uploaded by a user during development </h2>
            <h3> 1 - add in <b>django_project_test/settings.py</b> </h3>
            <div className=" pb-0"><pre>
            import os 
            .<br/>  .<br/>
            MEDIA_URL = 'media/' 
            MEDIA_ROOT = os.path.join(BASE_DIR,"media")</pre>
            </div>
            <img src={images.django17} className="img"/>
            <h3> 2 - add in <b>django_project_test/urls.py</b> </h3>
            <div className=" pb-0"><pre> urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)</pre></div>
            <h4 className="ms-0">Exemple : </h4>
            <img src={images.django10} className="img"/>
            <h3> 3 - install Pillow</h3>
            To let user upload file in django you must install <b>Pillow</b> To  install it use : 
            <CodeCommand>python -m pip install Pillow</CodeCommand>
            <b>and</b>
            <CodeCommand>python.exe -m pip install --upgrade pip</CodeCommand>
            <img src={images.django18} className="img"/>
            <b>to Get All package  installed use:</b>
            <CodeCommand>pip freeze</CodeCommand>
            <h3> 4 - use  models.ImageField</h3>
            <p><b>To let admin upload file in database use must use </b></p>
            <div className=" pb-0"><pre> models.ImageField(upload_to='folderNameToCreate/')</pre></div>
            <p>you must use <b>upload_to=</b> to add path for upload file .</p>
            <img src={images.django19} className="img"/>
            <div className="h2 mt-3">Result</div>
            <img src={images.django20} className="img"/>
            <img src={images.django21} className="img"/>
            <h3> 5 - To Get image upload in templates </h3>
            <img src={images.django22} className="img"/>
            <p className="mt-3">
            <b> i.iamge.url</b>:
            <ul>
               <li><b>i</b> : item in for loop</li>
               <li><b>iamge</b> : name of column</li>
               <li><b>url</b> : to get image uploded in database </li>
            </ul>
            </p>
            <img src={images.django23} className="w-100 mt-3"/>
            <img src={images.django24} className="w-100 mb-2 mt-3"/>
            </div>
      </article>
      <article>
            <h1> django user authentication without Rest framework </h1>
            <h4><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication" target="_blank"> Toturial </a></h4>

            <br id="the_relation_between_class_User_and_authontication"/><br/>
            <h2> 1 -  the rolation between class User and authontication  </h2>
            <div className="fs-4"> In Django, the <b>User</b> class plays a central role in the authentication system. It represents a user account and provides various methods and attributes related to authentication. 
               The <b>User</b> class is defined in the <b>'django.contrib.auth.models'</b> module.<br/><br/>
               <ul>
                  <li><b className="fs-2 text-success">User Authentication :</b> The User class provides built-in functionalities for user authentication, including methods like <b>authenticate()</b>, <b>login()</b>, and <b>logout()</b>. These methods allow you to authenticate users, log them in, and log them out of your application. This function is defined in the <b>'django.contrib.auth'</b>  </li>
                  <li>
                     <b className="fs-2 text-success">User Model :</b> The User class serves as the default user model for Django's authentication system. It includes fields 
                     <ol>
                        <li><span className="text-danger">username</span>: No default value. + A unique username for the user.</li>
                        <li><span className="text-danger">password</span>: No default value. + The user's password. It is stored as a hash for security.</li>
                        <li><span className="text-danger">email</span>: Empty string ('') by default.  + Must content the user's email address.</li>
                        <li><span className="text-danger">first_name</span>: Empty string ('') by default. </li>
                        <li><span className="text-danger">last_name</span>: Empty string ('') by default.  </li>
                        <li><span className="text-danger">is_staff</span>: False by default. + A boolean indicating whether the user is a staff member with administrative access.</li>
                        <li><span className="text-danger">is_active</span>: True by default. + indicates whether the user account is active or not. is used to determine the status of a user account. When <b>is_active</b> is set to <b>True</b>, it means that the user account is active and can be used for authentication and other operations. On the other hand, when <b>is_active</b> is set to <b>False</b>, it indicates that the user account is inactive or disabled.</li>
                        <li><span className="text-danger">is_superuser</span>: False by default. + indicating whether the user has all permissions.</li>
                        <li><span className="text-danger">date_joined</span>: The current date and time when the user account is created.</li>
                     </ol>
                  </li>
                  <li><b className="fs-2 text-success">User Manager :</b></li>
                  <li><b className="fs-2 text-success">User Permissions :</b></li>
                  <li><b className="fs-2 text-success">User Relationships :</b></li>
               </ul>
            </div>

            <br id="include_urls_and_file_html"/><br/>
            <h2> 2 - include urls and file html </h2>
            <h3> 1 - project/urls.py </h3>
            <p className="fs-5"> <b>In top of urlpatterns before all apps use : </b></p>
            <div className=" pb-0"><pre>urlpatterns = [
            <b className="text-danger">path('accounts/', include('django.contrib.auth.urls')),</b> <span className="text-success">#accounts path must be in index 0 in list</span>  
            path('admin/', admin.site.urls),
            path('', include('app.urls')),<br/>   ...
            ]</pre></div>
            <p className="fs-5">this route (localhost:8000/accounts/) content many route </p>
            <div className="">
               accounts/ login/ [name='login']
            <br/>accounts/ logout/ [name='logout']
            <br/>accounts/ password_change/ [name='password_change']
            <br/>accounts/ password_change/done/ [name='password_change_done']
            <br/>accounts/ password_reset/ [name='password_reset']
            <br/>accounts/ password_reset/done/ [name='password_reset_done']
            <br/>accounts/ reset/{"<"}uidb64{">"}/{"<"}token{">"}/ [name='password_reset_confirm']
            <br/>accounts/ reset/done/ [name='password_reset_complete']
            </div>
            <p className="fs-5"> All this route in accounts is ready to use all what you need is craete templates </p>
         
            <h3>2 - Create templates  </h3>
            <ul className="fs-4">
               <li> You can startapp accounts and create templates inside it and create another folder with name registration/ in templates folder , then create all file you needed inside him </li>
               <li> Or you can create folder templates/ and it should be in your project root directory like exemple bellow </li>
               <img src={images.django201} className="img"/>
            </ul>
            <h4> Create All Conetnt html file in <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication" target="_blank"> Toturial </a> in <u><i>registration</i></u> folder</h4>
            <p className="fs-5"> After Creating all file </p>
            <img src={images.django202} className="img"/>
            <img src={images.django203} className="img"/> 
         
         
         
         
            <br id="Sign_Up"/><br/>
            <h2>3 - Sign Up </h2>
            <p className="fs-5"> By default Django give you <b className='text-success'>User</b> models  </p>
            <img src={images.django204} className="img"/> 
            <p className="fs-4"> Django give you build-in class to create User Form by using <b className="text-success">UserCreationForm</b></p>
            <img src={images.django205} className="img"/> 
            <img src={images.django206} className="img"/> 
            <img src={images.django207} className="img"/> 
            <img src={images.django208} className="w-100 mt-2 mb-3"/> 
            <p className="fs-5"> You can use any app to use <b className="text-success">UserCreationForm</b> and you need to create file html content code the handle <b>signUp</b></p>
         
            <br id="Add_fields_to_User_SignUp"/><br/>
            <h2>4 - Add fields to User Sign Up</h2>
            <h3> create forms file to add fields to User </h3>
            <img src={images.django209} className="w-100 mt-2 mb-3"/> 
            <h3> add login to your views for login when user created </h3>
            <img src={images.django210} className="img"/> 
            <img src={images.django211} className="img"/> 
            <img src={images.django212} className="img"/> 
         
         
            <br id="verificationEmailInSignUp"/><br/>
            <h2> 5 - Confirmation Email in Sign Up</h2>
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
         
            <br id="Add_Social_Login_to_Django"/><br/>
            <h2> 6 - Add Social Login to Django</h2>
            <ul>
               <li><a href="https://studygyaan.com/django/how-to-add-social-login-to-django" target="_blank"> Tutorial </a></li>
               <li><a href="https://www.youtube.com/watch?v=E6LxUleoloU" target="_blank"> video Youtube to explain  </a></li>
            </ul>

         
            <h3><ul><li>Facebook Login Django</li></ul></h3>
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
            <h3><ul><li>Linkedin Login Django</li></ul></h3>
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
                        &#123;&#123;form&#125;&#125;
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
            <div className="">
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