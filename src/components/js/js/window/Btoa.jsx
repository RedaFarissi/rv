import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState , useRef} from "react";

export default function Btoa(){
    const inputRefExemple1 = useRef()
    const [exemple1value,setExemple1value] = useState()

    const codeExemple1= { 
    code: `     <input type='text' id='text' />
     <button onclick="name_function()"> Click Here </button>
     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")

function name_function(){
  let value = document.getElementById("text").value
  result.innerHTML = btoa(value)
}`
    }
    const codeExemple2= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")

let text = window.btoa("Reda Eskouni")
result.innerHTML = text`
    }

    function exemple1(){
        setExemple1value(btoa(inputRefExemple1.current.value))
    }

return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript btoa</h1>
    <article>

        <p className="style_divv mt-5">
            تقوم طريقة <bdi><b>btoa</b></bdi> بتشفير سلسلة بنضام <bdi>64-bit</bdi>.<br/>
            وظيفة <bdi>btoa()</bdi> تعمل فقط مع سلاسل النصوص التي تمثل بيانات ثنائية (مثل ASCII أو UTF-8). قد تواجه مشاكل إذا حاولت ترميز سلسلة تحتوي على أحرف خارجة عن نطاق ASCII.<br/>
            ويوجد أيضًا وظيفة ذات صلة تسمى <bdi>atob()</bdi>، التي تقوم بفك تشفير سلسلة تم ترميزها في base64 إلى شكلها الأصلي.
            <CodeHighlighter code={`window.btoa("string")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="btoa" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='btoa' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type='text' id='text' onChange={exemple1} ref={inputRefExemple1} />
            <button onClick={exemple1}> Click Here </button>
            <h2>{exemple1value}</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="btoa" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='btoa' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>UmVkYSBFc2tvdW5p</h2>
        </Result>
        <ul><li> لفك تشفير إستعمل <bdi><b>atob()</b></bdi> </li></ul>
    </article>
</section>
    )
}