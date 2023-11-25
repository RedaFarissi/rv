
import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Display.css"
export default function Display(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Display </h1>
    <article></article>
<div className="style_divv mt-5"> 
    تحدد خاصية <b>display</b> سلوك العرض (نوع العرض) للعنصر.<br/>
    في <b>HTML</b> ، يتم أخذ قيمة خاصية العرض الافتراضية من مواصفات <b>HTML</b> أو من ورقة الأنماط الافتراضية للمستعرض / المستخدم .
</div>
<div className="sum_exemple_style">
<div className="mital">متال :  </div>
<img src={images.css16_display} className="img"/>
<div className="style-result" >
    <h2>The display Property</h2>
    <h2>display: none:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p className="ex1">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
    <h2>display: inline:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <p className="ex2">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
    <h2>display: block:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      <p className="ex3">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
    <h2>display: inline-block:</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
      <p className="ex4">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
    </div>
</div>
</div>
</section> 
    )
}