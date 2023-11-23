import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Blockquote(){
    const code = `<blockquote cite="url"> content </blockquote>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Blockquote</h1>
    <article className="mt-5">
        <div className="style_divv">
            عند كتابتك لمقالة أو خبر ما أحيانا تحتاج اضافة اقتباس أو نص مأخود من مكان أخر ، ومن أجل ذلك يستخدم <b>blockquote</b>  في هذا الدرس سنشرح كيفيه استخدامهم.
            <br/>
            <li style={{marginBottom:"12px"}}>إذا أردت العرض النص مقتبس على سطر منفرد مع عرض هامش حوله من كل الجهات, يمكنك وضع النص بداخل <br/><kbd>&lt;blockquote&gt; &lt;/blockquote&gt;</kbd>.</li>
            <li style={{marginBottom:"12px"}}>إذا كان الإقتباس الموضوع في الصفحة مأخوذ من موقع آخر, قم بذكر رابط الموقع الذي نسخت الإقتباس منه بداخل الخاصية <b>cite</b> التي يملكها الوسم <kbd> &lt;blockquote&gt;</kbd> لأن هذا الأمر سيجعل الموقع المقتبس منه ذو أهمية أكثر بالنسبة لمحركات البحث و بالتالي تكون تفيد الموقع الذي نسخت الإقتباس منه</li>
        </div>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <h4 className="green"> الكود </h4>    
            <img src={images.html11_blockquote} alt="Blockquote" className="img"/>
            <h4 className="green">  بعد تشغيل الكود  </h4>
            <div className="style-result">
                <blockquote cite="https://www.google.com/"> google</blockquote>
            </div>
        </div>
    </article>
</section>
)
}