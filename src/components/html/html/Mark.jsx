import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Mark(){
    const code = `<mark> content </mark>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML mark</h1>
    <article>
        <p className="style_divv">
        يستخدم الوسم <b>mark</b>   في <b>HTML</b> لتمييز النص ذي الأهمية الخاصة أو الملاءمة في مستند <b>HTML</b>.<br/>
            تعرض المتصفحات تقليديًا النص الموجود داخل الوسم <kbd>&lt;mark&gt;</kbd> كنص بلون خلفية أصفر. <br/>
        يكتب الوسم <b>mrak</b> على شكل التالي : 
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <h4 className="green"> الكود </h4>
            <img src={images.html17_mark}   className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html17_mark_2} className="img"/>  
        </div>
    </article>
</section>
)
}