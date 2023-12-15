import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function JSON(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript JSON</h1>
    <article>
        <h2 className="title-h2">1. ما هو JSON</h2>
        <p className="style_divv">
            <b>JSON</b> هو تنسيق لتخزين البيانات ونقلها.<br/>
            غالبًا ما يتم استخدام <b>JSON</b> عند إرسال البيانات من خادم إلى صفحة ويب <br/>
            يرمز <b>JSON</b> إلى <b>JavaScript Object Notation</b> . <br/>
            <b>JSON</b> هو تنسيق خفيف لتبادل البيانات.<br/>
            <b>تنسيق <b>JSON</b> هو نص فقط. يمكن كتابة التعليمات البرمجية لقراءة وإنشاء بيانات JSON بأي لغة برمجة.</b>
        </p>
        <div className="mital">متال 1 : </div>
        <ul>
            <li> يكتب مفتاح <b>JSON</b> داخل علامة الإقتباس الخاصة ب <small><small>string</small></small> ذالك هو الفرق بينه وبين ال <small><small>Object</small></small></li>
            <li> يمكن إسترجاع المعلومات المخزنة داخل <b>JSON</b> بطريقتين </li>
        </ul>
        <img src={images.js27_JSON} className="img"/>
        <div className="styleee"><h2> REDA<br/>Eskouni<br/>25 </h2></div>
        <div className="mital">متال 2 :  </div>
        <ul><li>يمكن إستعمال المصفوفات و الكائنات داخل <b>JSON</b></li></ul>
        <img src={images.js27_JSON2} className="img"/>
        <div className="styleee"><h2>Reda<br/>Adil<br/>Majda</h2></div>
    </article>
    <article>
        <h2 className="title-h2">2. Data Types</h2>
        <p className="style_divv">
            في JSON ، يجب أن تكون القيم أحد أنواع البيانات التالية:
            <ul dir="ltr"><li> string </li></ul>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
           
            <ul dir="ltr"><li> number </li></ul>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            
            <ul dir="ltr"><li> object (JSON object) </li></ul>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
           
            <ul dir="ltr"><li> array </li></ul>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            
            <ul dir="ltr"><li> boolean (true/false)</li></ul>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            
            <ul dir="ltr"><li> null </li></ul>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
    <article>
        <h2 className="title-h2">3.  JSON.parse</h2>
        <p className="style_divv">
            تنسيق <b>JSON</b> مطابق من الناحية التركيبية للكود الخاص بإنشاء كائنات <b>JavaScript</b>.
            بسبب هذا التشابه ، يمكن لبرنامج <b>JavaScript</b> تحويل بيانات <b>JSON</b> بسهولة إلى كائنات <b>JavaScript</b> أصلية.
            الاستخدام الشائع لـ <b>JSON</b> هو قراءة البيانات من خادم الويب ، وعرض البيانات في صفحة ويب.<br/>
            غالب ما ستتعامل مع الصغة <b>JSON</b> مكتوبة على شكل  <b>String</b>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <ul><li>الكائن <small>(object)</small> بصيغة <b>JSON</b> مخزن داخل متغير <b>string</b> .</li></ul>
        <img src={images.js27_JSON3} className="img"/>
        <div className="styleee"><h2> string </h2></div>
        <div className="mital">متال 2: </div>
        <ul><li>ننصح بستعمال الطريقة التالية لمعرفة محتوي الكائن لأنه غالبا ما تكون الأمور صعبة القراءة</li></ul>
        <img src={images.js27_JSON4} className="img"/>
        <img src={images.js27_JSON4_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">4. <bdi>JSON.stringify</bdi></h2>
        <p className="style_divv">
            الاستخدام الشائع لـ <b>JSON</b> هو تبادل البيانات من / إلى خادم الويب.<br/>
            عند إرسال البيانات إلى خادم ويب ، يجب أن تكون البيانات عبارة عن سلسلة.<br/>
            تحويل كائن <b>JavaScript</b> إلى سلسلة باستخدام <b><bdi>JSON.stringify()</bdi></b>
        </p>
        <h5 className="title-h5">1. stringify Object</h5>
        <p className="style_divv">
            عند إرسال البيانات إلى خادم ويب ، يجب أن تكون البيانات عبارة عن سلسلة.<br/>
            يمكن تحويل كائن <small><small>(Object)</small></small> إلى سلسلة نصية تدعم <b>JSON</b> عبر <bdi><b>Stringify</b></bdi>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <ul><li> ستكون النتيجة عبارة عن سلسلة تتبع تدوين <b>JSON</b> .</li></ul>
        <img src={images.js27_JSON5} className="img"/>
        <div className="styleee">typeof str = string<br/>{"{"}"name":"BMW","color":"green","module":"2000"{"}"}</div>
        <ul><li> المتغير <b>str</b> هو الآن سلسلة ، وجاهزة للإرسال إلى الخادم </li></ul>
        <h5 className="title-h5">2. stringify Array </h5>
        <p className="style_divv">
            من الممكن أيضًا ترميز مصفوفات JavaScript بواسطة الخاصية <b>stringify</b> وتحولها إلى سلسلة <small><small>(string)</small></small> وذالك من أجل إرسالها إلى الخادم .
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <ul><li> ستكون النتيجة عبارة عن سلسلة تتبع تدوين <b>JSON</b> .</li></ul>
        <img src={images.js27_JSON6} className="img"/>
        <div className="styleee">typeof str = string<br/>["BMW","green",2000]</div>
    </article>
    <article>   
        <h2 className="title-h2">5. JSON Array</h2>
        <p className="style_divv">
            المصفوفات في <b>JSON</b> هي نفسها المصفوفات في <b>JavaScript</b> تقريبًا.<br/>
            في <b>JSON</b> ، يجب أن تكون قيم الصفيف من النوع سلسلة <small><small>(string)</small></small> ، أو رقم <small><small>(number)</small></small> ، أو كائن <small><small>(object)</small></small> ، أو مصفوفة <small><small>(array)</small></small> ، أو منطقية <small><small>(boolean)</small></small> ، أو خالية <small><small>(null)</small></small> .<br/>
            في <b>JavaScript</b> ، يمكن أن تكون قيم الصفيف كل ما سبق ، بالإضافة إلى أي تعبير <b>JavaScript</b> صالح آخر ، بما في ذلك الدوال <small><small>(function)</small></small>  والتواريخ <small><small>(date)</small></small>  وغير المعرفة <small><small>(null)</small></small> .<br/>
            يمكن تحويل المتغير من نوع <b>string JSON</b> يحتوي على مصفوفة إلى مصفوفة بستعمال <b>JSON.parse</b>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <img src={images.js27_JSON7} className="img"/>
        <div className="styleee"><h2>full name is RedaEskouni and Age 25 years</h2></div>
    </article>
</section>
    )
}