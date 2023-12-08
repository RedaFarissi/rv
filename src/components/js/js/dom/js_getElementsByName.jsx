{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript getElementsByName </i></u></h1>
<div class="style_divv mt-5">
    ترجع طريقة <bdi><b>getElementsByName()</b></bdi> مجموعة من العناصر باسم محدد.<br>
    تقوم طريقة <bdi><b>getElementsByName()</b></bdi> بإرجاع قائمة <b>NodeList</b> مباشرة.
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementsByName(<span style="color:orange">"name"</span>)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js71_getElementsByName.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">  2  </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js71_getElementsByName2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">  
        <input type="text" name="text">
        <button class="btn btn-light mb-3" onclick="val()"> value </button>
        <div id="resulta" class="border border-primary alert alert-success">  

        </div>
    </div>
</div>
<script>
    function val(){
      const name = document.getElementsByName("text")
      const resulta = document.getElementById("resulta")
      resulta.innerHTML = ` ${name[0].value} <br>`
      resulta.innerHTML +=` ${name[0].outerHTML} <br>`
      resulta.innerHTML +=` ${name[0].tagName} <br>`
    }
</script>