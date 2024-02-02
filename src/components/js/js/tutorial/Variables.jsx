//import "./Variables.css"
import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
export default function Variables(){
    const code1 = `var variable_name = value ;`;
    const code2 = `const pi =  3.14 ;`;

    const codeExemple1= { 
    code: `     <h1>JavaScript Variables</h1>
    <div id="d"></div>

    <script src="./index.js"></script>`,
    script:`var x = 5;
var y = 6;
var z = x * y;
    
document.getElementById("d").innerHTML = "The value of z is: " + z;`
        }
    const codeExemple2= { 
    code: `     <h1>JavaScript Variables</h1>
    <div id="d2"></div>

    <script src="./index.js"></script>`,
    script:`let x2 = 5
let y2 = 9
let z2 = y2 / x2

document.getElementById("d2").innerHTML = "The value of z2 is: " + z2;`
    }
    const codeExemple3= { 
    code: `    <h1>JavaScript Variables</h1>
    <div id="d3"></div> 

    <script src="./index.js"></script>`,
    script:`x3 = 5
y3 = 9
z3 = y3 - x3
document.getElementById("d3").innerHTML = "The value of z3 is: " + z3;`
    } 
    const codeExemple4= { 
    code: `    <h2>JavaScript Variable const</h2>
    <div id="my-id"></div> 

    <script src="./index.js"></script>`,
    script:`const pi = 3.14;

document.getElementById("my-id").innerHTML = pi * 2 `
    }   
    const codeExemple5= { 
    code: `    <p id="var" style="color:brown;background-color: yellow;">  </p>
    <p id="var2" style="color:orange;background-color: black;"> </p>
    <p id="var3" style="color:brown;"> </p>

    <script src="./index.js"></script>`,
    script:`document.getElementById("var").innerHTML = test;
test = "Reda Eskouni";
document.getElementById("var2").innerHTML = test;
test = "<b>Reda Eskouni</b>";
document.getElementById("var3").innerHTML = test;`
    }
    const codeExemple6= { 
    head:`  
    <style>
        #String {
          font-size: xx-large;
          color: blueviolet;
        }

        #number {
          font-size: xx-large;
          color: green;
        }
    </style>`,
    code: `    <div id="String"></div>
    <div id="number"></div>
    
    <script src="./index.js"></script>`,
    script:`var num = 2000;
let str = "Hello Word";

document.getElementById("number").innerHTML = num;
document.getElementById("String").innerHTML = str;`
    }   
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Variables</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. ما هي Variables </h2>
        <p className="style_divv">
            المتغيرات عبارة عن حاويات لتخزين البيانات (تخزين قيم البيانات).<br/>
            يمكن إختيار إسم المتغير الذي يناسبك على شرط أن  يكون غير محجوز من قبل لغة <b>JavaScript</b> .<br/>
            في لغة <b>JavaScript</b> يجب تعريف المتغير بالكلمة <b>var</b> أو <b>let</b>  أو <b>const</b> .<br/>
            يتم تعرف بالكلمة لمرة واحد أتناء أول إستعمال .
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true}/>
        </p>
        <div className="mital">متال :  </div>
        <ul><li> في هذا المثال ، تعتبر <b>x</b> و <b>y</b> و <b>z</b> متغيرات معرّفة بالكلمة الأساسية <b>var</b>  </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="variables" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='variables' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>JavaScript Variables</h1>
            <p>The value of z is: 30</p>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <ul><li> في هذا المثال ، تعتبر <b>x2</b> و <b>y2</b> و <b>z2</b> متغيرات معرّفة بالكلمة  <b>let</b>  </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="variables" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='variables' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>JavaScript Variables</h1>
            <p>The value of z2 is: 1.8</p>
        </Result>
        <div className="mital"> متال 3 :  </div>
        <ul><li> في هذا المثال ، تعتبر <b>x3</b> و <b>y3</b> و <b>z3</b> متغيرات معرّفة بدون أي الكلمة .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="variables" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='variables' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>JavaScript Variables</h1>
            The value of z3 is: 4
        </Result>
    </article>
    <article>
        <h2  className="title-h2">2.  متى تستخدم متغير  const </h2>
        <p className="style_divv">
            كقاعدة عامة المتغيرات التابة التي لن تحتاج إلى تغييره قم بكتابة  <b>const</b> قبله للإشارة إلى أنه لا يمكن تغيير قيمة ذالك المتغير .<br/>
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true}/>
        </p>

        <div className="mital"> متال :  </div>
        <ul><li> يتم التصريح عن المتغير <b>pi</b> بالكلمة الأساسية <b>const</b>. ويعني ذالك أن هذه قيم ثابتة ولا يمكن تغييرها </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="variables" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='variables' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>JavaScript Variable const</h2>
            <p>6.28</p> 
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3.  متى تستخدم متغير  var و let </h2>
        <p className="style_divv">
            أعلن دائمًا عن متغيرات <b>JavaScript</b> باستخدام <b>var</b> أو <b>let</b> أو <b>const</b> .<br/>
            تُستخدم الكلمة الأساسية <b>var</b> في جميع أكواد <b>JavaScript</b> من 1995 إلى 2015.<br/>
            تمت إضافة الكلمتين الأساسيتين <b>let</b> و <b>const</b> إلى <b>JavaScript</b> في عام 2015.<br/>
            إذا كنت تريد تشغيل التعليمات البرمجية الخاصة بك في متصفح أقدم ، فيجب عليك استخدام <b>var</b> .<br/><br/>
            عند إعلان  عن متغير بإستخدام <b>var</b>  أو <b>let</b> يمكن تغيير قيمة المتغير بحرية .
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="variables" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='variables' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p style={{color: "brown",backgroundColor: "yellow"}}>20  </p>
            <p style={{color:"orange",backgroundColor: "black"}}> Reda Eskouni</p>
            <p style={{color:"brown"}}> <b>Reda Eskouni</b> </p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4.  قوانين المتغيرات  </h2>
        <p className="style_divv">
            يجب تحديد جميع متغيرات <b>JavaScript</b> بأسماء فريدة .<br/>
            تسمى هذه الأسماء الفريدة بالمعرفات.<br/>
            يمكن أن تكون المعرفات أسماء قصيرة (مثل x و y) أو أسماء وصفية أكثر ( age ، sum ، Volume ، ... )  قم بتحديد بنفسك .<br/>
            القواعد العامة لإنشاء أسماء للمتغيرات (المعرفات الفريدة) هي:<br/>
            <ul>
                <li> يمكن أن تحتوي الأسماء على أحرف وأرقام وشرطات سفلية وعلامات الدولار. </li>
                <li> يجب أن تبدأ الأسماء بحرف </li>
                <li> يمكن أن تبدأ الأسماء أيضًا بـ $ و _ (لكننا لن نستخدمها في هذا البرنامج التعليمي) </li>
                <li> الأسماء حساسة لحالة الأحرف (y و Y متغيران مختلفان) . </li>
                <li> لا يمكن استخدام الكلمات المحجوزة (مثل كلمات JavaScript الأساسية) كأسماء </li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">5. أنواع بيانات JavaScript </h2>
        <p className="style_divv">
            يمكن أن تحتوي متغيرات جافا سكريبت على أرقام مثل 100 وقيم نصية مثل "Hello Word".<br/>
            في البرمجة ، تسمى القيم النصية <b>string</b> .<br/>
            يمكن لـ <b>JavaScript</b> التعامل مع العديد من أنواع البيانات ، ولكن في الوقت الحالي ، ما عليك سوى التفكير في الأرقام والنصوص .<br/>
            تتم كتابة المتغيرات النصية داخل علامتي اقتباس مزدوجتين أو مفردة. الأرقام تكتب بدون علامات اقتباس .<br/>
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple6.code} head={codeExemple6.head} language="html" is_html={true} title="variables" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='variables' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div style={{fontSize: "xx-large", color: "blueviolet"}}>Hello Word</div>
            <div style={{fontSize: "xx-large", color: "green"}}>2000</div>
        </Result>
        <ul><li> من الممارسة البرمجية الجيدة الإعلان عن جميع المتغيرات في بداية البرنامج .</li></ul>
    </article> 
</section>
    )
}