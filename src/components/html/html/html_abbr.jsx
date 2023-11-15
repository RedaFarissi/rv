{% load static %}

<h1 class="heading-style-html"><u><i>  HTML abbr</i></u></h1>
<div class="style_divv mt-5">
    نستخدم الوسم <kbd>&lt;abbr&gt;</kbd> على هذا النحو <kbd>&lt;abbr title="hidden"&gt; visible &lt;/abbr&gt;</kbd> لوضع إسم مختصر <small><small>(Abbreviation)</small></small> بدل الإسم الكامل و عند تمرير الفأرة فوقه يقوم المتصفح بإظهار الإسم الكامل كلميح فوقها.
    <ul>
        <li style="margin-bottom:12px;">مكان الكلمة <b>visible</b> نضع النص الذي نريده أن يظهر أمام المستخدم.</li>
        <li style="margin-bottom:12px;">مكان الكلمة <b>hidden</b> نضع النص الذي نريده أن يظهر عند تمرير الماوس فوقه النص الظاهر في الصفحة.</li>
        <li style="margin-bottom:12px;">يملك سمة واحدة هي ال <b>Attribute title</b> التي نضيفها له لكتابة النص المخفي الذي سيتم إظهاره عند تمرير الماوس فوق الوسم.</li>
    </ul>
    <div class="codeStudio alert bg-dark" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;abbr</span> <span style="color:var(--js-color);">title</span>=<span style="color:orange;">"<bdi>عنوان</bdi>"</span><span style="color:rgb(50,99,250);">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/abbr&gt;</span> </pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <ul><li>عند تمرير الماوس فوق العنصر سيضهر title</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html10_abbr.png' %}" class="img">
    <h4 style="color:green">  بعد تشغيل الكود  </h4>
    <div class="styleee img">
        <abbr title="kilogram"><b>KG</b></abbr>
        <br>
        <abbr title="gram"><b>G</b></abbr>
    </div>
</div>