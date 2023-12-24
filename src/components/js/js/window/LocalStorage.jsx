import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function LocalStorage(){
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
    <h1 className="heading-style heading-style-js-color">JavaScript localStorage</h1>
    <article>
        <p className="style_divv mt-5">
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
        <img src={images.js48_localStorage} className="img"/>
        <div className="styleee">       
            <h2>true</h2>
        </div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js48_localStorage2} className="img"/>
        <div className="styleee">       
            <h2>Reda Eskouni <br/> <span>null</span></h2>
        </div>
    </article>
</section>
    )
}
