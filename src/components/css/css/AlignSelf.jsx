import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function AlignSelf(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Align-Self </h1>
    <article>
        <div className="style_divv">
            تحدد الخاصية <b>align-self</b> المحاذاة للعنصر المحدد داخل الحاوية المرنة.  <br/>
            <b>ملاحظة</b> : تتجاوز الخاصية <b>align-self</b> خاصية <b>align-items</b> للحاوية المرنة.     
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال :  </div>
            <img src={images.css50_align_self} className="img"/>
            <img src={images.css50_align_self_2} className="img"/>
        </div>
    </article>
</section>
    )
}