{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript getElementsByTagName </i></u></h1>
<div class="style_divv mt-5">
    ترجع طريقة <bdi><b>getElementsByTagName()</b></bdi> مجموعة من كافة العناصر ذات اسم علامة محدد.<br>
    تقوم طريقة <bdi><b>getElementsByTagName()</b></bdi> بإرجاع <b><span style="color:brown;cursor:pointer" data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br>
    <div id="id_name" class="collapse alert bg-info text-dark my-2"> 
        مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <B>HTML</B>.<br>
        مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br>
        يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br>
        ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br>
    </div>
    خاصية <bdi><b>getElementsByTagName()</b></bdi> للقراءة فقط.<br>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementsByTagName(<span style="color:orange">"name"</span>)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js72_getElementsByTagName.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">  
        <div>div 1</div>
        <div>div 2</div>
        <div>div 3</div>
        <div>div 4</div>
        <div class="h4">
            NUmbers div = 5
        </div>
    </div>
</div>