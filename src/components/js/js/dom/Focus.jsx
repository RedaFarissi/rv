import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useEffect } from "react";

export default function Focus(){
    //document.getElementById("email_id").focus()
        const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `     <input type="email" id="email_id"/><br/>
     <input type="password" id="password"/>  
      
     <script src="./index.js"></script>`,
    script:`const email = document.getElementById("email_id")
email.focus()`
    }
    useEffect(()=>{
        document.getElementById("email_id").focus()   
    },[]);
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript focus</h1>
    <article>
        <p className="style_divv mt-5">
            تعطي طريقة <bdi><b>focus()</b></bdi> التركيز على عنصر (إذا كان من الممكن التركيز عليه).
            <CodeHighlighter code={`element.focus()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="focus" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="focus" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="email" id="email_id"/> <br/>
            <input type="password" id="password"/>
        </Result>
    </article>
</section>
    )
}