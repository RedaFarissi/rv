import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function SessionStorage(){
    const codeExemple1= { 
    code: `     <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");

sessionStorage.setItem('username', 'Reda Eskouni');
sessionStorage.setItem('userRole', 'admin');

// Retrieve data from sessionStorage
var username = sessionStorage.getItem('username');
var userRole = sessionStorage.getItem('userRole');

result.innerHTML = \`Username: \${username}<br/>\`;
result.innerHTML += 'User Role: ' + userRole;`
    }


    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript sessionStorage</h1>
    <article className="mt-5">
        <p className="style_divv">
            يتيح لك كائن <b>sessionStorage</b> تخزين أزواج المفتاح / القيمة في التصفح .<br/>
            يخزن كائن sessionStorage البيانات لجلسة واحدة فقط.<br/>
            (يتم حذف البيانات عند إغلاق المتصفح).<br/>
            لحفظ البيانات في <b>sessionStorage</b> إستخدم :
            <CodeHighlighter code={`sessionStorage.setItem("key", value)`} language="js" addClass="mt-3 mb-3" copie={true} />
            لقراءة البيانات من <b>sessionStorage</b>  إستخدم :
            <CodeHighlighter code={`sessionStorage.getItem("key")`} language="js" addClass="mt-3 mb-3" copie={true} />
            لإزالة البيانات من <b>sessionStorage</b>  إستخدم :
            <CodeHighlighter code={`sessionStorage.removeItem("key")`} language="js" addClass="mt-3 mb-3" copie={true} />
            لإزالة الكل البيانات المخزنة داخل <b>sessionStorage</b>  إستخدم :
            <CodeHighlighter code={`sessionStorage.clear()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="sessionStorage" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js" code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='sessionStorage' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Username: Reda Eskouni<br/>User Role: admin</h2>
        </Result>   
    </article>
</section>
    )
}