{% load static %} 
<style>
    table ,tr,th,td { border-collapse:collapse; border: 2px solid white; } 
</style>

<h1 class="heading-style-css"><u><i>JavaScript Validation API  </i></u></h1>
<h3>1- طرق التحقق من صحة القيد </h3>
<table class="table text-light" dir="ltr">
    <thead class="text-center">
        <tr>
            <th> الخاصية </th>
            <th> الوصف </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="ps-4"> <bdi>checkValidity()</bdi> </td>
            <td class="pe-4" dir="rtl"> إرجاع <b>true</b> إذا كان عنصر الإدخال يحتوي على بيانات صحيحة. </td>
        </tr>
        <tr>
            <td class="ps-4"> <bdi>setCustomValidity()</bdi> </td>
            <td class="pe-4" dir="rtl"> يضبط خاصية <b>validationMessage</b> لعنصر إدخال. </td>
        </tr>
    </tbody>
</table>

<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'js/js138_checkValidity.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الأكواد </h4>
    <div class="styleee">
        <input id="Id1" type="number" min="100" required>
        <button onclick="myFunction()">OK</button>
        <p id="resulta"></p>
    </div>
</div> 
<h3>2- خصائص DOM للتحقق من صحة القيد</h3>
<table  class="table text-light" dir="ltr">
    <thead class="text-center">
        <tr>
            <th> الخاصية </th>
            <th> الوصف </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="ps-4"> validity </td>
            <td class="pe-4" dir="rtl"> يحتوي على خصائص منطقية تتعلق بصلاحية عنصر الإدخال. </td>
        </tr>
        <tr>
            <td class="ps-4"> validationMessage </td>
            <td class="pe-4" dir="rtl"> يحتوي على الرسالة التي سيعرضها المتصفح عندما تكون الصلاحية خاطئة. </td>
        </tr>
        <tr>
            <td class="ps-4"> willValidate </td>
            <td class="pe-4" dir="rtl"> يشير إلى ما إذا كان سيتم التحقق من صحة عنصر الإدخال.  </td>
        </tr>
    </tbody>
</table>


<script>
    function myFunction() {
      const inpObj = document.getElementById("Id1");
      const resulta = document.getElementById("resulta");
      if (!inpObj.checkValidity()) {
        resulta.innerHTML = inpObj.validationMessage;
      }
    }
</script>