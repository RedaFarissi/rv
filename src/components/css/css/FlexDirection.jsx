import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function FlexDirection(props){
    // document.getElementById("FlD").click()
    // function flexD(value){
    //     document.getElementById("Fl").style.flexDirection = value
    //     document.getElementById("flex-direction-result").innerHTML = value +";"
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Flex-Direction </h1>
    <article>


        <div className="style_divv mt-5">
            تحدد الخاصية <b>flex-direction</b> اتجاه العناصر المرنة. <br/>
            <b>ملاحظة : </b> إذا لم يكن العنصر يحتوي على  <b>display:flex</b>  ، فلن يكون للخاصية   <b>flex-direction</b> أي تأثير .
        </div>
        <div className="mital"> متال :</div>
        <img src={images.css44_flex_direction} className="img"/>
        <ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>flex-direction</b>  و لفهم بشكل أفضل .</li></ul>
        {/* <div id="flex_direction_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
            <div id="input_radio_box" className="border border-secondary rounded bg-light p-3">
                <div className="h2"> flex-direction : </div>
                <input type="radio" name="fl-D" onclick="flexD(this.value)"  className="mar" value="column" id="FlD" /> column <br/>
                <input type="radio" name="fl-D" onclick="flexD(this.value)"  className="mar" value="row"/> row <br/>
                <input type="radio" name="fl-D" onclick="flexD(this.value)"  className="mar" value="row-reverse"/> row-reverse <br/>
                <input type="radio" name="fl-D" onclick="flexD(this.value)"  className="mar" value="column-reverse"/> column-reverse <br/>
                <div id="Code" className="mt-4 w-100">
                  <div className="h3"> Code: </div>
                  <div className="border py-2 ps-2 w-100" >
                      <span style={{fontWeight:"500"}}> flex-direction :</span> <span id="flex-direction-result" style={{fontWeight:"500"}}></span>
                      </div>
              </div>
              </div>
            <div className="border bg-light border-secondary" id="flexDirection">
                <div className="h2"> Result : </div>
                <div className="Fl" id="Fl">
        	      <div style="order:3;"> 1 </div> 
        	      <div style="order:1;"> 2 </div>
        	      <div style="order:2;"> 3 </div>  
        	    </div>
            </div>
        </div> */}
      </article>
</section>
    )
}