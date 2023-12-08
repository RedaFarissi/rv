{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript innerWidth </i></u></h1>
<h3>1. innerWidth</h3>
<div className="style_divv">
    تُرجع الخاصية <b>innerWidth</b> عرض منطقة محتوى النافذة.<br/>
    تعتبر الخاصية <b>innerWidth</b> للقراءة فقط.<br/>
    يتم الوصول إلى  <b>innerWidth</b> باستخدام :<br/>
    <div className="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color);">innerWidth</span></pre>
    </div>
    أو 
    <div className="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color);">window</span>.<span style="color:var(--js-color);">innerWidth</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js39_innerWidth.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">
        <h2 id="h2"></h2>
    </div>
</div>

<script>
    document.getElementById("h2").innerHTML =  "innerWidth : " + innerWidth + "<br/>"
    document.getElementById("h2").innerHTML += "outerWidth : "+ window.outerWidth 
</script>