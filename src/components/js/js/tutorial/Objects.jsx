import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Objects(){
    const codeExemple1= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple2= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple3= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple4= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple5= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Objects</h1>
    <article>
        <h2 className="title-h2">1.  Objects</h2>
        <p className="style_divv">
            تمثل فئة <b>Object</b> أحد أنواع بيانات <b>JavaScript</b>. يتم استخدامه لتخزين العديد من المجموعات ذات المفاتيح والكيانات الأكثر تعقيدًا.<br/>
            الكائنات هي متغيرات أيضًا. لكن يمكن أن تحتوي على العديد من القيم.<br/>
            تتميز الكئنات بمفتاح لكل خاصية 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><b style="color:var(--html-color-tags);">const</b> car = {name:<span style="color:orange">"BMW"</span>, model:<span style="color:orange">"M440i/M440d"</span> , color:<span style="color:orange">"black"</span>, max_speed:<span style="color:orange">"300 KM"</span>}</pre>
            </div> */}
            يمكن عرض عناصر الكائن بطريقين <br/>
            <b> الطريقة 1</b>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">car</span>.<span style="color:var(--js-color)">name</span>
        <span style="color:var(--js-color)">car</span>.<span style="color:var(--js-color)">model</span>
        <span style="color:var(--js-color)">car</span>.<span style="color:var(--js-color)">color</span>
        <span style="color:var(--js-color)">car</span>.<span style="color:var(--js-color)">max_speed</span></pre>
            </div> */}
            <b> الطريقة 2</b>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">car</span>[<span style="color:orange">"name"</span>]
        <span style="color:var(--js-color)">car</span>[<span style="color:orange">"model"</span>]
        <span style="color:var(--js-color)">car</span>[<span style="color:orange">"color"</span>]
        <span style="color:var(--js-color)">car</span>[<span style="color:orange">"max_speed"</span>]</pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <ul><li>يمكن عرض عناصر الكائن <small><small>(Object)</small></small> عبر إستخدام المفتاح <small><small>(key)</small></small></li></ul>
        <img src={images.js20_Object} className="img"/>
        <div className="styleee "><h2> The car name is : BMW<br/>The car model is : M440i/M440d<br/>The car color is : black<br/>The car max speed is : 300 KM </h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js20_Object3} className="img"/>
        <div className="styleee img"><h2> The car name is : BMW<br/>The car model is : M440i/M440d<br/>The car color is : black<br/>The car max speed is : 300 KM </h2></div>
        <div className="mital"> متال 3 :  </div>
        <ul><li> على عكس المصفوفة<small><small>(Array)</small></small>  لا يمكن عرض عناصر الكائن <small><small>(Object)</small></small> كنص من نوع <b>string</b> من خلال كتابة إسم الكائن </li></ul>
        <img src={images.js20_Object2} className="img"/>
        <div className="styleee"><h2> [object Object] </h2></div>
    </article>
    <article>
        <h2 className="title-h2">2 . Object Methods</h2>
        <p className="style_divv">
            يمكن أن تحتوي الكائنات أيضًا على طرق <small><small>(methods)</small></small> <br/>
            <b>methods</b> هي الإجراءات التي يمكن تنفيذها على الكائنات.<br/>
            يتم تخزين <b>methods</b> في الخصائص كتعاريف للدالة .<br/>
            <b> الطريقة 1 </b>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><b style="color:var(--html-color-tags);">const</b> person = {
            FirstName: <span style="color:orange;">"Reda"</span>,
            LastName : <span style="color:orange;">"Eskouni"</span>,
            Age     : <span style="color:var(--arr-num-color)">25</span>,
            fullName : <b style="color:var(--html-color-tags);">function</b>() {
                <span style="color:var(--violet-color)">if</span>(<span style="color:var(--html-color-tags);">this</span>.<span style="color:var(--js-color)">Age</span> > <span style="color:var(--arr-num-color)">20</span>){
                    <span style="color:var(--violet-color)">return</span> <span style="color:var(--html-color-tags);">this</span>.<span style="color:var(--js-color)">FirstName</span> + <span style="color:orange">" "</span> + <span style="color:var(--html-color-tags);">this</span>.<span style="color:var(--js-color)">LastName</span>; 
                }
            }
        };</pre>
        </div> */}
        <b> الطريقة 2 </b>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><b style="color:var(--html-color-tags);">const</b> person = {
            FirstName: <span style="color:orange;">"Reda"</span>,
            LastName : <span style="color:orange;">"Eskouni"</span>,
            Age     : <span style="color:var(--arr-num-color)">25</span>,
            <spam style="color:gold">fullName()</spam> {
                <span style="color:var(--violet-color)">if</span>(<span style="color:var(--html-color-tags);">this</span>.<span style="color:var(--js-color)">Age</span> > <span style="color:var(--arr-num-color)">20</span>){
                    <span style="color:var(--violet-color)">return</span> <span style="color:var(--html-color-tags);">this</span>.<span style="color:var(--js-color)">FirstName</span> + <span style="color:orange">" "</span> + <span style="color:var(--html-color-tags);">this</span>.<span style="color:var(--js-color)">LastName</span>; 
                }
            }
        };</pre>
        </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js20_Object4} className="img"/>
        <div className="styleee"><h2> Reda Eskouni </h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js20_Object5} className="img"/>
        <div className="styleee"><h2> Reda Eskouni </h2></div>
        <div className="mital"> متال 3 :  </div>
        <ul><li>إذا قمت بالوصول إلى الدالة بدون الأقواس () ، فستعيد تعريف الوظيفة</li></ul>
        <img src={images.js20_Object6} className="img"/>
        <div className="styleee">
            <h2> function() {"{"} if(this.Age{">"}20){"{"} return this.FirstName + " " + this.LastName; {"} }"} </h2>
        </div>
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