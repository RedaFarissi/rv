export default function Body(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript body</h1>
    <article>
        <p className="style_divv mt-5">
         تقوم خاصية <b>body</b> بتعيين أو إرجاع عنصر المستند   <kbd>&lt;body&gt;</kbd> 
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">body</span></pre>
            </div> */}
            <div className="alert alert-danger mt-3">
                <b> تحذير </b>: يؤدي تعيين خاصية <b>body</b> إلى الكتابة فوق جميع العناصر الموجودة في المستند {"<"}body{">"}.
            </div>
            <div className="alert alert-warning mt-3">
                <b> ملاحظة </b>: الفرق بين <bdi>document.body</bdi> ة <bdi>document.documentElement</bdi>
                <ul>
                    <li> يُرجع document.body العنصر <kbd>&lt;body&gt;</kbd>. </li>
                    <li> تُرجع document.documentElement العنصر <kbd>&lt;html&gt;</kbd>.</li>
                </ul>
            </div>
        </p>
        <div className="mital"> متال 1 :  </div>
        <img src="{% static 'js/js60_body.png' %}" className="img"/>
        <img src="{% static 'js/js60_body 2.png' %}" className="img"/>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js60_body2.png' %}" className="img"/>
        <img src="{% static 'js/js60_body2 2.png' %}" className="img"/>
    </article>
</section>
    )
}