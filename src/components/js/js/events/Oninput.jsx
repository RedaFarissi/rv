import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef, useState } from "react";

export default function Oninput(){
    const inputRef = useRef()
    const [exempleVaue,setExempleVaue] = useState()
    function function_input(){
        setExempleVaue(inputRef.current.value)
    }

    const code1 = `<!-- Code HTML -->
<element oninput="//script">`
    const code2 = `// Code JavaScript 
object.oninput = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("input", function_name )`

    const codeExemple1= { 
    code: `     <input type="text" id="input-text" oninput="function_input()"/>
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`function function_input(){
    const input = document.getElementById('input-text')
    const result = document.getElementById('result')
    result.innerHTML = input.value
}`
    }

    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript oninput</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>oninput</b> عندما يحصل عنصر على مدخلات المستخدم.<br/>
            يحدث هذا الحدث عندما يتم تغيير قيمة عنصر <kbd>&lt;input&gt;</kbd> أو <kbd>&lt;textarea&gt;</kbd>.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="oninput" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="oninput" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" ref={inputRef} onInput={function_input}/>
            <h2 >{exempleVaue}</h2>
        </Result>
        <div className="alert alert-info" dir="ltr" style={{lineHeight:"200%",wordSpacing:"5px"}}>
            <div className="h5 mb-0 pb-0"><b>Supported HTML tags</b>:</div><br/>
        	<kbd>&lt;input type="checkbox"&gt;</kbd>, <kbd>&lt;input type="color"&gt;</kbd>, <kbd>&lt;input type="date"&gt;</kbd>, <kbd>&lt;input type="datetime"&gt;</kbd>, <kbd>&lt;input type="email"&gt;</kbd>, <kbd>&lt;input type="month"&gt;</kbd>, <kbd>&lt;input type="number"&gt;</kbd>, <kbd>&lt;input type="password"&gt;</kbd>, <kbd>&lt;input type="range"&gt;</kbd>, <kbd>&lt;input type="search"&gt;</kbd>, <kbd>&lt;input type="tel"&gt;</kbd>, <kbd>&lt;input type="text"&gt;</kbd>, <kbd>&lt;input type="time"&gt;</kbd>, <kbd>&lt;input type="url"&gt;</kbd>, <kbd>&lt;input type="week"&gt;</kbd>, <kbd>&lt;textarea&gt;</kbd>
        </div>
    </article>
</section>
    )
}