{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript oncopy </i></u></h1>
<div class="style_divv mt-5">
    يحدث حدث <b>oncopy</b> عندما ينسخ المستخدم محتوى عنصر ما.<br>
    يحدث حدث <b>oncopy</b> أيضًا عندما ينسخ المستخدم عنصرًا ، على سبيل المثال ، صورة ، تم إنشاؤها باستخدام عنصر <kbd>&lt;img&gt;</kbd>.<br>
    يتم استخدام حدث <b>oncopy</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> مع <code>type="text"</code>.<br>
    <div class="alert alert-warning mt-2">
         هناك ثلاث طرق لنسخ عنصر / محتوى عنصر:
        <ul>
            <li> اضغط على <kbd class="bg-secondary">CTRL+C</kbd> </li>
            <li> حدد "نسخ" من قائمة "تعديل" في متصفحك</li>
            <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد الأمر "نسخ".</li>
        </ul>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oncopy</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oncopy</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"copy"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js101_oncopy.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <p oncopy="myFunction()">
          Try to copy this text
        </p>
    </div>
</div>

<script>
  function myFunction() {
    alert("You copied text!");
  }
</script>  