{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript onfocus </i></u></h1>
<div class="style_divv mt-5">
    يحدث حدث <bdi><b>onfocus</b></bdi> عندما يتم التركيز على عنصر.<br>
    غالبًا ما يتم استخدام حدث <b>onfocus</b> مع <kbd>&lt;input&gt;</kbd> و <kbd>&lt;select&gt;</kbd> و <kbd>&lt;a&gt;</kbd>.<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;input</span> <span style="color:var(--js-color)">onfocus</span>=<span style="color:orange;">"<span style="color:gold">function_name()</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onfocus</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"focus"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
    <div class="alert alert-warning">
        <b>نصيحة</b> : حدث onfocus هو عكس حدث onblur .
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js85_onfocus.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <input type="text" id="InPuT" onfocus="function_name()">
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js85_onfocus2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <input type="text" id="InPuT2">
    </div>
</div>

<script>
    function function_name(){
      const id = document.getElementById("InPuT")
      id.style.border = "5px solid red"
    }
    document.getElementById("InPuT2").onfocus = function(){
      const id = document.getElementById("InPuT2")
      id.style.border = "5px solid red"
      id.style.width = "50%"
      id.style.backgroundColor = "green"
      id.style.color = "white"
      id.style.fontSize = "23px"
    }
</script>