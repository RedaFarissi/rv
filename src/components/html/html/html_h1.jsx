{% load static %} 

<h1 class="heading-style-html"><u><i>HTML heading</i></u></h1>
<div class="style_divv mt-5">
    العناوين في لغة <b>HTML</b> من أهم الوسوم التي تسخدم في <b>HTML</b> فالعناوين معرّفة بوسوم من :<br>
    <kbd>&lt;h1&gt;</kbd> الى ... <kbd>&lt;h1&gt;</kbd> . <kbd>&lt;h6&gt;</kbd> هو أكبر مقاس للعنوان بينما نجد أن الوسم <kbd>&lt;h6&gt;</kbd> هو أصغر مقاس للعناوين.<br>
    <div class="codeStudio alert bg-dark text-light OBject" dir="ltr" style="margin-top: 9px">
        <span style="color:var(--html-color-tags)">&lt;h1</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/h1&gt;</span> <br>
    </div>
    <div class="codeStudio alert bg-dark text-light OBject" dir="ltr">
        <span style="color:var(--html-color-tags)">&lt;h2</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/h2&gt;</span> <br>
    </div>
    <div class="codeStudio alert bg-dark text-light OBject" dir="ltr">
        <span style="color:var(--html-color-tags)">&lt;h3</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/h3&gt;</span> <br>
    </div>
    <div class="codeStudio alert bg-dark text-light OBject" dir="ltr">
        <span style="color:var(--html-color-tags)">&lt;h4</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/h4&gt;</span> <br>
    </div>
    <div class="codeStudio alert bg-dark text-light OBject" dir="ltr">
        <span style="color:var(--html-color-tags)">&lt;h5</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/h5&gt;</span> <br>
    </div>
    <div class="codeStudio alert bg-dark text-light OBject" dir="ltr">
        <span style="color:var(--html-color-tags)">&lt;h6</span><span style="color:var(--html-color-tags)">&gt;</span> content <span style="color:var(--html-color-tags)">&lt;/h6&gt;</span> <br>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">مثال : </div>
    <ul><li> <i>  لاحظ ان كل العناوين تقوم بالعودة إلى سطر تلقائيا </i></li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html1_h1.png' %}" class="img" id="img_h" style="height:60vh;">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html1_h1 2.png' %}"class="img" id="img_h">
</div>