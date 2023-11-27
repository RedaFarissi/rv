import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
//import "./Opacity.css"
export default function Opacity(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Opacity </h1>
    <article>
<div className="style_divv mt-5">
    تحدد خاصية العتامة مستوى التعتيم للعنصر.<br/>
    يصف مستوى العتامة مستوى الشفافية ، حيث 1 غير شفاف على الإطلاق ، و 0.5 يمكن رؤية 50٪ من خلاله ، و 0 شفاف تمامًا .
</div>
<div className="sum_exemple_style">
<div className="mital"> متال :  </div>
<div   style={{textAlign:"center"}} dir="ltr">
        <img src={images.img_forest} className="w-100 css-opacity-10"/>
        <h4 className="css-opacity-test">opacity : 1 </h4>
        <img src={images.img_forest} className="w-100 css-opacity-6"/>
        <h4 className="css-opacity-test">opacity : 0.6 </h4>
        <img src={images.img_forest} className="w-100 css-opacity-3"/>
        <h4 className="css-opacity-test">opacity : 0.3 </h4>
</div>
</div>
<br style={{clear:"both"}}/>
<div className="sum_exemple_style">
<div className="mital"> متال 2 :  </div>
<img src={images.css13_opacity} className="img"/>
<img src={images.css13_opacity_2} className="img"/>
</div>
</article>
</section>
)
}