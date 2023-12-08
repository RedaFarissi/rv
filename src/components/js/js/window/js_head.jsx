{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript head </i></u></h1>
<div class="style_divv mt-5">
    تقوم خاصية <b>head</b> بإرجاع عنصر <kbd>&lt;head&gt;</kbd> للمستند.
    <div class="alert alert-warning my-3">
        <b>ملحوظة</b>
        إذا لم يكن هناك عنصر <kbd>&lt;head&gt;</kbd> ، فإن <b>HTML</b> تضيف عنصرًا فارغًا.<br>
        إذا كان هناك أكثر من عنصر <kbd>&lt;head&gt;</kbd> ، فإن هذه الخاصية ترجع العنصر الأول.
    </div>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">head</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js73_head.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img" id="reSulta">  </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js73_head2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"> TITLE<br>META </div>
</div>

<script>
    document.getElementById("reSulta").innerText = `<head>
        <title> head JavaScript </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>`
</script>