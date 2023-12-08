{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript onvolumechange </i></u></h1>
<div class="style_divv mt-5">
    يقع حدث <b>onvolumechange</b> في كل مرة يتم فيها تغيير مستوى صوت  <b>video</b>/<b>audio</b>.
    تم استدعاء هذا الحدث من قبل:<br> 
    <ul>
        <li>زيادة الحجم أو خفضه .</li>
        <li>كتم صوت مشغل الوسائط أو إلغاء كتمه .</li>
    </ul>
    استخدم خاصية <b>volume</b>  لكائن <b>video</b>/<b>audio</b> لتعيين أو إرجاع مستوى صوت <b>video</b>/<b>audio</b>.<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;input</span> <span style="color:var(--js-color)">onvolumechange</span>=<span style="color:orange;">"<span style="color:gold">function_name()</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onvolumechange</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"volumechange"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js134_onvolumechange.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <p> Try to change the volume  in the bottom right corner.</p>
        <video controls onvolumechange="myFunction()"  width="500">
          <source src="./js/video.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js134_onvolumechange2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <video id="myVideo" width="320" height="240" controls>
          <source src="./js/video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p> Change the volume by either clicking the buttons or by adjusting the volume in the bottom right corner.</p>
        <button onclick="setHalfVolume()" type="button"> Set volume to 0.2  </button>
        <button onclick="setFullVolume()" type="button">  Set volume to 1.0  </button>
        <p id="result"></p>
    </div>
</div>

<script>
    function myFunction() {
      alert("The volume has been changed!");
    }
    var y = document.getElementById("myVideo");
    y.addEventListener("volumechange", getVolume);
    function getVolume() { 
      var r = document.getElementById("result")
      r.innerHTML = "The audio volume is: " + y.volume;
    } 
    function setHalfVolume() { 
      y.volume = 0.2;
    } 
    function setFullVolume() { 
      y.volume = 1.0;
    } 
</script>