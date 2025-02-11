import images from "../../imagesJs"
import { CodeHighlighter } from "../../../path";

export default function Oncut(){
    // const a = document.getElementById("inP")
    // a.addEventListener('cut', function_name )
    
    // function function_name() {
    //   alert("You cut text!");
    // }
    const code1 = ``
    const code2 = ``
    const code3 = ``
    //     const codeExemple1= { 
    // head:`
    // <style>
      
    // </style>`,
    // code: `      <h2 id="result"></h2>
      
    //  <script src="./index.js"></script>`,
    // script:``
    // }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript oncut</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>oncut</b> عندما يقطع المستخدم محتوى عنصر ما.<br/>
            ملاحظة: على الرغم من أن الحدث <b>oncut</b> مدعوم من قبل جميع عناصر <b>HTML</b> ، إلا أنه ليس من الممكن في الواقع قطع محتوى ، على سبيل المثال ، عنصر <kbd>&lt;p&gt;</kbd> ، ما لم يقم العنصر بتعيين <b>content</b> قابل للتعديل على <bdi><b>"true"</b></bdi> .<br/>
            تلميح: يتم استخدام حدث <b>oncut</b> في الغالب على عناصر <kbd>&lt;input&gt;</kbd> مع <code>type="text"</code>.<br/><br/>
            هناك ثلاث طرق لقص محتوى عنصر ما :
            <ul>
                <li>اضغط على <kbd className="bg-secondary">CTRL+X</kbd></li>
                <li> حدد "قص" من قائمة "تعديل" في متصفحك </li>
                <li> انقر بزر الماوس الأيمن لعرض قائمة السياق وحدد أمر "قص" </li>
            </ul>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js102_oncut} alt="oncut" className="img"/>
        <div className="styleee">
            <input type="text" id="inP" value="cut this text"/>
        </div>
    </article>
</section>
    )
}
