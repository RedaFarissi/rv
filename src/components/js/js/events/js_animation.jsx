{% load static %} 
<style> 
    #id_DIV { margin: 25px; width:400px; height:100px; background:orange; position:relative; font-size: 20px; padding:7px}
    @keyframes mymove {  from {top: 0px;}        to {top: 120px;} }   
    #DIV{width:90px; height:90px; background-color:red; position:absolute;}
    @keyframes example {
      0%   {background-color:red; left:0px; top:0px;}
      25%  {background-color:yellow; left:calc(100% - 90px); top:0px;}
      50%  {background-color:blue; left:calc(100% - 90px); top:200px;}
      75%  {background-color:green; left:0px; top:200px;}
      100% {background-color:red; left:0px; top:0px;}
    }
    #DIV2{width: 90px;height: 90px;background-color: red;position: absolute;}
    @keyframes example2 {
      0%   {background-color:red; left:0px; top:0px;}
      25%  {background-color:yellow; left:calc(100% - 90px); top:0px;}
      50%  {background-color:blue; left:calc(100% - 90px); top:200px;}
      75%  {background-color:green; left:0px; top:200px;}
      100% {background-color:red; left:0px; top:0px;}
    }
</style>
<h1 class="heading-style-js"><u><i> JavaScript animation </i></u></h1>
<p class="style_divv mt-5">
    عند تشغيل رسم متحرك CSS ، هناك ثلاثة أحداث يمكن أن تحدث:
    <ul>
        <li><b>animationstart</b> : يحدث عند بدء الرسوم المتحركة لـ CSS </li>
        <li><b>animationiteration</b> : يحدث عندما يتم تكرار الرسوم المتحركة CSS</li>
        <li><b>animationend</b> : يحدث عند اكتمال الرسوم المتحركة لـ CSS</li>
    </ul>
</p>
<h3>1- animationstart</h3>
<div class="style_divv">
    يقع حدث <bdi><b>Animationstart</b></bdi> عندما يبدأ تشغيل الرسوم المتحركة <b>CSS</b>.<br>
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
         <pre><span style="color:var(--js-color)">Object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"animationstart"</span>, function_name<span style="color:orange"></span><span style="color: gold;">)</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js84_animation.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img" style="height: 360px;">
        <div id="id_DIV" onclick="myFunction()">Click me to start the animation.</div>
    </div>
</div>
<h3>2- animationiteration </h3>
<div class="style_divv">
  يقع حدث <b>animationiteration</b> عند تكرار رسم متحرك <b>CSS</b> .<br>
  <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
    <pre><span style="color:var(--js-color)">Object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"animationiteration"</span>, function_name<span style="color:orange"></span><span style="color: gold;">)</span></pre>  
  </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js84_animation2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img" style="height: 400px;">
      <div style="width:100%;height:300px;position:relative;background-color:thistle;">
        <div id="DIV">  </div>
      </div>
      <button class="btn btn-primary mt-2" onclick="Myfunction()"> Click </button>
    </div>
</div>
<h3>3- animationend </h3>
<div class="style_divv">
  يقع الحدث <bdi><b>animationend</b></bdi> عند اكتمال رسم متحرك <b>CSS</b> .<br>
  <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
    <pre><span style="color:var(--js-color)">Object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"animationend"</span>, function_name <span style="color:orange"></span><span style="color: gold;">)</span></pre>  
  </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js84_animation3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img" style="height: 400px;">
      <div style="width:100%;height:300px;position:relative;background-color:thistle;">
        <div id="DIV2">  </div>
      </div>
      <button class="btn btn-primary mt-2" onclick="Myfunction2()"> Click </button>
    </div>
</div>


<script>
  /************************************  animationStart  *************************************** */
    var x = document.getElementById("id_DIV");
    // Start the animation with JavaScript
    function myFunction() {
      x.style.animation = "mymove 4s 2";        
    }
    function myStartFunction() {
      this.innerHTML = "animationstart event occured - The animation has started"; 
      this.style.backgroundColor = "yellow"; // this => x
    }
    function myRepeatFunction() {
      x.innerHTML = "animationiteration event occured - The animation was played again";
      x.style.backgroundColor = "brown";
    }
    function myEndFunction() {
      this.innerHTML = "animationend event occured - The animation has completed";
      this.style.backgroundColor = "red";
    }
    x.addEventListener("animationstart", myStartFunction);
    x.addEventListener("animationiteration", myRepeatFunction);
    x.addEventListener("animationend", myEndFunction);

  /************************************  animationIteration  *************************************** */
    const DIV = document.getElementById("DIV")
    function Myfunction(){
      DIV.style.animation = "example 4s 3 linear"
    }
    DIV.addEventListener("animationstart",animationStart)
    DIV.addEventListener("animationiteration",animationIteration)
    DIV.addEventListener("animationend",animationEnd)
    function animationStart(){
      DIV.innerHTML = "Start"
      DIV.style.backgroundColor = "yellow"
    }
    function animationIteration(){
      DIV.innerHTML = "Iteration"
      DIV.style.borderRadius = "50%"
      DIV.style.lineHeight = "90px"
      DIV.style.textAlign = "center"
    }
    function animationEnd(){
      DIV.innerHTML = "End"
      DIV.style.borderRadius = "30px"
    }

  /************************************  animationEnd  *************************************** */
    const DIV2 = document.getElementById("DIV2")
    function Myfunction2(){
      DIV2.style.animation = "example2 4s linear"
    }
    DIV2.addEventListener("animationstart",animationStart2)
    DIV2.addEventListener("animationiteration",animationIteration2)
    DIV2.addEventListener("animationend",animationEnd2)
    function animationStart2(){
      DIV.style.backgroundColor = "yellow"
    }
    function animationIteration2(){
      this.innerHTML = "Iteration" // this => DIV
    }
    function animationEnd2(){
      this.innerHTML = "End"
      this.style = "position:absolute;top:calc(50% - 45px);left:calc(50% - 45px);"
      this.style.color = "white"
      this.style.backgroundColor = "gray"
      this.style.backgroundColor = "gray"
      this.style.border = "2px solid white" 
      this.style.padding = "3px" 
    }

  </script>