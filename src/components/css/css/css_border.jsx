{% load static %} 
<style>
  #a,#b,#c,#d{ 
    background-color: yellow; 
    width: 350px; 
    padding: 9px;
  }
  #a{border: groove 9px red;}
  #b{border: ridge  9px red;}
  #c{border: inset  9px red;}
  #d{border: outset 9px red ;}
</style>
<h1 class="heading-style-css"><u><i>  CSS borders </i></u></h1>
<h3>1- إنشاء حدود </h3>
<div class="style_divv">
    تسمح لك الخاصية <b>border</b> في لغة  <b>CSS</b> بتحديد خط يمتل حد العنصر يمكن تحديد عرض الخط و نوعه و لونه أيضا  .<br>
       يمكن تحديد لون و سمك و نوع الخط دفعتا واحدة كما هو موضح أسفله  ولاكن يجب أن تكتب القيم بترتيب محدد وهو كتالي :<br>
    1. قيمة محددة بال <b>px</b> أو  <b>ch</b> أو  <b>em</b> أو <b>cm</b>  أو <b>in</b> أو <b>mm</b> أو <b>pc</b> ..إلخ . غالبا ما نستخدم px .<br>
    2. نوع الخط يكون عبارة عن واحد من الأشكال التالية <b>dashed</b> , <b>solid</b> , <b>dotted</b> , <b>wavy</b> :<br>
        <ul>
            <li> <b>solid</b> : تستعمل من أجل الخط المتصل </li>
            <li> <b>dashed</b> : تستعمل من أجل الخط المتقطع </li>
            <li> <b>dotted</b>  : تستعمل من أجل إنشاء خط  من النقط </li>
            <li> <b>wavy</b>  : تستعمل من أجل إنشاء خط  مموج  </li>
            <li> <b>double</b> :  تستعمل من أجل الخط المزدوج    </li>
        </ul>
    3. لون الخط يمكنك تحديد أي لون تريد بصيغة أحرف متل black , aqua , .. أو بضيغة rgb() أو بصغة <b>HEX</b> .
    <ul><li><small>ستتعلم كل شيئ عن الألوان في فقرة <b>color</b> من هاذا البرنامج التعليمي الخاص بلغة <b>CSS</b> .</small></li></ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css3_border.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css3_border 2.png' %}" class="img">
</div>
<ul>
    <li> ال <b>border</b> هو ذالك الإطار الذي  يحيط بالعناوين يمكن أتحكم بشكل الخط واللون و  سمك الخط . </li>
</ul>
<h3>2- تحديد إتجاه الحدود</h3>
<div class="style_divv">
    في المتال الأول  عند تحديد عنصر و إعطائه الخاصية <b>border</b> فإن الحد يشمل يمين العنصر ويساره و الفوق و التحت وتلك تكون طريقة جيدة أحيانا ولاكن أحيانا أخرى قد تكون غير مرغوبة  .<br>
    يمكنك كتابة <b>border</b> كل إتجاه لوحده وتحكم بشكل أفضل
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css3_border2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css3_border2 2.png' %}" class="img"><br>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <ul><li>  طرق أخرى لتحديد border .</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css3_border3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css3_border3 2.png' %}" class="img">
</div>
<h3>3- الخط التلاتي الأبعاد </h3>
<div class="style_divv">
 الخط التلاتي الأبعاد و يكون عبارة عن واحد من الأشكال التالية <b>groove</b> , <b>ridge</b> , <b>inset</b> , <b>outset</b> :<br>
    <ul>
        <li><b>groove</b> : يحدد حدًا محززًا ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود </li>
        <li><b>ridge</b> : يحدد حدًا مموجًا ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود</li>
        <li><b>inset</b> : يحدد حد داخلي ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود</li>
        <li><b>outset</b> : يحدد حد خارجي ثلاثي الأبعاد. التأثير يعتمد على قيمة لون الحدود</li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css3_border4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <h2>border-style: groove</h2>
        <p id="a"> border: groove 9px red; </p>
        <h2>border-style: ridge</h2>
        <p id="b"> border: ridge  9px red; </p>
        <h2>border-style: inset </h2>
        <p id="c"> border: inset  9px red; </p>
        <h2>border-style: outset</h2>
        <p id="d">border: outset 9px red ;</p>
    </div>
</div>