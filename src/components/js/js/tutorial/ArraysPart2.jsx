import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ArraysPart2(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Arrays</h1>
    <article>
        <details>
            <summary> جميع العناوين  </summary>
                <div dir="ltr">
                   <a href="#Arrays-concat"><bdi> concat()</bdi></a>       
                   <a href="#Arrays-splice"><bdi> splice()</bdi></a>
                   <a href="#Arrays-sort"><bdi> sort()</bdi></a>
                   <a href="#Arrays-reverse"><bdi> reverse()</bdi></a>
                   <a href="#Array-Objects"><bdi> Objects()</bdi></a>
                   <a href="#map"><bdi>map()</bdi></a>
                   <a href="#filter"><bdi>filter()</bdi> </a>
                   <a href="#Array-indexOf"><bdi> indexOf() </bdi> </a>
                   <a href="#Array-lastIndexOf"><bdi> lastIndexOf() </bdi></a>
                </div>
        </details>
    </article>
    <article>
        <h2 className="title-h2" id="Arrays-concat">1. <bdi> concat()</bdi></h2>
        <p className="style_divv">
            ينشئ التابع <bdi><b>concat()</b></bdi> مصفوفة جديدة بدمج (تسلسل) المصفوفات الموجودة 
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن إنشاء مصفوفة جديدة تحتوي على قيم أكتر من مصفوفتين بستعمال <bdi><b>concat()</b></bdi>  .
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />            
            يمكن إنشاء مصفوفة جديدة تحتوي على مصفوفة وقيمة مضافة  بستعمال <bdi><b>concat()</b></bdi> .
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js18_Arrays} className="img"/>
        <div className="styleee"><h2>Orange,Banana,Apple,Mango,Lemon,Kiwi,Pear,Fig</h2></div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js18_Arrays2} className="img"/>
        <div className="styleee"><h2><pre>Orange,Banana,Apple,Mango,Lemon,Kiwi,Pear,Fig,Apricots,Jackfruit,Honeydew Melon,Watermelon</pre></h2></div>
        <div className="mital">متال 3 :  </div>
        <img src={images.js18_Arrays3} className="img"/>
        <div className="styleee"> <h2>Orange,Banana,Mango,Apple</h2></div>
        <div className="mital">متال 4 :  </div>
        <img src={images.js18_Arrays4} className="img"/>
        <div className="styleee"><h2>Orange,Banana,Mango,Kiwi,Mango</h2></div>
        <div className="bg-warning" >
            لا يغير أسلوب <bdi><b>concat()</b></bdi> المصفوفات الموجودة. يقوم دائما بإرجاع مصفوفة جديدة.
        </div>
    </article>
    <article>    
        <h2 className="title-h2" id="Arrays-splice">2. <bdi>splice()</bdi></h2>
        <p className="style_divv">
            يمكن استخدام طريقة <bdi><b>splice()</b></bdi> لإضافة عناصر جديدة إلى مصفوفة<br/>
            يحدد المعامل الأول الموضع الذي يجب إضافة عناصر جديدة إليه (مقسم).<br/>
            يحدد المعامل الثاني  عدد العناصر التي يجب إزالتها.<br/>
            تحدد باقي المعلمات  العناصر الجديدة المراد إضافتها.<br/>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            باستخدام إعداد المعلمة الذكي ، يمكنك استخدام <bdi><b>splice()</b></bdi> لإزالة العناصر دون ترك "ثقوب" في المصفوفة
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكنك استخدام <bdi><b>splice()</b></bdi> بقيمة واحدة لإزالة العناصر من بداية المصفوفة <small>(<small>عند هده الحالة يتم إنشاء مصفوفة جديدة</small>)</small>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال  :  </div>
        <img src={images.js18_Arrays6} className="img"/>
        <div className="styleee"><h2>Orange,Mango,Banana</h2></div>
        <div className="mital">متال 2  : </div>
        <img src={images.js18_Arrays7} className="img"/>
        <div className="styleee"><h2>Mango,Kiwi</h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="Arrays-sort">3. <bdi>sort()</bdi></h2>
        <p className="style_divv">
            تقوم الطريقة <bdi><b>sort()</b></bdi> بترتيب العناصر أبجديا .
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            تقوم الطريقة <bdi><b>sort()</b></bdi> بترتيب الأرقام أيضا .
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال  :  </div>
        <img src={images.js18_Arrays8} className="img"/>
        <div className="styleee"><h2>A,B,C,E,F,K,M,O,T,Z</h2></div>
        <div className="mital"> متال 2 : </div>
        <img src={images.js18_Arrays9} className="img"/>   
        <div className="styleee"><h2>-22,0,1,2,3,4,6,7,8,9</h2></div>
    </article>
    <article>
        <h2 className="title-h2"  id="Arrays-reverse">4. <bdi>reverse()</bdi></h2>
        <p className="style_divv">
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكنك استخدام <bdi><b>reverse()</b></bdi> مع الطريقة <bdi><b>sort()</b></bdi> لفرز المصفوفة بترتيب تنازلي    
            تعكس طريقة  <bdi><b>reverse()</b></bdi> العناصر في المصفوفة.<br/>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال  :  </div>
        <img src={images.js18_Arrays10} className="img"/>
        <div className="styleee"><h2>T,B,F,Z,C,A,K,M,E,O</h2></div>
        <div className="mital"> متال 2 : </div>
        <img src={images.js18_Arrays11} className="img"/>
        <div className="styleee"><h2>Z,T,O,M,K,F,E,C,B,A</h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="Array-Objects">5. Array Objects</h2>
        <p className="style_divv">
            يمكن وضع <b>Object</b> داخل عناصر المصفوفة وإستخدامها في حالة إحتجت لستخدامها 
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} /> 
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js18_Arrays12} className="img"/>
        <div className="styleee"><h2>Reda Eskouni</h2></div>
        <ul><li><small><small> ستتعلم حول Object بشكل أفضل في دروس قادمة</small></small></li></ul>
    </article>
    <article>
        <h2 className="title-h2" id="map">6. <bdi>map()</bdi></h2>
        <p className="style_divv">
            تُنشئ طريقة <bdi><b>map()</b></bdi> مصفوفة جديدة بتنفيذ دالة على كل عنصر من عناصر المصفوفة.<br/>
            لا تقوم طريقة <bdi><b>map()</b></bdi> بتنفيذ دالة لعناصر مصفوفة بدون قيم.<br/>
            لا يغير أسلوب <bdi><b>map()</b></bdi> المصفوفة الأصلية
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js18_Arrays13} className="img"/>
        <div className="styleee"><h2>90,8,18,20,25000</h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="filter">7. <bdi>filter()</bdi></h2>
        <p className="style_divv">
            تقوم طريقة <bdi><b>filter()</b></bdi> بإنشاء مصفوفة جديدة بها عناصر مصفوفة تجتاز اختبارًا.<br/>
            ينشئ هذا المثال مصفوفة جديدة من عناصر بقيمة أكبر من 9
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js18_Arrays14} className="img"/>
        <div className="styleee"><h2>45,10,25</h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="Array-indexOf">8. <bdi> indexOf()</bdi></h2>  
        <p className="style_divv">
            تبحث طريقة <bdi><b>indexOf()</b></bdi> في مصفوفة عن قيمة عنصر وتعيد موضعها.<br/>
            العنصر الأول في الموضع 0 ، والعنصر الثاني في الموضع 1 ، وهكذا.<br/>
            تقوم <bdi><b>indexOf()</b></bdi> بإرجاع <bdi>-1</bdi> إذا لم يتم العثور على العنصر.
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js18_Arrays15} className="img"/>
        <div className="styleee"><h2> 1 </h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="Array-lastIndexOf">9. <bdi>lastIndexOf()</bdi></h2>  
        <p className="style_divv">
            <bdi><b>lastIndexOf()</b></bdi> هو نفسه <bdi><b>indexOf()</b></bdi> ، لكنه يعرض موضع التكرار الأخير للعنصر المحدد
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js18_Arrays16} className="img"/>
        <div className="styleee"><h2> 3 </h2></div>
    </article>
</section>
    )
}