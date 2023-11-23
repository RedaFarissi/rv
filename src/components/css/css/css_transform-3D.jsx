{% load static %} 
<style>
    #rotateX_exemple,#rotateX2_exemple,#rotateY_exemple,#rotateY2_exemple,#rotateZ_exemple,#translateZ_exemple,#translateZ2_exemple {
        display: flex;
        justify-content: space-around;
        background-color:azure;
    }
    #input_radio_box_rotateX,#input_radio_box_rotateX2,#input_radio_box_rotateY,#input_radio_box_rotateY2,#input_radio_box_rotateZ,#input_radio_box_translateZ,#input_radio_box_translateZ2 {
        box-shadow:5px 5px 20px rgba(0 0 0/30%);
        align-self:center;
        width: 40%;
        min-height: 400px;
    }
    #rotateX,#rotateX2,#rotateY,#rotateY2,#rotateZ,#translateZ,#translateZ2{
      width:160px;height:160px;margin:auto;background-color:gray;margin-top:15%;margin-bottom:15%;border:2.5px solid red;
    } 
    #result-rotateX,#result-rotateX2,#result-rotateY,#result-rotateY2,#result-rotateZ,#result-translateZ,#result-translateZ2{
      width:40%;box-shadow:3px 3px 20px rgba(0 0 0 /30%);
    }
    
    @media only  screen and (max-width:903px) {
        #rotateX_exemple,#rotateX2_exemple,#rotateY_exemple,#rotateZ_exemple,#translateZ_exemple,#translateZ2_exemple{
          flex-direction: column;
        }
        #input_radio_box_rotateX,#input_radio_box_rotateX2,#input_radio_box_rotateY,#input_radio_box_rotateZ,#input_radio_box_translateZ,#input_radio_box_translateZ2 {
          width:100%;
          margin-bottom:27px;
          padding-left: 9px;
        }
        .Code{
          margin-bottom:20px;
        }
        #result-rotateX,#result-rotateX2,#result-rotateY,#result-rotateZ,#result-translateZ,#result-translateZ2{
          width: 100%;
        }
    }
</style>
<style>
  #result-rotateX2,#result-rotateY2,#result-translateZ2{
    perspective: 300px;
    perspective-origin: center;
  }
</style>
<h1 class="heading-style-css"><u><i>  CSS transform 3D </i></u></h1>
<div class="style_divv mt-5">
    يدعم <b>CSS</b> أيضًا عمليات التحويل ثلاثية الأبعاد.<br>
    ستتعرف في هذا الفصل على خاصية <b>transform</b> بشكل أعمق .<br>
    باستخدام خاصية <bdi><b>transform</b></bdi> ، يمكنك استخدام طرق التحويل ثلاثية الأبعاد التالية:<br>
    <ul>
        <li><bdi><b>rotateX()</b></bdi></li>
        <li><bdi><b>rotateY()</b></bdi></li>
        <li><bdi><b>rotateZ()</b></bdi></li>
    </ul>
</div>
<h3 class="mt-3"> 1-  الدالة <bdi>rotateX()</bdi></h3>
<div class="style_divv">
    تحدد الوظيفة <bdi><b>rotateX()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور الأفقي <bdi>(دون تشويهه)</bdi> . <br>
</div>
<div class="mital">متال  :  </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateX()</b></bdi> . </li>
  <li> في المتال أسفله لم نقم بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>
