{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript createComment </i></u></h1>
<div class="style_divv mt-5">
    تقوم طريقة <bdi><b>createComment()</b></bdi> بإنشاء تعليق وإرجاع عقدة التعليق <small><bdi>(comment node)</bdi></small>.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">const</span> comment = <span style="color:var(--js-color)">document</span>.<span style="color:gold">createComment(<span style="color: orange;">" text comment "</span>)</span>
<span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:gold">appendChild(</span>comment<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js64_createComment.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <ul class="mb-0"><li> بعد النقر على <kbd>F12</kbd> </li></ul>
    <img src="{% static 'js/js64_createComment 2.png' %}" class="img">
</div>   