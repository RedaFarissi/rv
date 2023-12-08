{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript prompt </i></u></h1>
<div class="style_divv mt-5">
    تعرض طريقة <bdi><b>prompt()</b></bdi> مربع حوار يطالب المستخدم بالإدخال.<br>
    تقوم طريقة <bdi><b>prompt()</b></bdi> بإرجاع قيمة الإدخال إذا نقر المستخدم على "موافق" ، وإلا فإنها ترجع قيمة فارغة.<br>
    يتم استخدام مربع موجه إذا كنت تريد أن يقوم المستخدم بإدخال قيمة . <br>
    عندما ينبثق مربع موجه ، سيتعين على المستخدم النقر فوق "موافق" أو "إلغاء" للمتابعة.<br>
    يمنع المستخدم من الوصول إلى أجزاء أخرى من الصفحة حتى يتم إغلاق الصندوق. 
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold;">prompt(<span style="color:orange;">"message"</span>,<span style="color:orange;">"default value"</span>)</span></pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js31_prompt.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="name_function()">Click Here</button>
        <h2 id="h2"></h2> 
    </div>
</div>
<script>
    function name_function() {
        var id = document.getElementById("h2")
        let text = prompt("What's your favorite language?", "HTML");
        text = text.toUpperCase()
        switch( text ) {
          case "HTML": text = "<span style='color:darkorange'>HTML</span>";break;
          case "CSS": text = "<span style='color:blue'>CSS</span>";break;
          case "JAVASCRIPT": text = "<span style='color:yellow'>JS</span>";break;
          default: text = "I have never heard of that one..";
        }
        id.innerHTML = text;
    }
</script> 