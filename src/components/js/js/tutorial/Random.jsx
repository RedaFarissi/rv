import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState, useEffect } from 'react';

export default function Random(){

    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 10) + 1);
    const [randomNum2, setRandomNum2] = useState(Math.floor(Math.random() * 10) );
    const [randomNum3, setRandomNum3] = useState(Math.floor(Math.random() * (200 - 90) )+90 );
    const [randomNum4, setRandomNum4] = useState(Math.floor(Math.random() * (21 - 9) )+ 9 );
    const [randomNum5, setRandomNum5] = useState(Math.floor(Math.random() * (21 - 9 + 1) )+ 9 );
    useEffect(() => {
        setRandomNum(Math.floor(Math.random() * 10) + 1); 
        setRandomNum2(Math.floor(Math.random() * 10));
        setRandomNum3(Math.floor(Math.random() * (200 - 90) ) + 90);
        setRandomNum4(Math.floor(Math.random() * (21 - 9) ) + 9);
        setRandomNum5(Math.floor(Math.random() * (21 - 9 + 1) ) + 9);
    },[]); 

    const code1 = `function name_function(){
    return Math.floor(Math.random() * (max - min) )+ min ;
}`;
    const code2 = `function name_function(){
    return Math.floor(Math.random() * (max - min + 1) )+ min ;
}`


    const codeExemple1= { 
    code: `     <h2 id="random-id"></h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("random-id").innerHTML = Math.floor(Math.random() * 10) + 1`
    }
    const codeExemple2= { 
    code: `     <h2 id="random-id"></h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("random-id").innerHTML = Math.floor(Math.random()*10)`
    }
    const codeExemple3= { 
    code: `     <h2 id="random-id"></h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("random-id").innerHTML = Math.floor(Math.random() * (200 - 90) )+90`
    }
    const codeExemple4= { 
    code: `     <h2 id="random-id"></h2>
    
     <script src="./index.js"></script>`,
    script:`function random_integer(min, max){
  document.getElementById("random-id").innerHTML = Math.floor(Math.random() * (max - min) )+ min
}
random_integer(10,21)`
    }
    const codeExemple5= { 
    code: `     <h2 id="random-id"></h2>
    
     <script src="./index.js"></script>`,
    script:`function random_integer(min, max){
  let r = Math.floor(Math.random() * (max - min + 1 ) )+ min
  document.getElementById("random-id").innerHTML = r
}
random_integer(10,21)`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Random</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. <bdi>Math.random()</bdi></h2>
        <p className="style_divv">
            تُرجع <b><bdi>Math.random()</bdi></b> رقمًا عشوائيًا بين 0 (ضمنيًا) و 1 (حصريًا) .<br/>
            تُرجع <b><bdi>Math.random()</bdi></b> دائمًا رقمًا أقل من 1.<br/>
           <ul><li>إرجاع عدد صحيح عشوائي من 0 إلى أقل من 1</li></ul>
            <CodeHighlighter code={`let d = Math.random();`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي بين 0 و 10.</li></ul>
        
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{randomNum}</h2>
        </Result>
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
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{randomNum2}</h2>
        </Result>
        <div className="mital">متال 2:  </div>
        <ul><li> في كل مرة تقوم بتحديت الصفحة يتم تحديد رقم عشوائي  بين 90 و 199.</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{randomNum3}</h2>
        </Result>
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
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{randomNum4}</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <ul><li>عرض وظيفة <b>JavaScript</b> هذه دائمًا رقمًا عشوائيًا بين <b>min</b> و <b>max</b> (كلاهما مضمن): </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="String" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='String' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>{randomNum5}</h2>
        </Result>
        <ul><li><small>لا تقلق إن لم تفهم بخصوص الدالة function ستتعلم ذالك خلال دروس القادمة .</small></li></ul>
    </article>
</section>
    )
}