{% load static %} 
<style>
  .resulta{background-color:black; padding:9px; color: white;font-size: x-large;   }
</style>
<h1 class="heading-style-js"><u><i> JavaScript filter </i></u></h1>
<div class="style_divv mt-5">
   تُنشئ طريقة <bdi><b>filter()</b></bdi> مصفوفة جديدة مليئة بالعناصر التي تجتاز اختبارًا توفره الوظيفة.<br>
   تعتبر الدالة <bdi><b>filter()</b></bdi> من <button class="text-danger border-0" style="background-color:transparent" data-bs-toggle="collapse" data-bs-target="#id_name"> Higher Order Functions </button><br>
    <div id="id_name" class="collapse bg-primary p-3 mt-2 mb-2"> 
        <b>Higher Order Functions</b> هي دالة تستقبل ك <b>parametre</b> دالة تانية   .<br>
        هاده الدالة التانية تستقبل أيضا <b>parametre</b> . 🙄
    </div>
   لا تقوم طريقة <bdi><b>filter()</b></bdi> بتنفيذ الوظيفة للعناصر الفارغة.<br>
   لا يغير أسلوب <bdi><b>filter()</b></bdi> المصفوفة الأصلية.<br>
   <div class="alert bg-dark pb-0 mt-3">
<pre> <span style="color:var(--js-color)">array</span>.<span style="color:gold">filter(</span><span style="color:var(--html-color-tags)">function</span><span style="color:gold">(</span><span style="color:var(--js-color)">element</span> , <span style="color:var(--js-color)">index</span> , <span style="color:var(--js-color)">array</span><span style="color:gold">)</span>, thisValue<span style="color:gold">)</span></pre></div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> الطريقة 1 :  </div>
    <ul><li> في المتال أسفله  </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js144_filter.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="result" class="resulta">
            6<br>8<br>10<br>
        </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> الطريقة 2 :  </div>
    <ul><li> في المتال أسفله  </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js144_filter3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div  class="resulta"> more_5 length = 3 </div>
        <table>
            <tr><td>6</td></tr>
            <tr><td>8</td></tr>
            <tr><td>10</td></tr>
        </table>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> الطريقة 3 :  </div>
    <ul><li> في المتال أسفله  </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js144_filter2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div class="resulta">
         6<br>8<br>10<br>
        </div>
    </div>
</div>