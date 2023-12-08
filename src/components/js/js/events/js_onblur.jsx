{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript onblur </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onblur</b> عندما يفقد الكائن التركيز.<br>
    غالبًا ما يتم استخدام حدث <b>onblur</b> مع رمز التحقق من صحة النموذج (على سبيل المثال ، عندما يترك المستخدم حقل نموذج).<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;input</span> <span style="color:var(--js-color)">onblur</span>=<span style="color:orange;">"<span style="color:gold">function_name()</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onblur</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"blur"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
    <div class="alert alert-warning">
        <b>نصيحة</b> : حدث onblur هو عكس حدث onfocus.
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js86_onblur.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <input type="text" id="InPuT2">
    </div>
</div>

<script>
    document.getElementById("InPuT2").onfocus = function(){
      const id = document.getElementById("InPuT2")
      id.style.border = "5px solid red"
      id.style.width = "50%"
      id.style.backgroundColor = "green"
      id.style.color = "white"
      id.style.fontSize = "23px"
    }
    document.getElementById("InPuT2").onblur = function(){
      const id = document.getElementById("InPuT2")
      id.style.border = "none"
      id.style.width = "25%"
      id.style.backgroundColor = "white"
      id.style.color = "black"
      id.style.fontSize = "16px"
      id.style.outline = "0.5px solid black"
    }
</script>