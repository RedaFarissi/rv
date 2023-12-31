import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onselect(){
    // function function_name() {
    //     alert("You selected some text!");
    //   }
    const code1 = `<!-- Code HTML -->
<element onselect="//script">`
    const code2 = `// Code JavaScript 
object.onselect = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("select", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onselect</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onselect</b> بعد تحديد جزء من النص في عنصر ما.<br/>
            يتم استخدام حدث <b>onselect</b> غالبًا في عناصر <kbd>&lt;input type = "text"&gt;</kbd> أو <kbd>&lt;textarea&gt;</kbd> .<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        
        <div className="mital"> متال :  </div>
        <img src={images.js130_onselect} className="img"/>
        <div className="styleee">
            Select some of the text: 
            <input type="text" value="Hello world!" onselect="function_name()"/>
        </div>
    </article>
</section>
    )
}