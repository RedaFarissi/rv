{% load static %}
<h1 class="heading-style-html"><u><i>  HTML small and big</i></u></h1>
<h3>1. تصغير الخط </h3>
<div class="style_divv">
    نستخدم الوسم <kbd>&lt;small&gt;</kbd>   لعرض الكلام الثانوية أو الذي يعتبر أقل أهمية بحجم خط أصغر . <br>
    يكتب الوسم <b>small</b> على شكل التالي : 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="margin-top: 9px;">
        <span style="color:var(--html-color-tags)">&lt;small</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/small&gt;</span>
    </div>
</div>
<h3>2. تكبير الخط </h3>
<div class="style_divv">
    تُستخدم علامة <kbd>&lt;big&gt;</kbd> في <b>HTML</b> لزيادة حجم النص المحدد بمقدار واحد أكبر من النص المحيط. في <b>HTML 5</b> ، يمكن استخدامه بواسطة <b>CSS</b>.
    <div class="alert bg-dark" dir="ltr" style="margin-top: 9px;">
        <span style="color:var(--html-color-tags)">&lt;big</span><span style="color:var(--html-color-tags);">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/big&gt;</span> 
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html4_small_big.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html4_small_big 2.png' %}" class="img">
</div>
<ul><li>لا تلقي بالا لذالك  لأنه يمكنك ستعمال <b>CSS</b> في تحكم بحجم زر كما تريد <small><small>(ستتعلم دالك خلال دروس CSS)</small></small></li></ul>