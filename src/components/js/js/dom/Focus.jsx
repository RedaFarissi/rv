import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Focus(){
    //document.getElementById("email_id").focus()
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
    <h1 className="heading-style heading-style-js-color">JavaScript focus</h1>
    <article>
        <p className="style_divv mt-5">
            تعطي طريقة <bdi><b>focus()</b></bdi> التركيز على عنصر (إذا كان من الممكن التركيز عليه).
            <CodeHighlighter code={`element.focus()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js81_focus} className="img"/>
        <div className="styleee"> 
            <input type="email" id="email_id"/> <br/>
            <input type="password" id="password"/>
        </div>
    </article>
</section>
    )
}