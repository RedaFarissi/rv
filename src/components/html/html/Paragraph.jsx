import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Paragraph(){
    const code = `<p> paragraph </p>`

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Paragraph (p) </h1>
    <article>
        <p className="style_divv mt-5">
            <ul>
                <li>يحدد عنصر <kbd>&lt;p&gt;</kbd> فقرة.</li>
                <li>تبدأ الفقرة دائمًا بسطر جديد ، وتضيف المستعرضات تلقائيًا بعض المسافات البيضاء (هامش) قبل الفقرة وبعدها .</li>
                <li> عند نهاية الفقرة يتم العودة إلى سطر تلقائيا . </li>
                <li>يكتب الوسم <kbd>&lt;p&gt;</kbd> على شكل التالي :</li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="html"  addclass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html16_p} alt="Paragraph code" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className='style-result'>
                <p dir="rtl">هذه فقرة</p>
                <p dir="rtl">هذه فقرة أخرى </p>
            </div>
        </div>
    </article>
</section>)
}