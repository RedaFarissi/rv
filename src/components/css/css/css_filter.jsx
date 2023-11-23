{% load static %} 
<h1 class="heading-style-css"><u><i> CSS filter </i></u></h1>
<div class="style_divv mt-5">
     تحدد الخاصية <b>filter</b> طريقة عرض الصور داخل موقعك يمكن . تقبل الخاصية <b>filter</b> عدة قيم وهي كتالي :
    <ul dir="ltr">
        <li><b>filter: none </b></li>
        <li><b>filter:blur() </b></li>
        <li><b>filter:brightness() </b></li>
        <li><b>filter:contrast() </b></li>
        <li><b>filter:drop-shadow() </b></li>
        <li><b>filter:grayscale() </b></li>
        <li><b>filter:hue-rotate() </b></li>
        <li><b>filter:invert() </b></li>
        <li><b>filter:saturate() </b></li>
        <li><b>filter:sepia() </b></li>
    </ul>
</div>
<h3>1. القيمة none </h3>
<div class="style_divv">
    تستعمل القيمة <b>none</b> لإزالة تأتير ال <b>filter</b> وعرض الصورة بشكل طبيعي وهي قيمة إفتراضية .
</div>
<h3>2. الدالة  <bdi>blur()</bdi> </h3>
<div class="style_divv">
    قم بتطبيق تأثير تمويه على الصورة. القيمة الأكبر ستخلق المزيد من الضبابية.<br><br>
    إذا لم يتم تحديد قيمة ، فسيتم استخدام 0 كقيمة إفتراضية .<br>
    وحدة الإستعمال الأكتر شيوعا هي <b>px</b>.
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css45_filter.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css45_filter 2.png' %}" class="img">
</div>
<br>
<h3>2. الدالة   <bdi>brightness()</bdi> </h3>
<div class="style_divv">
      تستخدم الدالة <bdi><b>brightness()</b></bdi> مع الخاصية <b>filer</b> لضبط سطوع الصورة .<br>
      <ul>
          <li>0٪ سيجعل الصورة سوداء بالكامل.</li>
          <li>100٪ (1) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
          <li>ستوفر القيم التي تزيد عن 100٪ نتائج أكثر إشراقًا.</li>
      </ul>    
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css45_filter2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css45_filter2 2.png' %}" class="img">
</div>
<br>
<h3>3. الدالة   <bdi>contrast()</bdi> </h3>
<div class="style_divv">
      تستخدم الدالة <bdi><b>contrast()</b></bdi> مع الخاصية <b>filer</b> لضبط تباين الألوان  .<br>
      <ul>
          <li>0٪ سيجعل الصورة سوداء بالكامل.</li>
          <li>100٪ (1) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
          <li>ستوفر القيم التي تزيد عن 100٪ نتائج بمزيد من التباين .</li>
      </ul>    
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css45_filter3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css45_filter3 2.png' %}" class="img">
</div>
<br>
<h3>4. الدالة   <bdi>drop-shadow()</bdi> </h3>
<div class="style_divv">
      تستخدم لالدالة <bdi><b>drop-shadow()</b></bdi> مع الخاصية <b>filer</b> لإنشاء ضل لصورة متل الخاصية <b>box-shadow</b>.<br>    
</div>
<br>
<h3>5. الدالة  <bdi>grayscale()</bdi> </h3>
<div class="style_divv">
        تستخدم لالدالة <bdi><b>grayscale()</b></bdi> مع الخاصية <b>filer</b> لتحويل الصورة إلى تدرجيا إلى رمادي.
      <ul>
          <li>0٪ (0) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
          <li>100٪ ستجعل الصورة رمادية تمامًا (تستخدم للصور بالأبيض والأسود).</li>
          <li> القيم السلبية غير مسموح بها.</li>
      </ul>  
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css45_filter4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css45_filter4 2.png' %}" class="img">
</div>
<br>
<h3>6. الدالة  <bdi>hue-rotate()</bdi> </h3>
<div class="style_divv">
        تستخدم الدالة <bdi><b>hue-rotate()</b></bdi> مع الخاصية <b>filer</b> قم بتطبيق تدوير الصبغة على الصورة. تحدد القيمة عدد الدرجات حول دائرة اللون التي سيتم تعديل عينات الصورة. 0deg هو الإعداد الافتراضي ، ويمثل الصورة الأصلية.
