{% load static %} 
<h1 className="heading-style-js"><u><i>  JavaScript links </i></u></h1>
<div className="style_divv mt-5">
    تقوم خاصية الروابط بإرجاع مجموعة من كل الروابط الموجودة في المستند.<br/>
    تقوم خاصية النماذج بإرجاع <b><span style="color:brown;cursor:pointer" data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br/>
    <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
        مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <B>HTML</B>.<br/>
        مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
        يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
        ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
    </div>
    خاصية الروابط للقراءة فقط.<br/>
    تمثل الروابط الموجودة في المجموعة عناصر <kbd>&lt;a&gt;</kbd> و <kbd>&lt;area&gt;</kbd> بسمة <b>href</b>.
    <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">links</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js75_links.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img" id="reSulta"> 
        <a href="https://www.google.com"> google</a><br/>
        <a href="https://www.facebook.com/"> facebook </a>
        <div id="resulta">

        </div>
    </div>
</div>
<script>
    id_result = document.getElementById("resulta")
    id_result.innerText = document.links[0].outerHTML
</script>