{% load static %}
<h1 class="heading-style-html"><u><i>HTML details </i></u></h1>
<div class="style_divv mt-5">
    يحدد الوسم <kbd>&lt;details&gt;</kbd> تفاصيل إضافية يمكن للمستخدم فتحها وإغلاقها عند النقر
    <ul>
        <li> يحدد الوسم <kbd>&lt;summary&gt;</kbd> عنوانًا مرئيًا لوسم <kbd>&lt;details&gt;</kbd>. يمكن النقر فوق العنوان لعرض أو إخفاء التفاصيل. </li>
        <li> يجب أن يكون العنصر <kbd>&lt;summary&gt;</kbd> أول عنصر فرعي لعنصر <kbd>&lt;details&gt;</kbd></li>
    </ul>
    <div class="codeStudio alert bg-dark" dir="ltr">
        <b style="color:var(--html-color-tags)">&lt;details&gt;</b><br>
          &nbsp; &nbsp;  <b style="color:var(--html-color-tags)">&lt;summary</b><span style="color:var(--html-color-tags)">&gt;</span> Title <b style="color:var(--html-color-tags)">&lt;/summary</b><span style="color:var(--html-color-tags)">&gt;</span><br>
          &nbsp; &nbsp;  HTML <br>
        <b style="color:var(--html-color-tags)">&lt;/details&gt;</b> <br>
    </div>
</div>
<div class="sum_exemple_style">
<div class="mital">مثال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'html/html25_details.png' %}" class="img"/>
<h4 style="color:green"> بعد تشغيل الكود </h4>
<style>
  .style_div{background-color: greenyellow;}
  .style_div img{margin: auto;}
</style>
<div class="styleee">
    <details>
        <summary>html logo</summary>
        <div class="style_div">
           <div>
               <center>
                    <h2><u>html</u></h2>
                    <img src="{% static 'html2.png' %}" width="20%" alt="html">
               </center>
           </div>
        </div>
    </details>
    <details>
        <summary>css logo</summary>
        <div class="style_div">
           <div>
               <center>
                   <h2><u>css</u></h2>
                   <img src="{% static 'css1.png' %}" width="20%" alt="css">
               </center>
           </div>
        </div>
    </details>
</div>
<h4 style="color:green"> عند نقر على العنوانين سيضهر محتوى details</h4>
<img src="{% static 'html/html25_details 3.png' %}" class="img"/>
    <ul><li>عند إعادة الضغط سيعود المتصفح لشكل الأول</li></ul>
</div>