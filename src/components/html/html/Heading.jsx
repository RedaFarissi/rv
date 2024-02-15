import { CodeHighlighter ,  Result} from "../../path";

export default function Heading(props){
    const code1 = `<h1> content </h1>`
    const code2 = `<h2> content </h2>`
    const code3 = `<h3> content </h3>`
    const code4 = `<h4> content </h4>`
    const code5 = `<h5> content </h5>`
    const code6 = `<h6> content </h6>`
    const codeExemple = `    <h1> Reda Eskouni </h1>
    <h2> Reda Eskouni </h2>
    <h3> Reda Eskouni </h3>
    <h4> Reda Eskouni </h4>
    <h5> Reda Eskouni </h5>
    <h6> Reda Eskouni </h6>`
    return(
<section className="section-conetent">
    <h1 className="heading-style">HTML Heading</h1>
    <p className="style_divv mt-5">
        العناوين في لغة <b>HTML</b> من أهم الوسوم التي تسخدم في <b>HTML</b> فالعناوين معرّفة بوسوم من :<br/>
        <kbd>&lt;h1&gt;</kbd> الى ... <kbd>&lt;h1&gt;</kbd> . <kbd>&lt;h6&gt;</kbd> هو أكبر مقاس للعنوان بينما نجد أن الوسم <kbd>&lt;h6&gt;</kbd> هو أصغر مقاس للعناوين.
    </p>
    <CodeHighlighter  code={code1} language="html"  addClass="mt-3 mb-3" copie={true}/>
    <CodeHighlighter  code={code2} language="html"  addClass="mt-3 mb-3" copie={true}/>
    <CodeHighlighter  code={code3} language="html"  addClass="mt-3 mb-3" copie={true}/>
    <CodeHighlighter  code={code4} language="html"  addClass="mt-3 mb-3" copie={true}/>
    <CodeHighlighter  code={code5} language="html"  addClass="mt-3 mb-3" copie={true}/>
    <CodeHighlighter  code={code6} language="html"  addClass="mt-3 mb-3" copie={true}/>
    <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <ul><li> <i>  لاحظ ان كل العناوين تقوم بالعودة إلى سطر تلقائيا </i></li></ul>
        <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true}  title="Heading" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Heading' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1> Reda Eskouni </h1>
            <h2> Reda Eskouni </h2>
            <h3> Reda Eskouni </h3>
            <h4> Reda Eskouni </h4>
            <h5> Reda Eskouni </h5>
            <h6> Reda Eskouni </h6>
        </Result>
    </div>

</section>
)
}