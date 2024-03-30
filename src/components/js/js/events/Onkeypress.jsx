import { CodeHighlighter } from "../../../path";

export default function Onkeypress(){
    const code1 = `<!-- Code HTML -->
<element onkeypress="//script">`
    const code2 = `// Code JavaScript 
object.onkeypress = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() 
object.addEventListener("keypress", function_name )`
    const codeExemple1= { 
    code: `<!DOCTYPE html>
<html>
<head>
      <title> onkeypress </title>
      <link rel="icon" href="./html_logo.png" type="image/png">
      <meta name="viewport" content="width=device-width, initial-scale=1"> 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body onkeypress="myFunction(event)">
      <!-- HTML CODE -->
      <script>
          function myFunction(event) {
            alert("event =" + event.key + "\\n type is = "+ typeof event.key)
          }
      </script>
</body>  
</html>`,
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style">JavaScript onkeypress</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>onkeypress</b> عندما يضغط المستخدم على مفتاح (على لوحة المفاتيح).<br/>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <div className="alert">
                 ترتيب الأحداث المتعلقة بحدث <b>onkeypress</b>:<br/><br/>
                <ol>
                    <li><b>onkeydown</b> : لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . </li>
                    <li><b>onkeypress</b> :  لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . يعمل فقط على أزرار الحروف و الأرقام</li>
                    <li><b>onkeyup</b> : لتنقيد الأوامر عند النقر على أحد أزرار الكيبورد و رفع الإصبع عنها </li>
                </ol>
            </div>
        </p>
        <div className="mital">متال :  </div>
        <ul><li>عند النقر على أي حرف أو رقم ضمن موقعك</li></ul>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" addClass="mt-3 mb-3" copie={true}  number={false}/>  
    </article>
</section>
    )
}