<br><br>
<b> ملاحظة </b>: الحد الأقصى للقيمة هو 360 درجة.
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css45_filter5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css45_filter5 2.png' %}" class="img">
</div>
<br>
<h3>7. الدالة  <bdi>invert</bdi> </h3>
<div class="style_divv">
        تستخدم لالدالة <bdi><b>invert()</b></bdi> مع الخاصية <b>filer</b> لعكس العينات في الصورة .<br><br>
        <ul>
            <li>0٪ (0) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
            <li>100٪ ستجعل الصورة معكوسة تمامًا .</li>
            <li>القيم السلبية غير مسموح بها .</li>
        </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css45_filter6.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css45_filter6 2.png' %}" class="img">
</div>
<br>
<h3>8. الدالة  <bdi>sepia</bdi> </h3>
<div class="style_divv">
        تستخدم لالدالة <bdi><b>sepia()</b></bdi> مع الخاصية <b>filer</b> لتحويل الصورة إلى بني داكن .<br><br>
        <ul>
            <li>0٪ (0) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
            <li>100٪ سيجعل الصورة بني داكن تمامًا.</li>
            <li>100٪ سيجعل الصورة بني داكن تمامًا.</li>
            <li>القيم السلبية غير مسموح بها</li>
        </ul>
</div>
<div class="sum_exemple_style">
<div class="mital">متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css45_filter8.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css45_filter8 2.png' %}" class="img">
</div>
<h3> 9. متال توضيحي تفاعلي  </h3>
<style>
    .RAng_class{
        width: 100% ;
    }
    #img_test{
        box-sizing:border-box;border: 7px solid black; width:70%;margin: 50px 15%;
    }
    .value {
        background-color:black;
        border:8px solid orangered;padding: 9px 0px;text-align: center;
        color: white;
    }
</style>
<style>
    #blur_exemple{ display: flex; justify-content: space-around; background-color:azure; }
    #input_radio_box{ box-shadow:5px 5px 20px rgba(0 0 0/30%); align-self:center; width: 40%; min-height: 400px; }
    #Blur_E{ width: 40%; box-shadow:3px 3px 20px rgba(0 0 0 /30%); min-height:400px; }
    @media only  screen and (max-width:903px) {
        #blur_exemple{flex-direction: column;}
        #input_radio_box{ width: 100%; min-height: 90px; margin-bottom: 27px; }
        #Blur_E{ width: 100%; min-height: 90px; }
    }
</style>

<div id="blur_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
		<div class="h2"> filter : </div>
		<ul class="list-group">
			<li onclick="filTeR(this.id)" class="list-group-item active" id="blur"> blur </li>
        	<li onclick="filTeR(this.id)" class="list-group-item" id="brightness"> brightness</li>
        	<li onclick="filTeR(this.id)" class="list-group-item" id="contrast"> contrast </li>
        	<li onclick="filTeR(this.id)" class="list-group-item" id="grayscale"> grayscale </li>
        	<li onclick="filTeR(this.id)" class="list-group-item" id="hue-rotate"> hue-rotate </li>
        	<li onclick="filTeR(this.id)" class="list-group-item" id="invert"> invert </li>
        	<li onclick="filTeR(this.id)" class="list-group-item" id="sepia"> sepia </li>
        	<li onclick="filTeR(this.id)" class="list-group-item" id="none"> none </li>
        </ul>
        <br>
        <div style="width:100%;" id="RanGe"></div>
	</div>
	<div class="border bg-light border-secondary" id="Blur_E">
		<div class="h2 p-3"> Result : </div>
    	<div> <img src="{% static 'css/orange.jpg"  id="img_test"> </div>
	</div>
