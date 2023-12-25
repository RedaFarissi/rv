import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Print(){
    const codeExemple1= { 
    code: `     <button onclick="printpage()" > Print page </button>

     <script src="./index.js"></script>`,
    script:`function printpage(){
    window.print()
}`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript print</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم طريقة <b><bdi>print()</bdi></b> بطباعة محتويات النافذة الحالية.<br/>
            تفتح طريقة <b><bdi>print()</bdi></b> مربع حوار الطباعة ، مما يتيح للمستخدم تحديد خيارات الطباعة المفضلة.
            <CodeHighlighter code={`window.print()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="print" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='print' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={()=>{ window.print() } } style={{border:"1px solid black",outline:"none",borderRadius:"2px",padding:"3px 9px"}}> Print page </button>
        </Result>
    </article>
</section>
    )
}