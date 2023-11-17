import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Dialog(){
    const code = `<dialog open="true/false"> 
    <!--HTML content-->
</dialog>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Dialog</h1>
    <article>
        <p className="style_divv mt-5">
            تحدد الوسم <b>dialog</b> مربع صندوق أو نافذة فرعية.<br/>
            يسهّل عنصر <b>dialog</b> إنشاء مربعات حوار وشروط منبثقة على صفحة ويب. <br/>
            لستعمال الوسم <b>dialog</b> يجب إستخدام السمة <b>open</b> والتي هي الأخرى تستقبل قيمتين <b>true</b> و <b>false</b>
            عند إستخدام الوسم <b>dialog</b> بدون السمة <b>open</b> ستكون العناصر داخل الوسم مخفية 
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html43_dialog} alt="dialog" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html43_dialog_2} alt="dialog" className="img"/>
        </div>
    </article>
</section>
)
}