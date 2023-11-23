{% load static %} 
<style>
  #a,#b,#c,#d{ background-color: yellow; width: 350px;}
  #a{word-break: normal;}
  #b{word-break:break-all ;}
  #c{word-break:keep-all ;}
  #d{word-break:break-word ;}
</style>
<h1 class="heading-style-css"><u><i> CSS word-break </i></u></h1>
<div class="style_divv mt-5">
    تُستخدم خاصية <b><bdi>word-break</bdi></b> لتحديد كيفية تطبيق الواصلة على الأماكن التي يتجاوز فيها النص مربع المحتوى الخاص به و تقبل القيم التالية :
    <ul>
        <li><b> normal </b>: القيمة الافتراضية. استخدم قواعد فاصل الأسطر الافتراضية </li>
        <li><b> break-all </b>: لمنع تجاوز السعة ، قد يتم كسر الكلمة عند أي حرف </li>
        <li><b> keep-all </b>: لا يجب استخدام فواصل الكلمات للنص الصيني / الياباني / الكوري (CJK). سلوك النص بخلاف CJK هو نفس سلوك القيمة "عادي"</li>
        <li><b> break-word </b>: لمنع الفائض ، قد يتم كسر الكلمة في نقاط عشوائية </li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css63_word-break.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
      <h2>word-break: normal</h2>
      <p id="a">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
        http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
      </p>
      <h2>word-break:break-all</h2>
      <p id="b">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
        http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
      </p>
      <h2>word-break:keep-all </h2>
      <p id="c">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
        http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
      </p>
      <h2>word-break:break-word</h2>
      <p id="d">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
        http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
      </p>
    </div>
</div>