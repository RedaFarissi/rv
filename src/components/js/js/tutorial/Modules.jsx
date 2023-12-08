export default function Modules(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Modules</h1>
    <article>
        <p className="style_divv mt-5">
            تسمح لك وحدات <b>JavaScript</b> النمطية بتقسيم التعليمات البرمجية الخاصة بك إلى ملفات منفصلة.
            هذا يجعل من السهل الحفاظ على قاعدة التعليمات البرمجية.<br/>
            تعتمد وحدات <b>JavaScript</b> النمطية على عبارات <b>import</b> <small><small>(إستورد)</small></small> و <b>export</b> <small><small>(تصدر)</small></small>.<br/>
            عند إستعمال <b>Modules</b> إستخدم السمة <b>type</b> مع القيمة <b>module</b> .
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:var(--html-color-tags)">&lt;script</span> <span style="color:var(--js-color);">type</span>=<span style="color: orange;">"module"</span> <span style="color:var(--js-color);">src</span>=<span style="color: orange;">"./path.js"</span><span style="color:var(--html-color-tags)">&gt;</span> <span style="color:var(--html-color-tags)">&lt;/script&gt;</span></pre>
            </div> */}
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. Export</h2>
        <p className="style_divv">
            يمكنك تصدير دالة أو متغير من أي ملف.<br/>
            دعونا ننشئ ملفًا باسم <b>path.js</b> ، ونملأه بالأشياء التي نريد تصديرها. <small><small>(هناك نوعان من الصادرات: مسمى وافتراضي)</small></small><br/>
            <br/><b> النوع الأول :</b>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:var(--html-color-tags)">class</span> <span style="color:var(--arr-num-color);">Class_name</span> {
            <span style="color:var(--html-color-tags)">constructor</span>(<span style="color:var(--js-color)">par1</span>,<span style="color:var(--js-color)">par2</span>){
                <span style="color:green">//code JavaScript </span>
            }
        }
        <span style="color:var(--html-color-tags)">function</span> <span style="color:gold">function_name()</span>{
           <span style="color:green">//code JavaScript </span>
        }
        <span style="color:var(--html-color-tags)">const</span> variable1 = <span style="color:orange">"Hello Reda"</span>
        <span style="color:var(--html-color-tags)">const</span> variable2 = <span style="color:var(--arr-num-color)">25</span> 

        <span style="color:var(--violet-color)">export default</span> <span style="color:var(--js-color)">Class_name</span> ;
        <span style="color:var(--violet-color)">export</span> {<span style="color:var(--html-color-tags)">variable1</span>, <span style="color:var(--html-color-tags)">variable2</span>, <span style="color:gold">function_name</span>} ;</pre>
            </div>
            <br/><b style="text-shadow:1px 1px red;"> النوع التاني :</b>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:var(--violet-color)">export default</span> <span style="color:var(--html-color-tags)">class</span> <span style="color:var(--arr-num-color);">Class_name</span> {
            <span style="color:var(--html-color-tags)">constructor</span>(<span style="color:var(--js-color)">par1</span>,<span style="color:var(--js-color)">par2</span>){
                <span style="color:green">//code JavaScript </span>
            }
        }
        <span style="color:var(--violet-color)">export</span> <span style="color:var(--html-color-tags)">function</span> <span style="color:gold">function_name()</span>{
           <span style="color:green">//code JavaScript </span>
        }
        <span style="color:var(--violet-color)">export</span> <span style="color:var(--html-color-tags)">const</span> variable1 = <span style="color:orange">"Hello Reda"</span>
        <span style="color:var(--violet-color)">export</span> <span style="color:var(--html-color-tags)">const</span> variable2 = <span style="color:var(--arr-num-color)">25</span> </pre>
            </div> */}
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. Import</h2>
        <p className="style_divv">
            يمكنك استيراد <small>(import)</small> وحدات نمطية إلى ملف بطريقتين ، بناءً على ما إذا كانت تسمى عمليات تصدير <small>(export)</small> أو عمليات تصدير افتراضية <small>(export default)</small>.<br/>
            يتم إنشاء الصادرات المسماة باستخدام الأقواس المتعرجة <kbd>{ }</kbd> . الصادرات الافتراضية ليست كذلك.<br/><br/>

            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:var(--violet-color)">import</span> {<span style="color:var(--html-color-tags)">variable1</span> ,<span style="color:var(--html-color-tags)">variable2</span> , <span style="color:var(--js-color)">function_name</span>} <span style="color:var(--violet-color)">from</span> <span style="color:orange">`./path.js`</span>  
            <span style="color:var(--violet-color)">import default</span> <span style="color:var(--js-color)">class_name</span> <span style="color:var(--violet-color)">from</span> <span style="color:orange">`./path.js`</span>  </pre>
            </div> */}
        </p>
        <div className="alert alert-warning">
            <b className="h4">ملحوظة</b>:<br/>   
            <p className="mt-2">
               تعمل الوحدات النمطية فقط مع بروتوكول (بروتوكولات) <b>http</b> أو <b>https</b> . 
            </p>
        </div>
    </article>
</section>
    )
}