import images from "../images";
import { CodeHighlighter } from "../pathHtml";
import html_logo from "../../../assests/images/logo/html_logo.png"
import css_logo from "../../../assests/images/logo/css_logo.png"
export default function Details(){
    const code = `<details>
    <summary> Title </summary>
    HTML
</details>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Details</h1>
    <div className="style_divv mt-5">
        يحدد الوسم <kbd>&lt;details&gt;</kbd> تفاصيل إضافية يمكن للمستخدم فتحها وإغلاقها عند النقر
        <ul>
            <li> يحدد الوسم <kbd>&lt;summary&gt;</kbd> عنوانًا مرئيًا لوسم <kbd>&lt;details&gt;</kbd>. يمكن النقر فوق العنوان لعرض أو إخفاء التفاصيل. </li>
            <li> يجب أن يكون العنصر <kbd>&lt;summary&gt;</kbd> أول عنصر فرعي لعنصر <kbd>&lt;details&gt;</kbd></li>
        </ul>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
    </div>
    <div className="sum_exemple_style">
    <div className="mital">مثال : </div>
    <h4 className="green"> الكود </h4>
    <img src={images.html25_details} alt={images.html25_details} className="img"/>
    <h4 className="green"> بعد تشغيل الكود </h4>
    <div className="style-result">
        <details>
            <summary>html logo</summary>
            <div className="style_div" style={{backgroundColor:"greenyellow"}}>
               <div>
                   <center>
                        <h2><u>html</u></h2>
                        <img src={html_logo} width="20%" alt="html logo"/>
                   </center>
               </div>
            </div>
        </details>
        <details>
            <summary>css logo</summary>
            <div className="style_div" style={{backgroundColor:"greenyellow"}}>
               <div>
                   <center>
                       <h2><u>css</u></h2>
                       <img src={css_logo} width="20%" alt="css logo"/>
                   </center>
               </div>
            </div>
        </details>
    </div>
    <h4 className="green"> عند نقر على العنوانين سيضهر محتوى details</h4>
        <img src={images.html25_details_3} alt={images.html25_details_3} className="img"/>
        <ul><li>عند إعادة الضغط سيعود المتصفح لشكل الأول</li></ul>
    </div>
</section>
    )
}