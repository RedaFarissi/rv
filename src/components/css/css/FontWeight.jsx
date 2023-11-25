import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function FontWeight(props){
    // function font_w(value){
    //     document.getElementById("font_w").style.fontWeight = value;
    //     document.getElementById("fontWeightResult").innerHTML = value +";";
    //   }
    //   document.getElementById("none3").click();
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Font-Weight </h1>
    <article>
        <div className="style_divv mt-5">
        الخاصية <b>font-weight</b> في <b>CSS</b> تُحدِّد «وزن» (weight، أو السمك) الخط؛ والأوزان المتاحة للاستخدام في خطٍ ما تعتمد على نوع الخط المستخدم <b>font-family</b>، إذ إنَّ بعض الخطوط لا توفِّر إلا نسختين هما <b>normal</b> و <b>bold</b>.
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src={images.css8_font_weight} className="img"/>
        <img src={images.css8_font_weight_2} className="img"/>
        </div>
        <h3>جميع القيم الممكنة لل font-weight </h3>
        <div className="style_divv" >
            كلمات محجوزة <br/><br/>
            <ul dir="ltr"><li><b>font-weight: normal</b></li><li><b>font-weight: bold</b></li></ul>
            كلمات محجوزة نسبةً إلى العنصر الأب <br/><br/>
            <ul dir="ltr">
            <li><b>font-weight: lighter;</b></li>
            <li><b>font-weight: bolder;</b> </li>
            </ul>
            القيمة الرقمية<br/><br/>
            <ul dir="ltr">
             <li><b>font-weight: 100</b></li>
             <li><b>font-weight: 200</b></li>
             <li><b>font-weight: 300</b></li>
             <li><b>font-weight: 400</b></li>
             <li><b>font-weight: 500</b></li>
             <li><b>font-weight: 600</b></li>
             <li><b>font-weight: 700</b></li>
             <li><b>font-weight: 800</b></li>
             <li><b>font-weight: 900</b></li>
            </ul>
            القيم الأولية  <br/><br/>
            <ul dir="ltr">
             <li><b>font-weight: inherit</b></li>
             <li><b>font-weight: initial</b></li>
             <li><b>font-weight: unset</b></li>
            </ul>
        </div>
    </article>
{/* <div className="mital">متال :  </div>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>font-weight</b> و لفهم بشكل أفضل .</li></ul>
<div id="fontWeight_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" className="border border-secondary rounded bg-light p-3">
        <div className="h2"> font-weight: </div>
        <div>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="normal"  id="none3"/> normal<br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="bold"/> bold   <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="lighter"/> lighter<br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="bolder"/> bolder <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="100"/> 100 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="200"/> 200 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="300"/> 300 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="400"/> 400 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="500"/> 500 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="600"/> 600 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="700"/> 700 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="800"/> 800 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="900"/> 900 <br/>
            <input type="radio" name="bo-sh" onclick="font_w(this.value)" className="font-w" value="inherit"/> inherit <br/>
        </div>
    </div>
    <div className="border bg-light border-secondary" id="FontWeight">
        <div className="h2 ps-3 pt-3"> Result : </div>
        <div id="font_w"> font weight </div>

        <div id="Code">
          <div className="h3"> Code: </div>
          <div className="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">font-weight:</span> <span id="fontWeightResult" style="font-weight: 500"></span>
          </div>
        </div>
    </div>
</div> */}



</section>
)
}