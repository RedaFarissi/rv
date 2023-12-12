import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onbeforeprint(){
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onbeforeprint</h1>
    <article>
        <div className="style_divv mt-5">
            يقع الحدث <b>onbeforeprint</b> عندما تكون الصفحة على وشك الطباعة قبل ظهور مربع حوار الطباعة .<br/>
            يستعمل الحدث <b>onbeforeprint</b> لإجراء تعديل على موقعك قبل الطباعة .<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">&lt;body</span> <span style="color:var(--js-color)">onbeforeprint</span>=<span style="color:orange">"function_name()"</span><span style="color:var(--html-color-tags)">&gt;</span></pre>
            </div> */}
        </div>
        <div className="mital"> متال :  </div>
        <img src={images.js53_beforeprint} className="img"/>
        <img src={images.js53_beforeprint_2} className="img"/>
        <img src={images.js53_beforeprint_3} className="img"/>
    </article>
</section>
    )
}