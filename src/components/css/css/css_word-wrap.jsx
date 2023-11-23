{% load static %} 
<style>
    .box{
      width: 200px; 
      height: 200px; 
      background-color:thistle;
      padding: 9px;
    }
    .a { 
      word-wrap: break-word;
    }
    .b { 
      word-wrap: normal;
    }
</style>
<h1 class="heading-style-css"><u><i> CSS word-wrap </i></u></h1>
<div class="style_divv mt-5">
    تتيح الخاصية <b>word-wrap</b> إمكانية كسر الكلمات الطويلة والالتفاف على السطر التالي.
    
</div>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css55_word_wrap.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee" style="overflow:auto;">
        <div class="h1">The word-wrap Property</div>
        <h2> word-wrap: break-word  </h2>
        <div class="box">
          <p class="a">
          https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
          </p>
        </div>
        <h2> word-wrap: normal  </h2>
        <div class="box">
          <p class="b">
          https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
          </p>
        </div>
    </div>
</div>