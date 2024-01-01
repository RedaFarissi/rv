import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Body(){
    const codeExemple1= { 
    head:`
    <style>
      h2{
        color: red;
      }
      p{
        padding: 20px 9px; 
        border: 0.5px solid black;
      }
    </style>`,
    code: `      <h2> Heading </h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  
     <script src="./index.js"></script>`,
     script:`document.body.innerHTML += "<div style='background-color:black; color: white; font-size:30px;'>Reda Eskouni</div>"`
    }
    const codeExemple2= { 
    code: `        <h2 style="color:red"> Heading </h2>
     <p style="padding: 20px 9px; border: 0.5px solid black;">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
 
     <script src="./index.js"></script>`,
    script:`document.body.innerHTML = "<div> Hello Word </div>"
document.body.style = "background-color: yellow;border: 4px solid black; margin: 4px;"`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript body</h1>
    <article>
        <p className="style_divv mt-5">
         تقوم خاصية <b>body</b> بتعيين أو إرجاع عنصر المستند   <kbd>&lt;body&gt;</kbd> 
            <CodeHighlighter code={`document.body`} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert alert-danger mt-3">
                <b> تحذير </b>: يؤدي تعيين خاصية <b>body</b> إلى الكتابة فوق جميع العناصر الموجودة في المستند {"<"}body{">"}.
            </div>
            <div className="alert alert-warning mt-3">
                <b> ملاحظة </b>: الفرق بين <bdi>document.body</bdi> ة <bdi>document.documentElement</bdi>
                <ul>
                    <li> يُرجع document.body العنصر <kbd>&lt;body&gt;</kbd>. </li>
                    <li> تُرجع document.documentElement العنصر <kbd>&lt;html&gt;</kbd>.</li>
                </ul>
            </div>
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="body" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="body" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 style={{color:"red"}}> Heading </h2>
            <p style={{padding: "20px 9px", border: "0.5px solid black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div style={{backgroundColor:"black", color: "white", fontSize:"30px"}}>Reda Eskouni</div>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="body" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="body" styleAdd="p-0 h-100 bg-yellow" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div  style={{backgroundColor: "yellow",paddingTop:"9px"}}>
                <div style={{backgroundColor: "yellow",border: "4px solid black", margin: "4px"}}> Hello Word </div>
            </div>
        </Result>
    </article>
</section>
    )
}