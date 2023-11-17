import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Italic(){
    const code = `<i> content  </i>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Italic (i)</h1>
    <article className="mt-4">
        <p className="style_divv">
            الوسم  <kbd>&lt;i&gt;</kbd>  في <b>HTML</b> يستخدم لعرض المحتوى بأسلوب مائل. يستخدم هذا الوسم عمومًا لعرض المصطلح التقني والعبارة والكلمة المهمة بلغة مختلفة .<br/>
            الوسم <kbd>&lt;i&gt;</kbd>  هو وسم زوجي يحتوي على علامة الفتح والمحتوى وعلامة الإغلاق .
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html6_i} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                italique <br/> <i>italique</i> <hr/> <i>italique</i>
            </div>
        </div>
    </article>
</section>
)
}