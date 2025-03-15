import codes from "../../../assests/codes/react-js/react"
import { CodeHighlighter , CodeCommand  } from "../../path";



export default function Packages(){
    return(
<article id="Packages">
    <h1 className="heading-style"> React Packages </h1>
    <article id='npm_list'>
        <h2 className="title-h2">1 - npm list  </h2>
        <p className="style_divv">
          يقوم بعرض جميع الحزم المثبتة في مشروع <b>Node.js</b> بشكل تسلسلي يظهر توزيع الحزم.<br/><br/>
          يتم عرض تفاصيل حول كل حزمة، بما في ذلك الإصدار المثبت وإصدارات الحزم الفرعية.  
        </p>
        <CodeCommand>npm list</CodeCommand>
        <p className="style_divv">
          يقوم أيضًا بعرض قائمة بالحزم المثبتة في المشروع، ولكن يقوم بتقليل التفاصيل للحزم الرئيسية فقط دون عرض الحزم الفرعية.<br/><br/>
          يعرض فقط الحزم الرئيسية دون التفصيل في الحزم الفرعية.
        </p>
        <CodeCommand>npm list --depth=0</CodeCommand>
    </article>
    <article id="axios">
        <h2 className="title-h2">2 - مكتبة axios  </h2>
        <p className="style_divv">
          يعتمد <b>Axios</b> على الوعد، مما يمنحك القدرة على الاستفادة من مزامنة <b>JavaScript</b> وانتظار تعليمات برمجية غير متزامنة أكثر قابلية للقراءة.<br/><br/>  
          يسهّل <b>Axios</b> إرسال طلبات <b>HTTP</b> وتلقي الاستجابات، دون الحاجة إلى القلق بشأن التفاصيل ذات المستوى المنخفض حول كيفية إرسال هذه الطلبات ومعالجتها.
        </p>
        <h5 className="title-h5"> 1 - تثبيت المكتبة </h5>
        <CodeCommand>npm install axios</CodeCommand>
        <h5 className="title-h5"> 2 - إستيراد المكتبة </h5>
        <CodeHighlighter code={codes[8].axios[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5"> 3 - إرسال بيانات axios (post) </h5>
        <div className="mital">متال 1 : </div>
        <CodeHighlighter code={codes[8].axios[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter code={codes[8].axios[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <h5 className="title-h5"> 4 - axios.get </h5>
        <div className="mital">متال 1 : </div>
        <CodeHighlighter code={codes[8].axios[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter code={codes[8].axios[4]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <ul><li>إستخدام <b className="text-success">{"{"}withCredentials: true{"}"}</b> في طلب <b>Axios</b> يرتبط بمعالجة مشكلة مشاركة الموارد عبر أصل الموارد <b>(CORS)</b> وإدراج الاعتمادات مثل <b>(cookies)</b> أو <b>(session)</b>  في الطلب.</li></ul>
    </article>
    <article id="react_paypal_js"> 
        <h2 className="title-h2"> 3 - مكتبة react-paypal-js </h2>
        <ul>
          <li>التفاصيل من <a href="https://paypal.github.io/react-paypal-js/?path=/story/getting-started--page" target="_blanck" role="">هنا</a></li>
          <li> <a href="https://developer.paypal.com/dashboard/" target="_blanck" role="" ><bdi>https://developer.paypal.com/dashboard/</bdi></a></li>
        </ul> 
    </article>
    <article id="react_sass">
        <h2 className="title-h2"> 4 - مكتبة sass</h2>
        <h5 className="title-h5">1 - تثبيت المكتبة </h5>
        <CodeCommand>npm install sass</CodeCommand>
        <h5 className="title-h5"> 2 - إستيراد ملف sass ذاخل component </h5>
        <CodeHighlighter code={codes[8].react_sass[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    </article>
    <article id="Router">
        <h2 className="title-h2">5 - مكتبة Router  </h2>
        <p className="style_divv">
          مكتبة <b>React Router</b> هي مكتبة تستخدم في تطبيقات <b>React</b> لإدارة التنقل وتحديث عناوين الصفحات بطريقة ديناميكية وبدون إعادة تحميل الصفحة. يتمثل هدفها الرئيسي في توفير تجربة تصفح سلسة داخل تطبيق <b>React</b> دون الحاجة إلى تحميل صفحات جديدة من الخادم.
        </p>
        <h5 className="title-h5">1 - تثبيت المكتبة </h5>
        <ul><li><small>الإصدار الأخير</small></li></ul>
        <CodeCommand>npm install react-router-dom@latest</CodeCommand>
        <ul><li><small>نسخة محددة</small></li></ul>
        <CodeCommand>npm install react-router-dom@18.2.0</CodeCommand>
        <h5 className="title-h5">2 - الغاء تثبيت المكتبة </h5>
        <CodeCommand>npm uninstall react-router-dom</CodeCommand>
        <h5 className="title-h5">3 - إستخدام المكتبة </h5>
        <CodeHighlighter code={codes[8].Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    </article>
    <article id="useNavigate_Router">
        <h2 className="title-h2">6 - useNavigate </h2>
        <div>
          <p className="style_divv">
            <b>useNavigate</b> عبارة عن  <b>(React Hook)</b> توفره مكتبة <b>React Router</b> والذي يمكن استخدامه للتنقل برمجيًا بين الصفحات أو المسارات المختلفة في تطبيق <b>React</b>.
            <CodeHighlighter code={codes[8].useNavigate_Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
          </p>
        </div>
    </article>
    <article id="useParams_Router">
        <h2 className="title-h2">7- useParams </h2>
        <p className="style_divv">
            <b>useParams</b> عبارة عن  <b>(React Hook)</b>  توفره مكتبة <b>React Router</b> الذي يستخرج معلمات المسار من عنوان <b>URL</b>، مما يوفر الوصول إلى القيم الديناميكية مثل الارتباطات الثابتة أو المعرفات في المكونات.
          <CodeCommand>npm install react-router-dom</CodeCommand>
        </p>
        <ul><li>نستخدم <bdi>(App Component)</bdi> فقط لإنشاء المسار وإخباره أن المسار يحتاج إلى معلمة باسم محدد</li></ul>
        <CodeHighlighter code={codes[8].useParams_Router[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <ul><li> في بيانات محتوى المكون، نقوم بإنشاء رابط للانتقال إلى المسار المحدد في التطبيق وتحديد المعلمة</li></ul>
        <CodeHighlighter code={codes[8].useParams_Router[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <ul><li> في تفاصيل المكون أحتاج فقط إلى استخدام <kbd>useParams</kbd> للحصول على parameter واستخدامها.  </li></ul>
        <CodeHighlighter code={codes[8].useParams_Router[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    </article>
    <article id='react_syntax_highlighter'>
        <h2 className="title-h2"> 8 - مكتبة react-syntax-highlighter </h2>
        <p className="style_divv">
            <b>react-syntax-highlighter</b> هو مكتبة <b>React</b> تُستخدم لتحسين تظليل وتلوين رموز المصدر <b>(syntax highlighting)</b> في تطبيقات <b>React</b>. يعتبر ذلك مفيدًا عند عرض قطعة من الشيفرة المصدرية في واجهة المستخدم لتحسين قراءة الشيفرة.
        </p>
        <h5 className="title-h5">1 - تثبيت المكتبة </h5>
        <CodeCommand>npm install react-syntax-highlighter</CodeCommand>
        <h5 className="title-h5"> 2 - إستخدام  المكتبة </h5>
        <CodeHighlighter code={codes[8].react_syntax_highlighter[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <h5 className="title-h5"> 3 - إستخدام  ميزات إضافية </h5>
        <CodeHighlighter code={codes[8].react_syntax_highlighter[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <h5 className="title-h5"> 4 - الحصول على جميع التصاميم الممكنة في المكتبةالخاصة بي </h5>
        <CodeCommand>ls node_modules/react-syntax-highlighter/dist/esm/styles/prism</CodeCommand>
    </article>
</article>
    )
}