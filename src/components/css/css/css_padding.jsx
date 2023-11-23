{% load static %} 
<h1 class="heading-style-css"><u><i>  CSS padding </i></u></h1>
<div class="style_divv mt-5">
    يتم استخدام الخاصية <b>padding</b> في لغة  <b>CSS</b> لإنشاء مساحة حول محتوى عنصر داخل <b>border</b> في عنصر محدد .<br>
    مع <b>CSS</b>، لديك السيطرة الكاملة على <b>padding</b> . توجد خصائص لإعداد <b>padding</b> لكل جانب من عناصر (أعلى، يمين، أسفل، ويسارا).
</div>
<div class="sum_exemple_style">
    <div class="mital">متال :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css4_padding.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css4_padding 2.png' %}" class="img">
</div>
<ul>
    <li> في المتال أعلاه نلاحض أنه تم إعطاء قيمتين لل <b>padding</b> .</li>
    <li> القيمة الأولى تشمل <b>padding-top</b> و <b>padding-bottom</b> .</li>
    <li> القيمة التانية تخص <b>padding-left</b> و <b>padding-right</b>.</li>
</ul>
<h3>  الجوانب الفردية -  padding </h3>
<div class="style_divv">
    CSS له خصائص لتحديد <b>padding</b>  لكل جانب من العناصر :<br>
    <ul>
        <li><b>padding-top</b></li>
        <li><b>padding-right</b></li>
        <li><b>padding-bottom</b></li>
        <li><b>padding-left</b></li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css4_padding2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css4_padding2 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<ul><li>إذا كان للخاصية padding قيمة واحدة فجميع  لجوانب سوف تأخد تلك القيمة .</li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css4_padding3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css4_padding3 2.png' %}" class="img">
</div>
<style>
    #padding_exemple{ display: flex; justify-content: space-around; background-color:azure; }
    #input_radio_box{ box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width:40%; min-height: 400px; }
    #padding{ width: 40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:400px; }
    @media only  screen and (max-width:903px) {
        #padding_exemple{ flex-direction: column; }
        #input_radio_box{ width: 100%; min-height: 90px; margin-bottom: 27px; }
        #Code{ margin-bottom: 20px; }
        #padding{ width:100%; min-height:90px; margin-top:30px;}
    }
</style>
<div class="mital">متال 3 :  </div>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>padding</b> للفهم بشكل أفضل .</li></ul>
<div id="padding_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
      <div class="h3"> padding </div>
      <div>
        <input type="radio" name="bo-sh" onclick="padding(this.value)"  class="pad" value="1em"id="none1" /> 1em <br>
        <input type="radio" name="bo-sh" onclick="padding(this.value)"  class="pad" value="4% 0"/> 4% 0<br>
        <input type="radio" name="bo-sh" onclick="padding(this.value)"  class="pad" value="10px 50px 20px"/> 10px 50px 20px<br>
        <input type="radio" name="bo-sh" onclick="padding(this.value)"  class="pad" value="10px 50px 30px 0"/> 10px 50px 30px 0<br>
        <input type="radio" name="bo-sh" onclick="padding(this.value)"  class="pad" value="0px 60px"/> 0px 60px<br>
        <input type="radio" name="bo-sh" onclick="padding(this.value)"  class="pad" value="0"/> 0<br>
      </div>
      <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100">
              <span style="font-weight:500;">padding : </span> <span id="padding-result" style="font-weight:500"></span>
          </div>
      </div>
    </div>
    <div class="border bg-light border-secondary" id="padding"> 
        <div class="h2"> Result : </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br>
        Facere dolor exercitationem repellat dolore .
    </div>
</div>
<script>
  function padding(value){
    document.getElementById("padding").style.padding = value;
    document.getElementById("padding-result").innerHTML  = value +";";
  }
  document.getElementById("none1").click()
</script>