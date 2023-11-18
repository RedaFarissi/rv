import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Quotation(){
    const code = `<q cite="url"> content </q> `
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">  HTML Quotation (q) </h1>
    <article>
        <p className="style_divv mt-5">
            يشير عنصر <kbd>&lt;q&gt;</kbd> في لغة HTML إلى أن النص المتضمن عبارة عن اقتباس قصير مضمّن. تنفذ معظم المتصفحات الحديثة ذلك من خلال إحاطة النص بعلامات اقتباس. هذا العنصر مخصص للاقتباسات القصيرة التي لا تتطلب فواصل فقرات ؛ لعروض الأسعار الطويلة ، استخدم الوسم  <kbd>&lt;blockquote&gt;</kbd>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <h4 className="green"> الكود </h4>
            <img src={images.html18_q} alt="q code"  className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html18_q_2} alt="q result" className="img"/>
        </div>
    </article>
</section>
)
}