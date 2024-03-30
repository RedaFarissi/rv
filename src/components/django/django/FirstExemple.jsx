import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function FirstExemple(){
   return(
   <>
      <h1 className="heading-style"> Django First Exemple</h1> 
      <article id="First_Exemple">
            <p className="style_divv">
                  <ol className="my-5">
                     <li> أنشاء <b>virtualenv</b> </li>
                     <li> تثبيت <b>django</b>  </li>
                     <li> إنشاء مشروع <b>django</b> بالاسم <b>project</b></li>
                  </ol>
            </p>
      </article>
      <article id="Creation_app_in_project">
            <h2 className="title-h2"> 1- إنشاء app helloapp في المشروع .</h2> 
            <p className="style_divv">
               يتألف مشروع <b>Django</b> عادةً من عدة تطبيقات، ويتم تصميم كل تطبيق ليكون وحدة مستقلة يمكن إعادة استخدامها في مشاريع أخرى.<br/><br/>
            </p>
            <CodeCommand>python manage.py startapp helloapp</CodeCommand>
      </article>
      <article id="settings">
            <h2 className="title-h2"> 2- Setting .</h2> 
            <ul><li>تحتاج إلى إضافة اسم التطبيق إلى <b>INSTALLED_APPS</b> في <b>settings.py</b> :</li></ul>
            <CodeHighlighter code={codes[2].settings[0]} file_name="project / project / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>      
      </article>
      <article id="includes_app_to_urlpatterns">
            <h2 className="title-h2">3 - تضمين helloapp على urlpatterns .</h2> 
            <h3 className="title-h3">متال 1 : </h3>
            <CodeHighlighter code={codes[2].includes_app_to_urlpatterns[0]} file_name="project / project / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <ul>
               <li>الآن كل المسار الذي تم إنشاؤها في <bdi><b>helloapp/urls.py</b></bdi> موجود في : <bdi><b>localhost:8000/helloapp/</b></bdi></li>
               <li> <b>سنستخدم المتال 1 في بقية المشروع </b> </li>
            </ul>
            <h3 className="title-h3">متال 2 : </h3>
            <CodeHighlighter code={codes[2].includes_app_to_urlpatterns[1]} file_name="project / project / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <ul><li>الآن كل المسار الذي تم إنشاؤها في <bdi><b>helloapp/urls.py</b></bdi> موجود في : <bdi><b>localhost:8000/</b></bdi></li></ul>
      </article>
      <article id="templates"> 
            <h2 className="title-h2"> 4 - مجلد templates/</h2>
            <p className="style_divv">
               في <b>Django</b>، يتم استخدام مجلد <b>templates</b> لتخزين ملفات القوالب <b>(templates)</b> الخاصة بتطبيقك. هذا المجلد يتيح لك تنظيم وتخزين أي ملفات <b>HTML</b> أو قوالب <b>Django</b> خاصة بواجهة مستخدم التطبيق.<br/>
               لتفعيل استخدام مجلد <b>templates</b>، يجب أن تتبع الخطوات التالية:<br/>
               <ul>
                  <li className="mb-3"> <span className="text-success">إنشاء المجلد</span> : قم بإنشاء مجلد يسمى <b>templates</b> داخل مجلد التطبيق الخاص بك. إذا كنت تستخدم هيكل تنظيم الملفات التقليدي، يكون المسار كالتالي: <bdi>project/helloapp/templates/</bdi></li>
                  <li className="mb-3"> <span className="text-success">إضافة القوالب</span> : قم بوضع ملفات القوالب الخاصة بك داخل مجلد <b>templates</b>. يمكنك إضافة ملفات <b>HTML</b> أو ملفات قوالب <b>Django</b> مع امتداد <b>.html</b> .</li>
               </ul>
            </p>
            <CodeHighlighter code={codes[2].templates[0]} file_name="project / helloapp / templates / home.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].templates[1]} file_name="project / helloapp / templates / articles.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].templates[2]} file_name="project / helloapp / templates / article.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/> 
      </article>
      <article id="urls">
            <h2 className="title-h2"> 5 - ملف urls </h2>
            <p className="style_divv">
               في Django، يُستخدم ملف urls.py لتحديد كيفية ربط عناوين الـURL بدوال (views) محددة في تطبيقك. يحدد هذا الملف الطريقة التي يمكن للمستخدمين من خلالها الوصول إلى محتوى معين في تطبيقك.
            </p>
            <CodeHighlighter code={codes[2].urls[0]} file_name="project / helloapp / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/> 
      </article>
      <article id="views">
            <h2 className="title-h2"> 6 - ملف views </h2>
            <p className="style_divv">
               في <b>Django</b>، الـ <b>Views</b> تمثل الوحدات التي تدير المنطق الأساسي لتطبيقك. يمكنك تصور الـ <b>View</b> كلمفتاح الوصول إلى البيانات والمنطق الخاص بتطبيقك، وهي المسؤولة عن استعراض البيانات وتحويلها إلى صيغة تظهر للمستخدم في المستعرض.<br/><br/>
               في <b>Django</b>، الـ <b>View</b> هي دالة برمجية تستقبل طلب <b>HTTP</b> وتعيد استجابة. يمكن أن تقوم بالتفاعل مع قاعدة البيانات، والحصول على بيانات، وإرسال بيانات إلى القالب ليتم عرضها، أو تنفيذ أي منطق أخرى ذات صلة.
            </p>
            <CodeHighlighter code={codes[2].views[0]} file_name="project / helloapp / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>   
      </article>
      <article id="models">
            <h2 className="title-h2"> 7 - ملف models</h2>
            <p className="style_divv">
               في <b>Django</b>، ال models هو تمثيل لجدول في قاعدة البيانات. يستخدم ال <b>models</b>  لتحديد هيكل البيانات والعلاقات بينها، ويوفر وسيلة للتفاعل مع قاعدة البيانات بطريقة برمجية.<br/><br/>
               عند بدء مشروع <b>Django</b> جديد أو إجراء تغييرات على النماذج في مشروع موجود، فإنك تحتاج إلى إنشاء عمليات <b>migrations</b>  للتأكد من أن مخطط قاعدة البيانات الخاص بك متزامن مع التعليمات البرمجية الخاصة بك.<br/><br/>
              
               إعداد قاعدة البيانات الأولي <b>(Initial Database Setup)</b> : <br/>
               عند بدء مشروع <b>Django</b> جديد، يتم إنشاء هيكل قاعدة البيانات الأولي عند تشغيل <kbd>python manage.py migrate</kbd>. يُعد هذا إعدادًا أوليًا بناءً على النماذج المعرفة في تطبيقك.<br/><br/>
            
               فيما يلي تفاصيل عن سبب أهمية <kbd>python manage.py migrate</kbd> وما يفعله:<br/>
               <ul>
                  <li> (Database Schema Evolution)  </li>
                  <li>Keeping Database in Sync with Code </li>
                  <li>Version Control for Database Schema </li>
                  <li>Consistency Across Development Teams </li>
                  <li>Initial Database Setup </li>
               </ul>
            </p>
            <h3 className="title-h3"> 1 - إعداد قاعدة البيانات الأولي</h3>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <h3 className="title-h3"> 2 -  إسناد أوامر المرغوب تنفيدها على قواعد البيانات ذاخل ملف models و الذي بدوره ذاخل تطبيق helloapp </h3>
            <CodeHighlighter code={codes[2].models[0]} file_name="project / helloapp / models.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3"> 3 -  عكس الأوامر على قاعدة البيانات <bdi>( يجب إستخدامه في كل مرة قمة بإجراء تعديلات )</bdi></h3>
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
            <CodeHighlighter code={codes[2].models[1]} file_name="project / helloapp / migrations / 0001_initial.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <ul><li> سيتم إنشاء ملف projectظhelloapp/migrations/0001_initial.py تلقائيا . </li></ul>
            <h3 className="title-h3"> 4 - تشغيل خادم التطوير  </h3>
            <CodeCommand>python manage.py runserver</CodeCommand>
            <h3 className="title-h3"> 5 - نتيجة التشغيل  </h3>
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
      </article>
      <article id="createsuperuser">
            <h2 className="title-h2">8 - إنشاء مستخدم فائق  </h2>
            <p className="style_divv">
               إنشاء مستخدم فائق <b>(superuser)</b> في <b>Django</b> يتيح لك الوصول إلى واجهة الإدارة والتحكم الكامل في قاعدة البيانات. يمكنك إنشاء مستخدم فائق باستخدام أمر <b>createsuperuser</b>.
            </p>
            <CodeCommand>python manage.py createsuperuser</CodeCommand>
            <ul><li>   اذهب إلى الرابط <bdi>http://127.0.0.1:8000/admin/</bdi> وقم بتسجيل الدخول باستخدام الحساب الذي قمت بإنشائه</li></ul>
            <img src={images.django5} className="w-100 my-2 "/>
      </article>
      <article id="admin">
            <h2 className="title-h2">9 - ملف admin </h2>
            <p className="style_divv">
               ملف <bdi><b>admin.py</b></bdi> هو ملف في مشروع <b>Django</b> يستخدم لتكوين وتخصيص واجهة الإدارة لتطبيق محدد. يحتوي هذا الملف عادة على إعدادات خاصة بالإدارة التي تسمح للمطور بتحديد كيفية عرض وتحرير البيانات في واجهة الإدارة. يتم تسجيل النماذج <b>(Models)</b> التي يرغب المطور في إدارتها في هذا الملف، ويمكن أيضًا إضافة تخصيصات إضافية مثل تحديد الحقول المعروضة، وتحديد البحث، وتطبيق الفلاتر، وغيرها من الإعدادات التي تجعل عملية الإدارة أكثر سهولة وفعالية
            </p>
            <CodeHighlighter code={codes[2].admin[0]} file_name="project / helloapp / admin.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <ul> <li> تحديث صفحة : <bdi>http://127.0.0.1:8000/admin/</bdi> </li> </ul>
            <img src={images.django5_5} className="w-100 my-2 "/>
            <ul> <li> انقر على add في Articles وأضاف article  تم اذهب إلى الرابط http://localhost:8000/helloapp/article/1/ </li> </ul>
            <h2 className="title-h2" id="layout_file_to_avoid_repeat"> 10 - إنشاء ملف layoute لتجنب التكرار وتعديل الملفات .  </h2>
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[0]} file_name="project / helloapp / templates / layoute.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[1]} file_name="project / helloapp / templates / articles.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[2]} file_name="project / helloapp / templates / article.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[2].layout_file_to_avoid_repeat[3]} file_name="project / helloapp / templates / home.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/> 
      </article>
   </>
   )
}