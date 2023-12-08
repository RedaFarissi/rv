{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript atob </i></u></h1>
<div className="style_divv mt-5">
    تقوم طريقة <bdi><b>atob()</b></bdi> بفك تشفير سلسلة تم تشفيرها بواسطة طريقة <bdi><b>btoa()</b></bdi>.
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
    <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">atob(</span>encoded<span style="color:gold">)</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js33_atob.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">
        <input type="text" id="text">
        <button onclick="buton()"> OK </button>
        <h2 id="h2"></h2>
    </div>
</div>
<script>
    function buton(){
        let id = document.getElementById("h2")
        let value = document.getElementById("text").value
        let text = btoa(value);
        id.innerHTML =  "encode :  " + btoa(text) + "<br/>"
        id.innerHTML += "decode :  " + atob(text)
    }
</script> 