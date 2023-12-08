{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript history </i></u></h1>
<h3>1. history</h3>
<div class="style_divv">
    يوفر <b>Web History API</b> طرقًا سهلة للوصول إلى كائن <bdi><b>windows.history</b></bdi> .<br/>
    يحتوي كائن <b>history</b> على عناوين <b>URL</b> التي زارها المستخدم (في نافذة المتصفح).<br/>
    كائن <b>history</b> هو خاصية لكائن <b>window</b>.<br/>
    يتم الوصول إلى كائن <b>history</b> باستخدام :
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">history</span></pre>
    </div>
    أو 
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">history</span></pre>
    </div>
</div>

<h3>2. <bdi>history.back()</bdi></h3>
<div class="style_divv">
    تقوم طريقة <bdi><b>history.back()</b></bdi> بتحميل عنوان <b>URL</b> السابق (الصفحة) في قائمة المحفوظات.<br/>
    تعمل طريقة <bdi><b>history.back()</b></bdi> فقط في حالة وجود صفحة سابقة.<br/>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">history</span>.<span style="color:gold">back()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js38_history2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="history.back()" style="outline:none; border:1px solid black"> Go Back </button>
    </div>
</div>
<h3>3. <bdi>history.forward()</bdi></h3>
<div class="style_divv">
    تقوم طريقة <bdi><b>history.forward()</b></bdi> بتحميل عنوان <b>URL</b> التالي (الصفحة) في قائمة المحفوظات.<br/>
    تعمل طريقة <bdi><b>history.forward()</b></bdi> فقط في حالة وجود الصفحة التالية.<br/>
    <bdi><b>history.forward()</b> هو نفسه <bdi><b>history.go()</b>.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:var(--js-color)">history</span>.<span style="color:gold">forward()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js38_history3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="history.forward()" style="outline:none; border:1px solid black"> forward </button>
    </div>
</div>
<h3>4. <bdi>history.length</bdi></h3>
<div class="style_divv">
    تعرض خاصية <b>lengt</b> عدد عناوين <b>URL</b> في قائمة المحفوظات لنافذة المستعرض الحالية.<br/>
    تقوم الخاصية بإرجاع 1 على الأقل ، لأن القائمة تتضمن الصفحة الحالية.<br/>
    هذه الخاصية مفيدة لمعرفة عدد الصفحات التي زارها المستخدم في جلسة التصفح الحالية.<br/>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">history</span>.<span style="color:var(--js-color)">length</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js38_history.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2 id="h2">  </h2>
    </div>
</div>
<script>
    document.getElementById("h2").innerHTML =  history.length
</script>