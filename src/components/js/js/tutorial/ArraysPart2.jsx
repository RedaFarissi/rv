import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ArraysPart2(){
    const code1 = `const fruits1 = [ "Orange","Banana","Apple","Mango"];
const fruits2 = [ "Lemon","Kiwi","Pear","Fig"];
const fruits3 = fruits1.concat(fruits2)`
    const code2 = `const fruits1 = [ "Orange","Banana","Apple","Mango"];
const fruits2 = [ "Lemon","Kiwi","Pear","Fig"];
const fruits3 = [ "Apricots","Jackfruit","Honeydew Melon","Watermelon"];
const fruits4 = fruits1.concat(fruits2,fruits3)`
    const code3 = `const fruits1 = [ "Orange","Banana","Mango"];
const fruits2 = fruits1.concat("Apple")`
    const code4 = `const fruits = ["Orange","Pear","Mango","Banana"];
fruits.splice(2,0,"Apricots","Kiwi","Watermelon");`
    const code5 = `const fruits = ["Orange","Pear","Mango","Banana"];
fruits.splice(1,1);`
    const code6 = `const fruits = ["Orange","Pear","Mango","Kiwi"];
const new_fruits = fruits.splice(2);`
    const code7 = `const alphabets = ["O","E","M","K","A","C","Z","F","B","T"];
alphabets.sort();`
    const code8 = `const numbers = [6,9,2,0,3,8,-22,1,4,7];
numbers.sort();`
    const code9 = `const alphabets = ["O","E","M","K","A","C","Z","F","B","T"];
alphabets.reverse();`
    const code10 = `const alphabets = ["O","E","M","K","A","C","Z","F","B","T"];
alphabets.sort();
alphabets.reverse();`
    const code11 = `const names = [
    {first_name:"Reda", last_name:"Eskouni"},
    {first_name:"Adil", last_name:"Eskouni"},
    {first_name:"Youssef", last_name:"Arbouch"}
];
document.getElementById("h2").innerHTML = names[0]['first_name']
document.getElementById("h2").innerHTML += names[0].first_name`
    const code12 = `function myFunction(value){
    if(value != 25)
        return value * 2 ;
    else
        return value * 1000  ;
}
const numbers1 = [45,4,9,10,25];
const numbers2 = numbers1.map(myFunction);`
    const code13 = `function myFunction(value){
    if(value > 9)
        return value;
}
const numbers1 = [45,4,9,10,25];
const numbers2 = numbers1.filter(myFunction);`
    const code14 = `const names = ['Rayan','Jhon','Kamal','Akachi','Rawya'];
document.getElementById("h2").innerHTML = names.indexOf("Jhon")`
    const code15 = `const names = ['Rayan','Jhon','Kamal','Rayan','Rawya'];
document.getElementById("h2").innerHTML = names.lastIndexOf("Rayan")`

    const codeExemple1= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits1 = ["Orange", "Banana", "Apple", "Mango"];
const fruits2 = ["Lemon", "Kiwi", "Pear", "Fig"];
const fruits3 = fruits1.concat(fruits2);
document.getElementById("h2").innerHTML = fruits3;`
    }
    const codeExemple2= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits1 = ["Orange", "Banana", "Apple", "Mango"];
const fruits2 = ["Lemon", "Kiwi", "Pear", "Fig"];
const fruits3 = ["Apricots", "Jackfruit", "Honeydew Melon", "Watermelon"];

const fruits4 = fruits1.concat(fruits2, fruits3);

document.getElementById("h2").innerHTML = fruits4;`
    }
    const codeExemple3= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits1 = ["Orange", "Banana", "Mango"];
const fruits2 = fruits1.concat("Apple");
document.getElementById("h2").innerHTML = fruits2;`
    }
    const codeExemple4= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Orange", "Banana", "Mango"].concat(["Kiwi", "Mango"]);
document.getElementById("h2").innerHTML = fruits;`
    }
    const codeExemple5= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Orange", "Pear", "Mango", "Banana"];

document.getElementById("h2").innerHTML = fruits.splice(1, 1);`
    }
    const codeExemple6= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Orange", "Pear", "Mango", "Banana"];

document.getElementById("h2").innerHTML = fruits.splice(2);`
    }
    const codeExemple7= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const alphabets = ["O", "E", "M", "K", "A", "C", "Z", "F", "B", "T"];
alphabets.sort();
document.getElementById("h2").innerHTML = alphabets;`
    }
    const codeExemple8= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const numbers = [6, 9, 2, 0, 3, 8, -22, 1, 4, 7];

document.getElementById("h2").innerHTML = numbers.sort();`
    }
    const codeExemple9= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const alphabets = ["O", "E", "M", "K", "A", "C", "Z", "F", "B", "T"];
