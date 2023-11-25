import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Width(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Width </h1>
    <article>
    <div className="style_divv mt-5">
        تحدد خاصية <b>width</b> عرض العنصر.<br/>
        لا يشمل عرض العنصر المساحة المتروكة أو الحدود أو الهوامش .
        تتجاوز الخاصيتان <b>min-width</b> و <b>max-width</b> خاصية العرض .<br/>
        يمكن تحديد عرض العناصر بواسطة عدة مقاييس ندكر منها <bdi>(..., cm , mm , em , px , %  )</bdi> , وتعتبر أفضل طريقة عبر النسبة المئوية % بحيت يكون العنصر متجاوب مع عرض الصفحة
    </div>
    <div className="mital">متال :  </div>
    <img src={images.css10_width} className="img"/>
    <img src={images.css10_width_2} className="img"/>

    <div className="mital">متال 2 :  </div>
    <img src={images.css10_width2} className="img"/>
    <img src={images.css10_width2_2} className="img"/>
    </article>

</section>
)
}