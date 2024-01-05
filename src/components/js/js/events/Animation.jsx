import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import "./Animation.css"
import { useEffect } from "react";

export default function Animation(){
    const codeExemple1= { 
    head:`
    <style>
        #id_DIV {
            margin: 25px;
            width: 400px;
            height: 100px;
            background: orange;
            position: relative;
            font-size: 20px;
            padding: 7px;
        }
        @keyframes mymove {
            from { top: 0px; }
            to { top: 120px; }
        }
    </style>`,
    code: `      <div id="id_DIV" onclick="myFunction()">Click me to start the animation.</div>
      
     <script src="./index.js"></script>`,
    script:`var x = document.getElementById("id_DIV");
// Start the animation with JavaScript
function myFunction() {
  x.style.animation = "mymove 4s 2";        
}
function myStartFunction() {
  this.innerHTML = "animationstart event occured - The animation has started"; 
  this.style.backgroundColor = "yellow"; // this => x
}
function myRepeatFunction() {
  x.innerHTML = "animationiteration event occured - The animation was played again";
  x.style.backgroundColor = "brown";
}
function myEndFunction() {
  this.innerHTML = "animationend event occured - The animation has completed";
  this.style.backgroundColor = "red";
}
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);`
    }
    const codeExemple2= { 
    head:`
    <style>
        #DIV{
          width:90px; 
          height:90px; 
          background-color:red; 
          position:absolute;
        }
        @keyframes example {
          0%   {background-color:red; left:0px; top:0px;}
          25%  {background-color:yellow; left:calc(100% - 90px); top:0px;}
          50%  {background-color:blue; left:calc(100% - 90px); top:200px;}
          75%  {background-color:green; left:0px; top:200px;}
          100% {background-color:red; left:0px; top:0px;}
        }
    </style>`,
    code: `      <div style="width:100%;height:300px;position:relative;background-color:thistle;">
          <div id="DIV">  </div>
     </div>
     <button class="btn btn-primary mt-2" onclick="myfunction2()"> Click </button>
      
     <script src="./index.js"></script>`,
    script:`function myfunction2(){
    document.getElementById("DIV").style.animation = "example 4s linear"
}
function animationStart2(){
    document.getElementById("DIV").style.backgroundColor = "yellow"
}
function animationIteration2(){
    document.getElementById("DIV").innerHTML = "Iteration" 
}
function animationEnd2(){
    document.getElementById("DIV").innerHTML = "End"
    document.getElementById("DIV").style = "position:absolute;top:calc(50% - 45px);left:calc(50% - 45px);"
    document.getElementById("DIV").style.color = "white"
    document.getElementById("DIV").style.backgroundColor = "gray"
    document.getElementById("DIV").style.backgroundColor = "gray"
    document.getElementById("DIV").style.border = "2px solid white" 
    document.getElementById("DIV").style.padding = "3px" 
}
document.getElementById("DIV").addEventListener("animationstart",animationStart2)
document.getElementById("DIV").addEventListener("animationiteration",animationIteration2)
document.getElementById("DIV").addEventListener("animationend",animationEnd2)`
    }
 
    // Start the animation with JavaScript
    function myFunction() {
      document.getElementById("js-animation-id_DIV").style.animation = "mymove 4s 2";        
    }
    function myStartFunction() {
      document.getElementById("js-animation-id_DIV").innerHTML = "animationstart event occured - The animation has started"; 
      document.getElementById("js-animation-id_DIV").style.backgroundColor = "yellow"; // this => x
    }
    function myRepeatFunction() {
      document.getElementById("js-animation-id_DIV").innerHTML = "animationiteration event occured - The animation was played again";
      document.getElementById("js-animation-id_DIV").style.backgroundColor = "brown";
    }
    function myEndFunction() {
      document.getElementById("js-animation-id_DIV").innerHTML = "animationend event occured - The animation has completed";
      document.getElementById("js-animation-id_DIV").style.backgroundColor = "red";
    }
    useEffect(()=>{
        document.getElementById("js-animation-id_DIV").addEventListener("animationstart", myStartFunction);
        document.getElementById("js-animation-id_DIV").addEventListener("animationiteration", myRepeatFunction);
        document.getElementById("js-animation-id_DIV").addEventListener("animationend", myEndFunction);
    },[])
  // /************************************  animationEnd  *************************************** */
  
  function Myfunction2(){
    document.getElementById("js-animation-DIV").style.animation = "example2 4s linear"
  }
  function animationStart2(){
    document.getElementById("js-animation-DIV").style.backgroundColor = "yellow"
  }
  function animationIteration2(){
    document.getElementById("js-animation-DIV").innerHTML = "Iteration" // this => js-animation-DIV
  }
  function animationEnd2(){
    document.getElementById("js-animation-DIV").innerHTML = "End"
    document.getElementById("js-animation-DIV").style = "position:absolute;top:calc(50% - 45px);left:calc(50% - 45px);"
    document.getElementById("js-animation-DIV").style.color = "white"
    document.getElementById("js-animation-DIV").style.backgroundColor = "gray"
    document.getElementById("js-animation-DIV").style.backgroundColor = "gray"
    document.getElementById("js-animation-DIV").style.border = "2px solid white" 
    document.getElementById("js-animation-DIV").style.padding = "3px" 
  }
  useEffect(()=>{
    document.getElementById("js-animation-DIV").addEventListener("animationstart",animationStart2)
    document.getElementById("js-animation-DIV").addEventListener("animationiteration",animationIteration2)
    document.getElementById("js-animation-DIV").addEventListener("animationend",animationEnd2)
  },[])
return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript Animation</h1>
  <article>
    <p className="style_divv mt-5">
        عند تشغيل رسم متحرك CSS ، هناك ثلاثة أحداث يمكن أن تحدث:
        <ul>
            <li><b>animationstart</b> : يحدث عند بدء الرسوم المتحركة لـ CSS </li>
            <li><b>animationiteration</b> : يحدث عندما يتم تكرار الرسوم المتحركة CSS</li>
            <li><b>animationend</b> : يحدث عند اكتمال الرسوم المتحركة لـ CSS</li>
        </ul>
    </p>
    </article>
    <article>
        <h2 className="title-h2">1 - animationstart</h2>
        <p className="style_divv">
            يقع حدث <bdi><b>Animationstart</b></bdi> عندما يبدأ تشغيل الرسوم المتحركة <b>CSS</b>.<br/>
            <CodeHighlighter code={`Object.addEventListener("animationstart", function_name)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="animation" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="animation" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="js-animation-id_DIV" onClick={myFunction}>Click me to start the animation.</div>
        </Result>
    </article>
    <article>
      <h2 className="title-h2">2 - animationiteration </h2>
      <p className="style_divv">
        يقع حدث <b>animationiteration</b> عند تكرار رسم متحرك <b>CSS</b> .<br/>
        <CodeHighlighter code={`Object.addEventListener("animationiteration", function_name)`} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <div className="mital"> متال :  </div>
      <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="animation" addClass="mt-3 mb-3" copie={true}  number={true}/>  
      <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
      <Result title="animation" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        <div style={{width:"100%",height:"300px",position:"relative",backgroundColor:"thistle"}}>
          <div id="js-animation-DIV">  </div>
        </div>
        <button className="btn btn-primary mt-2" onClick={Myfunction2}> Click </button>
      </Result>
     </article>
    <article>
        <h2 className="title-h2">3 - animationend </h2>
        <p className="style_divv">
            يقع الحدث <bdi><b>animationend</b></bdi> عند اكتمال رسم متحرك <b>CSS</b> .<br/>
            <CodeHighlighter code={`Object.addEventListener("animationend", function_name )`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
    </article>
  </section>
  )
}