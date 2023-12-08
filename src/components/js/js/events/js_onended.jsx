{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript onended </i></u></h1>
<div class="style_divv mt-5">
    يقع الحدث <b>onended</b> عندما يصل <b>audio</b>/<b>video</b> إلى نهايته.<br>
    هذا الحدث مفيد لرسائل  وما إلى ذلك.<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onended</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onended</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"ended"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js117_onended.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">   
        <video id="video" controls oncanplay="myFunction()" onended="videO()" width="50%">
          <source src="./js/video.mp4" type="video/mp4" for="2">
          Your browser does not support HTML5 video.
        </video>
    </div>
</div>
<script>
    var video = document.getElementById("video")  
    function videO(){
        alert("thanks for watching "+"\npress p to load video"+"\npress s to start video")
    }

    document.body.addEventListener('keypress', function Reload(event){
        if(event.key == "p"){
          video.load();
        }
        if(event.key == "s"){
          video.play();
        }
    })
</script>