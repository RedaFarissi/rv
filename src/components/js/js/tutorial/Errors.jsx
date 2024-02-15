import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Errors(){
    const code1 = `try{
    //Block of code to try
}catch(err){
    //Block of code to handle errors
}
`
    const code2 = `throw "STRING"; 
throw 25;`
    const code3 = `try{
    //Block of code to try
}catch(err){
    //Block of code to handle errors
}finally{
    //code block to be executed
}`
    const codeExemple1= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`try{
  document.ge("h2").innerHTML = "Hello Word"
}catch(err){
  document.getElementById("h2").innerHTML = err.message
}`
    }
    const codeExemple2= { 
    code: `     <h2 id="demo1"></h2>
     <h2 id="demo2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function division(id,a,b){
    try{
        if( b == 0){throw "Error 404"};
        document.getElementById(id).innerHTML = "Reda"
    }catch(err){
        document.getElementById(id).innerHTML =  err 
    }
}
division("demo1",20,10)
division("demo2",8,0)`
    }
    const codeExemple3= { 
    script:`const promise = fetch("https://example.com/data")
.then(response => response.json())
.finally(() => {
  console.log("Always run this, regardless of promise outcome");
});`
    }
    

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Errors</h1>
    <article className="mt-5">
        <p className="style_divv">
            لتفادي اللأخطء في لغة البرمجة <b>JavaScriptn</b> نستعمل <b>try</b> و <b>catch</b> و <b>finally</b> تم <b>throw</b>.<br/>
            تحدد عبارة <b>try</b> مجموعة تعليمات برمجية ليتم تشغيلها (لتجربتها).<br/>
            تحدد تعليمة <b>catch</b> كتلة رمز للتعامل مع أي خطأ.<br/>
            تحدد العبارة <b>finally</b> مقطع رمز ليتم تشغيله بغض النظر عن النتيجة.<br/>
            العبارة <b>throw</b> تحدد خطأ مخصص.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. try and catch</h2>
        <p className="style_divv">
            تسمح لك عبارة <b>try</b> بتحديد كتلة من التعليمات البرمجية ليتم اختبارها بحثًا عن أخطاء أثناء تنفيذها.<br/>
            تسمح لك تعليمة <b>catch</b> بتعريف كتلة التعليمات البرمجية المراد تنفيذها ، في حالة حدوث خطأ في كتلة <b>try</b>.<br/>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <h4 className="mital">متال :  </h4>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>document.ge is not a function</h2>
        </Result>
    </article>
    <article>  
        <h2 className="title-h2">2. throw </h2>
        <p className="style_divv">
            عند حدوث خطأ ، ستتوقف <b>JavaScript</b> بشكل طبيعي وتنشئ رسالة خطأ.<br/>
            المصطلح التقني <b>throw</b> يسمح بإنشاء خطئ الخاص بك وتحديد محتوى رسالة الخطئ 
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <h4 className="mital">متال :  </h4>
        <ul><li>عند تنفيد الأمر البرمجي <b>throw</b> يتم تجاوز باقي الكود داخل <b>try</b> تم يتم الذهاب مباشرة إلى <b>catch</b></li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda<br/>Error 404</h2>
        </Result>
    </article>
    <article>  
        <h2 className="title-h2">3. finally</h2>
        <p className="style_divv">
            تتيح لك العبارة <b>final</b> تنفيذ التعليمات البرمجية ، بعد المحاولة والإمساك ، بغض النظر عن النتيجة
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <h4 className="mital">متال :  </h4>
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
    </article>
</section>
    )
}