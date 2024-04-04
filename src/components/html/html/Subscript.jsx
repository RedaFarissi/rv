import { CodeHighlighter ,  Result} from "../../path";

export default function Subscript(props){
    const code = `<sub> Text to be displayed at a lower level </sub>`
    const codeExemple = `   <p>H<sub>2</sub>O</p>
    <p>H<sub>2</sub>O<sup>+</sup></p>`
    return(
    <>
        <h1 className="heading-style"> HTML Subscript (sub) </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                يُمثِّل العنصر <kbd>&lt;sub&gt;</kbd>  جزءًا من النص الذي يجب أن يُعرَض في مستوى أدنى (وغالبًا ما يكون أصغر) من المستوى الرئيسي للنص.
                مثال عن استخدام العنصر <kbd>&lt;sub&gt;</kbd> لكتابة الصيغة الكيميائية للماء H<sub>2</sub>O     
            </p>
            <CodeHighlighter  code={code} language="html"  addClass="mt-3 mb-3" copie={true}/>
            <div className="sum_exemple_style">
                <div className="mital">مثال : </div>
                <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Subscript" addClass="mt-3 mb-3" copie={true}/>
                <Result title='Subscript' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                    <p>H<sub>2</sub>O</p>
                    <p>H<sub>2</sub>O<sup>+</sup></p>
                </Result>
            </div>
        </article>
    </>
    )
}