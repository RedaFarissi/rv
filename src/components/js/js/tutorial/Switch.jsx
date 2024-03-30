import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Switch(){
    const code1= `switch(expression){
    case x: //JavaScript code break; 
    case y: //JavaScript code break; 
    case z: //JavaScript code break;            
    default : //JavaScript code break; 
}`
    const codeExemple1= { 
    code: `     <h2 id="condition"></h2>
    
     <script src="./index.js"></script>`,
    script:`var str = "REDA ESKOUNI";
switch(str){
  case "REDA": document.getElementById("condition").innerHTML = "case num 1"; break;
  case "Eskouni": document.getElementById("condition").innerHTML = "case num 2"; break;
  case "REDA ESKOUNI": document.getElementById("condition").innerHTML = "case num 3"; break;
  case "REDA Eskouni": document.getElementById("condition").innerHTML = "case num 4"; break;
}`
    }
    const codeExemple2= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:`var num = 0;
switch(num){
  case 1: document.getElementById("condition").innerHTML = "case num 1"; break;
  case 2: document.getElementById("condition").innerHTML = "case num 2"; break;
  case 3: document.getElementById("condition").innerHTML = "case num 3"; break;
  case 4: document.getElementById("condition").innerHTML = "case num 4"; break;
  default: document.getElementById("condition").innerHTML = "Not Found"; break;
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Switch</h1>
    <article className="mt-5">
        <p className="style_divv">
            يتم استخدام بيان التبديل لأداء إجراءات مختلفة بناءً على ظروف مختلفة.
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1:  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>case num 3</h2>
        </Result>
        <div className="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Not Found</h2>
        </Result>
    </article>
</section>
    )
}


