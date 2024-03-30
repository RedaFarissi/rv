import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef } from "react";

export default function Data(){
  const exempleRef = useRef()

  const codeExemple1= { 
    head:`
    <style>
      #result1 , #result2   {
        font-size: x-large;
        color: green;
      }
    </style>`,
    code: `       <input type="text" oninput="myFunction(event)"/>
     <ul>
         <li><b id="result"></b></li>
     </ul>
   
     <p>
            <strong>Note:</strong> This property is not fully supported, and can change before the final release.
     </p>
      
     <script src="./index.js"></script>`,
    script:`function myFunction(event) {
    document.getElementById("result").innerHTML += event.data;
}`
    }
    function myFunction(event) {
        document.getElementById("js-data-result1").innerHTML = exempleRef.current.value;
    }

  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript data</h1>
  <article>
      <p className="style_divv mt-5">
          تقوم خاصية <b>event.data</b> بإرجاع الحرف الذي تم إدراجه مع الحدث.<br/>
          هذه الخاصية للقراءة فقط.
          <CodeHighlighter code={`event.data`} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <div className="mital"> متال :  </div>
      <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head}  language="html" is_html={true} title="data" addClass="mt-3 mb-3" copie={true}  number={false}/>  
      <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
      <Result title="data" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <input type="text" ref={exempleRef} onInput={(event)=>{myFunction(event)}}/>
          <ul>
              <li><b id="js-data-result1" style={{fontSize: "x-large",color: "green"}}></b></li>
          </ul>
          <p>
              <strong>Note:</strong> 
              This property is not fully supported, and can change before the final release.
          </p>
      </Result>
  </article>
</section>
    )
}
