import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function SetTimeout(){
    // function sayHello(){
    //     let res = document.getElementById("resut")
    //     res.innerHTML = `<b> Hello App </b>`
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript setTimeout</h1>
    <article>
        <p className="style_divv mt-5">
            تستدعي طريقة <bdi><b>setTimeout()</b></bdi> دالة بعد عدد من المللي ثانية.<br/>
            يتم تنفيذ <bdi><b>setTimeout()</b></bdi> مرة واحدة فقط.<br/>
            إذا كنت بحاجة إلى عمليات تنفيذ متكررة ، فاستخدم <bdi><b>setInterval()</b></bdi> بدلاً من ذلك.<br/>
            استخدم طريقة <bdi><b>clearTimeout()</b></bdi> لمنع بدء تشغيل الوظيفة.
            {/* <div className="codeStudio alert bg-dark pb-0 mt-3" dir="ltr">
                <pre><span style="color:gold;">setTimeout(<span className="text-light">function_name</span>,<span className="text-light">milliseconds</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال 1 :  </div>
        <img src={images.js151_setTimeout} className="img"/>
        <div className="styleee">
            <p> click button to run function one time after 3 seconds </p>
            <button onclick="setTimeout(sayHello,3000)" className="btn bg-primary"> click  </button>
            <div id="resut" className="mt-5"></div>
        </div>
    </article>
</section>
    )
}