{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript blur </i></u></h1>
<div class="style_divv mt-5">
    تزيل طريقة <bdi><b>blur()</b></bdi> التركيز من عنصر.
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">blur()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js82_blur.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"> 
        <input type="email" id="text">
        <button id="bottona"> remove focus </button>
    </div>
</div>
<script>
    const text = document.getElementById("text")
    const btn = document.getElementById("bottona")
    text.focus()
    btn.addEventListener('click', function(){
      text.blur()
    });
</script>