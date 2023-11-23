{% load static %} 
<style>
  #parent-div1 , #parent-div2 , #parent-DIV1 , #parent-DIV2{ margin:20px;background-color:green;}
  #parent-div1 ,  #parent-DIV1{perspective:300px;margin-bottom:90px;}
  #parent-div2 , #parent-DIV2{perspective:600px;}
  .parent{width:400px;height:400px;background-color:red;font-size:130px;margin:auto; }
  #parent-DIV1>div , #parent-DIV2>div{transform: translateZ(50px);} 

  .stylE , .style { 
    background-color:red;height:300px;margin-bottom:9px;
  }
  .diV , .div{ perspective:300px; perspective-origin: left;  }
  .diV2 , .div2{ perspective:300px; perspective-origin: center;  }
  .diV3 , .div3{ perspective:300px; perspective-origin: right;  }
  .div_A , .div_B , .div_C{ 
    background-color:green; color:white;
    margin:auto; font-size:35px;
    height:300px; width:300px;
    transform: translateZ(-300px);
  }
  .div_a , .div_b , .div_c{ 
    background-color:green;color: white;
    margin:auto; font-size: 35px;
    height:300px; width:300px;
    transform: rotateX(45deg);
  }
</style>

<h1 class="heading-style-css"><u><i>CSS perspective</i></u></h1>
<h3>1- perspective </h3>
<div class="style_divv">
    <br>تُستخدم خاصية <b>perspective</b> لمنح عنصر ثلاثي الأبعاد . وتكون قيمتها الفتراضية <b>none</b> .<br>
    تحدد خاصية <b>perspective</b> مدى بُعد الكائن عن المستخدم. لذلك ، ستؤدي القيمة الأقل إلى تأثير ثلاثي الأبعاد أكثر كثافة من القيمة الأعلى.<br>
    عند تحديد خاصية المنظور لعنصر ما ، فإن عنصر الإبن هي التي تحصل على عرض المنظور ، وليس العنصر نفسه.<br>
    تلميح: انظر أيضًا إلى خاصية أصل المنظور ، والتي تحدد الموضع الذي ينظر فيه المستخدم إلى الكائن ثلاثي الأبعاد.<br>
    لفهم خاصية المنظور بشكل أفضل ، قم بعرض العرض التوضيحي.
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <ul><li> لاحظ أن الخاصية <b>perspective</b> لا تغير أي شيء في التصميم أسفله </li></ul>
    <img src="{% static 'css/css64_perspective.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div id="parent-div1">
          <div class="parent"> A </div> 
        </div>
        <div id="parent-div2">
          <div class="parent"> B </div> 
        </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 : </div>
    <ul><li> لاحظ أن الخاصية <b>perspective</b>  تغير  التصميم بعد إستعمال الخاصية <kbd>transform : translateZ(50px)</kbd> </li></ul>
    <img src="{% static 'css/css64_perspective2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div id="parent-DIV1">
          <div class="parent"> A </div> 
        </div>
        <div id="parent-DIV2">
          <div class="parent"> B </div> 
        </div>
    </div>
</div>

<h3>2- perspective-origin</h3>
<div class="style_divv">
    الخاصية <bdi><b>perspective-origin</b></bdi> توضح الزاوية التي ينضر المستعمل منها . وقيمتها الإفتراضية هي <kbd>perspective-origin:50% 50%</kbd> .<br>
    تكتب الخاصية <bdi><b>perspective-origin</b></bdi> على شكل <kbd>perspective-origin : x y</kbd> .<br>
    القيمة 50% 50%  وتعني أن الزاوية التي ينضر المستعمل هي من منتصف <b>x</b> و <b>y</b> . <br>
    تقبل الخاصية <bdi><b>perspective-origin</b></bdi> القيمة بالنسبة المؤوية أو بالبيكسل أو بالإتجاهاة متل <bdi><b>left center</b></bdi> أو <bdi><b>left right</b></bdi> أو <bdi><b>center center</b></bdi> ... <br>
    <div class="alert alert-warning mt-2">
        يطلق على الخاصية <bdi><b>perspective-origin</b></bdi> إسم نقطقة التلاشي . وتعني اخر نقطة تنتهي عندها الرؤية .<br>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <img src="{% static 'css/css64_perspective3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div class="stylE diV"> 
          <div class="div_A"> div  </div>
        </div>
        <div class="stylE diV2"> 
          <div class="div_B"> div2</div>
        </div>
        <div class="stylE diV3"> 
          <div class="div_C"> div3 </div>
        </div>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 : </div>
    <img src="{% static 'css/css64_perspective4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <div class="style div"> 
          <div class="div_a"> div  </div>
        </div>
        <div class="style div2"> 
          <div class="div_b"> div2</div>
        </div>
        <div class="style div3"> 
          <div class="div_c"> div3 </div>
        </div>
    </div>
</div>