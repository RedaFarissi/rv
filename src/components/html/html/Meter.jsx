import { CodeHighlighter ,  Result} from "../../path";

export default function Meter(props){
    const code = `<meter max="max_value" min="min_value" value="value"></meter>`
    const codeExemple1 = `    <meter value="3" min="0" max="10" ></meter>`       
    const codeExemple2 = `    <meter id="disk_c" value="33" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
    <meter id="disk_c" value="66" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
    <meter id="disk_c" value="99" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>`     
    return(
<>
    <h1 className="heading-style"> HTML Meter </h1>
    <article className="mt-5">
        <h2 className="title-h2">1. الوسم meter</h2>
        <p className="style_divv">
            يعرف الوسم <kbd>&lt;meter&gt;</kbd> قياسا مقياسيا داخل نطاق معروف، أو قيمة كسرية. وهذا ما يعرف أيضا باسم مقياس .<br/>
            يجب إضافة السمات التالية إلى  الوسم <kbd>&lt;meter&gt;</kbd> :<br/>
            <ul>
                <li><b className="text-success">max :</b> لتحديد القيمة القصوى .</li>
                <li><b className="text-success">min :</b> لتحديد القيمة الدنيا  .</li>
                <li><b className="text-success">value :</b> لتحديد القيمة  .</li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
        <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple1} language="html" is_html={true} title="Meter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Meter' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <meter value="3" min="0" max="10" ></meter>
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2.  السمات المستعملة  </h2>
        <div className="style_divv">
            في المتال السابق إستعملنا السمات   <b>max</b> و <b>min</b> و <b>value</b> ولاكن تعتبر سمات أساسية ليضهر العنصر بشكل صحيح .<br/>
            توجد سمات تستعمل مع الوسم <kbd>&lt;meter&gt;</kbd> وذالك لتبيين الفرق بين القيم .  هذه السمات هي :<br/>
            <ul>
                <li><b className="text-success">low :</b> تحدد أن كل العناصر الذي تأخد قيمة <b>value</b> أصغر من قيمة <b>low</b> تكون بالون الأحمر  .<br/></li>
                <li><b className="text-success">high:</b> تحدد أن كل العناصر الذي تأخد قيمة <b>value</b> أصغر من قيمة <b>high</b> تكون بالون الأصفر  <br/></li>
                <li><b className="text-success">optimum :</b> تحدد أن كل العناصر الذي تأخد قيمة <b>value</b> أصغر من قيمة <b>optimum</b> تكون بالون الأخضر (قيمة فتراضية) . <br/></li>
            </ul>
                     </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple2} language="html" is_html={true} title="Meter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Meter' logo={props.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <meter id="disk_c" value="33" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
                <meter id="disk_c" value="66" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
                <meter id="disk_c" value="99" min="0" max="100" low="50" high="70" optimum="90"></meter><br/>
            </Result>
        </div>
        <ul><li>يمكن تصميم الشكل ليكون أكتر إحترافية عبر لغة <b>CSS</b> .</li></ul>
    </article>
</>
    )
}