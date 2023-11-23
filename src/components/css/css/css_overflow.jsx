{% load static %} 
<style>
    div.ex1 { background-color: lightblue;width: 110px;height: 110px;overflow: scroll;}
    div.ex2 { background-color: lightblue; width: 110px;  height: 110px;  overflow: hidden;}
    div.ex3 { background-color: lightblue; width: 110px;  height: 110px; overflow: auto;}
    div.ex4 {  background-color: lightblue; width: 110px; height: 110px; overflow: visible;}
</style>
<h1 class="heading-style-css"><u><i>   CSS overflow</i></u></h1>
<div class="style_divv mt-5">    
    تحدد خاصية overflow ما يجب أن يحدث إذا تجاوز المحتوى مربع عنصر .<br>
    تحدد هذه الخاصية ما إذا كان سيتم قص المحتوى أو إضافة أشرطة التمرير عندما يكون محتوى العنصر كبيرًا جدًا بحيث لا يتناسب مع منطقة معينة.<br>
    ملاحظة: تعمل خاصية overflow فقط مع عناصر الكتلة ذات الارتفاع المحدد وتستقبل القيم التالية :
    <ul dir="ltr" style="margin-top: 9px;">
        <li>scroll :  من خلال هذه القيمة يمكن إضافة شريط تمرير من ناحية width و height .  </li>
        <li>hidden :  من خلال هذه القيمة  لتختفي جميع العناصر خارج ال width و height .</li>
        <li>auto   :  من خلال هذه القيمة يمكن إضافة شريط تمرير من ناحية height  </li>
        <li>visible : عرض المحتوى كاملا بدون شريط تمرير . </li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css20_overflow.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css20_overflow 2.png' %}" class="img">
</div>