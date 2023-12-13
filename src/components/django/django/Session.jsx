import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function Session(){
   
    return(
        <article id="Session">
            <h1 className="heading-style heading-style-django-color"> Django SESSION</h1> 
            <p className="style_divv mt-5">
                لاستخدام "request.session" في إصدارات Django ، تحتاج أولاً إلى تمكين دعم session عن طريق إضافة البرنامج الوسيط "django.contrib.sessions.middleware.SessionMiddleware" إلى إعداد "MIDDLEWARE" في ملف settings.py الخاص بك.<br/>
                بمجرد تمكين دعم session، يمكنك الوصول إلى كائن session من خلال السمة "request.session" في جهازك.<br/><br/>
                لتخزين قيمة في كائن session، يمكنك استخدام بناء الجملة التالي :
                <CodeHighlighter code={`request.session['key'] = value`} language="php" addClass="mt-3 mb-3" copie={true}/>
                للحصول على قيمة من كائن session، يمكنك استخدام بناء الجملة التالي :
                <CodeHighlighter code={`value = request.session.get('key' , 'default_value')`} language="php" addClass="mt-3 mb-3" copie={true}/>
                يمكنك أيضًا حذف قيمة من كائن s_ession باستخدام بناء الجملة التالي:
                <CodeHighlighter code={`del request.session['key']`} language="php" addClass="mt-3 mb-3" copie={true}/>
            </p>
            <CodeHighlighter file_name="project / settings.py"  code={codes[14].Session[0]} language="python" number={true} addClass="mt-3 mb-3" copie={true}/>
            <CodeHighlighter file_name="project / your_app / urls.py"  code={codes[14].Session[1]} language="python" number={true} addClass="mt-3 mb-3" copie={true}/>
            <CodeHighlighter file_name="project / your_app / views.py"  code={codes[14].Session[2]} language="python" number={true} addClass="mt-3 mb-3" copie={true}/>
            <ul><li>يزداد الرقم في كل مرة تقوم فيها باستدعاء الوظيفة وتقوم الوظيفة بتشغيل كل إعادة تحميل</li></ul>
            <img src={images.django149} className="img"/>
      </article>
    )
}