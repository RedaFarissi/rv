{% load static %}
<h1 class="heading-style-html"><u><i> HTML ul</i></u></h1>
<h3>1. شرح الوسم ul </h3>
<div class="style_divv">
    نستخدم الوسم <kbd>&lt;ul&gt;</kbd>  لإنشاء  قائمة (نقطية) غير مرتبة.<br>
    نستخدم الوسم <kbd>&lt;li&gt;</kbd>  داخل الو سم <kbd>&lt;ul&gt;</kbd> لتفرقة بين المحتوى 
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
<pre><b style="color:var(--html-color-tags)">&lt;ul&gt;</b>
    <b style="color:var(--html-color-tags)">&lt;li&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/li&gt;</b>
    <b style="color:var(--html-color-tags)">&lt;li&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/li&gt;</b>
<b style="color:var(--html-color-tags)">&lt;/ul&gt;</b></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html29_ul.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <ul style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ul>
    </div>
</div>
<h3>1. السمة type </h3>
<div class="style_divv">
يتم استخدام سمة <b>type</b>  مع <kbd>&lt;ul&gt;</kbd> في <b>HTML</b> لتحديد نوع العلامة المستخدمة في القائمة
</div>
    <div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html29_ul2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <ul type="circle" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ul>
        <ul type="square" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ul>
        <ul type="disc" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ul>
    </div>  
    <ul><li> معلومة : يمكن كتابة قوائم متداخلة كما هو موضح في الصورة أسفله .</li></ul>
    <img src="{% static 'html/html29_ul3.png' %}" class="img">
</div>