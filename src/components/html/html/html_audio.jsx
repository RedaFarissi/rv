{% load static %}
<h1 class="heading-style-html"><u><i> HTML audio </i></u></h1>
<h3>1. الوسم audio</h3>
<div class="style_divv">
    الوسم  <kbd>&lt;audio&gt;</kbd> يُستخدم عندما نريد وضع ملف صوتي في الموقع ونضيف دائما له اثنان <b>attribute</b> خاص به:
    <ul>
        <li><b>controls</b> : لعرض عناصر التحكم في الصوت وبدونه لا يظهر الملف الصوتي في الصفحة.</li>
        <li><b>src</b> : وتكون قيمته عبارة عن مسار وإسم الملف الصوتي.</li>
        <li>دائما استخدم امتداد <b>mp3</b> لأن جميع المتصفحات تدعمه.</li>
    </ul>
    <div class="codeStudio alert bg-dark pb-0 mt-3" dir="ltr">
        <pre><span style="color:var(--html-color-tags)">&lt;audio</span> <span style="color:var(--js-color)">src</span>=<span style="color:orange;">"audio_name.type"</span> <span style="color:var(--js-color)">controls</span><span style="color:var(--html-color-tags)">&gt;</span><span style="color:var(--html-color-tags)">&lt;/audio&gt;</span> </pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html23_audio.png' %}" class="img"/>
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html23_audio 2.png' %}"class="img"/>
</div>

<h3>2. الوسم source</h3>
<div class="style_divv">
    يُحدِّد العنصر <kbd>&lt;source&gt;</kbd> عدِّة مصادر لملفات الوسائط المتعددة ضمن العنصر <kbd>&lt;picture&gt;</kbd> أو <kbd>&lt;audio&gt;</kbd> أو <kbd>&lt;video&gt;</kbd> وهذا العنصر فارغ، وأكثر استخدام شائع له هو توفير محتوى الوسائط المتعددة نفسه لكن بصيغ مختلفة لكي يستطيع المتصفح تشغيل أنسبها .
    <ul><li>يحتوي على ,<b>attribute</b> أساسي هو src وتكون قيمته عبارة عن مسار واسم الملف الصوتي. وهو من العناصر التي ليس لها نهاية وسم (closing tag).</li></ul>
    <div class="codeStudio alert bg-dark pb-0 mt-3" dir="ltr">
<pre><span style="color:var(--html-color-tags)">&lt;audio</span>  <span style="color:var(--js-color);">controls</span><span style="color:var(--html-color-tags)">&gt;</span> 
    <span style="color:var(--html-color-tags);">&lt;source</span> <span style="color:var(--js-color);">src</span>=<span style="color:orange;">"audio_name.type"</span><span style="color:var(--html-color-tags)">&gt;</span>
<span style="color:var(--html-color-tags)">&lt;/audio&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <ul><li>يبيّن هذه المثال كيفية تضمين مقطع صوتي باستخدام العنصر <strong>&lt;audio&gt;</strong> وله أكثر من مصدر، أحدها بصيغة <b>ogg</b> والآخر بصيغة <b>mp3</b></li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html23_audio2.png' %}" class="img"/>
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html23_audio 2.png' %}" class="img"/>
</div>
<h3>3. السمات الممكن إستعمالها داخل الوسم audio  </h3>
<h5>السمة muted </h5>
<div class="style_divv" >
    <ul>
        <li> تستخدم السمة <b>muted</b> لجعل الملف الصوتي صامت  . </li>
        <li> يمكن للمستعمل تشغيل الصوة بنقر على علامة الصوة أنضر المتال .</li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <img src="{% static 'html/html23_audio3.png' %}" class="img">
</div>

<h5>السمة autoplay </h5>
<div class="style_divv" >
    <ul>
        <li> تستخدم السمة <b>autoplay</b> لجعل الملف الصوتي يعمل تلقائيا    . </li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <img src="{% static 'html/html23_audio4.png' %}" class="img">
</div>

<h5>السمة loop </h5>
<div class="style_divv" >
    <ul>
        <li> تستخدم السمة <b>loop</b> لإعادة تشغيل الملف الصوتي عند إنتهائه بستمرار . </li>
        <li> سيتم إعادة تشغيل الملف الصوتي بستمرار إلى ان يقوم المستعمل بإقافه</li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <img src="{% static 'html/html23_audio5.png' %}" class="img">
</div>
 
<h5>السمة preload </h5>
<div class="style_divv" >
    تستعمل القيمة <b>preload</b> لتحكم بتحميل الملف الصوتي داخل موقعك وتقبل تلات قيم : 
    <ul>
        <li> none : لن يقوم المتصفح بتحميل الملف الصوتي حتى يقوم المستعمل بالنقر على تشغيل الملف</li>
        <li> metadata : لن يقوم المتصفح بتحميل الملف الصوتي حتى يقوم بتحميل موقعك وتعتبر متالية </li>
        <li> auto : التحميل تلقائيا ذالك يكون على حسب سرعة أنترنت المستعمل </li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <img src="{% static 'html/html23_audio6.png' %}" class="img">
</div>