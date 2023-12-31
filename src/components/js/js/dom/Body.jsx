import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Body(){
        const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript body</h1>
    <article>
        <p className="style_divv mt-5">
         تقوم خاصية <b>body</b> بتعيين أو إرجاع عنصر المستند   <kbd>&lt;body&gt;</kbd> 
            <CodeHighlighter code={`document.body`} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-danger mt-3">
                <b> تحذير </b>: يؤدي تعيين خاصية <b>body</b> إلى الكتابة فوق جميع العناصر الموجودة في المستند {"<"}body{">"}.
            </div>
            <div className="alert alert-warning mt-3">
                <b> ملاحظة </b>: الفرق بين <bdi>document.body</bdi> ة <bdi>document.documentElement</bdi>
                <ul>
                    <li> يُرجع document.body العنصر <kbd>&lt;body&gt;</kbd>. </li>
                    <li> تُرجع document.documentElement العنصر <kbd>&lt;html&gt;</kbd>.</li>
                </ul>
            </div>
        </p>
        <div className="mital"> متال 1 :  </div>
        <img src={images.js60_body} className="img"/>
        <img src={images.js60_body_2} className="img"/>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js60_body2} className="img"/>
        <img src={images.js60_body2_2} className="img"/>
    </article>
</section>
    )
}