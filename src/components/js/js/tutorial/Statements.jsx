import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Statements(){
    const codeExemple1= { 
        code: `     <h2 id="hw">  </h2>
    <scrip>
        document.getElementById("hw").innerHTML = "Hello Word"
    </scrip>`
    }

    const codeExemple2= { 
    code: `     <h2 id="number"> </h2>
    <script src="./index.js"></script>`,
    script:`let a, b, sum ;
a = 2;
b = 4;
sum = a + b;
document.getElementById("number").innerHTML = sum ;`
    }
    const codeExemple3= { 
    code: `    <h2 id="Number">  </h2>
    <script src="./index.js"></script>`,
    script:`let a2, b2, sum2;
a2 = 2; b2 = 4; sum2 = a2 + b2;
document.getElementById("Number").innerHTML = sum2;`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Statements</h1>
    <article className="mt-5">
        <p className="style_divv">
            برنامج الكمبيوتر هو قائمة "تعليمات" ليتم "تنفيذها" بواسطة جهاز كمبيوتر .<br/>
            في لغة البرمجة ، تسمى تعليمات البرمجة هذه العبارات .<br/>
            برنامج <b>JavaScript</b> هو قائمة ببيانات البرمجة .<br/><br/>
            تتكون جمل   <b>JavaScript</b> من:<br/>
            <ul dir="ltr">
                <li><b>Values</b> : القيم .</li>
                <li><b>Operators</b> : المعاملات .</li>
                <li><b>Expressions</b> : التعبيرات .</li>
                <li><b>Keywords</b> : الكلمات الرئيسية .</li>
                <li><b>Comments</b> : التعليقات .</li>
            </ul>
        </p>
        <div className="mital">متال :  </div>
        <ul><li> هذا السطر البرمجي يخبر المتصفح بكتابة <b>Hello Word</b> . داخل عنصر <b>HTML</b> الذي يحتوي على السمة  <bdi><b>id="hw"</b></bdi> :</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Statements" addClass="mt-3 mb-3" copie={true} number={true}/>
        <Result title='Statements' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Hello Word </h2>          
        </Result>
        <ul>
            <li> تحتوي معظم برامج <b>JavaScript</b> على العديد من عبارات <b>JavaScript</b> . </li>
            <li> يتم تنفيذ البيانات ، واحدة تلو الأخرى ، بنفس ترتيب كتابتها . </li>
            <li> غالبًا ما تسمى برامج <b>JavaScript</b> و عبارات <b>JavaScript</b> كود جافا سكريبت . </li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2">1. فاصلة منقوطة - Semicolons .</h2>
        <p className="style_divv">
            تفصل الفاصلة المنقوطة عبارات <b>JavaScript</b>.<br/>
            أضف فاصلة منقوطة في نهاية كل عبارة قابلة للتنفيذ لكي لا تحصل على خطأ عند تشغيل الكود .
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Statements" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Statements' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 6 </h2>          
        </Result>
        <div className="mital"> متال 2 :  </div>
        <ul>
            <li> على الويب ، قد ترى أمثلة بدون فواصل منقوطة.</li>
            <li> عبارات النهاية بالفاصلة المنقوطة غير مطلوبة ، ولكن يوصى بها بشدة.</li>
            <li>عند الفصل بفاصلة منقوطة ، يُسمح بعبارات متعددة في سطر واحد </li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Statements" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js" addClass="mt-3 mb-3" copie={true} number={true}/>
        <Result title='Statements' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 6 </h2>          
        </Result>
    </article>
</section>
    )
}