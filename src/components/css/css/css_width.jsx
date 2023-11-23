{% load static %} 
<h1 class="heading-style-css"><u><i>CSS  width</i></u></h1>
<div class="style_divv mt-5">
    تحدد خاصية <b>width</b> عرض العنصر.<br>
    لا يشمل عرض العنصر المساحة المتروكة أو الحدود أو الهوامش .
     تتجاوز الخاصيتان <b>min-width</b> و <b>max-width</b> خاصية العرض .<br>
     يمكن تحديد عرض العناصر بواسطة عدة مقاييس ندكر منها <bdi>(..., cm , mm , em , px , %  )</bdi> , وتعتبر أفضل طريقة عبر النسبة المئوية % بحيت يكون العنصر متجاوب مع عرض الصفحة
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css10_width.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css10_width 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css10_width2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css10_width2 2.png' %}" class="img">
</div>