{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript onclick </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onclick</b> عندما ينقر المستخدم على عنصر.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onclick</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onclick</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"click"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js97_onclick.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
        <div id="div_test"> 
          <button class="btn btn-primary" onclick="function_name1()">
             change style1 
          </button>
          <button class="btn btn-primary" id="btn2">
             change style2 
          </button>
          <button class="btn btn-primary" id="btn3">
             change style3 
          </button>
        </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js97_onclick2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
        <div>Field1: <input type="text" id="f1" value="JavaScript"></div>
        <div>Field2: <input type="text" id="f2"></div>
        <button onclick="myFunction()" class="btn btn-primary mt-2">
            Copy 
        </button>
    </div>
</div>

<script>
    const y = document.getElementById("div_test")
    function function_name1(){
      y.style.backgroundColor = "red"
      y.style.border = "2px solid brown"
      y.style.borderRadius = "2px"
      y.style.padding = "20px"
    }
    document.getElementById("btn2").addEventListener('click',function(){
      y.style.backgroundColor = "red"
      y.style.border = "5px double white"
      y.style.borderRadius = "20px"
      y.style.padding = "9px"
    })
    document.getElementById("btn3").onclick = function(){
      y.style.backgroundColor = "red"
      y.style.border = "2px solid black"
      y.style.borderRadius = "9px"
      y.style.padding = "2px"
    }
    function myFunction() {
          const f2 = document.getElementById("f2")
          const f1 = document.getElementById("f1")
          f2.value = f1.value;
    }
</script>