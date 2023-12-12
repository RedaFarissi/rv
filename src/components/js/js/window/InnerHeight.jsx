import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function InnerHeight(){
    // document.getElementById("h2").innerHTML =  "innerHeight : " + innerHeight + "<br/>" ;
    // document.getElementById("h2").innerHTML += "outerHeight : " + window.outerHeight  ;
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript innerHeight</h1>
    <article>
        <p className="style_divv">
            ترجع الخاصية <b>innerHeigth</b> ارتفاع منطقة محتوى النافذة.<br/>
            تتم قراءة خاصية <b>innerHeight</b> فقط.<br/>
            يتم الوصول إلى  <b>innerHeight</b> باستخدام :<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color);">innerHeight</span></pre>
            </div> */}
            أو 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color);">window</span>.<span style="color:var(--js-color);">innerHeight</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js39_innerWidth2} className="img"/>
        <div className="styleee">
            <h2 id="h2"></h2>
        </div>
    </article>
</section>
    )
}