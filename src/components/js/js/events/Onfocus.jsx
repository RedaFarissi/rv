import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onfocus(){

    //   document.getElementById("InPuT2").onfocus = function(){
    //     const id = document.getElementById("InPuT2")
    //     id.style.border = "5px solid red"
    //     id.style.width = "50%"
    //     id.style.backgroundColor = "green"
    //     id.style.color = "white"
    //     id.style.fontSize = "23px"
    //   }
    const code1 = `<!-- Code HTML -->
<input onfocus="function_name()">`
    const code2 = `// Code JavaScript 
object.onfocus = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("focus", function_name )`
    const codeExemple1= { 
    code: `      <input type="text" id="InPuT" onfocus="function_name(this.id)"/>
      
     <script src="./index.js"></script>`,
    script:`function function_name(id) {
    const element = document.getElementById(id);
    element.style.border = "5px solid red";
}`
    }
    const codeExemple2= { 
    code: `      <input type="text" id="InPuT2"/>
      
     <script src="./index.js"></script>`,
    script:`document.getElementById("InPuT2").onfocus = function(){
        const id = document.getElementById("InPuT2")
        id.style.border = "5px solid red"
        id.style.width = "50%"
        id.style.backgroundColor = "green"
        id.style.color = "white"
        id.style.fontSize = "23px"
}`
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onfocus</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <bdi><b>onfocus</b></bdi> عندما يتم التركيز على عنصر.<br/>
            غالبًا ما يتم استخدام حدث <b>onfocus</b> مع <kbd>&lt;input&gt;</kbd> و <kbd>&lt;select&gt;</kbd> و <kbd>&lt;a&gt;</kbd>.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-warning">
                <b>نصيحة</b> : حدث onfocus هو عكس حدث onblur .
            </div>
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="onfocus" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onfocus" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" id="InPuT" onFocus={()=>{ document.getElementById("InPuT").style.border = "5px solid red"}}/>
        </Result>
        <div className="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="onfocus" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onfocus" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="text" id="InPuT2"  onFocus={()=>{ 
            document.getElementById("InPuT2").style.border = "5px solid red"
            document.getElementById("InPuT2").style.width = "50%"
            document.getElementById("InPuT2").style.backgroundColor = "green"
            document.getElementById("InPuT2").style.color = "white"
            document.getElementById("InPuT2").style.fontSize = "23px"}}/>
        </Result>
    </article>
</section>
    )
}
