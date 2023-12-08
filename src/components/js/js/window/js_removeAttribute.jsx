{% load static %} 
<style>
  .div{ 
    height:90px; font-size: 24px;
    background-color:red; color: white;  
    text-align:center; line-height:90px;
  }
</style>
<h1 className="heading-style-js"><u><i> JavaScript removeAttribute </i></u></h1>
<h3>1- removeAttribute</h3>
<div className="style_divv">
    تزيل طريقة <bdi><B>removeAttribute()</B></bdi> سمة من عنصر. 
    <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:gold">removeAttribute(<span style="color:orange">"name"</span>)</span></pre>
    </div>
</div>

<div className="sum_exemple_style">
    <div className="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js83_removeAttributre.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img">
        <div id="id_name" className="div"  onclick="removeAttributE()">  
          Click me to remove attribue 
        </div>
        <script>
            function removeAttributE(){
              document.getElementById("id_name").removeAttribute("class")
            }
        </script>
    </div>
</div>
<h3><small>2- The Difference Between <bdi>removeAttribute()</bdi> and <bdi>removeAttributeNode()</bdi></small></h3>
<div className="style_divv">
    <ul>
        <li>أسلوب <bdi><b>removeAttribute()</b></bdi> يزيل سمة وليس له قيمة إرجاع.</li>
        <li>تقوم طريقة <bdi><b>removeAttributeNode()</b></bdi> بإزالة كائن <b>Attr</b> وإرجاع الكائن الذي تمت إزالته.</li>
    </ul>
</div>