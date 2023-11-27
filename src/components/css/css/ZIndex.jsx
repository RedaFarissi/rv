import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function ZIndex(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Z-Index </h1>
    <article>
        <div className="style_divv mt-5">
            عندما يتم وضع العناصر ، يمكن أن تتداخل مع عناصر أخرى.<br/>
            تحدد الخاصية <b>z-index</b> ترتيب مكدس العنصر (أي عنصر يجب وضعه أمام العناصر الأخرى أو خلفها).<br/>
            يمكن أن يكون للعنصر ترتيب مكدس موجب أو سلبي <br/>
        </div>
        <div className="mital"> متال : </div>
        <ul><li> من دون الخاصية <b>z-index</b> لن يضهر العنوان لأن الصوة ستكون فوقه </li></ul>
        <img src={images.css37_z_index} className="img"/>
        <img src={images.css37_z_index_2} className="img"/>
        <div className="mital"> متال : </div>
        <img src={images.css37_z_index2} className="img"/>
        <img src={images.css37_z_index2_2} className="img"/>
    </article>
</section>
    )
}