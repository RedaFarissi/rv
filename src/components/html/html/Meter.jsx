import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path";

export default function Meter(props){
    const code = `<meter max="max_value" min="min_value" value="value"></meter>`
    const codeExemple1 = `    <meter value="3" min="0" max="10" ></meter>`       
    const codeExemple2 = `    <meter id="disk_c" value="33" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
    <meter id="disk_c" value="66" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
    <meter id="disk_c" value="99" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>`     
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
            <CodeHighlighter file_name="index.html" code={codeExemple1} language="html" title="Meter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Meter' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <meter value="3" min="0" max="10" ></meter>
            </Result>
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
            <CodeHighlighter file_name="index.html" code={codeExemple2} language="html" title="Meter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Meter' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <meter id="disk_c" value="33" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
                <meter id="disk_c" value="66" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
                <meter id="disk_c" value="99" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
            </Result>
        </div>
        <ul><li>يمكن تصميم الشكل ليكون أكتر إحترافية عبر لغة <b>CSS</b> .</li></ul>
    </article>
</section>
)
}