import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";


export default function ClientWidth(){
    const codeExemple1= { 
    head:`
    <style>
        #div_H{
            width: 20rem;
            height: 90px;
            background-color: red;
            color: white;
            font-size: 25px;
            padding: 2px;
            border:0px; 
            padding:0px;
        }
    </style>`,
    code: `     <h2 id="result"> </h2>
     <div id="div_H"> Reda Eskouni </div>

     <script src="./index.js"></script>`,
    script:`var c_Width = document.getElementById("div_H").clientWidth
var c_height = document.getElementById("div_H").clientHeight
document.getElementById("result").innerHTML = \`clientWidth : \${c_Width}px <br/>\`
document.getElementById("result").innerHTML += \`clientHeight : \${c_height}px\``
    }
    
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript clientWidth</h1>
    <article className="mt-5">
        <p className="style_divv">
            <b>clientWidth</b> هو عدد صحيح يتوافق مع <b>clientWidth</b> للعنصر بالبكسل. الخاصية <b>clientWidth</b> للقراءة فقط.<br/>
            <CodeHighlighter code={`element.clientWidth`} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`element.clienHeight`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="location" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='location' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>clientWidth : 320px</h2>
            <h2>clientHeight : 90px</h2>
            <div style={{width:"20rem",height:"90px",backgroundColor:"red",color:"white",fontSize:"25px",padding:"2px",border:"0px",padding:"0px", }}>
                Reda Eskouni 
            </div>
        </Result>
    </article>
</section>
    )
}
