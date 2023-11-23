{% load static %} 
<h1 class="heading-style-css"><u><i>  CSS Backgrounds </i></u></h1>
<div class="style_divv">
    يتم استخدام خاصية <b>Background</b> في <b>CSS</b> لإضافة تأثيرات خلفية للعناصر.<br>
    في هذا الفصل، سوف تتعلم حول خصائص خلفية <b>CSS</b> التالية:
    <ul dir="ltr">
        <li><b>background-color</b></li>
        <li><b>background-image</b></li>
        <li><b>background-repeat</b></li>
        <li><b>background-attachment</b></li>
        <li><b>background-position</b></li>
        <li><b>background-clip</b></li>
    </ul>
</div>
<h3>1.  لون الخلفية background-color </h3>
<ul><li> تحدد خاصية <b>background-color</b> لون خلفية عنصر. </li></ul>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background 2.png' %}" class="img"><br>
</div>
- مع CSS، يتم تحديد اللون في أغلب الأحيان بواسطة:
<ul>
    <li> اسم لون صالح مثل <b>red</b> </li>
    <li> قيمة <b>HEX</b> مثل <bdi>#ff0000</bdi></li>
    <li> قيمة <b>RGB</b> مثل  rgb(255,0,0)</li>
</ul>
<div class="sum_exemple_style">
<div class="mital">متال 2 : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background2 2.png' %}" class="img">
</div>
<ul><li>يمكنك تعيين لون الخلفية لأي عنصر <b>HTML</b></li></ul>
<h3>2. تحديد صورة كخلفية background-image</h3>
<ul><li>تحدد خاصية <b>background-image</b> صورة لاستخدامها كخلفية لعنصر.
بشكل افتراضي، يتم تكرار الصورة بحيث تغطي العنصر بأكمله وذالك فقط أن كانت الصورة صغيرة الحجم .<br></li></ul>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background3 2.png' %}" class="img">
</div>
<ul><li> تم تكرار الصورة لكي تناسب الخلفية تلقائيا .</li></ul>
<h3>3. تكرار الخلفية background-repeat</h3>
<ul>
    <li> بشكل افتراضي، خاصية <b>background-image</b> تكرر صورة أفقيا وعموديا. ولاكن أنت كمصمم مواقع قد تريد تكرار بعض الصور أفقيا أو رأسيا فقط ، أو منع التكرار نهائيا يمكن التحكم بكل ذالك بستعمال <b>background-repeat</b> .</li>
    <li> يمكن أن تحتوي الخاصية <b>background-repeat</b> على القيم التالية : no-repeat أو (قيمة أولية) repeat  أو  repeat-x  أو repeat-y</li>
</ul>
<div class="sum_exemple_style">
<div class="mital">متال :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background4 2.png' %}" class="img">
</div>
<ul><li>في هاذا المتال الصورة لم تتكرر لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>no-repeat</b> .</li></ul>
<div class="sum_exemple_style">
<div class="mital">متال 2 :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background5 2.png' %}" class="img">
</div>
<ul><li>في المتال التاني الصورة تكررت أفقيا لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>repeat-x</b> .</li></ul>
<div class="sum_exemple_style">
<div class="mital">متال 3 :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background6.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background6 2.png' %}" class="img">
</div>
<ul><li>في المتال التالت الصورة تكررت عموديا لأننا قمن بكتابة الخاصية <b>background-repeat</b> مع القيمة <b>repeat-y</b> .</li></ul>
<h3>4.  تحديد مكان الخلفية  background-position</h3>
<ul>
    <li> عند إدخال خلفية من نوع صورة يمكن إستعمال الخاصية <b>background-position</b> مع القيم التالية <b>left top</b> أو <b>left center</b> أو <b>left bottom</b> أو <b>right top</b> أو <b>right center</b> أو <b>right bottom</b> أو <b>center top</b> أو <b>center center</b> أو <b>center bottom</b> وذالك لتحديد المكان الذي تريد وضع فيه الخلفية من نوع صور </li>
    <li> يجب إستخدام الخاصية <b>background-attachment</b> مع القيمة <b>fixed</b> لجعل الصورة تابتة بمكان واحد  </li>
</ul>
<div class="sum_exemple_style">
<div class="mital">متال 4 :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background7.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background7 2.png' %}" class="img">
</div>
<h3>5. إمتداد الخلفية background-clip </h3>
<ul>
    <li>تستعمل الخاصية <b>background-clip</b>  خاصية لتحديد مدى إمتتداد الخلفية (الألوان أو الصورة) داخل عنصر</li>
    <li>يمكن إعطاء الخاصية  <b>background-clip</b> القيم <b>padding-box</b> أو <b>border-box</b> أو  <b>content-box</b> .</li>
</ul>
<div class="sum_exemple_style">
<div class="mital">متال :</div>
<ul><li>القيمة <b>padding-box</b> تجعل ال <b>border</b> خارج الخلفية ولاكن بدون ترك مساحة بين الإتنين . </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background8.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background8 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :</div>
<ul><li> القيمة <b>border-box</b> تجعل ال <b>border</b> داخل الخلفية  .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background9.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background9 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 3 :</div>
<ul><li> القيمة <b>content-box</b> تجعل ال <b>border</b> خارج الخلفية و تترك <b>margin</b> بين الإتنين يمكن إختيار حجم ال <b>margin</b> بنفسك في هذه الحالة 20px .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css_background10.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css_background10 2.png' %}" class="img">
</div>