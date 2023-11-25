import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Clear(props){
    // document.getElementById("claer_none").click()
    // function cleaR(value){
    //     document.getElementById("div_p").style.clear = value
    //     document.getElementById("clear_result").innerHTML = value + ";"
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Clear </h1>
    <article>
        <div className="style_divv mt-5">
            تشير الخاصية <b>clear</b> إلى ما إذا كان يمكن وضع عنصر بجوار العناصر تاتي تحتوي على الخاصية <b>float</b>  التي تسبقه أو ما إذا كان يجب نقله لأسفل ليكون أسفل تلك العناصر. تنطبق الخاصية <b>clear</b> على كل من العناصر العائمة وغير العائمة .<br/>
            بصفة عامة من خلال الخاصية <b>clear</b> يمكنك إيقاف تأتير الخاصية <b>float</b> لأن الخاصية <b>float</b> تقوم بتعويم ل العناصر التي تتبعها . 
            تستقبل الخاصية <b>clear</b> القيم التالية :
            <ul>
                <li> <b>none</b> : تستعمل لإزالة تأتر الخاصية <b>clear</b> </li>
                <li> <b>left </b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>left </b>. </li>
                <li> <b>right</b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>right </b>.</li>
                <li> <b>both</b> :  تستعمل لإزالة تأتر الخاصية <b>float</b> التي تحمل القيمة <b>left</b> و القيمة <b>right</b> . </li>
            </ul>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال  :  </div>
        <ul>
            <li> في هذا المتال قمنا بإضافة الخاصية <b>float</b> لأول وسمين <b>div</b> فقط . </li>
            <li> لاحض أن الوسم 3 و الوسم 4 تم وضعهم في نفس المكان بحيت يضهر الشكل بطريقة سيئة .</li>
        </ul>
        <img src={images.css30_clear} className="img"/>
        <img src={images.css30_clear_2} className="img"/>
        </div>
        <ul>
           <li>لحل هدا المشكل الذي ينتج عن الخاصية <b>float</b> نستعمل الخاصية <b>clear </b></li>
        </ul>
        <div className="sum_exemple_style">
            <img src={images.css30_clear2} className="img"/>
            <img src={images.css30_clear2_2} className="img"/>
        </div>
    </article>
{/* <h3> متال توضيحي تفاعلي لفهم قيم الخاصية clear</h3>
<div id="clear_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" className="border border-secondary rounded bg-light p-3">
        <div className="h2"> clear: </div>
        <div className="ps-3">
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="none"  id="claer_none"/> none </input><br>
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="left" /> left <br>
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="right"/> right <br>
            <input type="radio" name="cleaR" onclick="cleaR(this.value)" value="both" /> both <br>
        </div>
        <div id="Code" className="mt-4 w-100">
          <div className="h3"> Code: </div>
          <div className="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">clear : </span> <span id="clear_result" style="font-weight: 500"></span>
          </div>
      </div>
    </div>
    
    <div className="border bg-light border-secondary" id="clear"> 
        <h2 className="w-50"> Result: </h2>
        <div id="DIV1" className="p-1"> div  float left </div>
        <div id="DIV2" className="p-1"> div  float right </div>
        <div id="div_p" style={{marginTop: "9px"}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ut incidunt corporis vero necessitatibus ducimus itaque aut architecto?
            Maiores magni eius omnis facilis ad autem tempore beatae eaque suscipit
            temporibus iure doloribus voluptatibus tenetur alias veritatis ipsa sequi
            sed quos rem, accusamus possimus eum! Vitae eaque alias mollitia sed sapiente 
            porro, quasi doloribus, quae ipsa eum deserunt ut?
        </div>
    </div>
</div> */}
</section>
)
}