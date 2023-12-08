{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript apply </i></u></h1>
<div class="style_divv mt-5 pb-0">
    باستخدام الدالة <bdi><b>apply()</b></bdi>  يمكن استخدام <b>method</b> على كائنات مختلفة. <br>
    الدالة <bdi><b>apply()</b></bdi> تشبه الدالة <bdi><b>call()</b></bdi> الفرق أن الدالة <bdi><b>apply()</b></bdi> تقبل مصفوفة ك <b>argument</b> ولا تقبل متغيرات . 
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
<pre><span style="color:gold">apply(</span><span style="color:var(--html-color-tags)">thisArg</span><span style="color:gold">)</span>
<span style="color:gold">apply(</span><span style="color:var(--html-color-tags)">thisArg</span>, argsArray<span style="color:gold">)</span></pre>   
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js150_apply.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="h2"> Adam Taziyat </div>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js150_apply2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="h2"> Adam Taziyat 2 , 3 , 4 , 5 </div>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 3 :  </div>
    <ul><li> تستخدم arguments للإشارة إلى عناصر المصفوفة .</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js150_apply3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="h2"> Sum all element array is : 35 </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 4 :  </div>
    <ul><li> تستخدم arguments للإشارة إلى عناصر المصفوفة .</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js150_apply4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div class="h2">Name : Reda Eskouni <br/> Moyen : 8.75 <hr/> </div>
    </div>
</div>