{% load static %} 
<h1 className="heading-style-js"><u><i>  JavaScript title </i></u></h1>
<div className="style_divv mt-5">
    تقوم خاصية <b>title</b> بتعيين أو إرجاع عنوان المستند.
    <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">title</span></pre>
    </div>
    <b style="text-shadow: 0.5px 0.5px red;">أو</b>
    <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">title</span> = <span style="color:orange">"A new title"</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js79_title.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> 
        document title
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js79_title2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> 
        JAVASCRIPT TITLE
    </div>
</div>