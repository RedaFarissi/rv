import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./AlignSelf.css"

export default function AlignSelf(props){
    const codeExemple1= { 
        head:`  
        <style> 
            #div {
                border: 2px solid black;
                height: 400px;
                display: flex;
                align-items: stretch;
            }
            #div div {
                width: 15%;
                height: 90px;
            }   
        </style>`,
        code:`      <div id="div">
            <div style="background-color: blue;"></div>
            <div style="background-color: green; align-self: center;"></div>
            <div style="background-color: violet;"></div>
            <div style="background-color: red; align-self: end;"></div>
          </div>`
        }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Align-Self </h1>
    <article>
        <p className="style_divv">
            تحدد الخاصية <b>align-self</b> المحاذاة للعنصر المحدد داخل الحاوية المرنة.  <br/>
            <b>ملاحظة</b> : تتجاوز الخاصية <b>align-self</b> خاصية <b>align-items</b> للحاوية المرنة.     
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Align-Items" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Align-Items' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-align-self-ex1-div">
                <div style={{backgroundColor:"blue"}}></div>
                <div style={{backgroundColor:"green", alignSelf: "center"}}></div>
                <div style={{backgroundColor:"violet"}}></div>
                <div style={{backgroundColor:"red",alignSelf: "end"}}></div>
            </div>
        </Result>
    </article>
</section>
    )
}