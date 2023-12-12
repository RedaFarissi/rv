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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
                <b style="color:var(--html-color-tags)">const</b> fruits1 = [ <span style="color:orange">"Orange"</span>,<span style="color:orange">"Banana"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];<br/>
                <b style="color:var(--html-color-tags)">const</b> fruits2 = [ <span style="color:orange">"Lemon"</span>,<span style="color:orange">"Kiwi"</span>,<span style="color:orange">"Pear"</span>,<span style="color:orange">"Fig"</span>];<br/>
                <b style="color:var(--html-color-tags)">const</b> fruits3 = fruits1.<b style="color: gold;">concat(</b>fruits2<b style="color: gold;">)</b>
            </div> */}
            يمكن إنشاء مصفوفة جديدة تحتوي على قيم أكتر من مصفوفتين بستعمال <bdi><b>concat()</b></bdi>  .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
                <b style="color:var(--html-color-tags)">const</b> fruits1 = [ <span style="color:orange">"Orange"</span>,<span style="color:orange">"Banana"</span>,<span style="color:orange">"Apple"</span>,<span style="color:orange">"Mango"</span>];<br/>
                <b style="color:var(--html-color-tags)">const</b> fruits2 = [ <span style="color:orange">"Lemon"</span>,<span style="color:orange">"Kiwi"</span>,<span style="color:orange">"Pear"</span>,<span style="color:orange">"Fig"</span>];<br/>
                <b style="color:var(--html-color-tags)">const</b> fruits3 = [ <span style="color:orange">"Apricots"</span>,<span style="color:orange">"Jackfruit"</span>,<span style="color:orange">"Honeydew Melon"</span>,<span style="color:orange">"Watermelon"</span>];<br/>
                <b style="color:var(--html-color-tags)">const</b> fruits4 = fruits1.<b style="color: gold;">concat(</b>fruits2<b style="color: gold;">,</b>fruits3<b style="color: gold;">)</b>
            </div> */}
            يمكن إنشاء مصفوفة جديدة تحتوي على مصفوفة وقيمة مضافة  بستعمال <bdi><b>concat()</b></bdi> .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
                <b style="color:var(--html-color-tags)">const</b> fruits1 = [ <span style="color:orange">"Orange"</span>,<span style="color:orange">"Banana"</span>,<span style="color:orange">"Mango"</span>];<br/>
                <b style="color:var(--html-color-tags)">const</b> fruits2 = fruits1.<b style="color: gold;">concat(</b><span style="color:orange">"Apple"</span><b style="color: gold;">)</b>
            </div> */}
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
                <pre><b style="color:var(--html-color-tags)">const</b> fruits = [ <span style="color:orange">"Orange"</span>,<span style="color:orange">"Banana"</span>,<span style="color:orange">"Mango"</span>].<b style="color: gold;">concat(</b>[<span style="color:orange">"Kiwi"</span>,<span style="color:orange">"Mango"</span>]<b style="color: gold;">)</b></b></pre>
            </div> */}
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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><b style="color:var(--html-color-tags)">const</b> fruits = [<span style="color:orange">"Orange"</span>,<span style="color:orange">"Pear"</span>,<span style="color:orange">"Mango"</span>,<span style="color:orange">"Banana"</span>];
        <span style="color:var(--js-color)">fruits</span>.<b style="color:gold">splice(</b><span style="color:var(--arr-num-color)">2</span>,<span style="color:var(--arr-num-color)">0</span>,<span style="color:orange">"Apricots"</span>,<span style="color:orange">"Kiwi"</span>,<span style="color:orange">"Watermelon"</span><b style="color:gold">)</b>;</pre>
            </div> */}
            باستخدام إعداد المعلمة الذكي ، يمكنك استخدام <bdi><b>splice()</b></bdi> لإزالة العناصر دون ترك "ثقوب" في المصفوفة
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><b style="color:var(--html-color-tags)">const</b> fruits = [<span style="color:orange">"Orange"</span>,<span style="color:orange">"Pear"</span>,<span style="color:orange">"Mango"</span>,<span style="color:orange">"Banana"</span>];
        <span style="color:var(--js-color)">fruits</span>.<b style="color:gold">splice(</b><span style="color:var(--arr-num-color)">1</span>,<span style="color:var(--arr-num-color)">1</span><b style="color:gold">)</b>;</pre>
            </div> */}
            يمكنك استخدام <bdi><b>splice()</b></bdi> بقيمة واحدة لإزالة العناصر من بداية المصفوفة <small>(<small>عند هده الحالة يتم إنشاء مصفوفة جديدة</small>)</small>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><b style="color:var(--html-color-tags)">const</b> fruits = [<span style="color:orange">"Orange"</span>,<span style="color:orange">"Pear"</span>,<span style="color:orange">"Mango"</span>,<span style="color:orange">"Kiwi"</span>];
        <b style="color:var(--html-color-tags)">const</b> new_fruits = <span style="color:var(--js-color)">fruits</span>.<b style="color:gold">splice(</b><span style="color:var(--arr-num-color)">2</span><b style="color:gold">)</b>;</pre>
            </div> */}
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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><b style="color:var(--html-color-tags)">const</b> alphabets = [<span style="color:orange">"O"</span>,<span style="color:orange">"E"</span>,<span style="color:orange">"M"</span>,<span style="color:orange">"K"</span>,<span style="color:orange">"A"</span>,<span style="color:orange">"C"</span>,<span style="color:orange">"Z"</span>,<span style="color:orange">"F"</span>,<span style="color:orange">"B"</span>,<span style="color:orange">"T"</span>];
        <span style="color:var(--js-color)">alphabets</span>.<b style="color:gold">sort()</b>;</pre>
            </div> */}
            تقوم الطريقة <bdi><b>sort()</b></bdi> بترتيب الأرقام أيضا .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><b style="color:var(--html-color-tags)">const</b> numbers = [<span style="color:var(--arr-num-color)">6</span>,<span style="color:var(--arr-num-color)">9</span>,<span style="color:var(--arr-num-color)">2</span>,<span style="color:var(--arr-num-color)">0</span>,<span style="color:var(--arr-num-color)">3</span>,<span style="color:var(--arr-num-color)">8</span>,<span style="color:var(--arr-num-color)">-22</span>,<span style="color:var(--arr-num-color)">1</span>,<span style="color:var(--arr-num-color)">4</span>,<span style="color:var(--arr-num-color)">7</span>];
        <span style="color:var(--js-color)">numbers</span>.<b style="color:gold">sort()</b>;</pre>
            </div> */}
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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
                تعكس طريقة  <bdi><b>reverse()</b></bdi> العناصر في المصفوفة.<br/>
                <pre><b style="color:var(--html-color-tags)">const</b> alphabets = [<span style="color:orange">"O"</span>,<span style="color:orange">"E"</span>,<span style="color:orange">"M"</span>,<span style="color:orange">"K"</span>,<span style="color:orange">"A"</span>,<span style="color:orange">"C"</span>,<span style="color:orange">"Z"</span>,<span style="color:orange">"F"</span>,<span style="color:orange">"B"</span>,<span style="color:orange">"T"</span>];
        <span style="color:var(--js-color)">alphabets</span>.<b style="color:gold">reverse()</b>;</pre>
            </div> */}
            يمكنك استخدام <bdi><b>reverse()</b></bdi> مع الطريقة <bdi><b>sort()</b></bdi> لفرز المصفوفة بترتيب تنازلي    
                تعكس طريقة  <bdi><b>reverse()</b></bdi> العناصر في المصفوفة.<br/>
                {/*            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
        <pre><b style="color:var(--html-color-tags)">const</b> alphabets = [<span style="color:orange">"O"</span>,<span style="color:orange">"E"</span>,<span style="color:orange">"M"</span>,<span style="color:orange">"K"</span>,<span style="color:orange">"A"</span>,<span style="color:orange">"C"</span>,<span style="color:orange">"Z"</span>,<span style="color:orange">"F"</span>,<span style="color:orange">"B"</span>,<span style="color:orange">"T"</span>];
        <span style="color:var(--js-color)">alphabets</span>.<b style="color:gold">sort()</b>;
        <span style="color:var(--js-color)">alphabets</span>.<b style="color:gold">reverse()</b>;</pre> </div>*/}
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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><b style="color:var(--html-color-tags)">const</b> names = [
            {first_name:<span style="color:orange">"Reda"</span>, last_name:<span style="color:orange">"Eskouni"</span>},
            {first_name:<span style="color:orange">"Adil"</span>, last_name:<span style="color:orange">"Eskouni"</span>},
            {first_name:<span style="color:orange">"Youssef"</span>, last_name:<span style="color:orange">"Arbouch"</span>}
        ];
        <span style="color:var(--js-color)">document</span>.<b style="color:gold">getElementById(</b><span style="color:orange">"h2"</span><b style="color:gold">)</b>.<span style="color:var(--js-color)">innerHTML</span> = names[<span style="color:var(--arr-num-color)">0</span>][<span style="color:orange">'first_name'</span>]
        <span style="color:var(--js-color)">document</span>.<b style="color:gold">getElementById(</b><span style="color:orange">"h2"</span><b style="color:gold">)</b>.<span style="color:var(--js-color)">innerHTML</span> += names[<span style="color:var(--arr-num-color)">0</span>].<span style="color:var(--js-color)">first_name</span></pre>
            </div> */}
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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
                <pre><span style="color:var(--html-color-tags)">function</span> <span>myFunction</span>(<span style="color:var(--js-color)">value</span>){
            <span style="color:var(--violet-color)">if</span>(value != <span style="color:var(--arr-num-color)">25</span>)
                <span style="color:var(--violet-color)">return</span> value * <span style="color:var(--arr-num-color)">2</span> ;
            <span style="color:var(--violet-color)">else</span>
                <span style="color:var(--violet-color)">return</span> value * <span style="color:var(--arr-num-color)">1000</span>  ;
        }
        <span style="color:var(--html-color-tags)">const</span> numbers1 = [<span style="color:var(--arr-num-color)">45</span>,<span style="color:var(--arr-num-color)">4</span>,<span style="color:var(--arr-num-color)">9</span>,<span style="color:var(--arr-num-color)">10</span>,<span style="color:var(--arr-num-color)">25</span>];
        <span style="color:var(--html-color-tags)">const</span> numbers2 = <span style="color:var(--js-color)">numbers1</span>.<b style="color:gold">map(</b>myFunction<b style="color:gold">)</b>;</pre>
            </div> */}
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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><span style="color:var(--html-color-tags)">function</span> <span>myFunction</span>(<span style="color:var(--js-color)">value</span>){
            <span style="color:var(--violet-color)">if</span>(value > <span style="color:var(--arr-num-color)">9</span>)
                <span style="color:var(--violet-color)">return</span> value;
        }
        <span style="color:var(--html-color-tags)">const</span> numbers1 = [<span style="color:var(--arr-num-color)">45</span>,<span style="color:var(--arr-num-color)">4</span>,<span style="color:var(--arr-num-color)">9</span>,<span style="color:var(--arr-num-color)">10</span>,<span style="color:var(--arr-num-color)">25</span>];
        <span style="color:var(--html-color-tags)">const</span> numbers2 = <span style="color:var(--js-color)">numbers1</span>.<b style="color:gold">filter(</b>myFunction<b style="color:gold">)</b>;</pre>
            </div>   */}
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
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><span style="color:var(--html-color-tags)">const</span> names = [<span style="color:orange">'Rayan'</span>,<span style="color:orange">'Jhon'</span>,<span style="color:orange">'Kamal'</span>,<span style="color:orange">'Akachi'</span>,<span style="color:orange">'Rawya'</span>];
        <span style="color:var(--js-color)">document</span>.<b style="color:gold">getElementById(</b><span style="color:orange">"h2"</span><b style="color:gold">)</b>.<span style="color:var(--js-color)">innerHTML</span> = <span style="color:var(--js-color)">names</span>.<b style="color:gold">indexOf(</b><span style="color:orange">"Jhon"</span><b style="color:gold">)</b></pre>
            </div> */}
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js18_Arrays15} className="img"/>
        <div className="styleee"><h2> 1 </h2></div>
    </article>
    <article>
        <h2 className="title-h2" id="Array-lastIndexOf">9. <bdi>lastIndexOf()</bdi></h2>  
        <p className="style_divv">
            <bdi><b>lastIndexOf()</b></bdi> هو نفسه <bdi><b>indexOf()</b></bdi> ، لكنه يعرض موضع التكرار الأخير للعنصر المحدد
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;">
            <pre><span style="color:var(--html-color-tags)">const</span> names = [<span style="color:orange">'Rayan'</span>,<span style="color:orange">'Jhon'</span>,<span style="color:orange">'Kamal'</span>,<span style="color:orange">'Rayan'</span>,<span style="color:orange">'Rawya'</span>];
        <span style="color:var(--js-color)">document</span>.<b style="color:gold">getElementById(</b><span style="color:orange">"h2"</span><b style="color:gold">)</b>.<span style="color:var(--js-color)">innerHTML</span> = <span style="color:var(--js-color)">names</span>.<b style="color:gold">lastIndexOf(</b><span style="color:orange">"Rayan"</span><b style="color:gold">)</b></pre>
            </div> */}
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js18_Arrays16} className="img"/>
        <div className="styleee"><h2> 3 </h2></div>
    </article>
</section>
    )
}