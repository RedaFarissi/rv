import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Contains(){
    const codeExemple1= { 
    code: `     <div id="parent">
         <div id="children_1"> children 1 </div>
         <div id="children_2"> children 2 </div>
         <div id="children_3"> children 3 </div>
     </div>
     <div id="children_4"> children 4 </div>
         
     <div id="result"> </div>
      
     <script src="./index.js"></script>`,
    script:`const parent = document.getElementById("parent");
const children_2 = document.getElementById("children_2");
const resulta = document.querySelector("#result");
  
resulta.innerHTML = parent.contains(children_2);
resulta.style.fontSize = "21px";`
    }
    const codeExemple2= { 
    code: `      <div id="parent">
         <div> children 1 <span> Hello Word </span> </div>
         <div> children 2 </div>
         <div> children 3 </div>
         <div> children 4 </div>
     </div>
         
     <div id="result"> </div>
      
     <script src="./index.js"></script>`,
    script:`const parent = document.getElementById("parent")
const result = document.getElementById("result")
const span = document.querySelector("span")

span.style.color = "red"

result.innerHTML = parent.contains(span)`
    }
    const codeExemple3= { 
    code: `      <div id="parent">
         <div> children 1 </div>
         <div> children 2 </div>
         <div> children 3 </div>
         <div> children 4 </div>
     </div>
  
     <div id="result"> </div>
      
     <script src="./index.js"></script>`,
    script:`const parent = document.getElementById("parent");
const b = document.querySelector("b");
result.innerHTML = parent.contains(b);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript contains</h1>
    <article>
        <div className="style_divv mt-5">
            يعيد <b><bdi>contains()</bdi></b> <b>true</b> إذا كانت العقدة سليلة العقدة.<br/>
            أسلوب <b><bdi>contains()</bdi></b> يرجع القيمة <b>false</b> إذا كان العنصر لا يحتوي على العقدة سليلة
            <CodeHighlighter code={`document.contains(node)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="contains" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="contains" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div>
                <div > children 1 </div>
                <div > children 2 </div>
                <div > children 3 </div>
            </div>
            <div id="children_4"> children 4 </div>
            <div style={{fontSize:"22px"}}> true </div>
        </Result>       
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="contains" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="contains" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div>
                <div> children 1 <span style={{color:"red"}}>Hello Word</span></div>
                <div> children 2 </div>
                <div> children 3 </div>
            </div>
            <div id="children_4"> children 4 </div>
            <div style={{fontSize:"22px"}}> true </div>
        </Result>
        <div className="mital">متال 3 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} language="html" is_html={true} title="contains" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="contains" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            children 1 <br/>   children 2 <br/>   children 3 <br/>   children 4 <br/>   false
        </Result>
    </article>
</section>
    )
}