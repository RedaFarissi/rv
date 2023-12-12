import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function MatchMedia(){
    // const id = document.getElementById("h2")
    // if(matchMedia("(max-width: 500px)").matches){
    //     id.innerHTML = "عرض صفحتك يقل عن  <bdi>500px</bdi> "
    // }else{
    //     id.innerHTML = "عرض صفحتك يتجاوز <bdi>500px</bdi> "
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript matchMedia</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم طريقة <bdi><b>matchMedia()</b></bdi> بإرجاع <b>MediaQueryList</b> بالنتائج من الاستعلام .<br/>
            كن أن تكون استعلامات الوسائط الخاصة بطريقة <bdi><b>matchMedia()</b></bdi> أيًا من ميزات الوسائط الخاصة بقاعدة <b>CSS</b> <bdi><b>@media</b></bdi> ، مثل <b>min-height</b> و <b>min-width</b> و <b> orientation</b>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">matchMedia(<span style="color:orange">"mediaQuery"</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js50_matchMedia} className="img"/>
        <div className="styleee img">       
            <h2  id="h2" dir="rtl"></h2>
        </div>
    </article>
</section>
    )
}