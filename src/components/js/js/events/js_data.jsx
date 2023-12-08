{% load static %} 
<style>#resulta{  font-size: x-large;  color: green;}</style>
<h1 class="heading-style-js"><u><i> JavaScript data </i></u></h1>
<div class="style_divv mt-5">
    تقوم خاصية <b>event.data</b> بإرجاع الحرف الذي تم إدراجه مع الحدث.<br>
    هذه الخاصية للقراءة فقط.
    <div class="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">data</span></pre>  
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js135_data.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <p> Write something in the text field . </p>
        <input type="text"  oninput="myFunction(event)">
        <p>The inserted character: <b id="resulta"></b></p>
        <p><strong>Note:</strong> : This property is not fully supported, and can change before the final release.</p>
    </div>
</div>
<script>
  function myFunction(event) {
    var r = document.getElementById("resulta")
    r.innerHTML = event.data;
  }
</script>