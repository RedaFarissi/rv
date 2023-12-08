{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript documentElement </i></u></h1>
<div class="style_divv mt-5">
    تقوم خاصية <b>documentElement</b> بإرجاع عنصر مستند (ككائن عنصر).<br>
    المستند للقراءة فقط.<br>
    بالنسبة إلى مستندات <b>HTML</b> ، يكون الكائن الذي تم إرجاعه هو عنصر <kbd>&lt;html&gt;</kbd> .<br>
    <div class="alert alert-warning">
        <b>ملحوظة</b><br>
        الفرق بين <b style="color:var(--js-color)">document.body</b> و <b style="color:var(--js-color)">document.documentElement</b><br>
        يُرجع <b style="color:var(--js-color)">document.body</b> عنصر <kbd>&lt;body&gt;</kbd><br>
        تُرجع <b style="color:var(--js-color)">document.documentElement</b> عنصر <kbd>&lt;html&gt;</kbd>.<br>
        أنظر أيضا:<br>
        خاصية نص المستند<br>
        كائن <b>HTML DOM HTML</b><br>
        علامة <b>HTML</b> <kbd>&lt;html&gt;</kbd>
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- return html document  --&gt;</span>
<span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">documentElement</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js120_documentElement.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <img src="{% static 'js/js120_documentElement2.png' %}" class="img">
</div>