import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Meter(){
    const code = `<meter max="max_value" min="min_value" value="value"></meter>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color"> HTML Meter </h1>
    <article>
        <h2 className="title-h2">1. الوسم meter</h2>
        <p className="style_divv">
            يعرف الوسم <kbd>&lt;meter&gt;</kbd> قياسا مقياسيا داخل نطاق معروف، أو قيمة كسرية. وهذا ما يعرف أيضا باسم مقياس .<br/>
            يجب إضافة السمات التالية إلى  الوسم <kbd>&lt;meter&gt;</kbd> :<br/>
             max : لتحديد القيمة القصوى .<br/>
             min : لتحديد القيمة الدنيا  .<br/>
             value : لتحديد القيمة  .<br/>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
        <div className="mital">متال : </div>
        <h4 className="green"> الكود </h4>
        <img src={images.html38_meter} alt="mater code" className="img"/>
        <h4 className="green"> بعد تشغيل الكود </h4>
        <img src={images.html38_meter_2} alt="meter result" className="img"/>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2.  السمات المستعملة  </h2>
        <div className="style_divv">
            في المتال السابق إستعملنا السمات   max و min و value ولاكن تعتبر سمات أساسية ليضهر العنصر بشكل صحيح .<br/>
            توجد سمات تستعمل مع الوسم <kbd>&lt;meter&gt;</kbd> وذالك لتبيين الفرق بين القيم .  هذه السمات هي :<br/>
            low : تحدد أن كل العناصر الذي تأخد قيمة value أصغر من قيمة low تكون بالون الأحمر  .<br/>
            high: تحدد أن كل العناصر الذي تأخد قيمة value أصغر من قيمة high تكون بالون الأصفر  <br/>
            optimum : تحدد أن كل العناصر الذي تأخد قيمة value أصغر من قيمة optimum تكون بالون الأخضر (قيمة فتراضية) . <br/>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html38_meter2} alt="mater code" className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <img src={images.html38_meter2_2} alt="meter result" className="img"/>
        </div>
        <ul><li>يمكن تصميم الشكل ليكون أكتر إحترافية عبر لغة <b>CSS</b> .</li></ul>
    </article>
</section>
)
}