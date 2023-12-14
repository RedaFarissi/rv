import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultConsole} from "../../../path";

export default function Types(){
    const codeExemple1= { 
    code: `     <p id="x"></p>
    
     <script src="./index.js"></script>`,
    script:`var x = 95 + "Reda";

document.getElementById("x").innerHTML =  x ;`
    }
    const codeExemple2= { 
    code: `     <h2 id="a"></h2>
     <h2 id="b"></h2>
    
     <script src="./index.js"></script>`,
    script:`var a = 5 + 5 + "Reda";
var b =  "Reda" + 5 + 5 ;
document.getElementById("a").innerHTML =  "a= " + a ;
document.getElementById("b").innerHTML =  "b= " + b ;`
    }
    const codeExemple3= { 
    code: `     <h2 id="it">  </h2>
    
     <script src="./index.js"></script>`,
    script:`var it = 5 + 5 + " Reda " + 5 + 5 ;
document.getElementById("it").innerHTML =  "it = " + it ;`
    }
    const codeExemple4= { 
    code: `     <h2 id="test1"></h2>
     <h2 id="test2"></h2>

     <script src="./index.js"></script>`,
    script:`var d = 20
document.getElementById("test1").innerHTML = d;
d = "Reda Eskouni"
document.getElementById("test2").innerHTML = d;`
    }
    const codeExemple5= { 
    code: `      <script src="./index.js"></script>`,
    script:`var d = 'Hello';
var d2 = "Hello";
    
console.log(d); // "Hello"
console.log(d2); // "Hello"`
    }
    const codeExemple6= { 
    code: `      <script src="./index.js"></script>`,
    script:`var d = '"Reda" "Eskouni"';
var d2 = "'Reda' 'Eskouni'";
    
console.log(d); 
console.log(d2);`
    }
    const codeExemple7= { 
    code: `      <script src="./index.js"></script>`,
    script:`var num1 = 3.5;
var num2 = 8;
    
console.log(num1); 
console.log(num2);
console.log(num1 * num2);`
    }

    const codeExemple8= { 
    code: `      <h2 id="h2"></h2>

     <script src="./index.js"></script>`,
    script:`let x = 5;
let y = 5;
let z = 6;

document.getElementById("h2").innerHTML = (x == y) + "<br>" + (x == z);`
    }

    const codeExemple9= { 
    code: `      <h2 id="car"> </h2>
    
     <script src="./index.js"></script>`,
    script:`const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("car").innerHTML = cars[0];`
    }

    const codeExemple10= { 
    code: `      <h2 id="myName"> </h2>

     <script src="./index.js"></script>`,
    script:`const person = {
  firstName: "Reda",
  lastName: "Eskouni",
};

document.getElementById("myName").innerHTML = person.firstName + " " + person.lastName;`
    }
    const codeExemple11= { 
    code: `      <h2 id="type1"> </h2>
     <h2 id="type2"> </h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("type1").innerHTML = typeof ""
document.getElementById("type2").innerHTML = typeof 5`
    }
    const codeExemple12= { 
    code: `      <script src="./index.js"></script>`,
    script:`var un;
console.log(un); 

var s = "reda";
console.log(s); 
s = undefined;

console.log(s);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Data Types</h1>
    <article>
        <p className="style_divv mt-5">
            يمكن أن تحتوي متغيرات جافا سكريبت على أنواع مختلفة من البيانات :
            <ul dir="ltr">
                <li><b>numbers</b></li>
                <li><b>strings</b></li>
                <li><b>objects </b></li>
                <li><b>...</b></li>
            </ul> 
            في البرمجة ، تعتبر أنواع البيانات مفهومًا مهمًا.<br/>
            لتكون قادرًا على العمل على المتغيرات ، من المهم أن تعرف شيئًا عن النوع.<br/>
            بدون أنواع البيانات ، لا يمكن للكمبيوتر حل هذا بأمان
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            95Reda     
        </Result>
        <div className="mital"> متال 2 :  </div>
        <ul><li>تقوم <b>JavaScript</b> بتقييم التعبيرات من اليسار إلى اليمين. يمكن أن تؤدي التسلسلات المختلفة إلى نتائج مختلفة</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            a= 10Reda<br/>
            b= Reda55 
        </Result>
        <div className="mital"> متال 3 :  </div>
        <ul><li> في هاذا المتال تم حساب أول رقمين كأرقام تم بعد إيجاد <b>STRING</b> تم إعتبار باقي النص على أنه من النوع <b>STRING</b>.</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            it = 10 Reda 55
        </Result>
    </article>
    <article>
        <h2 className="title-h2">1. JavaScript Dynamic </h2>
        <p className="style_divv">
            أنواع <b>JavaScript</b> ديناميكية .<br/>
            جافا سكريبت لديها أنواع ديناميكية. هذا يعني أنه يمكن استخدام نفس المتغير للاحتفاظ بأنواع بيانات مختلفة
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>20</h2>
            <h2>Reda Eskouni</h2>
        </Result>        
    </article>
    <article>
        <h2 className="title-h2">2. JavaScript String </h2>
        <p className="style_divv">
            السلسلة (أو السلسلة النصية) هي سلسلة من الأحرف مثل "Lorem" أو  'Lorem'.<br/>
            يتم كتابة السلاسل مع اقتباسات. يمكنك استخدام علامات الاقتباس المفردة أو المزدوجة .
        </p>
        <div className="mital"> متال 1 :  </div>
        <ul><li> ليس هناك فرق بين '' أو "" خلال كتابة متغير من نوع <b>string</b></li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='Data Types' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span>Hello</span>
                <span>index.js : 4</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span>Hello</span>
                <span>index.js : 5</span>
            </div>
        </ResultConsole>  
        <div className="mital"> متال 2 :  </div>
        <ul><li> يمكنك استخدام علامات الاقتباس داخل التغير من نوع <b>string</b> ، طالما أنها لا تتطابق مع علامات الاقتباس المحيطة بالمتغير . </li></ul>
        <CodeHighlighter file_name="index.html" code={codeExemple6.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple6.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='Data Types' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span>"Reda" "Eskouni"</span>
                <span>index.js : 4</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span>'Reda' 'Eskouni'</span>
                <span>index.js : 5</span>
            </div>
        </ResultConsole>
    </article>
    <article>
        <h2 className="title-h2">3. JavaScript Numbers</h2>
        <p className="style_divv">
            يحتوي JavaScript على نوع واحد فقط من الأرقام.<br/>
            يمكن كتابة الأرقام بكسور عشرية أو بدونها .
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple7.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple7.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='Data Types' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-success">3.5</span>
                <span>index.js : 4</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-success">8</span>
                <span>index.js : 5</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-success">28</span>
                <span>index.js : 6</span>
            </div>
        </ResultConsole>
    </article>
    <article>
        <h2 className="title-h2">4. JavaScript Booleans</h2>
        <p className="style_divv">
            <b>Booleans</b> وتعني القيم المنطقية . يمكن أن تحتوي القيم المنطقية على قيمتين فقط: <b>true</b> أو <b>false</b>. <br/>
            غالبًا ما تستخدم القيم المنطقية في الاختبار الشرطي.<br/>
            سوف تتعلم المزيد عن النوع <b>Booleans</b> لاحقًا في هذا البرنامج التعليمي .<br/>
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple8.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> true <br/> false </h2>
        </Result>    
    </article>
    <article>
        <h2 className="title-h2">5. JavaScript Arrays</h2>
        <p className="style_divv">
            مصفوفات <b>JavaScript</b> مكتوبة بأقواس مربعة.<br/>
            عناصر المصفوفة مفصولة بفاصلات.<br/>
            يعلن الكود التالي مصفوفة تسمى <b>cars</b> ، تحتوي على ثلاثة عناصر (أسماء سيارات) .<br/>
            سوف تتعلم المزيد عن <b>arrays</b> لاحقًا في هذا البرنامج التعليمي .
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple9.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Saab </h2>
        </Result>   
    </article>
    <article>
        <h2 className="title-h2">6. JavaScript Objects </h2>
        <p className="style_divv">
            تتم كتابة كائنات جافا سكريبت بأقواس معقوفة <b>{}</b>.<br/>
            سوف تتعلم المزيد عن <b> Objects</b> لاحقًا في هذا البرنامج التعليمي.
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple10.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple10.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>   
    </article>
    <article>
        <h2 className="title-h2">7. JavaScript typeof </h2>
        <p className="style_divv">
            يمكنك استخدام عامل تشغيل <b>typeof</b> للعثور على نوع متغير <b>JavaScript</b>.<br/>
            يُرجع عامل التشغيل <b>typeof</b> نوع متغير أو تعبير
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple11.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple11.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Data Types' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>string</h2>
            <h2>number</h2>
        </Result>  
    </article>
    <article>
        <h2 className="title-h2">8. JavaScript undefined </h2>
        <p className="style_divv">
            في <b>JavaScript</b> ، المتغير بدون قيمة له قيمة <b>undefined</b>. النوع أيضًا غير محدد.
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple12.code} language="html" is_html={true} title="Data Types" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple12.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='Data Types' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-success">undefined</span>
                <span>index.js : 2</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-success">reda</span>
                <span>index.js : 5</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-success">undefined</span>
                <span>index.js : 8</span>
            </div>
        </ResultConsole>
    </article>
</section>
    )
}