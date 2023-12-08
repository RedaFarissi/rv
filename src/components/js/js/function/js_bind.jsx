{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript bind </i></u></h1>
<div class="style_divv">
    باستخدام طريقة <bdi><b>bind()</b></bdi> ، يمكن للكائن استعارة طريقة من كائن آخر.<br>
    ينشئ المثال أدناه كائنين (شخص وعضو).<br>
    يستعير كائن العضو أسلوب الاسم الكامل من كائن الشخص
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
<pre><span style="color:gold;">bind(</span>thisArg <span style="color:gold;">)</span>
<span style="color:gold;">bind(</span>thisArg, arg1<span style="color:gold;">)</span>
<span style="color:gold;">bind(</span>thisArg, arg1, arg2<span style="color:gold;">)</span>
<span style="color:gold;">bind(</span>thisArg, arg1, arg2, … ,  argN<span style="color:gold;">)</span> </pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <ul><li> عند كتابة إسم object نقطة إسم الدالة بدون أقواس فإنك تقوم بنسخ الدالة فقط و لن تستطيع إستخدام المعلومات داخل ال object  </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js147_bind2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
      <div id="result"></div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <ul>
        <li> يمكن الإستفادة من نسخة الدالة التي بداخل object و ذالك من خلال إسنادها إلى متغير وإضافة أقواس . </li>
        <li> سيحاول هذا المثال عرض اسم الشخص  ، لكنه سيعرض undefined بدلاً من ذلك . وذالك لأنه لا يستطيع الوصول إلى  F_Name و L_Name و Age لأنه دالة منفصلة </li>
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js147_bind.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <p style="margin :0px">undefined</p>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 3 :  </div>
    <ul>
        <li> عند إستخدام الخاصية bind يمكن تمرير البيانات الخاصة ب object أخر شرط أن يحتوي العنصر على نفس key مع الدالة المستوردة .</li>    
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js147_bind3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="resulta"></div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 4 :  </div>
    <ul>
        <li> يمكن إستدعاء نسخة الدالة بواسطة أقواس أخر الدالة أو من خلال إسنادها إلى متغير أخر كالأمتلة السابقة . </li>    
    </ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js147_bind4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <img src="{% static 'js/js147_bind5.png' %}" class="img">
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 5 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js147_bind6.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div class="h2"> function () { [native code] }<br>Rabab Thing 26 </div>
    </div>
</div>

<script>
    const person = {
      F_Name: "Reda",
      L_Name : "Eskouni",
      Age     : 25,
      fullName() {
        if(this.Age > 20){
          return this.F_Name + " " + this.L_Name; 
        }
      }
    };
    const person2 = { F_Name: "Kamal", L_Name : "Toumi", Age : 32 }
    const person3 = { F_Name: "Hamo", L_Name : "Zayani", Age : 42 }
    
    var create_another_function = person.fullName
    var result = document.getElementById("result")
    result.innerHTML = create_another_function
    var resulta = document.getElementById("resulta")
    
    var another_function = person.fullName.bind(person)
    resulta.innerHTML = another_function() + "<br>"

    another_function = person.fullName.bind(person2)
    resulta.innerHTML += another_function() + "<br>"

    another_function = person.fullName.bind(person3)
    resulta.innerHTML += another_function() + "<br>"
    console.log("Adil Toumi")
</script>