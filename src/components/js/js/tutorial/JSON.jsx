import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function JSON(){
    const code1 = `{"key" : true}
{"key" : false}` 
    const code2 = `var obj = {name: "Reda", age: 25};
var str = JSON.stringify(obj)`
const code3 = `var arr = [ "Reda", 25];
var str = JSON.stringify(arr)`
const code4 = `var str = '["Reda" , "Eskouni", 25]'
var arr = JSON.parse(str)`

    const codeExemple1= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var id = document.getElementById("h2");
var d = { "F_name":"REDA", "L_name":"Eskouni", "Age" : 25 };
id.innerHTML += d.Age;

id.innerHTML += d['F_name'] + "<br>";
id.innerHTML += d.L_name + "<br>";`
    }
    const codeExemple2= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var id = document.getElementById("h2");

var d = {
    "employees": [
        { "F_name": "Reda", "Age": 25 },
        { "L_name": "Eskouni" },
        { "F_name": "Adil", "L_name": "Kasrona", "Age": 20 },
        { "F_name": "Majda", "L_name": "Barad", "Age": 35 }
    ]
};

id.innerHTML =
  d['employees'][0]['F_name'] + "<br>" +
  d['employees'][1]['F_name'] + "<br>" +
  d['employees'][2]['F_name'] + "<br>";`
    }
    const codeExemple3= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var id = document.getElementById("h2");
var d = '{ "name":["Reda", "Eskouni", 25] }';

id.innerHTML = typeof d;
`
    }
    const codeExemple4= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var id = document.getElementById("h2");
var d = '{ "name":["Reda", "Eskouni", 25] }';

const obj = JSON.parse(d)

id.innerHTML = typeof obj`
    }
    const codeExemple5= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var id = document.getElementById("h2");
var cars = { name: "BMW" , color : "green", module: "2000" }

var str= JSON.stringify(cars)

id.innerHTML = str`
    }
    const codeExemple6= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const id = document.getElementById("h2")

var cars = ["BMW","green", 2000]

var str= JSON.stringify(cars)

id.innerHTML = "typeof str = " + typeof str + "<br/>" + str`
    }
    const codeExemple7= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const id = document.getElementById("h2");
