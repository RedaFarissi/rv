import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Division(){
    const code = `<div id="id_name" className="class_name"> content </div>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Division (div)</h1>
    <article>
        <div className="style_divv mt-5">
            الوسم <b>div</b> هو وسم زوجي يكتب على الشكل التالي :  <kbd>&lt;div&gt; content &lt;/div&gt;</kbd>
            <ul>
                <li>يستخدم الوسم <kbd>&lt;div&gt;</kbd> كحاوية لعناصر <b>HTML</b> - تنسيق تنسيقها بعد ذلك باستخدام <b>CSS</b>. أو معالجتها باستخدام <b>JavaScript</b>.</li>
                <li>يتم تصميم علامة <kbd>&lt;div&gt;</kbd> بسهولة باستخدام سمة <b>class</b> أو <b>id</b>.</li>
                <li>عند بداية الوسم <kbd>&lt;div&gt;</kbd> يتم بدأ في سطر جديد .</li>
                <li>عند نهاية الوسم <kbd>&lt;div&gt;</kbd> يتم العودة إلى سطر جديد .  </li>
            </ul>
            <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html21_div} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html21_div_2} className="img"/>
        </div>
    </article>
</section>
)
}