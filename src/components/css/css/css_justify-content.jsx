{% load static %} 
<style>
    #justify_content_exemple{ display: flex; justify-content: space-around; background-color:azure; }
    .input_radio_box{ box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width: 40%; min-height: 450px; }
    #justify-content{ width: 40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:450px; }
    #Result{display:flex; background-color:azure;  border:2px solid black; height: 305px;margin-top: 20px;}
    #Result div{width:25%; height:90px;background-color : azure;border:1px solid black}
    @media only  screen and (max-width:903px) {
        #justify_content_exemple{ flex-direction: column; }
        .input_radio_box{ width: 100%; margin-bottom: 27px; }
        #Code{ margin-bottom: 20px; }
        #justify-content{ width: 100%;  margin-top :30px;}
    }
</style>
<h1 class="heading-style-css"><u><i> CSS justify-content</i></u></h1>
<div class="style_divv mt-5">
    تقوم الخاصية <b>justify-content</b> بمحاذاة عناصر الحاوية المرنة عندما لا تستخدم العناصر كل المساحة المتوفرة على المحور الرئيسي (أفقيًا) .<br>
    تستخدم الخاصية <b>justify-content</b> مع الخاصية <b>display</b> و القيمة <b>flex</b> وتستقبل القيم التالية :
    <ul dir="ltr">
        <li><b>justify-content : flex-start</b></li>
        <li><b>justify-content : flex-end</b></li>
        <li><b>justify-content : center</b></li>
        <li><b>justify-content : space-between</b></li>
        <li><b>justify-content : space-around</b></li>
        <li><b>justify-content : space-evenly</b></li>
    </ul>
</div>
<h3>1. القيمة flex-start</h3>
<div class="style_divv">
    القيمة الافتراضية. يتم وضع العناصر في بداية الحاوية 
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css48_justify-content.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css48_justify-content 2.png' %}" class="img">
</div>
<h3>2. القيمة flex-end</h3>
<div class="style_divv">
    يتم وضع العناصر في نهاية الحاوية
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css48_justify-content2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css48_justify-content2 2.png' %}" class="img">
</div>
<h3>3. القيمة center</h3>
<div class="style_divv">
    يتم وضع العناصر في وسط الحاوية      
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css48_justify-content3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css48_justify-content3 2.png' %}" class="img">
</div>
<h3>4. القيمة space-between</h3>
<div class="style_divv">
    العناصر سيكون لها مسافة بينهما     
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css48_justify-content4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css48_justify-content4 2.png' %}" class="img">
</div>
<h3>5. القيمة space-around</h3>
<div class="style_divv">
    سيكون للعناصر مسافة قبلها وفيما بينها وبعدها    
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css48_justify-content5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css48_justify-content5 2.png' %}" class="img">
</div>
<h3>6. القيمة space-evenly</h3>
<div class="style_divv">
    سيكون للعناصر مساحة متساوية حولها    
</div>
<div class="sum_exemple_style">
<div class="mital">متال :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css48_justify-content6.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css48_justify-content6 2.png' %}" class="img">
</div>
<h3>7. متال تفاعلي تجربي </h3>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>justify-content</b>  و لفهم بشكل أفضل .</li></ul>
<div id="justify_content_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3" >
        <div class="h2"> justify-content : </div>
        <div>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="flex-start" id="flex-start" /> flex-start <br>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="flex-end"/> flex-end <br>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="center"/> center <br>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="space-between"/> space-between<br>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="space-evenly"/> space-evenly<br>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="space-around"/> space-around<br>
        </div>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
                <span style="font-weight: 500;"> display : flex ;</span><br>
                <span style="font-weight: 500;">justify-content : </span> <span id="justify-content-result" style="font-weight: 500"></span>
          </div>
        </div>
    </div>
    <div class="border bg-light border-secondary" id="justify-content"> 
        <div class="h2"> Result : </div>
        <div id="Result">
            <div style="background-color:violet;"></div>
    		<div style="background-color:green;"></div>
    		<div style="background-color:brown;"></div> 
        </div>
    </div>
</div>
<script>
    document.getElementById("flex-start").click()
    function just_C(value) {
      document.getElementById("Result").style.justifyContent = value;
      document.getElementById("justify-content-result").innerHTML = value +";";
    }
</script>