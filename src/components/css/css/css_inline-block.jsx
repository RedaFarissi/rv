{% load static %} 
<style>
 .inline-B{display:inline-block; background-color:yellow; border:2px solid black; padding:24px; font-size:20px; margin:24px;}
 .inline-BL{display:inline-block; background-color:yellow; border:2px solid black; padding:24px; font-size:20px; margin:24px; width: 32%;}
</style>

<h1 class="heading-style-css"><u><i> CSS inline-block </i></u></h1>
<div class="style_divv mt-5">
    تستخدم القيمة <b>inline-block</b> مع الخاصية <b>display</b><br> 
    عند إستخدام القيمة <b>inline-block</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:max-content</kbd> . <br>
    عند إستخدام الخاصية <kbd>display:inline-block</kbd>  يكون العرض <small><bdi>(width)</bdi></small> و الإرتفاع <small><bdi>(height)</bdi></small>  قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b>.<br>
    عند إستخدام الخاصية <kbd>display:inline-block</kbd> يتم عرض العناصر في سطر واحد <br>
    يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:inline-block</kbd> متل <small>margin , padding , width , height .....</small>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css59_inline-block.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div class="inline-B"> DIV -> INLINE-BLOCK </div>
        <span class="inline-B"> SPAN -> INLINE-BLOCK </span>
        <p class="inline-B"> P -> INLINE-BLOCK </p>
        <div style="background-color: black;color:white;">
            DIV -> BLOCK
        </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css59_inline-block2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div class="inline-BL"> DIV -> INLINE-BLOCK </div>
        <span class="inline-BL"> SPAN -> INLINE-BLOCK </span>
        <p class="inline-BL"> P -> INLINE-BLOCK </p>
        <div style="background-color: black;color:white;">
            DIV -> BLOCK
        </div>
    </div>
</div>
