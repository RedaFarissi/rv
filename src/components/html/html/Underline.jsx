import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Underline(){
    const code = `<u> underline text  </u>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html"> HTML Underline (u)</h1>
    <p className="style_divv mt-5">
        تمثل العلامة <kbd>&lt;u&gt;</kbd> بعض النصوص غير المفصلية والمنمقة بشكل مختلف عن النص العادي ، مثل الكلمات التي بها أخطاء إملائية أو أسماء العلم في النص الصيني. عادةً ما يتم عرض المحتوى الموجود بالداخل بتسطير. يمكنك تغيير هذا باستخدام <b>CSS</b>
    </p>
    <CodeHighlighter  code={code} language="html"  addClass="mt-3 mb-3" copie={true}/>
    <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <h4 className="green"> الكود </h4>
        <img src={images.html5_u} alt="html u code" className="img"/>
        <h4 className="green"> بعد تشغيل الكود </h4>
        <div className="style-result">
            <h2><u>HTML</u></h2>
            <u>souligner</u>
            <hr/>
            <h2><ins>HTML</ins></h2>
            <u>souligner</u>
        </div>
    </div>
</section>
)
}
