import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef, useState } from "react";

export default function GetElementsByName(){
    const [inputExemple2 , setInputExemple2] = useState({value:"" , outerHTML:"", tagName:""})
    const refExemple2Input = useRef()

    const codeExemple1 = { 
    code: `      <input type="text" name="text">
     <br/><br/>
     <textarea name="text"> </textarea>
     <h2 id="result"> </h2>
      
     <script src="./index.js"></script>`,
    script:`const name = document.getElementsByName("text")
const result = document.getElementById("result")

result.innerHTML = name.length`
    }
    const codeExemple2 = { 
    code: `      <input type="text" name="text"/>
     <button class="btn btn-light" onclick="val()">value</button>
     <div id="resulta" class="border border-primary alert alert-success">
     </div>
      
     <script src="./index.js"></script>`,
    script:`function val() {
    const name = document.getElementsByName("text");
    const resulta = document.getElementById("resulta");

    resulta.innerHTML =  \`\${name[0].value} <br>\`;
    resulta.innerHTML += \`\${name[0].outerHTML} <br>\`;
    resulta.innerHTML += \`\${name[0].tagName} <br>\`;
}`
    }
    function val(){
        setInputExemple2({ 
            value: refExemple2Input.current.value ,
            outerHTML: refExemple2Input.current.outerHTML ,
            tagName: refExemple2Input.current.tagName
        })
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript getElementsByName</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>getElementsByName()</b></bdi> مجموعة من العناصر باسم محدد.<br/>
            تقوم طريقة <bdi><b>getElementsByName()</b></bdi> بإرجاع قائمة <b>NodeList</b> مباشرة.
            <CodeHighlighter code={`document.getElementsByName("name")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="getElementsByName" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="getElementsByName" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" name="text"/>
            <br/><br/>
            <textarea name="text"> </textarea>
            <h2 id="result"> 2 </h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="getElementsByName" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="getElementsByName" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" name="text" ref={refExemple2Input} />
            <button class="btn btn-light" onClick={val}> value </button>
            <div id="resulta" class="border border-primary alert alert-success">
                {inputExemple2.value}<br/>
                {(inputExemple2.outerHTML === "")?"":<input type="text" name="text" />}<br/>
                {inputExemple2.tagName}<br/>
            </div>
        </Result>
    </article>
</section>
)
}