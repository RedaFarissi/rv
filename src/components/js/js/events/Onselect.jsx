import images from "../../imagesJs"
import { CodeHighlighter , ResultAlert} from "../../../path";
import { useState } from "react";

export default function Onselect(){
    const code1 = `<!-- Code HTML -->
<element onselect="//script">`
    const code2 = `// Code JavaScript 
object.onselect = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("select", function_name )`
    const codeExemple1= { 
    code: `    Select some of the text:
     <input type="text" value="Hello world!" onselect="selectFunction()"/>
      
     <script src="./index.js"></script>`,
    script:`function selectFunction() {
    alert("Hello world!");
}`
    }
    const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
    function clickOk(){
        setDisplayAlertExemple(false)
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onselect</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onselect</b> بعد تحديد جزء من النص في عنصر ما.<br/>
            يتم استخدام حدث <b>onselect</b> غالبًا في عناصر <kbd>&lt;input type = "text"&gt;</kbd> أو <kbd>&lt;textarea&gt;</kbd> .<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onselect" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title='onselect' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"Hello world!"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            Select some of the text:
            <input type="text" value="Hello world!" onSelect={()=>{setDisplayAlertExemple(true)}}/>
        </ResultAlert>
    </article>
</section>
    )
}