alphabets.reverse();
document.getElementById("h2").innerHTML = alphabets;`
    }
    const codeExemple10= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const alphabets = [ "D","E","M", "K","A", "C", "Z","F", "B", "T"];
alphabets.sort();
alphabets.reverse();
document.getElementById("h2").innerHTML = alphabets;`
    }
    const codeExemple11= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const names = [
  { first_name: "Reda", last_name: "Eskouni" },
  { first_name: "Adil", last_name: "Eskouni" },
  { first_name: "Youssef", last_name: "Arbouch" },
];

document.getElementById("h2").innerHTML = names[0].first_name + " " + names[0].last_name;`
    }
    const codeExemple12= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function myFunction(value) {
  if (value !== 25) {
    return value * 2;
  } else {
    return value * 1000;
  }
}

const numbers1 = [45, 4, 9, 10, 25];
const numbers2 = numbers1.map(myFunction);

document.getElementById("h2").innerHTML = numbers2;`
    }
    const codeExemple13= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`function myFunction(value) {
  if (value > 9) {
    return value;
  }
}

const numbers1 = [45, 4, 9, 10, 25];

const numbers2 = numbers1.filter(myFunction);

document.getElementById("h2").innerHTML = numbers2;`
    }
    const codeExemple14= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const names = ['Rayan', 'Jhon', 'Kamal', 'Akachi', 'Rawya'];
document.getElementById("h2").innerHTML = names.indexOf("Jhon");`
    }
    const codeExemple15= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const names = ['Rayan', 'Jhon', 'Kamal', 'Rayan', 'Rawya'];
document.getElementById("h2").innerHTML = names.lastIndexOf("Rayan");`
    }

