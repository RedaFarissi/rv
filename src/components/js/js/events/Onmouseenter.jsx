import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onmouseenter(){
    // function big(x) {
    //     x.style.height = "64px";
    //     x.style.width = "64px";
    //   }
  
    //   function small(x) {
    //     x.style.height = "32px";
    //     x.style.width = "32px";
    //   }
  
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmouseenter</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث الحدث <b>onmouseenter</b> عند نقل مؤشر الماوس إلى عنصر.<br/>
             غالبا ما يتم استخدام هذا الحدث مع الحدث <b>onmouseleave</b> ، والذي يحدث عندما يتم نقل مؤشر الماوس خارج عنصر.<br/>
             <div className="alert alert-warning my-3">
                 <div className="h4">نصيحة :</div>
                 يشبه حدث onmouseenter حدث onmouseover. الفرق الوحيد هو أن الحدث <b>onmouseenter</b> لا ينشر التسلسل الهرمي للمستند.
             </div>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onmouseenter</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onmouseenter</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"mouseenter"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js111_onmouseenter.png' %}" className="img"/>
        <div className="styleee img">
            <img id="img" onmouseenter="big(this)" onmouseleave="small(this)" src="./js/hajime.jpg" style={{width:"30px",height:"30px",borderRadius:"50%"}}/>
            <p> The function big() is triggered when the  moves the mouse pointer onto the image.</p>
            <p> The function small() is triggered when  the mouse pointer is moved out of the image.</p>
        </div>
    </article>
</section>
    )
}
