import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef } from "react";

export default function Onfocusout(){
    const code1 = `<!-- Code HTML -->
<element onfocusout="//script">`
    const code2 = `// Code JavaScript 
object.onfocusout = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("focusout", function_name )`

    const codeExemple1= { 
    code: `      Enter your name:
     <input type="email" id="input" onfocusin="focusinFunction()" onfocusout="focusoutFunction()" />
      
     <script src="./index.js"></script>`,
    script:`function focusinFunction() {
    document.getElementById("input").style.backgroundColor = "green";
}

function focusoutFunction() {
    document.getElementById("input").style.backgroundColor = "red";
    document.getElementById("input").style.color = "white";
}`
    }
    const exempleRef = useRef()
    function focusinFunction() {
        exempleRef.current.style.backgroundColor = "green";
    }
    function focusoutFunction() {
        exempleRef.current.style.backgroundColor = "red";
        exempleRef.current.style.color = "white";
    }
  return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript onfocusout</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onfocusout</b> عندما يكون عنصر على وشك أن يفقد التركيز.<br/>
            حدث <p>onfocusout</p> مشابه لحدث <b>onblur</b>. الاختلاف الرئيسي هو أن حدث <b>onblur</b> لا ينفجر. لذلك ، إذا كنت تريد معرفة ما إذا كان عنصر ما أو فرعه يفقد التركيز ، فيجب عليك استخدام حدث <b>onfocusout</b>.<br/>
            حدث <b>onfocusout</b> هو عكس حدث <b>onfocusin</b>.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onfocusout" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onfocusout"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            Enter your name:
            <input type="email" ref={exempleRef} onFocus={focusinFunction} onBlur={focusoutFunction}/>
        </Result>
    </article>
</section>
    )
}
