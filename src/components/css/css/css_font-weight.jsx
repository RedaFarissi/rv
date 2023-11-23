{% load static %} 
<h1 class="heading-style-css"><u><i>  CSS font-weight </i></u></h1>
<div class="style_divv mt-5">
الخاصية <b>font-weight</b> في <b>CSS</b> تُحدِّد «وزن» (weight، أو السمك) الخط؛ والأوزان المتاحة للاستخدام في خطٍ ما تعتمد على نوع الخط المستخدم <b>font-family</b>، إذ إنَّ بعض الخطوط لا توفِّر إلا نسختين هما <b>normal</b> و <b>bold</b>.
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css8_font-weight.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css8_font-weight 2.png' %}" class="img">
</div>
<h3>جميع القيم الممكنة لل font-weight </h3>
<div class="style_divv" >
    كلمات محجوزة <br><br>
    <ul dir="ltr"><li><b>font-weight: normal</b></li><li><b>font-weight: bold</b></li></ul>
    كلمات محجوزة نسبةً إلى العنصر الأب <br><br>
    <ul dir="ltr">
    <li><b>font-weight: lighter;</b></li>
    <li><b>font-weight: bolder;</b> </li>
    </ul>
    القيمة الرقمية<br><br>
    <ul dir="ltr">
     <li><b>font-weight: 100</b></li>
     <li><b>font-weight: 200</b></li>
     <li><b>font-weight: 300</b></li>
     <li><b>font-weight: 400</b></li>
     <li><b>font-weight: 500</b></li>
     <li><b>font-weight: 600</b></li>
     <li><b>font-weight: 700</b></li>
     <li><b>font-weight: 800</b></li>
     <li><b>font-weight: 900</b></li>
    </ul>
    القيم الأولية  <br><br>
    <ul dir="ltr">
     <li><b>font-weight: inherit</b></li>
     <li><b>font-weight: initial</b></li>
     <li><b>font-weight: unset</b></li>
    </ul>
</div>
<style>
    #fontWeight_exemple{
        display: flex;
        justify-content: space-around;
        background-color:azure;
    }
    #input_radio_box{
        box-shadow:5px 5px 20px rgba(0 0 0/30%);
        align-self:center;
        width: 40%;
        min-height: 400px;
    }
    #FontWeight{
        width: 40%;
        box-shadow:3px 3px 20px rgba(0 0 0 /30%);
        min-height:400px;
    }
    #font_w{
        text-align: center;
        line-height: 200px;
    }
    #Code{
            margin: 20px;
    }
    @media only  screen and (max-width:903px) {
        #fontWeight_exemple{
            flex-direction: column;
        }
        #input_radio_box{
            width: 100%;
            min-height: 90px;
            margin-bottom: 27px;
        }
        #Code{
            margin-bottom: 20px;
        }
        #FontWeight{
            width: 100%;
            min-height: 90px;
        }
    }
</style>
<div class="mital">متال :  </div>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>font-weight</b> و لفهم بشكل أفضل .</li></ul>
<div id="fontWeight_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
        <div class="h2"> font-weight: </div>
        <div>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="normal"  id="none3"/> normal<br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="bold"/> bold   <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="lighter"/> lighter<br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="bolder"/> bolder <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="100"/> 100 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="200"/> 200 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="300"/> 300 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="400"/> 400 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="500"/> 500 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="600"/> 600 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="700"/> 700 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="800"/> 800 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="900"/> 900 <br>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" class="font-w" value="inherit"/> inherit <br>
        </div>
    </div>
    <div class="border bg-light border-secondary" id="FontWeight">
        <div class="h2 ps-3 pt-3"> Result : </div>
        <div id="font_w"> font weight </div>

        <div id="Code">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">font-weight:</span> <span id="fontWeightResult" style="font-weight: 500"></span>
          </div>
        </div>
    </div>
</div>



<script>
  function font_w(value){
    document.getElementById("font_w").style.fontWeight = value;
    document.getElementById("fontWeightResult").innerHTML = value +";";
  }
  document.getElementById("none3").click();
</script>
