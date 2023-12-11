import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";


export default function UserAuthentication(){
    return(
   <article id="User_Authentication">
      <h1 className="heading-style heading-style-django-color"> Django User Authentication</h1>   
        <h4><a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication" target="_blank"> Toturial </a></h4>
        <h2 className="title-h2" id="User_and_authontication"> 1 -  العلاقة بين فئة المستخدم (class User) والمصادقة (Authentication)  </h2>
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

        <h2 className="title-h2" id="include_urls_and_files_html"> 2 - تضمين عناوين URL وملفات HTML </h2>
        <h3 className="title-h3"> 1 - project/urls.py </h3>
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
        <h3 className="title-h3">2 - Create templates  </h3>
        <ul>
           <li> يمكنك إنشاء تطبيق باسم accounts وإنشاء templates بداخله وإنشاء مجلد آخر بالاسم <bdi>registration/</bdi> في مجلد <bdi>templates/</bdi> ثم إنشاء كافة الملفات التي تحتاجها بداخله</li>
           <li>أو يمكنك إنشاء مجلد templates/ ويجب أن يكون في الدليل الجذر لمشروعكه</li>
        </ul>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[2]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[3]} file_name="project / templates / base.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[4]} file_name="project / templates / registration / login.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[5]} file_name="project / templates / registration / logged_out.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[6]} file_name="project / templates / registration / password_reset_form.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[7]} file_name="project / templates / registration / password_reset_done.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[8]} file_name="project / templates / registration / password_reset_email.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[9]} file_name="project / templates / registration / password_reset_confirm.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].include_urls_and_files_html[10]} file_name="project / templates / registration / password_reset_complete.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
        <img src={images.django202} alt="django"  className="img"/>
        <CodeCommand>python manage.py createsuperuser</CodeCommand>
        <CodeCommand>
        Username (leave blank to use 'surfacebook'): reda <br/>
        Email address: reda@gmail.com <br/>
        paswword: ****<br/>
        Password (again): ****<br/>
        Bypass password validation and create user anyway? [y/N]: y<br/>
        Superuser created successfully.<br/>
        </CodeCommand>
        <img src={images.django203} alt="django"  className="img"/> 
         
        <h2 className="title-h2" id="Sign_Up">3 - Sign Up </h2>
        <p className="style_divv"> 
            في <bdi>Django</bdi> ، UserCreationForm عبارة عن فئة نموذج مضمنة توفرها الوحدة النمطية django.contrib.auth.forms.<br/>
            تم تصميم هذا النموذج لتبسيط عملية إنشاء مستخدم جديد في تطبيق الويب Django. غالبًا ما يتم استخدامه مع نموذج المستخدم الذي توفره الوحدة النمطية django.contrib.auth.models.
         </p>
        <h3 className="title-h3">1 - تحتوي صفحة إدارة Django بشكل افتراضي على خيار إضافة مستخدم</h3>
        <img src={images.django204} alt="django"  className="img"/> 
        <h3 className="title-h3"> 2 - لإنشاء حساب مستخدم خارج صفحة المسؤول استخدم  </h3>
        <CodeCommand>python manage.py startapp handleAccount </CodeCommand>
        <CodeHighlighter code={codes[8].Sign_Up[0]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].Sign_Up[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].Sign_Up[2]} file_name="project / handleAccount /urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].Sign_Up[3]} file_name="project / handleAccount / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].Sign_Up[4]} file_name="project / handleAccount / templates / signup.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].Sign_Up[5]} file_name="project / templates / base.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django207} alt="django" className="img"/> 
        <img src={images.django208} alt="django" className="w-100 mt-2 mb-3"/> 
        <h2 className="title-h2" id="Add_fields_to_User_SignUp">4 - أضف الحقول إلى تسجيل المستخدم </h2>
        <p className="style_divv"> إنشاء ملف forms.py لإضافة حقول إلى المستخدم (User) </p>
        <CodeHighlighter code={codes[8].Add_fields_to_User_SignUp[0]} file_name="project / handleAccount / forms.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].Add_fields_to_User_SignUp[1]} file_name="project / handleAccount / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[8].Add_fields_to_User_SignUp[2]} file_name="project / handleAccount / templates / signup.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django209} className="w-100 mt-2 mb-3"/> 
    </article>
    )
}