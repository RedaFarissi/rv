{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript load </i></u></h1>
<div class="style_divv mt-5">
    طريقة <bdi><b>load()</b></bdi> تعيد تحميل عنصر الصوت / الفيديو.<br>
    تُستخدم طريقة التحميل <bdi><b>load()</b></bdi> عنصر الصوت / الفيديو بعد تغيير المصدر أو الإعدادات الأخرى.
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">video</span>.<span style="color:gold">load()</span></pre>
    </div>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">audio</span>.<span style="color:gold">load()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js89_load.' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
        <button onclick="playVid()" type="button" class="btn btn-outline-primary mb-2">
          Play Video
        </button>
        <button onclick="pauseVid()" type="button" class="btn btn-outline-danger mb-2">
          Pause Video
        </button>
        <button onclick="loadVid()" type="button" class="btn btn-outline-dark mb-2">
          Load Video
        </button>
        <br> 

        <video id="myVideo" width="40%" height="176" controls>
          <source src="./js/video.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
    </div>
</div>
<script> 
    var vid = document.getElementById("myVideo"); 
    function playVid() { 
      vid.play(); 
    } 
    function pauseVid() { 
      vid.pause(); 
    } 
    function loadVid(){
      vid.load(); 
      vid.play(); 
    }
</script>