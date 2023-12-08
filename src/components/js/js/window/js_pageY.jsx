{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript pageY </i></u></h1>
<div class="style_divv mt-5">
    ترجع الخاصية <b>pageY</b> الإحداثيات العمودية (وفقا للوثيقة) لمؤشر الماوس عند تشغيل حدث ماوس.<br>
    المستند هو صفحة الويب.<br>
    للحصول على الإحداثيات الأفقية (وفقا للوثيقة) لمؤشر الماوس، استخدم الخاصية <b>pageX</b>.<br>
    هذه الخاصية للقراءة فقط.
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">pageY</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js103_pageX.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
      <h2 onmousemove="showCoords(event)"> Move mouse in this heading to get the x (horizontal) and y (vertical) coordinates of the mouse pointer .</h2>
      <p> <strong>Tip:</strong>Try to click different places in the heading. </p>
      <p id="id_name"></p>
    </div>
</div>

<script>
  function showCoords(event) {
    var x1 = event.pageX;
    var y1 = event.pageY;
    var coords = "X coords: " + x1 + ", Y coords: " + y1;
    document.getElementById("id_name").innerHTML = coords;
  }
</script>