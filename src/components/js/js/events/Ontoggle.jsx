import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Ontoggle(){
    // #DIV{background-color: red; color: white; min-height: 200px; border:2px solid brown; font-size: 35px;}

    // function function_name() {
    //     alert("The ontoggle event occured");
    //   }
    const code1 = `<!-- Code HTML -->
<details ontoggle="//script">`
    const code2 = `// Code JavaScript 
object.ontoggle = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("toggle", function_name )`
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
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
        <img src={images.js131_ontoggle} className="img"/>
        <div className="styleee">
            <div className="h2" style={{color: "red"}}>ontoggle event attribute (open the details)</div>
            <details ontoggle="function_name()">
                <summary style={{color:"blue"}}>
                    is the full form of HTML
                </summary> 
                <p>Hyper Text Markup Language</p>
                <div id="DIV"> DIV BOX </div>
            </details>
        </div>
    </article>
</section>
    )
}