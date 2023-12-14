import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultConsole} from "../../../path";

export default function String(){
    const codeExemple1= { 
    code: `       <script src="./index.js"></script>`,
    script:`let text = "abcd"
let length = text.length
console.log("text length = " + length)`
    }
    const codeExemple2= { 
    code: `      <script src="./index.js"></script>`,
    script:`console.log("Name : "reda"");`
    }
    const codeExemple3= { 
    code: `     <script src="./index.js"></script>`,
    script:`console.log("Name : \\"reda\\"");`
    }
    const codeExemple4= { 
    code: `     <h2 id="test">  </h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("test").innerHTML = "text length \\f Adil";`
    }
    const codeExemple5= { 
    code: `     <h2 id="b"></h2>
    
     <script src="./index.js"></script>`,
    script:`let x = "Reda"
let y = new String('Reda')

document.getElementById("b").innerHTML = (x == y);`
    }
    const codeExemple6= { 
  code: `     <h2 id="name"></h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("name").innerHTML = new String('Reda');`
    }
    const codeExemple7= { 
    code: `      <h2 id="heading"></h2>
    
     <script src="./index.js"></script>`,
    script:`let string_var = "Apple, Banana, Kiwi";
let part = string_var.slice(7, 13);

document.getElementById("heading").innerHTML = part;`
    }
    const codeExemple8= { 
    code: `     <h2 id="heading"></h2>
    
     <script src="./index.js"></script>`,
    script:`let string_var = "Apple, Banana, Kiwi";
let part = string_var.slice(-12, -6);
document.getElementById("heading").innerHTML = part;`
    }
    const codeExemple9= { 
    code: `     <h2 id="heading"></h2>
    
     <script src="./index.js"></script>`,
    script:`let string_var = "Apple, Banana, Kiwi";
let part = string_var.substring(15, 19);
document.getElementById("heading").innerHTML = part;`
    }
    const codeExemple10= { 
    code: `     <h2 id="heading"></h2>
    
     <script src="./index.js"></script>`,
    script:`let string_var = "Apple, Banana, Kiwi";
let part = string_var.substr(7, 2);
document.getElementById("heading").innerHTML = part;`
    }
    const codeExemple11= { 
    code: `     <h2 id="heading"></h2>
    
     <script src="./index.js"></script>`,
    script:`let string_var = "Apple, Banana, Kiwi";
let part = string_var.substr(-4);
document.getElementById("heading").innerHTML = part;`
    }
    const codeExemple12= { 
    code: `     <h2 id="visit"> Visit Me on Facebook  </h2>  
    
     <script src="./index.js"></script>`,
    script:`let text = document.getElementById("visit").innerHTML;
document.getElementById("visit").innerHTML = text.replace("Facebook", "My Web");`
    }

    const codeExemple13= { 
    code: `       <h2 id="heading-upper"></h2>
     <h2 id="heading-lower"></h2>
    
     <script src="./index.js"></script>`,
    script:`let string_var = "Hello Word";
document.getElementById("heading-upper").innerHTML = string_var.toUpperCase();
document.getElementById("heading-lower").innerHTML = string_var.toLowerCase();`
    }
    const codeExemple14= { 
    code: `     <h2 id="visit"> Visit Me on Facebook  </h2>
    
     <script src="./index.js"></script>`,
    script:`let text = "Reda";
let text2 = "Eskouni";
let text3 = text.concat(" ", text2);

document.getElementById("visit").innerHTML = text3`
    }
    const codeExemple15= { 
    code: `     <script src="./index.js"></script>`,
    script:`let text1 = "    Reda    ";
let text2 = text1.trim();
console.log(text1)
console.log(text2)`
    }
    const codeExemple16= { 
    code: `       <h2 id="padded1"> padded :  </h2>
     <h2 id="padded2"> padded :  </h2>
    
     <script src="./index.js"></script>`,
    script:`let text1 = "5";
let text2 = "Reda";

let padded1 = text1.padStart(6,0);
let padded2 = text2.padStart(6,0);

document.getElementById("padded1").innerHTML += padded1
document.getElementById("padded2").innerHTML += padded2`
    }
    const codeExemple17= { 
    code: `     <h2 id="padded"> padded :  </h2>
    
     <script src="./index.js"></script>`,
    script:`let text1 = "5";

let padded1 = text1.padEnd(6,0);

document.getElementById("padded").innerHTML += padded1`
    }
    const codeExemple18= { 
    code: `     <h2 id="demo"></h2>
    
     <script src="./index.js"></script>`,
    script:`  let text = "HTML , CSS , JavaScript , PHP , MYSQL , React ";

const myArray = text.split(" , ");
  
document.getElementById("demo").innerHTML = myArray[0] + "<br>";
document.getElementById("demo").innerHTML += myArray[1] + "<br>";
document.getElementById("demo").innerHTML += myArray[5] + "<br>";
document.getElementById("demo").innerHTML += myArray[6]  ;`
    }
    
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript String</h1>
    <details  className="mt-5">
        <summary className='text-danger'> جميع العناوين  </summary>
        <ul dir="ltr">
            <li><a className="text-light text-decoration-none" href="#length"> Length</a></li>
            <li><a className="text-light text-decoration-none" href="#character"> Character</a></li>
            <li><a className="text-light text-decoration-none" href="#objects"> objects</a></li>
            <li><a className="text-light text-decoration-none" href="#extracting"> Extracting </a></li>
            <li><a className="text-light text-decoration-none" href="#replace"> Replace </a></li>
            <li><a className="text-light text-decoration-none" href="#Upper"> Upper Case </a></li>
            <li><a className="text-light text-decoration-none" href="#Upper"> Lower Case </a></li>
            <li><a className="text-light text-decoration-none" href="#concat"> concat </a></li>
            <li><a className="text-light text-decoration-none" href="#trim"> trim </a></li>
            <li><a className="text-light text-decoration-none" href="#Padding"> Padding </a></li>
            <li><a className="text-light text-decoration-none" href="#charAt"> charAt </a></li>
            <li><a className="text-light text-decoration-none" href="#split"> split </a></li>
        </ul>
    </details>
    <article>
        <p className="style_divv mt-5">
            سبق أن تكلمنا عن العنصر  <b>string</b> في دوس سابقة . في هذا البرنامج التعليمي سوف نتحدت عن هذا  نوع بتفصيل . <br/>
            النوع <b>string</b> في لغة  <b>JavaScript</b> مخصصة لتخزين النص ومعالجته .
        </p>
    </article>
    <article>
        <h2 className="title-h2" id="length">1. String Length </h2>
        <p className="style_divv">
            تستخدم الخاصية <b>length</b> للعثور على طول المتغير من نوع <b>string</b> .<br/>
            تعيد الخاصية <b>length</b> قيمة رقمية .
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='String' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span>text length = 4</span>
                <span>index.js : 3</span>
            </div>
        </ResultConsole>
    </article>
    <article>
        <h2 className="title-h2" id="character">2. Escape Character</h2>
        <p className="style_divv">
            سيتم تقطيع السلسلة إلى  نحن من يسمى.<br/>
            الحل لتجنب هذه المشكلة ، هو استخدام  الخط المائل .
        </p>
        <table class="table">
            <thead className="bg-secondary">
                <tr><th> الكود </th><th> النتيجة </th><th> الوصف  </th></tr>
            </thead>
            <tbody>
                <tr><td><bdi>\'</bdi></td><td> ' </td><td style={{textAlign:"right",paddingRight:"7px"}}> إقتباس واحد </td></tr>
                <tr><td><bdi>\"</bdi></td><td> " </td><td style={{textAlign:"right",paddingRight:"7px"}}> إقتباس مزدوج </td></tr>
                <tr><td><bdi>\\</bdi></td><td> \ </td><td style={{textAlign:"right",paddingRight:"7px"}}> شرطة مائلة للخلف </td></tr>
            </tbody>
        </table>

        <div className="mital"> متال 1 :  </div>
        <ul><li>بدون إستخدام شرطة مائلة للخلف</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='String' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span className="text-danger">(Uncaught SyntaxError: missing ) after argument list</span>
                <span>index.js : 1</span>
            </div>
        </ResultConsole>
        <div className="mital">متال 2 :  </div>
        <ul><li>عند إستخدام  شرطة مائلة للخلف </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='String' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span>Name : "reda"</span>
                <span>index.js : 1</span>
            </div>
        </ResultConsole>
        <ul><li>قم بتجربة باقي العلامات للفهم بشكل أفضل </li></ul>
        <table className="table">
            <thead className="bg-secondary">
                <tr> <th> الكود </th> <th> النتيجة </th></tr>
            </thead>
            <tbody>
                <tr> <td><bdi>\b</bdi></td> <td> مسافة للخلف </td>  </tr>
                <tr> <td><bdi>\f</bdi></td> <td> نموذج تغذية </td>  </tr>
                <tr> <td><bdi>\n</bdi></td> <td> خط جديد </td>  </tr>
                <tr> <td><bdi>\r</bdi></td> <td> إرجاع </td>  </tr>
                <tr> <td><bdi>\t</bdi></td> <td> جهاز جدولة أفقي </td>  </tr>
                <tr> <td><bdi>\v</bdi></td> <td> جدولة عمودية </td>  </tr>
            </tbody>
        </table>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{"text length \f Adil"}</h2>
        </Result> 
    </article>
    <article> 
        <h2 className="title-h2" id="objects">3. JavaScript Strings as Objects</h2>
        <p className="style_divv">
            عادةً ما تكون متغيرات من نوع <b>string</b> في لغة  <b>JavaScript</b> عبارة عن قيم أولية تم إنشاؤها من العناصر الحرفية:<br/><br/>
            <CodeHighlighter code={`let x = "Reda" ;`}  language="js" addClass="mt-3 mb-3" copie={true}  />  
            لكن يمكن أيضًا تعريف  ككائنات <b>Objects</b> تحتوي على الكلمة الأساسية <b>new</b>
            <CodeHighlighter code={`let y = new String("Reda");`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital"> متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>true</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda</h2>
        </Result>
        <ul>
            <li> لا تقم بإنشاء كائنات سلاسل.<br/> </li>
            <li> تؤدي الكلمة الرئيسية الجديدة إلى تعقيد الكود وإبطاء سرعة التنفيذ.<br/></li>
            <li> يمكن أن تنتج كائنات السلسلة نتائج غير متوقعة .</li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2" id="extracting"> 4.  JavaScript Extracting String Parts </h2>
        <p className="style_divv">
            هناك ثلاث طرق لاستخراج جزء من السلسلة :
            <CodeHighlighter code={`let variable = variable.slice(start, end);`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            <CodeHighlighter code={`let variable = variable.substring(start, end);`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            <CodeHighlighter code={`let variable = variable.substr(start, length);`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <h3 className="title-h3">1. <bdi>slice()</bdi></h3>
        <p className="style_divv">
            <bdi><b>slice</b>()</bdi>  يستخرج جزءًا من المتغير من نوع <b>string</b>  ويعيد الجزء المستخرج في متغير أخر .<br/>
            تأخذ الطريقة معلمتين: موضع البداية ، وموضع النهاية (غير متضمن).<br/>
            يقطع هذا المثال جزءًا من سلسلة من الموضع 7 إلى الموضع 13
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Banana</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple8.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Banana</h2>
        </Result>
        <h3 className="title-h3">2. <bdi>substring()</bdi></h3>
        <p className="style_divv">
        <bdi><b>substring()</b></bdi> تشبه الشريحة .<br/>
            الفرق هو أن <bdi><b>substring()</b></bdi> لا يمكنها قبول الفهارس السالبة
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple9.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Kiwi</h2>
        </Result>
        <h3 className="title-h3">3. <bdi>substr()</bdi></h3>
        <p className="style_divv">
            <bdi><b>substr()</b></bdi> يشبه <bdi><b>slice()</b></bdi>.<br/>
            الفرق هو أن المعلمة الثانية تحدد طول الجزء المستخرج.
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple10.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple10.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Ba</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <ul><li> تستقبل الدالة القيم السالبة أيضا </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple11.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple11.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Kiwi</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2" id="replace">5. Replace String</h2>
        <p className="style_divv">
            تستبدل الدالة <bdi><b>replace()</b></bdi> قيمة محددة بقيمة أخرى في سلسلة.<br/>
            <CodeHighlighter code={`let newText = text.replace("old string", "new string");`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple12.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple12.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Visit Me on My Web</h2>
        </Result>
        <ul><li> يمكن تغيير محتوى <b>HTML</b> عبر إستخدام الدالة <b><bdi>replace()</bdi></b> .</li></ul>
        <ul>
            <li> الدالة <b><bdi>replace()</bdi></b> لا تغير السلسلة التي تم استدعاؤها عليها. </li>
            <li   li> الدالة <b><bdi>replace()</bdi></b>  ترجع سلسلة نصية جديدة.</li>
        </ul>
    </article>
    <article>    
        <h2 className="title-h2" id="Upper">6. Converting to Upper and Lower Case</h2>
        <p className="style_divv">
            يتم تحويل متغير من نوع <b>string</b> إلى أحرف كبيرة باستخدام <b><bdi>toUpperCase()</bdi></b>.<br/>
            يتم تحويل متغير من نوع <b>string</b> إلى أحرف صغيرة باستخدام <b><bdi>toLowerCase()</bdi></b>  
            <CodeHighlighter code={`let newText = text.toUpperCase();`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            <CodeHighlighter code={`let newText = text.toLowerCase();`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple13.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple13.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>HELLO WORD</h2>
            <h2>hello word</h2>
        </Result>
    </article>
    <article>        
        <h2 className="title-h2" id="concat">7. JavaScript String concat</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>concat()</bdi></b> لجمع قيمتين من نوع <b>string</b> .<br/>   
            يمكن استخدام طريقة <b><bdi>concat()</bdi></b> بدلاً من عامل الجمع
            <CodeHighlighter code={`let text = "string value 1";
let text2 = "string value 2";
let text3 = text.concat(" ", text2);`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple14.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple14.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <h2 className="title-h2" id="trim">8. JavaScript String trim</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>trim()</bdi></b> لإزالة المسافة البيضاء من جانبي السلسلة .<br/>
            <CodeHighlighter code={`let text1 = "    Reda    ";
let text2 = text1.trim();`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple15.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple15.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='String' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reda    </span>
                <span>index.js : 3</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <span>reda</span>
                <span>index.js : 4</span>
            </div>
        </ResultConsole>
        <h2 className="title-h2" id="Padding">9. JavaScript String Padding</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>padStart</bdi></b>  و <b><bdi>padEnd</bdi></b> لدعم الحشو في بداية السلسلة ونهايتها .
        </p>
        <h3 className="title-h3">1. <bdi>padStart()</bdi></h3>
        <CodeHighlighter file_name="index.html"code={codeExemple16.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple16.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>padded : 000005</h2>
            <h2>padded : 00Reda</h2>
        </Result>
        <h3 className="title-h3">2. <bdi>padEnd()</bdi></h3>
        <CodeHighlighter file_name="index.html"code={codeExemple17.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple17.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>padded : 500000</h2>
        </Result>
        <h2 className="title-h2" id="charAt">10. JavaScript String charAt</h2>
        <p className="style_divv">
        تستعمل الدالة <b><bdi>charAt</bdi></b>  لإرجاع الحرف في فهرس (موضع) محدد في المتغير النصي .<br/>
        <CodeHighlighter code={`let text = "Hello Word";
let newText = text.charAt(0);`} language="js" addClass="mt-3 mb-3" copie={true}  />
        </p>
        <h2 className="title-h2" id="split">11. JavaScript String split</h2>
        <p className="style_divv">
            تستعمل الدالة <b><bdi>split</bdi></b> لتقسم سلسلة إلى مصفوفة من السلاسل الفرعية .<br/>
            طريقة <bdi><b>split()</b></bdi> ترجع المصفوفة الجديدة .<br/>
            طريقة <bdi><b>split()</b></bdi> لا تغير السلسلة الأصلية .<br/>
            إذا تم استخدام <bdi><b>split(" ")</b></bdi> كفاصل ، يتم تقسيم السلسلة بين الكلمات .<br/>
            <CodeHighlighter code={`let text = "Hello Word";
let array = text.split("");`} language="js" addClass="mt-3 mb-3" copie={true}  />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple18.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple18.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>HTML <br/> CSS<br/> React<br/> undefined</h2>
        </Result>        
    </article>
</section>
    )
}