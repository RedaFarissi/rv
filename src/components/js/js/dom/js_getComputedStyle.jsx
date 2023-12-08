{% load static %} 
<style>
    #DV{ background-color: red; border: 2px solid black; padding: 10px;}
    #DV2{background-color:#fc9909; border:2px solid black; padding:10px; font-size:150%;}
    #div_test{background-color: #fc9909; border: 2px solid black; padding: 10px; font-size: 150%;}
    #div_test::before{ content:"Hello"; color: white; }
    #div_test::after{ content:"Word"; color: greenyellow; }
</style>
<h1 class="heading-style-js"><u><i> JavaScript getComputedStyle </i></u></h1>
<div class="style_divv mt-5">
    تقوم  <bdi><b>Window.getComputedStyle()</b></bdi> بإرجاع كائن يحتوي على قيم جميع خصائص <b>CSS</b> لعنصر ، بعد تطبيق أوراق الأنماط النشطة وحل أي حساب أساسي قد تحتويه هذه القيم.<br>
    يتم الوصول إلى قيم خصائص <b>CSS</b> الفردية من خلال واجهات برمجة التطبيقات التي يوفرها الكائن ، أو عن طريق الفهرسة باستخدام أسماء خصائص <b>CSS</b>.<br>
    تستخدم <b>getPropertyValue</b>  لتحديد إسم الخاصية .<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">getComputedStyle(</span>element <span style="color:gold">,</span> pseudoElement	<span style="color:gold">)</span></pre>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js47_getComputedStyle.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <div id="DV"> getComputedStyle </div>
        <h2 id="h2"> </h2>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js47_getComputedStyle2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <div id="DV2"> getComputedStyle </div>
        <h2 id="h22"> </h2>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 3 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js47_getComputedStyle3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <div id="div_test"> getComputedStyle </div>
        <h2 id="h222"></h2>
    </div>
</div>
<script>
    const id = document.getElementById("h2");
    const bg = window.getComputedStyle( document.getElementById("DV") );
    const id2 = document.getElementById("h22");
    const bg2 = window.getComputedStyle( document.getElementById("DV2") );

    id.innerHTML = bg.getPropertyValue("background-color")+"<br>";
    id2.innerHTML += "background-color :  " + bg2.getPropertyValue("background-color") + "<br>";
    id2.innerHTML += "border : " + bg2.getPropertyValue("border") + "<br>";
    id2.innerHTML += "padding : " + bg2.getPropertyValue("padding") + "<br>";
    id2.innerHTML += "font-size : " + bg2.getPropertyValue("font-size") + "<br>";

    const div = document.getElementById("div_test")
    const id3 = document.getElementById("h222");
    const BG = window.getComputedStyle( div ,":before").content;
    const BG2 = window.getComputedStyle( div ,":after").content;
    id3.innerHTML += " content before :  " + BG  + "<br>"; 
    id3.innerHTML += " content after  :  " + BG2 ; 
</script>