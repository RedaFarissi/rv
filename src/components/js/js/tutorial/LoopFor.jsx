import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function LoopFor(){
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
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre>text += cars[<span style="color:var(--arr-num-color);">0</span>] + <span style="color:orange;">"&lt;br&gt;"</span>;
        text += cars[<span style="color:var(--arr-num-color)">1</span>] + <span style="color:orange;">"&lt;br&gt;"</span>;
        text += cars[<span style="color:var(--arr-num-color)">2</span>] + <span style="color:orange;">"&lt;br&gt;"</span>;
        text += cars[<span style="color:var(--arr-num-color)">3</span>] + <span style="color:orange;">"&lt;br&gt;"</span>;
        text += cars[<span style="color:var(--arr-num-color)">4</span>] + <span style="color:orange;">"&lt;br&gt;"</span>;
        text += cars[<span style="color:var(--arr-num-color)">5</span>] + <span style="color:orange;">"&lt;br&gt;"</span>;</pre>
    </div> */}
        <span><b>يمكنك كتابة:</b></span>
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><b style="color:rgb(193 131 188)">for</b>(<span style="color: var(--html-color-tags);">let</span> i=0 ; i< cars.<span style="color:#8fdcfe;">length</span> ; i++){
            text += cars[<span style="color:rgb(80,210,80);">i</span>] + <span style="color:orange;">"&lt;br&gt;"</span>
        }</pre></div> */}
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
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">for</span>(statement 1,statement 2,statement 3){
            <span style="color:green">//code block to be executed</span>
        }</pre></div> */}
        <ul dir="rtl">
            <li><bdi>statement 1 </bdi> : يتم تنفيذه (مرة واحدة) قبل تنفيذ كتلة التعليمات البرمجية.</li>
            <li><bdi>statement 2 </bdi> : يحدد شرط تنفيذ كتلة التعليمات البرمجية. </li>
            <li><bdi>statement 3 </bdi> : يتم تنفيذه (في كل مرة) بعد تنفيذ كتلة التعليمات البرمجية.</li>
        </ul>
            </p>
            <div className="mital">متال :  </div>
            <ul><li> سيتم تكرار السطر البرمجي 5 مرات .</li></ul> 
            <img src={images.js19_Loop} className="img"/>
            <div className="styleee">
                <h2> 0 1 2 3 4 </h2>
            </div>
            <div className="mital">متال 2 :  </div>
            <ul><li>في المتال المصفوفة تحتوي على 3 قيم و الحلقة <b>for</b> تقوم بتكرار 5 مراة مم يخلق قيم غير موجودة </li></ul> 
            <img src={images.js19_Loop2} className="img"/>
            <div className="styleee"><h2>reda<br/>eskouni<br/>25<br/>undefined<br/>undefined</h2></div>
            <div className="mital">متال 3 :  </div>
            <ul><li> يمكن إستخدام الخاصية <b>length</b> لإنشاء حلقة تقوم بتكرار الأوامر بنفس عدد عناصر المصفوفة </li></ul> 
            <img src={images.js19_Loop3} className="img"/>
            <div className="styleee"><h2> reda <br/> eskouni <br/> 25 </h2></div>
    </article>
    <article>
        <h2 className="title-h2">3. For In Loop </h2>
        <p className="style_divv">
            يمكن إستخدام <b>for in</b> مع الكائنات <small><small>(object)</small></small> و المصفوفات <small><small>(array)</small></small>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">for</span> (key <span style="color:var(--js-color)">in</span> object) {
          <span style="color:green">//code block to be executed</span>
        }</pre></div>
        <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">for</span> (key <span style="color:var(--js-color)">in</span> array) {
          <span style="color:green">//code block to be executed</span>
        }</pre></div>*/}
        </p> 
        <div className="mital">متال :  </div> 
        <img src={images.js19_Loop4} className="img"/>
        <div className="styleee"><h2> Reda <br/> Eskouni <br/> 25 </h2></div>
        <div className="mital">متال 2 :  </div> 
        <img src={images.js19_Loop5} className="img"/>
        <div className="styleee">
            <h2> Reda <br/> Eskouni <br/> 25 </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">4. For Of Loop</h2>
        <p className="style_divv">
            تتكرر  <bdi><b>for of</b></bdi> عبر قيم الكائن القابل للتكرار.<br/>
            يتيح لك إجراء حلقة حول هياكل البيانات القابلة للتكرار مثل <b>Arrays</b> و <b>Strings</b> و <b>Maps</b> و <b>NodeLists</b> والمزيد
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><b style="color:var(--violet-color)">for</b>(variable <span style="color:var(--js-color)">of</span> iterable) {
          <span style="color: green;">//code block to be executed</span>
        }</pre>
            </div> */}
        </p>
       <div className="mital">متال  :  </div> 
        <img src={images.js19_Loop6} className="img"/>
        <div className="styleee">
            <h2> Reda<br/>Kamal<br/>Manal<br/>hajar </h2>
        </div>
        <div className="mital">متال 2 :  </div> 
        <img src={images.js19_Loop7} className="img"/>
        <div className="styleee">
            <h2>c<br/>o<br/>d<br/>d<br/>i<br/>n<br/>g </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. Array forEach</h2>
        <p className="style_divv">
            تسمح لك طريقة <bdi><b>forEach()</b></bdi> بتنفيذ وظيفة معينة على كل عنصر من عناصر المصفوفة.<br/>
            تستدعي طريقة <bdi><b>forEach()</b></bdi> دالة (دالة رد نداء) مرة واحدة لكل عنصر مصفوفة
            <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">Arrays</span>.<span style="color:gold">forEach(</span> <span style="color:var(--js-color)">i</span> <span style="color:var(--html-color-tags)">=></span> { 
            <span style="color:green">//code to be executed</span>
        }<span style="color:gold">)</span>;</pre>
            </div>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">Arrays</span>.<span style="color:gold">forEach(</span><span style="color:var(--html-color-tags)">function(</span><span style="color:var(--js-color)">i</span><span style="color:var(--html-color-tags)">)</span>{
            <span style="color:green">//code to be executed</span>
        }<span style="color:gold">)</span>;</pre>
            </div>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">function</span> <b style="color:gold">name_Function(</b><span style="color:var(--js-color)">i</span><b style="color:gold">)</b>{
            <span style="color:green">//code to be executed</span>
        }
        <span style="color:var(--js-color)">Arrays</span>.<b style="color:gold">forEach(</b>name_Function<b style="color:gold">)</b></pre></div>*/}
        </p> 
        <div className="mital">متال :  </div> 
        <img src={images.js19_Loop8} className="img"/>
        <div className="styleee">
            <h2>1 x 2 = 2<br/>2 x 2 = 4<br/>3 x 2 = 6<br/>4 x 2 = 8<br/>5 x 2 = 10<br/>6 x 2 = 12<br/>7 x 2 = 14<br/>8 x 2 = 16<br/>9 x 2 = 18<br/>10 x 2 = 20</h2>
        </div>
        <div className="mital">متال 2 :  </div> 
        <img src={images.js19_Loop9} className="img"/>
        <div className="styleee">
            <h2>1 x 20 = 20<br/>2 x 20 = 40<br/>3 x 20 = 60<br/>4 x 20 = 80<br/>5 x 20 = 100<br/>6 x 20 = 120<br/>7 x 20 = 140<br/>8 x 20 = 160<br/>9 x 20 = 180<br/>10 x 20 = 200</h2>
        </div>
        <div className="mital">متال 3 :  </div> 
        <img src={images.js19_Loop10} className="img"/>
        <div className="styleee">
            <h2>20 40 60 80 0</h2>
        </div>
        <div className="mital">متال 4 :  </div> 
        <img src={images.js19_Loop11} className="img"/>
        <div className="styleee">
            <h2>a[0] = reda<br/>a[1] = 2<br/>a[2] = 3<br/>a[3] = 13<br/>a[4] = 2<br/>a[5] = 9<br/>a[6] = 6</h2>
        </div>
    </article>
</section>
    )
}
