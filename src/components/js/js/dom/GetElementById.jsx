import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function GetElementById(){
        const codeExemple1= { 
    code: `      <h2 id="id1">heading with id1</h2>
     <div id="id2">div with id2</div>
     <input id="id3" type="text" value="input with id3"/>
     <div id="id4" class="alert alert-primary"></div>
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`const a = document.getElementById("id1").id;
const b = document.getElementById("id2").innerHTML;
const c = document.getElementById("id3").value;
const d = document.getElementById("id4").classList;

document.getElementById("result").innerHTML = a + "<br>";
document.getElementById("result").innerHTML += b + "<br>";
document.getElementById("result").innerHTML += c + "<br>";
document.getElementById("result").innerHTML += d + "<br>";`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript getElementById</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>getElementById()</b></bdi> عنصرًا بقيمة محددة.<br/>
            ترجع طريقة <bdi><b>getElementById()</b></bdi> فارغة <small>null</small> إذا لم يكن العنصر موجودًا.<br/>
            تعد طريقة <bdi><b>getElementById()</b></bdi> واحدة من أكثر الطرق شيوعًا في <bdi><b>HTML DOM</b></bdi>. يتم استخدامه تقريبًا في كل مرة تريد فيها قراءة عنصر <b>HTML</b> أو تحريره.<br/>
            <CodeHighlighter code={`document.getElementById('id_element')`} language="js" addClass="mt-3 mb-3" copie={true} />
            <ul>
                <li> يجب أن يكون أي معرّف فريدًا . </li>
                <li> في حالة وجود عنصرين أو أكثر بنفس المعرف ، تُرجع الدالة <bdi><b>getElementById()</b></bdi> العنصر الأول. </li>
            </ul>
        </p>        
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="getElementById" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="getElementById" logo={images.html_logo} styleAdd={"p-0"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 id="id1">heading with id1</h2>
            <div id="id2">div with id2</div>
            <input id="id3" type="text" value="input with id3"/>
            <div id="id4" className="alert alert-primary"></div>
            <h2>
                id1<br/>div with id2<br/>input with id3<br/>alert alert-primary
            </h2>
            <br/>
        </Result>
    </article>
</section>
    )
}