import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Random(){
    const code1 = `function name_function(){
    return Math.floor(Math.random() * (max - min) )+ min ;
}`;
    const code2 = `function name_function(){
    return Math.floor(Math.random() * (max - min + 1) )+ min ;
}`


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
           <ul><li>إرجاع عدد صحيح عشوائي من 0 إلى أقل من 1</li></ul>
            <CodeHighlighter code={`let d = Math.random();`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي بين 0 و 1.</li></ul>
        <img src={images.js14_random} className="img"/>
        <div className="styleee">
            <h2 id="id">  </h2>       
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. <bdi>JavaScript Random Integers</bdi></h2>
        <p className="style_divv">
            يمكن استخدام <bdi><b>Math.random()</b></bdi> مع <bdi><b>Math.floor()</b></bdi> لإرجاع أعداد صحيحة عشوائية .
            <ul><li> إرجاع عدد صحيح عشوائي من 0 إلى max_number</li></ul>
            <CodeHighlighter code={`let d = Math.floor(Math.random() * max_number+1  );`} language="js" addClass="mt-3 mb-3" copie={true} />
            <ul><li>  إرجاع عدد صحيح عشوائي من min إلى max-1 </li></ul>
            <CodeHighlighter code={`let d = Math.floor(Math.random() * (max - min) )+ min ;`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي  بين 0 و 9.</li></ul>
        <img src={images.js14_random2} className="img"/>
        <div className="styleee">
            <h2 id="ran">  </h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي  بين 0 و 10.</li></ul>
        <img src={images.js14_random3} className="img"/>
        <div className="styleee">
            <h2 id="id-random">  </h2>
        
        </div>
        <div className="mital">متال 3:  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي  بين 90 و 199.</li></ul>
        <img src={images.js14_random4} className="img"/>
        <div className="styleee">
            <h2 id="result">  </h2>
           </div>
    </article>
    <article>
        <h2 className="title-h2">3. Random Function</h2>
        <p className="style_divv">
            كما ترى من الأمثلة أسفله ، قد يكون من الجيد إنشاء دالة عشوائية مناسبة لاستخدامها في جميع أغراض الأعداد الصحيحة العشوائية.<br/>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <ul><li>   تعرض وظيفة <b>JavaScript</b> هذه دائمًا رقمًا عشوائيًا بين <b>min</b> (مضمن) و <b>max</b> (مستبعد): </li></ul>
        <img src={images.js14_random5} className="img"/>
        <div className="styleee">
            <h2 id="result2">  </h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <ul><li>عرض وظيفة <b>JavaScript</b> هذه دائمًا رقمًا عشوائيًا بين <b>min</b> و <b>max</b> (كلاهما مضمن): </li></ul>
        <img src={images.js14_random6} className="img"/>
        <div className="styleee">
            <h2 id="result3">  </h2>
        </div>
        <ul><li><small>لا تقلق إن لم تفهم بخصوص الدالة function ستتعلم ذالك خلال دروس القادمة .</small></li></ul>
    </article>
</section>
    )
}