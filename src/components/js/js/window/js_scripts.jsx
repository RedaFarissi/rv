{% load static %} 
<h1 className="heading-style-js"><u><i>  JavaScript scripts </i></u></h1>
<div className="style_divv mt-5">
    تقوم خاصية البرامج النصية بإرجاع مجموعة من جميع عناصر <kbd>&lt;script&gt;</kbd> في المستند.<br/>
    تقوم خاصية البرامج النصية بإرجاع مجموعة <b><span style="color:brown;cursor:pointer" data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>
    <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
        مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <B>HTML</B>.<br/>
        مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
        يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
        ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
    </div>.<br/>
    خاصية البرامج النصية للقراءة فقط.
    <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">scripts</span></pre>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js78_scripts.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> 
        <div className="h2">document scripts</div>
        Hello World!
        <p>The number of script elements in the document:</p>
        3
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 2 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js78_scripts2.png' %}" className="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div className="styleee img"> 
        Hello World!<br/>
        document.write("Hello World!");<br/>
        const result = document.getElementById("result") result.innerHTML = document.scripts[0].text + "";<br/>
        result.innerHTML += document.scripts[1].text
    </div>
</div>
