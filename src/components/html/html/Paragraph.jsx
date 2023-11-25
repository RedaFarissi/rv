import { CodeHighlighter ,  Result} from "../../path";

export default function Paragraph(props){
    const code = `<p> paragraph </p>`
    const codeExemple = `<p>This is the paragraph.</p>
  <p>This is another paragraph.</p>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Paragraph (p) </h1>
    <article>
        <p className="style_divv mt-5">
            <ul>
                <li>يحدد عنصر <kbd>&lt;p&gt;</kbd> فقرة.</li>
                <li>تبدأ الفقرة دائمًا بسطر جديد ، وتضيف المستعرضات تلقائيًا بعض المسافات البيضاء (هامش) قبل الفقرة وبعدها .</li>
                <li> عند نهاية الفقرة يتم العودة إلى سطر تلقائيا . </li>
                <li>يكتب الوسم <kbd>&lt;p&gt;</kbd> على شكل التالي :</li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="jsx"  addclass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" title="Paragraph" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Paragraph' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
               <p>This is the paragraph.</p>
               <p>This is another paragraph.</p>
            </Result>
        </div>
    </article>
</section>)
}