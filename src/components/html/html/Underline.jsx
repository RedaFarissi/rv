import { CodeHighlighter ,  Result} from "../../path";

export default function Underline(props){
    const code = `<u> underline text  </u>`
    const codeExemple = `<u>This text is underlined.</u>
<h2><u>Heading</u></h2>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color"> HTML Underline (u)</h1>
    <p className="style_divv mt-5">
        تمثل العلامة <kbd>&lt;u&gt;</kbd> بعض النصوص غير المفصلية والمنمقة بشكل مختلف عن النص العادي ، مثل الكلمات التي بها أخطاء إملائية أو أسماء العلم في النص الصيني. عادةً ما يتم عرض المحتوى الموجود بالداخل بتسطير. يمكنك تغيير هذا باستخدام <b>CSS</b>
    </p>
    <CodeHighlighter  code={code} language="jsx"  addClass="mt-3 mb-3" copie={true}/>
    <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple} language="html" title="Underline" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Underline' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <u>This text is underlined.</u>
            <h2><u>Heading</u></h2>
        </Result>
    </div>
</section>
)
}
