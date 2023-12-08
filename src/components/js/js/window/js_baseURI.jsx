{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript baseURI </i></u></h1>
<div class="style_divv mt-5">
    تقوم الخاصية <b>baseURI</b> بإرجاع <b>URI</b> الأساسي للمستند.
الخاصية <b>baseURI</b> للقراءة فقط.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document.baseURI</span></pre>
    </div>
        الخاصية <b>baseURI</b> غير مدعومة في <bdi>Internet Explorer 11</bdi>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js59_baseURI.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <h2 id="h2"></h2>
        <script>
            document.getElementById("h2").innerHTML = document.baseURI ;
        </script>
    </div>
</div>