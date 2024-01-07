import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function Ontoggle(){
    const code1 = `<!-- Code HTML -->
<details ontoggle="//script">`
    const code2 = `// Code JavaScript 
object.ontoggle = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("toggle", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        h2{ 
            color: red; 
        }
        #DIV{ 
            background-color: red; 
            color: white; 
            min-height: 200px; 
            border: 2px solid black;
            font-size: 35px;
        }
    </style>`,
    code: `      <h2>ontoggle event attribute (open the details)</h2>
     <details ontoggle="toggleFunction()">
       <summary style="color:blue;">
         is the full form of HTML
       </summary>
     
       <p>Hyper Text Markup Language</p>
       <div id="DIV"> DIV BOX </div>
     </details>
      
     <script src="./index.js"></script>`,
    script:`function toggleFunction() {
    alert("The ontoggle event occured");
}`
    }
    const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
    function clickOk(){
        setDisplayAlertExemple(false)
    }
    function toggleFunction(){
        setDisplayAlertExemple(true);
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript ontoggle</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>ontoggle</b> عندما يفتح المستخدم أو يغلق عنصر <kbd>&lt;details&gt;</kbd>.<br/>
            يحدد عنصر <kbd>&lt;details&gt;</kbd> التفاصيل الإضافية التي يمكن للمستخدم عرضها أو إخفاءها عند الطلب.<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="ontoggle" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title='ontoggle' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"The ontoggle event occured"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>ontoggle event attribute (open the details)</h2>
            <details onToggle={toggleFunction}>
                <summary style={{color:"blue"}}> is the full form of HTML </summary>
                <p> Hyper Text Markup Language </p>
                <div id="DIV"> DIV BOX </div>
            </details>
        </ResultAlert>
    </article>
</section>
    )
}