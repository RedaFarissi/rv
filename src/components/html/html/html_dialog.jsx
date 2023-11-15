{% load static %}
<h1 class="heading-style-html"><u><i>HTML Dialog</i></u></h1>
<div class="style_divv mt-5">
    تحدد الوسم <b>dialog</b> مربع صندوق أو نافذة فرعية.<br>
    يسهّل عنصر <b>dialog</b> إنشاء مربعات حوار وشروط منبثقة على صفحة ويب. <br>
    لستعمال الوسم <b>dialog</b> يجب إستخدام السمة <b>open</b> والتي هي الأخرى تستقبل قيمتين <b>true</b> و <b>false</b>
    عند إستخدام الوسم <b>dialog</b> بدون السمة <b>open</b> ستكون العناصر داخل الوسم مخفية 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">    
<pre><b style="color:var(--html-color-tags)">&lt;dialog</b> <span style="color:var(--js-color)">open</span>=<span style="color:orange">"true/false"</span><b style="color:var(--html-color-tags)">&gt;</b> 
    <span style="color:green">&lt;!--HTML content--&gt;</span>
<b style="color:var(--html-color-tags)">&lt;/dialog&gt;</b></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html43_dialog.png' %}" class="img"/>
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html43_dialog 2.png' %}" class="img"/>
</div>