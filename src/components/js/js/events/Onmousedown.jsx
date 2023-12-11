export default function Onmousedown(){

    // #para{ font-size: 23px; color: black; padding: 1rem; }

    // function mouseDown() {
    //     document.getElementById("para").style.color = "red";
    //   }
  
    //   function mouseUp() {
    //     document.getElementById("para").style.color = "green";
    //   }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onmousedown</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onmousedown</b> عندما يضغط المستخدم على زر الماوس فوق عنصر.<br/>
            <div className="alert bg-info my-3 text-black">
                <b>نصيحة</b> : ترتيب الأحداث المتعلقة بحدث <b>onmousedown</b> (لزر الماوس الأيسر / الأوسط):<br/><br/>
                <ol>
                    <li><b>onmousedown</b> : عندما يضغط المستخدم على زر الماوس فوق عنصر .</li>
                    <li><b>onmouseup</b> : عندما يضغط المستخدم على زر الماوس فوق عنصر و رفع الماوس </li>
                    <li><b>onclick</b> : يحدت الحدت بعد الإنتهاء من الحدت لا <b>onmousedown</b> و <b>onmouseup</b> </li>
                </ol>
            </div> 
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onmousedown</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onmousedown</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"mousedown"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js110_onmouseup.png' %}" className="img"/>
        <div className="styleee img">
            <p id="para" onmousedown="mouseDown()" onmouseup="mouseUp()">Click the text! The mouseDown() function is triggered when the mouse button is pressed down over this paragraph, and sets the colorof the text to red. The mouseUp() function istriggered when the mouse button is released,and sets the color of the text to green.  </p>
        </div>
    </article>
</section>
    )
}
