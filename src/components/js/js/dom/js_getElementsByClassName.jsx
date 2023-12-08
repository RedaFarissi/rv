{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript getElementsByClassName </i></u></h1>
<div class="style_divv mt-5">
    ترجع طريقة <bdi><b>getElementsByClassName()</b></bdi> مجموعة من العناصر باسم (أسماء) فئة محددة.<br>
    تقوم طريقة <bdi><b>getElementsByClassNam()</b></bdi> بإرجاع <b><span style="color:brown;cursor:pointer" data-bs-toggle="collapse" data-bs-target="#id_name"> HTMLCollection</span></b><br>
    <div id="id_name" class="collapse alert bg-info text-dark my-2"> 
        مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <B>HTML</B>.<br>
        مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br>
        يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br>
        ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br>
    </div>
    خاصية <bdi><b>getElementsByClassName()</b></bdi> للقراءة فقط.<br>
    <div class="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementsByClassName(<span style="color:orange">'class_elements'</span>)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js70_getElementsByClassName.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2>4</h2>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js70_getElementsByClassName2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <h2 class="h2"></h2>
        <h2 class="h2"></h2>
        <h2 class="h2"></h2>
    </div>
</div>

<script>
    const h2 = document.getElementsByClassName("h2")
    for(let i=0 ; i<h2.length ; i++){
      if(i < 2)
        h2[i].style = "background-color:brown;font-size:23px"
      else
        h2[i].style = "background-color:yellow;font-size:23px"
      h2[i].innerHTML = i
    }
</script>