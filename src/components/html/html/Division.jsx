import { CodeHighlighter ,  Result} from "../../path"

export default function Division(props){
    const code = `<div id="id_name" className="class_name"> content </div>`
    const codeExemple = [`    <div id="div-element">
            <h2> This is Heading in div element </h2>
            <p>  This is Paragraph in div element </p>
    </div>`,`
    <style>
            #div-element {
                background-color:lightblue;
                border: 5px outset red; 
                text-align: center;
                padding:30px;    
                margin:30px
            }   
    </style>`
    ]
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML Division (div)</h1>
    <article>
        <p className="style_divv mt-5">
            الوسم <b>div</b> هو وسم زوجي يكتب على الشكل التالي :  <kbd>&lt;div&gt; content &lt;/div&gt;</kbd>
            <ul>
                <li>يستخدم الوسم <kbd>&lt;div&gt;</kbd> كحاوية لعناصر <b>HTML</b> - تنسيق تنسيقها بعد ذلك باستخدام <b>CSS</b>. أو معالجتها باستخدام <b>JavaScript</b>.</li>
                <li>يتم تصميم علامة <kbd>&lt;div&gt;</kbd> بسهولة باستخدام سمة <b>class</b> أو <b>id</b>.</li>
                <li>عند بداية الوسم <kbd>&lt;div&gt;</kbd> يتم بدأ في سطر جديد .</li>
                <li>عند نهاية الوسم <kbd>&lt;div&gt;</kbd> يتم العودة إلى سطر جديد .  </li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple[0]} head={codeExemple[1]} language="html" is_html={true} title="Division" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Division' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
               <div style={{backgroundColor:"lightblue", border: "5px outset red", textAlign:"center",padding:"30px",margin:"30px"}}>
                    <h2> This is Heading in div element </h2>
                    <p>  This is Paragraph in div element </p>
               </div>
            </Result>
        </div>
    </article>
</section>
)
}