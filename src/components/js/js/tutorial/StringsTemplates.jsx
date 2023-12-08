export default function StringsTemplates(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color"> JavaScript Strings Templates </h1>
    <article>
        <h2 className="title-h2">1.Back-Tics Syntax</h2>
        <p className="style_divv">
            تستخدم القوالب الحرفية (<small>Template Literals</small>) علامات التجزئة(<small>back-ticks</small>) (`) بدلاً من علامات الاقتباس (<small>quotes</small>) (" ") لتحديد سلسلة
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags);">let</span> name = <span style="color:orange;">`Reda Eskouni`</span>;</pre>
            </div> */}
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:var(--html-color-tags);">let</span> name = <span style="color:orange;">`"'Reda'"`</span>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js10_Templates.png' %}" className="img"/>
        <img src="{% static 'js/js10_Templates 2.png' %}" className="img"/>
    </article>
    <article>
        <h2 className="title-h2">2. Interpolation</h2>
        <p className="style_divv">
            توفر القوالب الحرفية (<small>Template Literals</small>) طريقة سهلة لاستيفاء المتغيرات والتعبيرات في سلاسل.<br/>
            هذه الطريقة تسمى <b>string interpolation</b>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
            <pre>    <span style="color:orange">`</span> <span style="color:var(--html-color-tags)"> ${<span style="color:antiquewhite">javascript code</span>}</span>  <span style="color:orange">`</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js10_Templates2.png' %}" className="img"/>
        <div className="styleee">
            <h2>Hello Mr Reda Eskouni</h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src="{% static 'js/js10_Templates3.png' %}" className="img"/>
        <div className="styleee">
            <h2> Hello Mr Reda Eskouni 25years </h2>
        </div>
    </article>
</section>
    )
}