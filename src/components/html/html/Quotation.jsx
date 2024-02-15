import { CodeHighlighter ,  Result} from "../../path";

export default function Quotation(props){
    const code = `<q cite="url"> content </q> `
    const codeExemple = `    <p>The <q>quick brown fox</q> jumps over the lazy dog.</p>`
    return(
<section className="section-conetent">
    <h1 className="heading-style">  HTML Quotation (q) </h1>
    <article className="mt-5">
        <p className="style_divv mt-5">
            يشير عنصر <kbd>&lt;q&gt;</kbd> في لغة HTML إلى أن النص المتضمن عبارة عن اقتباس قصير مضمّن. تنفذ معظم المتصفحات الحديثة ذلك من خلال إحاطة النص بعلامات اقتباس. هذا العنصر مخصص للاقتباسات القصيرة التي لا تتطلب فواصل فقرات ؛ لعروض الأسعار الطويلة ، استخدم الوسم  <kbd>&lt;blockquote&gt;</kbd>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Quotation" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Quotation' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <p>The <q>quick brown fox</q> jumps over the lazy dog.</p>
            </Result>
        </div>
    </article>
</section>
)
}