{% load static %} 
<style>
    div.a {width: 150px;height: 80px;background-color: yellow;-ms-transform: rotate(20deg); transform: rotate(20deg);}
    div.b { width: 150px;height: 80px; background-color: yellow; -ms-transform: skewY(20deg); transform: skewY(20deg); padding: 9px;}
    div.c {  width: 150px;  height: 80px;  background-color: yellow; -webkit-transform: scaleY(1.5); -moz-transform: scaleY(1.5); transform: scaleY(1.5);  padding: 9px;}
    #div_scale{ width: 20%; height: 20vh; background-color: palevioletred; margin: auto; margin-top: 15%; margin-bottom: 15%;  }
    .box{ background-color: red; width:200px;  height:200px; border:3px solid black; margin: 100px auto; padding: 7px; box-sizing: border-box; }
    .box_contain1{ background-color:yellow; width:180px; height:180px; transform:translate(20px , 20px); }
    .box_contain2{  background-color: yellow;  width: 180px;  height:180px; transform : translate(20px , -20px);}

    .box2{ 
      background-color: red; width:320px;  height:160px;
      border:3px solid black; margin: 100px auto;padding: 7px;box-sizing: border-box;
    }
    .box_contain3{ 
      background-color: yellow; width: 300px; height:140px;
    }
    .a2{ transform : skewX(30deg); }
    .b2{ transform: skewX(-30deg);}
    .BOX_DIV{ 
      background-color:red; width:320px;  height:160px; border:3px solid black; margin:100px auto; padding:7px; box-sizing:border-box;
    }
    .BOX_contain{ background-color: yellow; width: 300px; height:140px; }
    .a3{ transform : skewY(-20deg); }
    .b3{ transform: skewY(20deg);}
    #rotate_exemple , #scaleX_exemple , #scaleY_exemple, #scale_exemple{
        display: flex;
        justify-content: space-around;
        background-color:azure;
    }
    #input_radio_box , #input_radio_box_scaleX , #input_radio_box_scaleY , #input_radio_box_scale{
        box-shadow:5px 5px 20px rgba(0 0 0/30%);
        align-self:center;
        width: 40%;
        min-height: 400px;
    }
    #rotate{
        width: 40%;box-shadow:3px 3px 20px rgba(0 0 0 /30%);min-height:max-content;margin:44% auto;
    }
    #scaleX{
      width:130px;height:130px;margin:auto;background-color:gray;margin-top:5%;margin-bottom:5%;border:2.5px solid red
    }
    #scaleY{
      width:130px;height:130px;margin:auto;background-color:gray;margin-top:15%;margin-bottom:15%;border:2.5px solid red;
    }
    #scale{width:130px;height:130px;margin:auto;background-color:gray;margin-top:15%;margin-bottom:15%;border:2.5px solid red;}
    #result-rotate,#result-scaleX,#result-scaleY,#result-scale{
      width:40%;box-shadow:3px 3px 20px rgba(0 0 0 /30%);
    }

    @media only  screen and (max-width:903px) {
        #rotate_exemple,#scaleX_exemple,#scale_exemple{
          flex-direction: column;
        }
        #input_radio_box,#input_radio_box_scaleX , #input_radio_box_scaleY, #input_radio_box_scale{
          width:100%;
          margin-bottom:27px;
          padding-left: 9px;
        }
        #Code{
          margin-bottom:20px;
        }
        #result-rotate,#result-scaleX,#result-scaleY,#result-scale{
          width: 100%;
        }
    }
</style>
<h1 class="heading-style-css"><u><i>  CSS transform </i></u></h1>
<h3> 1. transform </h3>
<div class="style_divv">
    تطبق خاصية <b>transform</b>  تحويلًا ثنائي الأبعاد أو ثلاثي الأبعاد على عنصر .<br>
    تتيح لك هذه الخاصية تدوير العناصر وقياسها ونقلها وإمالتها وما إلى ذلك
</div>
<h3 class="mt-3">2. الدالة translate </h3>
<div class="style_divv">
    من خلال إعطاء الخاصية <b>transform</b> الدالة <b>translate</b> يمكنك التحكم في مكان وضع عنصر <b>HTML</b> في صفحتك .<br>
    تقبل القيمة <b>translate</b> تلات قيم وهي كتالي :
    <ul>
        <li><b>translateX</b> : <bdi> تستعمل لتحكم بمكان عرض موقعك من ناحية ال <b>width</b> وتستقبل قيمة واحدة </bdi>.</li>
        <li><b>translateY</b> : <bdi> تستعمل لتحكم بمكان عرض موقعك من ناحية ال <b>height</b> وتستقبل قيمة واحدة </bdi>.</li>
        <li><b>translate</b>:  <bdi> تستعمل لتحكم بمكان عرض موقعك من ناحية ال <b>width</b> و <b>height</b> وتستقبل قيمتين .</bdi>.</li>
    </ul>
