{% load static %} 
<style>
    #h2 { text-align: center;}
    p.date {text-align: right;}
    p.main {text-align: justify;}
    #textAlign_exemple{ display: flex; justify-content: space-around; background-color:azure; }
    #input_radio_box{ box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width: 40%; min-height: 450px; }
    #font_size{ width: 40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height: 600px; }
    @media only  screen and (max-width:903px) {
        #textAlign_exemple{ flex-direction: column; }
        #input_radio_box{ width: 100%; min-height: 90px; margin-bottom: 27px;}
        #Code{ margin-bottom: 20px;}
        #font_size{ width: 100%; min-height: 90px; }
    }
</style>
<h1 class="heading-style-css"><u><i>  CSS text-align </i></u></h1>
<div class="style_divv mt-5">
    تحدد خاصية <b>text-align</b>   المحاذاة الأفقية للنص في العنصر . بحيت يمكنك التحكم في العناصر فالخاصية <b>text-align</b> تمكنك من تحديد أين تريد عرض العنصر يمين أو اليسار أو وسط الصفحة
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css19_text-align.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee img">
    <h2 id="h2">CSS text-align Example</h2>
    <p class="date">May, 2014</p>
    <p class="main">
      In my younger and more vulnerable years my father gave me some
      advice that I've been turning over in my mind ever since. 
      'Whenever you feel like criticizing anyone,' he told me, 
      'just remember that all the people in this world haven't had the advantages that you've had.'
    </p>
    <p>
      <b>Note:</b> Resize the browser window to see how the value "justify" works.
    </p>
</div>
</div>
<div class="mital">متال  2 :  </div>

<ul><li> قم بنقر على الأزرار أسفله للفهم بشكل أفضل عن الخاصية <b>text-align</b>  .</li></ul>
<div  id="textAlign_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> text-align : </div>  
    <div class="h6">1- text-align for heading</div>
    <div class="border p-1">
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  class="mar" value="left" id="noneT" /> left <br>
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  class="mar" value="right"/>  right<br>
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  class="mar" value="center"/> center<br>
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  class="mar" value="justify"/> justify<br>
    </div>
    <br>
    <div class="h6">2- text-align for paragraph</div>
    <div class="border p-1">
      <input type="radio" name="bot" onclick="text_align2(this.value)"  class="mar" value="left" id="noneT2" /> left <br>
      <input type="radio" name="bot" onclick="text_align2(this.value)"  class="mar" value="right"/>  right<br>
      <input type="radio" name="bot" onclick="text_align2(this.value)"  class="mar" value="center"/> center<br>
      <input type="radio" name="bot" onclick="text_align2(this.value)"  class="mar" value="justify"/> justify<br>
    </div>
    <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              1) <span style="font-weight: 500;">text-align :</span> <span id="text_align_result" style="font-weight: 500"></span><br>
              2) <span style="font-weight: 500;">text-align :</span> <span id="text_align_result2" style="font-weight: 500"></span><br>
          </div>
    </div>
  </div>

  <div class="border bg-light border-secondary" id="font_size">
    <div class="h2"> Result: </div>
    <div style="margin:auto;background-color:green;color:white;border:1px solid blue;font-size:33px;" id="text_align">
      text-align
    </div>
    <p id="pp">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br>Nisi eius voluptatum consequuntur, porro voluptas voluptatibus earum ipsam magnam.<br><br>Vel voluptatem id iste officiis reprehenderit, perferendis quam error corrupti?<br>Enim aspernatur ea praesentium, provident corrupti recusandae<br>
      natus ad alias consequatur id reiciendis ex ullam odit labore vitae error nihil minima molestias! Maiores fuga beatae quas nemo et obcaecati culpa accusamus fugiat porro inventore, non earum veniam ad tempora nulla ab repudiandae harum voluptas, dolor aut corrupti facilis esse magni minima. Eius veniam vel omnis,
      saepe hic aperiam aliquid molestiae doloremque qui?
    </p>
  </div>
</div>

<script>
  document.getElementById("noneT").click()
  document.getElementById("noneT2").click()
  function text_align(value){
    document.getElementById("text_align").style.textAlign = value
    document.getElementById("text_align_result").innerHTML = value + ";"
  }
  function text_align2(value){
    document.getElementById("pp").style.textAlign = value
    document.getElementById("text_align_result2").innerHTML = value + ";"
  }
</script>