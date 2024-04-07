import { CodeHighlighter ,  Result} from "../../path";
import "./HtmlLink.css"

export default function HtmlLink(props){
    const codeExempleCss = `h1 , p {
    text-align:center;
    padding: 9px;
}
h1{
    color: red;  
} 
p{
    font-size: 110%;
}`
    const codeExempleHtml = [`
    <link rel="stylesheet" href="./index.css">`,
        `     <h1>My Heading</h1>
    <p>My Paragraph.</p>`]
    return(
<>
    <h1 className="heading-style">HTML Link </h1>
    <article className="mt-5">
        <p className="style_divv mt-5">
            يحدد الوسم <kbd>&lt;link&gt;</kbd> العلاقة بين المستند الحالي ومورد خارجي  .<br/>
            غالبا ما يستخدم الوسم <kbd>&lt;link&gt;</kbd> للارتباط بأوراق الأنماط الخارجية أو لإضافة رمز <b>favicon</b> إلى موقعك على الويب.<br/>
            يتم وضع الوسم <kbd>&lt;link&gt;</kbd>  داخل الوسم <kbd>&lt;head&gt;</kbd>  و هو وسم فارغ، يحتوي على السمات فقط.
        </p>
        <div className="mital">مثال : </div>
        <ul><li>يجب أن تكون الصورة من نوع <b>icon</b> داخل نفس المجلد الذي يحتوي على ملف <b>HTML</b></li></ul>
        <CodeHighlighter file_name="index.html" code=""  language="html" is_html={true} title="Html Link" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Html Link' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="html-link-ex1"></div>
        </Result>
        <div className="mital">مثال 2 : </div>
        <ul><li> في هاذ المتال قمنا بإنشاء ملف <b>CSS</b> داخل نفس مجلد الدي يحتوي على ملف <b>HTML</b> </li></ul>
        <CodeHighlighter file_name="index.css" code={codeExempleCss} language="css" title="Division" addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExempleHtml[1]} head={codeExempleHtml[0]} language="html" is_html={true} title="Html Link" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Html Link' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 className="html-link-h1">My Heading</h1>
            <p className="html-link-p">My Paragraph.</p>
        </Result>
    </article>
</>
)
}