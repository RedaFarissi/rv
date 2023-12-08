{% load static %} 
<h1 className="heading-style-js"><u><i> JavaScript matchMedia </i></u></h1>
<div className="style_divv mt-5">
    تقوم طريقة <bdi><b>matchMedia()</b></bdi> بإرجاع <b>MediaQueryList</b> بالنتائج من الاستعلام .<br/>
    كن أن تكون استعلامات الوسائط الخاصة بطريقة <bdi><b>matchMedia()</b></bdi> أيًا من ميزات الوسائط الخاصة بقاعدة <b>CSS</b> <bdi><b>@media</b></bdi> ، مثل <b>min-height</b> و <b>min-width</b> و <b> orientation</b>
    <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">matchMedia(<span style="color:orange">"mediaQuery"</span>)</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js50_matchMedia.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">       
        <h2  id="h2" dir="rtl"></h2>
    </div>
</div>
<script>
    const id = document.getElementById("h2")
    if(matchMedia("(max-width: 500px)").matches){
        id.innerHTML = "عرض صفحتك يقل عن  <bdi>500px</bdi> "
    }else{
        id.innerHTML = "عرض صفحتك يتجاوز <bdi>500px</bdi> "
    }
</script>
