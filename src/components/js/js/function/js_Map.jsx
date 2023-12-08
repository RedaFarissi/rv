{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript map </i></u></h1>
<div class="style_divv mt-5">
    تُنشئ <bdi><b>map()</b></bdi> مصفوفة جديدة من استدعاء دالة لكل عنصر مصفوفة.<br/>
    تعتبر الدالة <bdi><b>map()</b></bdi> من <button class="text-danger border-0" style="background-color:transparent" data-bs-toggle="collapse" data-bs-target="#id_name"> Higher Order Functions </button><br>
    <div id="id_name" class="collapse bg-primary p-3 mt-2 mb-2"> 
        <b>Higher Order Functions</b> هي دالة تستقبل ك <b>parametre</b> دالة تانية   .<br>
        هاده الدالة التانية تستقبل أيضا <b>parametre</b> . 🙄
    </div>
    لا يغير <bdi><b>map()</b></bdi> المصفوفة الأصلية.<br>
    تستدعي <bdi><b>map()</b></bdi> دالة مرة واحدة لكل عنصر في المصفوفة.<br/>
    لا ينفذ <bdi><b>map()</b></bdi> الوظيفة للعناصر الفارغة.<br/>
    الدالة داخل الدالة <b>map</b> يجب أن تحتوي <small>parametre</small> واحد على الأقل . و يمتل  عنصر المصفوفة في كل مرة .<br/>
    <div class="alert bg-dark pb-0 mt-3">
<pre> <span style="color:var(--js-color)">array</span>.<span style="color:gold">map(</span><span style="color:var(--html-color-tags)">function</span><span style="color:gold">(</span><span style="color:var(--js-color)">element</span> , <span style="color:var(--js-color)">index</span> , <span style="color:var(--js-color)">array</span><span style="color:gold">)</span>, thisValue<span style="color:gold">)</span></pre></div>
    </div>
    
</div>
<div class="sum_exemple_style">
    <div class="mital"> الطريقة 1 :  </div>
    <ul><li> في المتال أسفله  </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js143_map.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        4<br/> 16<br/> 36<br/> 64<br/> 100
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> الطريقة 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js143_map2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        4<br/> 16<br/> 36<br/> 64<br/> 100
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> الطريقة 3 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js143_map3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        4<br/> 16<br/> 36<br/> 64<br/> 100
    </div>
</div>