import { CodeHighlighter } from "../../../path";

export default function Onresize(){
    const code1 = `<!-- Code HTML -->
<body onresize="//script">`
    const code2 = `// Code JavaScript 
object.onresize = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("resize", function_name )`
    const codeExemple1= { 
    code: `<!DOCTYPE html>
<html lang="en">
<head>
   <title> onresize </title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <style>
      div {
        background-color: red;
        color: white;
        min-height: 300px;
        padding: 20px;
      }
    </style>        
</head>
<body onresize="function_name()">
         
      <h1> Heading </h1>
      <p> Paragraph </p>
      <div id="div"> div box </div>
      
    <script>
        const div = document.getElementById('div')

        function function_name() {
          div.style.backgroundColor = "green"
          div.style.textAlign = "center"
          div.style.fontSize = "25px"
        }
    </script>  
</body>  
</html>`,
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onresize</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onresize</b> عندما يتم تغيير حجم نافذة المتصفح.<br/>
            للحصول على حجم عنصر ، استخدم خصائص <b>clientWidth</b> ، و <b>clientHeight</b> ، و <b>innerWidth</b> ، و <b>innerHeight</b> ، و <b>OuterWidth</b> ، و <b>OuterHeight</b> ، و <b>offsetWidth</b> و / أو <b>offsetHeight</b>.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>    
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" title="onmouseenter" addClass="mt-3 mb-3" copie={true}  number={true}/>  

    </article>
</section>
    )
}