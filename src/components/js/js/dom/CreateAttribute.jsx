import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./CreateAttribute.css"

export default function CreateAttribute(){
    const codeExemple1= { 
    head:`
    <style>
        .div-style {
            background-color: red;
            border: 2px solid black;
            padding: 5px;
            color: blueviolet;
            font-size: 45px;
        }
    </style>`,
    code: `      <div id="id">Hello Word</div>
     <button id="Button" class="btn btn-primary">Click Ici</button>
  
     <script src="./index.js"></script>`,
    script:`document.getElementById("Button").addEventListener("click", function() {
    const styling = document.createAttribute("class");
    styling.value = "div-style";
    document.getElementById("id").setAttributeNode(styling);
});`
    }
    const codeExemple2= { 
    code: `      <a id="myAnchor"> Go to google </a><br>
     <button onclick="fun()" id="BuTton2" class="btn btn-primary mt-2">Add</button>    
      
     <script src="./index.js"></script>`,
    script:`function fun() {
    const href = document.createAttribute("href");
    href.value = "https://www.google.com";
    document.getElementById("myAnchor").setAttributeNode(href);
}`
    }
    function exemple1() {
        const styling = document.createAttribute("class");
        styling.value = "createAttribute-ex1-style";
        document.getElementById("id-createAttribute-exemple1").setAttributeNode(styling);
    }
    function exemple2(){
        const href = document.createAttribute("href");
        href.value = "https://www.google.com";
        document.getElementById("myAnchor").setAttributeNode(href);
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript createAttribute</h1>
    <article className="mt-5">
        <p className="style_divv">
            تقوم طريقة <b><bdi>createAttribute()</bdi></b> بإنشاء سمة وإرجاع السمة ككائن Attr.<br/>
            <CodeHighlighter code={`const variable = document.createAttribute(attribute_name); 
variable.value = "attribute_value"
document.getElementById("id").setAttributeNode(variable)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="createAttribute" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="createAttribute" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="id-createAttribute-exemple1" className="mb-1">Hello Word</div>
            <button id="Button" class="btn btn-primary" onClick={exemple1}>Click Ici</button>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple1.head} language="html" is_html={true} title="createAttribute" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="createAttribute" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <a id="myAnchor"> Go to google </a><br/>
            <button onClick={exemple2} id="BuTton2" className="btn btn-primary mt-2">Add</button>
        </Result>
    </article>
</section>
    )
}