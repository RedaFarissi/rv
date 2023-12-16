import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function LoopFor(){
    const code1 = `text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";`
    const code2 = `for(let i=0 ; i< cars.length ; i++){
    text += cars[i] + "<br>"
}`
    const code3 = `for(statement 1,statement 2,statement 3){
    //code block to be executed
}`
    const code4 = `for (key in object) {
  //code block to be executed
}`
    const code5 = `for (key in array) {
  //code block to be executed
}`
    const code6 = `for(variable of iterable) {
  //code block to be executed
}
`
    const code7 = `Arrays.forEach( i => { 
    //code to be executed
});`
    const code8 = `Arrays.forEach(function(i){
    //code to be executed
});`
    const code9 = `function name_Function(i){
    //code to be executed
}
Arrays.forEach(name_Function)`


    const codeExemple1= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`for (let i = 0; i < 5; i++) {
  document.getElementById("h2").innerHTML += i + " ";
}`
    }
    const codeExemple2= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let arr = ["reda", "eskouni",25];
for (let i = 0; i < 5 ; i++) {
  document.getElementById("h2").innerHTML += arr[i] + "<br>";
}`
    }
    const codeExemple3= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let arr = ["reda", "eskouni",25];
for (let i = 0; i < arr.length; i++) {
  document.getElementById("h2").innerHTML += arr[i] + "<br>";
}`
    }
    const codeExemple4= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const person = {
  FirstName: "Reda",
  LastName: "Eskouni",
};
person.Age = 25;

for (let i in person) {
  document.getElementById("h2").innerHTML += person[i] + "<br>";
}`
    }
    const codeExemple5= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const person = ["Reda", "Eskouni",27];
for(let i in person){
    document.getElementById("h2").innerHTML += person[i] + "<br>"
}`
    }
    const codeExemple6= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const names = ["Reda", "Kamal", "Manal", "Fati"];
let all_names = "";

for (let x of names) {
  all_names += x + "<br>";
}

document.getElementById("h2").innerHTML = all_names;  `
    }
    const codeExemple7= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(num => {
    document.getElementById("h2").innerHTML += \`\${num} x 2 = \${num*2} <br>\`;
});`
    }
    const codeExemple8= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var name_nums=["reda", 2,3,13,2,9,6];
let str = "";
function MyFunction(element, index, array) {
  document.getElementById("h2").innerHTML += ("a[" + index + "] = " + element) + "<br>";
}
name_nums.forEach(MyFunction);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Loop</h1>
    <article>
        <p className="style_divv mt-5">
            يمكن أن تنفذ الحلقات(<small>Loop</small>) كتلة من التعليمات البرمجية عدة مرات.
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. الحلقات - Loop </h2>
        <p className="style_divv">
            الحلقات سهلة الاستخدام ، إذا كنت تريد تشغيل نفس الرمز مرارًا وتكرارًا ، في كل مرة بقيمة مختلفة.<br/>
            غالبًا ما يكون هذا هو الحال عند العمل مع المصفوفات:<br/><br/>
        <span><b>بدلا من كتابة :</b></span>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        <span><b>يمكنك كتابة:</b></span>
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            يدعم <b>JavaScript</b> أنواعًا مختلفة من الحلقات:
            <ul>
                <li><span>for</span> - حلقات من خلال كتلة من التعليمات البرمجية عدة مرات .</li>
                <li><span>for/in</span> - حلقات من خلال خصائص الكائن .</li>
                <li><span>for/of</span> - من خلال قيم الكائن القابل للتكرار</li>
                <li><span>while</span> - حلقات من خلال كتلة من التعليمات البرمجية عندما يكون الشرط المحدد صحيحًا </li>
                <li><span>do/while</span> -  يتكرر أيضًا عبر كتلة من التعليمات البرمجية بينما يكون الشرط المحدد صحيحًا </li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. For Loop </h2>
        <p className="style_divv">
            تحتوي الحلقة <b>for</b> على الصيغة التالية 
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <ul dir="rtl">
                <li><bdi>statement 1 </bdi> : يتم تنفيذه (مرة واحدة) قبل تنفيذ كتلة التعليمات البرمجية.</li>
                <li><bdi>statement 2 </bdi> : يحدد شرط تنفيذ كتلة التعليمات البرمجية. </li>
                <li><bdi>statement 3 </bdi> : يتم تنفيذه (في كل مرة) بعد تنفيذ كتلة التعليمات البرمجية.</li>
            </ul>
        </p>
        <div className="mital">متال 1 :  </div>
        <ul><li> سيتم تكرار السطر البرمجي 5 مرات .</li></ul> 
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop for' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 0 1 2 3 4 </h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <ul><li>في المتال المصفوفة تحتوي على 3 قيم و الحلقة <b>for</b> تقوم بتكرار 5 مراة مم يخلق قيم غير موجودة </li></ul> 
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Loop for" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop for' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> reda<br/>eskouni<br/>25<br/>undefined<br/>undefined </h2>
        </Result>
        <div className="mital">متال 3 :  </div>
        <ul><li> يمكن إستخدام الخاصية <b>length</b> لإنشاء حلقة تقوم بتكرار الأوامر بنفس عدد عناصر المصفوفة </li></ul> 
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Loop for" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop for' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> reda<br/> eskouni<br/> 25 </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. For In Loop </h2>
        <p className="style_divv">
            يمكن إستخدام <b>for in</b> مع الكائنات <small><small>(object)</small></small> و المصفوفات <small><small>(array)</small></small>
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code5} language="js" addClass="mt-3 mb-3" copie={true} />
        </p> 
        <div className="mital">متال 1 :  </div> 
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Loop for" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop for' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Reda<br/> Eskouni<br/> 25 </h2>
        </Result>
        <div className="mital">متال 2 :  </div> 
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Loop for" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Loop for' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Reda<br/>Eskouni<br/>27 </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. For Of Loop</h2>
        <p className="style_divv">
            تتكرر  <bdi><b>for of</b></bdi> عبر قيم الكائن القابل للتكرار.<br/>
            يتيح لك إجراء حلقة حول هياكل البيانات القابلة للتكرار مثل <b>Arrays</b> و <b>Strings</b> و <b>Maps</b> و <b>NodeLists</b> والمزيد
            <CodeHighlighter code={code6} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div> 
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>  </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. Array forEach</h2>
        <p className="style_divv">
            تسمح لك طريقة <bdi><b>forEach()</b></bdi> بتنفيذ وظيفة معينة على كل عنصر من عناصر المصفوفة.<br/>
            تستدعي طريقة <bdi><b>forEach()</b></bdi> دالة (دالة رد نداء) مرة واحدة لكل عنصر مصفوفة
            <CodeHighlighter code={code7} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code8} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code9} language="js" addClass="mt-3 mb-3" copie={true} />
        </p> 
        <div className="mital">متال 1 :  </div> 
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 1 x 2 = 2<br/>2 x 2 = 4<br/>3 x 2 = 6<br/>4 x 2 = 8<br/>5 x 2 = 10<br/>6 x 2 = 12<br/>7 x 2 = 14<br/>8 x 2 = 16<br/>9 x 2 = 18<br/>10 x 2 = 20 </h2>
        </Result>
        <div className="mital">متال 2 :  </div> 
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} language="html" is_html={true} title="Objects" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple8.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Objects' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> a[0] = reda<br/>a[1] = 2<br/>a[2] = 3<br/>a[3] = 13<br/>a[4] = 2<br/>a[5] = 9<br/>a[6] = 6 </h2>
        </Result>
    </article>
</section>
    )
}
