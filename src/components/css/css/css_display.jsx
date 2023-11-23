{% load static %} 
<style>
    p {color: red;}
    p.ex1 {display: none;}
    p.ex2 {display: inline;}
    p.ex3 {display: block;}
    p.ex4 {display: inline-block;}
    .styleee{background-color: rgb(235,235,235);padding: 20px 20px;direction:ltr;color:black;}
</style>
<h1 class="heading-style-css"><u><i> CSS display </i></u></h1>
<div class="style_divv mt-5"> 
    تحدد خاصية <b>display</b> سلوك العرض (نوع العرض) للعنصر.<br>
    في <b>HTML</b> ، يتم أخذ قيمة خاصية العرض الافتراضية من مواصفات <b>HTML</b> أو من ورقة الأنماط الافتراضية للمستعرض / المستخدم .
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css16_display.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee img" >
    <h2>The display Property</h2>
    <h2>display: none:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="ex1">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
    <h2>display: inline:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p class="ex2">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
    <h2>display: block:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      <p class="ex3">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
    <h2>display: inline-block:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
      <p class="ex4">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
</div>
</div>