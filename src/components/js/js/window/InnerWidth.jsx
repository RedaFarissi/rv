export default function InnerWidth(){
    //  document.getElementById("h2").innerHTML =  "innerWidth : " + innerWidth + "<br/>"
    //  document.getElementById("h2").innerHTML += "outerWidth : "+ window.outerWidth 

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript innerWidth</h1>
    <article>
        <div className="style_divv">
            تُرجع الخاصية <b>innerWidth</b> عرض منطقة محتوى النافذة.<br/>
            تعتبر الخاصية <b>innerWidth</b> للقراءة فقط.<br/>
            يتم الوصول إلى  <b>innerWidth</b> باستخدام :<br/>
            {/* <div className="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color);">innerWidth</span></pre>
            </div> */}
            أو 
            {/* <div className="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color);">window</span>.<span style="color:var(--js-color);">innerWidth</span></pre>
            </div> */}
        </div>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js39_innerWidth.png' %}" className="img"/>
        <div className="styleee img">
            <h2 id="h2"></h2>
        </div>
    </article>
</section>
    )
}