import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Select(){
    const code1 = `<select>
    <option> content </option>
    <option> content </option>
    <option> content </option>
    <option> content </option>
</select>`
    const code2 = `<select size="Number">
    <option> content </option>
    <option> content </option>
    <option> content </option>
    <option> content </option>
</select>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Select</h1>
    <article>
        <h2 className="title-h2">1 . العنصر select </h2>
        <p className="style_divv">
            الوسم  <kbd>&lt;select&gt;</kbd> في لغة  <b>HTML</b> يتم استخدامها لتعريف قائمة منسدلة تظهر عندما ينقر المستخدم فوق عنصر النموذج ويسمح للمستخدم بتحديد أحد الخيارات. لتحديد الخيارات المتوفرة، استخدم الوسم <kbd>&lt;option&gt;</kbd> داخل الوسم <kbd>&lt;select&gt;</kbd>.<br/>
            غالبا ما يستخدم <kbd>&lt;select&gt;</kbd> في نموذج، لجمع مدخلات المستخدم.<br/>
            السمة <b>name</b>  مطلوبة للإشارة إلى بيانات النموذج بعد إرسال النموذج (إذا حذفت السمة name، فلن يتم إرسال أية بيانات من القائمة المنسدلة).<br/>
            عند النقر سيتم إرسال القيمة المكتوبة داخل السمة value .   
        </p>
        <CodeHighlighter  code={code1} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html35_select} alt="select" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                Choose Marocan city:&nbsp;
                <select>
                    <option value="Marakech">Marakech</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Kenitra">Kenitra</option>
                    <option value="Tanger">Tanger</option>
                </select> 
            </div>
            <h4 className="green"> عند النقر ستضهر قائمة منسدلة </h4>
            <img src={images.html35_select_3} alt="select" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. السمة size</h2>
        <p className="style_divv">
            تستخدم السمة <b>size</b> لتحديد عدد ال <b>option</b> التي ستضهر على صفحتك .
        </p>
        <CodeHighlighter  code={code2} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html35_select2} alt="select" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <h2>Choose Marocan city:</h2>
                <select size="4">
                    <option value="Marakech">Marakech</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Kenitra">Kenitra</option>
                    <option value="Tanger">Tanger</option>
                </select> 
            </div>
        </div>
    </article>
</section>
)
}
