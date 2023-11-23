{% load static %} 
<style>
    #transition{color :white;margin: auto;width: 30%;height: 30vh;background-color: blueviolet;font-size: large;transform: rotate(0deg);transition:  width 3s,height 3s,font-size 6s,transform  6s,color 6s;}
    #transition:hover{width: 40%;height: 40vh;font-size: xxx-large; transform: rotate(360deg);color:magenta;}
    #transition2{margin:auto;width: 50%;border: 2px solid black; border-radius: 0px;background-image:linear-gradient(to left,white,white,white);transition:  width 5s,border 5s,border-radius 5s , background-image 5s;}
    #transition2:focus{width: 80%;border: 6px solid darkgreen ;border-radius: 20px; background-image:linear-gradient(to left,rgb(130,255,0),#808080,rgb(105,255,255));}
    #transi{  border:0.5px solid black;  background-color: orangered;width: 100px;height: 50px;transition: width 2s;}
    #transi:hover{ width:300px;}
    .div { width: 100px;height: 100px; background: red; margin: 7px; transition: width 2s;}
    #div1 {transition-timing-function: linear;}
    #div2 {transition-timing-function: ease;}
    #div3 {transition-timing-function: ease-in;}
    #div4 {transition-timing-function: ease-out;}
    #div5 {transition-timing-function: ease-in-out;}
    .div:hover { width: 300px;}
    #DIvv {  width: 100px;height: 100px;background: red;transition: width 3s;transition-delay: 2s;}
    #DIvv:hover {width: 300px;}
    #TR {width: 100px;height: 100px; background: red;  transition: width 2s linear 1s;}
    #TR:hover { width: 300px;}
</style>
<h1 class="heading-style-css"><u><i> CSS transition</i></u></h1>
<h3>1. الخاصية transition </h3>
<div class="style_divv">
    تسمح لك الخاصية <b>transition</b> في لغة <b>CSS</b> بتغيير قيم الخصائص بسلاسة ، خلال مدة معينة .<br>
    تستخدم مع الخاصية <b>focus</b> و الخصية <b>hover</b> .<br>
    تستقبل الخاصية <b>transition</b> إسم الخاصية التي تريد تغييرها تم مدة التغير بتانية <bdi>(s)</bdi> .<br>
    جميع الخصائص التي ترغب بإضافتها إلى الخاصية <b>transition</b> يجب أن تقوم بتحديد لها قيمة أولية تم بعد ذالك تغير الخصائص بستعمال الخاصية <b>hover</b> أو <b>focus</b> .
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<ul>
    <li>مرر الماوس فوق العنصر <b>div</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li>
    <li>في هاذا المتال الوقت المحدد لتنفيد الأوامر على خاصية ال <b>width</b> هو تانيتين .</li>
</ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css27_transition0.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <div id="transi"></div>
</div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<ul><li>مرر الماوس فوق العنصر <b>div</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css27_transition.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee" style="height:50vh;">
    <div id="transition"> Hello word </div>
</div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 3 :  </div>
<ul><li>أنقر فوق العنصر <b>input</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css27_transition2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <input id="transition2"  type="text" placeholder="click ici"/> 
</div>
</div>
<h3>2. الخاصية transition-timing-function </h3>
<div class="style_divv">
    تحدد خاصية <b>transition-timing-function</b> منحنى السرعة لتأثير الانتقال .<br>
    يمكن أن تحتوي خاصية دالة توقيت الانتقال على القيم التالية:
    <ul>
        <li><b>ease </b> : يحدد تأثير انتقال ببداية بطيئة ، ثم سريعة ، ثم تنتهي ببطء (قيمة أولية) </li>
        <li><b>linear </b>  يحدد تأثير انتقال بنفس السرعة من البداية إلى النهاية</li>
        <li><b>ease-in </b>  يحدد تأثير انتقال ببداية بطيئة</li>
        <li><b>ease-out </b>: يحدد تأثير انتقال بنهاية بطيئة</li>
        <li><b>ease-in-out </b> يحدد تأثير الانتقال مع بداية ونهاية بطيئين</li>
        <li><b>cubic-bezier(n,n,n,n)</b> يتيح لك تحديد القيم الخاصة بك في دالة cubic-bezier .</li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<ul><li>مرر الماوس فوق العناصر <b>div</b> أدناه لمشاهدة تأثير <b>transition-timing-function</b> في لغة  <b>CSS</b> .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css27_transition3.png' %}" class="img"/>
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <div style="font-size: 42px;">The transition-timing-function Property</div>
    <p>Hover over the div elements below, to see the different speed curves:</p>
    <div id="div1" class="div">linear</div>
    <div id="div2" class="div">ease</div>
    <div id="div3" class="div">ease-in</div>
    <div id="div4" class="div">ease-out</div>
    <div id="div5" class="div">ease-in-out</div>
</div>
</div>

<h3>3. الخاصية transition-delay </h3>
<div class="style_divv">
    تحدد الخاصية <b>transition-delay</b> وقت تأخيرًا (بالثواني) لتأثير الانتقال.<br>
    المثال التالي به تأخير لمدة 2 ثوانٍ قبل البدء:
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<ul><li>مرر الماوس فوق العناصر <b>div</b> وإنتضر لمدة 2 ثوانٍ .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css27_transition4.png' %}" class="img"/>
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div  class="styleee"  style="text-align:center;">
    <div style="font-size:42px;">The transition-delay Property</div>
    <p>Hover over the div element below, to see the transition effect:</p>
    <div id="DIvv"></div>
    <p><b>Note:</b> The transition effect has a 2 second delay before starting.</p> 
</div>
</div>