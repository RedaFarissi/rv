{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript canplay </i></u></h1>
<div class="style_divv mt-5">
    يحدث حدث <b>oncanplay</b> عندما يمكن للمتصفح بدء تشغيل <bdi><b>audio/video</b></bdi> المحدد (عندما يكون مخزنًا مؤقتًا بما يكفي لبدء التشغيل).<br><br>
    أثناء عملية تحميل <bdi><b>audio/video</b></bdi> ، تقع الأحداث التالية بهذا الترتيب :
    <ol dir="ltr"> 
        <li> <b>onloadstart</b> </li>
        <li> <b>ondurationchange</b> </li>
        <li> <b>onloadedmetadata</b> </li>
        <li> <b>onloadeddata</b> </li>
        <li> <b>onprogress</b> </li>
        <li> <b>oncanplay</b> </li>
        <li> <b>oncanplaythrough</b> </li>
    </ol>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;video</span> <span style="color:var(--js-color)">src</span>=<span style="color:orange;">"name.type"</span> <span style="color:var(--js-color)">oncanplay</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span>  <span style="color:var(--html-color-tags)">&lt;/video&gt;</span> </pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oncanplay</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"canplay"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js95_oncanplay.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
        <video controls oncanplay="myFunction()" width="60%">
            <source src="./js/video.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
    </div>
</div>
<script>
    function myFunction() {
      alert("Can start playing video");
    }
</script>