{% load static %}

<h1 class="heading-style-html"><u><i>HTML dl</i></u></h1>
<div class="style_divv mt-5">
    يستخدم الوسم <kbd>&lt;dl&gt;</kbd> في <b>HTML</b> لتمثيل قائمة الوصف. يستخدم هذا الوسم مع الوسم <kbd>&lt;dt&gt;</kbd> و <kbd>&lt;dd&gt;</kbd> . 
    <ul>
        <li style="margin-bottom:9px">يستخدم الوسم  <kbd>&lt;dt&gt;</kbd> في <b>HTML</b> لتحديد عناوين  قائمة الوصف. يتم استخدامه داخل الوسم <kbd>&lt;dl&gt;</kbd>. وعادة ما يتبعه الوسم <kbd>&lt;dd&gt;</kbd></li>
        <li style="margin-bottom:9px">تشير العلامة <kbd>&lt;dd&gt;</kbd> في <b>HTML</b> إلى وصف التعريف وتستخدم للإشارة إلى وصف أو تعريف عنصر في قائمة الوصف. يمكن إدراج الفقرات وفواصل الأسطر والصور والروابط والقوائم داخل علامة <kbd>&lt;dd&gt;</kbd></li>
    </ul>
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
<pre><b style="color:var(--html-color-tags)">&lt;dl&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;dt&gt;</b> title1 <b style="color:var(--html-color-tags)">&lt;/dt&gt;</b>
      <b style="color:var(--html-color-tags)">&lt;dd&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/dd&gt;</b>
      <b style="color:var(--html-color-tags)">&lt;dd&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/dd&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;dt&gt;</b> title2 <b style="color:var(--html-color-tags)">&lt;/dt&gt;</b>
      <b style="color:var(--html-color-tags)">&lt;dd&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/dd&gt;</b>
      <b style="color:var(--html-color-tags)">&lt;dd&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/dd&gt;</b>
<b style="color:var(--html-color-tags)">&lt;/dl&gt;</b> </pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html30_dl.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html30_dl 2.png' %}" class="img">
</div>
<ul><li> يمكن إستخدام <b>CSS</b> لتصميم شكل جميل <small> ستتعلم ذالك خلال دروس <b>CSS</b></small> </li></ul>