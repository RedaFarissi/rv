{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript createElement </i></u></h1>
<div class="style_divv mt-5">
    طريقة <bdi><b>createElement()</b></bdi> تنشئ عقدة عنصر <small><small><bdi>(element node)</bdi></small></small>.<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--html-color-tags)">let</span> variable = <span style="color:var(--js-color)">document</span>.<span style="color:gold">createElement(<span style="color:orange">'type'</span>)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js65_createElement.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2>Heading Element 1</h2>
        <h2>Heading Element 2</h2>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js65_createElement2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2>Heading Element 1</h2>
        <div><img src="{% static 'js/hajime.jpg' %}"  style="height: 250px;object-fit:contain" ></div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 3 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js65_createElement3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="myFunction()" class="btn btn-primary mb-2">click</button>
        <div id="resulTa">

        </div>
    </div>
</div>
<script>
function myFunction() {
  var y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("value", "Donald");
  document.getElementById("resulTa").appendChild(y);
}
</script>