import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Functions(){
    const code1 = `function name_Function(parameter , parameter2 , parameter3){
   //code to be executed
}`
    const code2 = `function name_Function(parameter1 , parameter2){
    return parameter1 * parameter2 ; 
}`
    const code3 = `//CAN NOT use lang here

function name_Function() {
   let lang = "HTML";
   //CAN use lang here
}
//CAN NOT use lang here`
    
    const codeExemple1= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function my_names(f_name, l_name) {
  document.getElementById("h2").innerHTML = f_name + " " + l_name;
}`
    }
    const codeExemple2= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function my_names(f_name, l_name) {
  document.getElementById("h2").innerHTML = f_name + " " + l_name;
}

my_names("Reda","Eskouni")`
    }
    const codeExemple3= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function my_names(id,f_name, l_name) {
    document.getElementById(id).innerHTML = f_name + " " + l_name;
}
  
my_names("h2","Reda","Eskouni")`
    }
    const codeExemple4= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function About_me(){
      document.getElementById("h2").innerHTML = "First Name: Reda <br>";
      document.getElementById("h2").innerHTML += "Age: 27 <br>";
      document.getElementById("h2").innerHTML += "Last Name: Eskouni <br>";
      document.getElementById("h2").innerHTML += "Nationality: Moroccan <br>";
      document.getElementById("h2").style = \`color:red; 
                                           border:2px solid black;
                                           padding:9px;
                                           width:max-content; 
                                           margin:auto;\`
    
    }
    About_me();`
    }
    const codeExemple5= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function multi(x, y) {
  return \`\${x} x \${y} = \${x * y} <br/>\` 
}

document.getElementById("h2").innerHTML = multi(2, 1) + multi(2, 2) + multi(2, 3) + multi(2, 4) +
multi(2, 5) + multi(2, 6) + multi(2, 7) + multi(2, 8) + multi(2, 9) + multi(2, 10);`
    }
    const codeExemple6= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function plus_grand(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

let superieur1 = plus_grand(5, 20);

let superieur2 = plus_grand(500, 20);

document.getElementById("h2").innerHTML = superieur1 + superieur2;`
    }
    const codeExemple7= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function sum(x, y) {
  let sum;
  sum = x + y;
  return sum;
}

let d = sum(100, 99);

document.getElementById("h2").innerHTML = d;`
    }
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Function</h1>
    <article className="mt-5">
        <h2 className="title-h2"> 1. Function</h2>
        <p class="style_divv">
            الدالة <b>function</b> هي كتلة من التعليمات البرمجية مصممة لأداء مهمة معينة.<br/>
            يتم تنفيذ وظيفة <b>JavaScript</b> عند الإستدعاء.<br/>
            يمكنك إعادة استخدام الكود: قم بتعريف الكود مرة واحدة ، واستخدمه عدة مرات من خلال <b>function</b>.<br/>
            يتم تعريف دالة <b>JavaScript</b> بالكلمة الأساسية للوظيفة ، متبوعة باسم ، متبوعًا بأقواس ().<br/>
            يمكن أن تحتوي أسماء الوظائف على أحرف وأرقام وشرطات سفلية وعلامات الدولار <small><small>(نفس قواعد المتغيرات)</small></small>.<br/><br/>
            قد تتضمن الأقواس <b>parameters</b> مفصولة بفواصل وذالك من اجل إستخدامها وسط الدالة : (<bdi>parameter,parameter2</bdi>) <br/>
            يتم وضع الكود المطلوب تنفيذه بواسطة الوظيفة داخل أقواس معقوفة: {}<br/>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div class="mital"> متال 1 :  </div>
        <ul><li> عند تشغيل الكود لن يحدت أي شيء لأننا لم نقم بستدعاء الدالة <small><small>(function)</small></small> </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            
        </Result>
        <div class="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <div class="mital"> متال 3 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <div class="mital"> متال 4 :  </div>
        <ul><li>يمكن إنشاء دالة <small><small>(function)</small></small> بدون <b>parameters</b></li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 style={{color:"red", border:"2px solid black" , padding:"9px", width:"max-content", margin:"auto"}}>
                First Name: Reda<br/>
                Age: 27<br/>
                Last Name: Eskouni<br/>
                Nationality: Moroccan
            </h2>
        </Result>
    </article> 
    <article> 
        <h2 className="title-h2">2. Function Return</h2>
        <p class="style_divv">
            تستخدم الكلمة <b>return</b> داخل الدالة <small><small>(function)</small></small> ، عندما تصل <b>JavaScript</b> إلى عبارة إرجاع ، ستتوقف الدالة عن التنفيذ.
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div class="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>2 x 1 = 2<br/>2 x 2 = 4<br/>2 x 3 = 6<br/>2 x 4 = 8<br/>2 x 5 = 10<br/>2 x 6 = 12<br/>2 x 7 = 14<br/>2 x 8 = 16<br/>2 x 9 = 18<br/>2 x 10 = 20<br/></h2>
        </Result>
    </article> 
    <article> 
        <h2 className="title-h2">3. Functions As Variables</h2>
        <p class="style_divv">
            يمكن استخدام الدوال <small><small>(function)</small></small> بنفس الطريقة التي تستخدم بها المتغيرات ، في جميع أنواع الصيغ والتعيينات والحسابات. <br/>
            وذالك فقط مع الدوال التي تقوم بإعادة قيمة <small><small>(الدوال التي تحتوي على الكلمة return)</small></small>
            <CodeHighlighter code={`let x = name_Function(parameter1);`} language="js" addClass="mt-3 mb-3" copie={true} />  
        </p>
        <div class="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>520</h2>
        </Result>
    </article> 
    <article> 
        <h2 className="title-h2">4. Local Variables</h2>
        <p class="style_divv">
            المتغيرات المعلنة ضمن دالة <b>JavaScript</b> ، تصبح محلية <small><small>(LOCAL)</small></small> لدالة.<br/>
            لا يمكن الوصول إلى المتغيرات المحلية إلا من داخل الدالة.<br/>
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div class="mital"> متال :  </div>
        <ul><li> في المتال أسفله لا يمكن إستخدام المتغير sum خارج الدالة لأنه معرف وسط الدالة </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>199</h2>
        </Result>
    </article> 
</section>
    )
}