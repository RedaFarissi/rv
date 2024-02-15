import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Private(){
    const codeExemple1= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`class ClassName {
  #a;
  #b;

  constructor(x, y) {
    this.#a = x;
    this.#b = y;
  }

  add() {
    return this.#a + this.#b;
  }
}

const result = document.getElementById("result");
let obj = new ClassName(20, 90);

result.innerHTML = obj.add() + "<br>";
result.innerHTML += obj.a; // will return undefined`
    };
    const codeExemple2= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`class ClassName {
  constructor(x, y) {
    const result = document.getElementById("result");
    this.a = x;
    this.b = y;
    result.innerHTML = this.#sum() + "<br>";
  }
  #sum() {
    return this.a + this.b;
  }
}

let obj = new ClassName(2000, 22);`
    };
    
    
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Private</h1>
    <article>
        <p className="style_divv mt-5">
            كقيمة إفتراضية  جميع متغيرات ال <b>class</b> تكون <b>public</b> .<br/>
            يتم تقديم متغيرات <bdi><b>private class</b></bdi> للسماح بستخدام المتغيرات  في ال <b>class</b> فقط .<br/>
            يمكن إنشاء <b>private methode</b> داخل ال <b>class</b> أيضا .
        </p> 
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Static" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Static' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>110<br/>undefined</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Static" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Static' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>2022</h2>
        </Result>
    </article>
</section>
    )
}