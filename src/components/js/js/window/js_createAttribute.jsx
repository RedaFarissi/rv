{% load static %} 
<style>  
  .dIv{ 
    background-color:red; border:2px solid black; 
    padding:5px; color:blueviolet; font-size:45px;
  }
</style>
<h1 class="heading-style-js"><u><i>  JavaScript createAttribute </i></u></h1>
<h3>1- createAttribute </h3>
<div class="style_divv">
    تقوم طريقة <b><bdi>createAttribute()</bdi></b> بإنشاء سمة وإرجاع السمة ككائن Attr.<br>
    <div class="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
<pre><span style="color:var(--html-color-tags)">const</span> variable = <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">createAttribute(</span>attribute_name<span style="color:var(--js-color)">)</span>; 
variable.<span style="color:var(--js-color)">value</span> = <span style="color:orange">"attribute_value"</span>
<span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:gold">setAttributeNode(</span>variable<span style="color:gold">)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js63_createAttribute.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <div id="id"> Hello Word </div>
        <button id="BuTton" class="btn btn-primary mt-2"> Click Ici </button>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال 2 :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js63_createAttribute2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <a id="myAnchor"> Go to google </a><br>
        <button onclick="fun()" id="BuTton2" class="btn btn-primary mt-2">Add</button>
    </div>
</div>
<script>
    document.getElementById("BuTton").addEventListener("click",function(){
      const styling  = document.createAttribute("class") 
      styling.value = "dIv"
      document.getElementById("id").setAttributeNode(styling) 
    });
    function fun(){
        const href = document.createAttribute("href");
        href.value = "https://www.google.com";
        document.getElementById("myAnchor").setAttributeNode(href);
    }
</script>
