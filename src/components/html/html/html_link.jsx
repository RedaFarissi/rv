{% load static %}
<h1 class="heading-style-html"><u><i> HTML link  </i></u></h1>
<div class="style_divv">
    يحدد الوسم <kbd>&lt;link&gt;</kbd> العلاقة بين المستند الحالي ومورد خارجي  .<br>
    غالبا ما يستخدم الوسم <kbd>&lt;link&gt;</kbd> للارتباط بأوراق الأنماط الخارجية أو لإضافة رمز <b>favicon</b> إلى موقعك على الويب.<br>
    يتم وضع الوسم <kbd>&lt;link&gt;</kbd>  داخل الوسم <kbd>&lt;head&gt;</kbd>  و هو وسم فارغ، يحتوي على السمات فقط.
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<ul><li>يجب أن تكون الصورة من نوع <b>icon</b> داخل نفس المجلد الذي يحتوي على ملف <b>HTML</b></li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'html/html41_link.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'html/html41_link 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">مثال 2 : </div>
<ul><li> في هاذ المتال قمنا بإنشاء ملف <b>CSS</b> داخل نفس مجلد الدي يحتوي على ملف <b>HTML</b> </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'html/html41_link2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'html/html41_link2 2.png' %}" class="img">
</div>