{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript confirm </i></u></h1>
<div class="style_divv mt-5">
    تعرض طريقة <bdi><b>confirm()</b></bdi> مربع حوار به رسالة وزر موافق وزر إلغاء.<br>
    تُرجع طريقة <bdi><b>confirm()</b></bdi> إلى القيمة <b>true</b> إذا نقر المستخدم على "موافق" ، وإلا فسيكون ذلك خطأ .<br>
    <div class="codeStudio alert bg-dark pb-0 mt-3" dir="ltr">
        <pre><span style="color:gold;">confirm(<span style="color:orange;">"message"</span>)</span></pre>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js30_confirm.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
    <button onclick="name_function()"> Click Here </button>
    <h2 id="h222"></h2>
    </div>
</div>

<script>
    function name_function() {
        let id =  document.getElementById("h222")
        let text;
        if (confirm("Press a button!") == true) {
          text = "<span style='color:green'>You pressed OK</span>";
        }else{
          text = "<span style='color:red'>You canceled</span>";
        }
        id.innerHTML = text;
    }
</script>