return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Arrays</h1>
    <article className="mt-5">
        <details>
            <summary className='text-danger'> جميع العناوين  </summary>
                <div  dir="ltr">
                   <li><a className="text-light text-decoration-none" href="#Arrays-concat"><bdi> concat()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#Arrays-splice"><bdi> splice()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#Arrays-sort"><bdi> sort()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#Arrays-reverse"><bdi> reverse()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#Array-Objects"><bdi> Objects()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#map"><bdi>map()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#filter"><bdi>filter()</bdi> </a></li>
                   <li><a className="text-light text-decoration-none" href="#Array-indexOf"><bdi> indexOf() </bdi> </a></li>
                   <li><a className="text-light text-decoration-none" href="#Array-lastIndexOf"><bdi> lastIndexOf() </bdi></a></li>
                </div>
        </details>
    </article>
    <article>
        <h2 className="title-h2" id="Arrays-concat">1. <bdi> concat()</bdi></h2>
        <p className="style_divv">
            ينشئ التابع <bdi><b>concat()</b></bdi> مصفوفة جديدة بدمج (تسلسل) المصفوفات الموجودة 
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن إنشاء مصفوفة جديدة تحتوي على قيم أكتر من مصفوفتين بستعمال <bdi><b>concat()</b></bdi>  .
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />            
            يمكن إنشاء مصفوفة جديدة تحتوي على مصفوفة وقيمة مضافة  بستعمال <bdi><b>concat()</b></bdi> .
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`const fruits = [ "Orange","Banana","Mango"].concat(["Kiwi","Mango"])`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Banana,Apple,Mango,Lemon,Kiwi,Pear,Fig</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Banana,Apple,Mango,Lemon,Kiwi,Pear,Fig,Apricots,Jackfruit,Honeydew Melon,Watermelon</h2>
        </Result>
        <div className="mital">متال 3 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Banana,Mango,Apple</h2>
        </Result>
        <div className="mital">متال 4 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Banana,Mango,Kiwi,Mango</h2>
        </Result>
        <ul><li>لا يغير أسلوب <bdi><b>concat()</b></bdi> المصفوفات الموجودة. يقوم دائما بإرجاع مصفوفة جديدة.</li></ul>
    </article>
    <article>    
        <h2 className="title-h2" id="Arrays-splice">2. <bdi>splice()</bdi></h2>
        <p className="style_divv">
            يمكن استخدام طريقة <bdi><b>splice()</b></bdi> لإضافة عناصر جديدة إلى مصفوفة<br/>
            يحدد المعامل الأول الموضع الذي يجب إضافة عناصر جديدة إليه (مقسم).<br/>
            يحدد المعامل الثاني  عدد العناصر التي يجب إزالتها.<br/>
            تحدد باقي المعلمات  العناصر الجديدة المراد إضافتها.<br/>
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true} />
            باستخدام إعداد المعلمة الذكي ، يمكنك استخدام <bdi><b>splice()</b></bdi> لإزالة العناصر دون ترك "ثقوب" في المصفوفة
            <CodeHighlighter code={code5} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكنك استخدام <bdi><b>splice()</b></bdi> بقيمة واحدة لإزالة العناصر من بداية المصفوفة <small>(<small>عند هده الحالة يتم إنشاء مصفوفة جديدة</small>)</small>
            <CodeHighlighter code={code6} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Pear</h2>
        </Result>
        <div className="mital">متال 2  : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Mango,Banana</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2" id="Arrays-sort">3. <bdi>sort()</bdi></h2>
        <p className="style_divv">
            تقوم الطريقة <bdi><b>sort()</b></bdi> بترتيب العناصر أبجديا .
            <CodeHighlighter code={code7} language="js" addClass="mt-3 mb-3" copie={true} />
            تقوم الطريقة <bdi><b>sort()</b></bdi> بترتيب الأرقام أيضا .
            <CodeHighlighter code={code8} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>A,B,C,E,F,K,M,O,T,Z</h2>
        </Result>
        <div className="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple8.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>-22,0,1,2,3,4,6,7,8,9</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2"  id="Arrays-reverse">4. <bdi>reverse()</bdi></h2>
        <p className="style_divv">
            <CodeHighlighter code={code9} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكنك استخدام <bdi><b>reverse()</b></bdi> مع الطريقة <bdi><b>sort()</b></bdi> لفرز المصفوفة بترتيب تنازلي    
            تعكس طريقة  <bdi><b>reverse()</b></bdi> العناصر في المصفوفة.<br/>
            <CodeHighlighter code={code10} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple9.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>T,B,F,Z,C,A,K,M,E,O</h2>
        </Result>
        <div className="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple10.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple10.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Z,T,M,K,F,E,D,C,B,A</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2" id="Array-Objects">5. Array Objects</h2>
        <p className="style_divv">
            يمكن وضع <b>Object</b> داخل عناصر المصفوفة وإستخدامها في حالة إحتجت لستخدامها 
            <CodeHighlighter code={code11} language="js" addClass="mt-3 mb-3" copie={true} /> 
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple11.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple11.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <ul><li><small><small> ستتعلم حول Object بشكل أفضل في دروس قادمة</small></small></li></ul>
    </article>
    <article>
        <h2 className="title-h2" id="map">6. <bdi>map()</bdi></h2>
        <p className="style_divv">
            تُنشئ طريقة <bdi><b>map()</b></bdi> مصفوفة جديدة بتنفيذ دالة على كل عنصر من عناصر المصفوفة.<br/>
            لا تقوم طريقة <bdi><b>map()</b></bdi> بتنفيذ دالة لعناصر مصفوفة بدون قيم.<br/>
            لا يغير أسلوب <bdi><b>map()</b></bdi> المصفوفة الأصلية
            <CodeHighlighter code={code12} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple12.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple12.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>90,8,18,20,25000</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2" id="filter">7. <bdi>filter()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>filter()</b></bdi> بإنشاء مصفوفة جديدة بها عناصر مصفوفة تجتاز اختبارًا.<br/>
            ينشئ هذا المثال مصفوفة جديدة من عناصر بقيمة أكبر من 9
            <CodeHighlighter code={code13} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple13.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple13.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>45,10,25</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2" id="Array-indexOf">8. <bdi> indexOf()</bdi></h2>  
        <p className="style_divv">
            تبحث طريقة <bdi><b>indexOf()</b></bdi> في مصفوفة عن قيمة عنصر وتعيد موضعها.<br/>
            العنصر الأول في الموضع 0 ، والعنصر الثاني في الموضع 1 ، وهكذا.<br/>
            تقوم <bdi><b>indexOf()</b></bdi> بإرجاع <bdi>-1</bdi> إذا لم يتم العثور على العنصر.
            <CodeHighlighter code={code14} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple14.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple14.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>1</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2" id="Array-lastIndexOf">9. <bdi>lastIndexOf()</bdi></h2>  
        <p className="style_divv">
            <bdi><b>lastIndexOf()</b></bdi> هو نفسه <bdi><b>indexOf()</b></bdi> ، لكنه يعرض موضع التكرار الأخير للعنصر المحدد
            <CodeHighlighter code={code15} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple15.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple15.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>3</h2>
        </Result>
    </article>
</section>
    )
}