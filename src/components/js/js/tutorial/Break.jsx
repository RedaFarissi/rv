
import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Break(){
    const code1 = `for (i = 0 ; i > 10 ; i++){
    if(condition){break}
}`
    const code2 = `for (i = 0 ; i > 10 ; i++){
    if(condition){continue}
}`



    const codeExemple1= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let i
for(i=0; i<9 ;i++){
    if (i==4){
        break;
    }else{
        document.getElementById("h2").innerHTML += \`i = \${i}<br/>\` 
    }   
}`
    }
    const codeExemple2= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let i;
for(i=0; i<9 ;i++){
    if (i==4){
      continue;
    }else{
        document.getElementById("h2").innerHTML += \`i = \${i}<br/>\` 
    }   
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Break</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. break</h2>
        <p className="style_divv">
            العبارة break تقفز خارج من الحلقة .
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            لقد رأيت بالفعل تعليمة <b>break</b> المستخدمة في فصل سابق من هذا البرنامج التعليمي. تم استخدامه للقفز من عبارة <b>switch</b>.
            يمكن أيضًا استخدام تعليمة <b>break</b> للقفز من الحلقة
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Break" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Break' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>i = 0<br/>i = 1<br/>i = 2<br/>i = 3</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. continue </h2>
        <p className="style_divv">
            تكسر تعليمة المتابعة تكرارًا واحدًا (في الحلقة) ، إذا حدث شرط محدد ، وتستمر مع التكرار التالي في الحلقة.
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Break" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Break' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>i = 0<br/>i = 1<br/>i = 2<br/>i = 3<br/>i = 5<br/>i = 6<br/>i = 7<br/>i = 8</h2>
        </Result>
    </article>
</section>
    )
}