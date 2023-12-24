import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Navigator(){
    // document.getElementById("h2").innerHTML  = navigator.appCodeName + "<br/>"
    // document.getElementById("h22").innerHTML = navigator.appName + "<br/>"
    // document.getElementById("h222").innerHTML = navigator.appVersion + "<br/>"
    // document.getElementById("h2222").innerHTML = navigator.language + "<br/>"
    // document.getElementById("h22222").innerHTML = navigator.platform + "<br/>"
        const codeExemple1= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple2= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

    const codeExemple3= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

    const codeExemple4= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple5= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }


    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript navigator</h1>
    <article>
        <div className="style_divv mt-5">
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
        <img src={images.js51_navigator} className="img"/>
        <div className="styleee img">       
            <h2 id="h2"> </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. appName</h2>
        <p className="style_divv">
            تقوم الخاصية <b>appName</b> بإرجاع اسم المستعرض.<br/>
            الخاصية <b>appName</b> للقراءة فقط
            <CodeHighlighter code={`navigator.appName`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js51_navigator2} className="img"/>
        <div className="styleee img">       
            <h2 id="h22"> </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. appVersion</h2>
        <p className="style_divv">
            تقوم الخاصية <b>appVersion</b> بإرجاع إصدار المتصفح.<br/>
            الخاصية <b>appVersion</b> للقراءة فقط.
            <CodeHighlighter code={`navigator.appVersion`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js51_navigator3} className="img"/>
        <div className="styleee img">       
            <h2 id="h222"> </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">4. language</h2>
        <p className="style_divv">
            تقوم خاصية <b>language</b> بإرجاع لغة المتصفح.<br/>
            خاصية <b>language</b> للقراءة فقط.
            <CodeHighlighter code={`navigator.language`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js51_navigator4} className="img"/>
        <div className="styleee img">       
            <h2 id="h2222"> </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. platform</h2>
        <p className="style_divv">
            تعود خاصية <b>platform</b> للنظام الأساسي الذي تم تجميع المتصفح من أجله.<br/>
            خاصية <b>platform</b> للقراءة فقط.<br/>
            <CodeHighlighter code={`navigator.platform`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>  
        <div className="mital"> متال :  </div>
        <img src={images.js51_navigator5} className="img"/>
        <div className="styleee img">       
            <h2 id="h22222"> </h2>
        </div>
    </article>
</section>
    )
}