{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript sessionStorage </i></u></h1>
<div className="style_divv mt-5">
    يتيح لك كائن <b>sessionStorage</b> تخزين أزواج المفتاح / القيمة في التصفح .<br/>
    يخزن كائن sessionStorage البيانات لجلسة واحدة فقط.<br/>
    (يتم حذف البيانات عند إغلاق المتصفح).<br/>
    لحفظ البيانات في <b>sessionStorage</b> إستخدم :
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">sessionStorage</span>.<span style="color:gold">setItem(</span><span style="color:orange">"key"</span>, value<span style="color:gold">)</span></pre>
    </div>
    لقراءة البيانات من <b>sessionStorage</b>  إستخدم :
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">sessionStorage</span>.<span style="color:gold">getItem(</span><span style="color:orange">"key"</span><span style="color:gold">)</span></pre>
    </div>
    لإزالة البيانات من <b>sessionStorage</b>  إستخدم :
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">sessionStorage</span>.<span style="color:gold">removeItem(</span><span style="color:orange">"key"</span><span style="color:gold">)</span></pre>
    </div>
    لإزالة الكل البيانات المخزنة داخل <b>sessionStorage</b>  إستخدم :
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">sessionStorage</span>.<span style="color:gold">clear()</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js49_sessionStorage.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2>Reda</h2>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js49_sessionStorage2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2> Reda <br/> null </h2>
    </div>
</div>