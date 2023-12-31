import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function QuerySelectorAll(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript querySelectorAll</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> جميع العناصر التي تتطابق مع محدد (محددات) <b>CSS</b>.<br/>
            ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> NodeList.<br/>
            يطرح الأسلوب <bdi><b>querySelectorAll()</b></bdi> استثناء <b className="text-danger">SYNTAX_ERR</b> إذا كان المحدد (المحددات) غير صالح.
            <CodeHighlighter code={`document.querySelectorAll(CSS selectors)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js77_querySelectorAll} className="img"/>
        <div className="styleee" id="reSulta"> 
            <div className="child" style={{ backgroundColor: "red",color:"white",fontSize: "22px"}}> child 1 </div>
            <div className="child" style={{ backgroundColor: "red",color:"white",fontSize: "22px"}}> child 2 </div>
            <div className="child" style={{ backgroundColor: "red",color:"white",fontSize: "22px"}}> child 3 </div>
            <div>length = 3</div>
        </div>
    </article>
</section>
    )
}