import { CodeHighlighter ,  Result} from "../../path";

export default function ListsUnordered(props){
    const code = `<ul>
    <li> content </li>
    <li> content </li>
</ul>`
    const codeExemple1 = `<ul>
    <li>html</li>
    <li>css</li>
    <li>js</li>
    <li>php</li>
</ul>`
    const codeExemple2 = `        <ul type="circle">
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>php</li>
        </ul>
        <ul type="square">
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>php</li>
        </ul>
        <ul type="disc">
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>php</li>
        </ul>`
    const codeExemple3 = `<ul>
    <li>Coffee</li>
    <li>Tea
      <ul>
        <li>Black tea</li>
        <li>Green tea
          <ul>
            <li>China</li>
            <li>Africa</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Milk</li>
  </ul>`
    return(
<>
    <h1 className="heading-style"> HTML Lists Unordered ul </h1>
    <article  className="mt-5">
        <h2 className="title-h2">1. شرح الوسم ul </h2>
        <p className="style_divv">
            نستخدم الوسم <kbd>&lt;ul&gt;</kbd>  لإنشاء  قائمة (نقطية) غير مرتبة.<br/>
            نستخدم الوسم <kbd>&lt;li&gt;</kbd>  داخل الو سم <kbd>&lt;ul&gt;</kbd> لتفرقة بين المحتوى 
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple1} language="html" is_html={true} title="Lists Unordered" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Lists Unordered' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <ul className="m-0">
                    <li>html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>php</li>
                </ul>
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. السمة type </h2>
        <div className="style_divv">
        يتم استخدام سمة <b>type</b>  مع <kbd>&lt;ul&gt;</kbd> في <b>HTML</b> لتحديد نوع العلامة المستخدمة في القائمة
        </div>
            <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple2} language="html" is_html={true} title="Lists Unordered" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Lists Unordered' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <ul type="circle">
                    <li>html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>php</li>
                </ul>
                <ul type="square">
                    <li>html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>php</li>
                </ul>
                <ul type="disc">
                    <li>html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>php</li>
                </ul>
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. القوائم المتداخلة </h2>
        <ul><li> معلومة : يمكن كتابة قوائم متداخلة كما هو موضح في الأسفل .</li></ul>
        <CodeHighlighter file_name="index.html" code={codeExemple3} language="html" is_html={true} title="Lists Unordered" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Lists Unordered' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <ul>
              <li>Coffee</li>
              <li>Tea
                <ul>
                  <li>Black tea</li>
                  <li>Green tea
                    <ul>
                      <li>China</li>
                      <li>Africa</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Milk</li>
            </ul>
        </Result>  
    </article>
</>
  )
}