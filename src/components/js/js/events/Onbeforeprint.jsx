import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onbeforeprint(){
    const codeExemple1= { 
        code: `<!DOCTYPE html>
<html>
<head>
   <title> onbeforeprint </title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
  
<body onbeforeprint="before()">
    <h2 id="h2">this is heading</h2>  
    <p id="p">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    </p>
        
    <img src="./hajime.jpg" style="width:500px; height:500px; object-fit:cover; border: 8px solid black; margin:auto;">   
        
    <script src="./index.js"></script>
</body>
</html>`,
    script:`function before() {
    document.getElementById("h2").style = "font-size:80px; text-align:center;color:red;";
    document.getElementById("p").style = "font-size:20px; border:2px solid black;padding: 20px";
    document.images[0].style.display = "none";
}`
    }
    
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript onbeforeprint</h1>
    <article>
        <p className="style_divv mt-5">
            يقع الحدث <b>onbeforeprint</b> عندما تكون الصفحة على وشك الطباعة قبل ظهور مربع حوار الطباعة .<br/>
            يستعمل الحدث <b>onbeforeprint</b> لإجراء تعديل على موقعك قبل الطباعة .<br/>
            <CodeHighlighter code={`<body onbeforeprint="function_name()">`} language="html" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" title="onbeforeprint" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="onbeforeprint" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 id="h2">  this is heading  </h2>
            <p id="p">  Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
            <img src={images.hajime} alt="hajime" style={{width:"500px", height:"500px",objectFit:"cover", border: "8px solid black", margin:"auto"}}/>   
        </Result>
        <p dir='ltr'><kbd>Ctrl</kbd> + <kbd>p</kbd></p>
        <img src={images.js53_beforeprint_3} alt='beforeprint' className="img"/>
    </article>
</section>
    )
}