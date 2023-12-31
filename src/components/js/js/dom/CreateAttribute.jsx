import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function CreateAttribute(){
    // document.getElementById("BuTton").addEventListener("click",function(){
    //     const styling  = document.createAttribute("class") 
    //     styling.value = "dIv"
    //     document.getElementById("id").setAttributeNode(styling) 
    //   });
    //   function fun(){
    //       const href = document.createAttribute("href");
    //       href.value = "https://www.google.com";
    //       document.getElementById("myAnchor").setAttributeNode(href);
    //   }
        const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript createAttribute</h1>
    <article>
        <p className="style_divv">
            تقوم طريقة <b><bdi>createAttribute()</bdi></b> بإنشاء سمة وإرجاع السمة ككائن Attr.<br/>
            <CodeHighlighter code={`const variable = document.createAttribute(attribute_name); 
variable.value = "attribute_value"
document.getElementById("id").setAttributeNode(variable)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js63_createAttribute} className="img"/>
        <div className="styleee">
            <div id="id"> Hello Word </div>
            <button id="BuTton" className="btn btn-primary mt-2"> Click Ici </button>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js63_createAttribute2} className="img"/>
        <div className="styleee">
            <a id="myAnchor"> Go to google </a><br/>
            <button onclick="fun()" id="BuTton2" className="btn btn-primary mt-2">Add</button>
        </div>
    </article>
</section>
    )
}