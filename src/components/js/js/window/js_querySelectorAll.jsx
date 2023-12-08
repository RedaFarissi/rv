{% load static %} 
<style>
    .child{ background-color: red;color:white;font-size: 22px;}
</style>
<h1 class="heading-style-js"><u><i>  JavaScript querySelectorAll </i></u></h1>
<div class="style_divv mt-5">
    ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> جميع العناصر التي تتطابق مع محدد (محددات) <b>CSS</b>.<br>
    ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> NodeList.<br>
    يطرح الأسلوب <bdi><b>querySelectorAll()</b></bdi> استثناء <b class="text-danger">SYNTAX_ERR</b> إذا كان المحدد (المحددات) غير صالح.
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">querySelectorAll(<span style="color:white">CSS selectors</span>)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js77_querySelectorAll.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img" id="reSulta"> 
        <div class="child"> child 1 </div>
        <div class="child"> child 2 </div>
        <div class="child"> child 3 </div>
        <div>length = 3</div>
    </div>
</div>