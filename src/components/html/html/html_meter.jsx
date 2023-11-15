{% load static %}
<h1 class="heading-style-html"><u><i>  HTML meter </i></u></h1>
<h3>1. الوسم meter</h3>
<div class="style_divv">
    يعرف الوسم <kbd>&lt;meter&gt;</kbd> قياسا مقياسيا داخل نطاق معروف، أو قيمة كسرية. وهذا ما يعرف أيضا باسم مقياس .<br>
    يجب إضافة السمات التالية إلى  الوسم <kbd>&lt;meter&gt;</kbd> :<br>
     max : لتحديد القيمة القصوى .<br>
     min : لتحديد القيمة الدنيا  .<br>
     value : لتحديد القيمة  .<br>
    <div class="codeStudio alert bg-dark mt-2" dir="ltr" style="padding-bottom: 0px;">
        <pre><span style="color:var(--html-color-tags)">&lt;meter</span> <span style="color:var(--js-color)">max</span>=<span style="color:orange;">"max_value"</span> <span style="color:var(--js-color)">min</span>=<span style="color:orange;">"min_value"</span> <span style="color:var(--js-color)">value</span>=<span style="color:orange;">"value"</span><span style="color:var(--html-color-tags)">&gt;</span><span style="color:var(--html-color-tags)">&lt;/meter&gt;</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'html/html38_meter.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'html/html38_meter 2.png' %}" class="img">
</div>
<h3>2.  السمات المستعملة  </h3>
<div class="style_divv">
    في المتال السابق إستعملنا السمات   max و min و value ولاكن تعتبر سمات أساسية ليضهر العنصر بشكل صحيح .<br>
    توجد سمات تستعمل مع الوسم <kbd>&lt;meter&gt;</kbd> وذالك لتبيين الفرق بين القيم .  هذه السمات هي :<br>
    low : تحدد أن كل العناصر الذي تأخد قيمة value أصغر من قيمة low تكون بالون الأحمر  .<br>
    high: تحدد أن كل العناصر الذي تأخد قيمة value أصغر من قيمة high تكون بالون الأصفر  <br>
    optimum : تحدد أن كل العناصر الذي تأخد قيمة value أصغر من قيمة optimum تكون بالون الأخضر (قيمة فتراضية) . <br>
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'html/html38_meter2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'html/html38_meter2 2.png' %}" class="img">
</div>
<ul><li>يمكن تصميم الشكل ليكون أكتر إحترافية عبر لغة <b>CSS</b> .</li></ul>