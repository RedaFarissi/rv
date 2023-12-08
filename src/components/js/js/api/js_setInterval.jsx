{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript setInterval </i></u></h1>
<div class="style_divv mt-5">
    تستدعي طريقة <bdi><b>setInterval()</b></bdi> دالة في فترات زمنية محددة (بالمللي ثانية).<br/>
    تستمر طريقة <bdi><b>setInterval()</b></bdi> في استدعاء الوظيفة حتى يتم استدعاء <bdi><b>clearInterval()</b> أو تصبح النافذة
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">setInterval(</span> Function_name <span style="color:gold">,</span> milliseconds<span style="color:gold">)</span></pre>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js35_setInterval.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="setInterval( function_name ,1000)" style="outline:none;border-radius:2px;border:1px solid black"> Cick Here </button>
        <h2 id='h2'>HELLO </h2>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js35_setInterval2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2 id='h22'> 0 : 0 : 0 </h2>
    </div>
</div>

<script>
    let id = document.getElementById("h2")
    function function_name(){
        id.innerHTML += "hello "
    }
    let id2 = document.getElementById("h22")
    let s=0 ; m=0 , h=0 ; 
    setInterval( Clock ,1000)
    function Clock(){
        if( s < 59)   s++;
        else{ m++;  s=0; if(m == 60){ m=0; h++; } }
        id2.innerHTML = ` ${h} : ${m} : ${s} `
    }
</script>