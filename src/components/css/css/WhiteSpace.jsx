import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./WhiteSpace.css"

export default function WhiteSpace(props){
    const codeExemple= { 
        css:`.a{ 
    white-space: nowrap; 
}
.b{ 
    white-space: normal; 
}
.c{ 
    white-space: pre; 
}`,
    head:`  
        <link rel="stylesheet" href="./index.css">`,
        code:`      <h1>The white-space Property</h1>
      <h2 style="color:red">white-space: nowrap:</h2>
      <p class="a">
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
      </p>
      <h2 style="color:red">white-space: normal:</h2>
      <p class="b">
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
      </p>
      <h2 style="color:red">white-space: pre:</h2>
      <p class="c">
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
        This is some text. This is some text. This is some text.
      </p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS  White-Space </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد خاصية <b>white-space</b> كيفية معالجة المسافة البيضاء داخل عنصر.<br/>
            تقبل الخاصية <b>white-space</b> القيم التالية :<br/>
            <ul dir='ltr'>
                <li><b>nowrap</b>  </li>
                <li><b>normal</b> </li> 
                <li><b>pre</b>  </li>
            </ul> 
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS White-Space" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS White-Space' styleAdd="css-white-space-ex1-overflow" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h1>The white-space Property</h1>
            <h2 style={{color:"red"}}>white-space: nowrap:</h2>
            <p className="css-white-space-ex1-a">
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
            </p>
            <h2 style={{color:"red"}}>white-space: normal:</h2>
            <p className="css-white-space-ex1-b">
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
              This is some text. This is some text. This is some text.
            </p>
            <h2 style={{color:"red"}}>white-space: pre:</h2>
            <p >
                This is some text. This is some text. This is some text.<br/>
                This is some text. This is some text. This is some text.<br/>
                This is some text. This is some text. This is some text.<br/>
                This is some text. This is some text. This is some text.
            </p>
        </Result>
    </article>
</section>
)
}