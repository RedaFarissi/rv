import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function BiDirectionalOverride(){
    const code = `<bdo> content  </bdo>`
    return(
<section className="section-conetent">
    <h1  className="heading-style heading-style-html-color">HTML Bi-Directional Override (bdo)</h1>
    <article>
        <div className="style_divv mt-5">
            نستخدم الوسم <kbd>&lt;bdo&gt;</kbd> على هذا النحو <kbd>&lt;bdo dir="direction"&gt;</kbd> لتغيير جهة عرض النص و اتجاه كل حرف بداخله أيضاً. مكان الكلمة <b>text</b> نمرر النص الذي نريد تحديد جهة عرضه و عرض كل حرف فيه. مكان الكلمة <b>direction</b> نمرر قيمة مهيئة مسبقاً تحدد الإتجاه الذي نريد عرض النص بشكل عام و كل حرف موجود فيه.
        </div>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html27_bdo} alt="bdo code" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <bdo dir="ltr">   
                    الكتابة بالعربية تكون من اليمين
                </bdo>
            </div>
        </div>
    </article>
</section>
)
}