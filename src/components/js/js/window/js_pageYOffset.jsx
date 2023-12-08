{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript pageYOffset </i></u></h1>
<div class="style_divv mt-5">
    تقوم خاصية <b>pageYOffset</b> بإرجاع وحدات البكسل التي تم تمرير مستند إليها من الزاوية اليسرى العليا من النافذة.<br>
    الخاصية <b>pageYOffset</b> تساوي الخاصية <b>scrollY</b>.<br>
    خاصية <b>pageYOffset</b> للقراءة فقط .<br>
    يتم الوصول إلى  <b>pageYOffset</b> باستخدام :<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">  
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">pageYOffset</span></pre>
    </div>
    أو
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">  
        <pre><span style="color:var(--js-color)">pageYOffset</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js43_pageYOffset.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="name_function()" style="outline:none;border:1px solid black">Click me to get scroolY</button>
    </div>
</div>

   
<script>
    function name_function(){
       alert( "pageYOffset  = " + pageYOffset)
    }
</script>
