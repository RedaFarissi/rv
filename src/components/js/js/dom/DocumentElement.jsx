import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function DocumentElement(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript documentElement</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم خاصية <b>documentElement</b> بإرجاع عنصر مستند (ككائن عنصر).<br/>
            المستند للقراءة فقط.<br/>
            بالنسبة إلى مستندات <b>HTML</b> ، يكون الكائن الذي تم إرجاعه هو عنصر <kbd>&lt;html&gt;</kbd> .<br/>
            <div className="alert alert-warning">
                <b>ملحوظة</b><br/>
                الفرق بين <b>document.body</b> و 
                <b>document.documentElement</b><br/>
                يُرجع <b>document.body</b> عنصر <kbd>&lt;body&gt;</kbd><br/>
                تُرجع <b>document.documentElement</b> عنصر <kbd>&lt;html&gt;</kbd>.<br/>
                أنظر أيضا:<br/>
                خاصية نص المستند<br/>
                كائن <b>HTML DOM HTML</b><br/>
                علامة <b>HTML</b> <kbd>&lt;html&gt;</kbd>
            </div>
            <CodeHighlighter code={`document.documentElement`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
        <div className="mital"> متال :  </div>
        <img src={images.js120_documentElement} className="img"/>
        <img src={images.js120_documentElement2} className="img"/>
    </article>
</section>
    )
}