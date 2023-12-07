import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./BoxSizing.css"

export default function BoxSizing(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #div1 {
            width: 50%;
            height: 350px;
            border: 8px solid blue;
            margin: auto;
        }
        #div2 {
            width: 100%;
            height: 80px;
            border: 17px solid black;
            box-sizing: content-box;
        }    
    </style>`,
    code:`      <div id="div1">
            <div id="div2"></div>
      </div>`
    }
    const codeExemple2= { 
        head:`  
        <style> 
            #div1 {
                width: 50%;
                height: 350px;
                border: 8px solid blue;
                margin: auto;
            }
            #div2 {
                width: 100%;
                height: 80px;
                border: 17px solid black;
                box-sizing: border-box;
            }    
        </style>`,
        code:`      <div id="div1">
                <div id="div2"></div>
          </div>`
        }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Box-Sizing </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد خاصية <b>Box-sizing</b> كيفية حساب العرض والارتفاع الكليين لعنصر ما . <br/>
            تقبل الخاصية  <b>Box-sizing</b> القيم :
            <ul>
                <li><b>content-box</b> : قيمة إفتراضية أو قيمة أولي من خلال هذه القيمة ال <b>border</b> و <b>padding</b> ليسو ضمن العرض المحدد .</li>
                <li><b>border-box</b> :   من خلال هذه القيمة ال <b>border</b> و <b>padding</b>  ضمن العرض المحدد .</li>
            </ul>
        </p>
        <div className="mital"> متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Box-Sizing" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Box-Sizing' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-box-sizing-ex1-div1">
                <div id="css-box-sizing-ex1-div2"></div>
            </div>
        </Result>
        <div className="mital"> متال 2 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Box-Sizing" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Box-Sizing' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-box-sizing-ex2-div1">
                <div id="css-box-sizing-ex2-div2"></div>
            </div>
        </Result>
    </article> 
</section>
    )
}