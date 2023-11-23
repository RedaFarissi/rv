{% load static %} 
<style>
	.Fl { display: flex; background-color: yellow;flex-direction: column; }
	.Fl div {
	    width: 40px;background-color: yellowgreen; margin: 9px; padding: 9px;
	    font-size: 30px;border:2px solid blueviolet;outline:2px solid blue;outline-offset:6px;
	}
    #flex_direction_exemple{ display: flex; justify-content: space-around; background-color:azure; }
    #input_radio_box{ box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width: 40%; min-height: 350px; }
    #flexDirection{ width: 40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:350px; }
    @media only  screen and (max-width:903px) {
        #flex_direction_exemple{ flex-direction: column; }
        #input_radio_box{ width: 100%; min-height: 90px; margin-bottom: 27px; }
        #Code{ margin-bottom: 20px; }
        #flexDirection{ width: 100%; min-height: 90px; }
    }
</style>
<h1 class="heading-style-css"><u><i> CSS flex-direction </i></u></h1>
<div class="style_divv mt-5">
    تحدد الخاصية <b>flex-direction</b> اتجاه العناصر المرنة. <br>
    <b>ملاحظة : </b> إذا لم يكن العنصر يحتوي على  <b>display:flex</b>  ، فلن يكون للخاصية   <b>flex-direction</b> أي تأثير .
</div>
<div class="mital"> متال :</div>
<img src="{% static 'css/css44_flex-direction.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>flex-direction</b>  و لفهم بشكل أفضل .</li></ul>
<div id="flex_direction_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
        <div class="h2"> flex-direction : </div>
        <input type="radio" name="fl-D" onclick="flexD(this.value)"  class="mar" value="column" id="FlD" /> column <br>
        <input type="radio" name="fl-D" onclick="flexD(this.value)"  class="mar" value="row"/> row <br>
        <input type="radio" name="fl-D" onclick="flexD(this.value)"  class="mar" value="row-reverse"/> row-reverse <br>
        <input type="radio" name="fl-D" onclick="flexD(this.value)"  class="mar" value="column-reverse"/> column-reverse <br>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;"> flex-direction :</span> <span id="flex-direction-result" style="font-weight: 500"></span>
          </div>
      </div>
    </div>
    <div class="border bg-light border-secondary" id="flexDirection">
        <div class="h2"> Result : </div>
        <div class="Fl" id="Fl">
	      <div style="order:3;"> 1 </div> 
	      <div style="order:1;"> 2 </div>
	      <div style="order:2;"> 3 </div>  
	    </div>
    </div>
</div>
<script>
    document.getElementById("FlD").click()
    function flexD(value){
        document.getElementById("Fl").style.flexDirection = value
        document.getElementById("flex-direction-result").innerHTML = value +";"
    }
</script>