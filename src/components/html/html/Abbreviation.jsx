import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path";

export default function Abbreviation(props){
    const code = `<abbr> content </abbr>`
    const codeExemple = `<abbr title="kilogram"><b>KG</b></abbr>
<br/>
<abbr title="gram"><b>G</b></abbr>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color"> HTML Abbreviation (abbr)</h1>
    <article className="mt-5">
        <div className="style_divv">
            نستخدم الوسم <kbd>&lt;abbr&gt;</kbd> على هذا النحو <kbd>&lt;abbr title="hidden"&gt; visible &lt;/abbr&gt;</kbd> لوضع إسم مختصر <small><small>(Abbreviation)</small></small> بدل الإسم الكامل و عند تمرير الفأرة فوقه يقوم المتصفح بإظهار الإسم الكامل كلميح فوقها.
            <ul>
                <li style={{marginBottom:"12px"}}>مكان الكلمة <b>visible</b> نضع النص الذي نريده أن يظهر أمام المستخدم.</li>
                <li style={{marginBottom:"12px"}}>مكان الكلمة <b>hidden</b> نضع النص الذي نريده أن يظهر عند تمرير الماوس فوقه النص الظاهر في الصفحة.</li>
                <li style={{marginBottom:"12px"}}>يملك سمة واحدة هي ال <b>Attribute title</b> التي نضيفها له لكتابة النص المخفي الذي سيتم إظهاره عند تمرير الماوس فوق الوسم.</li>
            </ul>
        </div>
        <CodeHighlighter  code={code} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple} file_name="index.html" language="html" title="Abbreviation" addClass="mt-3 mb-3" copie={true}/>
            <ul><li>عند تمرير الماوس فوق العنصر سيضهر title</li></ul>
            <Result title='Abbreviation' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <abbr title="kilogram"><b>KG</b></abbr>
                <br/>
                <abbr title="gram"><b>G</b></abbr>
            </Result>
        </div>
    </article>
</section>
)
}