{% load static %}
<h1 class="heading-style-html"><u><i>  HTML ol </i></u></h1>
<h3>1. شرح الوسم ol </h3>
<div class="style_divv">
    نستخدم الوسم <kbd>&lt;ol&gt;</kbd> لعرض قائمة مرتبة <b>Ordered List</b> في الصفحة و نقصد بذلك عرض مجموعة عناصر مع إظهار رقم كل عنصر تم إدخاله فيها. من أهم ما يميز هذه القوائم أنه يمكنك عرض الترقيم بالشكل الذي تريده, فمثلاً يمكنك عرض أرقام عادية, أحرف أبجدية, أرقام رومانية <br>
    يجب كتابة محتوى الفقرات أو العناوين  الذي تريد ترقيمها داخل الوسم <kbd>&lt;li&gt;</kbd>
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
<pre><b style="color:var(--html-color-tags)">&lt;ol&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;li&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/li&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;li&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/li&gt;</b>
<b style="color:var(--html-color-tags)">&lt;/ol&gt;</b></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html28_ol.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <ol style="font-weight: 500;" >
            <li class='text-dark'>html</li>
            <li class='text-dark'>css</li>
            <li class='text-dark'>js</li>
            <li class='text-dark'>php</li>
        </ol>
    </div>
</div>
<h3>2. السمات المستعملة </h3>
<h5> السمة type </h5>
<div class="style_divv" >
يمكن إستعمال السمة <b>type</b> مع الوسم <kbd>&lt;ol&gt;</kbd> وذالك لتحديد نوع الذي تريد إستخدامه من قوائم التشغيل التالية :(1,a,A,i تم I)
<ul>
    <li style="margin-bottom:9px;"><b>1</b> هذه هي القيمة الافتراضية. يحدد عناصر القائمة في رقم عشري. (… 4 ، 3 ، 2 ، 1).</li>
    <li style="margin-bottom:9px;"><b>a</b> تحدد عناصر القائمة بأحرف صغيرة مرتبة أبجديًا. (… a, b, c, d )</li>
    <li style="margin-bottom:9px;"><b>A</b> تحدد عناصر القائمة بأحرف كبيرة مرتبة أبجديًا. (…A ، B ، C ، D)</li>
    <li style="margin-bottom:9px;"><b>i</b> تحدد عناصر القائمة بترتيب رقمي صغير. (…i, ii, iii, iv, v, vi)</li>
    <li style="margin-bottom:9px;"><b>I</b> تحدد عناصر القائمة بترتيب رقمي كبير (… I، II، III، IV، V، VI ) </li>
</ul>   
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'html/html28_ol2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee img">
    <h2><bdi>type="I"</bdi></h2>
    <ol type="I" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ol><hr>
    <h2><bdi>type="i"</bdi></h2>
    <ol type="i" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ol><hr>
    <h2><bdi>type="a"</bdi></h2>
    <ol type="a" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ol><hr>
    <h2><bdi>type="A"</bdi></h2>
    <ol type="A" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ol><hr>
</div>
</div>
<h5> السمة start </h5>
<div class="style_divv">
تحدد سمة <b>start</b>  قيمة البداية لعنصر القائمة الأول في قائمة مرتبة  <kbd>&lt;ol&gt;</kbd> .<br>
هذه القيمة هي دائمًا عدد صحيح ، حتى عندما يكون نوع الترقيم أحرفًا أو رومانًا. أنضر المتال 
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html28_ol3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <ol start="7" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ol><hr>
        <ol start="3" type="a" style="font-weight: 500;"><li class='text-dark'>html</li><li class='text-dark'>css</li><li class='text-dark'>js</li><li class='text-dark'>php</li></ol>
    </div>
</div>
<h5> السمة reversed </h5>
<div class="style_divv">
السمة <b>reversed</b> هي سمة منطقية عندما تكون موجود داخل الوسم <kbd>&lt;ol&gt;</kbd> <br/>
  تحدد أن ترتيب القائمة يجب أن يكون تنازليًا (9 ، 8 ، 7 ...) ، بدلاً من تصاعدي (1 ، 2 ، 3 ...).
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html28_ol4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <ol reversed style="font-weight: 500;">
            <li class='text-dark'>html</li>
            <li class='text-dark'>css</li>
            <li class='text-dark'>js</li>
            <li class='text-dark'>php</li>
        </ol>
    </div>
</div>