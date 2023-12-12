import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onunload(){
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onunload</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onunload</b> بمجرد إلغاء تحميل الصفحة (أو إغلاق نافذة المتصفح).<br/>
            يحدث <b>onunload</b> عندما ينتقل المستخدم بعيدًا عن الصفحة (عن طريق النقر فوق ارتباط ، وإرسال نموذج ، وإغلاق نافذة المتصفح ، وما إلى ذلك).<br/>
            يتم أيضًا تشغيل حدث <b>onunload</b> عندما يعيد المستخدم تحميل الصفحة .<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;body</span> <span style="color:var(--js-color)">onunload</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onunload</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"unload"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js132_onunload} className="img"/>
    </article>
</section>
    )
}