</div>
<h5  class="mt-2">1.  الدالة translateX</h5>
<div class="sum_exemple_style">
  <div class="mital">متال  :  </div>
  <ul><li>لاحض أنه من خلال القيمة <b>translateX</b> يمكن التحكم بمكان عرض العنصر على مستوى العرض  .</li></ul> 
  <h4 style="color:green"> الكود </h4>
  <img src="{% static 'css/css23_transform.png' %}" class="img">
  <h4 style="color:green"> بعد تشغيل الكود </h4>
  <img src="{% static 'css/css23_transform 2.png' %}" class="img">
</div>
<h5 class="mt-2">2.  الدالة translateY</h5>
<div class="sum_exemple_style">
<div class="mital"> 2 متال  :  </div>
<ul><li>لاحض أنه من خلال الدالة <b>translateY</b> يمكن التحكم بمكان عرض العنصر على مستوى الطول . </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css23_transform2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css23_transform2 2.png' %}" class="img">
</div>
<h5 class="mt-2">3.  الدالة translate </h5>
<div class="sum_exemple_style">
  <div class="mital"> متال  :  </div>
  <ul><li>لاحض أنه من خلال الدالة <b>translate</b>  يمكن التحكم بمكان عرض العنصر على مستوى الطول و العرض . </li></ul>
  <h4 style="color:green"> الكود </h4>
  <img src="{% static 'css/css56_add_transform.png' %}" class="img">
  <h4 style="color:green"> بعد تشغيل الكود </h4>
  <div class="styleee">
    <h1>The transform : translate </h1>
    <div class="box">
      <div class="box_contain1"></div>
    </div>
  </div>
</div>
<div class="sum_exemple_style">
  <div class="mital"> متال 2 :  </div>
  <h4 style="color:green"> الكود </h4>
  <img src="{% static 'css/css56_add_transform2.png' %}" class="img">
  <h4 style="color:green"> بعد تشغيل الكود </h4>
  <div class="styleee">
    <h1>The transform : translate </h1>
    <div class="box">
      <div class="box_contain2"></div>
    </div>
  </div>
</div>
<h5 class="mt-2">3.  الدالة translate</h5>
<div class="sum_exemple_style">
  <div class="mital"> 3 متال  :  </div>
  <ul><li>لاحض أنه من خلال الدالة <b>translate</b>  يمكن التحكم بمكان عرض العنصر على مستوى الطول و العرض .</li></ul>
  <h4 style="color:green"> الكود </h4>
  <img src="{% static 'css/css23_transform3.png' %}" class="img">
  <h4 style="color:green"> بعد تشغيل الكود </h4>
  <img src="{% static 'css/css23_transform3 2.png' %}" class="img">
</div>
<h3 class="mt-3">3. الدالة scale</h3>
<div class="style_divv">
    الدالة   <b>scale</b> تمكنك من مضاعفة حجم العناصر 
</div>
<h5  class="mt-2">1. الدالة  scale </h5>
<div class="style_divv">
    تقوم الدالة  <b>scale</b> بتحم في حجم العنصر .<br>
    القيمة الإفتراضية للدالة  <b>scale</b> هي <kbd>transform :scale(1,1)</kbd>  على صيغة <bdi><b>scale(x,y)</b></bdi>.<br>
    تمتل القيمة <b>x</b> من الدالة   <bdi><b>scale(x,y)</b></bdi> الدالة <bdi><b>scaleX()</b></bdi></bdi> .<br>
    تمتل القيمة <b>y</b> من الدالة   <bdi><b>scale(x,y)</b></bdi> الدالة <bdi><b>scaleY()</b></bdi></bdi> .<br>
    <ul>
      <li> عند إعطاء القيمة <b>x</b> أو <b>y</b> قيمة أكبر من 1 سيتم زيادة حجم العنصر . </li>
      <li> القيمة 2 تعني مضاعفة الحجم أي <b>200%</b> . </li>
      <li> عند إعطاء القيمة <b>x</b> أو <b>y</b> قيمة أصغر من 1 سيتم تقليص  حجم العنصر . </li>
      <li> القيمة 0.5 تعني مضاعفة الحجم أي <b>50%</b> .</li>
    </ul>
