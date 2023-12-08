{% load static %} 
<h1 class="heading-style-js"><u><i>  JavaScript durationchange  </i></u></h1>
<div class="style_divv mt-5">
  يقع حدث <b>ondurationchange</b> عندما يتم تغيير مدة <bdi><b>audio/video</b></bdi> .<br><br>
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
<span style="color:var(--html-color-tags)">&lt;video</span> <span style="color:var(--js-color)">src</span>=<span style="color:orange;">"name.type"</span> <span style="color:var(--js-color)">ondurationchange</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span> <span style="color:var(--html-color-tags)">&lt;/video&gt;</span> </pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">ondurationchange</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"durationchange"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js91_ondurationchange.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee"> 
       <video controls onloadstart="function_name()" ondurationchange="function_name2()" width="50%">
          <source src="./js/video.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
    </div>
</div>
<script>
    function function_name() 
    {
      alert("Starting to load video");
    }
    function function_name2() 
    {
      alert("durationchange to load video");
    }
</script>