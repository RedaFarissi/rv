{% load static %} 
<h1 class="heading-style-css"><u><i> font-size </i></u></h1>
<div class="style_divv mt-5">
    <b>font-size</b> هو الخاصية <b>CSS</b> التي تتحكم في حجم الخط على صفحة ويب. هناك العديد من القيم المختلفة التي يمكنك استخدامها لتعريف الخاصية <b>font-size</b> . نلقي نظرة على المثال أدناه، والذي يتضمن قيم ووحدات مختلفة يمكنك استخدامها في <b>CSS</b>.<br>تقدم هذه القيم أساليب مختلفة لتحديد حجم الخط على صفحة الويب الخاصة بك .
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css6_font-size.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css6_font-size 2.png' %}" class="img">
</div>
<ul>
    <li>لنفترض أن <kbd>&lt;div&gt;</kbd> الذي تم تعيينه إلى 36px  يحتوي على <kbd>&lt;p&gt;</kbd> وعنصرين <kbd>&lt;span&gt;</kbd>. يتم تعيين حجم الخط من <kbd>&lt;span&gt;</kbd>  إلى 50٪ و 200٪ على التوالي. ثم <kbd>&lt;span&gt;</kbd> بكسل 18  مع قيمة 50 ٪   و <kbd>&lt;span&gt;</kbd> مع قيمة 200 ٪ سيكون 72px. إليك كيف يبدو هذا الرمز في العمل:</li>
</ul>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css6_font-size2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css6_font-size2 2.png' %}" class="img">
</div>
<div class="mital">متال 3 :  </div>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>font-size</b> للفهم بشكل أفضل .</li></ul>
<div class="alert contaner-fluid p-4 rounded m-auto border border-primary border-2" dir="ltr" style="background-color:azure;">
    <div class="d-flex text-black">
        <h2 class="w-50"> font-size: </h2>
        <h2 class="w-50"> Result: </h2>
    </div>
    <div class="d-flex text-dark">
        <div class="border border-secondary rounded mt-3 bg-light p-3 px-4" style="width:40%;margin-right:10%;box-shadow:5px 5px 20px rgba(0 0 0/30%);align-self:center">
            <input type="radio" name="bo-sh" onclick="font_size(this.value)"  class="font" value="25px" id="none2" /> 25px<br>
            <input type="radio" name="bo-sh" onclick="font_size(this.value)"  class="font" value="15px"/> 15px<br>
            <input type="radio" name="bo-sh" onclick="font_size(this.value)"  class="font" value="28px"/> 28px<br>
            <input type="radio" name="bo-sh" onclick="font_size(this.value)"  class="font" value="22px"/> 22px<br>
        </div>
        <div class="d-flex w-50 mt-3 border bg-light align-self-center border-secondary p-2" id="font_size" style="box-shadow:3px 3px 20px rgba(0 0 0 /30%);"> 
            font-size
        </div>
    </div>
</div>

<script>
  function font_size(value){
    document.getElementById("font_size").style.fontSize = value;
  }
  document.getElementById("none2").click()
</script>