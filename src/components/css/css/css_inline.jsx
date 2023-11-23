{% load static %} 
<style>
   .inline{ display: inline; background-color: yellow; border:2px solid black; }
   .inline2{ display: inline;background-color: yellow;border:2px solid black;padding: 20px;margin:20px;}
    #DIV_R2{ background-color: rgba(20 220 30/75%);}
</style>
<h1 class="heading-style-css"><u><i> CSS inline </i></u></h1>
<div class="style_divv mt-5">
    تستخدم القيمة <b>inline</b> مع الخاصية <b>display</b><br> 
    عند إستخدام القيمة <b>inline</b> مع الخاصية <b>display</b> يأخد العنصر  <kbd>width:max-content</kbd> . <br>
    يكون العرض <small><bdi>(width)</bdi></small>  و الإرتفاع <small><bdi>(height)</bdi></small>  غير قابل لتعديل بستخدام الخاصية <b>width</b> و <b>height</b><br>
    عند إستخدام الخاصية <kbd>display:inline</kbd>  لا يتم إضافة <kbd>&lt;br&gt;</kbd> تلقائيا .  تعرض العناصر في نفس السطر <br>
    لا يمكن إستخدام جميع العناصر مع الخاصية <kbd>display:inline</kbd> متل <small>width , height , padding-top , padding-bottom , margin-top , margin-bottom</small> في حين يقوم بدعم <small>padding-right , padding-left, margin-right , margin-left</small>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css58_inline.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div class="inline"> DIV -> INLINE </div>
        <span class="inline"> SPAN -> INLINE </span>
        <p class="inline"> P -> INLINE </p>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <ul><li> لاحض أنه لا يترك مساحة لل <bdi>padding</bdi> </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css58_inline2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div class="inline2"> DIV -> INLINE </div>
        <span class="inline2"> SPAN -> INLINE </span>
        <p class="inline2"> P -> INLINE </p>
        <div ID="DIV_R2">
            DIV -> BLOCK
        </div>
    </div>
</div>