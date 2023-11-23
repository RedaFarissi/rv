{% load static %} 
<style>
    #a{ text-indent:20px; } 
    #b{ text-indent:55px; } 
    #c{ text-indent:35%; } 
</style>
<h1 class="heading-style-css"><u><i> CSS text-indent </i></u></h1>
<div class="style_divv mt-5">
    تحدد الخاصية <b>text-indent</b> المسافة البادئة للسطر الأول في كتلة نصية.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css61_text-indent.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p id="a">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
        </p>
        <hr>
        <p id="b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
        </p>
        <hr>
        <p id="c">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
        </p>
    </div>
</div>
