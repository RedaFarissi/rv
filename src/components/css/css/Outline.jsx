import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Outline(props){
    // document.getElementById("outline-W").click()
    // function outline_width(value){
    //     document.getElementById("outLine").style.outlineWidth=value;
    //     document.getElementById("outline-result").innerHTML = value + ";"
    // }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Outline </h1>
    <article>

    </article>

<h3>1. الخاصية outline </h3>
<div className="style_divv">
    تحدد الخاصية <b>outline</b>  خط مرسوم خارج <b>border</b>  العنصر وهي إختصار للخصائص التالية والتي سنتعلم حولها خلال هذا البرنامج تعليمي :
    <ul dir="ltr">
        <li><b>outline-width</b></li>
        <li><b>outline-style</b></li>
        <li><b>outline-color</b></li>
    </ul>
</div>
<div className="sum_exemple_style">
    <div className="mital"> متال : </div>
    <ul><li> لا يهم ترتيب العناصر </li></ul>
    <img src={images.css39_outline} className="img"/>
    <div className="styleee">
        <p id="Pa">This element has a 2px black border and a green outline with a width of 10px.</p>	
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">رسم توضيحي   </div>
    <img src={images.css39_outline2} className="img"/>
</div>
<h3>2. الخاصية outline-width </h3>
<div className="style_divv">
    تحدد خاصية <b>outline-width</b> عرض الخط الخارجي ، ويمكن أن تحتوي على إحدى القيم التالية :
    <ul>
        <li><b>thin</b> (عادةً 1 بكسل) </li>
        <li><b>medium</b> متوسط ​​(عادةً 3 بكسل)</li>
        <li><b>thick</b> سميك (عادةً 5 بكسل)</li>
        <li>  حجم محدد (in px, pt, cm, em, ..) </li>
    </ul>
</div>
<div className="mital"> متال : </div>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>outline-width</b>  و لفهم بشكل أفضل .</li></ul>
{/* <div id="outline_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> outline-width : </div>
    <div>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  className="mar" value="thin" id="outline-W" /> thin <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  className="mar" value="medium"/> medium <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  className="mar" value="thick"/> thick <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  className="mar" value="9px"/> 9px <br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  className="mar" value="1.2rem"/> 1.2rem<br>
        <input type="radio" name="o-w" onclick="outline_width(this.value)"  className="mar" value="22px"/> 23px <br>
    </div>
    <div id="Code" className="mt-4 w-100">
        <div className="h3"> Code: </div>
        <div className="border py-2 ps-2 w-100" >
            <span style="font-weight: 500;">outline-width : </span> <span id="outline-result" style="font-weight: 500"></span>
        </div>
    </div>
  </div>
  <div className="border bg-light border-secondary" id="outlineE">
    <div className="h2 ps-2"> Result: </div>
    <div id="outLine">
       content
    </div>
  </div>
</div> */}
<div className="sum_exemple_style">
<div className="mital"> متال 2 : </div>
<img src={images.css39_outline3} className="img"/>
<img src={images.css39_outline3_2} className="img"/>
</div>
<h3>3. الخاصية outline-style </h3>
<div className="style_divv">
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
<div className="sum_exemple_style">
<div className="mital"> متال : </div>
<img src={images.css39_outline4} className="img"/>
<div className="styleee">
    <p className="P dotted">A dotted outline</p>
	<p className="P dashed">A dashed outline</p>
	<p className="P solid">A solid outline</p>
	<p className="P double">A double outline</p>
	<p className="P groove">A groove outline. </p>
	<p className="P ridge">A ridge outline. </p>
	<p className="P inset">An inset outline.</p>
	<p className="P outset">An outset outline.</p>
</div>
</div>
<h3>4. الخاصية outline-color </h3>
<div className="style_divv">
    تحدد الخاصية <b>outline-color</b> لون الخط الخارجي 
</div>
<div className="sum_exemple_style">
<div className="mital"> متال : </div>
<img src={images.css39_outline5} className="img"/>
<img src={images.css39_outline5_2} className="img"/>
</div>
<h3>5. الخاصية outline-offset </h3>
<div className="style_divv">
    تسمخ الخاصية <b>outline-offset</b> بإنشاء فراغ بين الخط الخرجي <b>outline</b> و الحد  <b>border</b>
</div>
<div className="sum_exemple_style">
<div className="mital"> متال : </div>
<img src={images.css39_outline6} className="img"/>
<img src={images.css39_outline6_2} className="img"/>
</div>


</section>
)
}