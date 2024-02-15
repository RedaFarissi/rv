import { CodeHighlighter ,  Result} from "../../path";
export default function Break(props){
const codeExemple = `1. HTML 
2. CSS
3. JavaScript
4. PHP <br/>
5. MYSQL <br/>
6. Laravel <br/>
7. API`

    return(
    <section className="section-conetent">
        <h1 className="heading-style"> HTML Break (br)</h1>
        <article className="mt-5">
            <p className="style_divv">
             الوسم <kbd>&lt;br&gt;</kbd> لا يحتاج إلى وسم إغلاق <bdi><kbd>&lt;br/&gt;</kbd></bdi> مثل الوسوم الأخرى.<br/>
                النزول على سطر جديد هو أمر تفعله بداخل الفقرات العادية و في القصائد بشكل خاص  <b>br</b> إختصار لكلمة <b>Break</b> التي يقصد بها في حالتنا إيقاف العرض على نفس السطر
                <ul><li>مع <b>HTML</b> انت لا يمكنك تغيير النتائج الظاهرة بواسطة اضافة مسافات فارغة او سطور اضافية داخل البرمجة حيث سيزيل المتصفح كل هذه الاضافات عند عرض الصفحة دعنا نجرب في مثالنا التالي</li></ul>
            </p>
            <div className="sum_exemple_style">
                <div className="mital">متال : </div>
                <CodeHighlighter  code={codeExemple} language="html" is_html={true} file_name="index.html" title="Break" addClass="mt-3 mb-3" copie={true}/>
                <Result title='Heading' file_name="index.html" logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                    1. HTML 
                    2. CSS
                    3. JavaScript
                    4. PHP <br/>
                    5. MYSQL <br/>
                    6. Laravel <br/>
                    7. API
                </Result>
            </div>
        </article>
    </section>
)
}