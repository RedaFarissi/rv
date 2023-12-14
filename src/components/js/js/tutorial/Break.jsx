
import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Break(){
    const codeExemple1= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Break</h1>
    <article>
        <h2 className="title-h2">1. break</h2>
        <p className="style_divv">
            العبارة break تقفز خارج من الحلقة .
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">for</span> (i = <span style="color:var(--arr-num-color)">0</span> ; i &gt; <span style="color:var(--arr-num-color)">10</span> ; i++){
            <span style="color:var(--violet-color);">if</span>(condition){<span style="color:var(--violet-color);">break</span>}
        }</pre>
            </div> */}
            لقد رأيت بالفعل تعليمة <b>break</b> المستخدمة في فصل سابق من هذا البرنامج التعليمي. تم استخدامه للقفز من عبارة <b>switch</b>.
            يمكن أيضًا استخدام تعليمة <b>break</b> للقفز من الحلقة
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js23_break} className="img"/>
        <div className="styleee">
            <h2>i = 0<br/>i = 1<br/>i = 2<br/>i = 3</h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. continue </h2>
        <p className="style_divv">
            تكسر تعليمة المتابعة تكرارًا واحدًا (في الحلقة) ، إذا حدث شرط محدد ، وتستمر مع التكرار التالي في الحلقة.
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">for</span> (i = <span style="color:var(--arr-num-color)">0</span> ; i &gt; <span style="color:var(--arr-num-color)">10</span> ; i++){
            <span style="color:var(--violet-color);">if</span>(condition){<span style="color:var(--violet-color);">continue</span>}
        }</pre>
            </div> */}
        </p>
        <div className="mital">متال 2 :  </div>
        <img src={images.js23_break2} className="img"/>
        <div className="styleee">
            <h2>i = 0<br/>i = 1<br/>i = 2<br/>i = 3<br/>i = 5<br/>i = 6<br/>i = 7<br/>i = 8</h2>
        </div>
    </article>
</section>
    )
}