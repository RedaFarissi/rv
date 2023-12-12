import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onpaste(){
    // #input_test{ width: 50%;}

    // var input = document.getElementById("input_test") 
    // input.value = "Try to paste something in here"
    
    // function passer() {
    //   var result =   document.getElementById("result")
    //   result.innerHTML += "You pasted text<br/>"
    // }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onpaste</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onpaste</b> عندما يلصق المستخدم بعض المحتوى في عنصر.<br/>
             على الرغم من أن حدث <b>onpaste</b> مدعوم من قبل جميع عناصر <b>HTML</b> ، إلا أنه ليس من الممكن في الواقع لصق بعض المحتوى ، على سبيل المثال ، عنصر <kbd>&lt;p&gt;</kbd> ، ما لم يقم العنصر بتعيين المحتوى القابل للتعديل على <code>contenteditable="true"</code> .<br/>
            يتم استخدام حدث <b>onpaste</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> من <code>type="text"</code>.<br/>

            <div className="alert alert-warning text-dark my-3">
                <b className="d-block my-2">نصيحة</b>:<br/>
                هناك ثلاث طرق للصق بعض المحتوى في عنصر:<br/>
                <ul>
                    <li> اضغط على <kbd className="bg-secondary">Ctrl + V</kbd></li>
                    <li>  حدد "paste" من قائمة "تعديل" في متصفحك</li>
                    <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد الأمر <b>paste</b>.</li>
                </ul>
            </div>

            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onpaste</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onpaste</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"paste"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js124_onpaste.png' %}" className="img"/>
        <div className="styleee">  
            <input id="input_test" type="text" onpaste="passer()"/>
            <p id="result"></p>
        </div>
    </article>
</section>
    )
}
