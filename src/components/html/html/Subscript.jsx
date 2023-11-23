import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path";

export default function Subscript(props){
    const code = `<sub> Text to be displayed at a lower level </sub>`
    const codeExemple = `<p>H<sub>2</sub>O</p>
<p>H<sub>2</sub>O<sup>+</sup></p>`
    return(
    <section className="section-conetent">
        <h1 className="heading-style heading-style-html-color"> HTML Subscript (sub) </h1>
        <article>
            <p className="style_divv mt-5">
                يُمثِّل العنصر <kbd>&lt;sub&gt;</kbd>  جزءًا من النص الذي يجب أن يُعرَض في مستوى أدنى (وغالبًا ما يكون أصغر) من المستوى الرئيسي للنص.
                مثال عن استخدام العنصر <kbd>&lt;sub&gt;</kbd> لكتابة الصيغة الكيميائية للماء H<sub>2</sub>O     
            </p>
            <CodeHighlighter  code={code} language="jsx"  addClass="mt-3 mb-3" copie={true}/>
            <div className="sum_exemple_style">
                <div className="mital">مثال : </div>
                <CodeHighlighter  code={codeExemple} language="html" title="Subscript" addClass="mt-3 mb-3" copie={true}/>
                <Result title='Subscript' logo={props.html_logo}  route="C:/Users/SURFACE BOOK/Desktop/html/index.html">
                    <p>H<sub>2</sub>O</p>
                    <p>H<sub>2</sub>O<sup>+</sup></p>
                </Result>
            </div>
        </article>
    </section>
    )
}