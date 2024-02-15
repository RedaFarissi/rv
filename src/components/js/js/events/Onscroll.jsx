import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultAlert} from "../../../path";
import { useRef, useState } from "react";
import "./Onscroll.css"

export default function Onscroll(){
    const code1 = `// Code HTML 
<element onscroll="//script">`
    const code2 = `// Code JavaScript 
object.onscroll = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("scroll", function_name )`
    const codeExemple1= { 
    head:`
    <style>
        #DIV{ 
            margin: auto;
            width: 70%;
            background-color:red;
            height: 450px;
            border: 4px solid black;
            overflow: scroll;  
        }
        #child{ 
            margin: auto;
            width: 70%;
            background-color:green;
            min-height: 900px;
            border: 0.9px solid white;  
        }
    </style>`,
    code: `      <div id="DIV" onscroll="scrollFunction()">
         <div id="child">
             Div box
         </div>
     </div> 
      
     <script src="./index.js"></script>`,
    script:`function scrollFunction(){
    alert("you scrolled div")
}`
    }
    const codeExemple2= { 
    head:`
    <style>
        #Parent{ 
            margin: auto; 
            width: 70%; 
            background-color:red; 
            height: 450px; 
            border: 4px solid black; 
            overflow: scroll;
        }
        #Child{ 
            margin: auto; 
            width: 70%; 
            background-color:green; 
            min-height: 900px; 
            border: 0.9px solid white;
        }
    </style>`,
    code: `      <div id="Parent" onscroll="scrollFunction()" class="mt-5">
         <div id="Child">
             Div box
         </div>
     </div> 
     <h2 id="result">  </h2>
      
     <script src="./index.js"></script>`,
    script:`function scrollFunction(){
    var parent = document.getElementById("Parent")
    var result = document.getElementById("result")
    result.innerHTML = parent.scrollTop
}`
    }
    const exemple2RefParent = useRef()
    const [displayAlertExemple,setDisplayAlertExemple] = useState(false)
    const [exemple2,setExemple2] = useState("")
    function scrollFunction(){
        setDisplayAlertExemple(true)
    }
    function clickOk(){
        setDisplayAlertExemple(false)
    }
    function scrollFunction2(){
        setExemple2(exemple2RefParent.current.scrollTop)
    } 
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onscroll</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onscroll</b> عندما يتم تمرير شريط التمرير لعنصر ما.<br/>
            استخدم خاصية <bdi><b>CSS overflow</b></bdi>  لإنشاء شريط تمرير لعنصر.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="onscroll" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title='onscroll' logo={images.html_logo} clickOk={clickOk} displayAlert={displayAlertExemple} alertValue={"you scrolled div"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="js-onscroll-DIV"  onScroll={scrollFunction}>
                <div id="js-onscroll-child">
                    Div box
                </div>
            </div>
        </ResultAlert>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="onscroll" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="onscroll"  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div ref={exemple2RefParent} id="js-onscroll-Parent" onScroll={scrollFunction2} class="mt-5">
                <div id="js-onscroll-Child">
                    Div box
                </div>
            </div> 
            <h2> {exemple2} </h2>
        </Result>
    </article>
</section>
    )
}