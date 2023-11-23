{% load static %} 
<h1 class="heading-style-css"><u><i> CSS display grid</i></u></h1>
<h3>1. display grid</h3>
<div class="style_divv">
    تستعمل الخاصية <b>display</b> مع القيمة <b>grid</b> ويتم إضافة الخاصية للعنصر لأب وذالك من اجل التحكم بالعناصر الأبناء .<br>
    بالمحاداة مع الخاصية <b>display</b> مع القيمة <b>grid</b> تستعمل الخاصية <b>grid-template-columns</b> وذالك من أجل التحكم بالعناصر الأبناء 
    <div class="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top:9px">
        <b style="color:lightskyblue">display</b> : <span style="color:orange">grid</span>;<br>
        <b style="color:lightskyblue">grid-template-columns</b> : <span style="color:orange">auto auto 25px</span>; <br> 
    </div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css51_grid.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css51_grid 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css51_grid2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css51_grid2 2.png' %}" class="img">
</div>
<h3>2. gap</h3>
<div class="style_divv">
    تحدد الخاصية <b>gap</b> حجم الفجوة بين الصفوف والأعمدة .<br>
    <div class="codeStudio alert bg-dark OBject" dir="ltr" style="margin-top:9px">
        <b style="color:lightskyblue">display</b> : <span style="color:orange">grid</span>;<br>
        <b style="color:lightskyblue">grid-template-columns</b> : <span style="color:orange">auto auto 25px</span>; <br>
        <b style="color:lightskyblue">gap</b> : <span style="color:orange">9px</span>; <br>    
    </div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css51_grid3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css51_grid3 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css51_grid4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css51_grid4 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 3 : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css51_grid5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css51_grid5 2.png' %}" class="img">
</div>