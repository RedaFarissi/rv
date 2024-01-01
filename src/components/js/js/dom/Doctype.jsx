import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Doctype(){
    const codeExemple1= { 
        code: `      <script src="./index.js"></script>`,
        script:`document.write(document.doctype.name)`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript doctype</h1>
    <article>
        <p className="style_divv mt-5">
            تُرجع خاصية  <b>DOCTYPE</b> للمستند ككائن <bdi><small>(DocumentType)</small></bdi>.<br/>
            تُرجع خاصية <b>DOCTYPE</b> القيمة فارغة إذا لم يكن للمستند نوع مستند.<br/>
            خاصية <b>DOCTYPE</b> للقراءة فقط.<br/>
            تُرجع خاصية <b><bdi>DOCTYPE.name</bdi></b> اسم <b>DOCTYPE</b>
            <CodeHighlighter code={`document.doctype`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="doctype" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="doctype" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            html
        </Result>
        
    </article>
</section>
    )
}