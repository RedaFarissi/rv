{% load static %} 

<h1 class="heading-style-js"><u><i> JavaScript beforeprint </i></u></h1>
<div class="style_divv mt-5">
    يقع الحدث <b>onbeforeprint</b> عندما تكون الصفحة على وشك الطباعة قبل ظهور مربع حوار الطباعة .<br>
    يستعمل الحدث <b>onbeforeprint</b> لإجراء تعديل على موقعك قبل الطباعة .<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">&lt;body</span> <span style="color:var(--js-color)">onbeforeprint</span>=<span style="color:orange">"function_name()"</span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js53_beforeprint.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <img src="{% static 'js/js53_beforeprint 2.png' %}" class="img">
    <h4 style="color:green"> عند الطباعة  </h4>
    <img src="{% static 'js/js53_beforeprint 3.png' %}" class="img">
</div>