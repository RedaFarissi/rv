{% load static %} 
<style> #input_test{ width: 50%;} </style>

<h1 class="heading-style-js"><u><i>  JavaScript onplay </i></u></h1>
<div class="style_divv mt-5">
    يحدث حدث <b>onplay<b> عند بدء تشغيل <b>audio</b>/<b>video</b> أو لم يعد متوقفًا مؤقتًا.<br>
    يحدث حدث <b>onpause</b> عندما يتم إيقاف الصوت / الفيديو مؤقتًا.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onplay</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onplay</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"play"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js126_onplay.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">  
        <p><b>Play and pause the video.</b></p>
        <video id="video_test" onplay="function_play()"  onpause="function_pause()" controls width="330" height="250">
          <source src="./js/video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video><br>
        <button class="btn btn-primary" id="plAy">
           play 
        </button>
        <button class="btn btn-danger" id="pauSe"> 
          pause 
        </button>
    </div>
</div>
<script>
    var play = document.getElementById("plAy")
    var pause = document.getElementById("pauSe")

    play.addEventListener('click',function(){
      document.getElementById('video_test').play()
    })

    pause.addEventListener('click',function(){
      document.getElementById('video_test').pause()
    })

    function function_pause() {
      alert("The video was paused.");
    }
    
    function function_play(){
      alert("The video was played.");
    }
</script>