{% load static %} 
<h1 class="heading-style-css"><u><i>JavaScript API introduction </i></u></h1>
<p> 
    واجهة برمجة تطبيقات الويب هي حلم المطور.<br>
    <ul>
        <li> من خلال API يمكن توسيع وظائف المتصفح </li>
        <li> يمكنه تبسيط الوظائف المعقدة بشكل كبير </li>
        <li> يمكن أن يوفر بناء الجملة السهل للكود المعقد </li>
    </ul>
</p>
<h3>1- ما هي واجهة برمجة تطبيقات الويب <bdi>(API)</bdi> ?</h3>
<div class="style_divv">    
    <b>API</b> وتعني  <b>Application Programming Interface</b> (واجهة برمجة التطبيقات).<br>
    <bdi><b>Web API</b></bdi>   هو واجهة برمجة تطبيقات للويب .<br>
    يمكن لواجهة برمجة تطبيقات المتصفح أن توسع وظائف متصفح الويب.<br>
    يمكن لخادم <B>API</B> توسيع وظائف خادم الويب.<br>
</div>
<h3>2- المتصفحات و واجهة برمجة تطبيقات <bdi>API</bdi></h3>
<div class="style_divv">
    تحتوي جميع المتصفحات على مجموعة من واجهات برمجة تطبيقات الويب المدمجة لدعم العمليات المعقدة ، وللمساعدة في الوصول إلى البيانات.<br>
    على سبيل المثال ، يمكن لواجهة برمجة تطبيقات <bdi>(Geolocation API)</bdi> تحديد الموقع الجغرافي أن ترجع إحداثيات مكان المتصفح.
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js137_geolocation.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <div id="h2">JavaScript Geolocation</div>
        <p>Click the button to get your coordinates.</p>
        <button onclick="getLocation()" class="btn btn-primary"> Try It </button>
        <p id="result" style="margin-top:12px;"></p>
    </div>
</div> 
<h3> 3-  واجهات برمجة تطبيقات الطرف الثالث <bdi><small><small>(Third Party APIs)</small></small></bdi></h3>
<div class="style_divv">
    تقدم واجهة برمجة التطبيقات <bdi><b>(API)</b></bdi> معلومات عن برامج التطبيقات. يوفر أحد التطبيقات واجهة برمجة تطبيقات للمطورين للاتصال بتطبيقاتهم الخاصة. تقدم <bdi><b>Youtube API</b></bdi> معلومات الفيديو. تقدم واجهة برمجة تطبيقات خرائط <b>Google</b> معلومات تحديد الموقع الجغرافي. باستخدام واجهة برمجة التطبيقات ، يمكن لتطبيقك تلقي المعلومات المقدمة وتحسين كيفية أدائها للمستخدمين.
</div>

<script>
    const result = document.getElementById("result");
    function getLocation() {
      try {
        navigator.geolocation.getCurrentPosition(showPosition);
      } catch {
        result.innerHTML = err;
      }
    }
    function showPosition(position) {
        result.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    }
</script>