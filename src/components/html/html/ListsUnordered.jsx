import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function ListsUnordered(){
    const code = `<ul>
    <li> content </li>
    <li> content </li>
</ul>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html"> HTML Lists Unordered ul </h1>
    <article>
        <h2 className="title-h2">1. شرح الوسم ul </h2>
        <p className="style_divv">
            نستخدم الوسم <kbd>&lt;ul&gt;</kbd>  لإنشاء  قائمة (نقطية) غير مرتبة.<br/>
            نستخدم الوسم <kbd>&lt;li&gt;</kbd>  داخل الو سم <kbd>&lt;ul&gt;</kbd> لتفرقة بين المحتوى 
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html29_ul} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <ul style={{fontWeight:"500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ul>
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. السمة type </h2>
        <div className="style_divv">
        يتم استخدام سمة <b>type</b>  مع <kbd>&lt;ul&gt;</kbd> في <b>HTML</b> لتحديد نوع العلامة المستخدمة في القائمة
        </div>
            <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html29_ul2} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <ul type="circle" style={{fontWeight: "500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ul>
                <ul type="square" style={{fontWeight: "500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ul>
                <ul type="disc" style={{fontWeight: "500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ul>
            </div>  
            <ul><li> معلومة : يمكن كتابة قوائم متداخلة كما هو موضح في الصورة أسفله .</li></ul>
            <img src={images.html29_ul3} className="img"/>
        </div>
    </article>
</section>
)
}