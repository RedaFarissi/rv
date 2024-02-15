import { CodeHighlighter ,  Result} from "../../path";
import "./Button.css"
import { useState , useRef} from "react";

export default function Button(props){
    const code1 = `<button type="submit"> content </button>`
    const code2 = `<button type="reset"> content </button>`
    const codeExemple1 = `      <button> Click Me </button>`
    const codeExemple2 = `      <form>
            Full Name : <input type="text" name="full_name"/>
            <button type="submit"> Submit to server </button>
      </form>`
    const inputRefExemple2 = useRef(null);
    const [codeExemple2Route , setCodeExemple2Route] = useState("")         
    const codeExemple2RouteHandle =()=>{
        setCodeExemple2Route(`?full_name=${inputRefExemple2.current.value}`)
    }
    const codeExemple3 = `<form>
    Full Name : <input type="text" name="full_name"/>
    <button type="submit"> Submit to server </button>
    <button type="reset"> reset </button>
</form>`
    const inputRefExemple3 = useRef(null);
    const [codeExemple3Route , setCodeExemple3Route] = useState("") 
    const codeExemple3RouteHandle =(event)=>{
        event.preventDefault();
        setCodeExemple3Route(`?full_name=${inputRefExemple3.current.value}`)
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">HTML Button</h1>
    <article className="mt-5">
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
            <CodeHighlighter  code={codeExemple1} language="html" is_html={true} title="Button" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Button' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <button> Click Me </button><br/>
            </Result>
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
            <CodeHighlighter  code={codeExemple2} language="html" is_html={true} title="Button" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Button' url_change={codeExemple2Route}  logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">     
                    Full Name : <input type="text" ref={inputRefExemple2} name="full_name"/>
                    <button type="submit" onClick={codeExemple2RouteHandle}> Submit to server </button>
            </Result>
        </div>
        <h5> 2. القيمة reset </h5>
        <div className="style_divv">
            يمثل الوسم <bdi><strong>&lt;button type="rest"&gt;</strong></bdi> ، الذي يحتوي على قيمة <b>reset</b> في سمة <b>type</b>  زر إعادة تعيين. سيؤدي النقر فوق زر إعادة تعيين إلى مسح كافة عناصر الإدخال في النموذج إلى قيمتها الأصلية. يمكن أن يحتوي الزر على نص وصور ورموز وعناصر أخرى.
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple3} language="html" is_html={true} title="Button" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Button' url_change={codeExemple3Route} file_name="index.html" logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">     
                <form>
                    Full Name : <input type="text" ref={inputRefExemple3} name="full_name"/>
                    <button type="submit" onClick={codeExemple3RouteHandle}> Submit to server </button>
                    <button type="reset"> reset </button>
                </form>
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2"> 3. السمات المستعملة </h2>
        <table  className="table table-bordered text-light">
            <thead className="bg-secondary">
                <tr className="text-center fs-5">
                    <th className="button-td"> الوصف  </th>
                    <th className="button-td"> القيمة </th>
                    <th className="button-td"> السمات </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}> تحديد أن الزر يجب أن يحصل على التركيز تلقائيا عند تحميل الصفحة </td>
                    <td className="button-td" dir="ltr"> autofocus </td>
                    <td className="button-td" dir="ltr"> autofocus </td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}> تحديد أنه يجب تعطيل زر </td>
                    <td className="button-td" dir="ltr"> disabled </td>
                    <td className="button-td" dir="ltr"> disabled </td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}> تحديد النموذج الذي ينتمي إليه الزر </td>
                    <td className="button-td" dir="ltr"> form_id </td>
                    <td className="button-td" dir="ltr"> form</td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}> تحديد مكان إرسال بيانات النموذج عند إرسال نموذج. فقط للنوع "type="submit </td>
                    <td className="button-td" dir="ltr"> URL </td>
                    <td className="button-td" dir="ltr">  formaction</td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}> تحديد كيفية إرسال بيانات النموذج (أي أسلوب HTTP لاستخدامه). فقط للنوع "type="submit</td>
                    <td className="button-td" dir="ltr"> GET <br/> POST</td>
                    <td className="button-td" dir="ltr"> formmethod </td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}> تعين أنه لا يجب التحقق من صحة (نموذج-بيانات) في الإرسال. فقط للنوع type="submit"</td>
                    <td className="button-td" dir="ltr"> formnovalidate</td>
                    <td className="button-td" dir="ltr"> formnovalidate </td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}>	تحديد اسم للزر</td>
                    <td className="button-td" dir="ltr"> name </td>
                    <td className="button-td" dir="ltr"> name </td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}>  تحديد نوع الزر </td>
                    <td className="button-td" dir="ltr">button<br/>reset<br/>submit</td>
                    <td className="button-td" dir="ltr">type</td>
                </tr>
                <tr>
                    <td className="button-td" style={{textAlign:"right"}}>  تحديد قيمة أولية للزر يمكن تغييره  </td>
                    <td className="button-td" dir="ltr"> نص <br/>reset<br/>submit</td>
                    <td className="button-td" dir="ltr">value</td>
                </tr>
            </tbody>
        </table>
    </article>
</section>
)
}