{% load static %} 
<h1 className="heading-style-js"><u><i>  JavaScript focus </i></u></h1>
<div className="style_divv mt-5">
    تعطي طريقة <bdi><B>focus()</B></bdi> التركيز على عنصر (إذا كان من الممكن التركيز عليه).
    <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">focus()</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js81_focus.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> 
        <input type="email" id="email_id"> <br/>
        <input type="password" id="password">
    </div>
</div>
<script>
    document.getElementById("email_id").focus()
</script>