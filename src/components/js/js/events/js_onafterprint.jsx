{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript afterprint </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onafterprint</b>  بعد الطباعة مباشرة .<br>
    <b>تلميح</b>: حدث <b>onafterprint</b> هو عكس حدث <b>onbeforeprint</b>.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">&lt;body</span> <span style="color:var(--js-color)">onafterprint</span>=<span style="color:orange">"function_name()"</span><span style="color:var(--html-color-tags)">&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <ul>
        <li>في المتال التالي قمنا بستعمال <b>onbeforeprint</b> لتغيير التصميم قبل الطباعة .</li>
        <li>تم <b>onafterprint</b> لإعدة التصميم إلى شكله الأصلي بعد الطباعة . </li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js54_afterprint.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <img src="{% static 'js/js54_afterprint 2.png' %}" class="img">
    <h4 style="color:green"> عند الطباعة  </h4>
    <img src="{% static 'js/js54_afterprint 3.png' %}" class="img">
    <h4 style="color:green"> عند نهاية الطباعة  </h4>
    <img src="{% static 'js/js54_afterprint 2.png' %}" class="img">
</div>
