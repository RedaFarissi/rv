import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onreset(){
    // function function_name() {
    //     var form = document.getElementById("id_Form")
    //     form.reset();
    // }

    // function function_N() {
    //     var form = document.getElementById("myForm")
    //     form.reset();
    // }
    
    // var myForm = document.getElementById("myForm")
    // myForm.onreset = function(){
    //     alert("the form was reset")
    // }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onreset</h1>
    <article>
        <p className="style_divv mt-5">
            طريقة <bdi><b>reset()</b></bdi> تعيد تعيين قيم جميع العناصر في نموذج (مثل النقر فوق زر إعادة التعيين).<br/><br/>
            استخدم طريقة <bdi><b>submit()</b></bdi> لإرسال النموذج.
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;form</span> <span style="color:var(--js-color)">onreset</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onreset</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"reset"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        
        <div className="mital"> متال :  </div>
        <ul><li> الخاصية <bdi>reset()</bdi> بدون Event </li></ul>
        <img src="{% static 'js/js128_onreset.png' %}" className="img"/>
        <div className="styleee">
            <p>Enter some text in the fields below,then press the "Reset form" button to reset the form.</p>
            <form id="id_Form">
              First name: <input type="text" name="fname"/><br/>
              Last name: <input type="text" name="lname"/><br/><br/>
              <button type="button" onclick="function_name()"> Reset form </button>
            </form>
        </div>    
        <div className="mital"> متال 2 :  </div>
        <ul><li> الخاصية <bdi>reset()</bdi> مع ال <bdi>Event onreset</bdi></li></ul>
        <img src="{% static 'js/js128_onreset2.png' %}" className="img"/>
        <div className="styleee">
            <form id="myForm">
              <label for="email">Email : </label>
              <input type="email" id="email" name="email"/>
              <br/>
              <label for="password">Password : </label>
              <input type="password" name="password" id="password"/><br/>
        
              <input type="reset" value="reset" onreset="function_N()"/>
            </form>
        </div>
    </article>
</section>
    )
}
