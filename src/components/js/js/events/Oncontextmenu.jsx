import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Oncontextmenu(){

  const code1 = `<!-- Code HTML -->
<element oncontextmenu="//script">`
  const code2 = `// Code JavaScript 
object.oncontextmenu = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("contextmenu", function_name )`
    const codeExemple1= { 
    code: `      <div id="div_element">
         div element with Event oncontextmenu
     </div>
      
     <script src="./index.js"></script>`,
    script:`const div_element = document.getElementById("div_element");
div_element.oncontextmenu = () => {
    div_element.style.backgroundColor = "red";
    div_element.style.color = "white";
    div_element.style.fontSize = "22px";
    div_element.style.border = "2px solid black";
    div_element.style.padding = "20px";
};`
    }
    function functionContextMenu(){
      const div_element = document.getElementById("oncontextmenu-js");
      div_element.style.backgroundColor = "red";
      div_element.style.color = "white";
      div_element.style.fontSize = "22px";
      div_element.style.border = "2px solid black";
      div_element.style.padding = "20px";
    }
  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript oncontextmenu</h1>
  <article>
      <p className="style_divv mt-5">
          يقع حدث <b>oncontextmenu</b> عندما ينقر المستخدم بزر الماوس الأيمن فوق عنصر لفتح قائمة السياق.<br/>
          <div className="alert alert-warning mt-2"> على الرغم من أن حدث <b>oncontextmenu</b> مدعوم في جميع المتصفحات ، إلا أن سمة <b>contextmenu</b> مدعومة حاليًا في <b>Firefox</b> فقط.</div>
          <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <div className="mital">متال :  </div>
      <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="oncontextmenu" addClass="mt-3 mb-3" copie={true}  number={true}/>  
      <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
      <Result title="oncontextmenu" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <div id="oncontextmenu-js" onContextMenu={functionContextMenu}> 
            div element with Event oncontextmenu
          </div>
      </Result>
  </article>
</section>
    )
}
