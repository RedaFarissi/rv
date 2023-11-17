import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function ListsDefinitionul(){
    const code = `<dl>
    <dt> title1 </dt>
       <dd> content </dd>
       <dd> content </dd>
    <dt> title2 </dt>
       <dd> content </dd>
       <dd> content </dd>
 </dl> `
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html">HTML dl</h1>
    <article>
        <p className="style_divv mt-5">
            يستخدم الوسم <kbd>&lt;dl&gt;</kbd> في <b>HTML</b> لتمثيل قائمة الوصف. يستخدم هذا الوسم مع الوسم <kbd>&lt;dt&gt;</kbd> و <kbd>&lt;dd&gt;</kbd> . 
            <ul>
                <li style={{marginBottom:"9px"}}>يستخدم الوسم  <kbd>&lt;dt&gt;</kbd> في <b>HTML</b> لتحديد عناوين  قائمة الوصف. يتم استخدامه داخل الوسم <kbd>&lt;dl&gt;</kbd>. وعادة ما يتبعه الوسم <kbd>&lt;dd&gt;</kbd></li>
                <li style={{marginBottom:"9px"}}>تشير العلامة <kbd>&lt;dd&gt;</kbd> في <b>HTML</b> إلى وصف التعريف وتستخدم للإشارة إلى وصف أو تعريف عنصر في قائمة الوصف. يمكن إدراج الفقرات وفواصل الأسطر والصور والروابط والقوائم داخل علامة <kbd>&lt;dd&gt;</kbd></li>
            </ul>
            <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html30_dl} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html30_dl_2} className="img"/>
        </div>
        <ul>
            <li> يمكن إستخدام <b>CSS</b> لتصميم شكل جميل <small> ستتعلم ذالك خلال دروس <b>CSS</b></small> </li>
        </ul>
    </article>
</section>
)
}