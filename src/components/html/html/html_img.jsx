{% load static %}
<h1 class="heading-style-html"><u><i>  HTML img </i></u></h1>
<div class="style_divv mt-5">
    الوسم  <kbd>&lt;img&gt;</kbd> هو وسم  فردي اي ليس له وسم إغلاق . ويستعمل لإضافة الصور لموقعك .  <br>
    <ul>
        <li> لعرض الصورة داخل صفحتك يجب عليك إستخدام سمة المصدر <b>src attribute</b> حيث أن <b>src</b> هي إختصار لـ <b>source</b> .</li>
        <li> نستخدم الوسم <kbd>&lt;img&gt;</kbd> على هذا النحو <kbd>&lt;img src="url"&gt;</kbd> لعرض صورة في الصفحة. مكان الكلمة <b>url</b> نضع مسار الصورة التي نريد عرضها.</li>
    </ul>
    <div class="codeStudio alert bg-dark" dir="ltr" style="padding-bottom:0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;img</span> <span style="color:var(--js-color)">src</span>=<span style="color:orange;">"name_img.type"</span> <span style="color:var(--js-color)">alt</span>=<span style="color:orange;">"description"</span><span style="color:var(--html-color-tags)">/&gt;</span>  </pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html20_img.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html20_img 2.png' %}" class="img">
    <ul>  
        <li> يمكنك تحكم بحجم صورة وتعديل على شكلها بستخدام <b>CSS</b> . </li>
        <li> السمة <b>alt</b> تستعمل  لإضهار رسالة للمستعمل في حالة حدت مشكل ولم يتمكن لمتصفح من عرض الصورة .</li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 : </div>
    <ul><li>قمنا بكتابة مسار خاطئ لصورة لتتمكن من رؤية فائدة <b>alt</b></li></ul>
    <h4 style="color:green"> الكود </h4> 
    <img src="{% static 'html/html20_img2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html20_img2 2.png' %}" class="img">
</div>