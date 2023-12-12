import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onfocus(){
    // function function_name(){
    //     const id = document.getElementById("InPuT")
    //     id.style.border = "5px solid red"
    //   }
    //   document.getElementById("InPuT2").onfocus = function(){
    //     const id = document.getElementById("InPuT2")
    //     id.style.border = "5px solid red"
    //     id.style.width = "50%"
    //     id.style.backgroundColor = "green"
    //     id.style.color = "white"
    //     id.style.fontSize = "23px"
    //   }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onfocus</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <bdi><b>onfocus</b></bdi> عندما يتم التركيز على عنصر.<br/>
            غالبًا ما يتم استخدام حدث <b>onfocus</b> مع <kbd>&lt;input&gt;</kbd> و <kbd>&lt;select&gt;</kbd> و <kbd>&lt;a&gt;</kbd>.<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;input</span> <span style="color:var(--js-color)">onfocus</span>=<span style="color:orange;">"<span style="color:gold">function_name()</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onfocus</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"focus"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
            <div className="alert alert-warning">
                <b>نصيحة</b> : حدث onfocus هو عكس حدث onblur .
            </div>
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js85_onfocus.png' %}" className="img"/>
        <div className="styleee img">
            <input type="text" id="InPuT" onfocus="function_name()"/>
        </div>
        <div className="mital"> متال 2 : </div>
        <img src="{% static 'js/js85_onfocus2.png' %}" className="img"/>
        <div className="styleee img">
            <input type="text" id="InPuT2"/>
        </div>
    </article>
</section>
    )
}
