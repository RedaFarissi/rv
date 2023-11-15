{% load static %}
<h1 class="heading-style-html"><u><i>   HTML blockquote</i></u></h1>
<div class="style_divv mt-5">
    عند كتابتك لمقالة أو خبر ما أحيانا تحتاج اضافة اقتباس أو نص مأخود من مكان أخر ، ومن أجل ذلك يستخدم <b>blockquote</b>  في هذا الدرس سنشرح كيفيه استخدامهم.
    <br/>
    <li style="margin-bottom:12px;">إذا أردت العرض النص مقتبس على سطر منفرد مع عرض هامش حوله من كل الجهات, يمكنك وضع النص بداخل <br><kbd>&lt;blockquote&gt; &lt;/blockquote&gt;</kbd>.</li>
    <li style="margin-bottom:12px;">إذا كان الإقتباس الموضوع في الصفحة مأخوذ من موقع آخر, قم بذكر رابط الموقع الذي نسخت الإقتباس منه بداخل الخاصية <b>cite</b> التي يملكها الوسم <kbd> &lt;blockquote&gt;</kbd> لأن هذا الأمر سيجعل الموقع المقتبس منه ذو أهمية أكثر بالنسبة لمحركات البحث و بالتالي تكون تفيد الموقع الذي نسخت الإقتباس منه</li>
    <div class="codeStudio alert bg-dark" dir="ltr" style="padding-bottom: 0px;">
        <pre><bdi><span style="color:var(--html-color-tags)">&lt;blockquote</span></bdi> <bdi><span style="color:var(--js-color)">cite</span>=<span style="color:orange;">"url"</span><span style="color:var(--html-color-tags)">&gt;</span></bdi> content <bdi><span style="color:var(--html-color-tags)">&lt;/blockquote&gt;</span></bdi></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>    
    <img src="{% static 'html/html11_blockquote.png' %}" class="img">
    <h4 style="color:green">  بعد تشغيل الكود  </h4>
    <div class="styleee img" style="padding-left:35px">
        <blockquote cite="https://www.google.com/"> google</blockquote>
    </div>
</div>