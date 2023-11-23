{% load static %} 
<style>
    .a { white-space: nowrap; }
    .b { white-space: normal; }
    .c { white-space: pre; }
</style>
<h1 class="heading-style-css"><u><i> CSS white-space </i></u></h1>
<div class="style_divv mt-5">
    تحدد خاصية <b>white-space</b> كيفية معالجة المسافة البيضاء داخل عنصر.<br>
    تقبل الخاصية <b>white-space</b> القيم التالية :<br>
    <ul dir='ltr'>
        <li><b>nowrap</b>  </li>
        <li><b>normal</b> </li> 
        <li><b>pre</b>  </li>
    </ul>
    
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css54_white_space.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee" style="overflow:auto;">
        <div class="h1">The white-space Property</div>
        <h2>white-space: nowrap:</h2>
        <p class="a">
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
        </p>
        <h2>white-space: normal:</h2>
        <p class="b">
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
        </p>
        <h2>white-space: pre:</h2>
        <p class="c">This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
        </p>
    </div>
</div>