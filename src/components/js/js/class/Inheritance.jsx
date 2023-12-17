import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Inheritance(){
    // function super_function(){
    //     alert("first name : Reda last name : Eskouni") ;
    //     alert("Hello Reda");
    //     document.getElementById("btn_test").removeEventListener("click" ,super_function )
    // }
    // document.getElementById("btn_test").addEventListener("click" ,super_function )

    const codeExemple1= { 
    code: `      <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return \`I have a \${this.carname}\`;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return \`\${this.present()}, it is a \${this.model}\`;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById('result').innerHTML = myCar.show()
`
    };
    const codeExemple2= { 
    code: `     <button id="btn_test">  Click me  </button>

     <script src="./index.js"></script>`,
    script:`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    alert(\`Hello \${this.name}\`);
  }
}

class Student extends Person {
  constructor(name, lastName) {
    super(name);
    this.lastName = lastName;
    alert(\`First name: \${this.name} Last name: \${this.lastName}\`);
  }
}

function functionName() {
  let student1 = new Student("Reda", "Eskouni");
  student1.greet();
  const btn = document.getElementById("btn_test");
  btn.removeEventListener("click", functionName);
}

document.getElementById("btn_test").addEventListener("click", functionName);`
    };
    const codeExemple3= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:`class Car {
  constructor(brand) {
    this.carname = brand;
  }

  get cnam() {
    return this.carname;
  }
}

let myCar = new Car("Ford");

const result = document.getElementById("result");
result.innerHTML = myCar.cnam;`
    };
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Inheritance</h1>
    <article>
        <h2 className="title-h2">1 - Inheritance</h2>
        <p className="style_divv">
            <b>Inheritance</b>  وتعني وراثة .<br/>
            الوراثة مفيدة لإعادة استخدام الكود: إعادة استخدام خصائص وطرق <b>class</b> موجودة عند إنشاء <b>class</b> جديدة.<br/>
            لإنشاء وراثة <b>class</b> ، استخدم الكلمة الأساسية <b>extends</b>.<br/>
            ترث ال <b>class</b> التي تم إنشاؤها باستخدام ميراث  جميع <b>methods</b> من <b>class</b> لأخرى .<br/>
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Class" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Class' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>I have a Ford, it is a Mustang</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2 - <bdi>super()</bdi></h2>
        <p className="style_divv">
            طريقة <bdi><b>super()</b></bdi> تشير إلى ال <b>class</b> الأب.<br/>
            من خلال استدعاء طريقة <bdi><b>super()</b></bdi> في طريقة <b>constructor</b> ، فإننا نطلق على طريقة <b>constructor</b> الخاصة بالوالدين ونحصل على إمكانية الوصول إلى <b>properties</b> و <b>methods</b> الخاصة بالوالدين    
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Class" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
    </article>
    <article>
        <h2 className="title-h2">3 - Getters and Setters</h2>
        <p className="style_divv">
            يتيح لك <b>classes</b> أيضًا استخدام أدوات <b>getters</b> و <b>setters</b>.<br/>
            قد يكون من الذكاء استخدام <b>getters</b> و <b>setters</b> مع <b>properites</b> ، خاصة إذا كنت تريد القيام بشيء خاص بالقيمة قبل إعادتها ، أو قبل تعيينها.<br/>
            لإضافة <b>getters</b> و <b>setters</b> في <b>class</b> ، استخدم الكلمات الأساسية <b>get</b> و <b>set</b>.
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Class" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Class' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Ford</h2>
        </Result>
    </article>
</section>
    )
}