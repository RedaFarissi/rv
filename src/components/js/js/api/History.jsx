
import { CodeHighlighter } from "../../../path";

export default function History(){
    const codeExemple1= { 
        code: `     <button onclick="history.back()"> Go Back </button>`,
    }
    const codeExemple2= { 
        code: `     <button onclick="history.forward()"> forward </button>`,
    }
    const codeExemple3= { 
        code: `     
      <h2 id="result">  </h2>
    
      <script>
           document.getElementById("result").innerHTML = history.length
      </script>
      `,
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript history</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. history</h2>
        <p className="style_divv">
            يوفر <b>Web History API</b> طرقًا سهلة للوصول إلى كائن <bdi><b>windows.history</b></bdi> .<br/>
            يحتوي كائن <b>history</b> على عناوين <b>URL</b> التي زارها المستخدم (في نافذة المتصفح).<br/>
            كائن <b>history</b> هو خاصية لكائن <b>window</b>.<br/>
            يتم الوصول إلى كائن <b>history</b> باستخدام :
            <CodeHighlighter code={`window.history`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو 
            <CodeHighlighter code={`history`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. <bdi>history.back()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>history.back()</b></bdi> بتحميل عنوان <b>URL</b> السابق (الصفحة) في قائمة المحفوظات.<br/>
            تعمل طريقة <bdi><b>history.back()</b></bdi> فقط في حالة وجود صفحة سابقة.<br/>
            <CodeHighlighter code={`window.history.back()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="history.back()" addClass="mt-3 mb-3" copie={true}  number={true}/>  
    </article>
    <article>
        <h2 className="title-h2">3. <bdi>history.forward()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>history.forward()</b></bdi> بتحميل عنوان <b>URL</b> التالي (الصفحة) في قائمة المحفوظات.<br/>
            تعمل طريقة <bdi><b>history.forward()</b></bdi> فقط في حالة وجود الصفحة التالية.<br/>
            <bdi>history.forward()</bdi> هو نفسه <bdi>history.go()</bdi>.
            <CodeHighlighter code={`window.history.forward()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="history.forward()" addClass="mt-3 mb-3" copie={true}  number={true}/>  
    </article>
    <article>
        <h2 className="title-h2">4. <bdi>history.length</bdi></h2>
        <p className="style_divv">
            تعرض خاصية <b>lengt</b> عدد عناوين <b>URL</b> في قائمة المحفوظات لنافذة المستعرض الحالية.<br/>
            تقوم الخاصية بإرجاع 1 على الأقل ، لأن القائمة تتضمن الصفحة الحالية.<br/>
            هذه الخاصية مفيدة لمعرفة عدد الصفحات التي زارها المستخدم في جلسة التصفح الحالية.<br/>
            <CodeHighlighter code={`history.length`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} language="html" is_html={true} title="history.length" addClass="mt-3 mb-3" copie={true}  number={true}/>  
    </article>
</section>
    )
}