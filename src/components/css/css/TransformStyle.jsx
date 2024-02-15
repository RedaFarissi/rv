import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./TransformStyle.css"

export default function TransformStyle(props){
    const codeExemple= { 
    css:`#div1 {
    position: relative;
    height: 200px;
    width: 200px;
    margin: 100px;
    padding: 10px;
    border: 1px solid black;
}   

#div2 {
    padding: 50px;
    position: absolute;
    border: 1px solid black;
    background-color: red;
    transform: rotateY(60deg);
    transform-style: preserve-3d;
}

#div3 {
    padding: 40px;
    position: absolute;
    border: 1px solid black;
    background-color: yellow;
    transform: rotateY(-60deg);
}`,
    head:`  
   <link rel="stylesheet" href="./index.css" />`,
    code:`      <h1>The transform-style Property</h1>

      <div id="div1">
          <div id="div2">
              HELLO
              <div id="div3">YELLOW</div>
          </div>
      </div>`
    }
    return (
    <section className="section-conetent">
        <h1 className="heading-style"> CSS Transform-Style </h1>
        <article className="mt-5">
            <p className="style_divv">
                تحدد خاصية نمط التحويل كيفية عرض العناصر المتداخلة في مساحة ثلاثية الأبعاد.<br/>
                يجب استخدام هذه الخاصية مع خاصية التحويل.<br/>
                لفهم خاصية نمط التحويل بشكل أفضل، شاهد العرض التوضيحي.<br/><br/>
                تأخذ خاصية <b>transform-style</b> القيم التالية:
                <ul>
                    <li><b className="text-success">flat :</b> يحدد أن العناصر الفرعية لن تحافظ على موضعها ثلاثي الأبعاد. هذا هو الافتراضي</li>
                    <li><b className="text-success">preserve-3d :</b> يحدد أن العناصر الفرعية ستحافظ على موضعها ثلاثي الأبعاد</li>
                    <li><b className="text-success">initial :</b> يضبط هذه الخاصية على قيمتها الافتراضية. اقرأ عن الأولي</li>
                    <li><b className="text-success">inherit :</b> يرث هذه الخاصية من العنصر الأصلي الخاص بها. اقرأ عن الميراث</li>
                </ul>
            </p>
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
            <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS transform-style" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS transform-style' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
                <h1>The transform-style Property</h1>
                <div id="transform-style-div1">
                    <div id="transform-style-div2">
                        HELLO
                        <div id="transform-style-div3">YELLOW</div>
                    </div>
                </div>
            </Result>
        </article>
    </section>        
    )
}