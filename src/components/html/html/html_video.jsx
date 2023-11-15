{% load static %}
<h1 class="heading-style-html"><u><i>HTML video</i></u></h1>
<h3>1. الوسم video</h3>
<div class="style_divv">
    وسم ال <kbd>&lt;video&gt;</kbd> يُستخدم عندما نريد وضع مقطع فيديو في الموقع ونضيف دائما له اثنان <b>attribute</b>  إجبارية خاص به:
    <ul>
        <li style="margin-bottom:9px;"><b>controls</b> : لعرض عناصر التحكم في الفيديو وبدونه لا يظهر مقطع الفيديو  في الصفحة.</li>
        <li  style="margin-bottom:9px;"><b>src</b> : وتكون قيمته عبارة عن مسار وإسم ملف الفيديو .</li>
        <li  style="margin-bottom:9px;">دائما استخدم امتداد <b>mp4</b> لأن جميع المتصفحات تدعمه.</li>
    </ul>
    <div class="codeStudio alert bg-dark" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;video</span> <span style="color:var(--js-color)">src</span>=<span style="color:orange;">"video_name.type"</span> <span style="color:var(--js-color)">controls</span><span style="color:var(--html-color-tags)">&gt;</span><span style="color:var(--html-color-tags)">&lt;/video&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html24_video.png' %}" class="img"/>
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html24_video 2.png' %}" class="img"/>
</div>
<h3>2. الوسم source</h3>
<div class="style_divv">
    يُحدِّد العنصر <kbd>&lt;source&gt;</kbd> عدِّة مصادر لملفات الوسائط المتعددة ضمن العنصر <kbd>&lt;picture&gt;</kbd> أو <kbd>&lt;audio&gt;</kbd> أو <kbd>&lt;video&gt;</kbd>. وهذا العنصر فارغ، وأكثر استخدام شائع له هو توفير محتوى الوسائط المتعددة نفسه لكن بصيغ مختلفة لكي يستطيع المتصفح تشغيل أنسبها .
    <ul><li>يحتوي على <b>attribute</b> أساسي هو src وتكون قيمته عبارة عن مسار وإسم ملف الفيديو. وهو من العناصر التي ليس لها نهاية وسم (closing tag).</li></ul>
    <div class="codeStudio alert bg-dark" dir="ltr" style="padding-bottom: 0px;">
<pre><span style="color:var(--html-color-tags)">&lt;video</span>  <span style="color:var(--js-color)">controls</span><span style="color:var(--html-color-tags)">&gt;</span>
    <span style="color:var(--html-color-tags);">&lt;source</span> <span style="color:var(--js-color)">src</span>=<span style="color:orange;">"video_name.type"</span><span style="color:var(--html-color-tags)">&gt;</span>
<span style="color:var(--html-color-tags)">&lt;/video&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <ul><li>يبيّن هذه المثال كيفية تضمين مقطع فيديو باستخدام الوسم <bdi><strong>&lt;video&gt;</strong></bdi> وله أكثر من مصدر، أحدها بصيغة <b>mov</b> والآخر بصيغة <b>mp4</b></li></ul>
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html24_video2.png' %}" class="img"/>
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html24_video 2.png' %}" class="img"/>
</div>
<h3>3. السمات الممكن إستعمالها داخل الوسم video  </h3>
<h5>السمة muted </h5>
<div class="style_divv" >
    <ul>
        <li style="margin-bottom:9px;"> تستخدم السمة <b>muted</b> لجعل ملف الفيديو  صامت  . </li>
        <li > يمكن للمستعمل تشغيل الصوة بنقر على علامة الصوة أنضر المتال .</li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <img src="{% static 'html/html24_video3.png' %}" class="img">
</div>

<h5>السمة autoplay </h5>
<div class="style_divv" >
    <ul>
        <li> تستخدم السمة <b>autoplay</b> لجعل ملف الفيديو يعمل تلقائيا    . </li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<img src="{% static 'html/html24_video4.png' %}" class="img">
</div>
<h5>السمة loop </h5>
<div class="style_divv" >
    <ul>
        <li  style="margin-bottom:9px;"> تستخدم السمة <b>loop</b> لإعادة تشغيل ملف الفيديو عند إنتهائه بستمرار . </li>
        <li> سيتم إعادة تشغيل ملف الفيديو بستمرار إلى ان يقوم المستعمل بإقافه</li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<img src="{% static 'html/html24_video5.png' %}" class="img">
</div>

<h5>السمة preload </h5>
<div class="style_divv" >
    تستعمل السمة  <b>preload</b> لتحكم بتحميل ملف الفيديو داخل موقعك وتقبل تلات قيم : 
    <ul>
        <li style="margin-bottom:9px;"> none : لن يقوم المتصفح بتحميل ملف الفيديو حتى يقوم المستعمل بالنقر على تشغيل الملف</li>
        <li style="margin-bottom:9px;"> metadata : لن يقوم المتصفح بتحميل ملف الفيديو حتى يقوم بتحميل موقعك وتعتبر متالية </li>
        <li style="margin-bottom:9px;"> auto : التحميل تلقائيا ذالك يكون على حسب سرعة أنترنت المستعمل </li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<img src="{% static 'html/html24_video6.png' %}" class="img">
</div>
<h5>السمة poster </h5>
<div class="style_divv">
    <ul>
        <li> تستعمل السمة  <b>poster</b> لإضهار صورة في خلفية الفيديو </li>
        <li> تستعمل السمة  <b>poster</b> على الشكل التالي :  "poster="url</li>
        <li> مكان الكلة <b>url</b> قم بكتابة مسار الصورة وإسم و إمتداد الصورة </li>
   </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<img src="{% static 'html/html24_video7.png' %}" class="img">
</div>