import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef } from "react";

export default function ScrollTop(){
    const refDV1  = useRef()
    const refDV2 = useRef()
    function function_scroll(){
        document.querySelector("#h2").textContent = `scrollTop: ${document.querySelector("#dV1").scrollTop}px`;
    }
    const codeExemple1= { 
    head:`
    <style>
        #dV1{ 
            width: 50%; 
            height:150px; 
            overflow: auto; 
            background-color: brown; 
            padding: 20px; 
        }
        #dV2{ 
            background-color:yellow; 
            border: 2px solid black; 
            margin:500px 0px;
        }
    </style>`,
    code: `     <div id="dV1" onscroll="function_scroll()">
         <div id="dV2">
           div mark by id
         </div>
     </div>
    
     <h2 id="h2"> scrollTop: 0px </h2>

     <script src="./index.js"></script>`,
    script:`const scroller = document.querySelector("#dV1");
const output = document.querySelector("#h2");
function function_scroll(){
  output.textContent = \`scrollTop: \${scroller.scrollTop}px\`;
}`
    }
    

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript scrollTop</h1>
    <article>
        <p className="style_divv mt-5">
            تحصل الخاصية <b>scrollTop</b> على عدد وحدات البكسل التي يتم تمرير محتوى العنصر فيها عموديًا أو تعينها.<br/>
            إن قيمة <b>scrollTop</b> الخاصة بالعنصر هي قياس المسافة من أعلى العنصر إلى أعلى محتوى مرئي له. عندما لا يُنشئ محتوى عنصر شريط تمرير رأسي ، تكون قيمة <b>scrollTop</b> الخاصة به هي 0.
            <CodeHighlighter code={`element.scrollTop`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="scrollTop" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='scrollTop' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div ref={refDV1} id="dV1" style={{width: "50%", height:"150px", overflow: "auto", backgroundColor:"brown",padding: "20px"}} onScroll={function_scroll}> 
                <div ref={refDV2} id="dV2" style={{ backgroundColor:"yellow", border: "2px solid black",margin:"500px 0px"}}>
                    div mark by id
                </div>
            </div>
            <h2 id="h2"> scrollTop: 0px </h2>
        </Result>
    </article>
</section>
    )
    }