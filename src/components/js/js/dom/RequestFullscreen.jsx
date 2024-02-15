import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState } from "react";

export default function RequestFullscreen(){
    const [resultVisibility,setResultVisibility] = useState(true)
    const codeExemple1= { 
    head:`
    <style>
        /* Safari */ :-webkit-full-screen{ background-color: yellow; }
        /* IE11 syntax */ :-ms-fullscreen { background-color: yellow; }
        /* Standard syntax */ :fullscreen { background-color: yellow; }
    </style>`,
    code: `      <p>
        Click on the "Open Fullscreen" button to open this page in fullscreen mode.
        Close it by either clicking the "Esc" key on your keyboard, or with the "Close Fullscreen" button.
     </p>
       
     <button class="btn btn-outline-success" onclick="openFullscreen();">
       Open Fullscreen
     </button>
     <button class="btn btn-outline-danger" onclick="closeFullscreen();">
       Close Fullscreen
     </button>
      
     <script src="./index.js"></script>`,
    script:`var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}`
    }
  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript requestFullscreen</h1>
  <article>
      <p className="style_divv mt-5">
          فتح طريقة <bdi><b>requestFullscreen()</b></bdi> عنصرًا في وضع ملء الشاشة.<br/>
          استخدم طريقة <bdi><b>exitFullscreen()</b></bdi> لإلغاء وضع ملء الشاشة.<br/>
            <CodeHighlighter code={`HTMLElementObject.requestFullscreen()`} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <CodeHighlighter code={`//Open fullscreen
var elem = document.decumentElement
function function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    }else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}`} language="js" addClass="mt-3 mb-3" copie={true} />


    <div className="mital"> متال :  </div>
    <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="requestFullscreen" addClass="mt-3 mb-3" copie={true}  number={true}/>  
    <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
    <div className={(resultVisibility)?"d-block":"d-none"} >
        <Result title="requestFullscreen" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p>
               Click on the "Open Fullscreen" button to open this page in fullscreen mode.
               Close it by either clicking the "Esc" key on your keyboard, or with the "Close Fullscreen" button.
            </p>

            <button class="btn btn-outline-success" onClick={()=>{setResultVisibility(false)}}>
               Open Fullscreen
            </button>
            <button class="btn btn-outline-danger">
               Close Fullscreen
            </button>
        </Result>
    </div>
    <div className={(resultVisibility)?"d-none":"d-block"} style={{height:"490px",backgroundColor:"yellow"}} dir='ltr'> 
        <div className="bg-light text-dark">
            <p>
            Click on the "Open Fullscreen" button to open this page in fullscreen mode.
            Close it by either clicking the "Esc" key on your keyboard, or with the "Close Fullscreen" button.
            </p>
            <button class="btn btn-outline-success">
                Open Fullscreen
            </button>
            <button class="btn btn-outline-danger"  onClick={()=>{setResultVisibility(true)}}>
                Close Fullscreen
            </button>
        </div>
    </div>
    <ul className="mt-5">
        <li>يمكنك استخدام CSS لتصميم الصفحة عندما تكون في وضع ملء الشاشة :</li>
    </ul>
  </article>
</section>
  )
}