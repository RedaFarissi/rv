import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter  } from "../../path";

export default function ContextProcessors(){
    return(
    <>
        <h1 className="heading-style"> Django Context Processors</h1>
        <article className="mt-5">
            <p className="style_divv mt-5"> 
                تعد معالجات السياق أداة قوية في <b>Django</b> تسمح لك بمشاركة البيانات المشتركة عبر جميع قوالب <b>(templates)</b> الخاصة بك دون تكرار التعليمات البرمجية في طرق العرض الفردية. يمكن أن يساعد هذا في الحفاظ على الكود الخاص بك جافًا (لا تكرر نفسك) ويسهل صيانته.
            </p>
            <CodeCommand>python manage.py startapp requests_app_test</CodeCommand>
            <CodeHighlighter code={codes[15].Context_Processors[0]} file_name="project / project / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>pip install requests</CodeCommand>
            <CodeHighlighter code={codes[15].Context_Processors[1]} file_name="project / requests_app_test /context_processors.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[15].Context_Processors[2]} file_name="project / app / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[15].Context_Processors[3]} file_name="project / app / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[15].Context_Processors[4]} file_name="project / app / templates / request_products_to_test.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django160} alt="django" className="img" />
            <ul>
                <li>في هذه الحالة نقوم بإنشاء ملف <b>context_processors.py</b> في التطبيق <b>"requests_app_test"</b> ونضيفه إلى الإعدادات</li>
                <li>بعد ذلك يمكنني استخدام البيانات التي تم إرجاعها من <b>(requests_app)</b> في أي قوالب في مشاريعي</li>
                <li>أعلم أنه يمكنني استخدام البيانات المستردة من <b>request_app</b> في أي قوالب في مشروعي</li>
            </ul>
        </article>
    </>
    )
}