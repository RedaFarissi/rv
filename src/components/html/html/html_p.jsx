{% load static %} 

<h1 class="heading-style-html"><u><i>  HTML p</i></u></h1>
<div class="style_divv mt-5">
    <ul>
        <li>يحدد عنصر <kbd>&lt;p&gt;</kbd> فقرة.</li>
        <li>تبدأ الفقرة دائمًا بسطر جديد ، وتضيف المستعرضات تلقائيًا بعض المسافات البيضاء (هامش) قبل الفقرة وبعدها .</li>
        <li> عند نهاية الفقرة يتم العودة إلى سطر تلقائيا . </li>
        <li>يكتب الوسم <kbd>&lt;p&gt;</kbd> على شكل التالي :</li>
    </ul>
    <div class="codeStudio alert bg-dark" dir="ltr">
        <bdi><span style="color:var(--html-color-tags)">&lt;p&gt;</span> paragraph <span style="color:var(--html-color-tags)">&lt;/p&gt;</span> <br>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html16_p.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <p dir="rtl">هذه فقرة</p>
        <p dir="rtl">هذه فقرة أخرى </p>
    </div>
</div>