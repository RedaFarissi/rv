{% load static %}
<h1 class="heading-style-html"><u><i> HTML span </i></u></h1>
<div class="style_divv mt-5">
    الوسم <b>span</b> هو وسم زوجي يكتب على الشكل التالي :<kbd>&lt;span&gt; content &lt;/span&gt;</kbd><br/>
    <ul>
        <li> الوسم <kbd>&lt;span&gt;</kbd> عبارة عن حاوية مضمنة تُستخدم لترميز جزء من نص أو جزء من مستند.</li>
        <li>يتم تصميم الوسم <kbd>&lt;span&gt;</kbd> بسهولة بواسطة <b>CSS</b> أو التلاعب بها باستخدام <b>JavaScript</b> باستخدام سمة <b>class</b> أو <b>id</b>.</li>
        <li>الوسم <kbd>&lt;span&gt;</kbd> لا يقوم بالعودة إلى سطر تلقائيا .</li>
    </ul>
    <div class="codeStudio alert bg-dark" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;span</span> <span style="color:var(--js-color)">id</span>=<span style="color:orange;">"id_name"</span> <span style="color:var(--js-color)">class</span>=<span style="color:orange;">"class_name"</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/span&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html22_span.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <span style="font-size:xx-large;">My</span> mother has <span style="color:blue;">blue</span> eyes.
    </div>
</div>