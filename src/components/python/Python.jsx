import images from "./imagesPython"
import { CodeHighlighter , CodeCommand } from "../path";


export default function Python(props){
    
    const arr = props.python_list.map(e => <li className="p-0 m-0 list-group-item">
        <a href={`/python#${e.toLowerCase().replace(/\s/g, '-')}`} className="p-2">
            <i className="fa-solid fa-caret-right me-1"></i> Python {e}
        </a>
    </li>)
    return(
        <main>
    <aside className="aside">
        <ul className="list-group m-0 p-0">
            {arr}
        </ul>
    </aside>
    <section className="section-conetent">
        <h1 className="heading-style heading-style-python-color"> Python </h1>
        <article className="mt-5">
            <h2 id="intro" className="title-h2"> 1 - مقدمة حول البايثون . </h2>
            <h3 className="title-h3">1 - ما هو البايثون .</h3> 
            <p className="style_divv">
                البايثون هي لغة برمجة عالية المستوى وغير متخصصة معروفة بقراءتها وبساطتها. تم إنشاؤها بواسطة جويدو فان روسوم وتم إصدارها لأول مرة في عام 1991. صممت البايثون لتكون سهلة التعلم والاستخدام، مع بنية نظيفة وبسيطة تؤكد على قراءة الشيفرة. تدعم البايثون عدة نماذج لبرمجة، بما في ذلك البرمجة الإجرائية، والبرمجة الكائنية التوجيهية، والبرمجة الوظيفية.
            </p>
            <h3 className="title-h3">2 - ماذا يمكن أن تفعل البايثون .</h3> 
            <p className="style_divv">
                البايثون هي لغة متعددة الاستخدامات مع مجموعة واسعة من التطبيقات. فيما يلي بعض الأشياء التي يمكن أن تقوم بها البايثون:
                <ul>
                    <li><b className="text-success">تطوير الويب :</b> يمكن استخدام البايثون لتطوير الخوادم في تطبيقات الويب باستخدام إطارات مثل Django و Flask.</li>
                    <li><b className="text-success">علوم البيانات والتحليل :</b> تستخدم البايثون على نطاق واسع لتلاعب وتحليل البيانات، مع مكتبات مثل NumPy و Pandas و Matplotlib.</li>
                    <li><b className="text-success">تعلم الآلة والذكاء الاصطناعي :</b> أصبحت البايثون خيارًا شائعًا لتطوير التعلم الآلي والذكاء الاصطناعي، مع مكتبات مثل TensorFlow و PyTorch.</li>
                    <li><b className="text-success">تطوير الألعاب :</b> يمكن استخدام البايثون لتطوير الألعاب، وهناك مكتبات وأطُر مثل Pygame لهذا الغرض.</li>
                    <li><b className="text-success">تطبيقات سطح المكتب :</b> يمكن استخدام البايثون لتطوير تطبيقات سطح المكتب باستخدام إطارات مثل Tkinter.</li>
                    <li><b className="text-success">برمجة الشبكات :</b> يستخدم البايثون في برمجة الشبكات والنصوص الآلية، مما يجعله مفيدًا للمهام المتعلقة بالشبكات وأمان المعلومات.</li>
                </ul>
            </p>
            <h3 className="title-h3">3 - لماذا البايثون .</h3> 
            <p className="style_divv">
                هناك العديد من الأسباب التي تجعل البايثون خيارًا شائعًا بين المطورين:
                <ul>
                    <li><b className="text-success">القراءة :</b> يجعل البنية النظيفة والسهلة للقراءة في البايثون من الشيفرة سهلة الفهم والكتابة، مما يقلل من تكلفة صيانة البرنامج وتطويره.</li>
                    <li><b className="text-success">التنوع :</b> يمكن استخدام البايثون في مجموعة واسعة من التطبيقات، من تطوير الويب إلى الحوسبة العلمية وتعلم الآلة وغيرها.</li>
                    <li><b className="text-success">المجتمع والبيئة البيئية :</b> يحتوي البايثون على مجتمع كبير ونشط من المطورين، مما يسهم في بيئة واسعة من المكتبات والأطُر التي تبسط مهام التطوير.</li>
                    <li><b className="text-success">سهولة التعلم :</b> يعرف البايثون ببساطته وسهولته للقراءة، مما يجعله خيارًا ممتازًا للمبتدئين، حيث يتميز بتعلم سلس، مما يتيح للمبتدئين فهم المفاهيم البرمجية بسرعة.</li>
                    <li><b className="text-success">مصدر مفتوح :</b> البايثون هو لغة مفتوحة المصدر، مما يعني أن شيفرتها متاحة بحرية. وهذا يشجع على التعاون والابتكار والتحسين المستمر.</li>
                </ul> 
            </p>
        </article>
        <article className="mt-5">
            <h2 id="install-windows" className="title-h2"> 2 - تثبيت بايثون . </h2>
            <h3 className="title-h3">1 - تحميل بايثون .</h3>
            <p className="style_divv">             
                <ul>
                    <li>قم بزيارة موقع بايثون الرسمي : <a dir="ltr" href="https://www.python.org/downloads/" target="_blank" className="text-success">https://www.python.org/downloads/.</a></li>
                    <li>انقر على علامة التبويب "Downloads".</li>
                    <li>اختر أحدث إصدار من بايثون لنظام التشغيل Windows وقم بتنزيل المثبت (عادةً ملف .exe).</li>
                </ul>
            </p>
            <img src={images.python1} className="img" alt="python" />
            <h3 className="title-h3">2 - تشغيل المثبت .</h3>
            <p className="style_divv">
                <ul>
                    <li>انقر نقرًا مزدوجًا على المثبت الذي تم تنزيله.</li>
                    <li>تأكد من تحديد خانة "Add Python to PATH" أثناء التثبيت.</li>
                    <li>انقر على "Install Now" لبدء التثبيت.</li>
                    <li>سيقوم المثبت بتثبيت بايثون وإعداد المتغيرات البيئية الضرورية.</li>
                </ul>
            </p>
            <img src={images.python2} className="img" alt="python" />
            <img src={images.python3} className="img" alt="python" />
            <h3 className="title-h3">3 - التحقق من التثبيت .</h3>
            <p className="style_divv">
                افتح نافذة الأوامر واكتب <b>python --version</b> أو <b>python -V</b> للتحقق مما إذا كان بايثون قد تم تثبيته ولرؤية الإصدار المثبت.
            </p>
            <CodeCommand>C:\{">"} <span className="text-warning">python --version</span><br/>{`>>>`} Python 3.12.1</CodeCommand>
        </article>
        <article>
            <h2 id="execute-python-in-cmd" className="title-h2"> 3 - تنفيذ بايثون في موجه الأوامر . </h2>
            <h3 className="title-h3"> افتح موجه الأوامر</h3>
            <CodeCommand>
                C:\{">"} <span className="text-warning">python</span><br/>
                Python 3.12.1 (tags/v3.12.1:2305ca5, Dec  7 2023, 22:03:25) [MSC v.1937 64 bit (AMD64)] on win32<br/>
                Type "help", "copyright", "credits" or "license" for more information.<br/><br/>
                {`>>>`} print("Hello, Python!")<br/>
                Hello, Python!
            </CodeCommand>
        </article>
        <article>
            <h2 id="indentation" className="title-h2"> 4 - المسافة الفارغة في بايثون  .</h2>
            <p className="style_divv">
                في لغة البرمجة <b>Python</b>، المسافة الفارغة <b>(Whitespace)</b> تلعب دورًا هامًا في تنظيم الشيفرة وتحديد هيكليتها. إليك بعض الأمور المهمة التي يمكن فعلها باستخدام المسافة الفارغة في <b>Python</b> .
            </p>
            <h3 className="title-h3">1 - المسافات والتباعد .</h3>
            <p className="style_divv">
                المسافات في بداية السطر <b>(indentation)</b> تُستخدم لتحديد الكتل البرمجية. يتوجب أن تكون جميع الأسطر في نطاق <b>(block)</b> معينة متداخلة بنفس عدد المسافات أو الأقواس التي تبدأ في السطر الذي يسبقها. 
                <CodeHighlighter code={`if True:
    print("This is indented.")`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital">متال : </div>
            <CodeHighlighter code={`if 5 > 2:
    print("Five is greater than two!")`} language="python" addclassName="mt-3 mb-3" copie={true}/>

            <div  className="alert alert-danger p-1 py-2">
                <ul><li>سوف تعطيك بايثون خطأً إذا تخطيت المسافة البادئة</li></ul>
                <CodeHighlighter code={`if 5 > 2:
print("Five is greater than two!")`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </div>
            <h3 className="title-h3">2 - تحديد نهاية السطر .</h3>
            <p className="style_divv">
                نهاية السطر في <b>Python</b> تُعبر عن نهاية التعليمة، ولا يحتاج السطر إلى فاصل منفصل (مثل في لغات أخرى).
            </p>
        </article>
        <article>
                    
        </article>
    </section>
</main>
    )
}