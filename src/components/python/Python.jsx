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
            <h2 id="python-in-visual-studio-code" className="title-h2"> 5 - بايثون في VS Code .</h2>
            <p className="style_divv">
                يعد <b>Visual Studio Code (VS Code)</b> محرر تعليمات برمجية شائعًا وخفيف الوزن تم تطويره بواسطة <b>Microsoft</b>. يتمتع بدعم ممتاز لتطوير <b>Python</b> من خلال الامتدادات والميزات المختلفة.
            </p>
            <h3 className="title-h3">1 - تحميل visual Studio Code .</h3>
            <p className="style_divv">
                إذا لم تكن قد قمت بذلك بالفعل، فقم بتنزيل <b>Visual Studio Code</b> وتثبيته من الموقع الرسمي: <a href={`/html/editor`}>Visual Studio Code</a> .
            </p>
            <h3 className="title-h3">2 - إنشاء ملف بايثون .</h3>
            <p className="style_divv">
                قم بإنشاء ملف بايثون جديد بامتداد <kbd>.py</kbd>
                ، ويمكنك البدء في كتابة كود بايثون.
            </p>
            <div className="mital">متال : </div>
            <img src={images.python4} className="img" alt="python" />
        </article>
        <article>
            <h2 id="comments" className="title-h2"> 6 - التعليقات في بايثون </h2>
            <p className="style_divv">
                في لغة البرمجة <b>Python،</b> يمكنك إضافة تعليقات لشرح الشيفرة أو جعلها أكثر فهمًا. التعليقات لا تؤثر على تنفيذ الشيفرة، إذ تعتبر مجرد نص توضيحي يتم تجاهله أثناء تنفيذ البرنامج. لإضافة تعليقات في <b>Python</b>، يمكنك استخدام الرمز <b>#</b>
            </p>
            <div className="mital"> متال 1 : </div>
            <img src={images.python5} className="img" alt="python" />                     
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter code={`'''
    This is a long comment that spans several lines
    It can be used to explain code or write documentation for the program.
'''
print("Hello Word")`} language="python" file_name="app.py" addclassName="mt-3 mb-3" copie={true}/>
        <div className="mital"> النتيجة </div>
        <CodeCommand>Hello Word</CodeCommand>
        </article>
        <article>
            <h2 id="variables" className="title-h2"> 7 - المتغيرات . </h2>
            <h3 className="title-h3"> 1 - تسمية المتغير . </h3>
            <p className="style_divv">
                <ul>
                    <li>يمكن أن تحتوي أسماء المتغيرات في <b>Python</b> على الأحرف والأرقام وشرطة السفل.</li>
                    <li>لا يمكن أن تبدأ أسماء المتغيرات برقم.</li>
                    <li>أسماء المتغيرات حساسة لحالة الأحرف (مثل <b>myVar</b> و <b>myvar</b> هما متغيران مختلفان).</li>
                </ul>
            </p>
            <h3 className="title-h3"> 2 - تخصيص المتغير . </h3>
            <p className="style_divv">
                <ul>
                    <li>يمكنك تخصيص قيمة لمتغير باستخدام علامة اليسار <b>(=)</b> .</li>
                    <li>يتم تحديد نوع البيانات للمتغير بشكل دينامي استنادًا إلى القيمة المخصصة.</li>
                </ul>
            </p>
            <h3 className="title-h3"> 3 - أنواع البيانات . </h3>
            <p className="style_divv">
                <ul>
                    <li>تدعم <b>Python</b> مجموعة متنوعة من أنواع البيانات، بما في ذلك الأعداد الصحيحة، الأعداد العائمة، السلاسل النصية، القيم البولية، القوائم، الأزواج، القواميس، وغيرها.</li>
                    <li>لا يلزم عليك تحديد نوع البيانات للمتغير بشكل صريح؛ يحسب <b>Python</b> نوع البيانات استنادًا إلى القيمة المخصصة.</li>
                </ul>
            </p>
            <CodeHighlighter  code={`# Examples of variable assignments with different data types
age = 25            # Integer
height = 1.75       # Float
name = "John"       # String
is_student = True   # Boolean
my_list = [1, 2, 3]  # List`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3"> 4 - إعادة تخصيص المتغير . </h3>
            <p className="style_divv"><ul><li> يمكنك إعادة تخصيص متغير بقيمة جديدة، حتى مع نوع بيانات مختلف . </li></ul></p>
            <CodeHighlighter  code={`x = 5
x = "Hello"`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3"> 5 - طباعة المتغيرات . </h3>
            <p className="style_divv"><ul><li>يمكنك طباعة قيمة المتغير باستخدام وظيفة <b>print</b>.</li></ul></p>
            <CodeHighlighter  code={`my_variable = "Hello Word"
print(my_variable)`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3"> 6 - الطباعة الدينامية . </h3>
            <p className="style_divv"><ul><li><b>Python</b> هي لغة ذات طبيعة دينامية، وهذا يعني أنه لا يلزم عليك تحديد نوع البيانات بشكل صريح.</li></ul></p>
            <CodeHighlighter  code={`x = 10  # Integer
x = "Hello"  # String`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            <h3 className="title-h3"> 7 - الثوابت . </h3>
            <p className="style_divv">في حين أن <b>Python</b> لا تحتوي على ثوابت بالمعنى الدقيق، إلا أنه من المألوف استخدام أسماء بأحرف كبيرة للمتغيرات التي يجب التعامل معها كثوابت.</p>
            <CodeHighlighter  code={`PI = 3.14`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </article>
        <article>
            <h2 id="casting" className="title-h2"> 8 -  تحويل قيمة من نوع بيانات إلى نوع آخر . </h2>
            <p className="style_divv">  
                في <b>Python</b>، يشير مصطلح التحويل <b>(Casting)</b> إلى عملية تحويل قيمة من نوع بيانات إلى نوع بيانات آخر. توفر <b>Python</b> عدة وظائف مدمجة للتحويل، مما يتيح لك تحويل المتغيرات من نوع إلى نوع آخر. فيما يلي بعض الوظائف الشائعة للتحويل:
            </p>
            <h3 className="title-h3"> 1 - وظيفة <bdi>int()</bdi> . </h3>
            <p className="style_divv">  
                <ul><li>تحويل قيمة إلى عدد صحيح. إذا كانت القيمة عبارة عن عدد عائم، يتم قص الجزء العشري.</li></ul>
                <CodeHighlighter  code={`x = int(3.14)
print(x)  # Output: 3`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3"> 2 - وظيفة <bdi>float()</bdi> . </h3>
            <p className="style_divv">  
                <ul><li>تحويل قيمة إلى عدد عائم.</li></ul>
                <CodeHighlighter  code={`y = float("5.7")
print(y)  # Output: 5.7`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3"> 3 - وظيفة <bdi>str()</bdi> . </h3>
            <p className="style_divv">  
                <ul><li>حويل قيمة إلى سلسلة نصية</li></ul>
                <CodeHighlighter  code={`z = str(123)
print(z)  # Output: "123"`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3"> 4 - وظيفة <bdi>bool()</bdi> . </h3>
            <p className="style_divv">  
                <ul><li>تحويل قيمة إلى قيمة منطقية <b>(boolean)</b>. تقوم بتحويل القيم التي تعتبر "فارغة" أو "كاذبة" (مثل 0، سلاسل فارغة، أو None) إلى <b>False</b>. باقي القيم تتحول إلى <b>True</b>.</li></ul>
                <CodeHighlighter  code={`a = bool(0)
print(a)  # Output: False`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3"> 5 - وظائف <bdi>list()</bdi>، <bdi>tuple()</bdi>، <bdi>set()</bdi>، و <bdi>dict()</bdi> . </h3>
            <p className="style_divv">  
                <ul><li>تحويل تسلسل أو هيكل بيانات قابل للتكرار إلى قائمة، ترتيب، مجموعة، أو قاموس على التوالي.</li></ul>
                <CodeHighlighter  code={`my_list = list("hello")
print(my_list)  # Output: ['h', 'e', 'l', 'l', 'o']`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                <CodeHighlighter  code={`my_tuple = tuple([1, 2, 3])
print(my_tuple)  # Output: (1, 2, 3)`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                <CodeHighlighter  code={`my_set = set([1, 2, 3, 1])
print(my_set)  # Output: {1, 2, 3}`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                <CodeHighlighter  code={`my_dict = dict([('a', 1), ('b', 2)])
print(my_dict)  # Output: {'a': 1, 'b': 2}`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
        </article>
        <article>
            <h2 id="numbers" className="title-h2"> 9 - الأعداد في البايثون . </h2>
            <p className="style_divv">
                في <b>Python</b>، يتم تمثيل الأرقام باستخدام عدة أنواع من البيانات، بما في ذلك الأعداد الصحيحة والأعداد العائمة والأعداد المركبة. فيما يلي نظرة عامة على الأنواع الرئيسية للبيانات الرقمية في <b>Python</b> :
            </p>
            <h3 className="title-h3"> 1 - الأعداد الصحيحة (int) . </h3>
            <p className="style_divv">
                الأعداد الصحيحة هي الأعداد الكاملة بدون أي نقطة عشرية.
                <CodeHighlighter  code={`x = 5
y = -10
z = 0`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3"> 2 - الأعداد العائمة (float) . </h3>
            <p className="style_divv">
                تمثل الأعداد العائمة الأعداد التي تحتوي على نقط عشرية.
                <CodeHighlighter  code={`a = 3.14
b = -2.5`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3"> 3 - الأعداد المركبة (complex) . </h3>
            <p className="style_divv">
                الأعداد المركبة في <b>Python</b> هي نوع من أنواع البيانات تمثل الأعداد التي تتألف من جزء حقيقي وجزء خيالي. يُمثل الجزء الخيالي بحرف "j" في <b>Python</b>. صيغة العدد المركب تكون على النحو التالي: a + bj، حيث a هو الجزء الحقيقي و b هو الجزء الخيالي.
                <CodeHighlighter  code={`complex_number = complex(5)
print(complex_number)   # Output: (5+0j)`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                والهندسة، خاصةً في حالات تتعامل مع مفهوم الأعداد الخيالية. إليك بعض السياقات التي قد تكون فيها الأعداد المركبة مفيدة:<br/>
                الرياضيات التطبيقية: تستخدم الأعداد المركبة في العديد من التطبيقات في الفيزياء والهندسة، حيث يظهر الجزء الخيالي في تمثيل ظواهر مثل الموجات الكهرومغناطيسية والتحولات الرياضية المعقدة.<br/>
                تحليل الدوال: في بعض الدوال الرياضية، يتطلب الحساب استخدام الأعداد المركبة. على سبيل المثال، تحليل الدوال ذات التكاملات المعقدة يشمل استخدام الأعداد المركبة.<br/>
                التحليل الهندسي: في هندسة المستويات العليا والتحليل الهندسي، يمكن استخدام الأعداد المركبة لتمثيل النقاط في الفضاء.<br/>
                علوم الحاسوب: في بعض الحالات، يمكن استخدام الأعداد المركبة في مجالات مثل معالجة الإشارات ورسوم الكمبيوتر.<br/>
                التشفير وعلم الحوسبة الكمومية: في مجالات متقدمة، يلعب الأعداد المركبة دورًا هامًا في بعض تقنيات التشفير وفي مجال الحوسبة الكمومية.<br/>
            </p>
        </article>
        <article>
            <h2 id="strings" className="title-h2"> 10 -  . </h2>

        </article>
    </section>
</main>
    )
}
/*
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={``} language="python" addclassName="mt-3 mb-3" copie={true}/>   
*/