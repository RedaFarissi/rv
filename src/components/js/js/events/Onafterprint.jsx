import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onafterprint(){
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onafterprint</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onafterprint</b>  بعد الطباعة مباشرة .<br/>
            <b>تلميح</b>: حدث <b>onafterprint</b> هو عكس حدث <b>onbeforeprint</b>.
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">&lt;body</span> <span style="color:var(--js-color)">onafterprint</span>=<span style="color:orange">"function_name()"</span><span style="color:var(--html-color-tags)">&gt;</span></pre>
            </div> */}
        </p>

        <div className="mital"> متال :  </div>
        <ul>
            <li>في المتال التالي قمنا بستعمال <b>onbeforeprint</b> لتغيير التصميم قبل الطباعة .</li>
            <li>تم <b>onafterprint</b> لإعدة التصميم إلى شكله الأصلي بعد الطباعة . </li>
        </ul>
        <img src={images.js54_afterprint} className="img"/>
        <img src={images.js54_afterprint_2} className="img"/>
        <img src={images.js54_afterprint_3} className="img"/>
        <img src={images.js54_afterprint_2} className="img"/>
    </article>
</section>
    )
}