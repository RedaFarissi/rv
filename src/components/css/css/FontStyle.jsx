import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function FontStyle(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Font-Style </h1>
    <article>
        <div className="style_divv mt-5">
            الخاصية <b>font-style</b> في <b>CSS</b> تُحدِّد إن كان يجب أن يكون شكل الخط عاديًا (normal) أو مائلًا (italic) أو منحرفًا (oblique). وسيختار المتصفح النسخة الأنسب من نوع الخط <b>font-family</b>.<br/>
            يكون للخط المائل بعض سمات الكتابة اليدوية، ويستهلك عادةً مسافة أفقية أقل من الخط العادي، بينما الخط المنحرف (oblique) يُمثِّل نسخةً منحرفة بزاوية معيّنة من الخط العادي؛ وعند عدم توافر نسخة مائلة مخصصة من الخط، فسيكون شكل الخط المائل والمنحرف سواءً.
            <ul>
                <li><b>normal</b> : تحديد النسخة العادية من الخط </li>
                <li><b>italic</b> : اختيار نسخة مُصنَّفة على أنها مائلة (italic)، وإن لم تتوافر نسخة مائلة، فستستخدم النسخة المنحرفة من الخط <b>oblique</b>، وإن لم تتوفر كلا النسختين، فسيحاكى الخط المائل من المتصفح.</li>
                <li><b>oblique</b> : اختيار نسخة مُصنَّفة على أنها منحرفة (oblique)، وإن لم تتوافر نسخة منحرفة، فستستخدم النسخة المائلة من الخط <b>italic</b> ، وإن لم تتوفر كلا النسختين، فسيحاكى الخط المائل من المتصفح</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال :  </div>
            <img src={images.css7_font_style} className="img"/>
            <img src={images.css7_font_style_2} className="img"/>
        </div>
    </article>    
</section>
    )
}