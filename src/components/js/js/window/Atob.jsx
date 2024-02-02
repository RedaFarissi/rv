import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Atob(){
    // function buton(){
    //     let id = document.getElementById("h2")
    //     let value = document.getElementById("text").value
    //     let text = btoa(value);
    //     id.innerHTML =  "encode :  " + btoa(text) + "<br/>"
    //     id.innerHTML += "decode :  " + atob(text)
    // }
    const codeExemple1= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")

let encode = window.btoa("Reda Eskouni")
result.innerHTML = "encode : " + encode

let decodes = window.atob(encode)
result.innerHTML += "<br/><br/> decodes : " + decodes`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript atob</h1>
    <article className="mt-5">
        <p className="style_divv">
            تقوم طريقة <bdi><b>atob()</b></bdi> بفك تشفير سلسلة تم تشفيرها بواسطة طريقة <bdi><b>btoa()</b></bdi>.
            <CodeHighlighter code={`window.atob(encoded)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="atob" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='atob' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>encode : UmVkYSBFc2tvdW5p<br/><br/>decodes : Reda Eskouni</h2>
        </Result>

    </article>
</section>
    )
}