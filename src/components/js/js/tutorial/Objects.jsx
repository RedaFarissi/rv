import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Objects(){
    const code1 = `car.name
car.model
car.color
car.max_speed`
    const code2 = `car["name"]
car["model"]
car["color"]
car["max_speed"]`
    const code3 = `const person = {
    FirstName: "Reda",
    LastName : "Eskouni",
    Age     : 25,
    fullName : function() {
        if(this.Age > 20){
            return this.FirstName + " " + this.LastName; 
        }
    }
};`
    const code4 = `const person = {
    FirstName: "Reda",
    LastName : "Eskouni",
    Age     : 25,
    fullName() {
        if(this.Age > 20){
            return this.FirstName + " " + this.LastName; 
        }
    }
};`

    const codeExemple1= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let car = {name:"BMW", model:"M440i/M440d", color: "black", max_speed: "300 км"};
document.getElementById("h2").innerHTML = "The car name is: " + car.name + "<br>";
document.getElementById("h2").innerHTML += "The car model is: " + car.model + "<br>";
document.getElementById("h2").innerHTML += "The car color is: " + car.color + "<br>";
document.getElementById("h2").innerHTML += "The car max speed is: " + car.max_speed + "<br>";`
    }
    const codeExemple2= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let car = {name:"BMW", model:"M440i/M440d", color: "black", max_speed: "300 км"};
document.getElementById("h2").innerHTML = car`
    }
    const codeExemple3= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const person = {
  FirstName: "Reda",
  LastName: "Eskouni",
  Age: 25,
  fullName: function() {
    return this.FirstName + " " + this.LastName;
  }
};

document.getElementById("h2").innerHTML = person.fullName();`
    }
    const codeExemple4= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const person = {
  FirstName: "Reda",
  LastName: "Eskouni",
  Age: 25,
  fullName: function() {
    if(this.Age > 20){
      return this.FirstName + " " + this.LastName;
    }
  }
};

document.getElementById("h2").innerHTML = person.fullName();`
    }
    const codeExemple5= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const person = {
  FirstName: "Reda",
  LastName: "Eskouni",
  Age: 25,
  fullName: function() {
    if(this.Age > 20){
      return this.FirstName + " " + this.LastName;
    }
  }
};

document.getElementById("h2").innerHTML = person.fullName;`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Objects</h1>
    <article className="mt-5">
        <h2 className="title-h2">1.  Objects</h2>
        <p className="style_divv">
            تمثل فئة <b>Object</b> أحد أنواع بيانات <b>JavaScript</b>. يتم استخدامه لتخزين العديد من المجموعات ذات المفاتيح والكيانات الأكثر تعقيدًا.<br/>
            الكائنات هي متغيرات أيضًا. لكن يمكن أن تحتوي على العديد من القيم.<br/>
            تتميز الكئنات بمفتاح لكل خاصية 
            <CodeHighlighter code={`const car = {name:"BMW", model:"M440i/M440d" , color:"black", max_speed:"300 KM"}`} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن عرض عناصر الكائن بطريقين <br/>
            <b> الطريقة 1</b>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            <b> الطريقة 2</b>
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <ul><li>يمكن عرض عناصر الكائن <small><small>(Object)</small></small> عبر إستخدام المفتاح <small><small>(key)</small></small></li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>
                The car name is: BMW<br/>
                The car model is: M440i/M440d<br/>
                The car color is: black<br/>
                The car max speed is: 300 км
            </h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <ul><li> على عكس المصفوفة<small><small>(Array)</small></small>  لا يمكن عرض عناصر الكائن <small><small>(Object)</small></small> كنص من نوع <b>string</b> من خلال كتابة إسم الكائن </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>[object Object]</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2 . Object Methods</h2>
        <p className="style_divv">
            يمكن أن تحتوي الكائنات أيضًا على طرق <small><small>(methods)</small></small> <br/>
            <b>methods</b> هي الإجراءات التي يمكن تنفيذها على الكائنات.<br/>
            يتم تخزين <b>methods</b> في الخصائص كتعاريف للدالة .<br/>
            <b> الطريقة 1 </b>
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <b> الطريقة 2 </b>
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <div className="mital"> متال 3 :  </div>
        <ul><li>إذا قمت بالوصول إلى الدالة بدون الأقواس () ، فستعيد تعريف الوظيفة</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>function() {"{"} if(this.Age {">"} 20){"{"} return this.FirstName + " " + this.LastName; {"} }"}</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. this</h2>
        <p className="style_divv">
            في <b>JavaScript</b> ، تشير  الكلمة  <b>this</b> إلى كائن.<br/>
            أي كائن يعتمد على كيفية استخدام أو استدعاء بواسطة الكلمة <b>this</b>.<br/>
            تشير  الكلمة <b>this</b> الأساسية إلى كائنات مختلفة اعتمادًا على كيفية استخدامها <br/>
        </p>
    </article>
</section>
    )
}