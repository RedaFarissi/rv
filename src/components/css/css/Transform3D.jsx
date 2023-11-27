import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Transform3D(props){

//   function rotateX(value){
//     document.getElementById("rotateX").style.transform = value;
//     document.getElementById("rotateX-result").innerHTML = value;
// }
// function rotateX2(value){
//     document.getElementById("rotateX2").style.transform = value;
//     document.getElementById("rotateX2-result").innerHTML = value;
// }

// function rotateY(value){
//     document.getElementById("rotateY").style.transform = value;
//     document.getElementById("rotateY-result").innerHTML = value;
// }
// function rotateY2(value){
//     document.getElementById("rotateY2").style.transform = value;
//     document.getElementById("rotateY2-result").innerHTML = value;
// }
// function rotateZ(value){
//     document.getElementById("rotateZ").style.transform = value;
//     document.getElementById("rotateZ-result").innerHTML = value;
// }
// function translateZ(value){
//     document.getElementById("translateZ").style.transform = value;
//     document.getElementById("translateZ-result").innerHTML = value;
// }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Transform-3D </h1>
    <article>

    </article>

<div className="style_divv mt-5">
    يدعم <b>{"CSS"}</b> أيضًا عمليات التحويل ثلاثية الأبعاد.<br/>
    ستتعرف في هذا الفصل على خاصية <b>transform</b> بشكل أعمق .<br/>
    باستخدام خاصية <bdi><b>transform</b></bdi> ، يمكنك استخدام طرق التحويل ثلاثية الأبعاد التالية:<br/>
    <ul>
        <li><bdi><b>rotateX()</b></bdi></li>
        <li><bdi><b>rotateY()</b></bdi></li>
        <li><bdi><b>rotateZ()</b></bdi></li>
    </ul>
</div>
<h3 className="mt-3"> 1-  الدالة <bdi>rotateX()</bdi></h3>
<div className="style_divv">
    تحدد الوظيفة <bdi><b>rotateX()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور الأفقي <bdi>(دون تشويهه)</bdi> . <br/>
</div>
{/* <div className="mital">متال  :  </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateX()</b></bdi> . </li>
  <li> في المتال أسفله لم نقم بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>
<div id="rotateX_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateX" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(0deg)"/>   rotateX(0deg)   <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(10deg)" /> rotateX(10deg)  <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(30deg)"/>  rotateX(30deg)  <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(60deg)"/>  rotateX(60deg)  <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(90deg)"/>  rotateX(90deg)  <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(120deg)"/> rotateX(120deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(150deg)"/> rotateX(150deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(180deg)"/> rotateX(180deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(210deg)"/> rotateX(210deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(240deg)"/> rotateX(240deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(270deg)"/> rotateX(270deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(300deg)"/> rotateX(300deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(330deg)"/> rotateX(330deg) <br/>
      <input type="radio" name="bo-sh4" onclick="rotateX(this.value)" value="rotateX(360deg)"/> rotateX(360deg) <br/>
    </div>
    <div className="Code mt-4">
       <div className="h3"> Code: </div>
       <div className="border py-2 ps-2 w-100" >
           <span style={{font-weight:"500"}}>transform : </span> <span id="rotateX-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div className="border bg-light  border-secondary p-2" id="result-rotateX">
    <div className="h2"> Result: </div>
    <div id="rotateX" className="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div> */}

<div className="mital"> متال 2 : </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateX()</b></bdi> . </li>
  <li> في المتال أسفله قمنا بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>

{/* <div id="rotateX2_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateX2" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(0deg)"/>   rotateX(0deg)   <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(10deg)" /> rotateX(10deg)  <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(30deg)"/>  rotateX(30deg)  <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(60deg)"/>  rotateX(60deg)  <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(90deg)"/>  rotateX(90deg)  <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(120deg)"/> rotateX(120deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(150deg)"/> rotateX(150deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(180deg)"/> rotateX(180deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(210deg)"/> rotateX(210deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(240deg)"/> rotateX(240deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(270deg)"/> rotateX(270deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(300deg)"/> rotateX(300deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(330deg)"/> rotateX(330deg) <br/>
      <input type="radio" name="bo-sh9" onclick="rotateX2(this.value)" value="rotateX(360deg)"/> rotateX(360deg) <br/>
    </div>
    <div className="Code mt-4">
       <div className="h3"> Code: </div>
       <div className="border py-2 ps-2 w-100" >
           <span style={{font-weight:"500"}}>transform : </span> <span id="rotateX2-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div className="border bg-light  border-secondary p-2" id="result-rotateX2">
    <div className="h2"> Result: </div>
    <div id="rotateX2" className="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div> */}
<h3 className="mt-3"> 2-  الدالة <bdi>rotateY()</bdi></h3>
<div className="style_divv">
    تحدد الوظيفة <bdi><b>rotateY()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور العمودي  <bdi>(دون تشويهه)</bdi> . <br/>
</div>
<div className="mital">متال  :  </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateY()</b></bdi> </li>
  <li> في المتال أسفله لم نقم بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>
{/* <div id="rotateY_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateY" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(0deg)"/>   rotateY(0deg)<br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(10deg)" /> rotateY(10deg)<br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(30deg)"/>  rotateY(30deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(60deg)"/>  rotateY(60deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(90deg)"/>  rotateY(90deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(120deg)"/> rotateY(120deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(150deg)"/> rotateY(150deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(180deg)"/> rotateY(180deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(210deg)"/> rotateY(210deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(240deg)"/> rotateY(240deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(270deg)"/> rotateY(270deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(300deg)"/> rotateY(300deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(330deg)"/> rotateY(330deg) <br/>
      <input type="radio" name="bo-sh3" onclick="rotateY(this.value)" value="rotateY(360deg)"/> rotateY(360deg) <br/>
    </div>
    <div className="Code mt-4">
       <div className="h3"> Code: </div>
       <div className="border py-2 ps-2 w-100" >
           <span style={{font-weight:"500"}}>transform : </span> <span id="rotateY-result" style={{font-weight:"500"}}></span>
       </div>
    </div>
  </div>
  <div className="border bg-light  border-secondary p-2" id="result-rotateY">
    <div className="h2"> Result: </div>
    <div id="rotateY" className="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div> */}

<div className="mital">متال 2 :  </div>
<ul>
  <li> أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateY()</b></bdi> </li>
  <li> في المتال أسفله قمنا بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
</ul>
{/* <div id="rotateY2_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateY2" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(0deg)"/>   rotateY(0deg)<br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(10deg)" /> rotateY(10deg)<br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(30deg)"/>  rotateY(30deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(60deg)"/>  rotateY(60deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(90deg)"/>  rotateY(90deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(120deg)"/> rotateY(120deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(150deg)"/> rotateY(150deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(180deg)"/> rotateY(180deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(210deg)"/> rotateY(210deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(240deg)"/> rotateY(240deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(270deg)"/> rotateY(270deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(300deg)"/> rotateY(300deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(330deg)"/> rotateY(330deg) <br/>
      <input type="radio" name="bo-shd8" onclick="rotateY2(this.value)" value="rotateY(360deg)"/> rotateY(360deg) <br/>
    </div>
    <div className="Code mt-4">
       <div className="h3"> Code: </div>
       <div className="border py-2 ps-2 w-100" >
           <span style={{font-weight:"500"}}>transform : </span> <span id="rotateY2-result" style={{font-weight:"500"}}></span>
       </div>
    </div>
  </div>
  <div className="border bg-light  border-secondary p-2" id="result-rotateY2">
    <div className="h2"> Result: </div>
    <div id="rotateY2" className="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div> */}










<h3 className="mt-3"> 3-  الدالة <bdi>rotateZ()</bdi></h3>
<div className="style_divv">
    تحدد الوظيفة <bdi><b>rotateZ()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور <b>z</b> <bdi>(دون تشويهه)</bdi> . <br/>
</div>
<div className="mital">متال  :  </div>
{/* <ul><li>   أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateZ()</b></bdi> </li></ul>
<div id="rotateZ_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_rotateZ" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(0deg)"/>   rotateZ(0deg)<br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(10deg)" /> rotateZ(10deg)<br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(30deg)"/>  rotateZ(30deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(60deg)"/>  rotateZ(60deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(90deg)"/>  rotateZ(90deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(120deg)"/> rotateZ(120deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(150deg)"/> rotateZ(150deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(180deg)"/> rotateZ(180deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(210deg)"/> rotateZ(210deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(240deg)"/> rotateZ(240deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(270deg)"/> rotateZ(270deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(300deg)"/> rotateZ(300deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(330deg)"/> rotateZ(330deg) <br/>
      <input type="radio" name="bo-sh2" onclick="rotateZ(this.value)" value="rotateZ(360deg)"/> rotateZ(360deg) <br/>
    </div>
    <div className="Code" className="mt-4">
       <div className="h3"> Code: </div>
       <div className="border py-2 ps-2 w-100" >
           <span style={{font-weight:"500"}}>transform : </span> <span id="rotateZ-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div className="border bg-light  border-secondary p-2" id="result-rotateZ">
    <div className="h2"> Result: </div>
    <div id="rotateZ" className="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div> */}


<h3 className="mt-3"> 4-  الدالة <bdi>translateZ()</bdi></h3>
<div className="style_divv">
  أولاََّّ لإستخدام <kbd>transform : translateZ()</kbd> يجب إعطاء العنصر الأب القيمة <bdi><b>perspective</b></bdi> .<br/>
  تحدد الوظيفة <bdi><b>translateZ()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور <b>z</b> <bdi>(دون تشويهه)</bdi> . <br/>
</div>
<div className="mital">متال  :  </div>
{/* <ul><li>   أنقر على الأزرار أسفله لفهم بشكل أفضل عن الخاصية <b>transform</b> مع  الدالة <bdi><b>rotateZ()</b></bdi> </li></ul>
<div id="translateZ_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box_translateZ" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> transform : </div>  
    <div>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(0px)"/>     <bdi>translateZ(0px)    </bdi> .<br/>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(35px)"/>    <bdi>translateZ(35px)   </bdi> .<br/>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(-35px)"/>   <bdi>translateZ(-35px)  </bdi> .<br/>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(-9.7rem)"/> <bdi>translateZ(-9.7rem)</bdi> .<br/>
      <input type="radio" name="bo-sh5" onclick="translateZ(this.value)" value="translateZ(2.7rem)"/>  <bdi>translateZ(2.7rem) </bdi> .<br/>
    </div>
    <div className="Code" className="mt-4">
       <div className="h3"> Code: </div>
       <div className="border py-2 ps-2 w-100" >
           <span style={{font-weight:"500"}}>transform : </span> <span id="translateZ-result" style="font-weight:500"></span>
       </div>
    </div>
  </div>
  <div className="border bg-light  border-secondary p-2" id="result-translateZ" style="perspective:300px">
    <div className="h2"> Result: </div>
    <div id="translateZ" className="border border-success border-3 w-50 bg-dark text-light p-3" > Reda Eskouni </div>
  </div>
</div> */}
</section>
    )
  }