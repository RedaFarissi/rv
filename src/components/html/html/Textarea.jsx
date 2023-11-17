import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function Italic(){
    const code = `<textarea name="" id="" > </textarea>`
    return(
<section className="section-conetent">
    <h1 className="heading-style-html"> HTML Textarea </h1>
    <article>
        <h2 className="title-h2">1. الوسم textarea </h2>
        <p className="style_divv">
        يعرف الوسم  <kbd>&lt;textarea&gt;</kbd> عنصر تحكم إدخال نص متعدد الأسطر و هو وسم زوجي  . <br/>
        غالبا ما يستخدم <kbd>&lt;textarea&gt;</kbd> في نموذج ، لجمع مدخلات المستخدم مثل التعليقات  .<br/>
        يمكن أن تحتفظ منطقة النص بعدد غير محدود من الأحرف، ويتم عرض النص بخط ثابت العرض (عادة Courier).
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html39_textarea} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                Review codding : <textarea>default text</textarea> <button>OK</button>
            </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. السمات المستعملة   </h2>
        <h5>1. السمة  placeholder</h5>
        <div className="style_divv">
            تستعمل هذه السمة لتلميح (يضهر نص توضيحي تقوم بتحديده بنفسك داخل السمة placeholder ) و يختفي بعد كتابة أول حرف .
        </div>
        <h5>2. السمة  autofocus</h5>
        <div className="style_divv">
            تستعمل هذه السمة لتركيز التلقائي على الوسم <kbd>&lt;textarea&gt;</kbd>  .
        </div>
        <h5>3. السمة  cols</h5>
        <div className="style_divv">
            تستعمل هذه السمة لتحديد عدد الأحرف التي لا تريد تجاوزها في كل سطر (إذا تجاوز المستخدم الحد الأقصى الدي حددته يقوم المتصفح بالعودة إلى سطر تلقائيا)   .
        </div>
        <h5>4. السمة  rows</h5>
        <div className="style_divv">
            تستعمل هذه السمة لتحديد عدد الأسطر التي لا تريد تجاوزها كحد أقصى .
        </div>
        <h5>5. السمة  maxlength</h5>
        <div className="style_divv">
            تستعمل هذه السمة لتحديد عدد الأحرف التي لا تريد تجاوزها كحد أقصى  .
        </div>
        <h5>5. السمة  required </h5>
        <div className="style_divv">
            تستعمل هذه السمة لتحديد أن الحقل يجب ملأه بشكل إجباري   .
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html39_textarea2} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <textarea maxlength="20" placeholder="entrez votre email ici"></textarea>
                <textarea row="1" cols="22"></textarea><button>OK</button>
            </div>
        </div>
    </article>
</section>
)
}
