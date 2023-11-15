{% load static %}
<style>
    table th  {padding: 15px 0px;}
    table td  {padding: 20px 25px;}
    b{word-spacing:5px;}
</style>
<h1 class="heading-style-html"><u><i> HTML iframe </i></u></h1>
<h3> 1. الوسم ifarme </h3>
<div class="style_divv">
يحدد الوسم <kbd>&lt;iframe&gt;</kbd> إطار مضمن . يتم استخدام إطار مضمن لتضمين مستند آخر ضمن مستند HTML الحالي.<br>
يمكن إستخدم CSS لنمط <kbd>&lt;iframe&gt;</kbd>. <br>
من الممارسات الجيدة تضمين سمة عنوان <kbd>&lt;iframe&gt;</kbd> دائما. يتم استخدام هذا من قبل قارئات الشاشة لقراءة محتوى <kbd>&lt;iframe&gt;</kbd>..<br>
بعض ال attributes المهمة الخاصة بهذا العنصر:
<ul>
    <li>src : وهى اختصار ل source وتعنى المصدر وبالتالي تكون قيمتها عبارة عن لينك الصفحة المراد إدراجها في الموقع.</li>
    <li>width : وتكون قيمتها عبارة عن رقم الذى يُحدد عرض هذا الاطار iframe</li>
    <li>height : وتكون قيمتها عبارة عن رقم الذى يُحدد طول هذا الاطار iframe</li>
</ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'html/html37_iframe.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'html/html37_iframe 2.png' %}" class="img">
</div>
<h3> 2. السمات الخاصة بهذا الوسم  </h3>
<table class="table table-bordered text-light">
    <thead class="bg-secondary">
        <tr class="text-center fs-5">
            <th>القيمة</th>
            <th>الوصف</th>
            <th>السمات</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> تحديد نهج ميزة ل <bdi><strong>&lt;iframe&gt;</strong></bdi> </td>
            <td></td>
            <td>allow</td>
        </tr>
        <tr>
            <td>تعيين إلى true إذا  <bdi><strong>&lt;iframe&gt;</strong></bdi> مكن تنشيط وضع ملء الشاشة عن طريق استدعاء الأسلوب requestFullscreen()</td>
            <td>	true<br>false</td>
            <td>allowfullscreen</td>
        </tr>
        <tr>
            <td>تحديد ارتفاع <bdi><strong>&lt;iframe&gt;</strong></bdi> . الارتفاع الافتراضي هو 150 بكسل</td>
            <td>pixels</td>
            <td>height</td>
        </tr>
        <tr>
            <td>Lazy تحديد ما إذا كان يجب على المستعرض تحميل iframe فورا أو تأجيل تحميل iframes حتى يتم استيفاء بعض الشروط</td>
            <td>eager<br>lazy</td>
            <td>loading</td>
        </tr>
        <tr>
            <td>تحديد عنوان المستند لتضمينه في <bdi><strong>&lt;iframe&gt;</strong></bdi> </td>
            <td>URL</td>
            <td>src</td>
        </tr>
        <tr>
            <td>تحديد عرض <bdi><strong>&lt;iframe&gt;</strong></bdi> . العرض الافتراضي هو 300 بكسل
        </td>
            <td>pixels</td>
            <td>width</td>
        </tr>
    </tbody>
   
</table>
