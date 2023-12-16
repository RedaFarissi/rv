import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Filter(){
    const codeExemple1= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const arr = [2, 4, 6, 8, 10];

let more_5 = arr.filter(function(num){ return num>5});

more_5.forEach(i=>{
    document.getElementById("result").innerHTML += \`\${i} <br/>\`;
})`
    }
    const codeExemple2= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const arr = [2, 4, 6, 8, 10];

let more_5 = arr.filter((num) => num>5 );
more_5.forEach(i=>{
    document.getElementById("result").innerHTML += \`\${i} <br/>\`;
})`
    }
    const codeExemple3= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`function more_than_5(num){
  return num>5
}

const arr = [2, 4, 6, 8, 10];

let more_5 = arr.filter(more_than_5);

more_5.forEach(i=>{
    document.getElementById("result").innerHTML += \`\${i} <br/>\`;
})`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Filter</h1>
    <article>
        <p className="style_divv mt-5">
           تُنشئ طريقة <bdi><b>filter()</b></bdi> مصفوفة جديدة مليئة بالعناصر التي تجتاز اختبارًا توفره الوظيفة.<br/>
           تعتبر الدالة <bdi><b>filter()</b></bdi> من 
            <button className="text-danger border-0" data-bs-toggle="collapse" data-bs-target="#id_name"> Higher Order Functions </button><br/>
            <div id="id_name" className="collapse bg-primary p-3 mt-2 mb-2"> 
                <b>Higher Order Functions</b> هي دالة تستقبل ك <b>parametre</b> دالة تانية   .<br/>
                هاده الدالة التانية تستقبل أيضا <b>parametre</b> . 🙄
            </div>
           لا تقوم طريقة <bdi><b>filter()</b></bdi> بتنفيذ الوظيفة للعناصر الفارغة.<br/>
           لا يغير أسلوب <bdi><b>filter()</b></bdi> المصفوفة الأصلية.<br/>
            <CodeHighlighter code={`array.filter(function(element , index , array), thisValue)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> الطريقة 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>6<br/>8<br/>10</h2>
        </Result>
        <div className="mital"> الطريقة 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>6<br/>8<br/>10</h2>
        </Result>
        <div className="mital"> الطريقة 3 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>6<br/>8<br/>10</h2>
        </Result>
    </article>
</section>
   )
}