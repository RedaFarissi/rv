import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onpagehide(){
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onpagehide</h1>
    <article>
        <div className="style_divv mt-5">
            يقع حدث <b>onpagehide</b> عندما ينتقل المستخدم بعيدًا عن صفحة ويب.<br/>
            هناك عدة طرق للتنقل بعيدًا عن الصفحة. على سبيل المثال ، بالنقر فوق ارتباط ، وتحديث الصفحة ، وإرسال نموذج ، وإغلاق نافذة المتصفح ، وما إلى ذلك.<br/>
            يتم استخدام حدث <b>onpagehide</b> أحيانًا بدلاً من حدث <b>onunload</b> ، حيث يتسبب حدث <b>onunload</b> في عدم تخزين الصفحة مؤقتًا.<br/>
            لمعرفة ما إذا تم تحميل الصفحة مباشرة من الخادم أو إذا كانت الصفحة مخزنة مؤقتًا ، يمكنك استخدام الخاصية المستمرة لكائن <b>PageTransitionEvent</b> هذه الخاصية تعود صحيحة إذا تم تخزين الصفحة في ذاكرة التخزين المؤقت بواسطة المتصفح ، وتكون هذه الخاصية خطأ في الحالات الأخرى.<br/>
        
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onpagehide</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onpagehide</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"pagehide"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </div>
        <div className="mital"> متال :  </div>
        <img src={images.js123_onpagehide} className="img"/>
    </article>
</section>
    )
}