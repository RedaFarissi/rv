import images from "../../imagesJs"
import { CodeHighlighter ,  ResultAlert} from "../../../path";
import { useState } from "react";

export default function RemoveEventListener(){
    const [displayAlertExemple7 ,setDisplayAlertExemple7] = useState(false)
    const [removeEventExemple7 ,setRemoveEventExemple7] = useState(false)

    function clickOk7(){
        setDisplayAlertExemple7(false)
    }
    function exemple7button(){
        if( removeEventExemple7 === false){
            setDisplayAlertExemple7(true) 
        }
    }
    const codeExemple1= { 
        code: `      <button id="myButton" class="btn btn-primary">click</button>
         <button id="anuler" class="btn btn-outline-danger">
             click to remove Event
         </button>
    
         <script src="./index.js"></script>`,
        script:`function function_Name(F_name, L_name) {
    return function inner() {
        alert('First name = ' + F_name + "\\nLast_name = " + L_name);
    };
}

const variable = function_Name("reda", "Eskouni");

document.getElementById("myButton").addEventListener("click", variable);

document.getElementById("anuler").addEventListener("click", function() {
    document.getElementById("myButton").removeEventListener("click", variable);
});`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript removeEventListener</h1>
    <article>
        <p className="style_divv mt-5">
            تزيل طريقة <bdi>removeEventListener()</bdi> ال <b>event</b> من عنصر .<br/>
            <CodeHighlighter code={`element.removeEventListener(event,function_name,Capture)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="addEventlistener " addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <ResultAlert title='addEventlistener' logo={images.html_logo} clickOk={clickOk7} displayAlert={displayAlertExemple7} alertValue={<span>First name = reda <br/> Last_name = Eskouni</span>} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <button onClick={exemple7button} id="myButton" class="btn btn-primary me-2">click</button>
            <button id="anuler" onClick={()=>{ setRemoveEventExemple7(true) }} class="btn btn-outline-danger">
                click to remove Event
            </button>
        </ResultAlert>
    </article>
</section>
    )
}