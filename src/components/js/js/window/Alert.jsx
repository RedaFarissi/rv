export default function Alert(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript alert</h1>
    <article>
        <p className="style_divv mt-5">
            تعرض طريقة <b><bdi>alert()</bdi></b> مربع تنبيه برسالة وزر موافق.<br/>
            يتم استخدام طريقة <b><bdi>alert()</bdi></b> عندما تريد وصول المعلومات إلى المستخدم .<br/>
            يأخذ مربع التنبيه التركيز بعيدًا عن النافذة الحالية ، ويجبر المستخدم على قراءة الرسالة . يمنع المستخدم من الوصول إلى أجزاء أخرى من الصفحة حتى يتم إغلاق مربع التنبيه
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:gold;">alert()</span></pre>
            </div> */}
            أو
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold;">alert()</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js29_alert.png' %}" className="img"/>
        <div className="styleee img">
            <button onclick="add_alert()"> Click Here </button>
        </div>
    </article>
</section>
    )
}