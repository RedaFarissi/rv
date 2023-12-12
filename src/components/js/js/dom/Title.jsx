import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Title(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript title</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم خاصية <b>title</b> بتعيين أو إرجاع عنوان المستند.
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">title</span></pre>
            </div> */}
            <b>أو</b>
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">title</span> = <span style="color:orange">"A new title"</span></pre>
            </div> */}
        </div>
        <div className="mital">متال :  </div>
        <img src={images.js79_title} className="img"/>
        <div className="styleee"> 
            document title
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js79_title2} className="img"/>
        <div className="styleee"> 
            JAVASCRIPT TITLE
        </div>
    </article>
</section>
    )
}