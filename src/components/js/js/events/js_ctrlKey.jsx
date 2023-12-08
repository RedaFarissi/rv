{% load static %} 
<style>
  #span1{ color: green; font-size: 24px;}
  #span2{ color: red; font-size: 24px; }
</style>
<h1 class="heading-style-js"><u><i>  JavaScript onctrlKey </i></u></h1>
<div class="style_divv mt-5">
    تقوم الخاصية <b>onctrlKey</b> بإرجاع قيمة منطقية تشير إلى ما إذا كان قد تم الضغط على مفتاح <kbd>CTRL</kbd> عند تشغيل حدث الماوس أم لا.<br>
    هذه الخاصية للقراءة فقط.
    <div class="codeStudio codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">ctrlKey</span></pre>  
    </div>
</div>

<div class="codeStudio alert bg-dark my-3 pb-0" dir="ltr" >
<pre><span style="color:var(--violet-color)">if</span>(<span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">ctrlKey</span>){
    <span style="color:green">// JavaScript Code </span>
}<span style="color:var(--violet-color)">else</span>{
    <span style="color:green">// JavaScript Code </span>
}</pre>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js133_ctrlKey.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <p>    use event.ctrlKey width event  onkeypress    </p>
    </div>
</div>
<script>

    function function_KeyPressed(event) {
      var r = document.getElementById("result")
      if (event.ctrlKey && event.code == "KeyI") {
        alert("you press Ctrl + i ")
      }else if (event.ctrlKey) {
        alert("you press Ctrl + " + event.code )
      }
      else {
        alert("The CTRL key was NOT pressed!")
      }
    }
    document.body.addEventListener("keypress", function_KeyPressed)
</script>