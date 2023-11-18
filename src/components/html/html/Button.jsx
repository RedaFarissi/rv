import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";
import "./Button.css"

export default function Button(){
    const code1 = `<button type="submit"> content </button>`
    const code2 = `<button type="reset"> content </button>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Button</h1>
    <article>
        <h2 className="title-h2"> 1. الوسم button</h2>
        <p className="style_divv">
            يستخدم الوسم <kbd>&lt;button&gt;</kbd>  في لغة <b>HTML</b> لإنشاء زر قابل للنقر وهو وسم زوجي اي يحتوي على علامة فتح وعلامة إغلاق.<br/>
            داخل <kbd>&lt;button&gt;</kbd> يمكنك وضع نص (و وسم مثل <kbd>&lt;i&gt;</kbd> <kbd>&lt;b&gt;</kbd> <kbd>&lt;strong&gt;</kbd> <kbd>&lt;br&gt;</kbd> <kbd>&lt;img&gt;</kbd> وما إلى ذلك).
        </p>
        <CodeHighlighter  code={code1} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter  code={code2} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <ul><li> في هاده الحالة تم إنشاء زر عند النقر عليه  لا يحدت أي شيء .</li></ul>
            <h4 className="green"> الكود </h4>
            <img src={images.html34_button} alt="button" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html34_button_2} alt="button" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2"> 2. السمة type</h2>
        <h5> 1. القيمة submit</h5>
        <p className="style_divv">
            يمثل الوسم <kbd>&lt;button type="submit"&gt;</kbd> ، الذي يحتوي على قيمة <b>submit</b> في سمة <b>type</b> الخاصة به، زرا يقوم عند الضغط عليه بإرسال النموذج الذي ينتمي إلى الخادم . غالبا ما يتم تمثيل تسمية الزر بمحتوى العنصر.
            عند إستخدام السمة <bdi>type="submit"</bdi> داخل الوسم <b>button</b> تأكد أن تضع العناصر الدي تريد إرسالها إلى الخادم  وسط الوسم <kbd>&lt;form&gt;</kbd> كم تعلمنا في الدرس السابق .<br/>
            هاذا النوع من الأزرار دائما يكون وسط الوسم <kbd>&lt;form&gt;</kbd> 
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html34_button2} alt="button" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html34_button2_2} alt="button" className="img"/>
        </div>
        <h5> 2. القيمة reset </h5>
        <div className="style_divv">
            يمثل الوسم <bdi><strong>&lt;button type="rest"&gt;</strong></bdi> ، الذي يحتوي على قيمة <b>reset</b> في سمة <b>type</b>  زر إعادة تعيين. سيؤدي النقر فوق زر إعادة تعيين إلى مسح كافة عناصر الإدخال في النموذج إلى قيمتها الأصلية. يمكن أن يحتوي الزر على نص وصور ورموز وعناصر أخرى.
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html34_button3} alt="button" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html34_button3_2} alt="button" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2"> 3. السمات المستعملة </h2>
        <table  className="table table-bordered text-light">
            <thead className="bg-secondary">
                <tr className="text-center fs-5">
                    <th className="td"> الوصف  </th>
                    <th className="td"> القيمة </th>
                    <th className="td"> السمات </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="td" style={{textAlign:"right"}}> تحديد أن الزر يجب أن يحصل على التركيز تلقائيا عند تحميل الصفحة </td>
                    <td className="td" dir="ltr"> autofocus </td>
                    <td className="td" dir="ltr"> autofocus </td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}> تحديد أنه يجب تعطيل زر </td>
                    <td className="td" dir="ltr"> disabled </td>
                    <td className="td" dir="ltr"> disabled </td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}> تحديد النموذج الذي ينتمي إليه الزر </td>
                    <td className="td" dir="ltr"> form_id </td>
                    <td className="td" dir="ltr"> form</td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}> تحديد مكان إرسال بيانات النموذج عند إرسال نموذج. فقط للنوع "type="submit </td>
                    <td className="td" dir="ltr"> URL </td>
                    <td className="td" dir="ltr">  formaction</td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}> تحديد كيفية إرسال بيانات النموذج (أي أسلوب HTTP لاستخدامه). فقط للنوع "type="submit</td>
                    <td className="td" dir="ltr"> GET <br/> POST</td>
                    <td className="td" dir="ltr"> formmethod </td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}> تعين أنه لا يجب التحقق من صحة (نموذج-بيانات) في الإرسال. فقط للنوع type="submit"</td>
                    <td className="td" dir="ltr"> formnovalidate</td>
                    <td className="td" dir="ltr"> formnovalidate </td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}>	تحديد اسم للزر</td>
                    <td className="td" dir="ltr"> name </td>
                    <td className="td" dir="ltr"> name </td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}>  تحديد نوع الزر </td>
                    <td className="td" dir="ltr">button<br/>reset<br/>submit</td>
                    <td className="td" dir="ltr">type</td>
                </tr>
                <tr>
                    <td className="td" style={{textAlign:"right"}}>  تحديد قيمة أولية للزر يمكن تغييره  </td>
                    <td className="td" dir="ltr"> نص <br/>reset<br/>submit</td>
                    <td className="td" dir="ltr">value</td>
                </tr>
            </tbody>
        </table>
    </article>
</section>
)
}