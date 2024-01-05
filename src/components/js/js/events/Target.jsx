import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./Target.css"

export default function EventTarget(){

    const codeExemple1= { 
    head:`
    <style>
        #parent {
            background-color: yellow;
            padding: 9px;
        }
    </style>`,
    code: `      <div id="parent" onclick="function_name(event)">
         <p id="paragraph">this is paragraph click</p>
         <h2 id="h2">heading click</h2>
         <button id="btn">btn</button>
     </div>
     <h2 id="result"> </h2>
      
     <script src="./index.js"></script>`,
    script:`function function_name(event) {
    document.getElementById("result").innerHTML = event.target.tagName + "<br/>"
    document.getElementById("result").innerHTML += event.target.id
}`
    }
    const codeExemple2= { 
    head:`
    <style>
        #parent {
            background-color: yellow;
            padding: 9px;
        }
        .styling {
            border: 5px outset white;
            border-radius: 7px;
            padding: 16px;
            font-size: 24px;
        }
    </style>`,
    code: `      <div id="parent" onclick="myfunction(event)">
         <p id="paragraph">this is paragraph click</p>
         <h2 id="h2">heading click</h2>
         <button id="btn">btn</button>
     </div>
      
     <script src="./index.js"></script>`,
    script:`function myfunction(event) {
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    if (event.target.tagName == "BUTTON") {
        event.target.classList.add("styling");
    }
}`
    }
    function function_name(event) {
        document.getElementById("result").innerHTML = event.target.tagName + "<br/>"
        document.getElementById("result").innerHTML += event.target.id
    }
    function myfunction(event) {
        event.target.style.backgroundColor = "red";
        event.target.style.color = "white";
        if (event.target.tagName == "BUTTON") {
            event.target.classList.add("styling");
        }
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript event.target</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع خاصية <bdi><b>event.target</b></bdi> العنصر الذي أطلق الحدث.<br/>
            تحصل الخاصية <b>target</b> على العنصر الذي حدث فيه الحدث في الأصل ، على عكس الخاصية <b>currentTarget</b> ، والتي تشير دائمًا إلى العنصر الأب.<br/>
            <CodeHighlighter code={`event.target`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="target" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="target" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div onClick={function_name}  style={{backgroundColor: "yellow", padding: "9px"}}>
                <p id="paragraph">this is paragraph click</p>
                <h2 id="h2">heading click</h2>
                <button id="btn">btn</button>
            </div>
            <h2 id="result"> </h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="target" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="target" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="target-parent" onClick={myfunction}  style={{backgroundColor: "yellow", padding: "9px"}}>
                <p id="paragraph">this is paragraph click</p>
                <h2 id="h2">heading click</h2>
                <button id="btn">btn</button>
            </div>
        </Result>
    </article>
</section>
    )
}