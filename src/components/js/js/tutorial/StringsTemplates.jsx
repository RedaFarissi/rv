import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultConsole} from "../../../path";

export default function StringsTemplates(){
    const codeExemple0= { 
    code: `     <script src="./index.js"></script>`,
    script:`let text;
text = \`he's called "Green"\`;
console.log(text);`
    }
    const codeExemple1= { 
    code: `     <h2 id="test"></h2>
    
     <script src="./index.js"></script>`,
    script:`let firstName, lastName;

firstName = "Reda";
lastName = "Eskouni";

document.getElementById("test").innerHTML = \`Hello Mr \${firstName} \${lastName}\`;`
    }
    const codeExemple2= { 
    code: `     <h2 id="visit"> Visit Me on Facebook  </h2>  
    
     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color"> JavaScript Strings Templates </h1>
    <article>
        <h2 className="title-h2">1.Back-Tics Syntax</h2>
        <p className="style_divv">
            تستخدم القوالب الحرفية (<small>Template Literals</small>) علامات التجزئة(<small>back-ticks</small>) <kbd>`</kbd> بدلاً من علامات الاقتباس (<small>quotes</small>) <kbd>"</kbd> لتحديد سلسلة
            <CodeHighlighter code={`let name = \`Reda Eskouni\`;`} language="js" addClass="mt-3 mb-3" copie={true} />  
            <CodeHighlighter code={`let name = \`"'Reda'"\`;`} language="js" addClass="mt-3 mb-3" copie={true} />  
            
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple0.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple0.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConsole title='String' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex justify-content-between align-items-center">
                <span>he's called "Green"</span>
                <span>index.js : 3</span>
            </div>
        </ResultConsole>
    </article>
    <article>
        <h2 className="title-h2">2. Interpolation</h2>
        <p className="style_divv">
            توفر القوالب الحرفية (<small>Template Literals</small>) طريقة سهلة لاستيفاء المتغيرات والتعبيرات في سلاسل.<br/>
            هذه الطريقة تسمى <b>string interpolation</b>
            <CodeHighlighter code={`  \`  \${javascript code}  \` `} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Hello Mr Reda Eskouni </h2>
        </Result> 
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Hello Mr Reda Eskouni </h2>
        </Result> 
    </article>
</section>
    )
}