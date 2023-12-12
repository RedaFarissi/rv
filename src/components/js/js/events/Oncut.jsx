import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Oncut(){
    // const a = document.getElementById("inP")
    // a.addEventListener('cut', function_name )
    
    // function function_name() {
    //   alert("You cut text!");
    // }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript oncut</h1>
    <article>
        <div className="style_divv mt-5">
            يقع حدث <b>oncut</b> عندما يقطع المستخدم محتوى عنصر ما.<br/>
            ملاحظة: على الرغم من أن الحدث <b>oncut</b> مدعوم من قبل جميع عناصر <b>HTML</b> ، إلا أنه ليس من الممكن في الواقع قطع محتوى ، على سبيل المثال ، عنصر <kbd>&lt;p&gt;</kbd> ، ما لم يقم العنصر بتعيين <b>content</b> قابل للتعديل على <bdi><b>"true"</b></bdi> .<br/>
            تلميح: يتم استخدام حدث <b>oncut</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> مع <code>type="text"</code>.<br/><br/>
            هناك ثلاث طرق لقص محتوى عنصر ما :
            <ul>
                <li>اضغط على <kbd className="bg-secondary">CTRL+X</kbd></li>
                <li> حدد "قص" من قائمة "تعديل" في متصفحك </li>
                <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد أمر "قص" </li>
            </ul>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oncut</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
            <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oncut</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"cut"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </div>
        <div className="mital">متال :  </div>
        <img src={images.js102_oncut} className="img"/>
        <div className="styleee">
            <input type="text" id="inP" value="cut this text"/>
        </div>
    </article>
</section>
    )
}