</div>
<div class="mital">متال  :  </div>
<ul><li>  أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع الدالة <bdi><b>scale()</b></bdi></li></ul>

<div id="scale_exemple"class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_scale" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh2" onclick="scale(this.value)" value="none"/> none<br>
      <input type="radio" name="bo-sh2" onclick="scale(this.value)" value="scale(1.1,1.1)"/>  scale(1.1,1.1)<br>
      <input type="radio" name="bo-sh2" onclick="scale(this.value)" value="scale(1.5,1.5)"/> scale(1.5,1.5)<br>
      <input type="radio" name="bo-sh2" onclick="scale(this.value)" value="scale(2,2)"/>     scale(2,2)  <br>
      <input type="radio" name="bo-sh2" onclick="scale(this.value)" value="scale(2,2.5)"/>   scale(2,2.5)<br>
      <input type="radio" name="bo-sh2" onclick="scale(this.value)" value="scale(0.5,2)"/>   scale(0.5,2)
    </div>
    <div id="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="scale-result" style="font-weight:500"> </span>
       </div>
    </div>
  </div>
  <div class="border bg-light border-secondary p-2" id="result-scale">
    <div class="h2"> Result: </div>
    <div id="scale"> 
      Reda 
    </div>
  </div>
</div>
<h5 class="mt-2">3. الدالة  scaleX </h5>
<div class="style_divv">
    تستخدم الخاصية <b>scaleX</b> بتحكم بحجم العنصر  على مستوى العرض فقط .<br>
</div>
<div class="mital">متال  :  </div>
<ul><li>  أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع القيمة <bdi><b>scaleX()</b></bdi></li></ul>
<div id="scaleX_exemple"class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_scaleX" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh4" onclick="scaleX(this.value)" value="none" id="none"/> none<br>
      <input type="radio" name="bo-sh4" onclick="scaleX(this.value)" value="scaleX(1.2)"/>   scaleX(1.2)<br>
      <input type="radio" name="bo-sh4" onclick="scaleX(this.value)" value="scaleX(1.5)"/>   scaleX(1.5)<br>
      <input type="radio" name="bo-sh4" onclick="scaleX(this.value)" value="scaleX(2)"/>     scaleX(2)  <br>
      <input type="radio" name="bo-sh4" onclick="scaleX(this.value)" value="scaleX(2.5)"/>   scaleX(2.5)<br>
      <input type="radio" name="bo-sh4" onclick="scaleX(this.value)" value="scaleX(0.5)"/>   scaleX(0.5)
    </div>
    <div id="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="scaleX-result" style="font-weight:500"> </span>
       </div>
    </div>
  </div>
  <div class="border bg-light border-secondary p-2" id="result-scaleX">
    <div class="h2"> Result: </div>
    <div id="scaleX"> 
      Reda 
    </div>
  </div>
</div>


<h5  class="mt-2">2. الدالة  scaleY </h5>
<div class="style_divv">
    تستخدم الخاصية <b>scaleY</b> بتحكم بحجم العنصر  على مستوى الطول فقط .<br>
</div>
<div class="mital">متال  :  </div>
<ul><li>  أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع القيمة <bdi><b>scaleY()</b></bdi></li></ul>
<div id="scaleY_exemple"class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_scaleY" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh2" onclick="scaleY(this.value)" value="none"/> none<br>
      <input type="radio" name="bo-sh2" onclick="scaleY(this.value)" value="scaleY(1.1)"/>   scaleY(1.1)<br>
      <input type="radio" name="bo-sh2" onclick="scaleY(this.value)" value="scaleY(1.5)"/>   scaleY(1.5)<br>
      <input type="radio" name="bo-sh2" onclick="scaleY(this.value)" value="scaleY(2)"/>     scaleY(2)  <br>
      <input type="radio" name="bo-sh2" onclick="scaleY(this.value)" value="scaleY(2.5)"/>   scaleY(2.5)<br>
      <input type="radio" name="bo-sh2" onclick="scaleY(this.value)" value="scaleY(0.5)"/>   scaleY(0.5)
    </div>
    <div id="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="scaleY-result" style="font-weight:500"> </span>
       </div>
    </div>
  </div>
  <div class="border bg-light border-secondary p-2" id="result-scaleY">
    <div class="h2"> Result: </div>
    <div id="scaleY"> 
      Reda 
    </div>
  </div>
