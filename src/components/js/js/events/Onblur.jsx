import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onblur(){
    // document.getElementById("InPuT2").onfocus = function(){
    //     const id = document.getElementById("InPuT2")
    //     id.style.border = "5px solid red"
    //     id.style.width = "50%"
    //     id.style.backgroundColor = "green"
    //     id.style.color = "white"
    //     id.style.fontSize = "23px"
    //   }
    //   document.getElementById("InPuT2").onblur = function(){
    //     const id = document.getElementById("InPuT2")
    //     id.style.border = "none"
    //     id.style.width = "25%"
    //     id.style.backgroundColor = "white"
    //     id.style.color = "black"
    //     id.style.fontSize = "16px"
    //     id.style.outline = "0.5px solid black"
    //   }
    const code1 = `<!-- Code HTML -->
<input onblur="function_name()" />`
    const code2 = `// Code JavaScript
object.onblur = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("blur", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onblur</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onblur</b> عندما يفقد الكائن التركيز.<br/>
            غالبًا ما يتم استخدام حدث <b>onblur</b> مع رمز التحقق من صحة النموذج (على سبيل المثال ، عندما يترك المستخدم حقل نموذج).<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-warning">
                <b>نصيحة</b> : حدث onblur هو عكس حدث onfocus.
            </div>
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js86_onblur} className="img"/>
        <div className="styleee">
            <input type="text" id="InPuT2"/>
        </div>
    </article>
</section>
    )
}
