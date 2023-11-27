import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Order(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Order </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد خاصية الأمر ترتيب العنصر المرن بالنسبة لبقية العناصر المرنة داخل نفس الحاوية.<br/>
            ملاحظة: إذا لم يكن العنصر عنصرًا مرنًا ، فلن يكون لخاصية الأمر أي تأثير.
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال  :  </div>
            <img src={images.css41_order} className="img"/>
            <img src={images.css41_order_2} className="img"/>
        </div>
    </article>
</section>
    )
}