export default function Oninvalid(){
  // document.getElementById("Input").addEventListener("invalid", myFunction);
  // function myFunction() {
  //   alert("You must pick a number between 2 and 9. You chose: " + this.value);
  // }

  // function email_function(){
  //   alert(" Check your Email ");
  // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript oninvalid</h1>
  <article>

        <p className="style_divv mt-5">
            يقع الحدث <b>oninvalid</b> عندما يكون عنصر <kbd>&lt;input&gt;</kbd> القابل للإرسال غير صالح.<br/>
            على سبيل المثال ، يكون حقل الإدخال غير صالح إذا تم تعيين السمة المطلوبة وكان الحقل فارغًا (تحدد السمة المطلوبة أنه يجب ملء حقل الإدخال قبل إرسال النموذج).
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oninvalid</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oninvalid</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"invalid"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js104_oninvalid.png' %}" className="img"/>
        <div className="styleee img">
            <form action="./js/test_submit.php" method="GET">
                  Pick a number between 2 and 9: 
                  <input type="number" id="Input" name="quantity" min="2" max="9" required/>
                  <input type="submit" value="Submit"/>
            </form>
            <p>If you submit the form with a number that is less than 2 or greater than 9, an alert message will occur. </p>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src="{% static 'js/js104_oninvalid2.png' %}" className="img"/>
        <div className="styleee img">
            <form method="POST" action="./js/test_submit.php">
              <label for="Email"> Email : </label>
              <input type="email" id="Email" name="Email" oninvalid="email_function()" required/>
              <input type="submit" value="Submit"/>
            </form>
        </div>
    </article>
</section>
    )
}
