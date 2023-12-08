{% load static %} 
<style>
    .styleee button{
        margin: 9px 2px;
        outline :none;
        border:1px solid black ;
    }
    #dV1{width: 50%; height:150px; overflow: auto; background-color: brown;padding: 20px;}
    #dV2{  background-color: yellow; border: 2px solid black;margin:500px 0px;}
</style>
<h1 class="heading-style-js"><u><i> JavaScript scrollIntoView</i></u></h1>
<div class="style_divv mt-5">
    تقوم طريقة <bdi><b>scrollIntoView()</b></bdi> بتمرير محدد إلى المنطقة المرئية من نافذة المتصفح.<br>
    يتم الوصول إلى  <b>pageYOffset</b> باستخدام :<br>
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">  
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:var(--js-color)">scrollIntoView()</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js44_scrollIntoView.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="name_function()"> TOP </button>
        <button onclick="name_function2()"> BOTTOM </button>
        <button onclick="name_function3()"> smooth </button>
        <div id="dV1"> 
            <div id="dV2">
                div mark by id
            </div>
        </div>
    </div>
</div>
<script>
    function name_function(){
        // scroll top
        document.getElementById("dV2").scrollIntoView(true) //true default value
    }
    function name_function2(){
        // scroll bottom
        document.getElementById("dV2").scrollIntoView(false)
    }
    function name_function3(){
        // scroll behavior : smooth
        document.getElementById("dV2").scrollIntoView({behavior:"smooth"})
    }
</script>