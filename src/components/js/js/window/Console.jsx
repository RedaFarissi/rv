import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Console(){
    // let x = 5;
    // let y = 5;
    // console.assert(x > y + 1, "Expression returned 'False'");
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
    <h1 className="heading-style heading-style-js-color">JavaScript console</h1>
    <article>
        <p className="style_divv mt-5">
            يوفر كائن <b>console</b> الوصول إلى وحدة تحكم التصحيح الخاصة بالمستعرض.<br/>
            كائن <b>console</b> هو خاصية لكائن النافذة.<br/>
            يتم الوصول إلى كائن <b>console</b> باستخدام:<br/>
            تذكر أن تفتح وحدة التحكم وذالك عبر ضغط على   <kbd>F12</kbd> .
            <CodeHighlighter code={`window.console`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو 
            <CodeHighlighter code={`console`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article> 
    <article> 
        <h2 className="title-h2">1. <bdi>console.assert()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <b><bdi>assert()</bdi></b> بكتابة رسالة إلى وحدة التحكم إذا تم تقييم التعبير إلى <b>false</b>.<br/>
            <CodeHighlighter code={`console.assert( expression, "message")`} language="js" addClass="mt-3 mb-3" copie={true} />
            إذا تم تقييم <b>expression</b> إلى خطأ ، فستتم كتابة رسالة في وحدة التحكم.
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js46_console} className="img"/>
        <div className="styleee">       
            <h2>Remember to open the console Press <kbd>F12</kbd></h2>
        </div>
    </article> 
    <article> 
        <h2 className="title-h2">2. <bdi>console.clear()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>clear()</b></bdi> بمسح وحدة التحكم.<br/>
            تقوم طريقة <bdi><b>clear()</b></bdi> أيضًا بكتابة <bdi><b>"Console was cleared"</b></bdi> في وحدة التحكم.<br/>
            <CodeHighlighter code={`console.clear()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article> 
    <article> 
        <h2 className="title-h2">3. <bdi>console.group()</bdi></h2>
        <p className="style_divv">
            تبدأ طريقة <bdi><b>group()</b></bdi> مجموعة رسائل.<br/>
            سيتم كتابة جميع الرسائل الجديدة داخل هذه المجموعة<br/>
            <CodeHighlighter code={`console.group()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article> 
    <article> 
        <h2 className="title-h2">4. <bdi>console.groupEnd()</bdi></h2>
        <p className="style_divv">
            تُنهي <bdi><b>groupEnd()</b></bdi> مجموعة رسائل.<br/>
            <CodeHighlighter code={`console.end()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article> 
</section>
    )
}