{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript Function </i></u></h1>
<h3> 1. Function</h3>
<div class="style_divv">
    الدالة <b>function</b> هي كتلة من التعليمات البرمجية مصممة لأداء مهمة معينة.<br>
    يتم تنفيذ وظيفة <b>JavaScript</b> عند الإستدعاء.<br>
    يمكنك إعادة استخدام الكود: قم بتعريف الكود مرة واحدة ، واستخدمه عدة مرات من خلال <b>function</b>.<br>
    يتم تعريف دالة <b>JavaScript</b> بالكلمة الأساسية للوظيفة ، متبوعة باسم ، متبوعًا بأقواس ().<br>
    يمكن أن تحتوي أسماء الوظائف على أحرف وأرقام وشرطات سفلية وعلامات الدولار <small><small>(نفس قواعد المتغيرات)</small></small>.<br><br>
    قد تتضمن الأقواس <b>parameters</b> مفصولة بفواصل وذالك من اجل إستخدامها وسط الدالة : (<bdi>parameter,parameter2</bdi>) <br>
    يتم وضع الكود المطلوب تنفيذه بواسطة الوظيفة داخل أقواس معقوفة: {}<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
<pre><span style="color:var(--html-color-tags)">function</span> <span style="color:gold">name_Function(</span><span style="color:var(--js-color)">parameter</span> , <span style="color:var(--js-color)">parameter2</span> , <span style="color:var(--js-color)">parameter3</span><span style="color:gold">)</span>{
   <span style="color:green;">//code to be executed</span>
}</pre></div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <ul><li> عند تشغيل الكود لن يحدت أي شيء لأننا لم نقم بستدعاء الدالة <small><small>(function)</small></small> </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js21_Function.png' %}" class="img">
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js21_Function2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"><h2> reda Eskouni </h2></div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 3 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js21_Function3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"><h2> Aymane El Toumi </h2></div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 4 :  </div>
    <ul><li>يمكن إنشاء دالة <small><small>(function)</small></small> بدون <b>parameters</b></li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js21_Function4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"><h2 style="color:red;border:2px solid black;padding:9px;width:max-content;margin:auto;"> First Name : Reda<br>Last Name : Eskouni<br>Age : 25<br>Nationality : Moroccan </h2></div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 5 :  </div>
    <ul><li> يمكن تنفيد الدالة <small><small>(function)</small></small> عدة مرات وذالك عن طريق إستدعائها  </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js21_Function5.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"><h2> 
        <div style="color:green;border:2px solid black;padding:9px;width:60%;margin:9px auto;font-size:75%;">
            <span style="color:black;">First Name :</span> Reda<br>
            <span style="color:black;">Last Name :</span>Eskouni<br>
            <span style="color:black;">Age :</span> 26 years<br>
            <span style="color:black;">Nationality :</span> Moroccan<br>
        </div>
        <div style="color:green;border:2px solid black;padding:9px;width:60%;margin:9px auto;font-size:75%;">
            <span style="color:black;">First Name :</span> Yassin<br>
            <span style="color:black;">Last Name :</span>Bazouz<br>
            <span style="color:black;">Age :</span> 36 years <br>
            <span style="color:black;">Nationality :</span> Moroccan<br>
        </div>
        <div style="color:green;border:2px solid black;padding:9px;width:60%;margin:9px auto;font-size:75%;">
            <span style="color:black;">First Name :</span>Amal<br>
            <span style="color:black;">Last Name :</span>Toumi<br>
            <span style="color:black;">Age :</span> 23 years <br>
            <span style="color:black;">Nationality :</span>Indian<br>
        </div>
    </h2></div>
</div>
<h3>2. Function Return</h3>
<div class="style_divv">
    تستخدم الكلمة <b>return</b> داخل الدالة <small><small>(function)</small></small> ، عندما تصل <b>JavaScript</b> إلى عبارة إرجاع ، ستتوقف الدالة عن التنفيذ.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 12px;padding-bottom:0pt;">
<pre><span style="color:var(--html-color-tags)">function</span> <span style="color:gold">name_Function(</span>parameter1 , parameter2<span style="color:gold">)</span>{
    <span style="color:var(--violet-color)">return</span> parameter1 <span style="color:orange">*</span> parameter2 ; 
}</pre></div>
</div>
<div class="mital"> متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'js/js21_Function6.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الأكواد </h4>
<div class="styleee img"><h2>2<br>4<br>6<br>8<br>10<br>12<br>14<br>16<br>18<br>20 </h2></div>
<h3>3. Functions As Variables</h3>
<div class="style_divv">
    يمكن استخدام الدوال <small><small>(function)</small></small> بنفس الطريقة التي تستخدم بها المتغيرات ، في جميع أنواع الصيغ والتعيينات والحسابات. <br>
    وذالك فقط مع الدوال التي تقوم بإعادة قيمة <small><small>(الدوال التي تحتوي على الكلمة return)</small></small>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 12px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">let</span> x = <b style="color:gold">name_Function(</b>parameter1<b style="color:gold">)</b>;</pre>
    </div>
</div>
<div class="mital"> متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'js/js21_Function7.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الأكواد </h4>
<div class="styleee img"><h2>520</h2></div>
<h3>4. Local Variables</h3>
<div class="style_divv">
    المتغيرات المعلنة ضمن دالة <b>JavaScript</b> ، تصبح محلية <small><small>(LOCAL)</small></small> لدالة.<br>
    لا يمكن الوصول إلى المتغيرات المحلية إلا من داخل الدالة.<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 12px;">
<pre><span style="color:green">//<b style="-webkit-text-stroke:0.3px red">CAN NOT</b> use lang here</span>

<span style="color:var(--html-color-tags)">function</span> <b style="color:gold">name_Function()</b> {
   <span style="color:var(--html-color-tags)">let</span> lang = <span style="color:orange">"HTML"</span>;
   <span style="color:green">//<b style="-webkit-text-stroke:0.3px yellow">CAN</b> use lang here</span>
}
<span style="color:green">//<b style="-webkit-text-stroke:0.3px red">CAN NOT</b> use lang here</pre>
    </div> 
    
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 12px;">
<pre><span style="color:green">//<b style="-webkit-text-stroke:0.3px red">CAN NOT</b> use lang here</span>

<span style="color:var(--html-color-tags)">function</span> <b style="color:gold">name_Function()</b> {
   <span style="color:var(--html-color-tags)">var</span> lang = <span style="color:orange">"HTML"</span>;
   <span style="color:green">//<b style="-webkit-text-stroke:0.3px yellow">CAN</b> use lang here</span>
}
<span style="color:green">//<b style="-webkit-text-stroke:0.3px yellow">CAN</b> use lang here</pre>
    </div> 
</div>
<div class="mital"> متال :  </div>
<ul><li> في المتال أسفله لا يمكن إستخدام المتغير sum خارج الدالة لأنه معرف وسط الدالة </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'js/js21_Function8.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الأكواد </h4>
<div class="styleee img"><h2>199</h2></div>