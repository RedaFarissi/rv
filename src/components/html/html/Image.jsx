import { CodeHighlighter ,  Result} from "../../path";

export default function Image(props){
    const code = `<img src="name_img.type" alt="description"/>`
    const codeExemple1 = `      <img src="./logo_html.png" width="50%" alt="description"/>`
    const codeExemple2 = `      <img src="./logo/logo.png" width="50%" alt="description"/>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML img</h1>
    <article>
        <p className="style_divv mt-5">
            الوسم  <kbd>&lt;img&gt;</kbd> هو وسم  فردي اي ليس له وسم إغلاق . ويستعمل لإضافة الصور لموقعك .  <br/>
            <ul>
                <li> لعرض الصورة داخل صفحتك يجب عليك إستخدام سمة المصدر <b>src attribute</b> حيث أن <b>src</b> هي إختصار لـ <b>source</b> .</li>
                <li> نستخدم الوسم <kbd>&lt;img&gt;</kbd> على هذا النحو <kbd>&lt;img src="url"&gt;</kbd> لعرض صورة في الصفحة. مكان الكلمة <b>url</b> نضع مسار الصورة التي نريد عرضها.</li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple1} language="html" title="Image" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Image' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <img src={props.html_logo} width="50%" alt="description"/> 
            </Result>
            <ul>  
                <li> يمكنك تحكم بحجم صورة وتعديل على شكلها بستخدام <b>CSS</b> . </li>
                <li> السمة <b>alt</b> تستعمل  لإضهار رسالة للمستعمل في حالة حدت مشكل ولم يتمكن لمتصفح من عرض الصورة .</li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال 2 : </div>
            <ul><li>قمنا بكتابة مسار خاطئ لصورة لتتمكن من رؤية فائدة <b>alt</b></li></ul>
            <CodeHighlighter file_name="index.html" code={codeExemple2} language="html" title="Image" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Image' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <img src="logo/logo.png" width="50%" alt="description"/> 
            </Result>
        </div>
    </article>
</section>
)
}