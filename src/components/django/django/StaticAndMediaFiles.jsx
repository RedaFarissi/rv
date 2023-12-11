import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function StaticAndMediaFiles(){
    return( 
        <article id="Static_and_Media_files">
            <h1 className="heading-style heading-style-django-color"> Django Static files && Media files</h1> 
            <h2 className="title-h2 mt-5" id="Manage_static_files"> 1 - إدارة الملفات الثابتة (static/)</h2>
            <p className="style_divv">
               في Django، يعتبر مجلد "static" مجلدًا حيث يمكنك تنظيم وتخزين الملفات الثابتة الخاصة بتطبيق الويب الخاص بك. تتضمن هذه الملفات الثابتة موارد مثل الصور وملفات JavaScript وورق الأنماط CSS وموارد أخرى يستخدمها صفحات الويب الخاصة بك. إليك تفصيل للغرض واستخدام مجلد "static" في Django:
            </p>
            <h3 className="title-h3"> 1 - أضف في ملف settings.py </h3>
            <CodeHighlighter code={codes[4].Manage_static_files[0]} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Manage_static_files[1]} file_name="project / settings.py" language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3"> 2 -  أضف في ملف urls.py </h3>
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
         
            <h2 className="title-h2" id="Media_files"> 2 - إدارة ملفات الوسائط (media/)</h2>
            <h3 className="title-h3"> 1 - أضف في ملف settings.py </h3>
            <CodeHighlighter code={codes[4].Media_files[0]}  language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[1]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3"> 2 -  أضف في ملف urls.py </h3>
            <CodeHighlighter code={codes[4].Media_files[2]}  language="python" addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[4].Media_files[3]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3" id="Media_files"> 3 - تثبيت الحزمة Pillow</h3>
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
    )
}