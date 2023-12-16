import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ArraysPart1(){
    const code1 = `let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";`
    const code2 = `const array_name = [ ];
array_name [0] = item1 
array_name [1] = item2 
array_name [2] = item3 `
    const code3 = `const array_name = [item1 , item2 , ... ];
array_name[0] = new_item ;`
    const code4 = `const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("id").innerHTML = cars`
    const code5 = `const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("id").innerHTML = cars.length`
    const code6 = `const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];`
    const code7 = `const fruits = [ "Orange","Banana","Apple","Mango"];
let fruit = fruits[fruits.length - 1];`
    const code8 = `const fruits = ["Orange","Banana","Apple","Mango"];
fruits.push("Lemon");`
    const code9 = `const fruits = [ "Orange","Banana","Apple","Mango"];
fruits[fruits.length] = "Lemon"`
    const code10 = `const names = ["Banana","Orange","Apple"];
names instanceof Array;`
    const code11 = `const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("h2").innerHTML = fruits.toString();`
    const code12 = `const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("h2").innerHTML = fruits.join(" / ");`
    const code13 = `const fruits = ["Banana","Orange","Apple","Mango"];
fruits.pop();`
    const code14 = `const fruits = ["Banana","Orange","Apple"];
fruits.push("Lemon");`
    const code15 = `const fruits = ["Banana","Orange","Apple"];
fruits.shift();`
    const code16 = `const fruits = ["Banana","Orange","Apple"];
fruits.unshift("Kiwi");`
    const code17 = `const fruits = ["Banana","Orange","Apple"];
delete fruits[2];`




    const codeExemple1= { 
    code: `       <h2 id="array"></h2>
    
     <script src="./index.js"></script>`,
    script:`const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("array").innerHTML = cars[0] +"<br>";
document.getElementById("array").innerHTML += cars[1] +"<br>";
document.getElementById("array").innerHTML += cars[2] +"<br>";`
    }
    const codeExemple2= { 
    code: `       <h2 id="array"></h2>
    
     <script src="./index.js"></script>`,
    script:`const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Mercedes"

document.getElementById("array").innerHTML = cars[0] +"<br>";
document.getElementById("array").innerHTML += cars[1] +"<br>";
document.getElementById("array").innerHTML += cars[2] +"<br>";`
    }
    const codeExemple3= { 
    code: `       <h2 id="array"></h2>
    
     <script src="./index.js"></script>`,
    script:`const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Mercedes"
document.getElementById("array").innerHTML = cars ;`
    }
    const codeExemple4= { 
    code: `       <h2 id="array"></h2>
    
     <script src="./index.js"></script>`,
    script:`const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("array").innerHTML = typeof cars ;`
    }
    const codeExemple5= { 
    code: `       <h2 id="array-length"></h2>
    
     <script src="./index.js"></script>`,
    script:`const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("array-length").innerHTML = cars.length ;`
    }
    const codeExemple6= { 
    code: `       <h2 id="fruit-index-0"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Pineapple", "Orange", "Banana", "Apple", "Mango"];
let fruit = fruits[0];
document.getElementById("fruit-index-0").innerHTML = fruit;`
    }
    const codeExemple7= { 
    code: `       <h2 id="fruit-last"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Pineapple", "Orange", "Banana", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
document.getElementById("fruit-last").innerHTML = fruit;`
    }
    const codeExemple8= { 
    code: `       <h2 id="fruits"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Orange","Banana","Apple","Mango"];
fruits.push("Lemon");
document.getElementById("fruits").innerHTML = fruits;`
    }
    const codeExemple9= { 
    code: `       <h2 id="fruits"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Orange","Banana","Apple","Mango"];
fruits[fruits.length] = "Lemon";
document.getElementById("fruits").innerHTML = fruits;`
    }
    const codeExemple10= { 
    code: `       <h2 id="fruits"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Orange","Banana","Apple","Mango"];
fruits[9] = "Lemon";
document.getElementById("fruits").innerHTML = fruits;`
    }
    const codeExemple11= { 
    code: `       <h2 id="demo"></h2>
    
     <script src="./index.js"></script>`,
    script:`var names = ["Reda", "Eskouni",25];

document.getElementById("demo").innerHTML = Array.isArray(names);`
    }
    const codeExemple12= { 
    code: `       <h2 id="demo"></h2>
    
     <script src="./index.js"></script>`,
    script:`var names = ["Reda", "Eskouni",25];

document.getElementById("demo").innerHTML = names instanceof Array;`
    }
    const codeExemple13= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("h2").innerHTML = fruits.toString();`
    }
    const codeExemple14= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("h2").innerHTML = fruits.join(" / ");`
    }
    const codeExemple15= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Banana","Orange","Apple","Mango"];
