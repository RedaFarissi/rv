import { CodeHighlighter ,  Result} from "../../path";
import images from  "../imagesCss";

export default function Height(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Height </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد خاصية <b>height</b> ارتفاع العنصر.<br/>
            لا يتضمن ارتفاع العنصر المساحة المتروكة أو الحدود أو الهوامش .<br/>
            إذا كان الارتفاع: تلقائي ؛ سيقوم العنصر تلقائيًا بضبط ارتفاعه للسماح بعرض محتواه بشكل صحيح.<br/>
            إذا تم تعيين الارتفاع على قيمة عددية (مثل وحدات <b>px</b> ، <b>vh</b> , <b>em</b> ، <b>%</b>) ، إذا لم يكن المحتوى مناسبًا للارتفاع المحدد ، فسيتم تجاوزه. يتم تحديد كيفية تعامل الحاوية مع المحتوى الفائض بواسطة خاصية <b>overflow</b>.<br/>
            ملاحظة: تتجاوز خصائص <b>min-height</b> و <b>max-height</b> خاصية الارتفاع .<br/>
        </div>
        <div className="mital">متال : </div>
        <img src={images.css11_height} alt="height" className="img"/>
        <img src={images.css11_height_2} alt="height" className="img"/>
        <div className="mital">متال 2 :  </div>
        <img src={images.css11_height2} alt="height" className="img"/>
        <img src={images.css11_height2_2} alt="height" className="img"/>
    </article>
</section>
   )
}
