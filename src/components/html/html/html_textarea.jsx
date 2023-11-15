{% load static %}

<h1 class="heading-style-html"><u><i> HTML textarea </i></u></h1>
<h3>1. الوسم textarea </h3>
<div class="style_divv">
يعرف الوسم  <kbd>&lt;textarea&gt;</kbd> عنصر تحكم إدخال نص متعدد الأسطر و هو وسم زوجي  . <br>
غالبا ما يستخدم <kbd>&lt;textarea&gt;</kbd> في نموذج ، لجمع مدخلات المستخدم مثل التعليقات  .<br>
 يمكن أن تحتفظ منطقة النص بعدد غير محدود من الأحرف، ويتم عرض النص بخط ثابت العرض (عادة Courier).
 <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
    <pre><span style="color:var(--html-color-tags)">&lt;textarea</span> <span style="color:var(--js-color)">name</span>=<span style="color:orange">""</span> <span style="color:var(--js-color)">id</span>=<span style="color:orange">""<span style="color:orange"> <span style="color:var(--html-color-tags)">&gt;</span> <span style="color:var(--html-color-tags)">&lt;/textarea&gt;</span></pre>
 </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html39_textarea.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        Review codding : <textarea>default text</textarea><button>OK</button>
    </div>
</div>
<h3>2. السمات المستعملة   </h3>
<h5>1. السمة  placeholder</h5>
<div class="style_divv">
    تستعمل هذه السمة لتلميح (يضهر نص توضيحي تقوم بتحديده بنفسك داخل السمة placeholder ) و يختفي بعد كتابة أول حرف .
</div>
<h5>2. السمة  autofocus</h5>
<div class="style_divv">
    تستعمل هذه السمة لتركيز التلقائي على الوسم <kbd>&lt;textarea&gt;</kbd>  .
</div>
<h5>3. السمة  cols</h5>
<div class="style_divv">
    تستعمل هذه السمة لتحديد عدد الأحرف التي لا تريد تجاوزها في كل سطر (إذا تجاوز المستخدم الحد الأقصى الدي حددته يقوم المتصفح بالعودة إلى سطر تلقائيا)   .
</div>
<h5>4. السمة  rows</h5>
<div class="style_divv">
    تستعمل هذه السمة لتحديد عدد الأسطر التي لا تريد تجاوزها كحد أقصى .
</div>
<h5>5. السمة  maxlength</h5>
<div class="style_divv">
    تستعمل هذه السمة لتحديد عدد الأحرف التي لا تريد تجاوزها كحد أقصى  .
</div>
<h5>5. السمة  required </h5>
<div class="style_divv">
    تستعمل هذه السمة لتحديد أن الحقل يجب ملأه بشكل إجباري   .
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html39_textarea2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <textarea maxlength="20" placeholder="entrez votre email ici"></textarea>
        <textarea row="1" cols="22"></textarea><button>OK</button>
    </div>
</div>
