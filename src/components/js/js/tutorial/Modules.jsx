import { CodeHighlighter } from "../../../path";

export default function Modules(){

    const code1 = `class Class_name {
    constructor(par1,par2){
        //code JavaScript 
    }
}
function function_name(){
   //code JavaScript 
}
const variable1 = "Hello Reda"
const variable2 = 25 

export default Class_name ;
export {variable1, variable2, function_name} ;`
    const code2 = `export default class Class_name {
    constructor(par1,par2){
        //code JavaScript 
    }
}
export function function_name(){
   //code JavaScript 
}
export const variable1 = "Hello Reda"
export const variable2 = 25 `
    const code3 = `import {variable1 ,variable2 , function_name} from \`./path.js\`  
import default class_name from \`./path.js\` `
    


    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Modules</h1>
    <article>
        <p className="style_divv mt-5">
            تسمح لك وحدات <b>JavaScript</b> النمطية بتقسيم التعليمات البرمجية الخاصة بك إلى ملفات منفصلة.
            هذا يجعل من السهل الحفاظ على قاعدة التعليمات البرمجية.<br/>
            تعتمد وحدات <b>JavaScript</b> النمطية على عبارات <b>import</b> <small><small>(إستورد)</small></small> و <b>export</b> <small><small>(تصدر)</small></small>.<br/>
            عند إستعمال <b>Modules</b> إستخدم السمة <b>type</b> مع القيمة <b>module</b> .
            <CodeHighlighter code={`<script type="module" src="./path.js"> </script>`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. Export</h2>
        <p className="style_divv">
            يمكنك تصدير دالة أو متغير من أي ملف.<br/>
            دعونا ننشئ ملفًا باسم <b>path.js</b> ، ونملأه بالأشياء التي نريد تصديرها. <small><small>(هناك نوعان من الصادرات: مسمى وافتراضي)</small></small><br/>
            <br/><b> النوع الأول :</b>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            <br/><b> النوع التاني :</b>
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. Import</h2>
        <p className="style_divv">
            يمكنك استيراد <small>(import)</small> وحدات نمطية إلى ملف بطريقتين ، بناءً على ما إذا كانت تسمى عمليات تصدير <small>(export)</small> أو عمليات تصدير افتراضية <small>(export default)</small>.<br/>
            يتم إنشاء الصادرات المسماة باستخدام الأقواس المتعرجة <kbd>{ }</kbd> . الصادرات الافتراضية ليست كذلك.<br/><br/>
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
               تعمل الوحدات النمطية فقط مع بروتوكول (بروتوكولات) <b>http</b> أو <b>https</b> . 
        </p>
    </article>
</section>
    )
}