fruits.pop();

document.getElementById("h2").innerHTML = fruits`
    }
    const codeExemple16= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Banana","Orange","Apple","Mango"];
fruits.push("Lemon");

document.getElementById("h2").innerHTML = fruits`
    }
    const codeExemple17= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Banana","Orange","Apple","Mango"];
fruits.shift();

document.getElementById("h2").innerHTML = fruits`
    }
    const codeExemple18= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Banana","Orange","Apple"];
fruits.unshift("Kiwi");

document.getElementById("h2").innerHTML = fruits`
    } 
    const codeExemple19= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon", "Fig", "Pear"]

delete fruits[2]
delete fruits[3]

document.getElementById("h2").innerHTML = fruits`
    }       
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Arrays</h1>
    <article>
        <details className="mt-5">
            <summary className='text-danger'> جميع العناوين  </summary>
                <ul dir="ltr">
                   <li><a className="text-light text-decoration-none" href="#length">length</a></li>
                   <li><a className="text-light text-decoration-none" href="#shift"><bdi>shift()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#unshift"><bdi>unshift()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#Array-isArray"><bdi>Array.isArray()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#Array-isArray">instanceof</a></li>
                   <li><a className="text-light text-decoration-none" href="#toString"> <bdi>toString()</bdi> </a></li>
                   <li><a className="text-light text-decoration-none" href="#join"> <bdi>join()</bdi> </a></li>
                   <li><a className="text-light text-decoration-none" href="#push"><bdi>push()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#push"><bdi>pop()</bdi></a></li>
                   <li><a className="text-light text-decoration-none" href="#delete">delete</a></li>
                </ul>
        </details>
    </article>
    <article>
        <p className="style_divv mt-5">
            المصفوفة هي متغير خاص يمكن أن يحتوي على أكثر من قيمة .<br/>
            <CodeHighlighter code={`const cars = ["vaule 1", "vaule 2", "vaule 3"];`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Saab<br/>Volvo<br/>BMW</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">1. لماذا استخدام المصفوفة؟</h2>
        <p className="style_divv">
            إذا كانت لديك قائمة بالعناصر (قائمة بأسماء السيارات ، على سبيل المثال) ، فقد يبدو تخزين السيارات في متغيرات فردية بهذا الشكل
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            ومع ذلك ، ماذا لو كنت تريد المرور عبر السيارات والعثور على واحدة محددة؟ وماذا لو لم يكن لديك 3 سيارات ، بل 300؟<br/>
            الحل هو مصفوفة!<br/>
            يمكن أن تحتوي المصفوفة على العديد من القيم تحت اسم واحد ، ويمكنك الوصول إلى القيم بالإشارة إلى رقم الفهرس.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. إنشاء مصفوفة</h2>
        <p className="style_divv">
            يعد استخدام المصفوفة الحرفية أسهل طريقة لإنشاء مصفوفة <b>JavaScript</b>.<br/>
            <CodeHighlighter code={`const array_name = [item1 , item2 , ... ];`} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكنك أيضًا إنشاء مصفوفة ، ثم توفير العناصر:
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكنك أيضًا إنشاء مصفوفة ، بطريقة التالية :
            <CodeHighlighter code={`const cars = new Array(item1, item2, item3 , ..);`} language="js" addClass="mt-3 mb-3" copie={true} />
            إنها ممارسة شائعة للإعلان عن المصفوفات باستخدام الكلمة الأساسية <b>const</b>.<br/>
            المثالان أعلاه يفعلان نفس الشيء تمامًا.<br/>
            ليست هناك حاجة لاستخدام <bdi><b>new Array()</b></bdi><br/>
            للبساطة وسهولة القراءة وسرعة التنفيذ ، استخدم طريقة المصفوفة الحرفية.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">3. الوصول إلى عناصر المصفوفة</h2>
        <p className="style_divv">
            يمكنك الوصول إلى عنصر مصفوفة بالرجوع إلى رقم الفهرس (يبدأ الفهرس من 0)
        </p>
    </article>
    <article>
        <h2 className="title-h2">4. تغيير عناصر المصفوفة</h2>
        <p className="style_divv">
            هذا البيان يغير قيمة العنصر الأول في المصفوفة  <br/>
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Mercedes<br/>Volvo<br/>BMW</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. الوصول إلى المصفوفة كامل</h2>
        <p className="style_divv">
            باستخدام <b>JavaScript</b> ، يمكن الوصول إلى المصفوفة الكاملة بالرجوع إلى اسم المصفوفة
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Mercedes,Volvo,BMW</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">6. المصفوفات هي كائن </h2>
        <p className="style_divv">
            المصفوفات هي نوع خاص من الكائنات. يُرجع عامل التشغيل <b>typeof</b> في <b>JavaScript</b> "كائن"للمصفوفات.<br/>
            لكن أفضل وصف لمصفوفات <b>JavaScript</b> هي  <b>arrays</b> 
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>object</h2>
        </Result>     
    </article>
    <article>
        <h2 className="title-h2" id="length">7. المصفوفات و الخاصية length</h2>
        <p className="style_divv">
            ترجع خاصية <b>length</b> لمصفوفة طول المصفوفة (عدد عناصر المصفوفة).<br/>
            <CodeHighlighter code={code5} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>3</h2>
        </Result>     
    </article>
    <article>
        <h2 className="title-h2">8. الوصول إلى عنصر المصفوف الأول </h2>
        <p className="style_divv">
            <CodeHighlighter code={code6} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Pineapple</h2>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2">9. الوصول إلى آخر عناصر المصفوف</h2>
        <p className="style_divv">
            <CodeHighlighter code={code7} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Mango</h2>
        </Result> 
    </article>
    <article>
        <h2 className="title-h2" id="push">10. إضافة عناصر إلى المصفوفة </h2>
        <p className="style_divv">
            أسهل طريقة لإضافة عنصر جديد إلى المصفوفة هي استخدام طريقة <bdi><b>push()</b></bdi> .
            <CodeHighlighter code={code8} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن أيضًا إضافة عنصر جديد إلى مصفوفة باستخدام خاصية <b>length</b>
            <CodeHighlighter code={code9} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple8.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Banana,Apple,Mango,Lemon</h2>
        </Result> 
        <div className="mital">متال 2 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple9.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Banana,Apple,Mango,Lemon</h2>
        </Result> 
        <div className="mital">متال 3 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple10.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple10.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Banana,Apple,Mango,,,,,,Lemon</h2>
        </Result> 
        <ul> <li>يمكن أن تؤدي إضافة عناصر ذات فهارس عالية إلى إنشاء "ثقوب" غير محددة في المصفوفة . </li> </ul>
    </article>
    <article>
        <h2 className="title-h2" id="Array-isArray">11. كيفية التعرف على المصفوفة </h2>
        <p className="style_divv">
            السؤال الشائع هو: كيف أعرف ما إذا كان المتغير عبارة عن مصفوفة؟ <br/>
            تكمن المشكلة في أن عامل تشغيل <bdi><b>JavaScript typeof</b></bdi> يعرض "object" <br/>  
            لحل هذه المشكلة توجد طريقتين <br/>
            <span><b>الطريقة 1 :</b></span>
            <CodeHighlighter code={`Array.isArray(names)`} language="js" addClass="mt-3 mb-3" copie={true} />
            <span><b>الطريقة 2 :</b></span>
            <CodeHighlighter code={code10} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple11.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple11.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>true</h2>
        </Result>
        <div className="mital">متال 2 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple12.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple12.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>true</h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">12. تحويل المصفوفات إلى string </h2>
        <h3 className="title-h3" id="toString">1. <bdi>toString()</bdi></h3>
        <p className="style_divv">
            تحوّل طريقة <b><bdi>toString()</bdi></b> مصفوفة (<small>array</small>) إلى <b>string</b> من قيم الصفيف (<small>مفصولة بفاصلة</small>) .
            <CodeHighlighter code={code11} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple13.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple13.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Banana,Orange,Apple,Mango</h2>
        </Result>
        <h3 className="title-h3" id="join">2. <bdi>join()</bdi></h3>
        <p className="style_divv">
            يقوم <b><bdi>join()</bdi></b> أيضًا بضم جميع عناصر المصفوفة في سلسلة نصية يتصرف تمامًا مثل <b><bdi>toString()</bdi></b> ، ولكن بالإضافة إلى ذلك ، يمكنك تحديد الفاصل.
            <CodeHighlighter code={code12} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple14.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple14.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Banana / Orange / Apple / Mango</h2>
        </Result>
    </article>
    <article>   
        <h2 className="title-h2">13. إضافة و إزالة عنصر من المصفوفة  </h2>
        <p className="style_divv">
            عندما تعمل مع المصفوفات ، فمن السهل إزالة العناصر وإضافة عناصر جديدة.<br/>
            إخراج العناصر من المصفوفة  <b>Popping</b>  ، أو دفع العناصر إلى المصفوفة <b>Pushing</b>.
        </p>
        <h3 className="title-h3" id="pop">1. الخاصية <bdi>pop()</bdi></h3>
        <p className="style_divv">
            تزيل طريقة <bdi><b>pop()</b></bdi> العنصر الأخير من المصفوفة <br/>
            <CodeHighlighter code={code13} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple15.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple15.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Banana,Orange,Apple</h2>
        </Result>
        <h3 className="title-h3" id="push">2. الخاصية <bdi>push()</bdi></h3>
        <p className="style_divv">
            تضيف <b><bdi>push()</bdi></b> عنصرًا جديدًا في نهاية المصفوفة
            <CodeHighlighter code={code14} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple16.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple16.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Banana,Orange,Apple,Mango,Lemon</h2>
        </Result>
        <h3  className="title-h3" id="shift">3. الخاصية <bdi>shift()</bdi></h3>
        <p className="style_divv">
            تقوم طريقة <bdi><b>shift()</b></bdi> بإزالة عنصر المصفوفة الأول و "إزاحة" جميع العناصر الأخرى إلى فهرس أقل.
            <CodeHighlighter code={code15} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple17.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple17.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Orange,Apple,Mango</h2>
        </Result>
        <h3 className="title-h3" id="unshift">4. الخاصية <bdi>unshift()</bdi></h3>
        <p className="style_divv">
            تضيف طريقة  <bdi><b>unshift()</b></bdi> عنصرًا جديدًا إلى مصفوفة (في البداية) .<br/>
            <CodeHighlighter code={code16} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple18.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple18.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Kiwi,Banana,Orange,Apple</h2>
        </Result>
        <h3 className="title-h3" id="delete">5. الخاصية delete </h3>
        <p className="style_divv">
            يمكن حذف عناصر المصفوفة باستخدام عامل الحذف <b>delete</b>.<br/>
            استخدام <b>delete</b> يترك ثقوبًا غير محددة في المصفوفة.
            <CodeHighlighter code={code17} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple19.code} language="html" is_html={true} title="Arrays" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple19.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arrays' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
           <h2>Banana,Orange,,,Lemon,Fig,Pear</h2>
        </Result>
    </article>
</section>

/* 
*/
    )
}