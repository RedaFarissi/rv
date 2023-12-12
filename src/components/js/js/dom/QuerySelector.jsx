import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function QuerySelector(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript querySelector</h1>
    <article>
        <h2 className="title-h2">1- querySelector</h2>
        <p className="style_divv">
            تُرجع طريقة <bdi><b>querySelector()</b></bdi> العنصر الأول الذي يطابق محدد <b>CSS</b>.<br/>
            لإرجاع جميع التطابقات (وليس الأولى فقط) ، استخدم <bdi><b>querySelectorAll()</b></bdi> بدلاً من ذلك.<br/>
            يطرح كل من <bdi><b>querySelector()</b></bdi> و <bdi><b>querySelectorAll()</b></bdi> استثناء <b className="text-danger">SYNTAX_ERR</b> إذا كان المحدد (المحددات) غير صالح.
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">querySelector(<span style="color:white">CSS selectors</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js76_querySelector} className="img"/>
        <div className="styleee img" id="reSulta"> 
            <a href="https://www.google.com">google</a><br/>
            <a href="https://www.facebook.com">facebook</a><br/>
            https://www.google.com/
        </div>
        <div className="mital">متال 2:  </div>
        <img src={images.js76_querySelector2} className="img"/>
        <div className="styleee img"> 
            <div className="partent">
                <div className="child" style={{backgroundColor:"red"}}> child 1 </div>
                <div className="child"> child 2 </div>
                <div className="child"> child 3 </div>
            </div>
        </div>
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
