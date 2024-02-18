import { CodeHighlighter } from "../../../path";

export default function DocumentElement(){
        const codeExemple1= { 
    code: `      <h2> Press <kbd>F12</kbd> </h2>
     <button class="btn btn-primary" onclick="function_name()">
         Click Here
     </button>
    
     <script src="./index.js"></script>`,
    script:`function function_name() {
    var a = document.documentElement;
    console.log(a);
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript documentElement</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>documentElement</b> بإرجاع عنصر مستند (ككائن عنصر).<br/>
            المستند للقراءة فقط.<br/>
            بالنسبة إلى مستندات <b>HTML</b> ، يكون الكائن الذي تم إرجاعه هو عنصر <kbd>&lt;html&gt;</kbd> .<br/>
            <CodeHighlighter code={`document.documentElement`} language="js" addClass="mt-3 mb-3" copie={true} />
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
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="body" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
    </article>
</section>
    )
}