import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function TextShadow(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Shadow </h1>
    <article>
        <div className="style_divv mt-5">
            تضيف خاصية <b>text-shadow</b> الظل إلى النص.
            تقبل هذه الخاصية قائمة الظلال مفصولة بفواصل ليتم تطبيقها على النص.
        </div>
        <div className="mital">متال :  </div>
        <img src={images.css21_text_shadow} className="img"/>
        <img src={images.css21_text_shadow_2} className="img"/>
        <div className="mital">متال 2 :  </div>
        <img src={images.css21_text_shadow2} className="img"/>
        <img src={images.css21_text_shadow2_2} className="img"/>
    </article>
</section>
    )
}