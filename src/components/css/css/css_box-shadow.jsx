{% load static %} 
<style> 
  #example1{padding:10px;border:1px solid black;box-shadow:5px 10px;}
  #example2{padding:10px;border:1px solid black;box-shadow:5px 10px #888888;}
  #example3{padding:10px;border:1px solid black;box-shadow: 5px 10px red;}

  #box_shadow_exemple{ display: flex; justify-content: space-around; background-color:azure; }
  #input_radio_box{ box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width: 40%; min-height: 400px; }
  #box_shadow{ width:40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:400px; }
  #box{ width:200px; height:200px; margin:auto; background-color:yellow; border:2px solid black; margin-top:30%; }

  @media only  screen and (max-width:903px) {
    #box_shadow_exemple{ flex-direction: column; }
    #input_radio_box{ width: 100%; min-height: 90px; margin-bottom: 27px; }
    #Code{ margin-bottom: 20px; }
    #box_shadow{ width:100%;  min-height:400px;}
    #box{ margin-top:15%; }
  }
</style>
<h1 class="heading-style-css"><u><i>  CSS box-shadow</i></u></h1>
<div class="style_divv mt-5">
    تقوم خاصية <b>box-shadow</b> بإرفاق ظل واحد أو أكثر بالعنصر .
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css22_box-shadow.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee img">
    <div style="font-size: 45px;font-weight:bold">The box-shadow Property</div>
     <p>The box-shadow property defines the shadow of an element:</p>
    <h2 style="margin-top: 20px;">box-shadow: 5px 10px</h2>
    <div id="example1">
        <p>A div element with a shadow. The first value is the horizontal offset and the second value is the vertical offset. The shadow color will be inherited from the text color.</p>
    </div>
    <h2 style="margin-top: 20px;">box-shadow: 5px 10px #888888</h2>
    <div id="example2">
      <p>You can also define the color of the shadow. Here the shadow color is grey.</p>
    </div>
    <h2 style="margin-top: 20px;">box-shadow: 5px 10px red</h2>
    <div id="example3">
      <p>A red shadow.</p>
    </div>
</div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css22_box-shadow2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css22_box-shadow2 2.png' %}" class="img">
</div>
<div class="mital">متال 3 :  </div>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>box-shadow</b> و لفهم بشكل أفضل .</li></ul>
<div id="box_shadow_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> box-shadow: </div>
    <div>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="none" class="bo-sh" id="none"> none </input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="10px 10px grey" class="bo-sh"> 10px 10px grey </input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="40px 40px grey" class="bo-sh"> 40px 40px grey </input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="20px 20px 10px grey" class="bo-sh"> 20px 20px 10px grey </input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="20px 20px 40px grey" class="bo-sh"> 20px 20px 40px grey </input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="20px 20px 40px 15px grey" class="bo-sh"> 20px 20px 40px 15px grey </input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="20px 20px 20px 10px red" class="bo-sh"> 20px 20px 20px 10px red</input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="20px 20px 20px 10px blue" class="bo-sh"> 20px 20px 20px 10px blue</input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="20px 20px 40px 10px pink" class="bo-sh"> 20px 20px 40px 10px pink</input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="20px 20px 40px 10px green inset" class="bo-sh"> 20px 20px 40px 10px green inset</input><br>
      <input type="radio" name="bo-sh" onclick="box(this.value)" value="initial" class="bo-sh"> initial </input>
    </div>
    <div id="Code" class="mt-4 w-100">
      <div class="h3"> Code: </div>
      <div class="border py-2 ps-2 w-100" >
          <span style="font-weight: 500;">box-shadow :</span> <span id="box-shasow-result" style="font-weight: 500"></span>
      </div>
    </div>
  </div>
  <div id="box_shadow" class="border bg-light border-secondary p-2">
    <div class="h2"> Result: </div>
    <div id="box"></div>
  </div> 
</div>
<script>
  function box(value){
    document.getElementById("box").style.boxShadow = value;
    document.getElementById("box-shasow-result").innerHTML = value + ";";
  }
  document.getElementById("none").click();
</script>