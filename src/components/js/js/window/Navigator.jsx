import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Navigator(){
    const codeExemple1= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("result").innerHTML  = navigator.appCodeName`
    }
    const codeExemple2= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("result").innerHTML  = navigator.appName `
    }

    const codeExemple3= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("result").innerHTML  = window.navigator.appVersion`
    }

    const codeExemple4= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("result").innerHTML  = window.navigator.language`
    }
    const codeExemple5= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("result").innerHTML  = window.navigator.platform`
    }


    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript navigator</h1>
    <article className="mt-5">
        <div className="style_divv">
            يحتوي كائن <b>navigator</b> على معلومات حول المتصفح.<br/>
            يتم الوصول إلى الكائن <b>navigator</b> من خلال:<br/>
            <CodeHighlighter code={`navigator`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو
            <CodeHighlighter code={`window.navigator`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
    </article>
    <article>
        <h2 className="title-h2">1. appCodeName</h2>
        <p className="style_divv">
            تقوم الخاصية <b>appCodeName</b> بإرجاع الاسم الرمزي للمتصفح.<br/>
            خاصية <b>appCodeName</b> للقراءة فقط.
            <CodeHighlighter code={`navigator.appCodeName`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="navigator" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='navigator' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.navigator.appCodeName}</h2>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2">2. appName</h2>
        <p className="style_divv">
            تقوم الخاصية <b>appName</b> بإرجاع اسم المستعرض.<br/>
            الخاصية <b>appName</b> للقراءة فقط
            <CodeHighlighter code={`navigator.appName`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="navigator" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='navigator' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.navigator.appName}</h2>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2">3. appVersion</h2>
        <p className="style_divv">
            تقوم الخاصية <b>appVersion</b> بإرجاع إصدار المتصفح.<br/>
            الخاصية <b>appVersion</b> للقراءة فقط.
            <CodeHighlighter code={`navigator.appVersion`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} language="html" is_html={true} title="navigator" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='navigator' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.navigator.appVersion}</h2>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2">4. language</h2>
        <p className="style_divv">
            تقوم خاصية <b>language</b> بإرجاع لغة المتصفح.<br/>
            خاصية <b>language</b> للقراءة فقط.
            <CodeHighlighter code={`navigator.language`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple4.code} language="html" is_html={true} title="navigator" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='navigator' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.navigator.language}</h2>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2">5. platform</h2>
        <p className="style_divv">
            تعود خاصية <b>platform</b> للنظام الأساسي الذي تم تجميع المتصفح من أجله.<br/>
            خاصية <b>platform</b> للقراءة فقط.<br/>
            <CodeHighlighter code={`navigator.platform`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>  
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple5.code} language="html" is_html={true} title="navigator" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='navigator' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.navigator.platform}</h2>
        </Result>
    </article>
</section>
    )
}