import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeHighlighter  } from "../../path";

export default function Session(){
   
    return(
        <article id="Session">
            <h1 className="heading-style"> Django SESSION</h1> 
            <p className="style_divv mt-5">
                لاستخدام <b>"request.session"</b> في إصدارات <b>Django</b> ، تحتاج أولاً إلى تمكين دعم <b>session</b> عن طريق إضافة البرنامج الوسيط <b>"django.contrib.sessions.middleware.SessionMiddleware"</b> إلى إعداد <b>"MIDDLEWARE"</b> في ملف <b>settings.py</b> الخاص بك.<br/>
                بمجرد تمكين دعم <b>session</b>، يمكنك الوصول إلى كائن <b>session</b> من خلال السمة <b>"request.session"</b> في جهازك.<br/><br/>
                لتخزين قيمة في كائن <b>session</b>، يمكنك استخدام بناء الجملة التالي :
                <CodeHighlighter code={`request.session['key'] = value`} language="php" addClass="mt-3 mb-3" copie={true}/>
                للحصول على قيمة من كائن <b>session</b>، يمكنك استخدام بناء الجملة التالي :
                <CodeHighlighter code={`value = request.session.get('key' , 'default_value')`} language="php" addClass="mt-3 mb-3" copie={true}/>
                يمكنك أيضًا حذف قيمة من كائن <b>session</b> باستخدام بناء الجملة التالي:
                <CodeHighlighter code={`del request.session['key']`} language="php" addClass="mt-3 mb-3" copie={true}/>
            </p>
            <CodeHighlighter file_name="project / project / settings.py"  code={codes[14].Session[0]} language="python" number={false} addClass="mt-3 mb-3" copie={true}/>
            <CodeHighlighter file_name="project / your_app / urls.py"  code={codes[14].Session[1]} language="python" number={false} addClass="mt-3 mb-3" copie={true}/>
            <CodeHighlighter file_name="project / your_app / views.py"  code={codes[14].Session[2]} language="python" number={false} addClass="mt-3 mb-3" copie={true}/>
            <ul><li>يزداد الرقم في كل مرة تقوم فيها باستدعاء الوظيفة وتقوم الوظيفة بتشغيل كل إعادة تحميل</li></ul>
            <img src={images.django149} className="img"/>
      </article>
    )
}