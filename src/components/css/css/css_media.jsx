{% load static %} 
<style>
  .Parent{
    background-color:greenyellow; display:flex; justify-content:space-between; width:max(1400px , 100%); flex-wrap:wrap;
  }
  .Parent > div{
    background-color:yellow; width:240px; margin:20px; text-align:center; padding:20px;
    color:red; font-size:35px; border:outset 9px red;
  }
  /**********************************************************************/
  .parent{
    background-color:greenyellow;
    width:max(1400px , 100%);
    display:flex; justify-content:space-between;
    flex-wrap: wrap;
  }
  .parent > div{
    background-color: yellow; width:240px;
    margin:20px;   text-align:center;
    padding:20px; color:red;
    font-size:35px; border:outset 9px red;
  }
  @media only screen and (max-width: 1400px){
    .parent{ width: 100%; }
    .parent > div{ width:40%; }
  }
  @media only screen and (max-width: 900px){
    .parent > div{ width:100%; }
  }
</style>
<h1 class="heading-style-css"><u><i> CSS media </i></u></h1>
<div class="style_divv mt-5">
    تُستخدم القاعدة <b>media</b>  لجعل موقعك متجاوب مع جميع الأجهزة .<br>
    يمكن استخدام استعلامات الوسائط للتحقق من أشياء كثيرة ، مثل عرض وارتفاع منفذ العرض و عرض الجهاز وارتفاعه .<br>
    يعد استخدام استعلامات الوسائط تقنية شائعة لتقديم ورقة أنماط مخصصة (تصميم ويب سريع الاستجابة) لأجهزة الكمبيوتر المكتبية وأجهزة الكمبيوتر المحمولة والأجهزة اللوحية والهواتف المحمولة.<br><br>
   <b style="color:rgba(0 90 55/60%)">الشكل العام للإستخدام : </b> <br><br>
   <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr"><pre>
  <b style="color:var(--violet-color)">@media</b> not|only <span style="color:orange">mediatype</span> and <span style="color:yellow">(</span>mediafeature and|or|not mediafeature<span style="color:yellow">)</span> {
   <span style="color:green">/* CSS-Code ; */</span>
  }<br></pre>
   </div>

    يمكنك أيضًا الحصول على <b>media</b> مختلفة لوسائط مختلفة وذال بستعمال الخاصية <b>link</b> ، مثل  :<br>
<div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr"><pre>
<small><b style="color:var(--html-color-tags)">&lt;link</b> <b style="color:var(--js-color)">rel</b>=<span style="color:orange">"stylesheet"</span> <b style="color:var(--js-color)">media</b>=<span style="color:orange">"screen and (min-width: 900px)"</span> <b style="color:var(--js-color)">href</b>=<span style="color:orange">"./name_file.css"</span><b style="color:var(--html-color-tags)">&gt;</b></small>
<small><b style="color:var(--html-color-tags)">&lt;link</b> <b style="color:var(--js-color)">rel</b>=<span style="color:orange">"stylesheet"</span> <b style="color:var(--js-color)">media</b>=<span style="color:orange">"screen and (max-width: 500px)"</span> <b style="color:var(--js-color)">href</b>=<span style="color:orange">"./name_file2.css"</span><b style="color:var(--html-color-tags)">&gt;</b></small>
</pre></div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <ul>
        <li> في المتال أسفله لم تقم الخاصية <b>flex-wrap</b> بإجاع العناصر الأخرى إلى السطر لأننا قمنا بإعطاء العنصر الأب الخاصية <b>width</b> بقيمة محددة .</li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css65_media.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee" style="overflow: auto;">
        <div class="parent">
          <div> A </div>
          <div> B </div>
          <div> C </div>
          <div> D </div>
        </div>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <ul><li> في المتال أسفله لم تقم الخاصية <b>flex-wrap</b> بإجاع العناصر الأخرى إلى السطر لأننا قمنا بإعطاء العنصر الأب الخاصية <b>width</b> بقيمة محددة .</li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css65_media.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee" style="overflow: auto;">
        <div class="Parent">
          <div> A </div>
          <div> B </div>
          <div> C </div>
          <div> D </div>
        </div>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital">متال 2 : </div>
    <ul>
        <li> في المتال أسفله قمنا بإجراء تعديل على <b>CSS</b> عندما يكون عرض الشاشة أقل من <bdi>1400px</bdi> أو <bdi>900px</bdi> .</li>
        <li> من خلال <b>media</b> يمكن إعطاء تصميم  إعتمادا على عرض الصورة .</li>
        <li> قم بتغيير حجم الشاشة لتأكد بنفسك </li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css65_media2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee" style="overflow: auto;">
        <div class="parent">
          <div> A </div>
          <div> B </div>
          <div> C </div>
          <div> D </div>
        </div>  
    </div>
</div>
