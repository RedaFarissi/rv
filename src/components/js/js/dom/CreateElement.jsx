import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function CreateElement(){
    const codeExemple1= { 
    code: `      <h2>Heading Element 1</h2>
      
     <script src="./index.js"></script>`,
    script:`var h2 = document.createElement("h2");
h2.innerHTML = "Heading Element 2";
document.body.appendChild(h2);`
    }
    const codeExemple2= { 
    code: `      <h2>Heading Element</h2>
     <div id="DIV"> </div>
          
     <script src="./index.js"></script>`,
    script:`var img = document.createElement("img");
img.src = "./hajime.jpg";
document.getElementById("DIV").appendChild(img);`
    }
    const codeExemple3= { 
    code: `      <button onclick="myFunction()" class="btn btn-primary"> click </button>
     <div id="resulTa"> </div>
      
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    var x = document.createElement("FORM");
    x.setAttribute("id", "IdForm");
    document.getElementById("resulTa").appendChild(x);

    var y = document.createElement("INPUT");
    y.setAttribute("type", "text");
    document.getElementById("IdForm").appendChild(y);

    y.setAttribute("value", "Donald");
}`
    }
    function myFunction() {
        var x = document.createElement("FORM");
        x.setAttribute("id", "IdForm");
        document.getElementById("resulTa").appendChild(x);
      
        var y = document.createElement("INPUT");
        y.setAttribute("type", "text");
        document.getElementById("IdForm").appendChild(y);
      
        y.setAttribute("value", "Donald");
      }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript createElement</h1>
    <article>
        <p className="style_divv mt-5">
            طريقة <bdi><b>createElement()</b></bdi> تنشئ عقدة عنصر <small><small><bdi>(element node)</bdi></small></small>.<br/>
            <CodeHighlighter code={`let variable = document.createElement('type')`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="createElement" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="createElement" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Heading Element 1<br/>Heading Element 2</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="createElement" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="createElement" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Heading Element</h2>
            <img src={images.hajime}  style={{height: "250px",objectFit:"contain"}}/>
        </Result>
        <div className="mital">متال 3 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} language="html" is_html={true} title="createElement" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="createElement" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={myFunction} className="btn btn-primary mb-2">click</button>
            <div id="resulTa">
        
            </div>
        </Result>
    </article>
</section>
    )
}