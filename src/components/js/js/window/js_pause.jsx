{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript pause </i></u></h1>
<div class="style_divv mt-5">
    توقف طريقة <bdi><b>pause()</b></bdi> المؤقت (توقف مؤقتًا) الصوت أو الفيديو قيد التشغيل حاليًا.<br>

    تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">video</span>.<span style="color:gold">pause()</span></pre>
    </div>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">audio</span>.<span style="color:gold">pause()</span></pre>
    </div>
    <div class="alert alert-warning"> <b>نصيحة</b> : استخدم طريقة <bdi><b>play()</b></bdi> لبدء تشغيل الصوت / الفيديو الحالي.</div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js88_pause.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"> 
        <button onclick="playVid()" type="button" class="btn btn-outline-primary mb-2">
            Play Video
        </button>
        <button onclick="pauseVid()" type="button" class="btn btn-outline-danger mb-2">
          Pause Video
        </button>
        <br> 
        <video id="myVideo" width="40%" height="176">
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
  </script> 