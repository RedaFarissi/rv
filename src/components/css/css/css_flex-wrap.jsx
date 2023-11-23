{% load static %} 
<style>
	.h2{ font-size: xx-large; direction:rtl; }
	#div{ display: flex;  width:100%; flex-wrap: wrap;}
	#div2{ display: flex;  width:100%;}
	#div div , #div2 div{ width: 30%; margin:1.5%; height:90px; font-size: xx-large; text-align: center; line-height: 90px;}
    #Rseult{display: flex;width: 99.9%;border:5px solid black;padding: 9px;margin-top:20px;height:220px}
    #Rseult div{width: 50%;height: 70px;}
    #Rseult2{display: flex;border:5px solid black;padding: 9px;margin-top:20px;height:220px;flex-wrap: wrap;}
    #Rseult2 div{width: 50%;height: 70px;}
</style>
<h1 class="heading-style-css"><u><i> CSS flex-wrap </i></u></h1>
<h3>1. الخاصية flex-wrap </h3>
<div class="style_divv">
    تستعمل الخاصية <b>flex-wrap</b> مع العناصر التي تحمل الخاصية <b>display : flex</b> وذالك من أجل جعل العناصر الأبناء يعدون تلقائيا إلى السطر .<br>
    تستقبل الخاصية <b>flex-wrap</b> القيم التالية :
    <ul dir="ltr">
        <li><b>flex-wrap : wrap;</b></li>
        <li><b>flex-wrap : nowrap;</b></li>
        <li><b>flex-wrap : wrap-reverse;</b></li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css47_flex-wrap.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <h2 class="h2"><bdi> عند إستعمال الخاصية  flex-wrap: wrap </bdi> .</h2>
    	<div id="div" style="border:2px solid black"> 
    		<div style="background-color:red;">1</div>
    		<div style="background-color:green;">2</div>
    		<div style="background-color:pink;">3</div>
    		<div style="background-color:yellow;">4</div>
    		<div style="background-color:rgb(200,0,100);">5</div>
    		<div style="background-color:darkorange;">6</div>
    		<div style="background-color:gray;">7</div>
    		<div style="background-color:aqua;">8</div>
    	</div>
    	<h2 class="h2"><bdi> بدون إستعمال الخاصية flex-wrap </bdi></h2>
    	<div id="div2" style="border:2px solid black"> 
    		<div style="background-color:red;">A</div>
    		<div style="background-color:green;">B</div>
    		<div style="background-color:pink;">C</div>
    		<div style="background-color:yellow;">D</div>
    		<div style="background-color:rgb(200,0,100);">E</div>
    		<div style="background-color:darkorange;">F</div>
    		<div style="background-color:gray;">G</div>
    		<div style="background-color:aqua;">H</div>
    	</div>
    </div>
</div>
<style>
    .wrap_exemple{
        display: flex;
        justify-content: space-around;
        background-color:azure;
    }
    .input_radio_box{
        box-shadow:5px 5px 20px rgba(0 0 0/30%);
        align-self:center;
        width: 40%;
        min-height: 330px;
    }
    .flex-wrap{
        width: 40%;
        box-shadow:3px 3px 20px rgba(0 0 0 /30%);
        min-height: 330px;
    }
    @media only  screen and (max-width:903px) {
        .wrap_exemple{
            flex-direction: column;
        }
        .input_radio_box{
            width: 100%;
            min-height: 90px;
            margin-bottom: 27px;
        }
        #Code{
            margin-bottom: 20px;
        }
        .flex-wrap{
            width: 100%;
            min-height: 90px;
        }
    }
</style>
<div class="mital">متال 2 : </div>
<div class="wrap_exemple alert p-3 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div class="input_radio_box border border-secondary rounded bg-light p-3">
        <div class="h2" style="text-align:left;"> <bdi>flex-wrap :</bdi> </div>
        <div>
            <input type="radio" name="bo-sh" onclick="FlexWrap(this.value)" value="wrap" id="Wrap-first"/> wrap  <br>
            <input type="radio" name="bo-sh" onclick="FlexWrap(this.value)" value="nowrap"/> nowrap <br>
            <input type="radio" name="bo-sh" onclick="FlexWrap(this.value)" value="wrap-reverse"/> wrap-reverse 
        </div>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">flex-wrap : </span> <span id="flex-wrap-result" style="font-weight: 500"></span>
          </div>
      </div>
    </div>
    <div class="flex-wrap border bg-light border-secondary p-2">
        <div class="h2" style="text-align:left;"> <bdi>Result :</bdi> </div>
        <div id="Rseult">
            <div style="background-color:green;"></div>
            <div style="background-color:crimson;"></div>
            <div style="background-color:blue;"></div>
        </div>
    </div>
</div>
<ul><li>لاحض أنه يتم إضافة فراغ بين العناصر الأبناء تلقائيا </li></ul>
<h3>2.  الخاصية flex-content</h3>
<div class="style_divv">
    تعدل خاصية <b>align-content</b> سلوك الخاصية <b>flex-wrap</b>. وذالك بإزالة الفراغات بين العناصر .<br>
</div>
<div class="mital">متال  : </div>
<div class="wrap_exemple alert p-3 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div class="input_radio_box border border-secondary rounded bg-light p-3" >
        <div class="h2" style="text-align:left;"> <bdi>align-content :</bdi>  </div>
        <div>
            <input type="radio" name="bo-sh" onclick="align_Content(this.value)" value="flex-start" id="wrap2" /> flex-start  <br>
            <input type="radio" name="bo-sh" onclick="align_Content(this.value)" value="center"/> center <br>
            <input type="radio" name="bo-sh" onclick="align_Content(this.value)" value="flex-end"/> flex-end 
        </div>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">align-content : </span> <span id="flex-wrap-result2" style="font-weight: 500"></span>
          </div>
      </div>
    </div>
    <div class="flex-wrap border bg-light border-secondary p-2">
        <div class="h2"> Result: </div>
        <div id="Rseult2">
            <div style="background-color:green;"></div>
            <div style="background-color:crimson"></div>
            <div style="background-color:blue;"></div>
        </div>
    </div>
</div>

<script>
    function FlexWrap(value){
        document.getElementById("Rseult").style.flexWrap = value
        document.getElementById("flex-wrap-result").innerHTML = value +";"
    }
    function align_Content(value){
        document.getElementById("Rseult2").style.alignContent = value
        document.getElementById("flex-wrap-result2").innerHTML = value +";"
    }
    document.getElementById("Wrap-first").click()
    document.getElementById("wrap2").click()
</script>
