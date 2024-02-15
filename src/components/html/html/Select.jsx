import { CodeHighlighter ,  Result} from "../../path";

export default function Select(props){
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
    const codeExemple1 = `      Choose Marocan city:&nbsp;
    <select>
        <option value="Marakech">Marakech</option>
        <option value="Rabat">Rabat</option>
        <option value="Kenitra">Kenitra</option>
        <option value="Tanger">Tanger</option>
    </select> `
    const codeExemple2 = `  <h2>Choose Marocan city:</h2>
    <select size="3">
        <option value="Marakech">Marakech</option>
        <option value="Rabat">Rabat</option>
        <option value="Kenitra">Kenitra</option>
        <option value="Tanger">Tanger</option>
    </select> `
    return(
<section className="section-conetent">
    <h1 className="heading-style">HTML Select</h1>
    <article className="mt-5">
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
            <CodeHighlighter file_name="index.html" code={codeExemple1} language="html" is_html={true} title="Select" addClass="mt-3 mb-3" copie={true}/>
            <ul> <li>عند النقر ستضهر قائمة منسدلة</li> </ul>
            <Result title='Select' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                Choose Marocan city:&nbsp;
                <select>
                    <option value="Marakech">Marakech</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Kenitra">Kenitra</option>
                    <option value="Tanger">Tanger</option>
                </select> <br/><br/><br/><br/><br/>
            </Result>       
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
            <CodeHighlighter file_name="index.html" code={codeExemple2} language="html" is_html={true} title="Select" addClass="mt-3 mb-3" copie={true}/>
            <ul> <li>عند النقر ستضهر قائمة منسدلة</li> </ul>
            <Result title='Select' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <h2>Choose Marocan city:</h2>
                <select size="3">
                    <option value="Marakech">Marakech</option>
                    <option value="Rabat">Rabat</option>
                    <option value="Kenitra">Kenitra</option>
                    <option value="Tanger">Tanger</option>
                </select> 
            </Result>  
        </div>
    </article>
</section>
)
}
