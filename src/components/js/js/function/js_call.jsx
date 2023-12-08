{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript call </i></u></h1>
<div class="style_divv mt-5 pb-0">
    باستخدام الدالة  <bdi><b>call()</b></bdi>  يمكن استخدام <b>method</b> على كائنات مختلفة.<br>
    يمكن استخدام الدالة  <bdi><b>call()</b></bdi> لاستدعاء method مع كائن مالك كوسيطة
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
<pre><span style="color:gold">call()</span>
<span style="color:gold">call(</span><span style="color:var(--html-color-tags)">thisArg</span><span style="color:gold">)</span>
<span style="color:gold">call(</span><span style="color:var(--html-color-tags)">thisArg</span>, arg1,arg2 , …<span style="color:gold">)</span></pre>   
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <ul>
        <li> يستدعي هذا المثال طريقة fullName من خلال ال obj  الذي يحتوي على الدالة ، تم من خلال الدالة ِcall يستخدم ال obj2 الذي لا يحتوي على دالة ويقوم بإرجاع النتيجة مباشرة .</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js149_call.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="h2"> Aymane Razmi </div>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <ul><li> يمكن أن يقبل التابع <bdi>call()</bdi> ال arguments </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js149_call2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="h2"> Adil Toumi moroccain Sidi Slimane </div>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 3 :  </div>
    <ul><li> يمكن أن تستخدم <bdi>call()</bdi> ال function   </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js149_call3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="h2"> Rabab Thing 26 </div>
    </div>
</div>