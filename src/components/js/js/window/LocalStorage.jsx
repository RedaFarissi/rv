import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function LocalStorage(){
    const codeExemple1= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`localStorage.setItem("test", true);

if (localStorage.getItem("test") != null) {
  document.getElementById("result").innerHTML = localStorage.getItem("test");
}`
    }

    const codeExemple2= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`localStorage.setItem("Full_name", "Reda Eskouni");

const result = document.getElementById("result");

if (localStorage.getItem("test") != null) {
  result.innerHTML = localStorage.getItem("Full_name") + "<br>";
  localStorage.removeItem("Full_name");
  result.innerHTML += "<span style='color:#1592ff'>" + localStorage.getItem("Full_name") + "</span>";
}`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript localStorage</h1>
    <article className="mt-5">
        <p className="style_divv">
            يسمح لك كائن <b>localStorage</b> بحفظ أزواج المفتاح / القيمة في المتصفح.<br/>
            يخزن كائن التخزين المحلي البيانات بدون تاريخ انتهاء الصلاحية.<br/>
            لا يتم حذف البيانات عند إغلاق المتصفح ، وتكون متاحة للجلسات المستقبلية.<br/>
            لحفظ البيانات في <b>localStorage</b> إستخدم :
            <CodeHighlighter code={`localStorage.setItem("key", value)`} language="js" addClass="mt-3 mb-3" copie={true} />
            لقراءة البيانات من <b>localStorage</b>  إستخدم :
            <CodeHighlighter code={`localStorage.getItem("key")`} language="js" addClass="mt-3 mb-3" copie={true} />
            لإزالة البيانات من <b>localStorage</b>  إستخدم :
            <CodeHighlighter code={`localStorage.removeItem("key")`} language="js" addClass="mt-3 mb-3" copie={true} />
            لإزالة الكل البيانات المخزنة داخل <b>localStorage</b>  إستخدم :
            <CodeHighlighter code={`localStorage.clear()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="localStorage" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='localStorage' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>true</h2>
        </Result>   
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="localStorage" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='localStorage' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni<br/><span style={{color:"#1592ff"}}>null</span></h2>
            
        </Result>
    </article>
</section>
    )
}
