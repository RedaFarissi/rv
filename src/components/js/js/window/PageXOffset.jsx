export default function PageXOffset(){
    // function name_function2(){
    //     alert( "pageXOffset  = " + pageXOffset)
    // } 
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript pageXOffset</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>pageXOffset</b> بإرجاع وحدات البكسل التي تم تمرير مستند إليها من الزاوية اليسرى العليا من النافذة.<br/>
            تساوي الخاصية <b>pageXOffset</b> الخاصية <b>scrollX</b> .<br/>
            خاصية <b>pageXOffset</b> للقراءة فقط .<br/>
            يتم الوصول إلى  <b>pageXOffset</b> باستخدام :<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">  
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">pageXOffset</span></pre>
            </div> */}
            أو
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">  
                <pre><span style="color:var(--js-color)">pageXOffset</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js42_pageXOffset.png' %}" className="img"/>
        <div className="styleee">       
             <button onclick="name_function2()" style={{outline:"none",border:"1px solid black"}}>Click me to get scroolX</button>
        </div>
    </article>
</section>
    )
}
