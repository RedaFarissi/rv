import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function JustifyContent(props){
    // document.getElementById("flex-start").click()
    // function just_C(value) {
    //   document.getElementById("Result").style.justifyContent = value;
    //   document.getElementById("justify-content-result").innerHTML = value +";";
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Justify-Content </h1>
    <article></article>

<div className="style_divv mt-5">
    تقوم الخاصية <b>justify-content</b> بمحاذاة عناصر الحاوية المرنة عندما لا تستخدم العناصر كل المساحة المتوفرة على المحور الرئيسي (أفقيًا) .<br/>
    تستخدم الخاصية <b>justify-content</b> مع الخاصية <b>display</b> و القيمة <b>flex</b> وتستقبل القيم التالية :
    <ul dir="ltr">
        <li><b>justify-content : flex-start</b></li>
        <li><b>justify-content : flex-end</b></li>
        <li><b>justify-content : center</b></li>
        <li><b>justify-content : space-between</b></li>
        <li><b>justify-content : space-around</b></li>
        <li><b>justify-content : space-evenly</b></li>
    </ul>
</div>
<h3>1. القيمة flex-start</h3>
<div className="style_divv">
    القيمة الافتراضية. يتم وضع العناصر في بداية الحاوية 
</div>
<div className="sum_exemple_style">
<div className="mital">متال  :  </div>
<img src={images.css48_justify_content} className="img"/>
<img src={images.css48_justify_content_2} className="img"/>
</div>
<h3>2. القيمة flex-end</h3>
<div className="style_divv">
    يتم وضع العناصر في نهاية الحاوية
</div>
<div className="sum_exemple_style">
<div className="mital">متال  :  </div>
<img src={images.css48_justify_content2} className="img"/>
<img src={images.css48_justify_content2_2} className="img"/>
</div>
<h3>3. القيمة center</h3>
<div className="style_divv">
    يتم وضع العناصر في وسط الحاوية      
</div>
<div className="sum_exemple_style">
<div className="mital">متال :  </div>
<img src={images.css48_justify_content3} className="img"/>
<img src={images.css48_justify_content3_2} className="img"/>
</div>
<h3>4. القيمة space-between</h3>
<div className="style_divv">
    العناصر سيكون لها مسافة بينهما     
</div>
<div className="sum_exemple_style">
<div className="mital">متال :  </div>
<img src={images.css48_justify_content4} className="img"/>
<img src={images.css48_justify_content4_2} className="img"/>
</div>
<h3>5. القيمة space-around</h3>
<div className="style_divv">
    سيكون للعناصر مسافة قبلها وفيما بينها وبعدها    
</div>
<div className="sum_exemple_style">
<div className="mital">متال :  </div>
<img src={images.css48_justify_content5} className="img"/>
<img src={images.css48_justify_content5_2} className="img"/>
</div>
<h3>6. القيمة space-evenly</h3>
<div className="style_divv">
    سيكون للعناصر مساحة متساوية حولها    
</div>
<div className="sum_exemple_style">
<div className="mital">متال :  </div>
<img src={images.css48_justify_content6} className="img"/>
<img src={images.css48_justify_content6_2} className="img"/>
</div>
<h3>7. متال تفاعلي تجربي </h3>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>justify-content</b>  و لفهم بشكل أفضل .</li></ul>
{/* <div id="justify_content_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" className="border border-secondary rounded bg-light p-3" >
        <div className="h2"> justify-content : </div>
        <div>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="flex-start" id="flex-start" /> flex-start <br/>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="flex-end"/> flex-end <br/>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="center"/> center <br/>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="space-between"/> space-between<br/>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="space-evenly"/> space-evenly<br/>
            <input type="radio" name="Ju-C" onclick="just_C(this.value)" value="space-around"/> space-around<br/>
        </div>
        <div id="Code" className="mt-4 w-100">
          <div className="h3"> Code: </div>
          <div className="border py-2 ps-2 w-100" >
                <span style="font-weight: 500;"> display : flex ;</span><br/>
                <span style="font-weight: 500;">justify-content : </span> <span id="justify-content-result" style="font-weight: 500"></span>
          </div>
        </div>
    </div>
    <div className="border bg-light border-secondary" id="justify-content"> 
        <div className="h2"> Result : </div>
        <div id="Result">
            <div style="background-color:violet;"></div>
    		<div style="background-color:green;"></div>
    		<div style="background-color:brown;"></div> 
        </div>
    </div>
</div> */}
</section>
)
}