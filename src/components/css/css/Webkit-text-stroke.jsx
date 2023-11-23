{% load static %} 
<style>
    .para{ font-size:42px; -webkit-text-stroke:2px black; color:red; }
    .para2{ font-size:42px;  color:red; -webkit-text-stroke-width:2px; -webkit-text-stroke-color:green; }
</style>
<h1 class="heading-style-css"><u><i>  CSS -webkit-text-stroke </i></u></h1>
<div class="style_divv mt-5">
    تحدد الخاصية  <bdi><b>-webkit-text-Stroke</b></bdi> عرض ولون حدود الحروف لأحرف النص. هذه خاصية اختصار للخصائص الطويلة <bdi><b>-webkit-text-stroke-width</b></bdi> و <bdi><b>-webkit-text-stroke-color</b></bdi>.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <img src="{% static 'css/css66_webkit-text-storke.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p class="para"> Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <img src="{% static 'css/css66_webkit-text-storke2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p class="para2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
    </div>
</div>