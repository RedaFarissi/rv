{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript setTimeout </i></u></h1>
<div class="style_divv mt-5">
تستدعي طريقة <bdi><b>setTimeout()</b></bdi> دالة بعد عدد من المللي ثانية.<br>
يتم تنفيذ <bdi><b>setTimeout()</b></bdi> مرة واحدة فقط.<br>
إذا كنت بحاجة إلى عمليات تنفيذ متكررة ، فاستخدم <bdi><b>setInterval()</b></bdi> بدلاً من ذلك.<br>
استخدم طريقة <bdi><b>clearTimeout()</b></bdi> لمنع بدء تشغيل الوظيفة.
    <div class="codeStudio alert bg-dark pb-0 mt-3" dir="ltr">
        <pre><span style="color:gold;">setTimeout(<span class="text-light">function_name</span>,<span class="text-light">milliseconds</span>)</span></pre>
    </div>
</div>


<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js151_setTimeout.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <p> click button to run function one time after 3 seconds </p>
        <button onclick="setTimeout(sayHello,3000)" class="btn bg-primary"> click  </button>
        <div id="resut" class="mt-5"></div>
    </div>
</div>


<script>
    function sayHello(){
        let res = document.getElementById("resut")
        res.innerHTML = `<b> Hello App </b>`
    }
</script>