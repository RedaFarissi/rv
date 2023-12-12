import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Output(){
    //function Pr(){ document.getElementById("print").innerHTML = print() }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Output</h1>
    <article>
        <p className="style_divv mt-5">
            يمكن لجافا سكريبت عرض البيانات بطرق مختلفة وهي كتالي :<br/>
            <ul>
                <li> الكتابة في عنصر <b>HTML</b> ، باستخدام <b>innerHTML</b>.</li>
                <li> الكتابة في أخر الصفحة <b>HTML</b> باستخدام <bdi><b>document.write()</b></bdi>.</li>
                <li> الكتابة في مربع تنبيه باستخدام <bdi><b>window.alert()</b></bdi> . </li>
                <li> الكتابة في وحدة تحكم المتصفح ، باستخدام <bdi><b>console.log()</b></bdi> . </li>
            </ul>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color);">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"id"</span>)</span>.<span style="color:var(--js-color)">innerHTML</span> = content
        <span style="color:var(--js-color);">document</span>.<span style="color:gold;">write(</span>content<span style="color:gold">)</span>
        <span style="color:var(--js-color);">window</span>.<span style="color:gold;">alert(</span>content<span style="color:gold">)</span>
        <span style="color:lime">console</span>.<span style="color:gold;">log(</span>content<span style="color:gold;">)</span></pre>
            </div> */}
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. innerHTML </h2>
        <p className="style_divv">
            للوصول إلى عنصر  <b>HTML</b> عبر <b>JavaScript</b> استخدام طريقة <b>innerHTML</b> .<br/><br/>
            تحدد  <b>innerHTML</b> محتوى العنصر . عبر <b>id</b> <br/>
            توجد طرق أخرى لستخدام <b>innerHTML</b> سنتعرف على ذالك في الدروس القادمة .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
            <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">"Paragraph"</span>)</span>.<span style="color:var(--js-color)">innerHTML</span> = content</pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js2_output} className="img"/>
        <div className="styleee"><h2 id="Paragraph"> 11  </h2></div>
    </article>
    <article>
        <h2 className="title-h2">2. <bdi>document.write()</bdi> </h2>
        <p className="style_divv">
            تستخدم <bdi><b>document.write()</b></bdi> لإختبار الكود الخاص بك أو طباعة شيء داخل موقعك .<br/>
            سيؤدي استخدام <bdi><b>document.write()</b></bdi> بعد تحميل مستند <b>HTML</b> إلى حذف كل <b>HTML</b> الموجود .<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color);">document</span>.<span style="color:gold;">write(</span><span style="color:orange">"&lt;h2 style='color:red'&gt;heading&lt;/h2&gt;"</span><span style="color:gold">)</span>
        <span style="color:var(--js-color)">document</span>.<span style="color:gold;">write(</span><span style="color:orange">"&lt;p&gt; Paragraph lorem ipsum dolor sit, amet consectetur adipisicing elit.&lt;/p&gt;"</span><span style="color:gold">)</span></pre>
            </div> */}
        </p>
    
        <div className="mital">متال :  </div>
        <img src={images.js2_output2} className="img"/>
        <img src={images.js2_output2_2} className="img"/>
        <div className="alert alert-dark" role="alert">
            <ul><li> يجب استخدام طريقة <bdi><b>document.write()</b></bdi> للاختبار فقط.</li></ul>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. <bdi>window.alert()</bdi> </h2>
        <p className="style_divv">
            تستخدم <bdi><b>window.alert()</b></bdi> لعرض البيانات داخل مربع تنبيه .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold;">write(</span><span style="color:orange">"Hello word"</span><span style="color:gold">)</span></pre>
            </div> */}
        </p>
        
        <div className="mital"> متال : </div>
        <ul><li> قم بنقر على الزر أسفله لإضافة الخاصية <bdi><b>window.alert("Hello Word")</b></bdi> </li></ul>
        {/* <div className="styleee" style="display: flex; justify-content:center;">
            <button onclick="document.write('Hello Word')" style="width:30%;border:0.5px solid black;outline:0px;border-radius:9px"> click me </button>
        </div> */}
        <div className="mital">متال 2 :  </div>
        <img src={images.js2_output3} className="img"/>
        <img src={images.js2_output3_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">4. <bdi>console.log()</bdi> </h2>
        <p className="style_divv"> 
              يمكنك استعمال   <bdi><b>console.log()</b></bdi> لأغراض التصحيح أو تأكد من النتائج لا غير.<br/>
              مما يعني أنه لا يمكن عرض البيانات بستخدام  <bdi><b>console.log()</b></bdi> . <br/>
              لتحقق من نتائج التجربة بستعمال <bdi><b>console.log()</b></bdi> توجه إلى موقعك وقم بنقر نقرة بستعمال الزر الأيمن من الماوس بعد النقر ستضهر قائمة قم بنقر على الخيار الأخير تم توجه إلى الخيار <b>console</b> .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:lime">console</span>.<span style="color:gold;">log(</span>content<span style="color:gold;">)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال : </div>
        <img src={images.js2_output4} className="img"/>
        <img src={images.js2_output4_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">5. <bdi>console.print()</bdi> </h2>
        <p className="style_divv"> 
            لا تحتوي <b>JavaScript</b> على أي كائن طباعة أو طرق طباعة.<br/>
            لا يمكنك الوصول إلى أجهزة الإخراج من <b>JavaScript</b>.<br/>
            الاستثناء الوحيد هو أنه يمكنك استدعاء طريقة <bdi><b>window.print()</b></bdi> في المتصفح لطباعة محتوى النافذة الحالية.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold;">print()</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال : </div>
        <ul><li> قم بنقر لطباعة بشكل أفضل للفهم بشكل أفضل </li></ul>
        <div className="styleee">
            <button id="print" onclick="Pr()"> OK </button>
        </div>        
    </article>
</section>
    )
}
