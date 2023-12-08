{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript images </i></u></h1>
<div class="style_divv mt-5">
    تقوم خاصية <b>images</b> بإرجاع مجموعة من جميع عناصر <kbd>&lt;img&gt;</kbd> في المستند.<br>
    تقوم خاصية الصور بإرجاع مجموعة <b><span style="color:brown;cursor:pointer" data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br>
    <div id="id_name" class="collapse alert bg-info text-dark my-2"> 
        مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <B>HTML</B>.<br>
        مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br>
        يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br>
        ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br>
    </div>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">images</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js74_images.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img" id="reSulta"> 
        <img src="{% static 'js/hajime.jpg" class="w-25" style="height:200px;">
        <img src="{% static 'js/hajime2.jpg" class="w-25" style="height:200px;">
        <div class="mt-2"> length = 2 </div>
    </div>
</div>