{% load static %} 
<style>
    .child{ background-color: red;color:white;font-size: 22px;}
</style>
<h1 className="heading-style-js"><u><i>  JavaScript querySelectorAll </i></u></h1>
<div className="style_divv mt-5">
    ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> جميع العناصر التي تتطابق مع محدد (محددات) <b>CSS</b>.<br/>
    ترجع طريقة <bdi><b>querySelectorAll()</b></bdi> NodeList.<br/>
    يطرح الأسلوب <bdi><b>querySelectorAll()</b></bdi> استثناء <b className="text-danger">SYNTAX_ERR</b> إذا كان المحدد (المحددات) غير صالح.
    <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">querySelectorAll(<span style="color:white">CSS selectors</span>)</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js77_querySelectorAll.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img" id="reSulta"> 
        <div className="child"> child 1 </div>
        <div className="child"> child 2 </div>
        <div className="child"> child 3 </div>
        <div>length = 3</div>
    </div>
</div>