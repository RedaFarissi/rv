import { CodeHighlighter ,  Result} from "../../path";

export default function Preformatted(props){
    const code = `<pre> content  </pre>`
    const codeExemple = `   <pre>
      function greet() {
         console.log("Hello, World!");
      }
    </pre>`
    return(
    <section className="section-conetent">
        <h1 className="heading-style"> HTML Preformatted (pre)</h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                تحدد العلامة <kbd>&lt;pre&gt;</kbd> النص المنسق مسبقًا.  <br/>
                يتم عرض النص الموجود في عنصر <kbd> &lt;pre&gt;</kbd> بخط ذو عرض ثابت ، ويحافظ النص على كل من المسافات وفواصل الأسطر. سيتم عرض النص تمامًا كما هو مكتوب في شفرة مصدر <b>HTML</b><br/>
                يكتب الوسم <b>pre</b> على شكل التالي :     
            </p>
            <CodeHighlighter  code={code} language="html" addclassName="mt-3 mb-3" copie={true}/>
            <div className="mital"> متال :</div>
            <CodeHighlighter  code={codeExemple} language="html" is_html={true} title="Preformatted" addClass="mt-3 mb-3" copie={true}/>
            <Result file_name="index.html" title='Preformatted' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <pre><br/>
                &nbsp; &nbsp; &nbsp;function greet() {"{"}<br/>
                &nbsp; &nbsp; &nbsp;    console.log("Hello, World!");<br/>
                &nbsp; &nbsp; &nbsp;{"}"}
                </pre>
            </Result>
        </article>
    </section>
    )
}