import { CodeHighlighter ,  Result} from "../../path";

export default function ListsDefinitionul(props){
    const code = `<dl>
    <dt> title1 </dt>
       <dd> content </dd>
       <dd> content </dd>
    <dt> title2 </dt>
       <dd> content </dd>
       <dd> content </dd>
 </dl> `
    const codeExemple = `     <dl>
          <dt>1. html</dt>
          <dd>
            The HyperText Markup Language, or HTML is the standard markup language for
            documents designed to be displayed in a web browser.
          </dd>
          <dt>2. css</dt>
          <dd>
            Cascading Style Sheets (CSS) is a style sheet language used for describing
            the presentation of a document written in a markup language such as HTML.
          </dd>
    </dl>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML dl</h1>
    <article>
        <p className="style_divv mt-5">
            يستخدم الوسم <kbd>&lt;dl&gt;</kbd> في <b>HTML</b> لتمثيل قائمة الوصف. يستخدم هذا الوسم مع الوسم <kbd>&lt;dt&gt;</kbd> و <kbd>&lt;dd&gt;</kbd> . 
            <ul>
                <li style={{marginBottom:"9px"}}>يستخدم الوسم  <kbd>&lt;dt&gt;</kbd> في <b>HTML</b> لتحديد عناوين  قائمة الوصف. يتم استخدامه داخل الوسم <kbd>&lt;dl&gt;</kbd>. وعادة ما يتبعه الوسم <kbd>&lt;dd&gt;</kbd></li>
                <li style={{marginBottom:"9px"}}>تشير العلامة <kbd>&lt;dd&gt;</kbd> في <b>HTML</b> إلى وصف التعريف وتستخدم للإشارة إلى وصف أو تعريف عنصر في قائمة الوصف. يمكن إدراج الفقرات وفواصل الأسطر والصور والروابط والقوائم داخل علامة <kbd>&lt;dd&gt;</kbd></li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple} language="html" title="Underline" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Underline' logo={props.html_logo}  route="C:/Users/SURFACE BOOK/Desktop/html/index.html">
                <dl>
                  <dt>1. html</dt>
                        <dd className="ms-5">
                          The HyperText Markup Language, or HTML is the standard markup language for
                          documents designed to be displayed in a web browser.
                        </dd>
                  <dt>2. css</dt>
                  <dd className="ms-5">
                    Cascading Style Sheets (CSS) is a style sheet language used for describing
                    the presentation of a document written in a markup language such as HTML.
                  </dd>
                </dl>
            </Result>
        </div>
        <ul>
            <li> يمكن إستخدام <b>CSS</b> لتصميم شكل جميل <small> ستتعلم ذالك خلال دروس <b>CSS</b></small> </li>
        </ul>
    </article>
</section>
)
}