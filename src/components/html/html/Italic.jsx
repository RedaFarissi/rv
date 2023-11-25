import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path"

export default function Italic(props){
    const code = `<i> content  </i>`
    const codeExemple = `italique <br/> <i>italique</i> <hr/> <i>italique</i>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Italic (i)</h1>
    <article className="mt-5">
        <p className="style_divv">
            الوسم  <kbd>&lt;i&gt;</kbd>  في <b>HTML</b> يستخدم لعرض المحتوى بأسلوب مائل. يستخدم هذا الوسم عمومًا لعرض المصطلح التقني والعبارة والكلمة المهمة بلغة مختلفة .<br/>
            الوسم <kbd>&lt;i&gt;</kbd>  هو وسم زوجي يحتوي على علامة الفتح والمحتوى وعلامة الإغلاق .
        </p>
        <CodeHighlighter  code={code} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" title="Italic" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Italic' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                italique <br/> <i>italique</i> <hr/> <i>italique</i>
            </Result>
            <img src={images.html6_i}  alt="italic code" className="img"/>
        </div>
    </article>
</section>
)
}