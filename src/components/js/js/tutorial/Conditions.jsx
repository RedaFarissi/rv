import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Conditions(){
  const code1 = `if(condition){
    //JavaScript code 
}
`;
  const code2 = `if(condition){
    //JavaScript code
}else{
    //JavaScript code
}`
  const code3 = `if(condition){
    //JavaScript code
}else if(condition){
    //JavaScript code
}`;

  const codeExemple1= { 
  code: `     <h2 id="condition1">condition1 : </h2>
     <h2 id="condition2">condition2 :</h2>
  
     <script src="./index.js"></script>`,
  script:`if(7 > 8){
    document.getElementById("condition1").innerHTML += "false"
}
  
if( 7 == 7){
  document.getElementById("condition2").innerHTML += "true"
}`
  }
  const codeExemple2= { 
  code: `    <h2 id="condition"> condition : </h2> 
  
     <script src="./index.js"></script>`,
  script:`if(7 > 8){
    document.getElementById("condition").innerHTML += "true"
}else{
    document.getElementById("condition").innerHTML += "false"
}`
  }

  const codeExemple3= { 
  code: `     <h2 id="condition"> condition : </h2>
  
     <script src="./index.js"></script>`,
  script:`if(7 < 8){
    document.getElementById("condition").innerHTML += "true"
}else{
    document.getElementById("condition").innerHTML += "false"
}`
  }
  const codeExemple4= { 
  code: `     <h2 id="condition"></h2>
  
     <script src="./index.js"></script>`,
  script:`let age = 17;

if (age >= 18){
    document.getElementById("condition").innerHTML = "Welcome! You are old enough to proceed."
}else if(age < 18){
    document.getElementById("condition").innerHTML ="Sorry, you must be 18 or older to access this content."
}else{
    document.getElementById("condition").innerHTML ="Please enter a valid age.";
}`
  }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript Conditions</h1>
  <article className="mt-5">
        <p className="style_divv">
            تستخدم العبارات الشرطية لأداء إجراءات مختلفة بناءً على شروط مختلفة.<br/>
            في كثير من الأحيان عندما تكتب رمزًا ، فأنت تريد تنفيذ إجراءات مختلفة لقرارات مختلفة.<br/>
            يمكنك استخدام العبارات الشرطية في التعليمات البرمجية الخاصة بك للقيام بذلك.<br/>
            في <b>JavaScript</b> لدينا العبارات الشرطية التالية:<br/>
            <ul>
                <li>استخدم <b>if</b> في حالة تحديد كتلة من التعليمات البرمجية ليتم تنفيذها ، إذا كان الشرط المحدد صحيحًا .</li>
                <li> استخدم <b>else</b> لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها ، إذا كان الشرط خاطئا .</li>
                <li> استخدم <b>else if</b> لتحديد شرط جديد للاختبار ، إذا كان الشرط الأول خاطئًا .</li>
            </ul>
        </p>
  </article>
  <article>
        <h2 className="title-h2">1.<bdi> JavaScript Condition if() </bdi></h2>
        <p className="style_divv">
            استخدم عبارة <b>if</b> لتحديد كتلة من تعليمات <b>JavaScript</b> البرمجية ليتم تنفيذها إذا كان الشرط صحيحًا .
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Conditions" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Conditions' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>condition1 :</h2>
            <h2>condition2 :true</h2>
        </Result>
  </article>
  <article>
        <h2 className="title-h2">2.<bdi> JavaScript Condition if() else()</bdi></h2>
        <p className="style_divv">
            استخدم تعليمة <b>else</b> لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها إذا كان الشرط <b>if</b> خاطئًا.
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Conditions" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Conditions' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>condition : false</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Conditions" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Conditions' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>condition : true</h2>
        </Result>
  </article>
  <article>
        <h2 className="title-h2">3.<bdi> JavaScript Condition if()  else if()</bdi></h2>
        <p className="style_divv">
            استخدم تعليمة <b>else</b> لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها إذا كان الشرط <b>if</b> خاطئًا.
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Conditions" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Conditions' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Sorry, you must be 18 or older to access this content.</h2>
        </Result>
  </article>
</section>
  )
}