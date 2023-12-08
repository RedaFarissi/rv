{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript oncut </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>oncut</b> عندما يقطع المستخدم محتوى عنصر ما.<br>
    ملاحظة: على الرغم من أن الحدث <b>oncut</b> مدعوم من قبل جميع عناصر <b>HTML</b> ، إلا أنه ليس من الممكن في الواقع قطع محتوى ، على سبيل المثال ، عنصر <kbd>&lt;p&gt;</kbd> ، ما لم يقم العنصر بتعيين <b>content</b> قابل للتعديل على <bdi><b>"true"</b></bdi> .<br>
    تلميح: يتم استخدام حدث <b>oncut</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> مع <code>type="text"</code>.<br><br>
    هناك ثلاث طرق لقص محتوى عنصر ما :
    <ul>
        <li>اضغط على <kbd class="bg-secondary">CTRL+X</li>
        <li> حدد "قص" من قائمة "تعديل" في متصفحك </li>
        <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد أمر "قص" </li>
    </ul>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oncut</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oncut</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"cut"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js102_oncut.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <input type="text" id="inP" value="cut this text">
    </div>
</div>

<script>
  const a = document.getElementById("inP")
  a.addEventListener('cut', function_name )
  
  function function_name() {
    alert("You cut text!");
  }
</script>