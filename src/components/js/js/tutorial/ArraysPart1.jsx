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

    //const fruits = [ "Orange","Banana","Apple","Mango"];
    //fruits[9] = "Lemon"
    //for( let i=0 ; i<fruits.length ; i++){
    //    document.getElementById("h2").innerHTML += "Index = " + i +" => " + fruits[i] + "<br/>";
    //}

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Arrays</h1>
    <article>
        <details>
            <summary> جميع العناوين  </summary>
                <div dir="ltr">
                   <a href="#length">length</a>       
                   <a href="#shift"><bdi>shift()</bdi></a>
                   <a href="#unshift"><bdi>unshift()</bdi></a>
                   <a href="#Array-isArray"><bdi>Array.isArray()</bdi></a>
                   <a href="#Array-isArray">instanceof</a>
                   <a href="#toString"> <bdi>toString()</bdi> </a>
                   <a href="#join"> <bdi>join()</bdi> </a>
                   <a href="#push"><bdi>push()</bdi></a>
                   <a href="#push"><bdi>pop()</bdi></a>
                   <a href="#delete">delete</a>
                </div>
        </details>
    </article>
    <article>
        <p className="style_divv mt-5">
            المصفوفة هي متغير خاص يمكن أن يحتوي على أكثر من قيمة .<br/>
            <CodeHighlighter code={`const cars = ["Saab", "Volvo", "BMW"];`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js17_Arrays} className="img"/>
        <div className="styleee"><h2> Saab <br/> Volvo <br/> BMW </h2></div>
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
        </p>
        <div className="alert bg-warning">
            إنها ممارسة شائعة للإعلان عن المصفوفات باستخدام الكلمة الأساسية <b>const</b>.<br/>
            المثالان أعلاه يفعلان نفس الشيء تمامًا.<br/>
            ليست هناك حاجة لاستخدام <bdi><b>new Array()</b></bdi><br/>
            للبساطة وسهولة القراءة وسرعة التنفيذ ، استخدم طريقة المصفوفة الحرفية.<br/>
        </div>
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
        <img src={images.js17_Arrays2} className="img"/>
        <div className="styleee"><h2> Mercedes  <br/> Volvo <br/> BMW </h2></div>
        <div className="mital"> متال 2 : </div>
        <img src={images.js17_arrays3} className="img"/>
        <div className="styleee"><h2> Reda Eskouni 25 ans </h2></div>
    </article>
    <article>
        <h2 className="title-h2">5. الوصول إلى المصفوفة كامل</h2>
        <p className="style_divv">
            باستخدام <b>JavaScript</b> ، يمكن الوصول إلى المصفوفة الكاملة بالرجوع إلى اسم المصفوفة
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js17_Arrays3_2} className="img"/>
        <div className="styleee"><h2> Saab,Volvo,BMW </h2></div>
    </article>
    <article>
        <h2 className="title-h2">6. المصفوفات هي كائن </h2>
        <p className="style_divv">
            المصفوفات هي نوع خاص من الكائنات. يُرجع عامل التشغيل <b>typeof</b> في <b>JavaScript</b> "كائن"للمصفوفات.<br/>
            لكن أفضل وصف لمصفوفات <b>JavaScript</b> هي  <b>arrays</b> 
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js17_Arrays4} className="img"/>
        <div className="styleee"><h2> object </h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="length">7. المصفوفات و الخاصية length</h2>
        <p className="style_divv">
            ترجع خاصية <b>length</b> لمصفوفة طول المصفوفة (عدد عناصر المصفوفة).<br/>
            <CodeHighlighter code={code5} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js17_Arrays5} className="img"/>
        <div className="styleee"><h2> 3 </h2></div>
    </article>
    <article>
        <h2 className="title-h2">8. الوصول إلى عنصر المصفوف الأول </h2>
        <p className="style_divv">
            <CodeHighlighter code={code6} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js17_Arrays7} className="img"/>
        <div className="styleee"><h2> Pineapple </h2></div>
    </article>
    <article>
        <h2 className="title-h2">9. الوصول إلى آخر عناصر المصفوف</h2>
        <p className="style_divv">
            <CodeHighlighter code={code7} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js17_Arrays8} className="img"/>
        <div className="styleee"><h2> Mango </h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="push">10. إضافة عناصر إلى المصفوفة </h2>
        <p className="style_divv">
            أسهل طريقة لإضافة عنصر جديد إلى المصفوفة هي استخدام طريقة <bdi><b>push()</b></bdi> .
            <CodeHighlighter code={code8} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن أيضًا إضافة عنصر جديد إلى مصفوفة باستخدام خاصية <b>length</b>
            <CodeHighlighter code={code9} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js17_Arrays9} className="img"/>
        <div className="styleee"><h2> Lemon </h2></div>
        <div className="mital">متال 2 :</div>
        <img src={images.js17_Arrays10} className="img"/>
        <div className="styleee"><h2> Lemon </h2></div>
        <div className="mital">متال 3 :</div>
        <img src={images.js17_Arrays11} className="img"/>
        <div className="styleee">
            <h2 id="h2">  </h2>
        </div>
        <div className="alert bg-danger"> يمكن أن تؤدي إضافة عناصر ذات فهارس عالية إلى إنشاء "ثقوب" غير محددة في المصفوفة . </div>
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
        <div className="mital">متال :</div>
        <img src={images.js17_Arrays12} className="img"/>
        <div className="styleee"><h2>true</h2></div>
        <div className="mital">متال 2 :</div>
        <img src={images.js17_Arrays13} className="img"/>
        <div className="styleee"><h2>true</h2></div>
    </article>
    <article>
        <h2 className="title-h2">12. تحويل المصفوفات إلى string </h2>
        <h5 className="title-h5" id="toString">1. <bdi>toString()</bdi></h5>
        <p className="style_divv">
            تحوّل طريقة <b><bdi>toString()</bdi></b> مصفوفة (<small>array</small>) إلى <b>string</b> من قيم الصفيف (<small>مفصولة بفاصلة</small>) .
            <CodeHighlighter code={code11} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <img src={images.js17_Arrays14} className="img"/>
        <div className="styleee"><h2>Banana,Orange,Apple,Mango</h2></div>
        <h5 className="title-h5" id="join">2. <bdi>join()</bdi></h5>
        <p className="style_divv">
            يقوم <b><bdi>join()</bdi></b> أيضًا بضم جميع عناصر المصفوفة في سلسلة نصية يتصرف تمامًا مثل <b><bdi>toString()</bdi></b> ، ولكن بالإضافة إلى ذلك ، يمكنك تحديد الفاصل.
            <CodeHighlighter code={code12} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <img src={images.js17_Arrays15} className="img"/>
        <div className="styleee"><h2>Banana / Orange / Apple / Mango</h2></div>
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
        <img src={images.js17_Arrays16} className="img"/>
        <div className="styleee"><h2>Banana,Orange,Apple</h2></div>
        
        <h3 className="title-h3" id="push">2. الخاصية <bdi>push()</bdi></h3>
        <p className="style_divv">
            تضيف <b><bdi>push()</bdi></b> عنصرًا جديدًا في نهاية المصفوفة
            <CodeHighlighter code={code14} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <img src={images.js17_Arrays17} className="img"/>
        <div className="styleee"><h2>Banana,Orange,Apple,Lemon</h2></div>
        <h3  className="title-h3" id="shift">3. الخاصية <bdi>shift()</bdi></h3>
        <p className="style_divv">
            تقوم طريقة <bdi><b>shift()</b></bdi> بإزالة عنصر المصفوفة الأول و "إزاحة" جميع العناصر الأخرى إلى فهرس أقل.
            <CodeHighlighter code={code15} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <img src={images.js17_Arrays18} className="img"/>
        <div className="styleee"><h2>Orange,Apple</h2></div>
        <h3 className="title-h3" id="unshift">4. الخاصية <bdi>unshift()</bdi></h3>
        <p className="style_divv">
            تضيف طريقة  <bdi><b>unshift()</b></bdi> عنصرًا جديدًا إلى مصفوفة (في البداية) .<br/>
            <CodeHighlighter code={code16} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <img src={images.js17_Arrays19} className="img"/>
        <div className="styleee"><h2>Kiwi,Banana,Orange,Apple</h2></div>
        <div className="mital">متال 2 :</div>
        <img src={images.js17_Arrays20} className="img"/>
        <div className="styleee"><h2>Kiwi,Orange,Lemon,Apple</h2></div>
        <h3 className="title-h3" id="delete">4. الخاصية delete </h3>
        <p className="style_divv">
            يمكن حذف عناصر المصفوفة باستخدام عامل الحذف <b>delete</b>.<br/>
            استخدام <b>delete</b> يترك ثقوبًا غير محددة في المصفوفة.
            <CodeHighlighter code={code17} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :</div>
        <img src={images.js17_Arrays21} className="img"/>
        <div className="styleee">
            <h2>Banana,Orange,,,Lemon,Fig,Pear</h2>
            <h2>index 2 = undefined index 3 = undefined</h2>
        </div>
    </article>
</section>
    )
}