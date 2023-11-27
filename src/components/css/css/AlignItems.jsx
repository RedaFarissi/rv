import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function AlignItems(props){
    // document.getElementById("items").click()
    // function Align_items(value) {
    //   document.getElementById("Result").style.alignItems = value;
    //   document.getElementById("align-items-result").innerHTML = value +";";
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Align-Items </h1>
    <article>
        <div className="style_divv">
            تستخدم الخاصية <b>align-items</b> مع الخصية <b>display</b> والقيمة <b>flex</b> وتحدد مكان وضع العناصر بنسبة للإرتفاع .<br/>
            تستقبل الخاصية <b>align-items</b>  القيم التالية :<br/>
            <ul dir="ltr">
                <li><b>align-items: stretch</b></li>
                <li><b>align-items: start</b></li>
                <li><b>align-items: center</b></li>
                <li><b>align-items: end</b></li>
            </ul>
        </div>
    </article>
    <article>
        <h2 className="title-h2">1. القيمة  stretch</h2>
        <div className="style_divv">
            قيمة إفتراضية . يتم شد العناصر لتناسب الحاوية    
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال  :  </div>
            <img src={images.css49_align_items} className="img"/>
            <img src={images.css49_align_items_2} className="img"/>
        </div>
    </article>

    <article>
        <h2 className="title-h2">2. القيمة  start </h2>
        <div className="style_divv">
            يتم وضع العناصر في بداية الحاوية على المستوى العمودي  .
        </div>
            <div className="mital">متال  :  </div>
            <img src={images.css49_align_items2} className="img"/>
            <img src={images.css49_align_items_2} className="img"/>
        <h2 className="title-h2">3. القيمة  center </h2>
        <div className="style_divv">
            يتم وضع العناصر في وسط الحاوية على المستوى العمودي .
        </div>
        <div className="mital">متال  :  </div>
        <img src={images.css49_align_items3} className="img"/>
        <img src={images.css49_align_items3_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">4. القيمة  end </h2>
        <div className="style_divv">
            يتم وضع العناصر في نهاية الحاوية على مستوى الأفقي .
        </div>
            <div className="mital">متال  :  </div>
            <img src={images.css49_align_items4} className="img"/>
            <img src={images.css49_align_items4_2} className="img"/>
        <h2 className="title-h2">5. متال تفاعلي توضيحي  </h2>
        <ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>justify-content</b>  و لفهم بشكل أفضل .</li></ul>
        
        <div id="align_items_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
            <div id="input_radio_box" className="border border-secondary rounded bg-light p-3">
                <div className="h2"> align-items: </div>
                <div className="pt-3 ps-3">
                    <input type="radio" name="Ju-C" onclick="Align_items(this.value)" value="start" id="items" /> start <br/>
                    <input type="radio" name="Ju-C" onclick="Align_items(this.value)" value="end"/> end <br/>
                    <input type="radio" name="Ju-C" onclick="Align_items(this.value)" value="center"/> center <br/>
                </div>
                <div id="Code" className="mt-4 w-100">
                  <div className="h3"> Code: </div>
                  <div className="border py-2 ps-2 w-100" >
                      <span style={{fontWeight: "500"}}>align-items : </span> <span id="align-items-result" style={{fontWeight: "500"}}></span>
                  </div>
                </div>
            </div>

            <div className="border bg-light border-secondary" id="align-items"> 
                <div className="h2"> Result: </div>
                <div id="Result">
                    <div className="bg-danger border border-3 border-primary p-2">div1 </div>
            	    <div className="bg-danger border border-3 border-primary p-2">div2 </div>
            	    <div className="bg-danger border border-3 border-primary p-2">div3 </div>
                </div> 
            </div>
        </div>
    </article>
</section>
    )
}