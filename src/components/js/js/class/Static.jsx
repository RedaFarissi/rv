import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Static(){
    const codeExemple1= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")

class Class_name{
    static a ;
    static b;
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }

}

let myCar_object = new Class_name(20,90);

result.innerHTML = myCar_object.a + "<br/>";`
    };
    const codeExemple2= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result")

class Class_name{
    constructor(a) {
        this.a = a;
    }
    static hello(){
      return "Hello Word"
    } 

}

result.innerHTML = Class_name.hello()`
    };
    
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Static</h1>
    <article>
        <p className="style_divv mt-5">
            يتم تعريف <b>static class</b> في الفئة نفسها.<br/>
            لا يمكنك استدعاء طريقة ثابتة على <b>object</b>، فقط على <b>object class</b>.<br/>
        </p> 
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Static" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Static' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>20</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Static" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Static' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Hello Word</h2>
        </Result>
    </article>
</section>
    )
}