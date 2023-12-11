import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter } from "../../path";

export default function Form(){
    return(
    <article id="Form">
        <h1 className="heading-style heading-style-django-color"> Django forms.From</h1> 
        <p className="style_divv mt-5">
            form هي آلية للتعامل مع HTML form على جانب الخادم. يسمح لك بتحديد حقول form وتحديد نوع البيانات المتوقعة والتعامل مع التحقق من الصحة. تعمل Django forms على تبسيط عملية جمع ومعالجة مدخلات المستخدم.
        </p>

        <ul><li>إنشاء تطبيق آخر بالاسم testing </li></ul>
        <CodeCommand>python manage.py startapp testing</CodeCommand>
        <CodeHighlighter code={codes[11].Form[0]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[11].Form[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[11].Form[2]} file_name="project / testing / forms.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[11].Form[3]} file_name="project / testing / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[11].Form[4]} file_name="project / testing / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[11].Form[5]} file_name="project / testing / templates / my_form.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <img src={images.django183} className="img"/>
        <div className="bg-dark alert pb-0">
            <pre>

            [10/Dec/2023 23:12:58] <span className="text-info">"GET /testing/ HTTP/1.1"</span> <span className="text-success">200</span> 1242<br/>
            &nbsp; Name ={">"} Reda Eskouni<br/>
            &nbsp; Email ={">"} redaeskouni@gmail.com<br/>
            &nbsp; Message ={">"} message<br/>
            [10/Dec/2023 23:15:02] <span className="text-info">"POST /testing/ HTTP/1.1"</span> <span className="text-success">200</span> 1301<br/>
            </pre>
        </div>
        <p className="style_divv">
            form.cleaned_data :  هو قاموس يحتوي على البيانات التي تم تنظيفها والتحقق من صحتها من النموذج المقدم.
            يتوفر قاموس البيانات النظيفة بعد التحقق من صحة النموذج بنجاح.
            تتوافق المفاتيح الموجودة في القاموس مع أسماء الحقول المحددة في النموذج، والقيم هي البيانات المنظفة لكل حقل.
        </p>
    </article>
    )
}
