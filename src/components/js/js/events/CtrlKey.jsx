import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function OnctrlKey(){

  // #span1{ color: green; font-size: 24px;}
  // #span2{ color: red; font-size: 24px; }



  // function function_KeyPressed(event) {
  //   var r = document.getElementById("result")
  //   if (event.ctrlKey && event.code == "KeyI") {
  //     alert("you press Ctrl + i ")
  //   }else if (event.ctrlKey) {
  //     alert("you press Ctrl + " + event.code )
  //   }
  //   else {
  //     alert("The CTRL key was NOT pressed!")
  //   }
  // }
  // document.body.addEventListener("keypress", function_KeyPressed)

  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onctrlKey</h1>
  <article>
    <p className="style_divv mt-5">
        تقوم الخاصية <b>onctrlKey</b> بإرجاع قيمة منطقية تشير إلى ما إذا كان قد تم الضغط على مفتاح <kbd>CTRL</kbd> عند تشغيل حدث الماوس أم لا.<br/>
        هذه الخاصية للقراءة فقط.
        {/* <div className="codeStudio codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
            <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">ctrlKey</span></pre>  
        </div> */}
    </p>
    {/* 
    <div className="codeStudio alert bg-dark my-3 pb-0" dir="ltr" >
    <pre><span style="color:var(--violet-color)">if</span>(<span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">ctrlKey</span>){
        <span style="color:green">// JavaScript Code </span>
    }<span style="color:var(--violet-color)">else</span>{
        <span style="color:green">// JavaScript Code </span>
    }</pre>
  </div> */}

    <div className="mital"> متال :  </div>
    <img src="{% static 'js/js133_ctrlKey.png' %}" className="img"/>
    <div className="styleee">
        <p>    use event.ctrlKey width event  onkeypress    </p>
    </div>
  </article>
</section>
  )
}