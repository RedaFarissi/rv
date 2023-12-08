{% load static %} 
<style>
  .reda{ background-color: red;width: 90%; height: 200px;  }
</style>
<h1 class="heading-style-js"><u><i> JavaScript setAttribute </i></u></h1>
<div class="style_divv mt-5">
    يعين الأسلوب <bdi><b>setAttribute()</b></bdi> قيمة جديدة للسمة.<br>
    إذا كانت السمة غير موجودة ، يتم إنشاؤها أولاً.
    <div class="alert bg-dark pb-0 mt-3">
        <pre> <span style="color:var(--js-color)">element</span>.<span style="color:gold">setAttribute(<span style="color:white;">name</span>, <span style="color:white;">value</span>)</span></pre></div>
    </div>
</div>
<div class="sum_exemple_style">
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js146_setAttribute.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="result">  
            <h2> Heading </h2>
        </div>
    </div>
</div>

<script>
    const res = document.getElementById("result")
    const div = document.createElement("div");
    div.setAttribute("class","reda")
    res.appendChild(div)
</script>