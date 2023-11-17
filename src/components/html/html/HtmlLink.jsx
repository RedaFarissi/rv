import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function HtmlLink(){
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Link </h1>
    <article>
        <p className="style_divv">
            يحدد الوسم <kbd>&lt;link&gt;</kbd> العلاقة بين المستند الحالي ومورد خارجي  .<br/>
            غالبا ما يستخدم الوسم <kbd>&lt;link&gt;</kbd> للارتباط بأوراق الأنماط الخارجية أو لإضافة رمز <b>favicon</b> إلى موقعك على الويب.<br/>
            يتم وضع الوسم <kbd>&lt;link&gt;</kbd>  داخل الوسم <kbd>&lt;head&gt;</kbd>  و هو وسم فارغ، يحتوي على السمات فقط.
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <ul><li>يجب أن تكون الصورة من نوع <b>icon</b> داخل نفس المجلد الذي يحتوي على ملف <b>HTML</b></li></ul>
            <h4 className="green"> الكود </h4>
            <img src={images.html41_link} alt='link code exemple' className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html41_link_2} alt='link result' className="img"/>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال 2 : </div>
            <ul><li> في هاذ المتال قمنا بإنشاء ملف <b>CSS</b> داخل نفس مجلد الدي يحتوي على ملف <b>HTML</b> </li></ul>
            <h4 className="green"> الكود </h4>
            <img src={images.html41_link2} alt='link code exemple' className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html41_link2_2} alt='link result' className="img"/>
        </div>
    </article>
</section>
)
}