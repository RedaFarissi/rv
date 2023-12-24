import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function SessionStorage(){
    const codeExemple1= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple2= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

    return(
        <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript sessionStorage</h1>
    <article>
        <p className="style_divv mt-5">
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
        <div className="mital"> متال 1 :  </div>
        <img src="{% static 'js/js49_sessionStorage.png' %}" className="img"/>
        <div className="styleee img">       
            <h2>Reda</h2>
        </div>
        <div className="mital"> متال 2 :  </div>
        <img src="{% static 'js/js49_sessionStorage2.png' %}" className="img"/>
        <div className="styleee img">       
            <h2> Reda <br/> null </h2>
        </div>
        </article>
    </section>
    )
}