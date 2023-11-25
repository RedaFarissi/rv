import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function TextTransform(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Transform </h1>
    <article>    
        <div className="style_divv mt-5">
            تتحكم خاصية <b><bdi>text-transform</bdi></b> في الكتابة بالأحرف الكبيرة للنص.
            وتقبل عدة قيم وهي كتالي :
            <ul>
                <li><b>none</b> : لا يوجد أحرف كبيرة. يتم عرض النص كما هو. قيمة فتراضية</li>
                <li><b>capitalize</b> : يحول الحرف الأول من كل كلمة إلى أحرف كبيرة</li>
                <li><b>uppercase</b> : يحول كل الأحرف إلى أحرف كبيرة</li>
                <li><b>lowercase</b> : يحول جميع الأحرف إلى أحرف صغيرة</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <img src={images.css60_text_transform} className="img"/>
            <div className="style-result">
                <p id="parag"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال 2 : </div>
            <img src={images.css60_text_transform2} className="img"/>
            <div className="style-result">
                <p id="paragra"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال 3 : </div>
            <img src={images.css60_text_transform3} className="img"/>
            <div className="style-result">
                <p id="paragraph"> Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. </p>
            </div>
        </div>
    </article>
</section>
)
}