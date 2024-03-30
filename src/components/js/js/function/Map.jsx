import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Map(){
    const codeExemple1= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const arr = [2, 4, 6, 8, 10];
const res = document.getElementById("result");

let power = arr.map(function(element) {
  return element * element;
});

for (let i = 0; i < power.length; i++) {
  res.innerHTML += \`\${power[i]} <br/>\`;
}`
    }
    const codeExemple2= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const arr = [2, 4, 6, 8, 10];

let power = arr.map((element) =>  element * element );

for (let i = 0; i<power.length; i++) {
    document.getElementById("result").innerHTML += \`\${power[i]} <br/>\`;
}`
    }
    const codeExemple3= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const arr = [2, 4, 6, 8, 10];

function power(num){
  return num * num
}

let powerArr = arr.map(power);

for (let i = 0; i<powerArr.length; i++) {
    document.getElementById("result").innerHTML += \`\${powerArr[i]} <br/>\`;
}`
    }
    
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Map</h1>
    <article className="mt-5">
        <p className="style_divv">
            تُنشئ <bdi><b>map()</b></bdi> مصفوفة جديدة من استدعاء دالة لكل عنصر مصفوفة.<br/>
            تعتبر الدالة <bdi><b>map()</b></bdi> من 
            <button className="text-danger border-0" data-bs-toggle="collapse" data-bs-target="#id_name"> Higher Order Functions </button><br/>
            <div id="id_name" className="collapse bg-primary p-3 mt-2 mb-2"> 
                <b>Higher Order Functions</b> هي دالة تستقبل ك <b>parametre</b> دالة تانية   .<br/>
                هاده الدالة التانية تستقبل أيضا <b>parametre</b> . 🙄
            </div>
            لا يغير <bdi><b>map()</b></bdi> المصفوفة الأصلية.<br/>
            تستدعي <bdi><b>map()</b></bdi> دالة مرة واحدة لكل عنصر في المصفوفة.<br/>
            لا ينفذ <bdi><b>map()</b></bdi> الوظيفة للعناصر الفارغة.<br/>
            الدالة داخل الدالة <b>map</b> يجب أن تحتوي <small>parametre</small> واحد على الأقل . و يمتل  عنصر المصفوفة في كل مرة .<br/>
            <CodeHighlighter code={`array.map(function(element , index , array), thisValue)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> الطريقة 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>4<br/>16<br/>36<br/>64<br/>100</h2>
        </Result>
        <div className="mital"> الطريقة 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>4<br/>16<br/>36<br/>64<br/>100</h2>
        </Result>
        <div className="mital"> الطريقة 3 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>4<br/>16<br/>36<br/>64<br/>100</h2>
        </Result>
    </article>
</section>
    )
}