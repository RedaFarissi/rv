import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Ondblclick(){
    // function myFunction() {
    //     const result = document.getElementById("result")
    //     result.innerHTML = "Hello World";
    //   }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript ondblclick</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>ondblclick</b> عندما ينقر المستخدم نقرًا مزدوجًا فوق أحد العناصر.
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">ondblclick</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
        </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">ondblclick</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
        </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
                <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"dblclick"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js98_ondblclick.png' %}" className="img"/>
        <div className="styleee"> 
            <p ondblclick="myFunction()">
                Double-click this paragraph to trigger a function.
            </p>
            <p id="result"> </p>
        </div>
    </article>
</section>
    )
}
