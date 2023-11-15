{% load static %}
<h1 class="heading-style-html"><u><i> HTML bdi</i></u></h1>
<div class="style_divv mt-5">
    <b>BDI</b> تعني العزلة ثنائية الاتجاه.
    تعزل العلامة <kbd>&lt;bdi&gt;</kbd> جزءًا من النص يمكن تنسيقه في اتجاه مختلف عن النص الآخر خارجه.
    يكون هذا العنصر مفيدًا عند تضمين محتوى من إنشاء المستخدم مع اتجاه نص غير معروف.
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;bdi&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/bdi&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'html/html26_bdi.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee img">
    <b>
        <div>User <bdi>hrefs</bdi>: 60 points</div>
        <div>User <bdi>jdoe</bdi>: 80 points</div>
        <div>User <bdi>إيان</bdi>: 90 points</div>
    </b>
</div>
</div>
