{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript localStorage </i></u></h1>
<div class="style_divv mt-5">
    يسمح لك كائن <b>localStorage</b> بحفظ أزواج المفتاح / القيمة في المتصفح.<br>
    يخزن كائن التخزين المحلي البيانات بدون تاريخ انتهاء الصلاحية.<br>
    لا يتم حذف البيانات عند إغلاق المتصفح ، وتكون متاحة للجلسات المستقبلية.<br>
    لحفظ البيانات في <b>localStorage</b> إستخدم :
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">setItem(</span><span style="color:orange">"key"</span>, value<span style="color:gold">)</span></pre>
    </div>
    لقراءة البيانات من <b>localStorage</b>  إستخدم :
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">getItem(</span><span style="color:orange">"key"</span><span style="color:gold">)</span></pre>
    </div>
    لإزالة البيانات من <b>localStorage</b>  إستخدم :
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">removeItem(</span><span style="color:orange">"key"</span><span style="color:gold">)</span></pre>
    </div>
    لإزالة الكل البيانات المخزنة داخل <b>localStorage</b>  إستخدم :
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">clear()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js48_localStorage.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <h2>true</h2>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js48_localStorage2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <h2>Reda Eskouni <br> <span style='color:#1592ff'>null</span></h2>
    </div>
</div>