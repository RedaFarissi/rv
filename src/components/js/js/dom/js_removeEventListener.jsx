{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript removeEventListener </i></u></h1>
<div class="style_divv mt-5">
    تزيل طريقة <bdi>removeEventListener()</bdi></b> ال <b>event</b> من عنصر .<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">removeEventListener(</span>event<span style="color:gold">,</span>function_name<span style="color:gold">,</span>Capture<span style="color:gold">)</span></span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js56_removeEventListener.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img" style="cursor:default">
        <div id="divvv">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Neque fugiat laboriosam architecto officia voluptatem aut,
            reprehenderit placeat quae, alias quaerat recusandae iste? 
            Itaque animi earum nemo fugiat dicta, minus qui!<br>
        <button onclick="Remove()" class="btn btn-primary" style="margin:20px 20px;"> Remove </button>
    </div>
    <div id="result"></div>
       
    </div>
</div>
<script>
    const myDiv = document.getElementById("divvv");
    myDiv.addEventListener("mousemove", myFunction);
    function Remove() {
      myDiv.removeEventListener("mousemove", myFunction);
    }
    function myFunction() {
      document.getElementById("result").innerHTML = Math.random();
    }
</script>