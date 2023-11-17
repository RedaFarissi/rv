import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Fieldset(){
    const code = `<fieldset> 
    <legend> title </legend>
    HTML content
</fieldset>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html"> HTML fieldset </h1>
    <article>
        <p className="style_divv mt-5">
            يتم استخدام العلامة <kbd>&lt;fieldset&gt;</kbd> لتجميع العناصر ذات الصلة في نموذج.<br/>
            ترسم العلامة <kbd>&lt;fieldset&gt;</kbd> مربع حول العناصر ذات الصلة.<br/>
            يتم استخدام العلامة <kbd>&lt;legend&gt;</kbd> لتعريف تسمية توضيحية <kbd>&lt;fieldset&gt;</kbd>.
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html36_fieldset} className="img"/>
            <h4 className="green">  بعد تشغيل الكود  </h4>
            <img src={images.html36_fieldset_2} className="img"/>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال 2 : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html36_fieldset2} className="img"/>
            <h4 className="green">  بعد تشغيل الكود  </h4>
            <img src={images.html36_fieldset2_2} className="img"/>
        </div>
    </article>
</section>
)
}