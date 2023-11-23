{% load static %} 
<style>
  .accent{ accent-color:red; }
  progress{ accent-color:red; }
</style>
<h1 class="heading-style-css"><u><i> CSS accent-color </i></u></h1>
<div class="style_divv mt-5">
    تعيّن خاصية <b>accent-color</b>  تمييز لون عناصر واجهة المستخدم التي تم إنشاؤها بواسطة بعض العناصر متل :
    <ul dir="ltr">
        <li><kbd><bdi>&lt;input type="checkbox"&gt;</bdi></kbd></li>
        <li><kbd><bdi>&lt;input type="radio"&gt;</bdi></kbd></li>
        <li><kbd><bdi>&lt;input type="range"&gt;</bdi></kbd></li>
        <li><kbd><bdi>&lt;progress&gt;</bdi></kbd></li>
    </ul>
    
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <ul><li> لا يهم ترتيب العناصر </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css67_accent-color.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        checkbox
        <input type="checkbox" class="accent"><br><hr>
        radio
        <input type="radio" class="accent">  <br><hr>
        range
        <input type="range" class="accent">  <br><hr>
        progress
        <progress> 
    </div>
</div>