</div>
<h3 class="mt-3">4- الدالة rotate </h3>
<h5 class="mt-2">1. rotate</h5>
<div class="style_divv">
  تحدد الدالة <bdi><b>rotate()</b></bdi>  التحويل الذي يحرك عنصرًا حول نقطة ثابتة (محددة بواسطة خاصية تحويل الأصل) دون تشويهه (أي تطبيق دوران مستوي). إنه دوران حول هذه النقطة. بشكل افتراضي ، هذا الأصل يتوافق مع مركز العنصر.
</div>
<div class="mital">متال  :  </div>
<ul><li>   أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotate()</b></bdi> </li></ul>
<div id="rotate_exemple"class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(0deg)" id="rota"/>  rotate(0deg)<br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(10deg)" />  rotate(10deg)<br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(30deg)"/>  rotate(30deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(60deg)"/>  rotate(60deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(90deg)"/>  rotate(90deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(120deg)"/> rotate(120deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(150deg)"/> rotate(150deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(180deg)"/> rotate(180deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(210deg)"/> rotate(210deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(240deg)"/> rotate(240deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(270deg)"/> rotate(270deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(300deg)"/> rotate(300deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(330deg)"/> rotate(330deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotate(this.value)" value="rotate(360deg)"/> rotate(360deg) <br>
    </div>
    <div id="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="rotate-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div class="border bg-light  border-secondary p-2" id="result-rotate">
    <div class="h2"> Result: </div>
    <div id="rotate" class="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div>
<h3 class="mt-3">5. الدالة skew </h3>
<div class="style_divv">
تحدد دالة الانحراف <bdi><b>skew()</b></bdi>  في لغة CSS التحويل الذي يؤدي إلى انحراف عنصر على المستوى ثنائي الأبعاد . <br>
تقوم طريقة <bdi><b>skew()</b></bdi> بإمالة عنصر على طول المحور <b>X</b> و <b>Y</b> بالزوايا المعطاة.<br>
</div>
<h5 class="mt-2">1. skewX </h5>
<div class="sum_exemple_style">
  <div class="mital"> متال  : </div>
  <h4 style="color:green"> الكود </h4>
  <img src="{% static 'css/css56_add_transform3.png' %}" class="img">
  <h4 style="color:green"> بعد تشغيل الكود </h4>
  <div class="styleee">  
    <div class="h1">The transform : skewX </div>
    <div class="box2">
      <div class="box_contain3 a2"> content </div>
    </div>
    <div class="box2">
      <div class="box_contain3 b2"> content </div>
    </div>
  </div>
</div>

<h5 class="mt-2">2. skewY</h5>
<div class="sum_exemple_style">
  <div class="mital"> متال  : </div>
  <h4 style="color:green"> الكود </h4>
  <img src="{% static 'css/css56_add_transform4.png' %}" class="img">
  <h4 style="color:green"> بعد تشغيل الكود </h4>
  <div class="styleee">
    <h1>The transform : skewY </h1>
    <div class="BOX_DIV">
      <div class="BOX_contain a3"> 
        content
      </div>
    </div>

    <div class="BOX_DIV">
      <div class="BOX_contain b3">
        content  
      </div>
    </div>
  </div>
</div>
<h5 class="mt-2">3. skew</h5>
<div class="mital">متال :</div>
  <ul><li>المثال التالي يحرف العنصر <kbd>&lt;div&gt;</kbd> بمقدار 20 درجة على طول المحور X ، و 10 درجات على طول المحور Y:</li></ul>
  <h4 style="color:green"> الكود </h4>
  <img src="{% static 'css/css23_transform4.png' %}" class="img">
  <h4 style="color:green"> بعد تشغيل الكود </h4>
  <img src="{% static 'css/css23_transform4 2.png' %}" class="img">
</div>
<script>
  function scale(value){
    document.getElementById("scale").style.transform = value;
    document.getElementById("scale-result").innerHTML = value ;
  }
  function scaleY(value){
    document.getElementById("scaleY").style.transform = value;
    document.getElementById("scaleY-result").innerHTML = value;
  }
  function scaleX(value){
    document.getElementById("scaleX").style.transform = value;
    document.getElementById("scaleX-result").innerHTML = value
  }
  function rotate(value){
    document.getElementById("rotate").style.transform = value;
    document.getElementById("rotate-result").innerHTML = value;
  }
</script>