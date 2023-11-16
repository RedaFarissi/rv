import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Deleted(){
    const code = `<del> content </del>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Deleted (del)</h1>
    <article className="mt-5">
        <p className="style_divv">
            يمثل عنصر  <kbd>&lt;del&gt;</kbd> في لغة <b>HTML</b> جزءًا من النص تم حذفه من المستند. غالبًا ما يتم عرض هذا العنصر مخططًا <small><small>(ولكن ليس بالضرورة)</small></small>.<br/>
            يمكن تلاعب  بشكل عبر <b>CSS</b> .<br/>
            يكتب الوسم <b>del</b> على شكل التالي : 
            <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <h4 className="green"> الكود </h4>
            <img src={images.html8_del} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <del>100DH</del> <strong>70 dh</strong>
            </div>
        </div>
    </article>
</section>
)
}