import { CodeHighlighter ,  Result} from "../../path";

export default function BiDirectionalOverride(props){
    const code = `<bdo> content  </bdo>`
    const codeExemple = `       <bdo dir="ltr">
            الكتابة بالعربية تكون من اليمين
        </bdo>`
    return(
<section className="section-conetent">
    <h1  className="heading-style heading-style-html-color">HTML Bi-Directional Override (bdo)</h1>
    <article>
        <div className="style_divv mt-5">
            نستخدم الوسم <kbd>&lt;bdo&gt;</kbd> على هذا النحو <kbd>&lt;bdo dir="direction"&gt;</kbd> لتغيير جهة عرض النص و اتجاه كل حرف بداخله أيضاً. مكان الكلمة <b>text</b> نمرر النص الذي نريد تحديد جهة عرضه و عرض كل حرف فيه. مكان الكلمة <b>direction</b> نمرر قيمة مهيئة مسبقاً تحدد الإتجاه الذي نريد عرض النص بشكل عام و كل حرف موجود فيه.
        </div>
        <CodeHighlighter  code={code} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple} language="html" title="Bi Directional Override" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Bi Directional Override' logo={props.html_logo}  route="C:/Users/SURFACE BOOK/Desktop/html/index.html">
                <bdo dir="rtl">   
                    الكتابة بالعربية تكون من اليمين
                </bdo>
            </Result>
        </div>
    </article>
</section>
)
}