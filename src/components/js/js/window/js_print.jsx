{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript print </i></u></h1>
<div class="style_divv mt-5">
    تقوم طريقة <b><bdi>print()</bdi></b> بطباعة محتويات النافذة الحالية.<br>
    تفتح طريقة <b><bdi>print()</bdi></b> مربع حوار الطباعة ، مما يتيح للمستخدم تحديد خيارات الطباعة المفضلة.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">print()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js52_print.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <h2 id="h2">  <button onclick="window.print()" style="border:1px solid black;outline: none;border-radius:2px;padding:3px 9px;"> Print page </button> </h2>
    </div>
</div>
