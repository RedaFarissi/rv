{% load static %} 
<h1 class="heading-style-css"><u><i> CSS after and before</i></u></h1>
<h3>1. المحدد after </h3>
<div class="style_divv">
    يُدرج المُحدِّد <b>after</b> شيئًا ما بعد محتوى كل عنصر (عناصر) محدد.
    استخدم الخاصية <b>content</b> لتحديد المحتوى المراد إدراجه.<br>
    استخدم : : قبل المحدد <b>after</b>  لإدراج شيء بعد المحتوى يمكنك إستعمال ال <b>id</b> أو <b>class</b> أو عبر إسم العنصر قم بتحديد بنفسك .
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<ul><li>   لاحظ في المتال أسفله أن الخاصية <b>color</b> تم تحديدها داخل كل العنصر وذالك بعض إضافة المحدد <b>after</b> . </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css40_after.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css40_after 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 : </div>
<ul><li> يمكن تغير خصائص <b>CSS</b> للمحتوي المحدد داخل الخاصية <b>content</b> وذالك من خلال إعطاء خصائص جديدة </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css40_after2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css40_after2 2.png' %}" class="img">
</div>

<h3>2. المحدد before </h3>
<div class="style_divv">
    يُدرج المُحدِّد <b>before</b> شيئًا ما قبل محتوى كل عنصر (عناصر) محدد.
    استخدم الخاصية <b>content</b> لتحديد المحتوى المراد إدراجه.<br>
    استخدم : : قبل المحدد <b>before</b>  لإدراج شيء قبل المحتوى يمكنك إستعمال ال <b>id</b> أو <b>class</b> أو عبر إسم العنصر قم بتحديد بنفسك .
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css40_before.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css40_before 2.png' %}" class="img">
</div>