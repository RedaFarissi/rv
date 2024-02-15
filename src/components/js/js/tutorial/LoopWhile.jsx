import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function LoopWhile(){
    const code1 = `while (condition) {
  //code block to be executed
}`
    const code2 = `do{
  //code block to be executed
}while (condition) ; `

    const codeExemple1= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var i = 0;
while( i < 5 ){
    document.getElementById("h2").innerHTML += "Hello ";
    i++
}`
    }    
    const codeExemple2= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var i = 0;
while( i < 5 ){
    document.getElementById("h2").innerHTML += "Hello ";
    i = i+3
}`
    }
    const codeExemple3= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var app = ['fb', 'wh', 'ins', 'tel'];
var i = 0;
while (i<app.length) {
document.getElementById("h2").innerHTML += app[i] + " ";
i++;
}
`
    }
    const codeExemple4= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var i = 0;

do {
  document.getElementById("h2").innerHTML = "Reda ";
  
} while (i == 90);`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Loop While</h1>
    <article className="mt-5">
        <h2 className="title-h2">1.  while Loop</h2>
        <p className="style_divv">
            تتكرر حلقة <b>while</b> خلال كتلة من التعليمات البرمجية طالما أن الشرط المحدد صحيح. <br/>
            يبدأ تنفيد الكود بعد التحقق من الشرط 
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <ul>
          <li>في المثال التالي ، سيتم تشغيل الكود الموجود في الحلقة ، مرارًا وتكرارًا ، طالما أن المتغير (i) أقل من 5</li>
          <li>يتم التحقق من الشرط في كل مرة </li>
          <li>عند عدم تحقق الشرط يتم تجاوز الحلقة <b>while</b></li>
          <li>في كل مرة يتم تنفيد الكود داخل الحلقة يتم إضافة واحد إلى العداد <b>i</b></li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop while' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Hello Hello Hello Hello Hello </h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <ul><li>الفرق بين المتالين  أن الأول يتم إضافة 1 لقيمة العداد i في كل مرة أما المتال الحالي يتم إضافة 3  للعداد في كل مرة</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Loop while" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop while' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Hello Hello </h2>
        </Result>
        <div className="mital">متال 3 :  </div>
        <ul><li>في المتال التالي يتم عرض قيمة i في كل مرة يتم إضافة 1 إلى i</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Loop while" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop while' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> fb wh ins tel </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. do while Loop</h2>
        <p className="style_divv">
          حلقة <bdi><b>do while</b></bdi> هي نوع مختلف من حلقة <b>while</b>. ستنفذ هذه الحلقة كتلة الكود مرة واحدة ، قبل التحقق مما إذا كان الشرط صحيحًا ، ثم ستكرر الحلقة طالما أن الشرط صحيح.
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />      
        </p>
        <div className="mital">متال  :  </div>
        <ul><li> مع أن الشرط ليس صحيح يتم تنفيد الكود مرة واحدة </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Loop while" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop while' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Reda </h2>
        </Result>
    </article>
 </section>
    )
}