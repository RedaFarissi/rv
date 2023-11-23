{% load static %} 
<style>
    .flo{
        width: 30%;
        height: 90px;
        background-color: blueviolet;
        text-align: center;
        line-height: 90px;
        margin-bottom: 20px;
    }
</style>

<h1 class="heading-style-css"><u><i> CSS float  </i></u></h1>
<div class="style_divv mt-5">
تُستخدم الخاصية <b>float</b> لتحديد موضع المحتوى وتنسيقه .<br>
يمكن أن تحتوي الخاصية <b>float</b> على إحدى القيم التالية:<br>
<ul>
    <li> <b>left</b> : يطفو العنصر إلى يسار الحاوية الخاصة به </li>
    <li> <b>right</b> : يطفو العنصر على يمين الحاوية الخاصة به</li>
    <li> <b>none</b> : لا يطفو العنصر (سيتم عرضه في مكان ظهوره في النص فقط). هذا هو الافتراضي</li>
    <li> <b>inherit</b> : يرث العنصر القيمة <b>float</b>  للعنصر الأصل </li>
</ul>
في أبسط استخدام لها ، يمكن استخدام خاصية الطفو لالتفاف النص حول الصور.
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<div style="background-color:azure;padding:2px">
    <div class="flo" style="float:left;color:white">float left</div>
    <div class="flo" style="float:right;color:white;">float right</div>
    <br style="clear:both;">
</div>

</div>
<h3>1. الخاصية float مع القيمة right </h3>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<ul><li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> لا يتواجد ضمن أي عنصر أخر لذالك سيكون يمين الصفحة لأنه يعود في هذه الحالة على العنصر body</b>  </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css29_float.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css29_float 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 2 : </div>
<ul>
    <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> يتواجد ضمن عنصر <b>div</b> أخر .</li>
    <li> بواسطة  <b>id</b> قمنا بتحيد عرض العنصر <b>div</b> الأب بقيمة  <bdi>75%</bdi>  عند إعطاء الخاصية <b>float</b> للوسم <b>div</b> الإبن سيتم تحديد الموضع نسبتا للوسم الأب .</li>
</ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css29_float2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css29_float2 2.png' %}" class="img">
</div>
<br>
<h3>2. الخاصية float مع القيمة left </h3>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<ul>
    <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> لا يتواجد ضمن أي عنصر أخر لذالك سيكون يسار الصفحة لأنه يعود في هذه الحالة على العنصر body</b>  </li>
</ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css29_float3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css29_float3 2.png' %}" class="img">
</div>
<div class="mital"> متال 2 : </div>
<div class="sum_exemple_style">
<ul>
    <li>في هاذا المتال العنصر <b>div</b> الذي قمنى بإضافة له الخاصية <b>float</b> يتواجد ضمن عنصر <b>div</b> أخر .</li>
    <li> بواسطة  <b>id</b> قمنا بتحيد عرض العنصر <b>div</b> الأب بقيمة  <bdi>60%</bdi> وجعلناه وسط الصفحت بستخدام الخاصية <b>margin</b> مع القيمة <b>auto</b> عند إعطاء الخاصية <b>float</b> للوسم <b>div</b> الإبن سيتم تحديد الموضع نسبتا للوسم الأب .</li>
</ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css29_float4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css29_float4 2.png' %}" class="img">
</div>
<br>
<div class="sum_exemple_style">
<div class="mital"> متال 3 : </div>
<ul>
    <li>في هذا المتال قمنا بتحديد لكل عناصر <b>div</b> الخاصية <b>width</b> بنسبة <bdi>20%</bdi> تم الخاصية  <b>float</b> بالقيمة <b>left</b> لكل العناصر لاحض أن أول 5 عناصر تم عرضها في سطر واحد لأن <bdi>5 x 20 = 100</bdi> .  </li>
   
</ul>
<img src="{% static 'css/css29_float5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css29_float5 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 4 : </div>
<ul>
    <li>يمكن إنشاء فراغ لتفرقة بين العناصر وذالك بستخدام الخاصية <b>margin</b> . </li>
    <li>لاحض أن العنصر الدي يحمل خلفية بلون <b>pink</b> تغير مكانه وذالك لأنه تم إضافة <b>margin</b> لكل الجوانب بنسبة ,<bdi>2%</bdi> وبتالي لم تعد المساحة كافية ونتيجتا لذالك تم إعادته لسطر جديد </li>
</ul>
<img src="{% static 'css/css29_float6.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css29_float6 2.png' %}" class="img">
</div>