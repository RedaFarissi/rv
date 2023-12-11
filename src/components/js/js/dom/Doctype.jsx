export default function Doctype(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript doctype</h1>
    <article>
        <div className="style_divv mt-5">
            تُرجع خاصية  <b>DOCTYPE</b> للمستند ككائن <bdi><small>(DocumentType)</small></bdi>.<br/>
            تُرجع خاصية <b>DOCTYPE</b> القيمة فارغة إذا لم يكن للمستند نوع مستند.<br/>
            خاصية <b>DOCTYPE</b> للقراءة فقط.<br/>
            تُرجع خاصية <b><bdi>DOCTYPE.name</bdi></b> اسم <b>DOCTYPE</b>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">doctype</span></pre>
            </div> */}
        </div>
        
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js68_docktype.png' %}" className="img"/>
        <div className="styleee img">
           html
        </div>
    </article>
</section>
    )
}