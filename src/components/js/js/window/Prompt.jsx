import images from "../../imagesJs"
import { CodeHighlighter ,  ResultPrompt} from "../../../path";
import { useRef, useState } from "react";

export default function Prompt(){
    const exempleRefPrompt = useRef();
    const [displayPrompt ,setDisplayPrompt] = useState(false);
    const [valueInput ,setValueInput] = useState("");
    const [resultPromptValue ,setResultPromptValue] = useState("");

    function inputChange(){   setValueInput(exempleRefPrompt.current.value)  }

    function switchFunction(text){
        text = text.toUpperCase();
        switch(text) {
            case "HTML": text = (<span style={{color:'orange'}}>HTML</span>);break;
            case "CSS": text = (<span style={{color:'blue'}}>CSS</span>);break;
            case "JAVASCRIPT": text = (<span style={{color:'yellow'}}>JS</span>); break;
            default: text = (<span>I have never heard of that one..</span>);
          }
        return text;
    }
    function click_button(){  setDisplayPrompt(true)  }
    function click_on_ok(){
        setDisplayPrompt(false);
        setResultPromptValue(switchFunction(valueInput));
    }
    function click_on_cancel(){
        setDisplayPrompt(false);
        setResultPromptValue("");
    }

    const codeExemple1= { 
    code: `      <button onclick="name_function()"> Clik Here </button>
     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`function name_function(){
    const result = document.getElementById("result")
    let text = prompt("What's your favorite language?", "HTML");
    text = text.toUpperCase();
    switch(text) {
      case "HTML":
        text = "<span style='color:orange'>HTML</span>";
        break;
      case "CSS":
        text = "<span style='color:blue'>CSS</span>";
        break;
      case "JAVASCRIPT":
        text = "<span style='color:yellow'>JS</span>";
        break;
      default:
        text = "I have never heard of that one..";
    }
    result.innerHTML = text;
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript prompt</h1>
    <article className="mt-5">
        <p className="style_divv">
            تعرض طريقة <bdi><b>prompt()</b></bdi> مربع حوار يطالب المستخدم بالإدخال.<br/>
            تقوم طريقة <bdi><b>prompt()</b></bdi> بإرجاع قيمة الإدخال إذا نقر المستخدم على "موافق" ، وإلا فإنها ترجع قيمة فارغة.<br/>
            يتم استخدام مربع موجه إذا كنت تريد أن يقوم المستخدم بإدخال قيمة . <br/>
            عندما ينبثق مربع موجه ، سيتعين على المستخدم النقر فوق "موافق" أو "إلغاء" للمتابعة.<br/>
            يمنع المستخدم من الوصول إلى أجزاء أخرى من الصفحة حتى يتم إغلاق الصندوق. 
            <CodeHighlighter code={`prompt("message","default value")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="prompt" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <ResultPrompt displayPrompt={displayPrompt} inputRef={exempleRefPrompt} inputChange={inputChange} clickCancel={click_on_cancel} clickOk={click_on_ok} promptValue="What's your favorite language?" route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html" title='prompt' logo={images.html_logo}>
            <button onClick={click_button}> Clik Here </button>
            <h2> {resultPromptValue} </h2>
        </ResultPrompt>
    </article>
</section>
    )
}