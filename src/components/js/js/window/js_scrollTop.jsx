{% load static %} 
<style>
    #dV1{width: 50%; height:150px; overflow: auto; background-color: brown;padding: 20px; }
    #dV2{  background-color: yellow; border: 2px solid black;margin:500px 0px;}
</style>
<h1 class="heading-style-js"><u><i> JavaScript scrollTop</i></u></h1>
<div class="style_divv mt-5">
    تحصل الخاصية <b>scrollTop</b> على عدد وحدات البكسل التي يتم تمرير محتوى العنصر فيها عموديًا أو تعينها.<br>
    إن قيمة <b>scrollTop</b> الخاصة بالعنصر هي قياس المسافة من أعلى العنصر إلى أعلى محتوى مرئي له. عندما لا يُنشئ محتوى عنصر شريط تمرير رأسي ، تكون قيمة <b>scrollTop</b> الخاصة به هي 0.
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">element</span>.<span style="color:var(--js-color)">scrollTop</span></pre>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js45_scrollTop.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">       
        <div id="dV1" onscroll="function_scroll()"> 
            <div id="dV2">
                div mark by id
            </div>
        </div>
        <h2 id="h2"> scrollTop: 0px </h2>
    </div>
</div>
<script>
    const scroller = document.querySelector("#dV1");
    const output = document.querySelector("#h2");
    function function_scroll(){
      output.textContent = `scrollTop: ${scroller.scrollTop}px`;
    }
</script>