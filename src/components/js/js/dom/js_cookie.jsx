{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript cookie </i></u></h1>
<h3>1- What are Cookies</h3>
<div class="style_divv">
     تتيح لك الخاصية <b>cookie</b> تخزين معلومات المستخدم في صفحات الويب. <br>
ملفات تعريف الارتباط هي بيانات مخزنة في ملفات نصية صغيرة على جهاز الكمبيوتر الخاص بك.<br><br>
عندما يرسل خادم الويب صفحة ويب إلى متصفح ، يتم إيقاف الاتصال ، وينسى الخادم كل شيء عن المستخدم. <br><br> 
تم اختراع <b>cookie</b> لحل مشكلة كيفية تذكر المعلومات عن المستخدم <br>
<ul>
    <li>عندما يزور المستخدم صفحة ويب ، يمكن تخزين اسمه في <b>cookie</b> .</li>
    <li>في المرة التالية التي يزور فيها المستخدم الصفحة ، "يتذكر"  <b>cookie</b> اسمه.</li>
</ul>
    <div class="alert alert-danger">
    لن يعمل أي من الأمثلة أدناه إذا كان المستعرض الخاص بك به دعم <b>local cookies </b>  متوقفًا عن التشغيل.
    </div>
</div>
<h3>2- Create a Cookie with JavaScript</h3>
<div class="style_divv">
    يمكن لـ <b>JavaScript</b> إنشاء ملفات تعريف الارتباط وقراءتها وحذفها باستخدام خاصية <b>document.cookie</b>.<br>
    باستخدام <b>JavaScript</b> ، يمكن إنشاء <b>cookie</b> مثل هذا.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span> = <span style="color:orange">"user_name = Reda Eskouni"</span></pre>
    </div>
    يمكنك أيضًا إضافة تاريخ انتهاء الصلاحية <small><bdi>(بتوقيت UTC)</bdi></small>. افتراضيًا ، يتم حذف <b>cookie</b> عند إغلاق المتصفح
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span> = <span style="color:orange">"user_name = Reda Eskouni; expires=Thu, 7 April 2022 7:37:00 UTC"</span></pre>
    </div>
    باستخدام معلمة المسار ، يمكنك إخبار المتصفح بالمسار الذي ينتمي إليه <b>cookie</b> . بشكل افتراضي ، ينتمي <b>cookie</b> إلى الصفحة الحالية.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span>=<span style="color:orange">"user_name = Reda Eskouni; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"</span></pre>
    </div>
</div>
<h3>3- Read a Cookie with JavaScript</h3>
<div class="style_divv">
    باستخدام <b>JavaScript</b> ، يمكن قراءة  <b>cookie</b> على هذا النحو :  
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--html-color-tags)">let</span> x = <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span></pre>
    </div>
    سيعيد document.cookie جميع  <b>cookie</b> في سلسلة واحدة <bdi> cookie1=value; cookie2=value; cookie3=value; </bdi>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js61_cookie.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        user_name = Reda Eskouni;age = 25ans;<br>
        <b>string</b>
    </div>
</div>
<h3>4- Change a Cookie with JavaScript</h3>
<div class="style_divv">
باستخدام <b>JavaScript</b> ، يمكنك تغيير <b>cookie</b> بنفس طريقة إنشائه . <br>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js61_cookie2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        user_name = Reda Eskouni;age = 25ans;<br>
        <b>string</b><br>
        user_name = Aymane Toumi;age = 18ans;
    </div>
</div>
<h3>5- Delete a Cookie with JavaScript </h3>
<div class="style_divv">
    يعد حذف <b>cookie</b> أمرًا بسيطًا للغاية.<br>
    لا يتعين عليك تحديد قيمة <b>cookie</b> عند حذفها. <br>
    ما عليك سوى تعيين معلمة انتهاء الصلاحية على تاريخ سابق <br>
    
    <div class="codeStudio alert bg-dark mt-2 mb-3 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">cookie</span> = <span style="color:orange">"username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"</span></pre>
    </div>
    <div class="alert alert-warning mt-2">
        يجب عليك تحديد مسار ملف تعريف الارتباط للتأكد من حذف ملف تعريف الارتباط الصحيح.<br>
        لن تسمح لك بعض المتصفحات بحذف ملف تعريف الارتباط إذا لم تحدد المسار.
    </div>
</div>
<div class="alert alert-info mt-3">
    إذا كنت تريد العثور على قيمة ملف تعريف ارتباط محدد واحد ، فيجب عليك كتابة دالة <b>JavaScript</b> تبحث عن قيمة <b>cookie</b> في <bdi><b>string cookie</b></bdi> 
</div>