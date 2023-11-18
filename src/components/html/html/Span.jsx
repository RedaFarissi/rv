import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Span(){
    const code = `<span id="id_name" class="class_name"> content </span>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML Span</h1>
    <article>
        <p className="style_divv mt-5">
            الوسم <b>span</b> هو وسم زوجي يكتب على الشكل التالي :<kbd>&lt;span&gt; content &lt;/span&gt;</kbd><br/>
            <ul>
                <li> الوسم <kbd>&lt;span&gt;</kbd> عبارة عن حاوية مضمنة تُستخدم لترميز جزء من نص أو جزء من مستند.</li>
                <li>يتم تصميم الوسم <kbd>&lt;span&gt;</kbd> بسهولة بواسطة <b>CSS</b> أو التلاعب بها باستخدام <b>JavaScript</b> باستخدام سمة <b>class</b> أو <b>id</b>.</li>
                <li>الوسم <kbd>&lt;span&gt;</kbd> لا يقوم بالعودة إلى سطر تلقائيا .</li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html22_span} alt="span code" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <span style={{fontSize:"xx-large"}}>My</span> mother has <span style={{color:"blue"}}>blue</span> eyes.
            </div>
        </div>
    </article>
</section>
)
}