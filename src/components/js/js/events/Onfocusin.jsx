import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef } from "react";

export default function Onfocusin(){
    const exempleRef = useRef()
    function focusinFunction() {
        exempleRef.current.style.backgroundColor = "green";
    }
    
    const code1 = `<!-- Code HTML -->
<element onfocusin="//script">`
    const code2 = `// Code JavaScript
object.onfocusin = function(){  //myScript  }`
    const code3 = `//Code JavaScript using the addEventListener()
object.addEventListener("focusin", function_name )`
    const codeExemple1= { 
    code: `      Enter your name:
     <input type="email" id="input" onfocusin="focusinFunction()" />
      
     <script src="./index.js"></script>`,
    script:`function focusinFunction() {
     document.getElementById("input").style.background = "green";
}`
    }

  return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript onfocusin</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onfocusin</b> عندما يكون عنصر على وشك الحصول على التركيز.<br/>
            حدث <b>onfocusin</b> مشابه لحدث <b>onfocus</b>. الاختلاف الرئيسي هو أن حدث <b>onfocus</b> لا ينفجر. لذلك ، إذا كنت تريد معرفة ما إذا كان عنصر ما أو طفله يحصل على التركيز ، فيجب عليك استخدام حدث <b>onfocusin</b>.<br/>
            حدث <b>onfocusin</b> هو عكس حدث <b>onfocusout</b>.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onfocusin" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="onfocusin"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            Enter your name:
            <input type="email" ref={exempleRef} onFocus={focusinFunction} />
        </Result>
    </article>
</section>
    )
}
