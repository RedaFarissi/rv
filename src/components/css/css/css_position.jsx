{% load static %} 
<style>
    .esemple{
        width:20%; height:12vh; border:1px solid black; float:left; margin-right:9px; margin-top: 50px;
    }
    #esemple1{ background-color: green; }
    #esemple2{ background-color: yellow; }
    #esemple3{ background-color: red; }
</style>
<h1 class="heading-style-css"><u><i> CSS position </i></u></h1>
<div class="style_divv mt-5">
    تحدد خاصية <b>position</b> طريقة تحديد الموضع المستخدمة للعنصر.
    هناك خمس قيم مختلفة للخاصية <b>position</b> وهي كالتالي:
    <ul dir="ltr">
        <li>position : static</li>
        <li>position : relative</li>
        <li>position : fixed</li>
        <li>position : absolute</li>
        <li>position : sticky</li>
    </ul>
</div>

<h3>1. القيمة static مع الخاصية position</h3>
<div class="style_divv">
    يتم وضع عناصر <b>HTML</b> مع القيمة <b>static</b> دائما كقيمة أولية .<br>
    لا تتأثر العناصر بالقيمة <b>static</b> المتموضعة بالخصائص العلوية والسفلية واليسرى واليمنى.<br>
    أي عنصر <b>HTML</b> مع الخاصية <b>position</b> والقيمة <b>static</b> فهو عنصر لم يتم وضعه بأي طريقة خاصة يتم وضعه دائمًا وفقًا للتدفق الطبيعي للصفحة .
</div>
<h3>2. القيمة relative  مع الخاصية position</h3>
<div class="style_divv">
    تحدد خاصية <b>relative</b> كيفية وضع عنصر في المستند .<br>
    عند تغير مكان عنصر من عناصر <b>HTML</b> بستخدام القيمة <b>relative</b> مع الخاصية <b>position</b> يتم تحويل العنصر إلى المكان المحدد بستعمال الخصائص <b>top</b> و <b>bottom</b> و <b>left</b> و <b>right</b> ولاكن يبقى المكان الأصلي محجوز مما يعني أنه لن يتم تعديل المحتوى الآخر ليناسب أي فجوة يتركها العنصر . 
</div>
<div class="sum_exemple_style">
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css28_position.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css28_position 2.png' %}" class="img">
</div>
<h3>3. القيمة fixed  مع الخاصية position</h3>
<div class="style_divv">
    تستخدم القيمة <b>fixed</b> مع عناصر <b>HTML</b> بالنسبة إلى إطار العرض ، و  يظل دائمًا في نفس المكان حتى إذا تم تمرير الصفحة. يتم استخدام الخصائص <b>top</b> و <b>bottom</b> و <b>left</b> و <b>right</b> لتحديد موضع العنصر .<br>
    لا يترك العنصر الثابت فجوة في الصفحة حيث كان من الطبيعي أن يكون موجودًا.<br>
    تبقى العناصر  <b>HTML</b> في نفس المكان حتى بعد تمرير شريط التمرير . <br>   
    لاحظ العنصر الثابت في الزاوية اليمنى السفلية من الصفحة. هنا هو CSS المستخدم:
</div>
<div id="fix_div" dir="ltr"> div with position:fixed </div>
<h3>4. القيمة absolute  مع الخاصية position</h3>
<div class="style_divv">
    تستخدم القيمة <b>absolute</b> مع عناصر <b>HTML</b> لتحديد مكان وضع العنصر و  يتم وضعه بالنسبة إلى أقرب خاصية <b>position</b> مع قيمة <b>relative</b> . في حال لم يكن أي عنصر يحمل الخاصية <b>position</b> مع قيمة <b>relative</b> سيكون المرجع هو القيمة الأولية للخاصية <b>position</b>.<br>
    تتم إزالة العناصر المطلقة ذات المواضع من التدفق العادي ، ويمكن أن تتداخل مع العناصر مما يعني أنه يتم تعديل المحتوى الآخر ليصبح بتدفق العادي .<br>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <img src="{% static 'css/css28_position2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css28_position2 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 : </div>
    <img src="{% static 'css/css28_position3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css28_position3 2.png' %}" class="img">
</div>