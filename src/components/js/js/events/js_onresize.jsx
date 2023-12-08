{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript onresize </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onresize</b> عندما يتم تغيير حجم نافذة المتصفح.<br>
    <div class="alert alert-warning my-3">   
        <b>نصيحة</b>:<br>
        للحصول على حجم عنصر ، استخدم خصائص <b>clientWidth</b> ، و <b>clientHeight</b> ، و <b>innerWidth</b> ، و <b>innerHeight</b> ، و <b>OuterWidth</b> ، و <b>OuterHeight</b> ، و <b>offsetWidth</b> و / أو <b>offsetHeight</b>.
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;body</span> <span style="color:var(--js-color)">onresize</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onresize</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"resize"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js127_onresize.png' %}" class="img">
</div>
