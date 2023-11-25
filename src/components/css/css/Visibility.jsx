import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Visibility(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Visibility </h1>
    <article>
        <div class="style_divv mt-5">
            تحدد خاصية <b>visibility</b>  ما إذا كان العنصر مرئيًا أم لا.
            تشغل العناصر المخفية مساحة على الصفحة. استخدم خاصية <b>display</b> لإخفاء وإزالة عنصر من تخطيط المستند .
        </div>
        <div class="mital">متال :  </div>
        <img src={images.css15_visibility} class="img"/>
        <img src={images.css15_visibility_2} class="img"/>
    </article>
</section>
)
}