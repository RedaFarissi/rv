import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function TextDecoration(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Decoration </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد خاصية <b>text-decoration</b> الزخرفة المضافة إلى النص ، وهي خاصية اختصار لـ:
            <ul dir="ltr">
                <li><b>text-decoration-line (required)</b></li>
                <li><b>text-decoration-color</b></li>
                <li><b>text-decoration-style</b></li>
            </ul>
        </div>
    </article>
    <article>
        <h2 className="title-h2">1. الخاصية  text-decoration-line</h2>
        <ul><li> تستعمل الخاصية <b>text-decoration-line</b> من أجل إنشاء خط جميل فوق أو وسط أو تحت العناصر أنضر المتال أسفله . </li></ul>
        <div className="mital"> متال :</div>
        <img src={images.css12_text_decoration} className="img"/>
        <img src={images.css12_text_decoration_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية  text-decoration-color</h2>
        <ul><li> تستعمل الخاصية <b>text-decoration-color</b> من أجل  إعطاء لون للخط الذي تم كتابته بواسطة الخاصية <b>text-decoration-line</b> . </li></ul>
        <div className="mital"> متال :</div>
        <img src={images.css12_text_decoration2} className="img"/>
        <img src={images.css12_text_decoration2_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">3. الخاصية  text-decoration-style</h2>
        <ul><li> 
            تستعمل الخاصية <b>text-decoration-style</b> من أجل إختيار نوع الخط و توجد عدة أنواع وهي كتالي  :
            <ul>
                <li><b>double</b></li>
                <li><b>dotted</b></li>
                <li><b>havy  </b></li>
                <li><b>solid </b></li>
                <li><b>dashed</b></li>
            </ul>
        </li></ul>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <img src={images.css12_text_decoration3} className="img"/>
            <img src={images.css12_text_decoration3_2} className="img"/>
        </div>
        <ul><li>يمكنك كتابة العنصر <b>text-decoration</b> دفعتا واحدة بستعمال الطريقة المعروضة في المتال أسفله . </li></ul>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <img src={images.css12_text_decoration4} className="img"/>
            <img src={images.css12_text_decoration4_2} className="img"/>
        </div>
    </article>
</section>
)
}