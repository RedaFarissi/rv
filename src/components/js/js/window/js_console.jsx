{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript console </i></u></h1>
<div class="style_divv mt-5">
    يوفر كائن <b>console</b> الوصول إلى وحدة تحكم التصحيح الخاصة بالمستعرض.<br>
    كائن <b>console</b> هو خاصية لكائن النافذة.<br>
    يتم الوصول إلى كائن <b>console</b> باستخدام:<br>
    تذكر أن تفتح وحدة التحكم وذالك عبر ضغط على   <b style="background-color: rgba(0 0 0/50%);padding:3px;border-radius:4px;">F12</b> .
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:lime">console</span></pre>
    </div>
    أو 
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:lime">console</span></pre>
    </div>
</div>
<h3>1. <bdi>console.assert()</bdi></h3>
<div class="style_divv">
    تقوم طريقة <b><bdi>assert()</bdi></b> بكتابة رسالة إلى وحدة التحكم إذا تم تقييم التعبير إلى <b>false</b>.<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:lime">console</span>.<span style="color:gold">assert(</span> expression, <span style="color:orange">"message"</span><span  style="color:gold">)</span></pre>
    </div>
    إذا تم تقييم <b>expression</b> إلى خطأ ، فستتم كتابة رسالة في وحدة التحكم.
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js46_console.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <h2>Remember to open the console Press <b style="color:green">F12</b></h2>
    </div>
</div>
<h3>2. <bdi>console.clear()</bdi></h3>
<div class="style_divv">
    تقوم طريقة <bdi><b>clear()</b></bdi> بمسح وحدة التحكم.<br>
    تقوم طريقة <bdi><b>clear()</b></bdi> أيضًا بكتابة <bdi><b>"Console was cleared"</b></bdi> في وحدة التحكم.<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:lime">console</span>.<span style="color:gold">clear()</span></pre>
    </div>
</div>
<h3>3. <bdi>console.group()</bdi></h3>
<div class="style_divv">
    تبدأ طريقة <bdi><b>group()</b></bdi> مجموعة رسائل.<br>
    سيتم كتابة جميع الرسائل الجديدة داخل هذه المجموعة<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:lime">console</span>.<span style="color:gold">group()</span></pre>
    </div>
</div>
<h3>4. <bdi>console.groupEnd()</bdi></h3>
<div class="style_divv">
    تُنهي <bdi><b>groupEnd()</b></bdi> مجموعة رسائل.<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:lime">console</span>.<span style="color:gold">end()</span></pre>
    </div>
</div>
<script>
    let x = 5;
    let y = 5;
    console.assert(x > y + 1, "Expression returned 'False'");
</script>