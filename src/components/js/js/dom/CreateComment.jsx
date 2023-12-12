import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function CreateComment(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript createComment</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم طريقة <bdi><b>createComment()</b></bdi> بإنشاء تعليق وإرجاع عقدة التعليق <small><bdi>(comment node)</bdi></small>.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags)">const</span> comment = <span style="color:var(--js-color)">document</span>.<span style="color:gold">createComment(<span style="color: orange;">" text comment "</span>)</span>
        <span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:gold">appendChild(</span>comment<span style="color:gold">)</span></pre>
            </div> */}
        </div>
        <div className="mital">متال :  </div>
        <img src={images.js64_createComment} className="img"/>
        <ul className="mb-0"><li> بعد النقر على <kbd>F12</kbd> </li></ul>
        <img src={images.js64_createComment_2} className="img"/>
    </article>
</section>
    )
}