</div>
<script>
    function removeactive(){
        if( document.getElementById('blur').classList.contains('active') ){
            document.getElementById("blur").classList.remove("active")
        }else if( document.getElementById('brightness').classList.contains('active') ){
            document.getElementById("brightness").classList.remove("active")
        }else if( document.getElementById('contrast').classList.contains('active') ){
            document.getElementById("contrast").classList.remove("active")
        }else if( document.getElementById('grayscale').classList.contains('active') ){
            document.getElementById("grayscale").classList.remove("active")
        }else if( document.getElementById('hue-rotate').classList.contains('active') ){
            document.getElementById("hue-rotate").classList.remove("active")
        }else if( document.getElementById('invert').classList.contains('active') ){
            document.getElementById("invert").classList.remove("active")
        }else if( document.getElementById('sepia').classList.contains('active') ){
            document.getElementById("sepia").classList.remove("active")
        }else if( document.getElementById('none').classList.contains('active') ){
            document.getElementById("none").classList.remove("active")
        }
    }
    document.getElementById("blur").click()
    function filTeR(id){
        removeactive()
		if(id == "blur"){
            document.getElementById("RanGe").innerHTML = `<input type="range" onclick="BluR(this.value)" value="3" min="0" max="30" class="RAng_class" id="range_blur"> <div class="value" id="value_blur"></div>`
            document.getElementById("range_blur").click()
            document.getElementById("img_test").style.margin = "50px 15%"
            document.getElementById("blur").classList.add("active")
        }else if(id == "brightness"){ 
            document.getElementById("RanGe").innerHTML = `<input type="range" onclick="BrightnesS(this.value)"  value="100" min="0" max="400" class="RAng_class" id="range_brightness"> <div class="value" id="value_brightness"></div>`
            document.getElementById("range_brightness").click()
            document.getElementById("img_test").style.margin = "50px 15%"
            document.getElementById("brightness").classList.add("active")
        }else if(id == "contrast"){ 
            document.getElementById("RanGe").innerHTML = `<input type="range" onclick="ContrasT(this.value)"  value="100" min="0" max="300" class="RAng_class" id="range_contrast"> <div class="value" id="value_contrast"></div>`
            document.getElementById("range_contrast").click()
            document.getElementById("img_test").style.margin = "50px 15%"
            document.getElementById("contrast").classList.add("active")
        }else if(id == "grayscale"){ 
            document.getElementById("RanGe").innerHTML = `<input type="range" onclick="GrayscalE(this.value)"  value="0" min="0" max="100" class="RAng_class" id="range_grayscale"> <div class="value" id="value_grayscale"></div>`
            document.getElementById("range_grayscale").click()
            document.getElementById("img_test").style.margin = "50px 15%"
            document.getElementById("grayscale").classList.add("active")
        }else if(id == "hue-rotate"){ 
            document.getElementById("RanGe").innerHTML = `<input type="range" onclick="HueRotatE(this.value)"  value="200" min="0" max="360" class="RAng_class" id="range_hue-rotate"> <div class="value" id="value_hue-rotate"></div>`
            document.getElementById("range_hue-rotate").click()
            document.getElementById("img_test").style.margin = "50px 15%"
            document.getElementById("hue-rotate").classList.add("active")
        }else if(id == "invert"){ 
            document.getElementById("RanGe").innerHTML = `<input type="range" onclick="InverT(this.value)"  value="0" min="0" max="300" class="RAng_class" id="range_invert"> <div class="value" id="value_invert">0%</div>`
            document.getElementById("range_invert").click()
            document.getElementById("img_test").style.margin = "50px 15%"
            document.getElementById("invert").classList.add("active")
        }else if(id == "sepia"){ 
            document.getElementById("RanGe").innerHTML = `<input type="range" onclick="SepiA(this.value)"  value="0" min="0" max="300" class="RAng_class" id="range_sepia"> <div class="value" id="value_sepia">0%</div>`
            document.getElementById("range_sepia").click()
            document.getElementById("img_test").style.margin = "50px 15%"
            document.getElementById("sepia").classList.add("active")
        }else if(id == "none"){
            document.getElementById("RanGe").innerHTML = ``
            document.getElementById("img_test").style.filter = "none"
            document.getElementById("img_test").style.margin = "30px 15%"
            document.getElementById("none").classList.add("active")
        }
    }
    function BluR(value){
        document.getElementById("img_test").style.filter = `blur(${value}px)`
        document.getElementById("value_blur").innerHTML = `filter : blur(${value}px)`
    }
    function BrightnesS(value){
        document.getElementById("img_test").style.filter = `brightness(${value}%)`
        document.getElementById("value_brightness").innerHTML = `filter : brightness(${value}%) `
    }
    function ContrasT(value){
        document.getElementById("img_test").style.filter = `contrast(${value}%)`
        document.getElementById("value_contrast").innerHTML = `filter : contrast(${value}%)`

    }
    function GrayscalE(value){
        document.getElementById("img_test").style.filter = `grayscale(${value}%)`
        document.getElementById("value_grayscale").innerHTML = `filter : grayscale(${value}%)`

    }
    function HueRotatE(value){
        document.getElementById("img_test").style.filter = `hue-rotate(${value}deg)`
        document.getElementById("value_hue-rotate").innerHTML = `filter : hue-rotate(${value}deg)`

    }
    function InverT(value){
        document.getElementById("img_test").style.filter = `invert(${value}%)`
        document.getElementById("value_invert").innerHTML = `filter : invert(${value}%)`
    }
    function SepiA(value){
        document.getElementById("img_test").style.filter = `sepia(${value}%)`
        document.getElementById("value_sepia").innerHTML = `filter : sepia(${value}%)`
    }
</script>
