import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useEffect, useRef } from "react";

export default function Blur(){
    const exempleRef = useRef()
    
    useEffect(()=>{
        exempleRef.current.focus()
    },[])
    
    const codeExemple1= { 
    code: `     <input type="email" id="text"/>
     <button id="btn"> remove focus </button>
      
     <script src="./index.js"></script>`,
    script:`const text = document.getElementById("text");
const btn = document.getElementById("btn");

text.focus();

btn.addEventListener('click', function() {
  text.blur();
});`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript blur</h1>
    <article>
        <p className="style_divv mt-5">
            تزيل طريقة <bdi><b>blur()</b></bdi> التركيز من عنصر.
            <CodeHighlighter code={`element.blur()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="querySelector" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="querySelector" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input ref={exempleRef} type="email" id="text"/>
            <button  onClick={()=>{ exempleRef.current.blur();  }}> remove focus </button>
        </Result>
    </article>
</section>
    )
}