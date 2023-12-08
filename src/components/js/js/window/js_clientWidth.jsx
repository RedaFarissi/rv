{% load static %} 
<style>
    #div_H{ width: 50%; height:90px; }
</style>
<h1 className="heading-style-js"><u><i> JavaScript clientWidth </i></u></h1>
<div className="style_divv mt-5">
    <b>clientWidth</b> هو عدد صحيح يتوافق مع <b>clientWidth</b> للعنصر بالبكسل. الخاصية <b>clientWidth</b> للقراءة فقط.<br/>
    <div className="codeStudio codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:var(--js-color)">clientWidth</span></pre>
    </div>
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:var(--js-color)">clienHeight</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js40_clientWidth2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">
        <h2 id="h2"></h2>
        <div id="div_H">  Hello World  </div>
    </div>
</div>
<img src="{% static 'js/js40_clientWidth.png' %}" className="img">
<script>
    var c_Width = document.getElementById("div_H").clientWidth
    var c_height = document.getElementById("div_H").clientHeight
    document.getElementById("h2").innerHTML =  "clientWidth  : " + c_Width + "<br/>"
    document.getElementById("h2").innerHTML += "clientHeight : " + c_height
</script>
