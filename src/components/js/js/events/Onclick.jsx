import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef, useState } from "react";

export default function Onclick(){
    const refExemple1 = useRef()
    const [exemple2,setExemple2] = useState("")
    const code1= `<!-- Code HTML -->
<element onclick="//script">`
    const code2= `// Code JavaScript 
object.onclick = function(){  //myScript  }`
    const code3= `// Code JavaScript using the addEventListener()
object.addEventListener("click", function_name )`
    const codeExemple1= { 
    code: `      <div id="div_box">
         <button class="btn btn-primary" onclick="function_name1()"> change style1 </button>
         <button class="btn btn-primary" id="btn2"> change style2 </button>
         <button class="btn btn-primary" id="btn3"> change style3 </button>
         </div>
         
         <script src="./index.js"></script>`,
         script:`const box = document.getElementById("div_box");
         
         function function_name1() {
    box.style.backgroundColor = "red";
    box.style.border = "2px solid brown";
    box.style.borderRadius = "2px";
    box.style.padding = "20px";
}

document.getElementById("btn2").addEventListener('click', function() {
    box.style.border = "5px double white";
    box.style.backgroundColor = "red";
    box.style.borderRadius = "20px";
    box.style.padding = "9px";
});

document.getElementById("btn3").onclick = function() {
    box.style.backgroundColor = "red";
    box.style.border = "2px solid black";
    box.style.borderRadius = "9px";
    box.style.padding = "2px";
};`
    }
    const codeExemple2= { 
    code: `      <div>Field1: <input type="text" id="f1" value="JavaScript"/></div>
     <br/>
     <div>Field2: <input type="text" id="f2"/></div>
     
     <button onclick="myFunction()" class="btn btn-primary"> Copy </button>
      
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    const f2 = document.getElementById("f2")
    const f1 = document.getElementById("f1")
    f2.value = f1.value;
}`
    }
function function_name1() {
    refExemple1.current.style.backgroundColor = "red";
    refExemple1.current.style.border = "2px solid brown";
    refExemple1.current.style.borderRadius = "2px";
    refExemple1.current.style.padding = "20px";
}

function function_name2() {
    refExemple1.current.style.border = "5px double white";
    refExemple1.current.style.backgroundColor = "red";
    refExemple1.current.style.borderRadius = "20px";
    refExemple1.current.style.padding = "9px";
}

function function_name3() {
    refExemple1.current.style.backgroundColor = "red";
    refExemple1.current.style.border = "2px solid black";
    refExemple1.current.style.borderRadius = "9px";
    refExemple1.current.style.padding = "2px";
};

    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onclick</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onclick</b> عندما ينقر المستخدم على عنصر.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onclick" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onclick" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="div_box" ref={refExemple1}>
                <button class="btn btn-primary m-1" onClick={function_name1}> change style1 </button>
                <button class="btn btn-primary m-1" onClick={function_name2}> change style2 </button>
                <button class="btn btn-primary m-1" onClick={function_name3}> change style3 </button>
            </div>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="onclick" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onclick" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div>Field1: <input type="text" id="f1" value="JavaScript"/></div>
            <br/>
            <div>Field2: <input type="text" id="f2" value={exemple2}/></div>
            <br/>
            <button onClick={()=>{ setExemple2("JavaScript") }} class="btn btn-primary"> Copy </button>
        </Result>
    </article>
</section>
    )
}
