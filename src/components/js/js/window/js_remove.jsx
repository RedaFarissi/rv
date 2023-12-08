{% load static %} 
<style>
  #paragraph{
    -webkit-text-stroke:0.9px red; 
    font-size: 27px;
  }
  #result{
    display: flex;
    flex-wrap: wrap;
  }
  .reda{
    background-color:black; color:white; width:200px; height:200px; padding:9px; margin:9px;
    font-size: 50px; -webkit-text-stroke:2px red ; text-align: center; line-height: 200px;
  }
  .reda:hover{
    border-radius: 50%; border:2px solid red;
  }
</style>

<h1 class="heading-style-js"><u><i> JavaScript remove </i></u></h1>
<div class="style_divv mt-5">
    تزيل طريقة <bdi><b>remove()</b></bdi> عنصرًا (أو node) من المستند.
   <div class="alert bg-dark pb-0 mt-3">
        <pre> <span style="color:var(--js-color)">element</span>.<span style="color:gold">remove()</span></pre></div>
    </div>
</div>
<div class="sum_exemple_style">
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js145_remove.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <h1>The Element Object</h1>
        <h2>The remove() Method</h2>
        <p id="paragraph"> Click "Remove button", and this paragraph willbe removed from the DOM. </p>
        <button onclick="myFunction()">Remove</button>
    </div>
</div>
<div class="sum_exemple_style">
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js145_remove2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <h2> Headding </h2>
        <p> click element to remove </p>
        <div id="result"></div>
    </div>
</div>

<script>
    function myFunction() {
      const element = document.getElementById("paragraph");
      element.remove();
    }
    var arr = []
    for(let i=0 ; i<=20 ;i++ ){
      arr[i] = document.createElement("div")
      arr[i].setAttribute("class","reda")
      arr[i].addEventListener("click",()=>{ arr[i].remove() });
      document.getElementById("result").appendChild(arr[i])
      document.querySelectorAll(".reda")[i].innerHTML = i
    }
</script>