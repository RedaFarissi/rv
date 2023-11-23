{% load static %} 
<style>
	.Fl { display: flex; background-color: yellow; }
	.Fl div {
		background-color: yellowgreen; margin: 30px; padding: 20px;font-size: 30px;
		border:2px solid blueviolet;outline:2px solid blue;outline-offset:10px;
	}
	.Fl div:hover {
		color:white;background-color: green; margin: 30px; font-size: 35px; 
		border:3px wavy aquamarine;outline:5px dotted green;outline-offset:12px;
	}
</style>
<h1 class="heading-style-css"><u><i> CSS flex </i></u></h1>
<div class="style_divv mt-5">
    تستخدم القيمة <b>flex</b> مع الخاصية <b>dislpay</b> من أجل جعل العناصر الأبناء  داخل نفس السطر يتم إعطاء الخاصية للعنصر الأب الدي يحتوي على العناصر
</div>
<div class="sum_exemple_style">
<div class="mital">متال  :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css43_flex.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css43_flex 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css43_flex2.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<img src="{% static 'css/css43_flex2 2.png' %}" class="img">
</div>
<div class="sum_exemple_style">
<div class="mital">متال 3 :  </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css43_flex3.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee img">
    <div class="Fl">
	  <div style="order:3;"> 1 </div>
	  <div style="order:1;"> 2 </div>
	  <div style="order:2;"> 3 </div>  
	</div>
</div>
</div>