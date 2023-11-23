{% load static %} 
<h1 class="heading-style-css"><u><i> CSS  font-style </i></u></h1>
<div class="style_divv mt-5">
    الخاصية <b>font-style</b> في <b>CSS</b> تُحدِّد إن كان يجب أن يكون شكل الخط عاديًا (normal) أو مائلًا (italic) أو منحرفًا (oblique). وسيختار المتصفح النسخة الأنسب من نوع الخط <b>font-family</b>.<br>
    يكون للخط المائل بعض سمات الكتابة اليدوية، ويستهلك عادةً مسافة أفقية أقل من الخط العادي، بينما الخط المنحرف (oblique) يُمثِّل نسخةً منحرفة بزاوية معيّنة من الخط العادي؛ وعند عدم توافر نسخة مائلة مخصصة من الخط، فسيكون شكل الخط المائل والمنحرف سواءً.
    <ul>
        <li><b>normal</b> : تحديد النسخة العادية من الخط </li>
        <li><b>italic</b> : اختيار نسخة مُصنَّفة على أنها مائلة (italic)، وإن لم تتوافر نسخة مائلة، فستستخدم النسخة المنحرفة من الخط <b>oblique</b>، وإن لم تتوفر كلا النسختين، فسيحاكى الخط المائل من المتصفح.</li>
        <li><b>oblique</b> : اختيار نسخة مُصنَّفة على أنها منحرفة (oblique)، وإن لم تتوافر نسخة منحرفة، فستستخدم النسخة المائلة من الخط <b>italic</b> ، وإن لم تتوفر كلا النسختين، فسيحاكى الخط المائل من المتصفح</li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css7_font-style.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css7_font-style 2.png' %}" class="img">
</div>