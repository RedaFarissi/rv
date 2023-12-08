{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript body </i></u></h1>
<div class="style_divv mt-5">
 تقوم خاصية <b>body</b> بتعيين أو إرجاع عنصر المستند   <kbd>&lt;body&gt;</kbd> 
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">body</span></pre>
    </div>
    <div class="alert alert-danger mt-3">
        <b> تحذير </b>: يؤدي تعيين خاصية <b>body</b> إلى الكتابة فوق جميع العناصر الموجودة في المستند <body>.
    </div>
    <div class="alert alert-warning mt-3">
        <b> ملاحظة </b>: الفرق بين <bdi>document.body</bdi> ة <bdi>document.documentElement</bdi>
        <ul>
            <li> يُرجع document.body العنصر <kbd>&lt;body&gt;</kbd>. </li>
            <li> تُرجع document.documentElement العنصر <kbd>&lt;html&gt;</kbd>.</li>
        </ul>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js60_body.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <img src="{% static 'js/js60_body 2.png' %}" class="img">
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js60_body2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <img src="{% static 'js/js60_body2 2.png' %}" class="img">
</div>