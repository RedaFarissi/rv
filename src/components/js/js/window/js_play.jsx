{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript play </i></u></h1>
<div class="style_divv mt-5">
    تبدأ طريقة <bdi><b>play()</b></bdi> في تشغيل <b>audio</b> أو <b>video</b> الحالي.<br>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">video</span>.<span style="color:gold">play()</span></pre>
    </div>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:var(--js-color)">audio</span>.<span style="color:gold">play()</span></pre>
    </div>
    <div class="alert alert-warning">نصيحة: استخدم طريقة الإيقاف المؤقت () لإيقاف الصوت / الفيديو الحالي مؤقتًا.</div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js87_play.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img"> 
        <button onclick="playAudio()" type="button" class="mb-2">Play Video</button>
        <button onclick="pauseAudio()" type="button" class="bm-2">Pause Video  </button>
        <br> 
        <audio id="myAudio" controls>
          <source src="./js/music.mp3" type="audio/mp3">
          Your browser does not support HTML5 video.
        </audio>
    </div>
</div>
<script> 
    var vid = document.getElementById("myAudio"); 
    function playAudio() { 
      vid.play(); 
    } 
    function pauseAudio() { 
      vid.pause(); 
    } 
</script> 