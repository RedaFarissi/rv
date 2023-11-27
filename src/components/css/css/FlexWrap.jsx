
import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function FlexWrap(props){
// function FlexWrap(value){
//     document.getElementById("Rseult").style.flexWrap = value
//     document.getElementById("flex-wrap-result").innerHTML = value +";"
// }
// function align_Content(value){
//     document.getElementById("Rseult2").style.alignContent = value
//     document.getElementById("flex-wrap-result2").innerHTML = value +";"
// }
// document.getElementById("Wrap-first").click()
// document.getElementById("wrap2").click()

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Flex-Wrap </h1>
    <article>
        <p class="style_divv">
            تستعمل الخاصية <b>flex-wrap</b> مع العناصر التي تحمل الخاصية <b>display : flex</b> وذالك من أجل جعل العناصر الأبناء يعدون تلقائيا إلى السطر .<br/>
            تستقبل الخاصية <b>flex-wrap</b> القيم التالية :
            <ul dir="ltr">
                <li><b>flex-wrap : wrap;</b></li>
                <li><b>flex-wrap : nowrap;</b></li>
                <li><b>flex-wrap : wrap-reverse;</b></li>
            </ul>
        </p>
    </article>
<h3>1. الخاصية flex-wrap </h3>
<div class="sum_exemple_style">
    <div class="mital">متال : </div>
    <img src={images.css47_flex_wrap} class="img"/>
    <div class="style-result">
        <h2 class="h2"><bdi> عند إستعمال الخاصية  flex-wrap: wrap </bdi> .</h2>
    	<div id="div" style={{border:"2px solid black"}}> 
    		<div style={{backgroundColor:"red"}}>1</div>
    		<div style={{backgroundColor:"green"}}>2</div>
    		<div style={{backgroundColor:"pink"}}>3</div>
    		<div style={{backgroundColor:"yellow"}}>4</div>
    		<div style={{backgroundColor:"rgb(200,0,100)"}}>5</div>
    		<div style={{backgroundColor:"darkorange"}}>6</div>
    		<div style={{backgroundColor:"gray"}}>7</div>
    		<div style={{backgroundColor:"aqua"}}>8</div>
    	</div>
    	<h2 class="h2"><bdi> بدون إستعمال الخاصية flex-wrap </bdi></h2>
    	<div id="div2" style={{border:"2px solid black"}}> 
    		<div style={{backgroundColor:"red"}}>A</div>
    		<div style={{backgroundColor:"green"}}>B</div>
    		<div style={{backgroundColor:"pink"}}>C</div>
    		<div style={{backgroundColor:"yellow"}}>D</div>
    		<div style={{backgroundColor:"rgb(200,0,100)"}}>E</div>
    		<div style={{backgroundColor:"darkorange"}}>F</div>
    		<div style={{backgroundColor:"gray"}}>G</div>
    		<div style={{backgroundColor:"aqua"}}>H</div>
    	</div>
    </div>
</div>
<div class="mital">متال 2 : </div>
{/* <div class="wrap_exemple alert p-3 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
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
</div> */}
<ul><li>لاحض أنه يتم إضافة فراغ بين العناصر الأبناء تلقائيا </li></ul>
<h3>2.  الخاصية flex-content</h3>
<p class="style_divv">
    تعدل خاصية <b>align-content</b> سلوك الخاصية <b>flex-wrap</b>. وذالك بإزالة الفراغات بين العناصر .<br/>
</p>
<div class="mital">متال  : </div>
{/* <div class="wrap_exemple alert p-3 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
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
</div> */}

</section>
)
}