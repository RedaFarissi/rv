{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript btoa </i></u></h1>
<div className="style_divv mt-5">
    تقوم طريقة <bdi><b>btoa</b></bdi> بتشفير سلسلة بنضام <bdi>64-bit</bdi>.
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">btoa(<span style="color:orange">"string"</span>)</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js32_btoa.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> <h2> EçZÉ(ºx </h2> </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js32_btoa2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">    
        <input type="text" id="text">
        <button onclick="buton()"> OK </button>
        <h2 id="h2"></h2>
    </div>
    <ul><li> لفك تشفير إستعمل <bdi><b>atob()</b></bdi> </li></ul>
</div>
<script>
    function buton(){
        let id = document.getElementById("h2")
        let text = atob(document.getElementById("text").value);
        id.innerHTML = "<span style='color:blue'>" + text + "</span>";
    }
</script>   