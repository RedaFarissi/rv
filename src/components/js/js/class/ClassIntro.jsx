import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState, useEffect } from 'react';

export default function ClassIntro(){
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
      setCurrentDate(new Date()); 
  },[]); 

  const code1 = `class Class_Name {
  constructor(){ ... }
}`
  const code2 = `class Class_Name {
  constructor(){ ... }
}

var obj = new Class_Name()`
  const code3 = `class Class_Name {
  constructor(){ ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

var obj = new Class_Name()`


  const codeExemple1= { 
    code: `        <h1>JavaScript Class</h1>
     <p>How to use a JavaScript Class.</p>
     <h5 id="result"></h5>

     <script src="./index.js"></script>`,
    script:`class Car {
  constructor(name, speed) {
    const result = document.getElementById("result");
    result.innerHTML = \`name : \${name} speed : \${speed} km\`;
  }
}

var obj = new Car("BMW", 200);`
  };
  const codeExemple2= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`class Car {
  constructor(name, year) {
    this.name = name
    this.year = year 
  }

}
  
var myCar = new Car("Ford", 2014);
const result = document.getElementById("result");
  
result.innerHTML =  myCar.name + " " + myCar.year `
  };
  const codeExemple3= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`class Cars {
   constructor(a, b) {
     this.a = a;
     this.b = b;
   }
   age(){
     let date = new Date();
     return date.getFullYear() - this.b;
   }
} 

let myCar = new Cars("Ford", 2014);
document.getElementById("result").innerHTML = "My car is " + myCar.age() + " years old.";`
  };
  const codeExemple4= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`class Moyen {
    constructor( a , b ) {
      this.a = a 
      this.b = b 
    }
    name(name){
      const res = document.getElementById("result");
      var d = (this.a + this.b) / 2
      res .innerHTML = " name : " + name + "<br/> moyen : " + d
    }
}
var obJ = new Moyen(20 , 0)
obJ.name("reda")`
  }

  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript Class </h1>
  <article className="mt-5">
        <h2 className="title-h2">1 - JavaScript Class Syntax</h2>
        <p className="style_divv">
            استخدم  الكلمات <b>class</b> الرئيسية لإنشاء فصل دراسي.<br/>
            أضف دائمًا طريقة باسم <bdi><b>constructor()</b></bdi>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Class" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Class' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>JavaScript Class</h1>
            <p>How to use a JavaScript Class.</p>
            <h5>name : BMW speed : 200 km</h5>
        </Result>
  </article>
  <article>
        <h2 className="title-h2">2 - Using a Class</h2>
        <p className="style_divv">
            عندما يكون لديك class ، يمكنك استخدامه وذالك لإنشاء كائن أو كائنات <bdi>(object)</bdi> .
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Class" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Class' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Ford 2014</h2>
        </Result>
  </article>
  <article>
        <h2 className="title-h2"> 3 - The Constructor Method</h2>
        <p className="style_divv">
            طريقة <b>constructor</b> هي طريقة خاصة:<br/>
            يجب أن يكون لها الاسم الدقيق <b>constructor</b>.<br/>
            يتم تنفيذه تلقائيًا عند إنشاء كائن جديد.<br/>
            يتم استخدامه لتهيئة خصائص الكائن.<br/>
            إذا لم تحدد طريقة <b>constructor</b> ، فستضيف <b>JavaScript</b> طريقة <b>constructor</b> فارغة.
        </p>
  </article>
  <article>
        <h2 className="title-h2">4 - Class Methods</h2>
        <p className="style_divv">
            يتم إنشاء طرق <b>class</b> بنفس بناء الجملة مثل طرق الكائن.<br/>
            استخدم <b>class</b> الكلمة الأساسية لإنشاء <b>class</b> .<br/>
            أضف دائمًا طريقة <bdi><b>constructor()</b></bdi>.<br/>
            ثم أضف أي عدد من <b>Method</b>.
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1:  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Class" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Class' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> My car is {currentDate.getFullYear() - 2014} years old.</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Class" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Class' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>name : reda<br/>moyen : 10</h2>
        </Result>
    </article>
</section>
    )
}