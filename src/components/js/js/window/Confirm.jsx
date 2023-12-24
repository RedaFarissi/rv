import images from "../../imagesJs"
import { CodeHighlighter ,  ResultConfirm} from "../../../path";
import { useState } from "react";

export default function Confirm(){
    const [displayConfirm ,setDisplayConfirm] = useState(false)
    const [resultConfirmValue ,setResultConfirmValue] = useState("")
    

    function click_button(){
        setDisplayConfirm(true)
    }
    function click_on_ok(){
        setDisplayConfirm(false)
        setResultConfirmValue(<span style={{color:"green"}}>You pressed OK</span>)
    }
    function click_on_cancel(){
        setDisplayConfirm(false)
        setResultConfirmValue(<span style={{color:'red'}}>You canceled</span>)
    }

    

    const codeExemple1= { 
    code: `     <button onclick="name_function()"> Click Here </button>
     <h2 id="h2"></h2>

     <script src="./index.js"></script>`,
    script:`function name_function() {
    let id = document.getElementById("h2");
    let text;

    if (confirm("Press a button!") == true) {
        text = "<span style='color:green'>You pressed OK</span>";
    }else{
        text = "<span style='color:red'>You canceled</span>";
    }

    id.innerHTML = text;
}`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript confirm</h1>
    <article>
        <p className="style_divv mt-5">
            تعرض طريقة <bdi><b>confirm()</b></bdi> مربع حوار به رسالة وزر موافق وزر إلغاء.<br/>
            تُرجع طريقة <bdi><b>confirm()</b></bdi> إلى القيمة <b>true</b> إذا نقر المستخدم على "موافق" ، وإلا فسيكون ذلك خطأ .<br/>
            <CodeHighlighter code={`confirm("message")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="confirm" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultConfirm title='confirm' logo={images.html_logo} clickCancel={click_on_cancel} clickOk={click_on_ok} displayConfirm={displayConfirm} confirmValue="Press a button!" route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={click_button}> Click Here </button>            
            <h2> {resultConfirmValue} </h2>
        </ResultConfirm>        
    </article>
</section>
    )
}