{% load static %} 
<style>
    #parag{ text-transform: capitalize; margin-bottom: 0px;}
    #paragra{ font-size:24px; text-transform:uppercase;  margin-bottom: 0px;}
    #paragraph{ text-transform:lowercase; margin-bottom: 0px;}
</style>
<h1 class="heading-style-css"><u><i> CSS text-transform </i></u></h1>
<div class="style_divv mt-5">
    تتحكم خاصية <b><bdi>text-transform</bdi></b> في الكتابة بالأحرف الكبيرة للنص.
    وتقبل عدة قيم وهي كتالي :
    <ul>
        <li><b>none</b> : لا يوجد أحرف كبيرة. يتم عرض النص كما هو. قيمة فتراضية</li>
        <li><b>capitalize</b> : يحول الحرف الأول من كل كلمة إلى أحرف كبيرة</li>
        <li><b>uppercase</b> : يحول كل الأحرف إلى أحرف كبيرة</li>
        <li><b>lowercase</b> : يحول جميع الأحرف إلى أحرف صغيرة</li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css60_text-transform.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p id="parag"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css60_text-transform2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p id="paragra"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 3 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css60_text-transform3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p id="paragraph"> Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. </p>
    </div>
</div>