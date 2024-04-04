import { CodeHighlighter ,  Result} from "../../path";

export default function Span(props){
    const code = `<span id="id_name" class="class_name"> content </span>`
    const codeExemple = `     <span style="font-size:xx-large;color:red;">M</span>other has <span style="color:blue">blue</span> eyes.`

    return(
<>
    <h1 className="heading-style">HTML Span</h1>
    <article className="mt-5">
        <p className="style_divv mt-5">
            الوسم <b>span</b> هو وسم زوجي يكتب على الشكل التالي :<kbd>&lt;span&gt; content &lt;/span&gt;</kbd><br/>
            <ul>
                <li> الوسم <kbd>&lt;span&gt;</kbd> عبارة عن حاوية مضمنة تُستخدم لترميز جزء من نص أو جزء من مستند.</li>
                <li>يتم تصميم الوسم <kbd>&lt;span&gt;</kbd> بسهولة بواسطة <b>CSS</b> أو التلاعب بها باستخدام <b>JavaScript</b> باستخدام سمة <b>class</b> أو <b>id</b>.</li>
                <li>الوسم <kbd>&lt;span&gt;</kbd> لا يقوم بالعودة إلى سطر تلقائيا .</li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Span" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Span' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <span style={{fontSize:"xx-large",color:"red"}}>M</span>other has <span style={{color:"blue"}}>blue</span> eyes.
        </Result>
    </article>
</>
)
}