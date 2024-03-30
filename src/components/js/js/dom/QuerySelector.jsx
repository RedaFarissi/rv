import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function QuerySelector(){
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `     <a href="https://www.google.com" target="_blanck"> google</a> <br/>
     <a href="https://www.facebook.com/" target="_blanck">facebook </a>
     <h2 id="result"> </h2>
      
     <script src="./index.js"></script>`,
    script:`const result = document.querySelector("#result")
const first_a = document.querySelector("a")
result.innerText = first_a `
        }
    const codeExemple2= { 
    code: `        <div class="parent">
         <div class="child"> child 1 </div>
         <div class="child"> child 2 </div>
         <div class="child"> child 3 </div>
     </div>
      
     <script src="./index.js"></script>`,
    script:`let First_child = document.querySelector(".parent > .child");
First_child.style.backgroundColor = "red";`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript querySelector</h1>
    <article className="mt-5">
        <h2 className="title-h2">1- querySelector</h2>
        <p className="style_divv">
            تُرجع طريقة <bdi><b>querySelector()</b></bdi> العنصر الأول الذي يطابق محدد <b>CSS</b>.<br/>
            لإرجاع جميع التطابقات (وليس الأولى فقط) ، استخدم <bdi><b>querySelectorAll()</b></bdi> بدلاً من ذلك.<br/>
            يطرح كل من <bdi><b>querySelector()</b></bdi> و <bdi><b>querySelectorAll()</b></bdi> استثناء <b className="text-danger">SYNTAX_ERR</b> إذا كان المحدد (المحددات) غير صالح.
            <CodeHighlighter code={`document.querySelector(CSS selectors)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="querySelector" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="querySelector" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <a href="https://www.google.com" target="_blanck"> google</a> <br/>
            <a href="https://www.facebook.com/" target="_blanck">facebook </a>
            <h2>https://www.google.com/</h2>
        </Result>
        <div className="mital">متال 2:  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="querySelector" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="querySelector" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="parent">
                <div class="child"  style={{backgroundColor:"red"}}> child 1 </div>
                <div class="child"> child 2 </div>
                <div class="child"> child 3 </div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2- The Difference Between an HTMLCollection and a NodeList</h2>
        <p className="style_divv">
            إن <b>NodeList</b> و <b>HTMLcollection</b> هي إلى حد كبير نفس الشيء.<br/>
            كلاهما عبارة عن مجموعات (قوائم) تشبه المصفوفة من العقد (العناصر) المستخرجة من المستند. يمكن الوصول إلى العقد عن طريق أرقام الفهرس. يبدأ الفهرس من 0.<br/>
            كلاهما له خاصية طول تُرجع عدد العناصر في القائمة (المجموعة).<br/>
            مجموعة <b>HTML</b> هي مجموعة من عناصر المستند.<br/>
            <b>NodeList</b> عبارة عن مجموعة من عُقد المستندات (عقد العناصر وعقد السمات وعقد النص).<br/>
            يمكن الوصول إلى عناصر مجموعة <b>HTML</b> من خلال الاسم أو المعرف أو رقم الفهرس.<br/>
            لا يمكن الوصول إلى عناصر <b>NodeList</b> إلا من خلال رقم الفهرس الخاص بهم.<br/>
            مجموعة <b>HTMLCollection</b> هي دائمًا مجموعة حية. مثال: إذا أضفت &lt;li&gt; عنصرًا إلى قائمة في <b>DOM</b> ، فستتغير القائمة في مجموعة <b>HTML</b> أيضًا.<br/>
            غالبًا ما تكون <b>NodeList</b> مجموعة ثابتة. مثال: إذا أضفت <kbd>&lt;li&gt;</kbd> عنصرًا إلى قائمة في <b>DOM</b> ، فلن تتغير القائمة في <b>NodeList</b>.<br/>
            ترجع أساليب <bdi><b>getElementsByClassName()</b></bdi> و <bdi><b>getElementsByTagName()</b></bdi> مجموعة <b>HTMLCollection</b> مباشرة.<br/>
            ترجع طريقة <b>querySelectorAll() NodeList</b> ثابتة.<br/>
            تقوم الخاصية <b>childNodes</b> بإرجاع <b>NodeList</b> الحية.<br/>
        </p>
    </article>
</section>
)
}
