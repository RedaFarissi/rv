import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./LineHeight.css"

export default function LineHeight(props){
    const codeExemple= { 
        css:`#a,#b,#c{ width:400px; background-color:yellow; border:2px solid black; }
#a{ line-height:25px; }
#b{ line-height:55px; }
#c{ line-height:-20px;} `,
    head:`  
        <link rel="stylesheet" href="./index.css">`,
        code:`      <p id="a">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
    </p>
    <hr/>
    <p id="b">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
    </p>
    <hr/>
    <p id="c">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
    </p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Line-Height </h1>
    <article>
        <p class="style_divv mt-5">
            تحدد خاصية <b>line-height</b> ارتفاع الخط.<br/>
            <div class="alert alert-danger mt-3">
                <b>ملاحظة</b> : القيم السلبية غير مسموح بها.
            </div>
        </p>
        <div class="mital">متال : </div>
        <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <p id="css-line-height-ex1-a">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
            <hr/>
            <p id="css-line-height-ex1-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
            <hr/>
            <p id="css-line-height-ex1-c">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
        </Result>
    </article>
</section>
)
}