import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onbeforeprint(){
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onbeforeprint</h1>
    <article>
        <p className="style_divv mt-5">
            يقع الحدث <b>onbeforeprint</b> عندما تكون الصفحة على وشك الطباعة قبل ظهور مربع حوار الطباعة .<br/>
            يستعمل الحدث <b>onbeforeprint</b> لإجراء تعديل على موقعك قبل الطباعة .<br/>
            <CodeHighlighter code={`<body onbeforeprint="function_name()">`} language="html" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js53_beforeprint} className="img"/>
        <img src={images.js53_beforeprint_2} className="img"/>
        <img src={images.js53_beforeprint_3} className="img"/>
    </article>
</section>
    )
}