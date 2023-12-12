import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onselect(){
    // function function_name() {
    //     alert("You selected some text!");
    //   }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onselect</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onselect</b> بعد تحديد جزء من النص في عنصر ما.<br/>
            يتم استخدام حدث <b>onselect</b> غالبًا في عناصر <kbd>&lt;input type = "text"&gt;</kbd> أو <kbd>&lt;textarea&gt;</kbd> .<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onselect</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
            <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onselect</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"select"</span>, function_name <span style="color:gold">)</span></pre>  
    </div> */}
        </p>
        
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js130_onselect.png' %}" className="img"/>
        <div className="styleee">
            Select some of the text: 
            <input type="text" value="Hello world!" onselect="function_name()"/>
        </div>
    </article>
</section>
    )
}