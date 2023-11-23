import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Superscript(){
    const code = `<sup> The text to be uploaded </sup>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color"> HTML Superscript (sup) </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد العلامة <kbd>&lt;sup&gt;</kbd> النص المرتفع. يظهر النص المرتفع بنصف حرف فوق السطر العادي ، ويتم تقديمه أحيانًا بخط أصغر. يمكن استخدام النص المرتفع للحواشي السفلية ، مثل
            1<sup>er</sup>  
        </p>
        <CodeHighlighter  code={code} language="html"  addClass="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html9_sup} alt="sup code" className="img"/>
            <h4 className="green">  بعد تشغيل الكود  </h4>
            <div className="style-result">
                1 <sup>er</sup>
                <p>text <sup>sup</sup></p>
            </div>
        </div>
    </article>
</section>
)
}