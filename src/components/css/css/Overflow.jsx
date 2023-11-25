import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Overflow(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Overflow </h1>
    <article>
        <div class="style_divv mt-5">    
            تحدد خاصية overflow ما يجب أن يحدث إذا تجاوز المحتوى مربع عنصر .<br/>
            تحدد هذه الخاصية ما إذا كان سيتم قص المحتوى أو إضافة أشرطة التمرير عندما يكون محتوى العنصر كبيرًا جدًا بحيث لا يتناسب مع منطقة معينة.<br/>
            ملاحظة: تعمل خاصية overflow فقط مع عناصر الكتلة ذات الارتفاع المحدد وتستقبل القيم التالية :
            <ul dir="ltr" style={{marginTop: "9px"}}>
                <li>scroll :  من خلال هذه القيمة يمكن إضافة شريط تمرير من ناحية width و height .  </li>
                <li>hidden :  من خلال هذه القيمة  لتختفي جميع العناصر خارج ال width و height .</li>
                <li>auto   :  من خلال هذه القيمة يمكن إضافة شريط تمرير من ناحية height  </li>
                <li>visible : عرض المحتوى كاملا بدون شريط تمرير . </li>
            </ul>
        </div>
        <div class="sum_exemple_style">
            <div class="mital">متال :  </div>
            <img src={images.css20_overflow} class="img"/>
            <img src={images.css20_overflow_2} class="img"/>
        </div>
    </article>
</section>
    )
}