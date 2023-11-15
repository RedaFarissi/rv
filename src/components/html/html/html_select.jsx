{% load static %}
<h1 class="heading-style-html"><u><i>  HTML select</i></u></h1>
<h3>1 . العنصر select </h3>
<div class="style_divv">
    الوسم  <kbd>&lt;select&gt;</kbd> في لغة  <b>HTML</b> يتم استخدامها لتعريف قائمة منسدلة تظهر عندما ينقر المستخدم فوق عنصر النموذج ويسمح للمستخدم بتحديد أحد الخيارات. لتحديد الخيارات المتوفرة، استخدم الوسم <kbd>&lt;option&gt;</kbd> داخل الوسم <kbd>&lt;select&gt;</kbd>.<br>
    غالبا ما يستخدم <kbd>&lt;select&gt;</kbd> في نموذج، لجمع مدخلات المستخدم.<br>
    السمة <b>name</b>  مطلوبة للإشارة إلى بيانات النموذج بعد إرسال النموذج (إذا حذفت السمة name، فلن يتم إرسال أية بيانات من القائمة المنسدلة).<br>
    عند النقر سيتم إرسال القيمة المكتوبة داخل السمة value .
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0px">
<pre><b style="color:var(--html-color-tags)">&lt;select&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;option&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/option&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;option&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/option&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;option&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/option&gt;</b>
   <b style="color:var(--html-color-tags)">&lt;option&gt;</b> content <b style="color:var(--html-color-tags)">&lt;/option&gt;</b>
<b style="color:var(--html-color-tags)">&lt;/select&gt;</b></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="./html/html35_select.png" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        Choose Marocan city:
        <select>
            <option value="Marakech">Marakech</option>
            <option value="Rabat">Rabat</option>
            <option value="Kenitra">Kenitra</option>
            <option value="Tanger">Tanger</option>
        </select> 
    </div>
    <h4 style="color:green"> عند النقر ستضهر قائمة منسدلة </h4>
    <img src="./html/html35_select 3.png" class="img">
</div>
<h3>2. السمة size</h3>
<div class="style_divv">
    تستخدم السمة <b>size</b> لتحديد عدد ال <b>option</b> التي ستضهر على صفحتك .
    <div class="alert bg-dark mt-2" dir="ltr" style="padding-bottom:0px">
<pre><span style="color:var(--html-color-tags)">&lt;select</span> <span style="color:var(--js-color)">size</span>=<span style="color:orange">"Number"</span><span style="color:var(--html-color-tags)">&gt;</span>
   <span style="color:var(--html-color-tags)">&lt;option&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/option&gt;</span>
   <span style="color:var(--html-color-tags)">&lt;option&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/option&gt;</span>
   <span style="color:var(--html-color-tags)">&lt;option&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/option&gt;</span>
   <span style="color:var(--html-color-tags)">&lt;option&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/option&gt;</span>
<span style="color:var(--html-color-tags)">&lt;/select&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="./html/html35_select2.png" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee img">
        <h2>Choose Marocan city:</h2>
        <select size="4">
            <option value="Marakech">Marakech</option>
            <option value="Rabat">Rabat</option>
            <option value="Kenitra">Kenitra</option>
            <option value="Tanger">Tanger</option>
        </select> 
    </div>
</div>