import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function ObjectFit(props){
    // function object_fit(value){
    //     document.getElementById("object_fit").style.objectFit = value;
    //     document.getElementById("object-fit-result").innerHTML = value ;
    //   }
    //   document.getElementById("none1").click()
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Object-Fit </h1>
    <article>
        <div class="style_divv mt-5">
            تحدد خاصية <b>Object-fit</b> كيفية تغيير حجم محتوى العنصر المستبدل ، مثل <kbd>&lt;img&gt;</kbd> أو <kbd>&lt;video&gt;</kbd> ، ليلائم حاويته . <br/>
            يمكنك تغيير محاذاة كائن محتوى العنصر الذي تم استبداله داخل مربع العنصر باستخدام خاصية <bdi><b>object-position</b></bdi> .
            وتستقبل الخاصية <b>Object-fit</b> القيم التالية :
            <ul dir="ltr">
                <li>object-fit : <b>fill</b> </li>
                <li>object-fit : <b>contain</b> </li>
                <li>object-fit : <b>cover</b> </li>
                <li>object-fit : <b>none</b> </li>
                <li>object-fit : <b>scale-down</b> </li>
            </ul>
        </div>
    </article>
<h3>1. القيمة fill </h3>
<div class="style_divv">
    يتم تغيير حجم المحتوى الذي تم استبداله لملء مربع محتوى العنصر. الكائن بأكمله سوف يملأ المربع بالكامل. إذا كانت نسبة العرض إلى الارتفاع للكائن لا تتطابق مع نسبة العرض إلى الارتفاع لصندوقه ، فسيتم تمديد الكائن ليلائمه.
</div>
<h3>2. القيمة contain </h3>
<div class="style_divv">
    يتم قياس المحتوى الذي تم استبداله للحفاظ على نسبة العرض إلى الارتفاع الخاصة به أثناء ملاءمته لمربع محتوى العنصر. تم صنع الكائن بأكمله لملء المربع ، مع الحفاظ على نسبة العرض إلى الارتفاع الخاصة به 
</div>
<h3>3. القيمة cover</h3>
<div class="style_divv">
    يتم تغيير حجم المحتوى الذي تم استبداله للحفاظ على نسبة العرض إلى الارتفاع الخاصة به أثناء ملء مربع محتوى العنصر بالكامل. إذا كانت نسبة العرض إلى الارتفاع للكائن لا تتطابق مع نسبة العرض إلى الارتفاع لمربعه ، فسيتم قص الكائن ليلائمه
</div>
<h3>4. القيمة none </h3>
<div class="style_divv">
    لن يتم تغيير حجم المحتوى المستبدل . <br/>
</div>
<h3>5. القيمة scale-down </h3>
<div class="style_divv">
    يتم تحديد حجم المحتوى كما لو لم يتم تحديد أي شيء أو يحتوي عليه ، أيهما سينتج عنه حجم كائن ملموس أصغر.
</div>
<div class="sum_exemple_style">
<div class="mital"> متال  : </div>
<img src={images.css33_object_fit} class="img"/>
<img src={images.css33_object_fit_2} class="img"/>
</div>
<br/>
<div class="sum_exemple_style">
<div class="mital"> متال 2 : </div>
<img src={images.css33_object_fit2} class="img"/>
<img src={images.css33_object_fit2_2} class="img"/>
<img src={images.css33_object_fit2_3} class="img"/>
</div>
<br/>
<div class="mital"> متال 3 : </div>
<ul><li>قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>Object-fit</b> .</li></ul>
{/* <div dir="ltr" id="object_fit_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" class="border bg-light border-secondary p-4">
    <div class="h2"> object-fit: </div>
    <div>
        <input type="radio" name="bo-sh" onclick="object_fit(this.value)" class="pad" value="none" id="none1" /> none <br/>
        <input type="radio" name="bo-sh" onclick="object_fit(this.value)" class="pad" value="contain"/> contain<br/>
        <input type="radio" name="bo-sh" onclick="object_fit(this.value)" class="pad" value="fill"/> fill<br/>
        <input type="radio" name="bo-sh" onclick="object_fit(this.value)" class="pad" value="cover"/> cover <br/>
        <input type="radio" name="bo-sh" onclick="object_fit(this.value)" class="pad" value="scale-down"/> scale-down<br/>
    </div>
    <div id="Code" class="mt-4 w-100">
        <div class="h3"> Code: </div>
        <div class="border py-2 ps-2 w-100" >
            <span style="font-weight: 500;">object-fit : </span> <span id="object-fit-result" style="font-weight: 500"></span>
        </div>
    </div>
  </div>
  <div class="border bg-light border-secondary" id="object-fit">
        <div class="h2"> Result: </div>
        <div style="margin:auto;border:5px solid black;">
            <img src={images.ob_pc} style="width:100%;height:300px;margin:auto;" id="object_fit"/>
        </div>
  </div>
</div> */}
</section>
)
}