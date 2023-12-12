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
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onblur</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onblur</b> عندما يفقد الكائن التركيز.<br/>
            غالبًا ما يتم استخدام حدث <b>onblur</b> مع رمز التحقق من صحة النموذج (على سبيل المثال ، عندما يترك المستخدم حقل نموذج).<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;input</span> <span style="color:var(--js-color)">onblur</span>=<span style="color:orange;">"<span style="color:gold">function_name()</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onblur</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"blur"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
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
