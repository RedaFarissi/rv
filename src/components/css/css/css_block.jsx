{% load static %} 
<style>
    #es_div,#es_span,#es_p{ display:block; background-color:yellowgreen; }
</style>
<h1 class="heading-style-css"><u><i> CSS block </i></u></h1>
<div class="style_divv mt-5">
    تستخدم القيمة <b>block</b> مع الخاصية <b>display</b><br> 
    عند إستخدام القيمة <b>block</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:100%</kbd> . <br>
    يكون العرض <small><bdi>(width)</bdi></small> و الإرتفاع <small><bdi>(height)</bdi></small>  قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b>.<br>
    عند إستخدام الخاصية <kbd>display:block</kbd> يتم إضافة <kbd>&lt;br&gt;</kbd> تلقائيا .  للفصل بين العناصر <br>
    يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:block</kbd> متل <small>margin , padding , width , height .....</small>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css57_block.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div id="es_div"> DIV -> BLOCK </div>
        <span id="es_span"> SPAN -> BLOCK </span>
        <p id="es_p"> P -> BLOCK </p>
    </div>
</div>
