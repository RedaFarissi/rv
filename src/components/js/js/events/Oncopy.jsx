import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Oncopy(){
    const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
    function myFunction(){
        setDisplayAlertExemple(true)
    }
    function clickOk(){
        setDisplayAlertExemple(false)
    }
    
    const code1 = `<!-- Code HTML -->
<element oncopy="//script">`
    const code2 = `// Code JavaScript
object.oncopy = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("copy", function_name )`
    const codeExemple1= { 
    code: `      <p oncopy="myFunction()">
        Try to copy this text
     </p>
      
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    alert("You copied text!");
}`
    }
    
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript oncopy</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>oncopy</b> عندما ينسخ المستخدم محتوى عنصر ما.<br/>
            يحدث حدث <b>oncopy</b> أيضًا عندما ينسخ المستخدم عنصرًا ، على سبيل المثال ، صورة ، تم إنشاؤها باستخدام عنصر <kbd>&lt;img&gt;</kbd>.<br/>
            يتم استخدام حدث <b>oncopy</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> مع <code>type="text"</code>.<br/>
            <div className="alert alert-warning mt-2">
                 هناك ثلاث طرق لنسخ عنصر / محتوى عنصر:
                <ul>
                    <li> اضغط على <kbd className="bg-secondary">CTRL+C</kbd> </li>
                    <li> حدد "نسخ" من قائمة "تعديل" في متصفحك</li>
                    <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد الأمر "نسخ".</li>
                </ul>
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="oncopy" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <ResultAlert title='oncopy' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"You copied text!"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            
        </ResultAlert>  
    </article>
</section>
    )
}
