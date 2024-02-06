import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Introduction.css"


export default function Introduction(props){

const codeExemple1 = { 
    css:`body{
        background-color: #dc3545;
}`,
    head:`      
    <link rel="stylesheet" href="./reda.css">`,
    code:``
    }

    const codeExemple2 = { 
    css:`#my-name {
    background-color: rgb(43, 122, 226);
    color: crimson;
    padding: 5px 5px;
}`,
    head:`
    <link rel="stylesheet" href="./index.css">`,
    code:`        <h1 id="my-name">Reda Eskouni</h1>`
    }

    const codeExemple3 = { 
    head:`    
    <style>
        .reda {
            background-color: rgb(0, 122, 226);
            color: yellow;
            padding: 5px 5px;
        }    
    </style>`,
    code:`
    <h1 class="reda">Reda Eskouni</h1>
    <h1 class="reda">Reda Eskouni</h1>
    <h1 class="reda">Reda Eskouni</h1>
    <h1 class="reda">Reda Eskouni</h1>
    <h1 class="reda">Reda Eskouni</h1>
    `
    }

    const codeExemple4 = { 
    code:`      <!-- 
            Comments 
        -->`
    }
    const codeExemple5 = { 
    head:`
    <style>
        h2 {
            color: red;
        }    
    </style>`,
    code:`        <h2>Heading Title 1</h2>
        <h2>Heading Title 2</h2>
        <h2>Heading Title 3</h2>
        <h2>Heading Title 4</h2>
        <h2>Heading Title 5</h2>`
    }



    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Introduction </h1>
    <article>
        <h2 className="title-h2">1. ما هي CSS ؟</h2>
        <p className="style_divv">
            ترمز <b>CSS</b> إلى <b>Cascading Style Sheets</b> و يصف <b>CSS</b> كيفية عرض عناصر <b>HTML</b> على الشاشة أو الورق أو في وسائط أخرى
            <b>CSS</b> يوفر الكثير من العمل. يمكن التحكم في تخطيط صفحات الويب متعددة في كل مرة .<br/>
            يتم كتابة أكواد <b>CSS</b> في ملفات أو في الوسم <b>head</b> أو داخل السمات كما تعلمنا في دروس <b>HTML</b> لاكن الطريقة التي تعتبر أكتر كفائة هي الملفات
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. طريقة إنشاء ملف CSS و ربط الملف ب html  </h2>
        <h3  className="title-h3">1. طريقة إنشاء الملف</h3>
        <p className="style_divv">
            لإنشاء ملف <b>CSS</b> كل ما عليك فعله إنشاء ملف وأن تقوم بئعطائه إسم و صيغة <b>CSS</b> تم التأكد أن ملف داخل نفس المجلد الذي يحتوي ملف <b>html</b> .
        </p>
        <div className="mital">متال : </div>
        <ul><li>في هاذا المتال قمنا بتسمية الملفين <b>reda</b> ولاكن يختلف الإمتداد فالملف الأول يحمل إمتداد <b>css</b> والملف التاني يحمل إمتداد <b>html</b> .</li></ul>
        <img src={images.css0_Introduction} alt="intro" className="img"/>
        <h3  className="title-h3">2. طريقة ربط الملف html ب css</h3>
        <p className="style_divv">
            لربط ملف <b>html</b> بملف <b>css</b> يجب إستخدام الوسم <kbd>&lt;link&gt;</kbd> مع السمة <b>rel</b> وقيمة <b>stylesheet</b> .<br/> 
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="reda.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="Reda test" addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter file_name="reda.css" code={codeExemple1.css} language="css" title="Reda test" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Reda test' styleAdd="bg-danger css-intr-ex1" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
     
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. تحديد عناصر  CSS عبر id </h2>
        <p className="style_divv">
            <ul>
                <li> يمكن إعطاء أي وسم من وسوم html السمة id تم كقيمة لهذه السمة يمكنك إعطاء أي إسم تريد و إعطاء أوامر CSS من خلاله .</li>
                <li> لتحديد وسم html عن طريق id يجب وضع هده العلامة # تم قيمة ال id .</li>
                <li> السمة id  هي سمة خاصة و يعني ذالك أنه لا يمكن تحيديد نفس ال id مرتين .</li>
            </ul>
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="Reda test" addClass="mt-3 mb-3" copie={true}/>
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" title="Reda test" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Reda test' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 className="css-intr-ex2">Reda Eskouni</h1>
        </Result>
        <ul><li> يمكنك دائما كتابة أكواد css داخل ملف خاص ب <b>css</b> وربطهم عن طريق الوسم <b>link</b> كما هو مذكور فوق .</li></ul>
    </article>
    <article>
        <h2 className="title-h2">4. تحديد عناصر  CSS عبر class </h2>
        <p className="style_divv">
            <ul>
                <li> يمكن إعطاء أي وسم من وسوم <b>html</b> السمة <b>class</b> تم كقيمة لهذه السمة يمكنك إعطاء أي إسم تريد و إعطاء أوامر CSS من خلاله .</li>
                <li> لتحديد وسم <b>html</b> عن طريق <b>class</b> يجب وضع نقطة قبل إسم ال  <b>class</b> .</li>
                <li> السمة <b>class</b>  هي سمة يمكن إعطائها لعدة أوسم <b>html</b>  وتنفيد الأكواد على كل العناصر دفعة واحدة.</li>
            </ul>
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="Css Introduction" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Css Introduction' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 className="css-intr-ex3">Reda Eskouni</h1>
            <h1 className="css-intr-ex3">Reda Eskouni</h1>
            <h1 className="css-intr-ex3">Reda Eskouni</h1>
            <h1 className="css-intr-ex3">Reda Eskouni</h1>
            <h1 className="css-intr-ex3">Reda Eskouni</h1>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. التعليقات - CSS Comments</h2>
        <p className="style_divv">
            يتم استخدام التعليقات لشرح التعليمات البرمجية، وقد تساعد عند تحرير التعليمات البرمجية المصدر في تاريخ لاحق.
            يتم تجاهل التعليقات من قبل المتصفحات.<br/>
            تعليق <b>CSS</b> يتم وضع داخل <kbd>&lt;style&gt;</kbd> أو داخل ملف css،  ويبدأ مع */ وينتهي ب /*:
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple4.code}  language="html" is_html={true} title="Css Introduction" addClass="mt-3 mb-3" copie={true}/>
    </article>
    <article>
        <h2 className="title-h2">6.  معلومات تقنية </h2>
        <p className="style_divv">
            يمكن إعطاء خصائص <b>CSS</b> عبر <b>id</b>  و ذالك يكون خاص بوسم واحد لأنه كما سبق ورؤينا السمة <b>id</b> هي سمة لا يمكن تكرارها بنفس القيمة ويجب إستعمال # من أجل تعريفها داخل <b>CSS</b> .<br/>
            أو السمة <b>class</b>  وهي سمة مفيدة جدا بحيت تمكنك من إعطاء نفس التصميم لعدة عناصر <b>html</b> دفعتا واحدة .<br/>
            يمكنك أيضا إعطاء تصاميم <b>CSS</b> من خلال إسم الوسم ونتيجتا لذالك كل وسوم <b>html</b> التي من نفس النوع سوف تأخد هاذا التصميم .
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple5.code} head={codeExemple5.head} language="html" is_html={true} title="Css Introduction" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Css Introduction' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 className="css-intr-ex5">Heading Title 1</h2>
            <h2 className="css-intr-ex5">Heading Title 2</h2>
            <h2 className="css-intr-ex5">Heading Title 3</h2>
            <h2 className="css-intr-ex5">Heading Title 4</h2>
            <h2 className="css-intr-ex5">Heading Title 5</h2>
        </Result>
        <ul><li>لاحض أن تصميم تم تنفيده على كل  وسوم h2 .</li></ul>
    </article>
</section>
)
}