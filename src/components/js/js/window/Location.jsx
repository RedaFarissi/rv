import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Location(){
    const codeExemple1= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = location.host`
    }
    const codeExemple2= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = location.hostname`
    }
    const codeExemple3= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = location.href`
    }
    const codeExemple4= {
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = location.origin`
    }
    const codeExemple5= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = location.pathname`
    }
    const codeExemple6= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")
result.innerHTML = location.protocol`
    }
    const codeExemple7= { 
    code: `     <button onclick="location.reload()"> Reload </button>`,
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript location</h1>
    <article className="mt-5">
        <p className="style_divv">
            يحتوي كائن <b>location</b> على معلومات حول عنوان <b>URL</b> الحالي.<br/>
            كائن <b> location</b> هو خاصية لكائن النافذة.<br/>
            <CodeHighlighter code={`window.open(URL, name, specs, replace)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
    <article>
        <h2 className="title-h2">1- <bdi>location.host</bdi></h2>
        <p className="style_divv">
            تعرض خاصية <bdi><b>location.host</b></bdi> المضيف <bdi><small>(عنوان IP أو domain)</small></bdi> ومنفذ عنوان <b>URL</b>.<br/>
            يتضمن <b>host</b> كلاً من اسم المضيف وأي أرقام منافذ مرتبطة به 
            <CodeHighlighter code={`location.host`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.location.host}</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2- <bdi>location.hostname</bdi></h2>
        <p className="style_divv">
            تعرض خاصية <bdi><b>location.host</b></bdi> المضيف <bdi><small>(عنوان IP أو domain)</small></bdi> ومنفذ عنوان <b>URL</b>.<br/>
            يتضمن <b>hostname</b>  اسم المضيف فقط 
            <CodeHighlighter code={`location.hostname`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.location.hostname}</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3- <bdi>location.href</bdi></h2>
        <p className="style_divv">
            تقوم الخاصية <bdi><b>location.href</b></bdi> بتعيين أو إرجاع عنوان <b>URL</b> للصفحة الحالية بالكامل.
            <CodeHighlighter code={`location.href`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.location.href}</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4- <bdi>location.origin</bdi></h2>
        <p className="style_divv">
            تقوم خاصية <b>orgin</b> بإرجاع البروتوكول واسم المضيف ورقم المنفذ لعنوان <b>URL</b>.<br/>
            <CodeHighlighter code={`location.origin`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.location.origin}</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5- <bdi>location.pathname</bdi></h2>
        <p className="style_divv">
            تقوم خاصية <bdi><b>location.pathname</b></bdi> بتعيين أو إرجاع اسم المسار لعنوان <b>URL</b> .<br/>
            <CodeHighlighter code={`location.pathname`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.location.pathname}</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">6- <bdi>location.protocol</bdi></h2>
        <p className="style_divv">
            تقوم خاصية <b><bdi>location.protocol</bdi></b> بتعيين أو إرجاع بروتوكول عنوان <b>URL</b> الحالي ، بما في ذلك النقطتان .<br/>
            <small><small> البروتوكول هو معيار يحدد كيفية نقل البيانات بين أجهزة الكمبيوتر </small></small>.
            <CodeHighlighter code={`location.protocol`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{window.location.protocol}</h2>
        </Result>
    </article>
    <article>   
        <h2 className="title-h2">7- <bdi>location.reload()</bdi></h2>
        <p className="style_divv">
            طريقة <bdi><b>location.reload()</b></bdi> تعيد تحميل المستند الحالي.<br/>
            تعمل طريقة <bdi><b>location.reload()</b></bdi> نفس طريقة زر إعادة التحميل في متصفحك.<br/>
            <CodeHighlighter code={`location.reload()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={()=>{window.location.reload()}}> Reload </button>
        </Result>
    </article>
    <article>   
        <h2 className="title-h2">8- <bdi>location.replace()</bdi></h2>
        <p className="style_divv">
            تستبدل طريقة ا<bdi><b>location.replace()</b></bdi> المستند الحالي بآخر جديد.
            <CodeHighlighter code={`location.replace("https://www.google.com")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
</section>
    )
}
       