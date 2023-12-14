import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Booleans(){
    const codeExemple1= { 
    code: `     <h2 id="id1"></h2>
     <h2 id="id2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let x = 9;
let y = 9;
document.getElementById("id1").innerHTML = (x > y);
document.getElementById("id2").innerHTML += (x >= y);`
    }
    const codeExemple2= { 
    code: `     <h2 id="id"></h2>
    
     <script src="./index.js"></script>`,
    script:`let x = 9;
let y = 5;
document.getElementById("id").innerHTML = Boolean(x > y);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Booleans</h1>
    <article>
        <h2 className="title-h2">1. <bdi> true - false</bdi></h2>
        <div className="style_divv">
            تمثل <b>JavaScript Boolean</b> إحدى قيمتين: <b>true</b> أو <b>false</b>.<br/>
            في كثير من الأحيان ، في البرمجة ، ستحتاج إلى نوع بيانات لا يمكن أن يحتوي إلا على قيمة واحدة من قيمتين ، مثل :
            <ul dir="ltr">
                <li>TRUE / FALSE</li>
            </ul>
        </div>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>false</h2>
            <h2>true</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. <bdi>The Boolean() Function</bdi></h2>
        <p className="style_divv">
            يمكنك استخدام الدالة <bdi><b>Boolean()</b></bdi> لمعرفة ما إذا كان التعبير (أو المتغير) صحيحًا
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>true</h2>
        </Result>
    </article>
</section>
    )
}