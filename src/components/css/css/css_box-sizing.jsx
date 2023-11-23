{% load static %} 
<h1 class="heading-style-css"><u><i> CSS box-sizing</i></u></h1>
<div class="style_divv mt-5">
    تحدد خاصية <b>Box-sizing</b> كيفية حساب العرض والارتفاع الكليين لعنصر ما . <br>
    تقبل الخاصية  <b>Box-sizing</b> القيم :
    <ul>
        <li><b>content-box</b> : قيمة إفتراضية أو قيمة أولي من خلال هذه القيمة ال <b>border</b> و <b>padding</b> ليسو ضمن العرض المحدد .</li>
        <li><b>border-box</b> :   من خلال هذه القيمة ال <b>border</b> و <b>padding</b>  ضمن العرض المحدد .</li>
    </ul>
</div>
<div class="sum_exemple_style">
<DIV class="mital"> متال :</DIV>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css32_box-sizing.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css32_box-sizing 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 2 :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css32_box-sizing2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css32_box-sizing2 2.png' %}" class="img">
</div>