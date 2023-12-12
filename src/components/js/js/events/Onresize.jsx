import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onresize(){
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onresize</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onresize</b> عندما يتم تغيير حجم نافذة المتصفح.<br/>
            للحصول على حجم عنصر ، استخدم خصائص <b>clientWidth</b> ، و <b>clientHeight</b> ، و <b>innerWidth</b> ، و <b>innerHeight</b> ، و <b>OuterWidth</b> ، و <b>OuterHeight</b> ، و <b>offsetWidth</b> و / أو <b>offsetHeight</b>.
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;body</span> <span style="color:var(--js-color)">onresize</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onresize</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
            <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"resize"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>    
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js127_onresize.png' %}" className="img"/>
    </article>
</section>
    )
}