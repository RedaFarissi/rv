{% load static %} 

<h1 class="heading-style-js"><u><i>  JavaScript onselect </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onselect</b> بعد تحديد جزء من النص في عنصر ما.<br>
    يتم استخدام حدث <b>onselect</b> غالبًا في عناصر <kbd>&lt;input type = "text"&gt;</kbd> أو <kbd>&lt;textarea&gt;</kbd> .<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onselect</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onselect</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"select"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js130_onselect.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        Select some of the text: 
        <input type="text" value="Hello world!" onselect="function_name()">
    </div>
</div>

<script>
    function function_name() {
      alert("You selected some text!");
    }
</script>