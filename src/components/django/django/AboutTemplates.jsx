import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function AboutTemplates(){
    return(
        <article id="about_templates" className="t-5">
            <h1 className="heading-style heading-style-django-color"> Django templates</h1> 
            <h2 className="title-h2 mt-5" id="Create_Public_templates"> 1 - إنشاء public templates  </h2>    
            <p className="style_divv">
               قم بإنشاء قوالب عامة يمكنك استخدامها في جميع التطبيقات الموجودة في مشروعك   .<br/><br/>
               لإنشاء قوالب عامة في جميع التطبيقات، يجب عليك أولاً القيام بكل ما هو شائع في الملفات الثابتة وملفات الوسائط
            </p>
            <ul><li> أنشئ ملفًا بأي اسم تريده في <bdi><b>templates/</b></bdi> في هذا المثال، الاسم هو <b>base.html</b></li></ul>
            <img src={images.django12} className="img"/>
            <CodeHighlighter code={codes[5].Create_Public_templates[0]} file_name="project / tempaltes / base.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[5].Create_Public_templates[1]} file_name="project / project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[5].Create_Public_templates[2]} file_name="project / app / tempaltes / list_products.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h2" id="templates_tags">2 -  templates tags </h2>
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
            <h2 className="title-h2" id="csrf_token"> 2 - {"{"}% csrf_token %{"}"} </h2>
            <p className="style_divv">
               من خلال تضمين العلامة {"{"}% csrf_token %{"}"} في النموذج الخاص بك، فإنك تضمن حماية عمليات إرسال النماذج ضد هجمات CSRF. إنه إجراء أمني حاسم عند التعامل مع إدخال المستخدم وعمليات إرسال النماذج في تطبيقات Django.
            </p>
            <h2 className="title-h2" id="template_filters">4 -   template filters </h2>
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
    )
}
