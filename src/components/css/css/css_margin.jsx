{% load static %} 
<style>
    #margin_exemple{
        display: flex; justify-content: space-around; background-color:azure;
    }
    #input_radio_box{
        box-shadow:5px 5px 20px rgba(0 0 0/30%);
        align-self:center; width:40%; min-height: 400px;
    }
    #margin{ width: max-content; padding: 9px; }
    #Margin{ width:40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:400px; }
    @media only  screen and (max-width:903px) {
        #margin_exemple{ flex-direction: column; }
        #input_radio_box{ width: 100%; min-height: 90px; margin-bottom: 27px; }
        #Code{ margin-bottom: 20px; }
        #Margin{ width: 100%; min-height: 90px;}
    }
</style>
<h1 class="heading-style-css"><u><i>CSS margin</i></u></h1>
<div class="style_divv mt-5">
    يتم استخدام الخاصية <b>margin</b> في لغة  <b>CSS</b> لإنشاء مساحة حول محتوى عنصر خارج ال <b>border</b> في عنصر محدد .<br>
    مع <b>CSS</b>، لديك السيطرة الكاملة على <b>margin</b> . توجد خصائص لإعداد <b>margin</b> لكل جانب من عناصر (أعلى، يمين، أسفل، ويسارا).
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css5_margin.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css5_margin 2.png' %}" class="img">
<ul>
    <li> في المتال أعلاه نلاحض أنه تم إعطاء قيمتين لل <b>margin</b> .</li>
    <li> القيمة الأولى تشمل <b>margin-top</b> و <b>margin-bottom</b> .</li>
    <li> القيمة التانية تخص <b>margin-left</b> و <b>margin-right</b>.</li>
</ul>
</div>
<h3>1.  الجوانب الفردية -  margin </h3>
<div class="style_divv">
  <b>CSS</b> له خصائص لتحديد <b>margin</b>  لكل جانب من العناصر :<br>
    <ul>
        <li>margin-top</li>
        <li>margin-right</li>
        <li>margin-bottom</li>
        <li>margin-left</li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css5_margin2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css5_margin2 2.png' %}" class="img">
</div>
<br>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<ul><li>إذا كان للخاصية <b>margin</b> قيمة واحدة فجميع  لجوانب سوف تأخد تلك القيمة .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css5_margin3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css5_margin3 2.png' %}" class="img">
</div>
<br>
<h3>2. الخاصية margin مع القيمة auto </h3>
<div class="style_divv">
    تستخدم القيمة  <b>auto</b> مع الخاصية <b>margin</b> لجعل العنصر وسط الصفحة أو وسط العنصر الأب إذا كان <div class=""></div> 
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css5_margin4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css5_margin4 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css5_margin5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css5_margin5 2.png' %}" class="img">
</div>
<h3>3. متال تفاعلي توضيحي .  </h3>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>margin</b>  و لفهم بشكل أفضل .</li></ul>
<div id="margin_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
        <div class="h3"> margin </div>
        <div>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="35px" id="noneM" /> 35px <br>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="12%"/> 10% 0<br>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="10px 50px 20px"/> 10px 50px 20px<br>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="10px 50px 30px 0"/> 10px 50px 30px 0<br>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="20% 60px"/> 20% 60px<br>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="auto"/> auto <br>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="0"/> 0<br>
        </div>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">margin:</span> <span id="margin-result" style="font-weight: 500"></span>
          </div>
        </div>
    </div>
    <div class="border bg-light border-secondary" id="Margin"> 
        <div class="bg-secondary align-self-start p-3 fs-5 text-light" id="margin"> margin </div>
    </div>
</div>

<script>
  function margin(value){
    document.getElementById("margin").style.margin = value;
    document.getElementById("margin-result").innerHTML  = value +";";
  }
  document.getElementById("noneM").click()
</script>