const str = '["Reda", "Eskouni", 25]';
const arr = JSON.parse(str);
id.innerHTML = \`Full name is \${arr[0]} \${arr[1]} and age is \${arr[2]} years\`;`
    }
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript JSON</h1>
    <article className="mt-5">
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
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="JSON" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='JSON' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 25REDA<br/>Eskouni </h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <ul><li>يمكن إستعمال المصفوفات و الكائنات داخل <b>JSON</b></li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="JSON" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='JSON' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Reda<br/> undefined<br/> Adil </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. Data Types</h2>
        <p className="style_divv">
            في JSON ، يجب أن تكون القيم أحد أنواع البيانات التالية:
            <ul dir="ltr" className="m-0"><li> string </li></ul>
            <CodeHighlighter code={`{"key" : "STRING text"}`} language="js" addClass="mt-3 mb-3" copie={true} />
           
            <ul dir="ltr" className="m-0"><li> number </li></ul>
            <CodeHighlighter code={`{"key" : 9}`} language="js" addClass="mt-3 mb-3" copie={true} />
            
            <ul dir="ltr" className="m-0"><li> object (JSON object) </li></ul>
            <CodeHighlighter code={`{"key":{"name":"Reda Eskouni" , "Age":25} }`} language="js" addClass="mt-3 mb-3" copie={true} />
           
            <ul dir="ltr" className="m-0"><li> array </li></ul>
            <CodeHighlighter code={`{"key":["element1","element2","element3"]}`} language="js" addClass="mt-3 mb-3" copie={true} />
            
            <ul dir="ltr" className="m-0"><li> boolean (true/false)</li></ul>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            
            <ul dir="ltr" className="m-0"><li> null </li></ul>
            <CodeHighlighter code={`{"key" : null}`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
    <article>
        <h2 className="title-h2">3.  JSON.parse</h2>
        <p className="style_divv">
            تنسيق <b>JSON</b> مطابق من الناحية التركيبية للكود الخاص بإنشاء كائنات <b>JavaScript</b>.
            بسبب هذا التشابه ، يمكن لبرنامج <b>JavaScript</b> تحويل بيانات <b>JSON</b> بسهولة إلى كائنات <b>JavaScript</b> أصلية.
            الاستخدام الشائع لـ <b>JSON</b> هو قراءة البيانات من خادم الويب ، وعرض البيانات في صفحة ويب.<br/>
            غالب ما ستتعامل مع الصغة <b>JSON</b> مكتوبة على شكل  <b>String</b>
            <CodeHighlighter code={`const obj = JSON.parse(text_JSON);`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 : </div>
        <ul><li>الكائن <small>(object)</small> بصيغة <b>JSON</b> مخزن داخل متغير <b>string</b> .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="JSON" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='JSON' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> string </h2>
        </Result>
        <div className="mital">متال 2: </div>
        <ul><li>ننصح بستعمال الطريقة التالية لمعرفة محتوي الكائن لأنه غالبا ما تكون الأمور صعبة القراءة</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="JSON" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='JSON' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> object </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. <bdi>JSON.stringify</bdi></h2>
        <p className="style_divv">
            الاستخدام الشائع لـ <b>JSON</b> هو تبادل البيانات من / إلى خادم الويب.<br/>
            عند إرسال البيانات إلى خادم ويب ، يجب أن تكون البيانات عبارة عن سلسلة.<br/>
            تحويل كائن <b>JavaScript</b> إلى سلسلة باستخدام <b><bdi>JSON.stringify()</bdi></b>
        </p>
        <h3 className="title-h3">1. stringify Object</h3>
        <p className="style_divv">
            عند إرسال البيانات إلى خادم ويب ، يجب أن تكون البيانات عبارة عن سلسلة.<br/>
            يمكن تحويل كائن <small><small>(Object)</small></small> إلى سلسلة نصية تدعم <b>JSON</b> عبر <bdi><b>Stringify</b></bdi>
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <ul><li> ستكون النتيجة عبارة عن سلسلة تتبع تدوين <b>JSON</b> .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="JSON" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='JSON' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> {"{"}"name":"BMW","color":"green","module":"2000"{"}"} </h2>
        </Result>
        <h3 className="title-h3">2. stringify Array </h3>
        <p className="style_divv">
            من الممكن أيضًا ترميز مصفوفات JavaScript بواسطة الخاصية <b>stringify</b> وتحولها إلى سلسلة <small><small>(string)</small></small> وذالك من أجل إرسالها إلى الخادم .
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <ul><li> ستكون النتيجة عبارة عن سلسلة تتبع تدوين <b>JSON</b> .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="JSON" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='JSON' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> typeof str = string<br/>["BMW","green",2000] </h2>
        </Result>
    </article>
    <article>   
        <h2 className="title-h2">5. JSON Array</h2>
        <p className="style_divv">
            المصفوفات في <b>JSON</b> هي نفسها المصفوفات في <b>JavaScript</b> تقريبًا.<br/>
            في <b>JSON</b> ، يجب أن تكون قيم الصفيف من النوع سلسلة <small><small>(string)</small></small> ، أو رقم <small><small>(number)</small></small> ، أو كائن <small><small>(object)</small></small> ، أو مصفوفة <small><small>(array)</small></small> ، أو منطقية <small><small>(boolean)</small></small> ، أو خالية <small><small>(null)</small></small> .<br/>
            في <b>JavaScript</b> ، يمكن أن تكون قيم الصفيف كل ما سبق ، بالإضافة إلى أي تعبير <b>JavaScript</b> صالح آخر ، بما في ذلك الدوال <small><small>(function)</small></small>  والتواريخ <small><small>(date)</small></small>  وغير المعرفة <small><small>(null)</small></small> .<br/>
            يمكن تحويل المتغير من نوع <b>string JSON</b> يحتوي على مصفوفة إلى مصفوفة بستعمال <b>JSON.parse</b>
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="JSON" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='JSON' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Full name is Reda Eskouni and age is 25 years </h2>
        </Result>
    </article>
</section>
    )
}