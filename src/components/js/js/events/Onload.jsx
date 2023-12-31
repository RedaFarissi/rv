import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onload(){
    // document.body.onload = function(){
    //     alert("Page is loaded")
    // }  
    const code1 = `<!-- Code HTML -->
<element onload="//script">`
    const code2 = `// Code JavaScript 
object.onload = function(){  //myScript  }`
    const code3 = `//Code JavaScript using the addEventListener()
object.addEventListener("load", function_name )`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onload</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onload</b> عندما يتم تحميل كائن.<br/>
            غالبًا ما يتم استخدام <b>onload</b> داخل عنصر <kbd>body</kbd> لتنفيذ نص برمجي بمجرد أن يتم تحميل صفحة الويب كل المحتوى بالكامل (بما في ذلك الصور وملفات البرامج النصية وملفات CSS وما إلى ذلك).<br/>
            يمكن استخدام حدث <b>onload</b> للتحقق من نوع متصفح الزائر وإصداره ، وتحميل الإصدار المناسب من صفحة الويب بناءً على المعلومات.<br/>
            يمكن أيضًا استخدام حدث <b>onload</b> للتعامل مع ملفات تعريف الارتباط <br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js108_onload} className="img"/>
        <div className="styleee">
            <div className="h1"> Hello World </div>
        </div>
    </article>
</section>
    )
}