<div id="rotateX_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateX" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(0deg)"/>   rotateX(0deg)   <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(10deg)" /> rotateX(10deg)  <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(30deg)"/>  rotateX(30deg)  <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(60deg)"/>  rotateX(60deg)  <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(90deg)"/>  rotateX(90deg)  <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(120deg)"/> rotateX(120deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(150deg)"/> rotateX(150deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(180deg)"/> rotateX(180deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(210deg)"/> rotateX(210deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(240deg)"/> rotateX(240deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(270deg)"/> rotateX(270deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(300deg)"/> rotateX(300deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(330deg)"/> rotateX(330deg) <br>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(360deg)"/> rotateX(360deg) <br>
    </div>
    <div class="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="rotateX-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div class="border bg-light  border-secondary p-2" id="result-rotateX">
    <div class="h2"> Result: </div>
    <div id="rotateX" class="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div>

<style>

</style>
<div class="mital"> متال 2 : </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateX()</b></bdi> . </li>
  <li> في المتال أسفله قمنا بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>

<div id="rotateX2_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateX2" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(0deg)"/>   rotateX(0deg)   <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(10deg)" /> rotateX(10deg)  <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(30deg)"/>  rotateX(30deg)  <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(60deg)"/>  rotateX(60deg)  <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(90deg)"/>  rotateX(90deg)  <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(120deg)"/> rotateX(120deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(150deg)"/> rotateX(150deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(180deg)"/> rotateX(180deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(210deg)"/> rotateX(210deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(240deg)"/> rotateX(240deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(270deg)"/> rotateX(270deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(300deg)"/> rotateX(300deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(330deg)"/> rotateX(330deg) <br>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(360deg)"/> rotateX(360deg) <br>
    </div>
    <div class="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="rotateX2-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div class="border bg-light  border-secondary p-2" id="result-rotateX2">
    <div class="h2"> Result: </div>
    <div id="rotateX2" class="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div>
<h3 class="mt-3"> 2-  الدالة <bdi>rotateY()</bdi></h3>
<div class="style_divv">
    تحدد الوظيفة <bdi><b>rotateY()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور العمودي  <bdi>(دون تشويهه)</bdi> . <br>
</div>
<div class="mital">متال  :  </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateY()</b></bdi> </li>
  <li> في المتال أسفله لم نقم بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>
<div id="rotateY_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateY" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(0deg)"/>   rotateY(0deg)<br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(10deg)" /> rotateY(10deg)<br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(30deg)"/>  rotateY(30deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(60deg)"/>  rotateY(60deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(90deg)"/>  rotateY(90deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(120deg)"/> rotateY(120deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(150deg)"/> rotateY(150deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(180deg)"/> rotateY(180deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(210deg)"/> rotateY(210deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(240deg)"/> rotateY(240deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(270deg)"/> rotateY(270deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(300deg)"/> rotateY(300deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(330deg)"/> rotateY(330deg) <br>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(360deg)"/> rotateY(360deg) <br>
    </div>
    <div class="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="rotateY-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div class="border bg-light  border-secondary p-2" id="result-rotateY">
    <div class="h2"> Result: </div>
    <div id="rotateY" class="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div>

<div class="mital">متال 2 :  </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateY()</b></bdi> </li>
  <li> في المتال أسفله قمنا بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>
<div id="rotateY2_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateY2" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(0deg)"/>   rotateY(0deg)<br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(10deg)" /> rotateY(10deg)<br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(30deg)"/>  rotateY(30deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(60deg)"/>  rotateY(60deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(90deg)"/>  rotateY(90deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(120deg)"/> rotateY(120deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(150deg)"/> rotateY(150deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(180deg)"/> rotateY(180deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(210deg)"/> rotateY(210deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(240deg)"/> rotateY(240deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(270deg)"/> rotateY(270deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(300deg)"/> rotateY(300deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(330deg)"/> rotateY(330deg) <br>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(360deg)"/> rotateY(360deg) <br>
    </div>
    <div class="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="rotateY2-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div class="border bg-light  border-secondary p-2" id="result-rotateY2">
    <div class="h2"> Result: </div>
    <div id="rotateY2" class="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div>










<h3 class="mt-3"> 3-  الدالة <bdi>rotateZ()</bdi></h3>
<div class="style_divv">
    تحدد الوظيفة <bdi><b>rotateZ()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور <b>z</b> <bdi>(دون تشويهه)</bdi> . <br>
    
</div>
<div class="mital">متال  :  </div>
<ul><li>   أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateZ()</b></bdi> </li></ul>
<div id="rotateZ_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateZ" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(0deg)"/>   rotateZ(0deg)<br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(10deg)" /> rotateZ(10deg)<br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(30deg)"/>  rotateZ(30deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(60deg)"/>  rotateZ(60deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(90deg)"/>  rotateZ(90deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(120deg)"/> rotateZ(120deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(150deg)"/> rotateZ(150deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(180deg)"/> rotateZ(180deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(210deg)"/> rotateZ(210deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(240deg)"/> rotateZ(240deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(270deg)"/> rotateZ(270deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(300deg)"/> rotateZ(300deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(330deg)"/> rotateZ(330deg) <br>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(360deg)"/> rotateZ(360deg) <br>
    </div>
    <div class="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="rotateZ-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div class="border bg-light  border-secondary p-2" id="result-rotateZ">
    <div class="h2"> Result: </div>
    <div id="rotateZ" class="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div>


<h3 class="mt-3"> 4-  الدالة <bdi>translateZ()</bdi></h3>
<div class="style_divv">
  أولاََّّ لإستخدام <kbd>transform : translateZ()</kbd> يجب إعطاء العنصر الأب القيمة <bdi><b>perspective</b></bdi> .<br>
  تحدد الوظيفة <bdi><b>translateZ()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور <b>z</b> <bdi>(دون تشويهه)</bdi> . <br>
</div>
<div class="mital">متال  :  </div>
<ul><li>   أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateZ()</b></bdi> </li></ul>
<div id="translateZ_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_translateZ" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(0px)"/>     <bdi>translateZ(0px)    </bdi> .<br>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(35px)"/>    <bdi>translateZ(35px)   </bdi> .<br>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(-35px)"/>   <bdi>translateZ(-35px)  </bdi> .<br>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(-9.7rem)"/> <bdi>translateZ(-9.7rem)</bdi> .<br>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(2.7rem)"/>  <bdi>translateZ(2.7rem) </bdi> .<br>
    </div>
    <div class="Code" class="mt-4">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style="font-weight:500;">transform : </span> <span id="translateZ-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div class="border bg-light  border-secondary p-2" id="result-translateZ" style="perspective:300px">
    <div class="h2"> Result: </div>
    <div id="translateZ" class="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div>

<script>
    function rotateX(value){
        document.getElementById("rotateX").style.transform = value;
        document.getElementById("rotateX-result").innerHTML = value;
    }
    function rotateX2(value){
        document.getElementById("rotateX2").style.transform = value;
        document.getElementById("rotateX2-result").innerHTML = value;
    }

    function rotateY(value){
        document.getElementById("rotateY").style.transform = value;
        document.getElementById("rotateY-result").innerHTML = value;
    }
    function rotateY2(value){
        document.getElementById("rotateY2").style.transform = value;
        document.getElementById("rotateY2-result").innerHTML = value;
    }
    function rotateZ(value){
        document.getElementById("rotateZ").style.transform = value;
        document.getElementById("rotateZ-result").innerHTML = value;
    }
    function translateZ(value){
        document.getElementById("translateZ").style.transform = value;
        document.getElementById("translateZ-result").innerHTML = value;
    }
</script>