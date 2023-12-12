import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function BaseURI(){
    //document.getElementById("h2").innerHTML = document.baseURI ;
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript baseURI</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم الخاصية <b>baseURI</b> بإرجاع <b>URI</b> الأساسي للمستند.
        الخاصية <b>baseURI</b> للقراءة فقط.
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document.baseURI</span></pre>
            </div> */}
                الخاصية <b>baseURI</b> غير مدعومة في <bdi>Internet Explorer 11</bdi>
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js59_baseURI} className="img"/>
        <div className="styleee">
            <h2 id="h2"></h2>
        </div>
    </article>
</section>
    )
}