import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultConsole} from "../../../path";

export default function Output(){
    const code1= `document.getElementById("id").innerHTML = content
document.write(content)
window.alert(content)
console.log(content)`
    const code2= `document.getElementById("id_element").innerHTML = content`
    const code3= `document.write("test")`
    const code4= `window.alert("test")`
    const code5= `console.log("test")`
    const code6= `window.print()`
    const codeExemple1= { 
    code: `     <h2 id="id-number"></h2>
    <script src="./index.js"></script>`,
    script:`document.getElementById("id-number").innerHTML = 5 + 6 ;`
    }
    const codeExemple2= { 
    code: `     <h2> Hello Word </h2>  
    <img src="./html_logo.png" alt="html logo" /> 
    <script src="./index.js"></script>`,
    script:`document.write("<h2 style='color:red'> heading </h2>");
document.write("<p> Paragraph lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>");`
    }
    const codeExemple3= { 
    code: `      
    <script src="./index.js"></script>`,
    script:`window.alert("5 + 7 = "+(5+7))`
    }
    const codeExemple4= { 
    code: `      
    <script src="./index.js"></script>`,
    script:`var f_name = "Reda";
var l_name = "Eskouni";

console.log(f_name + " " + l_name)`
    }
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
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true}/>  
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. innerHTML </h2>
        <p className="style_divv">
            للوصول إلى عنصر  <b>HTML</b> عبر <b>JavaScript</b> استخدام طريقة <b>innerHTML</b> .<br/><br/>
            تحدد  <b>innerHTML</b> محتوى العنصر . عبر <b>id</b> <br/>
            توجد طرق أخرى لستخدام <b>innerHTML</b> سنتعرف على ذالك في الدروس القادمة .
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true}/>  
        </p>

        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Output" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Output' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 11 </h2>          
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. <bdi>document.write()</bdi> </h2>
        <p className="style_divv">
            تستخدم <bdi><b>document.write()</b></bdi> لإختبار الكود الخاص بك أو طباعة شيء داخل موقعك .<br/>
            سيؤدي استخدام <bdi><b>document.write()</b></bdi> بعد تحميل مستند <b>HTML</b> إلى حذف كل <b>HTML</b> الموجود .<br/>
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true}/>  
        </p>
    
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Output" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js" addClass="mt-3 mb-3" copie={true} number={true}/>
        <Result title='Output' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 style={{color:"red"}}> heading </h2>
            <p> Paragraph lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </Result>
        <ul><li> يجب استخدام طريقة <bdi><b>document.write()</b></bdi> للاختبار فقط.</li></ul>
    </article>
    <article>
        <h2 className="title-h2">3. <bdi>window.alert()</bdi> </h2>
        <p className="style_divv">
            تستخدم <bdi><b>window.alert()</b></bdi> لعرض البيانات داخل مربع تنبيه .
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true}/>  
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Output" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true} number={true}/>
        <Result title='Output' logo={images.html_logo} displayAlert="true" alertValue="5 + 7 = 12" route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. <bdi>console.log()</bdi> </h2>
        <p className="style_divv"> 
              يمكنك استعمال   <bdi><b>console.log()</b></bdi> لأغراض التصحيح أو تأكد من النتائج لا غير.<br/>
              مما يعني أنه لا يمكن عرض البيانات بستخدام  <bdi><b>console.log()</b></bdi> . <br/>
              لتحقق من نتائج التجربة بستعمال <bdi><b>console.log()</b></bdi> توجه إلى موقعك وقم بنقر نقرة بستعمال الزر الأيمن من الماوس بعد النقر ستضهر قائمة قم بنقر على الخيار الأخير تم توجه إلى الخيار <b>console</b> .
            <CodeHighlighter code={code5} language="js" addClass="mt-3 mb-3" copie={true}/>  
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Output" addClass="mt-3 mb-3" copie={true} number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js" addClass="mt-3 mb-3" copie={true} number={true}/>
        <ResultConsole title='Output' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            Reda Eskouni
            <hr/>
        </ResultConsole>
    </article>
    <article>
        <h2 className="title-h2">5. <bdi>console.print()</bdi> </h2>
        <p className="style_divv"> 
            لا تحتوي <b>JavaScript</b> على أي كائن طباعة أو طرق طباعة.<br/>
            لا يمكنك الوصول إلى أجهزة الإخراج من <b>JavaScript</b>.<br/>
            الاستثناء الوحيد هو أنه يمكنك استدعاء طريقة <bdi><b>window.print()</b></bdi> في المتصفح لطباعة محتوى النافذة الحالية.
            <CodeHighlighter code={code6} language="js" addClass="mt-3 mb-3" copie={true}/>  
        </p>   
    </article>
</section>
    )
}
