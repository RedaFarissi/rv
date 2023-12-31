import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onfocus(){
    // function function_name(){
    //     const id = document.getElementById("InPuT")
    //     id.style.border = "5px solid red"
    //   }
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
        <img src={images.js85_onfocus} className="img"/>
        <div className="styleee">
            <input type="text" id="InPuT" onfocus="function_name()"/>
        </div>
        <div className="mital"> متال 2 : </div>
        <img src={images.js85_onfocus2} className="img"/>
        <div className="styleee">
            <input type="text" id="InPuT2"/>
        </div>
    </article>
</section>
    )
}
