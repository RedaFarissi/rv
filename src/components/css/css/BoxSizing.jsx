import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function BoxSizing(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Box-Sizing </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد خاصية <b>Box-sizing</b> كيفية حساب العرض والارتفاع الكليين لعنصر ما . <br/>
            تقبل الخاصية  <b>Box-sizing</b> القيم :
            <ul>
                <li><b>content-box</b> : قيمة إفتراضية أو قيمة أولي من خلال هذه القيمة ال <b>border</b> و <b>padding</b> ليسو ضمن العرض المحدد .</li>
                <li><b>border-box</b> :   من خلال هذه القيمة ال <b>border</b> و <b>padding</b>  ضمن العرض المحدد .</li>
            </ul>
        </div>
        <div className="mital"> متال :</div>
        <img src={images.css32_box_sizing} className="img"/>
        <img src={images.css32_box_sizing_2} className="img"/>
        <div className="mital"> متال 2 :</div>
        <img src={images.css32_box_sizing2} className="img"/>
        <img src={images.css32_box_sizing2_2} className="img"/>
    </article> 
</section>
    )
}