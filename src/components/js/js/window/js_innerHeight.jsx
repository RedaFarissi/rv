{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript innerHeight </i></u></h1>
<h3>1. innerHeight</h3>
<div className="style_divv">
    ترجع الخاصية <b>innerHeigth</b> ارتفاع منطقة محتوى النافذة.<br/>
    تتم قراءة خاصية <b>innerHeight</b> فقط.<br/>
    يتم الوصول إلى  <b>innerHeight</b> باستخدام :<br/>
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color);">innerHeight</span></pre>
    </div>
    أو 
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color);">window</span>.<span style="color:var(--js-color);">innerHeight</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js39_innerWidth2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">
        <h2 id="h2"></h2>
    </div>
</div>
<script>
    document.getElementById("h2").innerHTML =  "innerHeight : " + innerHeight + "<br/>" ;
    document.getElementById("h2").innerHTML += "outerHeight : " + window.outerHeight  ;
</script>