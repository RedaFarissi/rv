{% load static %}
<h1  class="heading-style-html"><u><i>HTML bdo</i></u></h1>
<div class="style_divv mt-5">
    نستخدم الوسم <kbd>&lt;bdo&gt;</kbd> على هذا النحو <kbd>&lt;bdo dir="direction"&gt;</kbd> لتغيير جهة عرض النص و اتجاه كل حرف بداخله أيضاً. مكان الكلمة <b>text</b> نمرر النص الذي نريد تحديد جهة عرضه و عرض كل حرف فيه. مكان الكلمة <b>direction</b> نمرر قيمة مهيئة مسبقاً تحدد الإتجاه الذي نريد عرض النص بشكل عام و كل حرف موجود فيه.
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;bdo&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/bdo&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html27_bdo.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <bdo dir="ltr">   
            الكتابة بالعربية تكون من اليمين
        </bdo>
    </div>
</div>