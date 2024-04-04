import { CodeHighlighter ,  Result} from "../../path";

export default function Superscript(props){
    const code = `<sup> The text to be uploaded </sup>`
    const codeExemple = `<h2>2<sup>3</sup> = 8</h2>
<h2>1<sup>er</sup></h2>`
    return(
<>
    <h1 className="heading-style"> HTML Superscript (sup) </h1>
    <article className="mt-5">
        <p className="style_divv mt-5">
            تحدد العلامة <kbd>&lt;sup&gt;</kbd> النص المرتفع. يظهر النص المرتفع بنصف حرف فوق السطر العادي ، ويتم تقديمه أحيانًا بخط أصغر. يمكن استخدام النص المرتفع للحواشي السفلية ، مثل
            1<sup>er</sup>  
        </p>
        <CodeHighlighter  code={code} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Superscript" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Superscript' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>2<sup>3</sup> = 8</h2>
            <h2>1<sup>er</sup></h2>
        </Result>
        </div>
    </article>
</>
)
}