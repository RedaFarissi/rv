import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Webkit-text-stroke.css";

export default function WebkitTextStroke(props){
    const codeExemple= { 
        css:`.para {
    font-size: 52px;
    -webkit-text-stroke: 2px green;
    color: red;
}`,
    head:`  
   <link rel="stylesheet" href="./index.css" />`,
    code:`      <p class="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>`
    }

    return (
        <section className="section-conetent">
            <h1 className="heading-style"> CSS -Webkit-Text-Stroke </h1>
            <article>
                <p class="style_divv mt-5">
                    تحدد الخاصية  <bdi><b>-webkit-text-Stroke</b></bdi> عرض ولون حدود الحروف لأحرف النص. هذه خاصية اختصار للخصائص الطويلة <br/><bdi><b>-webkit-text-stroke-width</b></bdi> و <bdi><b>-webkit-text-stroke-color</b></bdi>.
                </p>
                <div class="mital">متال  :  </div>
                <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
                <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS -webkit-text-Stroke" addClass="mt-3 mb-3" copie={true}/>
                <Result title='CSS -webkit-text-Stroke' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
                    <p class="Webkit-text-stroke-para"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </Result>
            </article>
        </section>        
        )
}