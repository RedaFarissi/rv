{% load static %} 
<style>
    @media only screen and (max-width : 750px) {
        #color_loop , #color_loop_rgb{
            font-size: 90%;
        }
    }

    @media only screen and (max-width : 500px) {
        #color_loop , #color_loop_rgb{
            font-size: 69%;
        }
    }
    
</style>
<h1 class="heading-style-css"><u><i>CSS color </i></u></h1>
<div class="style_divv mt-5">
تحدد الخاصية <b>color</b> لون النص . استخدم لون خلفية مقترن بلون نص يسهل قراءة النص.<br>
يتم تحديد اللون بواسطة :<br>
<ul>
    <li>اسم لون مثل <b>red</b>  و التي تعني أحمر بالغة الإنجليزية . </li>
    <li>قيمة <b>HEX</b> مثل <bdi>#ff0000</bdi></li>
    <li>قيمة <b>RGB</b> مثل rgb(255,255,255)</li>
</ul>
</div>
<h3> 1.  أسماء الألوان </h3>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css2_color.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css2_color 2.png' %}" class="img">
</div>
<br>
<h3> 2. الألوان بصيغة rgb </h3>
<div class="style_divv">
    <b>rgb</b> النموذج اللوني أحمر أخضر أزرق أو باختصار النموذج اللوني <b>rgb</b> ويقصد بها  (Red Green Blue).<br>
    وهو نموذج لوني جمعي تجمع فيه الألوان الحمراء والخضراء والزرقاء مع بعضها البعض بطرق مختلفة لتوليد مجموعة كبيرة من الألوان. تستقبل <b>rgb</b> تلات أرقام  ما بين 0 و 255
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css2_color2.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css2_color2 2.png' %}" class="img">
</div>
<br>
<h3>3.transparent</h3>
<div class="style_divv">
    تستعمل القيمة <b>transparent</b> مع الخاصية  <b>color</b> لجعل النص شفافا
    تستعمل مع الخاصية <b>-webkit-background-clip</b> و القيمة <b>text</b> لجعل النص يأخد ألوان الخلفية . 
    <div class="alert bg-dark" dir="ltr" style="margin-top:12px">
<pre><span style="color:var(--js-color)">color</span> : <span style="color:orange">transparent</span> ;
<span style="color:var(--js-color)">-webkit-background-clip</span> : <span style="color:orange">text</span> ;</pre>
    </div>
</div>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <h4 style="color:green"> الكود </h4>
    <img src="{% static 'css/css2_color3.png' %}" class="img">
    <h4 style="color:green"> بعد تشغيل الكود </h4>
    <img src="{% static 'css/css2_color3 2.png' %}" class="img">
</div>

<h3>4. بعض الألون  المستعملة </h3>
<div id="color_loop" class="w-100" dir="ltr"></div>
<div id="color_loop_rgb" dir="ltr"></div>
<script>
    var color=["aliceblue","aqua","aquamarine","azure","beige","bisque","blue","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","fuchsia","gold","green","greenyellow","gray","maroon","moccasin","purple","springgreen","tomato"," thistle","sienna","pink","teal","tan","rebeccapurple","steelblue","rosybrown"]
    for(var i=0 ; i<color.length ; i++){
        if(i%4==0)
            document.getElementById("color_loop").innerHTML +=`<br>`
        if( color[i] == "darkblue" || color[i] == "blue"|| color[i] == "darkmagenta"|| color[i] == "darkslategrey" || color[i] == "darkslateblue"|| color[i] == "darkslateblue"|| color[i] == "rebeccapurple" || color[i] == "maroon"|| color[i] == "purple"|| color[i] == "firebrick"|| color[i] == "darkred"|| color[i] == "darkgreen"|| color[i] == "darkviolet")
            document.getElementById("color_loop").innerHTML += `<div class="text-light w-25 text-center py-2 float-start" style="background-color:${color[i]}"> ${color[i]} </div>`
        else
            document.getElementById("color_loop").innerHTML += `<div class="text-black w-25 text-center py-2 float-start" style="background-color:${color[i]}"> ${color[i]} </div>`      
    }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(255,255,${i});"> rgb(255,255,${i}) </div>`  }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(255,0,${i});"> rgb(255,0,${i}) </div>`  }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(0,255,${i});"> rgb(0,255,${i}) </div>`  }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-light w-25 border text-center py-2 float-start" style="background-color:rgb(0,0,${i});"> rgb(0,0,${i}) </div>`  }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(255,${i},255);"> rgb(255,${i},255) </div>`  }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(0,${i},255);"> rgb(0,${i},255) </div>`  }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(255,${i},0);"> rgb(255,${i},0) </div>`  }
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(255,${i},${i});"> rgb(255,${i},${i}) </div>`  } 
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(${i},255,255);"> rgb(${i},255,255) </div>`}  
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 border text-center py-2 float-start" style="background-color:rgb(${i},255,0);"> rgb(${i},255,0) </div>`}  
    for(var i=0 ; i<=255 ; i=i+5){document.getElementById("color_loop_rgb").innerHTML += `<div class="text-light w-25 border text-center py-2 float-start" style="background-color:rgb(${i},0,255);"> rgb(${i},0,255) </div>`}
    for(var i=0 ; i<=255 ; i=i+5){
        if(i<150)document.getElementById("color_loop_rgb").innerHTML += `<div class="text-light w-25 text-center  py-2 float-start" style="background-color:rgb(${i},${i},${i});"> rgb(${i},${i},${i}) </div>`  
        else     document.getElementById("color_loop_rgb").innerHTML += `<div class="text-black w-25 text-center  py-2 float-start" style="background-color:rgb(${i},${i},${i});"> rgb(${i},${i},${i}) </div>`  
    }



</script>