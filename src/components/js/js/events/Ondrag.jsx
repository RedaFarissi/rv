import images from "../../imagesJs";
import { CodeHighlighter ,  Result} from "../../../path";
import "./Ondrag.css";

export default function Ondrag(){
    const code1 = `<!-- Code HTML -->
<element ondrag="//script">`;
    const code2 = `// Code JavaScript 
object.ondrag = function(){  //myScript  }`;
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("drag", function_name )`;
    const codeExemple1= { 
    head:`
    <style>
        #drag1{ width:170px; height: 170px; border-radius: 50%; }
        .div{ width:200px; height: 200px; border:2px solid black; border-radius: 50%; }      
        .center{ display: flex; justify-content: center; align-items: center;}
    </style>`,
    code: `      <div class="d-flex justify-content-around flex-wrap">
         <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center"></div>
         
         <div ondrop="drop (event)" ondragover="allowDrop(event)" class="div center">
           <img id="drag1" src="./hajime.jpg" draggable="true" ondragstart="drag(event)">
         </div>
     </div>
      
     <script src="./index.js"></script>`,
    script:`function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}`
    }
    const codeExemple2= { 
    head:`
    <style>
        #drag1{ width:170px; height: 170px; border-radius: 50%; }
        .div{ width:200px; height: 200px; border:2px solid black; border-radius: 50%; }      
        .center{ display: flex; justify-content: center; align-items: center;}
    </style>`,
    code: `      <div class="d-flex justify-content-around flex-wrap">
         <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center"></div>
         <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center"></div>
         <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center"></div>
         <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center"></div>
         <div ondrop="drop (event)" ondragover="allowDrop(event)" class="div center">
           <img id="drag1" src="./hajime.jpg" draggable="true" ondragstart="drag(event)">
         </div>
     </div>
      
     <script src="./index.js"></script>`,
    script:`function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}`
    }
    const codeExemple3= { 
        code: `<!DOCTYPE html>
<html>
<head>
    <title> ondrag  </title>
    <link rel="icon" href="./html_logo.png" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
            #drag1{ width:170px; height: 170px; border-radius: 50%; }
            .div{ width:200px; height: 200px; border:2px solid black; border-radius: 50%; }      
            .center{ display: flex; justify-content: center; align-items: center;}
        </style>
</head>
<body>
    <div class="d-flex justify-content-around flex-wrap">
        <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center">
          <img id="drag1" src="./hajime.jpg" draggable="true" ondragstart="drag(event)">
        </div>
        <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center">
            <div id="drag2" class="bg-danger w-100 h-100 rounded-circle m-2" draggable="true" ondragstart="drag(event)"></div>
        </div>
        <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center">
          <div id="drag3" class="bg-success w-100 h-100 rounded-circle m-2" draggable="true" ondragstart="drag(event)"></div>
        </div>
        <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center">
          <div id="drag4" class="bg-warning w-100 h-100 rounded-circle m-2" draggable="true" ondragstart="drag(event)"></div>
        </div>
        <div ondrop="drop(event)" ondragover="allowDrop(event)" class="div center">
        </div>
    </div>  
    <script src="index.js"> </script>
</body>
</html>`,
        script:`function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("child-id", event.target.id);
}
          
function drop(event) {
    event.preventDefault();
    var draggedChildId = event.dataTransfer.getData("child-id");
    var draggedChild = document.getElementById(draggedChildId);
    var target = event.target;
   
    // check if drop box have element child 
    if(target.hasAttribute("id")){
        if ( target !== draggedChild.parentNode) {
            var cloneElementChild = draggedChild.cloneNode(true);
            target.parentNode.replaceChild(cloneElementChild, target);
            draggedChild.parentNode.replaceChild(target, draggedChild);
        }
    }else{
      event.target.appendChild(document.getElementById(draggedChildId));
    }
}`
    }
    function allowDrop(event) {
        event.preventDefault();
    }
    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
    }
    
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript ondrag</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>ondrag</b> عندما يتم سحب عنصر أو تحديد نص.<br/>
            يعد السحب والإفلات ميزة شائعة جدًا في <b>HTML5</b> <br/>
            ملاحظة لجعل عنصر ما قابلاً للسحب ، استخدم سمة <b><code>draggable="true"</code></b> العامة القابلة للسحب.<br/>
            تلميح الروابط والصور قابلة للسحب بشكل افتراضي ، ولا تحتاج إلى خاصية السحب.<br/>
            هناك العديد من الأحداث التي يتم استخدامها ويمكن أن تحدث في المراحل المختلفة لعملية السحب والإفلات <br/><br/>

            يتم تشغيل الأحداث على الهدف القابل للسحب (عنصر المصدر)<br/>
            <ul>
                <li><b>ondragstart</b> - يحدث عندما يبدأ المستخدم في سحب عنصر </li>
                <li><b>ondrag</b> - يحدث عند سحب عنصر </li>
                <li><b>ondragend</b> - يحدث عندما ينتهي المستخدم من سحب العنصر </li>
            </ul>
            تم إطلاق الأحداث على هدف الإسقاط<br/>
            <ul>
                <li><b>ondragenter</b> - يحدث عندما يدخل العنصر المسحوب في هدف الإسقاط </li>
                <li><b>ondragover</b> - يحدث عندما يكون العنصر المسحوب فوق هدف الإسقاط </li>
                <li><b>ondragleave</b> - يحدث عندما يترك العنصر المسحوب هدف الإسقاط </li>
                <li><b>ondrop</b> - يحدث عندما يتم إسقاط العنصر المسحوب على هدف الإسقاط </li>
            </ul>

            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="ondrag" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="ondrag"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="d-flex justify-content-around flex-wrap">
                <div onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}} className="js-ondrag-div js-ondrag-center"></div>
                <div onDrop={(event)=>{drop (event)}} onDragOver={(event)=>{allowDrop(event)}} className="js-ondrag-div js-ondrag-center">
                    <img draggable="true" onDragStart={(event)=>{drag(event)}} id="drag1" className="js-ondrag-drag1" src={images.hajime} alt="exemple" />
                </div>
            </div>
        </Result> 
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="ondrag" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="ondrag"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="d-flex justify-content-around flex-wrap">
                <div onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}} className="js-ondrag-div js-ondrag-center"></div>
                <div onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}} className="js-ondrag-div js-ondrag-center"></div>
                <div onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}} className="js-ondrag-div js-ondrag-center"></div>
                <div onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}} className="js-ondrag-div js-ondrag-center"></div>
                <div onDrop={(event)=>{drop(event)}} onDragOver={(event)=>{allowDrop(event)}} className="js-ondrag-div js-ondrag-center">
                    <img draggable="true" onDragStart={(event)=>{drag(event)}} id="drag2" className="js-ondrag-drag1" src={images.hajime} alt="exemple"/>
                </div>
            </div>
        </Result>   
        <div className="mital"> متال 3 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} language="html" title="ondrag" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
</section>
    )
}
