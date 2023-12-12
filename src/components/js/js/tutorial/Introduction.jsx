import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Introduction(){
    const code1 = `<!DOCTYPE html>
<html>
   <head>
      <title> Page Title </title>
      <!-- to work with different device -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!--  defer  to run the js file after loading the html elements-->
      <script defer src="viewport"> </script> 
   </head >
   <body>
     Content
   </body>
</html>`

    
    const codeExemple1= { 
    code:`      <script src="./reda.js"></script>`,
    script: `var d = "Reda Eskouni";
for (var i = 0 ;  i < 5 ; i++) {
   document.write("<h2>" + d + "</h2>")
}`
    }


    const codeExemple2= { 
        code:
    `<!DOCTYPE html>
    <html>
    <head>
       <title> Reda Eskouni  </title>
       <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h2 id="h2">Heading</h2>
    
        <p id="p">Date</p>
      
        <button onclick="header()">Change Heading</button>
      
        <button onclick="paragragh()">Date</button>
      
        <script src="./index.js"></script>  
    </body>
    </html>`,
        script: `function header() {
    document.getElementById("h2").innerHTML = "Reda Eskouni";
}

function paragragh() {
    document.getElementById("p").innerHTML = Date();
}`
    }
    function js_intro_header(){ document.getElementById("h2").innerHTML = "Reda Eskouni"}
	function js_paragragh(){ document.getElementById("p").innerHTML = Date();}
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Introduction</h1>
    <article>        
        <h2 className="title-h2">1. ما هي JavaScript ؟</h2>
        <p className="style_divv">
            <b>JavaScript</b> هي لغة البرمجة الأكثر شيوعًا في العالم و هي لغة لبرمجة الويب. كما تعتبر لغة سهلة التعلم. <br/>
            من خلال لغة <b>JavaScript</b> يمكنك جعل موقعك متجاوب <br/>
            تكتب أكواد <b>JavaScript</b> داخل الوسم <kbd>&lt;script&gt;&lt;/script&gt;</kbd> أوداخل ملف بمتداد <b>js</b> 
            يمكنك وضع أي عدد من عنصر <kbd>&lt;script&gt;</kbd> في مستند <b>HTML</b>.<br/>
            يمكن وضع العنصر <b>script</b> في عنصر <kbd>&lt;body&gt;</kbd> أو في قسم <kbd>&lt;head&gt;</kbd> بصفحة <b>HTML</b> أو في كليهما
            سيعلمك هذا البرنامج التعليمي <b>JavaScript</b> من الأساسي إلى المتقدم.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. طريقة إنشاء ملف JavaScript </h2>
        <h3 className="title-h3">1. طريقة إنشاء الملف</h3>
        <p className="style_divv">
            لإنشاء ملف <b>JavaScript</b> كل ما عليك فعله إنشاء ملف وأن تقوم بئعطائه إسم و صيغة <b>js</b> تم التأكد أن ملف داخل نفس المجلد الذي يحتوي ملف <b>html</b>.
        </p>
        <ul><li>في هاذا المتال قمنا بتسمية الملفين <b>reda</b> ولاكن يختلف الإمتداد فالملف الأول يحمل إمتداد <b>js</b> والملف التاني يحمل إمتداد <b>html</b> .</li></ul>
        <div className="mital">متال :  </div>
        <img src={images.js_Introduction3} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">2. طريقة ربط الملف html ب js</h2>
        <p className="style_divv">
            لربط ملف <b>html</b> بملف <b>js</b> يجب إستخدام الوسم <kbd>&lt;script&gt;</kbd> مع السمة <b>src</b> و مسار الملف .
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="reda.html"code={codeExemple1.code} language="html" is_html={true} title="Reda eskouni" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <CodeHighlighter file_name="reda.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Reda Eskouni' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2>Reda Eskouni</h2>            
            <h2>Reda Eskouni</h2>            
            <h2>Reda Eskouni</h2>            
            <h2>Reda Eskouni</h2>            
            <h2>Reda Eskouni</h2>            
        </Result>
        <div className="mital">متال 2 :  </div>
        <ul><li> <b>defer</b> لتشعيل ملف js بعد تحميل عناصر  html </li></ul>
        <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true}/>
    </article>
    <article>
        <h2 className="title-h2">3. التعليقات في لغة JavaScript </h2>
        <p className="style_divv">
            يمكن استخدام تعليقات <b>JavaScript</b> لشرح كود <b>JavaScript</b> ، ولجعله أكثر قابلية للقراءة.<br/>
            يمكن أيضًا استخدام تعليقات <b>JavaScript</b> لمنع التنفيذ ، عند اختبار كود بديل.<br/>
            تبدأ التعليقات المكونة من سطر واحد بـ //.<br/>
            سيتم تجاهل أي نص بين // ونهاية السطر بواسطة <b>JavaScript</b> (لن يتم تنفيذه). يكتب التعليق كالتالي :<br/>
            <div style={{color:"green",direction:"ltr"}}> <bdi>//Comment</bdi></div><br/>
            تبدأ التعليقات متعددة الأسطر بـ /* وتنتهي بـ */.    سيتم تجاهل أي نص بين /* و */ بواسطة <b>JavaScript</b>. <br/>
            يستخدم هذا المثال تعليقًا متعدد الأسطر (جزء تعليق) لشرح الكود يكتب التعليق كالتالي :
            <div style={{color:"green",direction:"ltr"}}> <bdi>/* Comments * /</bdi></div>
        </p>
    </article>
    <article>
        <h2 className="title-h2">4. تغيير محتوى HTML عبر لغة JavaScript </h2>
        <p className="style_divv">
            يمكن تغيير محتوى عناصر <b>HTML</b> عبر لغة <b>JavaScript</b> . إحدى طرق <b>JavaScript</b>  العديدة لتغيير المحتوى هي <b><bdi>getElementById()</bdi></b> .
            المثال أدناه يجد العانصر <b>HTML</b> عبر <b>id</b> ، ويغير محتوى العنصر 
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Reda eskouni" addClass="mt-3 mb-3" copie={true} number={true}/>
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js" addClass="mt-3 mb-3" copie={true} number={true}/>
        <Result title='Reda Eskouni' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 id="h2">Heading</h2>
            <p id="p">Date</p>        
            <button onClick={js_intro_header}>Change Heading</button>
            <button onClick={js_paragragh}>Date</button>                 
        </Result>
    </article>
   
</section>
    )
}