{% load static %} 
<style>
	#Pa {	
		border: 2px solid black;
		outline: #4CAF50 solid 10px;
		margin: auto;  
		padding: 20px;
		text-align: center;
	}
    .P {outline-color:red; outline-width:3.5px ;}

    .dotted {outline-style: dotted;}
    .dashed {outline-style: dashed;}
    .solid { outline-style: solid;}
    .double {outline-style: double;}
    .groove {outline-style: groove;}
    .ridge { outline-style: ridge;}
    .inset { outline-style: inset;}
    .outset {outline-style: outset;}
</style>
<h1 class="heading-style-css"><u><i> CSS outline </i></u></h1>
<h3>1. الخاصية outline </h3>
<div class="style_divv">
    تحدد الخاصية <b>outline</b>  خط مرسوم خارج <b>border</b>  العنصر وهي إختصار للخصائص التالية والتي سنتعلم حولها خلال هذا البرنامج تعليمي :
    <ul dir="ltr">
        <li><b>outline-width</b></li>
        <li><b>outline-style</b></li>
        <li><b>outline-color</b></li>
    </ul>
</div>
<div class="sum_exemple_style">
    <div class="mital"> متال : </div>
    <ul><li> لا يهم ترتيب العناصر </li></ul>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css39_outline.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <div class="styleee">
        <p id="Pa">This element has a 2px black border and a green outline with a width of 10px.</p>	
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">رسم توضيحي   </div>
    <img src="{% static 'css/css39_outline2.png' %}" class="img">
</div>
<h3>2. الخاصية outline-width </h3>
<div class="style_divv">
    تحدد خاصية <b>outline-width</b> عرض الخط الخارجي ، ويمكن أن تحتوي على إحدى القيم التالية :
    <ul>
        <li><b>thin</b> (عادةً 1 بكسل) </li>
        <li><b>medium</b> متوسط ​​(عادةً 3 بكسل)</li>
        <li><b>thick</b> سميك (عادةً 5 بكسل)</li>
        <li>  حجم محدد (in px, pt, cm, em, ..) </li>
    </ul>
</div>
<style>
    #outline_exemple{
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
    #outLine{
        width: 50%;margin:auto;background-color:gray;color:white;border:3px solid black;text-align:center;
        padding:14px;margin-top:75px;outline-style:solid;outline-color:yellow   
    }
    #outlineE{
        width: 40%;
        box-shadow:3px 3px 20px rgba(0 0 0 /30%);
        min-height:400px;
    }
    @media only  screen and (max-width:903px) {
        #outline_exemple{
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
        #outlineE{
            width: 100%;
            min-height: 280px;
        }
        #outLine{
            margin-top:75px;
        }
    }
</style>
<div class="mital"> متال : </div>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>outline-width</b>  و لفهم بشكل أفضل .</li></ul>
<div id="outline_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> outline-width : </div>
    <div>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  class="mar" value="thin" id="outline-W" /> thin <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  class="mar" value="medium"/> medium <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  class="mar" value="thick"/> thick <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  class="mar" value="9px"/> 9px <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  class="mar" value="1.2rem"/> 1.2rem<br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  class="mar" value="22px"/> 23px <br>
    </div>
    <div id="Code" class="mt-4 w-100">
        <div class="h3"> Code: </div>
        <div class="border py-2 ps-2 w-100" >
            <span style="font-weight: 500;">outline-width : </span> <span id="outline-result" style="font-weight: 500"></span>
        </div>
    </div>
  </div>
  <div class="border bg-light border-secondary" id="outlineE">
    <div class="h2 ps-2"> Result: </div>
    <div id="outLine">
       content
    </div>
  </div>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 2 : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css39_outline3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css39_outline3 2.png' %}" class="img">
</div>
<h3>3. الخاصية outline-style </h3>
<div class="style_divv">
    تحدد الخاصية <b>outline-style</b> نمط المخطط التفصيلي ، ويمكن أن تحتوي على إحدى القيم التالية :
    <ul>
        <li><b>dotted</b> :  يحدد مخططًا منقطًا</li>
        <li><b>dashed</b> : يحدد مخططًا متقطعًا </li>
        <li><b>solid</b> : يحدد مخططًا متصل </li>
        <li><b>double</b> : يحدد مخططًا مزدوجًا</li>
        <li><b>groove</b> :  يحدد مخططًا مجوفًا ثلاثي الأبعاد </li>
        <li><b>ridge</b> : يحدد مخططًا ثلاثي الأبعاد ممتلئًا</li>
        <li><b>inset</b> : يحدد مخططًا داخليًا ثلاثي الأبعاد </li>
        <li><b>outset</b> :  تحدد مخططًا خارجيًا ثلاثي الأبعاد</li>
        <li><b>none</b> : عدم تحديد مخطط تفصيلي</li>
        <li><b>hidden</b> : يحدد مخططًا مخفيًا</li>
    </ul>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css39_outline4.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <p class="P dotted">A dotted outline</p>
	<p class="P dashed">A dashed outline</p>
	<p class="P solid">A solid outline</p>
	<p class="P double">A double outline</p>
	<p class="P groove">A groove outline. </p>
	<p class="P ridge">A ridge outline. </p>
	<p class="P inset">An inset outline.</p>
	<p class="P outset">An outset outline.</p>
</div>
</div>
<h3>4. الخاصية outline-color </h3>
<div class="style_divv">
    تحدد الخاصية <b>outline-color</b> لون الخط الخارجي 
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css39_outline5.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css39_outline5 2.png' %}" class="img">
</div>
<h3>5. الخاصية outline-offset </h3>
<div class="style_divv">
    تسمخ الخاصية <b>outline-offset</b> بإنشاء فراغ بين الخط الخرجي <b>outline</b> و الحد  <b>border</b>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css39_outline6.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css39_outline6 2.png' %}" class="img">
</div>

<script>
    document.getElementById("outline-W").click()
    function outline_width(value){
        document.getElementById("outLine").style.outlineWidth=value;
        document.getElementById("outline-result").innerHTML = value + ";"
    }
</script>