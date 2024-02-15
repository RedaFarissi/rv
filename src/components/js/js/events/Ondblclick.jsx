import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState } from "react";

export default function Ondblclick(){
    const [exemple1,setExemple1] = useState("")
    const code1= `<!-- Code HTML -->
<element ondblclick="//script">`
    const code2= `//Code JavaScript 
object.ondblclick = function(){  //myScript  }`
    const code3= `// Code JavaScript using the addEventListener() 
object.addEventListener("dblclick", function_name )`
    const codeExemple1= { 
    code: `      <p ondblclick="myFunction()">  
        Double-click this paragraph to trigger a function.
     </p>
     <h2 id="result"> </h2>
      
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    const result = document.getElementById("result")
    result.innerHTML = "Hello Word" 
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript ondblclick</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>ondblclick</b> عندما ينقر المستخدم نقرًا مزدوجًا فوق أحد العناصر.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="ondblclick" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="ondblclick" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p onDoubleClick={()=>{ setExemple1("Hello Word") }}>   Double-click this paragraph to trigger a function.</p>
            <h2 id="result"> {exemple1} </h2>
        </Result>
    </article>
</section>
    )
}
