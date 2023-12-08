{% load static %} 
<style>      
    #DIV{background-color: red; color: white; min-height: 200px; border:2px solid brown; font-size: 35px;}
</style>
<h1 class="heading-style-js"><u><i>  JavaScript ontoggle </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>ontoggle</b> عندما يفتح المستخدم أو يغلق عنصر <kbd>&lt;details&gt;</kbd>.<br>
    يحدد عنصر <kbd>&lt;details&gt;</kbd> التفاصيل الإضافية التي يمكن للمستخدم عرضها أو إخفاءها عند الطلب.<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;details</span> <span style="color:var(--js-color)">ontoggle</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">ontoggle</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"toggle"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js131_ontoggle.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div class="h2" style="color: red;">ontoggle event attribute (open the details)</div>
        <details ontoggle="function_name()">
            <summary style="color:blue";>
             is the full form of HTML
            </summary> 
            <p>Hyper Text Markup Language</p>
            <div id="DIV"> DIV BOX </div>
        </details>
    </div>
</div>

<script>
    function function_name() {
      alert("The ontoggle event occured");
    }
</script>