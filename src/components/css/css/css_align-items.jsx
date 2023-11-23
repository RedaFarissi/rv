{% load static %} 
<h1 class="heading-style-css"><u><i> CSS align-items </i></u></h1>
<div class="style_divv">
    تستخدم الخاصية <b>align-items</b> مع الخصية <b>display</b> والقيمة <b>flex</b> وتحدد مكان وضع العناصر بنسبة للإرتفاع .<br>
    تستقبل الخاصية <b>align-items</b>  القيم التالية :<br>
    <ul dir="ltr">
        <li><b>align-items: stretch</b></li>
        <li><b>align-items: start</b></li>
        <li><b>align-items: center</b></li>
        <li><b>align-items: end</b></li>
    </ul>
</div>
<h3>1. القيمة  stretch</h3>
<div class="style_divv">
    قيمة إفتراضية . يتم شد العناصر لتناسب الحاوية    
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css49_align-items.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css49_align-items 2.png' %}" class="img">
</div>

<h3>2. القيمة  start </h3>
<div class="style_divv">
    يتم وضع العناصر في بداية الحاوية على المستوى العمودي  .
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css49_align-items2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css49_align-items 2.png' %}" class="img">
</div>
<h3>3. القيمة  center </h3>
<div class="style_divv">
    يتم وضع العناصر في وسط الحاوية على المستوى العمودي .
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css49_align-items3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css49_align-items3 2.png' %}" class="img">
</div>
<h3>4. القيمة  end </h3>
<div class="style_divv">
    يتم وضع العناصر في نهاية الحاوية على مستوى الأفقي .
</div>
<div class="sum_exemple_style">
    <div class="mital">متال  :  </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css49_align-items4.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css49_align-items4 2.png' %}" class="img">
</div>
<h3>5. متال تفاعلي توضيحي  </h3>
<style>
    #Result{display: flex; border: 2px solid black;height: 210px;padding-top:0px;}
    #Result div{border:1px solid black}
</style>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>justify-content</b>  و لفهم بشكل أفضل .</li></ul>
<style>
    #align_items_exemple{ display: flex;justify-content: space-around;background-color:azure;}
    #input_radio_box{ box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width: 40%; min-height: 350px; }
    #align-items{ width: 40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:350px; }
    @media only  screen and (max-width:903px) {
        #align_items_exemple{ flex-direction: column; }
        #input_radio_box{ width: 100%; min-height: 90px; margin-bottom: 27px; }
        #Code{ margin-bottom: 20px; }
        #align-items{ width: 100%; min-height: 90px; }
    }
</style>
<div id="align_items_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
        <div class="h2"> align-items: </div>
        <div class="pt-3 ps-3">
            <input type="radio" name="Ju-C" onclick="Align_items(this.value)" value="start" id="items" /> start <br>
            <input type="radio" name="Ju-C" onclick="Align_items(this.value)" value="end"/> end <br>
            <input type="radio" name="Ju-C" onclick="Align_items(this.value)" value="center"/> center <br>
        </div>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">align-items : </span> <span id="align-items-result" style="font-weight: 500"></span>
          </div>
        </div>
    </div>

    <div class="border bg-light border-secondary" id="align-items"> 
        <div class="h2"> Result: </div>
        <div id="Result">
            <div class="bg-danger border border-3 border-primary p-2">div1 </div>
    	    <div class="bg-danger border border-3 border-primary p-2">div2 </div>
    	    <div class="bg-danger border border-3 border-primary p-2">div3 </div>
        </div> 
    </div>
</div>

<script>
    document.getElementById("items").click()
    function Align_items(value) {
      document.getElementById("Result").style.alignItems = value;
      document.getElementById("align-items-result").innerHTML = value +";";
    }
</script>
