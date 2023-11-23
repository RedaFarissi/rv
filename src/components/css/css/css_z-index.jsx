{% load static %} 
<h1 class="heading-style-css"><u><i>  CSS z-index</i></u></h1>
<div class="style_divv mt-5">
    عندما يتم وضع العناصر ، يمكن أن تتداخل مع عناصر أخرى.<br>
    تحدد الخاصية <b>z-index</b> ترتيب مكدس العنصر (أي عنصر يجب وضعه أمام العناصر الأخرى أو خلفها).<br>
    يمكن أن يكون للعنصر ترتيب مكدس موجب أو سلبي <br>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<ul><li> من دون الخاصية <b>z-index</b> لن يضهر العنوان لأن الصوة ستكون فوقه </li></ul>
<img src="{% static 'css/css37_z-index.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css37_z-index 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<img src="{% static 'css/css37_z-index2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css37_z-index2 2.png' %}" class="img">
</div>