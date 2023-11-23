import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Preformatted(){
    const code = `<pre> content  </pre>`
    
    return(
    <section className="section-conetent">
        <h1 className="heading-style heading-style-html-color"> HTML Preformatted (pre)</h1>
        <article>
            <p className="style_divv mt-5">
                تحدد العلامة <kbd>&lt;pre&gt;</kbd> النص المنسق مسبقًا.  <br/>
                يتم عرض النص الموجود في عنصر <kbd> &lt;pre&gt;</kbd> بخط ذو عرض ثابت ، ويحافظ النص على كل من المسافات وفواصل الأسطر. سيتم عرض النص تمامًا كما هو مكتوب في شفرة مصدر <b>HTML</b><br/>
                يكتب الوسم <b>pre</b> على شكل التالي :     
            </p>
            <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
            <div className="mital"> متال :</div>
            <h4 className="green"> الكود </h4>
            <img src={images.html19_pre} alt="pre code" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html19_pre_2} alt="pre result" className="img"/>
        </article>
    </section>
    )
}