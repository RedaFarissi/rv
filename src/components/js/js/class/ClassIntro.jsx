import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ClassIntro(){
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

//   class Car {
//     constructor(name , speed){
//       const r = document.getElementById("resulta")
//       r.innerHTML = `name : ${name} speed : ${speed} km` 
//     }
//   }
//      var obj = new Car("BMW" , 200)
//    /********************************************************* */
//    class Cars {
//    constructor(a, b) {
//      this.a = a;
//      this.b = b;
//    }
//    age(){
//      let date = new Date();
//      return date.getFullYear() - this.b;
//    }
//    } 
//    let myCar = new Cars("Ford", 2014);
//    document.getElementById("demo").innerHTML =
//    "My car is " + myCar.age() + " years old.";
//    </script>
//    <script>
//      class Moyen {
//        constructor( a , b ) {
//          this.a = a 
//          this.b = b 
//        }
//        name(name){
//          const res = document.getElementById("res");
//          var d = (this.a + this.b) / 2
//          res .innerHTML = " name : " + name + " moyen : " + d
//        }
//      }
//   var obJ = new Moyen(20 , 0)
//   obJ.name("reda")
  const codeExemple1= { 
    code: `       <h2 id="result"></h2>

     <script src="./index.js"></script>`,
    script:``
  };
  const codeExemple2= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:``
  };
  const codeExemple3= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:``
  };
  const codeExemple4= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:``
  }
  const codeExemple5= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:``
  }
  const codeExemple6= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:``
  }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript Classes </h1>
  <article>
        <h2 className="title-h2">1 - JavaScript Class Syntax</h2>
        <p className="style_divv">
            استخدم  الكلمات <b>class</b> الرئيسية لإنشاء فصل دراسي.<br/>
            أضف دائمًا طريقة باسم <bdi><b>constructor()</b></bdi>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js139_class_Intro} className="img"/>
        <div className="styleee">
            <div id="h1">JavaScript Class</div>
            <p>How to use a JavaScript Class.</p>
            <div id="resulta"></div>  
        </div>
  </article>
  <article>
        <h2 className="title-h2">2 - Using a Class</h2>
        <p className="style_divv">
            عندما يكون لديك class ، يمكنك استخدامه وذالك لإنشاء كائن أو كائنات <bdi>(object)</bdi> .
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="sum_exemple_style">
            <div className="mital"> متال :  </div>
            <img src={images.js139_class_Intro2} className="img"/>
            <div className="styleee">
                <p>How to use a JavaScript Class.</p>   
                <p> Ford 2014 </p>     
            </div>
        </div>
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
        <div className="mital"> متال :  </div>
        <img src={images.js139_class_Intro3} className="img"/>
        <div className="styleee">
            <h2>JavaScript Class Method</h2>
            <p>How to define and use a Class method.</p>
            <p id="demo"></p>
        </div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js139_class_Intro4} className="img"/>
        <div className="styleee">
          <h2>JavaScript Class Method</h2>
          <p>How to define and use a Class method.</p>
          <p id="res"></p>    
        </div>
    </article>
</section>
    )
}