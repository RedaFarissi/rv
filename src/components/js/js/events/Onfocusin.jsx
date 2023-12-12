import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onfocusin(){
    // // Focus = Changes the background color of input to green
    // function inf() {
    //   document.getElementById("Input").style.background = "green";
    // }
    // // No focus = Changes the background color of input to red
    // function outf() {
    //   document.getElementById("Input").style.background = "red";
    // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onfocusin</h1>
  <article>
      <p className="style_divv mt-5">
          يحدث حدث <b>onfocusin</b> عندما يكون عنصر على وشك الحصول على التركيز.<br/>
          حدث <b>onfocusin</b> مشابه لحدث <b>onfocus</b>. الاختلاف الرئيسي هو أن حدث <b>onfocus</b> لا ينفجر. لذلك ، إذا كنت تريد معرفة ما إذا كان عنصر ما أو طفله يحصل على التركيز ، فيجب عليك استخدام حدث <b>onfocusin</b>.<br/>
          حدث <b>onfocusin</b> هو عكس حدث <b>onfocusout</b>.
          {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
      <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onfocusin</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onfocusin</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"focusin"</span>, function_name <span style="color:gold">)</span></pre>  
          </div> */}
      </p>
      <div className="mital"> متال :  </div>
      <img src="{% static 'js/js118_onfocusin.png' %}" className="img"/>
      <div className="styleee">      
          Enter your name: 
          <input type="email" id="Input" onfocusin="inf()" onfocusout="outf()"/>
      </div>
  </article>
</section>
    )
}
