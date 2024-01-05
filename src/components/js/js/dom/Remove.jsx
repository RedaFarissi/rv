import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./Remove.css"

export default function Remove(){
  var count = 0 ;
  function myFunction() {
      if(count === 0){
        const element = document.getElementById("remove-js-exemple1");
        element.remove();
        count++
      }
  }
  // var arr = []
  // for(let i=0 ; i<=20 ;i++ ){
  //   arr[i] = document.createElement("div")
  //   arr[i].setAttribute("class","reda")
  //   arr[i].addEventListener("click",()=>{ arr[i].remove() });
  //   document.getElementById("result").appendChild(arr[i])
  //   document.querySelectorAll(".reda")[i].innerHTML = i
  // }
    const codeExemple1= { 
    head:`
    <style>
      #paragraph {
          -webkit-text-stroke: 0.9px red;
          font-size: 27px;
      }
    </style>`,
    code: `        <h1>The Element Object</h1>
     <h2>The remove() Method</h2>
     
     <p id="paragraph">Click "Remove button", and this paragraph will be removed from the DOM.</p>
     <button onclick="myFunction()">Remove</button>
      
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    const element = document.getElementById("paragraph");
    element.remove();
}`
    }

  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript remove</h1>
  <article>
    <p className="style_divv mt-5">
        تزيل طريقة <bdi><b>remove()</b></bdi> عنصرًا (أو node) من المستند.
            <CodeHighlighter code={`element.remove()`} language="js" addClass="mt-3 mb-3" copie={true} />
    </p>
    <div className="mital"> متال :  </div>
    <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="remove" addClass="mt-3 mb-3" copie={true}  number={true}/>  
    <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
    <Result title="remove" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        <h1>The Element Object</h1>
        <h2>The remove() Method</h2>
        <p id="remove-js-exemple1">Click "Remove button", and this paragraph will be removed from the DOM.</p>
        <button onClick={myFunction}>Remove</button>
    </Result>
  </article>
</section>
  )
}