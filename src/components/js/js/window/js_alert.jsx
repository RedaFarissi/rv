{% load static %} 
<h1 class="heading-style-js"><u><i> JavaScript alert </i></u></h1>
<div class="style_divv mt-5">
    تعرض طريقة <b><bdi>alert()</bdi></b> مربع تنبيه برسالة وزر موافق.<br>
    يتم استخدام طريقة <b><bdi>alert()</bdi></b> عندما تريد وصول المعلومات إلى المستخدم .<br>
    يأخذ مربع التنبيه التركيز بعيدًا عن النافذة الحالية ، ويجبر المستخدم على قراءة الرسالة . يمنع المستخدم من الوصول إلى أجزاء أخرى من الصفحة حتى يتم إغلاق مربع التنبيه
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold;">alert()</span></pre>
    </div>
    أو
    <div class="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold;">alert()</span></pre>
    </div>
</div>

<div class="sum_exemple_style">
    <div class="mital"> متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js29_alert.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee img">
        <button onclick="add_alert()"> Click Here </button>
    </div>
</div>

<script>
    alert("Hello Word");
    function add_alert() {
      alert(location.hostname);
    }
</script>
