export default function Random(){
    // let d = Math.random();
    // document.getElementById("id").innerHTML = d;

    //document.getElementById("ran").innerHTML = Math.floor(Math.random()*10)

    // function getRndInteger2(min, max) {
    //     return Math.floor(Math.random() * (max - min +1) ) + min;
    // }   
    // document.getElementById("result3").innerHTML =  getRndInteger2(9,20)

    // function getRndInteger(min, max) {
    //     return Math.floor(Math.random() * (max - min) ) + min;
    // }   
    // document.getElementById("result2").innerHTML =  getRndInteger(9,20)

    //  document.getElementById("result").innerHTML += Math.floor(Math.random() * (200-90) ) + 90 ;
    //document.getElementById("id-random").innerHTML = Math.floor(Math.random()*10)+1;
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Random</h1>
    <article>
        <h2 className="title-h2">1. <bdi>Math.random()</bdi></h2>
        <p className="style_divv">
            تُرجع <b><bdi>Math.random()</bdi></b> رقمًا عشوائيًا بين 0 (ضمنيًا) و 1 (حصريًا) .<br/>
            تُرجع <b><bdi>Math.random()</bdi></b> دائمًا رقمًا أقل من 1.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:green"><bdi>// إرجاع عدد صحيح عشوائي من 0 إلى أقل من 1</bdi></span>
        <span style="color:var(--html-color-tags)">let</span> d = <span style="color:lime">Math</span>.<span style="color:gold">random()</span>;</pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي بين 0 و 1.</li></ul>
        <img src="{% static 'js/js14_random.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="id">  </h2>       
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. <bdi>JavaScript Random Integers</bdi></h2>
        <p className="style_divv">
            يمكن استخدام <bdi><b>Math.random()</b></bdi> مع <bdi><b>Math.floor()</b></bdi> لإرجاع أعداد صحيحة عشوائية .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:green">// <bdi> إرجاع عدد صحيح عشوائي من 0 إلى max_number </bdi></span>
        <span style="color:var(--html-color-tags);">let</span> d = <span style="color:lime">Math</span>.<span style="color:gold">floor(</span><span style="color:lime">Math</span>.<span style="color:gold">random()</span> * max_number+1  <span style="color:gold">)</span>;</pre>
            </div>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:green">// <bdi> إرجاع عدد صحيح عشوائي من min إلى max-1 </bdi></span>
        <span style="color:var(--html-color-tags);">let</span> d = <span style="color:lime">Math</span>.<span style="color:gold">floor(</span><span style="color:lime">Math</span>.<span style="color:gold">random()</span> * (max - min) <span style="color:gold">)</span>+ min ;</pre>
            </div> */}
        </p>
        <div className="mital">متال 1 :  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي  بين 0 و 9.</li></ul>
        <img src="{% static 'js/js14_random2.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="ran">  </h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي  بين 0 و 10.</li></ul>
        <img src="{% static 'js/js14_random3.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="id-random">  </h2>
        
        </div>
        <div className="mital">متال 3:  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي  بين 90 و 199.</li></ul>
        <img src="{% static 'js/js14_random4.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="result">  </h2>
           </div>
    </article>
    <article>
        <h2 className="title-h2">3. Random Function</h2>
        <p className="style_divv">
            كما ترى من الأمثلة أسفله ، قد يكون من الجيد إنشاء دالة عشوائية مناسبة لاستخدامها في جميع أغراض الأعداد الصحيحة العشوائية.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:dodgerblue;">function</span> <span style="color:gold">name_function()</span>{
            <span style="color:rgb(193 131 188)">return</span> <span style="color:lime">Math</span>.<span style="color:gold">floor(</span><span style="color:lime">Math</span>.<span style="color:gold">random()</span> * (max - min) <span style="color:gold">)</span>+ min ;
        }</pre>
            </div> */}
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags);">function</span> <span style="color:gold">name_function()</span>{
            <span style="color:var(--violet-color)">return</span> <span style="color:lime">Math</span>.<span style="color:gold">floor(</span><span style="color:lime">Math</span>.<span style="color:gold">random()</span> * (max - min + <span>1</span>) <span style="color:gold">)</span>+ min ;
        }</pre>
            </div> */}
        </p>
        <div className="mital">متال 1 :  </div>
        <ul><li>   تعرض وظيفة <b>JavaScript</b> هذه دائمًا رقمًا عشوائيًا بين <b>min</b> (مضمن) و <b>max</b> (مستبعد): </li></ul>
        <img src="{% static 'js/js14_random5.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="result2">  </h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <ul><li>عرض وظيفة <b>JavaScript</b> هذه دائمًا رقمًا عشوائيًا بين <b>min</b> و <b>max</b> (كلاهما مضمن): </li></ul>
        <img src="{% static 'js/js14_random6.png' %}" className="img"/>
        <div className="styleee">
            <h2 id="result3">  </h2>
        </div>
        <ul><li><small>لا تقلق إن لم تفهم بخصوص الدالة function ستتعلم ذالك خلال دروس القادمة .</small></li></ul>
    </article>
</section>
    )
}