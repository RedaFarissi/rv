{% load static %} 
<style>
  #a,#b,#c{ width:400px; background-color:yellow; border:2px solid black; }
  #a{ line-height:25px; }
  #b{ line-height:55px; }
  #c{ line-height:-20px;}  
</style>
<h1 class="heading-style-css"><u><i> CSS line-height </i></u></h1>
<div class="style_divv mt-5">
    تحدد خاصية <b>line-height</b> ارتفاع الخط.<br>
    <div class="alert alert-danger mt-3">
        <b>ملاحظة</b> : القيم السلبية غير مسموح بها.
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css62_line-height.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p id="a">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
        </p>
        <hr>
        <p id="b">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
        </p>
        <hr>
        <p id="c">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
        </p>
    </div>
</div>