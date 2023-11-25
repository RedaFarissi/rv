import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function FontVariant(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Font-Variant </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد الخاصية <b>font-variant</b> ما إذا كان يجب عرض النص بخط أحرف صغيرة أم لا. <br/>
            في <b>small-caps</b> ، يتم تحويل جميع الأحرف الصغيرة إلى أحرف كبيرة. ومع ذلك ، تظهر الأحرف الكبيرة المحولة بحجم خط أصغر من الأحرف الكبيرة الأصلية في النص.
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src={images.css9_font_variant} className="img"/>
        <img src={images.css9_font_variant_2} className="img"/>
        <img src={images.css9_font_variant_3} className="img"/>
        </div>
        <ul><li> توجد قيم أخرى للعنصر  <b>font-variant</b> متل <b>unicase</b> و <b>all-petite-caps</b> . </li></ul>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src={images.css9_font_variant2} className="img"/>
        <img src={images.css9_font_variant2_2} className="img"/>
        </div>
        <ul><li>توجد خاصية جميلة في لغة CSS وهي  font-family يمكنك من خلالها إختيار عدة أشكال لشكل عند النقر ستدهب إلى <a href="https://fonts.google.com/" target="_blanck">fonts google</a> بحيت يمكنك من إختيار أي خط تريده تم كل ما عليك فعله نسخ الروابط ووضعهم داخل الموقع الخاص بك . </li></ul>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src={images.css9_font_family} className="img"/>
        </div>
    </article>
</section>
)
}    