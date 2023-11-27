import { CodeHighlighter ,  Result} from "../../path";
import images from  "../imagesCss";
import "./Height.css"

export default function Height(props){
    const codeExemple1= { 
    head:`  
   <style> 
       img{
           height: 120px;
       }    
   </style>`,
    code:`      <img src="./css_logo.png" width="20%" alt="css logo" />`
    }
    const codeExemple2= { 
        css:`div{
    background-color:red;
    color: white;
    height: 300px;
    width: max-content;
}`,
    head:`  
        <link rel="stylesheet" href="./index.css">`,
        code:`      <div> Hello Word </div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Height </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد خاصية <b>height</b> ارتفاع العنصر.<br/>
            لا يتضمن ارتفاع العنصر المساحة المتروكة أو الحدود أو الهوامش .<br/>
            إذا كان الارتفاع: تلقائي ؛ سيقوم العنصر تلقائيًا بضبط ارتفاعه للسماح بعرض محتواه بشكل صحيح.<br/>
            إذا تم تعيين الارتفاع على قيمة عددية (مثل وحدات <b>px</b> ، <b>vh</b> , <b>em</b> ، <b>%</b>) ، إذا لم يكن المحتوى مناسبًا للارتفاع المحدد ، فسيتم تجاوزه. يتم تحديد كيفية تعامل الحاوية مع المحتوى الفائض بواسطة خاصية <b>overflow</b>.<br/>
            ملاحظة: تتجاوز خصائص <b>min-height</b> و <b>max-height</b> خاصية الارتفاع .<br/>
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <img src={images.css_logo}  className='css-height-ex1' alt="css logo" />
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div className="css-height-ex2">Hello Word</div>
        </Result>
    </article>
</section>
   )
}
