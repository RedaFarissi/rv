import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useEffect, useRef } from "react";

export default function Onblur(){
    const inputExempleRef = useRef()
    const codeExemple1= { 
        code: `      <input type="text" id="exemple-input" />
          
         <script src="./index.js"></script>`,
        script:`document.getElementById("exemple-input").onfocus = function(){
    const exempleInput = document.getElementById("exemple-input")
    exempleInput.style.border = "5px solid red"
    exempleInput.style.width = "50%"
    exempleInput.style.backgroundColor = "green"
    exempleInput.style.color = "white"
    exempleInput.style.fontSize = "23px"
}
document.getElementById("exemple-input").onblur = function(){
    const exempleInput = document.getElementById("exemple-input")
    exempleInput.style.border = "none"
    exempleInput.style.width = "25%"
    exempleInput.style.backgroundColor = "white"
    exempleInput.style.color = "black"
    exempleInput.style.fontSize = "16px"
}                                                
document.getElementById("exemple-input").style.outline = "0.5px solid black"`
        }
    
    const code1 = `<!-- Code HTML -->
<input onblur="function_name()" />`
    const code2 = `// Code JavaScript
object.onblur = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("blur", function_name )`
    function exempleFocus(){
        inputExempleRef.current.style = "border5px solid red"
        inputExempleRef.current.style.width = "50%"
        inputExempleRef.current.style.backgroundColor = "green"
        inputExempleRef.current.style.color = "white"
        inputExempleRef.current.style.fontSize = "23px"
    }
    function exempleBlur(){
        inputExempleRef.current.style.border = "0.5px solid black"
        inputExempleRef.current.style.width = "25%"
        inputExempleRef.current.style.backgroundColor = "white"
        inputExempleRef.current.style.color = "black"
        inputExempleRef.current.style.fontSize = "16px"
    }
    useEffect(()=>{
        inputExempleRef.current.style.outline = "0.5px solid black"
    },[])
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onblur</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onblur</b> عندما يفقد الكائن التركيز.<br/>
            غالبًا ما يتم استخدام حدث <b>onblur</b> مع رمز التحقق من صحة النموذج (على سبيل المثال ، عندما يترك المستخدم حقل نموذج).<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-warning">
                <b>نصيحة</b> : حدث onblur هو عكس حدث onfocus.
            </div>
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onblur" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onblur" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" ref={inputExempleRef} onFocus={exempleFocus} onBlur={exempleBlur}/>
        </Result>
    </article>
</section>
    )
}
