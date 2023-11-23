import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Small(){
    const code1 = `<small> content  </small>`
    const code2 = `<big> content  </big>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Small and Big</h1>
    <article>
        <h2 className="title-h2">1. تصغير الخط </h2>
        <p className="style_divv">
            نستخدم الوسم <kbd>&lt;small&gt;</kbd>   لعرض الكلام الثانوية أو الذي يعتبر أقل أهمية بحجم خط أصغر . <br/>
            يكتب الوسم <b>small</b> على شكل التالي : 
        </p>
        <CodeHighlighter  code={code1} language="html"  addclassName="mt-3 mb-3" copie={true}/>
    </article>
    <article>
        <h2 className="title-h2">2. تكبير الخط </h2>
        <p className="style_divv">
            تُستخدم علامة <kbd>&lt;big&gt;</kbd> في <b>HTML</b> لزيادة حجم النص المحدد بمقدار واحد أكبر من النص المحيط. في <b>HTML 5</b> ، تجدر الإشارة إلى أنه تم إهمال العنصر <kbd>&lt;big&gt;</kbd> في HTML5، ولا يُنصح باستخدامه. بدلاً من ذلك، يوصى باستخدام CSS للتحكم في حجم النص.
        </p>
        <CodeHighlighter  code={code2} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html4_small_big} alt="big code" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html4_small_big_2} alt="big result" className="img"/>
        </div>
        <ul>
            <li>لا تلقي بالا لذالك  لأنه يمكنك ستعمال <b>CSS</b> في تحكم بحجم زر كما تريد <small><small>(ستتعلم دالك خلال دروس CSS)</small></small></li>
        </ul>
    </article>

</section>
)
}