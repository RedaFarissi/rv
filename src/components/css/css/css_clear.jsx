{% load static %} 
<style>
    #DIV1{
        color: white;
        overflow: hidden;
        margin: 9px;
        background-color:crimson;
        width: 30%;
        height: 100px;
        border:9px double black;
        float: left;
    }
    #DIV2{
        color: white;
        overflow: hidden;
        background-color:darkslategray;
        width: 30%;
        height: 200px;
        border:9px double black;
        float: right;
    }
</style>
<h1 class="heading-style-css"><u><i><bdi>  CSS clear </i></u></h1>
<div class="style_divv mt-5">
    تشير الخاصية <b>clear</b> إلى ما إذا كان يمكن وضع عنصر بجوار العناصر تاتي تحتوي على الخاصية <b>float</b>  التي تسبقه أو ما إذا كان يجب نقله لأسفل ليكون أسفل تلك العناصر. تنطبق الخاصية <b>clear</b> على كل من العناصر العائمة وغير العائمة .<br>
    بصفة عامة من خلال الخاصية <b>clear</b> يمكنك إيقاف تأتير الخاصية <b>float</b> لأن الخاصية <b>float</b> تقوم بتعويم ل العناصر التي تتبعها . 
    تستقبل الخاصية <b>clear</b> القيم التالية :
    <ul>
        <li> <b>none</b> : تستعمل لإزالة تأتر الخاصية <b>clear</b> </li>
        <li> <b>left </b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>left </b>. </li>
        <li> <b>right</b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>right </b>.</li>
        <li> <b>both</b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>left</b> و القيمة <b>right</b> . </li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<ul>
    <li> في هذا المتال قمنا بإضافة الخاصية <b>float</b> لأول وسمين <b>div</b> فقط . </li>
    <li> لاحض أن الوسم 3 و الوسم 4 تم وضعهم في نفس المكان بحيت يضهر الشكل بطريقة سيئة .</li>
</ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css30_clear.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css30_clear 2.png' %}" class="img">
</div>
<ul>
   <li>لحل هدا المشكل الذي ينتج عن الخاصية <b>float</b> نستعمل الخاصية <b>clear </b></li>
</ul>
<div class="sum_exemple_style">
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css30_clear2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css30_clear2 2.png' %}" class="img">
</div>
<style>
    #clear_exemple{
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
    #clear{
        width: 40%;
        box-shadow:3px 3px 20px rgba(0 0 0 /30%);
        min-height:400px;
    }
    @media only  screen and (max-width:903px) {
        #clear_exemple{
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
        #clear{
            width: 100%;
            min-height: 90px;
        }
    }
</style>
<h3> متال توضيحي تفاعلي لفهم قيم الخاصية clear</h3>
<div id="clear_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
        <div class="h2"> clear: </div>
        <div class="ps-3">
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="none"  id="claer_none"/> none </input><br>
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="left" /> left <br>
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="right"/> right <br>
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="both" /> both <br>
        </div>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">clear : </span> <span id="clear_result" style="font-weight: 500"></span>
          </div>
      </div>
    </div>
    
    <div class="border bg-light border-secondary" id="clear"> 
        <h2 class="w-50"> Result: </h2>
        <div id="DIV1" class="p-1"> div  float left </div>
        <div id="DIV2" class="p-1"> div  float right </div>
        <div id="div_p" style="margin-top: 9px;">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ut incidunt corporis vero necessitatibus ducimus itaque aut architecto?
            Maiores magni eius omnis facilis ad autem tempore beatae eaque suscipit
            temporibus iure doloribus voluptatibus tenetur alias veritatis ipsa sequi
            sed quos rem, accusamus possimus eum! Vitae eaque alias mollitia sed sapiente 
            porro, quasi doloribus, quae ipsa eum deserunt ut?
        </div>
    </div>
</div>
<script>
    document.getElementById("claer_none").click()
    function cleaR(value){
        document.getElementById("div_p").style.clear = value
        document.getElementById("clear_result").innerHTML = value + ";"
    }
</script>