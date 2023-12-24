import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function PageYOffset(){
    // function name_function(){
    //     alert( "pageYOffset  = " + pageYOffset)
    //  }
    
    const codeExemple1= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript pageYOffset</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>pageYOffset</b> بإرجاع وحدات البكسل التي تم تمرير مستند إليها من الزاوية اليسرى العليا من النافذة.<br/>
            الخاصية <b>pageYOffset</b> تساوي الخاصية <b>scrollY</b>.<br/>
            خاصية <b>pageYOffset</b> للقراءة فقط .<br/>
            يتم الوصول إلى  <b>pageYOffset</b> باستخدام :<br/>
            <CodeHighlighter code={`pageYOffset`} language="js" addClass="mt-3 mb-3" copie={true} />
            أو
            <CodeHighlighter code={`window.pageYOffset`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js43_pageYOffset.png' %}" className="img"/>
        <div className="styleee img">
            <button onclick="name_function()" style={{outline:"none",border:"1px solid black"}}>Click me to get scroolY</button>
        </div>
    </article>
</section>
   )
}