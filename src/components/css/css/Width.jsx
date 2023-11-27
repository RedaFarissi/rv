import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Width.css"


export default function Width(props){
    const codeExemple = { 
    css:`h2 {
    padding: 9px;
    margin: 9px;
    border: 2px solid chocolate;
}
#h {
    background-color: red;
    color: white;
}
#h2 {
    background-color: black;
    color: white;
    width: 50%;
}
#html-logo{
    width: 120px;
}
#css-logo{
    width: 30%;
}
`,
    head:`      
    <link rel="stylesheet" href="./index.css">`,
    code:`  <h2>This is a heading</h2>
    <h2 id="h">This is another heading</h2>
    <h2 id="h2">This is a third heading</h2>
    <img src="./html_logo.png" id='html-logo' alt="html logo" />
    <img src="./css_logo.png" id='css-logo' alt="css logo" />`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Width </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد خاصية <b>width</b> عرض العنصر.<br/>
            لا يشمل عرض العنصر المساحة المتروكة أو الحدود أو الهوامش .
            تتجاوز الخاصيتان <b>min-width</b> و <b>max-width</b> خاصية العرض .<br/>
            يمكن تحديد عرض العناصر بواسطة عدة مقاييس ندكر منها <bdi>(..., cm , mm , em , px , %  )</bdi> , وتعتبر أفضل طريقة عبر النسبة المئوية % بحيت يكون العنصر متجاوب مع عرض الصفحة
        </div>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" title="CSS Width" addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" title="Reda test" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Width' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 className="css-width-ex1-parent">This is a heading</h2>
            <h2 className="css-width-ex1-parent css-width-ex1-children1">This is another heading</h2>
            <h2 className="css-width-ex1-parent css-width-ex1-children2">This is a third heading</h2>
            <img src={images.html_logo} id='css-width-ex1-html-logo' alt="html logo" />
            <img src={images.css_logo} id='css-width-ex1-css-logo' alt="css logo" />
        </Result>
    </article>
</section>
)
}