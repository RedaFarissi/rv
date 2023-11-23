{% load static %} 
<style>
    input{ border-radius:9px; border: 2px solid black; outline: 0px; width:40%;height: 40px; }
	#email:invalid{ border: 2px solid darkred; background-color: red; color:aliceblue; font-size: xx-large; }
    #Email:valid{ border: 2px solid green; color: blueviolet;background-color: black;  }
    #emaiL:invalid{ border: 2px solid darkred; color: white ;background-color: red;  }
	#emaiL:valid  { border: 2px solid green; color: blueviolet;background-color: black;  }
</style>
<h1 class="heading-style-css"><u><i> CSS invalid and valid </i></u></h1>
<h3>1. الخاصية  invalid </h3>
<div class="style_divv">
    تستعمل  <b>invalid</b>  مع عناصر ال <b>input</b>  وتسمح بإعطاء خصائص <b>CSS</b> إلى عناصر الإدخال عند إدخال نوع خاطئ أو إدخال عدد أحرف أقل مما تحديده داخل السمة <b>min</b> أو إدخال عدد أكتر مما تم تحديده داخل السمة <b>max</b> . <br>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال : </div>
<ul>
    <li> عند إزالة القيمة داخل عنصر <b>input</b> سيتم إزالة الخصائص التي داخل <b>invalid</b>   </li>
    <li> سيتم إزالة الخصائص التي داخل <b>invalid</b> عند إدخال <b>email</b>  </li>
</ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css38_invalid.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee img">
	<input type="email" value="redaEskouni" name="email" id="email"><br><br>
	<input type="submit" name="Submit" value="submit">
</div>
</div>
<h3>2. الخاصية  valid </h3>
<div  class="style_divv">
    تستعمل  <b>valid</b>  مع عناصر ال <b>input</b>  وتسمح بإعطاء خصائص <b>CSS</b> عند إدخال البيانات بشكل صحيح . <br>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال  : </div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css38_valid.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <input type="email" value="redaEskouni@gmail.com" name="email"  id="Email"><br><br>
</div>
</div>
<div class="sum_exemple_style">
<div class="mital"> متال 2 : </div>
<ul><li>يفضل إستعمال الخصائص  invalid و valid مع على نفس العنصر قم بإدخال إيمايل للفهم بشكل أفضل . </li></ul>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css38_valid_invalid.png' %}" class="img">
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
  	<input type="email" value="redaEskouni@gmail.com" name="email"  id="emaiL"><br>
</div>
</div>