import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultAlert} from "../../../path";
import { useRef, useState } from "react";
import "./AddEventListener.css"

export default function AddEventListener(){
  const [displayAlertExemple2 ,setDisplayAlertExemple2] = useState(false)
  const [resultExemple2 ,setResultExemple2] = useState("")
  
  const [displayAlertExemple3 ,setDisplayAlertExemple3] = useState(false)
  const [resultExemple3 ,setResultExemple3] = useState("")
  
  const inputExemple4 = useRef()
  const [displayAlertExemple4 ,setDisplayAlertExemple4] = useState(false)
  const [resultExemple4 ,setResultExemple4] = useState("")

  const [displayAlertExemple6 ,setDisplayAlertExemple6] = useState(false)

 

  
  function clickOk(){
      setDisplayAlertExemple2(false)
  }
  /**************************************/
  function clickOk3(){
    if(resultExemple3 === "Child" ){
      setResultExemple3("Parent")
    }else if(resultExemple3 === "Parent"){
      setResultExemple3("Grand Parent")
    }else if(resultExemple3 === "Grand Parent"){
      setDisplayAlertExemple3(false)
    }
  }
  function grandparent(event){
    event.stopPropagation()
    setDisplayAlertExemple3(true)
    setResultExemple3("Grand Parent")
  }
  function parent(event){
    event.stopPropagation()
    setDisplayAlertExemple3(true)
    setResultExemple3("Parent")
  }
  function child(event){
    event.stopPropagation()
    setDisplayAlertExemple3(true)
    setResultExemple3("Child")
  }
  
  /**************************************/
  function clickOk4(){
    if( resultExemple4 === "DIV 1" && inputExemple4.current.checked ){
      setDisplayAlertExemple4(false)
    }else if(resultExemple4 === "DIV 1"){
      setResultExemple4("DIV 2")
    }else if(resultExemple4 === "DIV 2"){
      setDisplayAlertExemple4(false)
    }
  }
  function Myfunc1(event) {
    event.stopPropagation()
    setDisplayAlertExemple4(true)
    setResultExemple4("DIV 1")
  }
  function Myfunc2(event) {
    event.stopPropagation()
    setDisplayAlertExemple4(true)
    setResultExemple4("DIV 2")
  }
  /**************************************/
  function clickOk6(){
    setDisplayAlertExemple6(false)
  }

  
  

  const code1 = `function function_name(){
    //Code javaScript 
}            
element.addEventListener(event, function_name, Capture)`

  const codeExemple1= { 
    head:`#DIVV {
    width: max-content;
    background-color: yellow;
    padding: 20px;
    border: 0.9px solid black;
    margin: auto;
    border-radius: 4px;
}`,
    code: `      <div id="DIVV">
        click Here
    </div>
     <script src="./index.js"></script>`,
    script:`document.getElementById("DIVV").addEventListener("click", clik_function);

function clik_function() {
  alert("div with id='DIVV'");
}`
  }
  const codeExemple2= { 
    code: `      <p>Click anywhere in the document to display Date . </p>
     <h2 id="date-result"> </h2>

     <script src="./index.js"></script>`,
    script:`document.addEventListener("mouseup", click_function);

function click_function() {
    document.getElementById("date-result").innerHTML = Date()
}`

  }
  const codeExemple3= { 
    head: `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
      #grandparent {
        width: 250px;
        height: 250px;
        background-color: red;
      }

      #parent {
        width: 180px;
        height: 180px;
        background-color: green;
      }

      #child {
        width: 100px;
        height: 100px;
        background-color: yellow;
      }
    </style>`,
    code: `      <div id="grandparent" class="d-flex justify-content-center align-items-center m-5">
        <div id="parent" class="d-flex justify-content-center align-items-center">
            <div id="child"></div>
        </div>
     </div>

     <script src="./index.js"></script>`,
    script:`const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener("click", Grandparent)
parent.addEventListener("click", Parent)
child.addEventListener("click", Child)

function Grandparent(){
  alert(' Grand Parent ')
}
function Parent(){
  alert(' Parent ')
}

function Child(){
  alert(' Child ')
}`
  }
  const codeExemple4= { 
    head: `
    <style>
          div {
              padding: 50px;
              background-color: rgba(29, 90, 30, 0.3);
              text-align: center;
              cursor: pointer;
          }
    </style>`,
    code: `     <div onclick="Myfunc2()">
      DIV 2
          <div onclick="Myfunc1()">DIV 1</div>
     </div>
       
     Stop propagation: <input type="checkbox" id="check">

     <script src="./index.js"></script>`,
    script:`function Myfunc1() {
    alert("DIV 1");
    if (document.getElementById("check").checked) {
        event.stopPropagation();
    }
}

function Myfunc2() {
    alert("DIV 2");
}`
  }
  const codeExemple5= { 
    code: `      Try to check this box: <input type="checkbox" id="myCheckbox"><br/>

    <a id="myAnchor" href="https://www.google.com/">Go to google</a>

     <script src="./index.js"></script>`,
    script:`document.getElementById("myCheckbox").addEventListener("click",function(event) {
    event.preventDefault()
  }
);

document.getElementById("myAnchor").addEventListener("click",function(event) {
    event.preventDefault()
  }                         
);`
  }
  
  const codeExemple6= { 
    code: `     <button id="myButton" class="btn btn-primary">
        click
     </button>

     <script src="./index.js"></script>`,
    script:`function function_name(a){
  return function inner() {
    alert('a = ' + a);
  };
}

const variable = function_name("Reda Eskouni")
document.getElementById("myButton").addEventListener("click",variable)`
  }
  
  
  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript addEventListener</h1>
  <article>
        <h2 className="title-h2">1- addEventListener </h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>addEventListener</b>()</bdi> بإرفاق <b>Event</b> بمستند .<br/>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            أو 
            <CodeHighlighter code={`element.addEventListener('event',function(){
    //Code javaScript 
}, Capture)`} language="js" addClass="mt-3 mb-3" copie={true} />
            <ul>
                <li><b>event</b> : قم بكتابة إسم الحدت بدون إستخدم <b>on</b> متلا قم بكتابة <b>click</b> بدلاً من <del>onclick</del> وهي إجبارية .</li>
                <li><b>function</b> : الدالة المراد تشغيلها عند وقوع الحدث وهي إجبارية أيضا.</li>
                <li><b>Capture</b> :  إختيارية تقبل <b>true</b> أو <b>flase</b> <small><small>(قيمة أولية false)</small></small>.</li>
            </ul>
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.css"code={codeExemple1.head} language="css" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="addEventListener" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title='Output' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple2} alertValue={"div with id='DIVV'"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <div id="addEventListener-ex1" onClick={()=>{ setDisplayAlertExemple2(true) }}>
            click Here
          </div>
        </ResultAlert>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="addEventListener" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="addEventListener" logo={images.html_logo} styleAdd={"p-0"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <div className="h-100" onClick={(()=>{ setResultExemple2(Date()) })}>
            <p className="ps-3 mt-2">Click anywhere in the document to display Date . </p>
            <h2 className="ps-3" id="date-result"> {resultExemple2} </h2>
          </div>
        </Result>
        <div className="mital">متال 3 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="addEventListener" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert styleAdd="" title='addEventListener' logo={images.html_logo} clickOk={clickOk3} displayAlert={displayAlertExemple3} alertValue={resultExemple3} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <div onClick={grandparent} id="addEventListener-ex3-grandparent" className="d-flex justify-content-center align-items-center m-5">
              <div onClick={parent} id="addEventListener-ex3-parent" className="d-flex justify-content-center align-items-center">
                  <div onClick={child} id="addEventListener-ex3-child"></div>
              </div>
          </div>
        </ResultAlert>
    </article>
    <article>     
        <h2 className="title-h2">2- <bdi>stopPropagation()</bdi></h2>
        <div className="style_divv">
          تمنع طريقة <bdi><b>stopPropagation()</b></bdi> استدعاء نفس الحدث.<br/>
          يعني الانتشار الوصول إلى العناصر الأصلية أو الالتقاط وصولاً إلى العناصر الفرعية  .<br/>
          ومع ذلك ، فإنه لا يمنع حدوث أي سلوكيات افتراضية ؛ على سبيل المثال ، لا تزال معالجة النقرات على الروابط. إذا كنت ترغب في إيقاف هذه السلوكيات ، فراجع طريقة <bdi><b>PreventionDefault()</b></bdi>.<br/>
          كما أنه لا يمنع الانتشار الفوري لمعالجات الأحداث الأخرى. إذا كنت تريد إيقاف ذلك ، فراجع <bdi><b>stopImmediatePropagation()</b></bdi>.
          <CodeHighlighter code={`event.stopPropagation()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </div>
          <div className="mital">متال : </div>
          <CodeHighlighter file_name="index.html" code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="stopPropagation" addClass="mt-3 mb-3" copie={true}  number={true}/>  
          <CodeHighlighter file_name="index.js" code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
          <ResultAlert title='stopPropagation' logo={images.html_logo} clickOk={clickOk4} displayAlert={displayAlertExemple4} alertValue={resultExemple4} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="addEventListener-ex4" onClick={Myfunc2}>DIV 2
                <div className="addEventListener-ex4" onClick={Myfunc1}>DIV 1</div>
            </div>
            Stop propagation: <input ref={inputExemple4} type="checkbox" id="check"/>
          </ResultAlert>
    </article>
    <article>
          <h2 className="title-h2">3- <bdi>PreventionDefault()</bdi></h2>
          <p className="style_divv">
              تلغي طريقة <bdi><b>PreventionDefault()</b></bdi> الحدث إذا كان قابلاً للإلغاء ، مما يعني أن الإجراء الافتراضي الذي ينتمي إلى الحدث لن يحدث.<br/>
              على سبيل المثال ، يمكن أن يكون هذا مفيدًا عندما:
              <ul>
                <li> النقر فوق الزر "إرسال" ، منعه من إرسال نموذج </li>
                <li> النقر فوق ارتباط ، ومنع الارتباط من اتباع URL </li>
              </ul>
              <CodeHighlighter code={`event.PreventionDefault()`} language="js" addClass="mt-3 mb-3" copie={true} />
              <div className="alert alert-danger">
                 ليست كل الأحداث قابلة للإلغاء. استخدم الخاصية <b>cancelable</b> لمعرفة ما إذا كان الحدث قابلاً للإلغاء.
              </div>
          </p>
          <div className="mital">متال : </div>
          <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="addEventListener" addClass="mt-3 mb-3" copie={true}  number={true}/>  
          <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
          <Result title="addEventListener" logo={images.html_logo} styleAdd={"p-0"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
              <br/>
              Try to check this box: <input onClick={(event)=>{event.preventDefault()}} type="checkbox" id="myCheckbox"/>
              <br/>
              <a onClick={(event)=>{event.preventDefault()}} id="myAnchor" href="https://www.google.com/">Go to google</a>
          </Result>
    </article>
    <article>
        <h2 className="title-h2">4- addEventlistener with parameters function</h2>
        <p className="style_divv">
          <CodeHighlighter code={`function functio_name(parameter1,parameter2){
    return function  inner_function(){
        //Code javaScript 
        //parameter . can be used   
    }
}
var variable = functio_name('parameter1','parameter2')

element.addEventListener('event', variable )`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple6.code} head={codeExemple6.head} language="html" is_html={true} title="addEventlistener " addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title='addEventlistener' logo={images.html_logo} clickOk={clickOk6} displayAlert={displayAlertExemple6} alertValue={`a = Reda Eskouni`} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <button id="myButton" className="btn btn-primary" onClick={()=>{ setDisplayAlertExemple6(true) }}>
              click
          </button>
        </ResultAlert>
    </article>
</section>
  )
}