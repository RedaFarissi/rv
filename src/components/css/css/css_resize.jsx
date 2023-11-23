{% load static %} 
<style> 
    #dIv {border: 2px solid; padding: 20px;width: 70%;resize: both;overflow: auto;max-width: 100% ;max-height:49vh }
    #hori { border: 2px solid;padding: 20px;width: 70%; resize: horizontal;overflow: auto;max-width: 100% ;}
    #verti {border: 2px solid;padding: 20px; width: 70%;resize: vertical;overflow: auto;max-height:55vh}
    #textarea{ resize: none;}
</style>
<h1 class="heading-style-css"><u><i>CSS resize</i></u></h1>
<div class="style_divv mt-5">
    تُستخدم الخاصية <b>resize</b> في لغة  <b>CSS</b> لتغيير حجم العنصر وفقًا لمتطلبات المستخدم .  <br>
    لا تنطبق خاصية تغيير الحجم على العناصر التي تحمل  <b>inline</b> أو  <b>block</b>  حيث <bdi>overflow ="visible"</bdi> .
    لذا ، تأكد من ضبط الخاصية <b>overflow</b> على "scroll" أو "auto" أو "hidden" .<br>
    تقبل الخاصية <b>resize</b> أربع قيم وهي كالتالي :
    <ul>
        <li> <b>both</b> : من خلال هذه القيمة يمكن السماح للمستعمل بتغيير حجم العناصر من ناحية الطول والعرض.</li>
        <li> <b>horizontal</b> من خلال هذه القيمة يمكن السماح للمستعمل بتغيير حجم العناصر من ناحية العرض فقط.</li>
        <li> <b>vertical</b> : من خلال هذه القيمة يمكن السماح للمستعمل بتغيير حجم العناصر  من ناحية الطول فقط</li>
        <li> <b>none</b> : المستخدم غير قادر على تغيير حجم العنصر. إنها قيمة افتراضية </li>
    </ul>
</div>
<h3>1. القيمة both </h3>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<ul><li>  يمكنك الضعط على بوردر من الجهة اليمنى السفلية وتغيير حجم العنصر من ناحية الطول و العرض . </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css25_resize.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <div style="font-size:45px">The resize Property</div>
    <div id="dIv">
        <p>Let the user resize both the height and the width of this div element.</p>
        <p>To resize: Click and drag the bottom right corner of this div element.</p>
    </div>
</div>
</div>
<h3>2. القيمة horizontal </h3>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<ul><li>  يمكنك الضعط على بوردر من الجهة اليمنى السفلية وتغيير حجم العنصر من ناحية  العرض . </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css25_resize2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" >
    <div style="font-size:45px">The resize Property</div>
    <div id="hori">
        <p>Let the user resize only the width of this div element.</p>
        <p>To resize: Click and drag the bottom right corner of this div element.</p>
    </div>
</div>
</div>

<h3>3. القيمة vertical </h3>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <ul><li>  يمكنك الضعط على بوردر من الجهة اليمنى السفلية وتغيير حجم العنصر من ناحية الطول  . </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css25_resize3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div style="font-size:45px">The resize Property</div>
        <div id="verti">
            <p>Let the user resize only the height of this div element.</p>
            <p>To resize: Click and drag the bottom right corner of this div element.</p>
        </div>
    </div>
</div>

<h3>4. القيمة none </h3>
<div class="style_divv">
    قيمة إفتراضية لأغلب العناصر <b>HTML</b> .<br>
    يمكن إستعماله أيضا لجعل العناصر التي  لها حجم متغير تابت متل <kbd>textarea</kbd>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <ul><li>  يمكنك الضعط على بوردر من الجهة اليمنى السفلية وتغيير حجم العنصر من ناحية الطول  . </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css25_resize4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div style="font-size:45px">The resize Property</div>
        <textarea id="textarea">  </textarea>
    </div>
</div>
