import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function BorderCollapse(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Border-Collapse </h1>
    <article>
        <div class="style_divv mt-5">
            تستعمل الخاصية <b>border-collapse</b> مع الجداول و تحدد الخاصية تصغير الحدود ما إذا كان يجب طي حدود الجدول إلى حد واحد أو فصلها كما هو الحال في <b>HTML</b> القياسي.<br/>
            تستقبل الخاصية <b>border-collapse</b> القيم التالية :
            <ul dir="ltr">
                <li> <b>border-collapse : separate</b></li>
                <li> <b>border-collapse : collapse</b></li>
            </ul>
        </div>
        <div class="mital"> متال : </div>
        <img src={images.css35_border_collapse} class="img"/>
        <img src={images.css35_border_collapse_2} class="img"/>
        <div class="mital"> متال 2 : </div>
        <img src={images.css35_border_collapse2} class="img"/>
        <img src={images.css35_border_collapse2_2} class="img"/>
    </article>
</section>
)
}