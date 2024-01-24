import { Routes, Route , Link} from "react-router-dom";
import images from "./imagesPython"
import { CodeHighlighter , CodeCommand } from "../path";
import {
    Introduction,InstallPython,ExecutePythonInCmd,Indentation,PythonInVisualStudioCode,
    

} from "./pathPython"

export default function Python(props){
    
    const arr = props.python_list.map(e => <li className="p-0 m-0 list-group-item">
        <Link to={`/python/${e.toLowerCase().replace(/\s/g, '-')}`} className="p-2">
            <i className="fa-solid fa-caret-right me-1"></i> Python {e}
        </Link>
    </li>)

    return(
<main>
    <aside className="aside">
        <ul className="list-group m-0 p-0">
            {arr}
        </ul>
    </aside>
    <section className="section-conetent">
        <h1 className="heading-style heading-style-python-color"> PYTHON </h1>
        <Routes>
              <Route path='/'  element={<Introduction  />} />
              <Route path='introduction'  element={<Introduction  />} />
              <Route path='install-windows'  element={<InstallPython  />} />
              <Route path='execute-python-in-cmd'  element={<ExecutePythonInCmd  />} />
              <Route path='indentation'  element={<Indentation  />} />
              <Route path='python-in-visual-studio-code'  element={<PythonInVisualStudioCode  />} />
        </Routes>
        
        
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
            <div className="mital"> Result </div>
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
                والهندسة، خاصةً في حالات تتعامل مع مفهوم الأعداد الخيالية. إليك بعض السياقات التي قد تكون فيها الأعداد المركبة مفيدة:<br/><br/>
                <ul>
                    <li> <b className="text-success">الرياضيات التطبيقية :</b> تستخدم الأعداد المركبة في العديد من التطبيقات في الفيزياء والهندسة، حيث يظهر الجزء الخيالي في تمثيل ظواهر مثل الموجات الكهرومغناطيسية والتحولات الرياضية المعقدة.</li>
                    <li> <b className="text-success">تحليل الدوال :</b> في بعض الدوال الرياضية، يتطلب الحساب استخدام الأعداد المركبة. على سبيل المثال، تحليل الدوال ذات التكاملات المعقدة يشمل استخدام الأعداد المركبة.</li>
                    <li> <b className="text-success">التحليل الهندسي:</b> في هندسة المستويات العليا والتحليل الهندسي، يمكن استخدام الأعداد المركبة لتمثيل النقاط في الفضاء.</li>
                    <li> <b className="text-success">علوم الحاسوب :</b>  في بعض الحالات، يمكن استخدام الأعداد المركبة في مجالات مثل معالجة الإشارات ورسوم الكمبيوتر.</li>
                    <li> <b className="text-success">التشفير وعلم الحوسبة الكمومية:</b> في مجالات متقدمة، يلعب الأعداد المركبة دورًا هامًا في بعض تقنيات التشفير وفي مجال الحوسبة الكمومية.</li>
                </ul>
            </p>
        </article>
        <article>
            <h2 id="strings" className="title-h2"> 10 - النصوص في البايثون . </h2>
            <p className="style_divv">
                في <b>Python</b>، السلاسل <b>(Strings)</b> هي تسلسلات من الأحرف وتُستخدم لتمثيل النصوص. يمكنك إنشاء سلسلة بواسطة وضع النص بين علامات الاقتباس .
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`# Using single quotes
string_single_quotes = 'Welcome to Python!'

# Using double quotes
string_double_quotes = "Python is fun and easy to use."

# Using triple quotes for multiline strings
multiline_string = '''This
is
a
multiline
string
in
Python.'''

print(string_single_quotes)
print(string_double_quotes)
print(multiline_string)`} language="python" file_name="desktop / app.py"  addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Welcome to Python!<br/>
                Python is fun and easy to use.<br/>
                This<br/>
                is<br/>
                a<br/>
                multiline<br/>
                string<br/>
                in<br/>
                Python.
            </CodeCommand>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`my_string = "Reda Eskouni"

# Accessing the first character
first_char = my_string[0] 
print(first_char)

# Accessing the third character
third_char = my_string[2]  
print(third_char)

# Accessing a range of characters 
substring = my_string[3:9] 
print(substring)


substring = my_string[5:] 
print(substring)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                R<br/>
                d      <br/>
                a Esko <br/>
                Eskouni<br/>
            </CodeCommand>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`string_single_quotes = 'Welcome to Python!'
string_double_quotes = "Python is fun and easy to use."

# Concatenating two strings
concatenated_string = string_single_quotes + " " + string_double_quotes
print(f"{concatenated_string} \n")

# Repeating a string
repeated_string = string_single_quotes * 3
print(f"{repeated_string} \n")

# Converting to lowercase
lowercase_string = string_double_quotes.lower()
print(f"{lowercase_string} \n")

# Converting to uppercase
uppercase_string = string_double_quotes.upper()
print(f"{uppercase_string} \n")

# Finding the position of a specific character in the string
index_of_char = string_double_quotes.index("a")
print(f"{index_of_char} \n")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Welcome to Python! Python is fun and easy to use. <br/><br/>
                Welcome to Python!Welcome to Python!Welcome to Python! <br/><br/>
                python is fun and easy to use.<br/><br/>
                PYTHON IS FUN AND EASY TO USE.<br/><br/>
                14<br/>
            </CodeCommand>
        </article>
        <article>
            <h2 id="booleans" className="title-h2"> 11 - القيمة المنطقية (Boolean) . </h2>
            <p className="style_divv">
                في <b>Python</b>، يُمثل نوع البيانات البوليان <b>(Boolean)</b> القيم الصحيحة، ولديه قيمتين ممكنتين: <b>True</b> و <b>False</b>.<br/>
                يعتبر البيان البوليان أساسيًا لاتخاذ القرارات والتحكم في تدفق البرنامج من خلال التعبيرات الشرطية. فيما يلي بعض النقاط الرئيسية حول البيانات البوليانية في <b>Python</b>
            </p>
            <h3 className="title-h3">1 - قيم البيانات البوليانية .</h3>   
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">True :</b> يُمثل حالة صحيحة أو إيجابية .</li>
                    <li><b className="text-success">False :</b> يُمثل حالة خاطئة أو سلبية .</li>
                </ul>    
            </p>    
            <h3 className="title-h3">2 - العمليات البوليانية .</h3>       
            <p className="style_divv">
                توفر <b>Python</b> العديد من العمليات البوليانية لدمج أو تلاعب قيم البيانات البوليانية، بما في ذلك:
                <ul>
                    <li><b className="text-success">and :</b> تُرجع <b>True</b> إذا كانت كلتا العمليتين صحيحتين.</li>
                    <li><b className="text-success">or :</b> تُرجع <b>True</b> إذا كانت واحدة على الأقل من العمليتين صحيحة.</li>
                    <li><b className="text-success">not :</b> تُرجع <b>True</b> إذا كانت العملية غير صحيحة، والعكس صحيح أيضًا.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = True
y = False

# Logical AND
result_and = x and y  # Result: False

# Logical OR
result_or = x or y    # Result: True

# Logical NOT
result_not = not x    # Result: False
`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3">3 - عمليات المقارنة .</h3>       
            <p className="style_divv">
                تُستخدم عمليات المقارنة لمقارنة القيم وإرجاع نتائج بيانية. تشمل عمليات المقارنة الشائعة ما يلي:
                <ul>
                    <li><b className="text-success">{'=='} :</b>  يساوي</li>
                    <li><b className="text-success">{'!='} :</b>  لا يساوي</li>
                    <li><b className="text-success">{'<'} :</b>  أقل من</li>
                    <li><b className="text-success">{'>'} :</b>  أكبر من</li>
                    <li><b className="text-success">{'<='} :</b>  أقل من أو يساوي</li>
                    <li><b className="text-success">{'>='} :</b>  أكبر من أو يساوي</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`a = 5
b = 10

# a equal b 
result_equal = a == b  # Result: False

# a not equal b
result_not_equal = a != b  # Result: True

# a less than b
result_less_than = a < b  # Result: True`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3">4 - القيم الصحيحة والقيم الكاذبة .</h3>       
            <p className="style_divv">
                بالإضافة إلى <b>True</b> و <b>False</b>، هناك العديد من القيم الأخرى في <b>Python</b> تعتبر حقيقية أو كاذبة عند استخدامها في سياقات بيانية. على سبيل المثال، 0، والتسلسلات الفارغة (مثل السلاسل الفارغة أو القوائم الفارغة)، و <b>None</b> تعتبر كاذبة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`falsy_value = 0
truthy_value = "Hello"
none_value = None

if falsy_value:
    print("This won't be executed.")

if none_value:
    print("This won't be executed.")

if truthy_value:
    print("This will be executed.")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                This will be executed.<br/>
            </CodeCommand>
        </article>
        <article>
            <h2 id="operators" className="title-h2"> 12 - العوامل (operators) . </h2>
            <p className="style_divv">
                <b>Python</b> تدعم مجموعة متنوعة من العوامل التي تتيح لك أداء عمليات مختلفة على المتغيرات والقيم. فيما يلي نظرة عامة على بعض العوامل الرئيسية في <b>Python</b>           
            </p>
            <h3 className="title-h3">1 - العوامل الحسابية (Arithmetic Operators).</h3>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">الجمع (+) :</b> يستخدم لجمع قيمتين.</li>
                    <li><b className="text-success">الطرح (-) :</b> يستخدم لطرح قيمة من أخرى . </li>
                    <li><b className="text-success">الضرب (*) :</b> يستخدم لضرب قيمتين .</li>
                    <li><b className="text-success">القسمة (/) :</b> يستخدم لقسمة قيمة على أخرى. يعيد نتيجة عدد عشري .</li>
                    <li><b className="text-success">قسمة الكل (//) :</b> ستخدم لقسمة قيمة على أخرى، ولكن يعيد النتيجة كعدد صحيح (بدون جزء عشري) .</li>
                    <li><b className="text-success">الباقي (%) :</b> يستخدم للحصول على باقي القسمة .</li>
                    <li><b className="text-success">التربيع (**) :</b> يستخدم لرفع رقم إلى قوة أخرى .</li>
                </ul>                
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`a = 5
b = 2

addition_result = a + b            # Result: 7
subtraction_result = a - b        # Result: 3
multiplication_result = a * b     # Result: 10
division_result = a / b              # Result: 2.5
floor_division_result = a // b    # Result: 2
modulus_result = a % b           # Result: 1
exponentiation_result = a ** b  # Result: 25`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3">2 - العوامل المقارنة (Comparison Operators).</h3>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">يساوي (==) :</b>يُستخدم للتحقق مما إذا كانت قيمتين متساويتين. إذا كانت متساويتين، فإن النتيجة هي <b>True</b>، وإلا فإنها <b>False</b>.</li>
                    <li><b className="text-success">لا يساوي (!=) :</b> يُستخدم للتحقق مما إذا كانت قيمتين غير متساويتين. إذا كانت غير متساويتين، فإن النتيجة هي True، وإلا فإنها False.</li>
                    <li><b className="text-success">أقل من ({"<"}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أقل من القيمة على اليمين. إذا كانت القيمة على اليسار أقل، فإن النتيجة هي True، وإلا فإنها False. </li>
                    <li><b className="text-success">أكبر من ({">"}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أكبر من القيمة على اليمين. إذا كانت القيمة على اليسار أكبر، فإن النتيجة هي True، وإلا فإنها False. </li>
                    <li><b className="text-success">أكبر من أو يساوي ({">="}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أقل من أو تساوي القيمة على اليمين. إذا كانت القيمة على اليسار أقل أو تساوي، فإن النتيجة هي True، وإلا فإنها False.</li>
                    <li><b className="text-success">أكبر من أو يساوي ({">="}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أكبر من أو تساوي القيمة على اليمين. إذا كانت القيمة على اليسار أكبر أو تساوي، فإن النتيجة هي True، وإلا فإنها False.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = 5
y = 10

equal_result = x == y       # Result: False
not_equal_result = x != y   # Result: True
less_than_result = x < y    # Result: True
greater_than_result = x > y # Result: False`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3">3 - العوامل المنطقية  (Logical Operators).</h3>
            <p className="style_divv">
                تعتبر العوامل المنطقية في Python وسائل لدمج أو تلاعب بقيم البيانات البوليانية (True/False). <br/>
                فيما يلي تفاصيل حول العوامل المنطقية الرئيسية :
                <ul>
                    <li><b className="text-success">(and) :</b> يُستخدم للتحقق مما إذا كانت كلتا العبارتين صحيحتين. إذا كانت العبارتين صحيحتين، فإن النتيجة هي <b>True</b>، وإلا فإنها <b>False</b></li>
                    <li><b className="text-success">(or) :</b> يُستخدم للتحقق مما إذا كانت إحدى العبارتين أو كلتاهما صحيحة. إذا كانت إحدى العبارتين (أو كلتاهما) صحيحة، فإن النتيجة هي True، وإلا فإنها False.</li>
                    <li><b className="text-success">(not) :</b> يُستخدم لعكس قيمة العبارة. إذا كانت العبارة صحيحة، فإن not سيجعلها غير صحيحة، والعكس صحيح أيضًا.</li>
                </ul>
            </p>
            <div className="mital"> متال 1: </div>
            <CodeHighlighter  code={`p = True
q = False

logical_and_result = p and q  # Result: False
logical_or_result = p or q    # Result: True
logical_not_result = not p    # Result: False`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                False<br/>
                True <br/>
                False<br/>
            </CodeCommand>
            <div className="mital"> متال 2: </div>
            <CodeHighlighter  code={`a = True
b = False
c = True

# (a and b) => False 
# (not c) => False
# False or False => False

result = (a and b) or (not c)
print(result)  # Result: False`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                False<br/>
            </CodeCommand>
            <h3 className="title-h3">4 - عوامل الإسناد (Assignment Operators).</h3>
            <p className="style_divv">
                عوامل الإسناد في <b>Python</b> تستخدم لتعيين قيمة لمتغير. فيما يلي تفاصيل حول العوامل الرئيسية للإسناد
                <ul>
                    <li><b className="text-success">الإسناد (=) :</b> يُستخدم لتعيين قيمة لمتغير. القيمة الموجودة على الجهة اليمنى تُسند إلى المتغير المحدد على الجهة اليسرى.</li>
                    <li><b className="text-success">جمع وإسناد (+=) :</b> يُستخدم لجمع قيمة إلى قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">طرح وإسناد (-=) :</b> يُستخدم لطرح قيمة من قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">ضرب وإسناد (*=) :</b> يُستخدم لضرب قيمة في قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">قسمة وإسناد (/=) :</b> يُستخدم لقسمة قيمة على قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">قسمة الكل وإسناد (//=) :</b> يُستخدم لقسمة قيمة على قيمة متغير باستخدام قسمة الكل وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">الباقي وإسناد (%=) :</b> يُستخدم للحصول على باقي القسمة وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">تربيع وإسناد (**=) :</b> يُستخدم لرفع قيمة متغير إلى قوة أخرى وتخزين النتيجة في المتغير نفسه.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = 5
print(f"x = {x}") 

x += 3  # Equivalent to x = x + 3
print(f"x += 3 = {x}") 

x -= 3  # Equivalent to x = x - 3
print(f"x -= 3 = {x}") 

x //= 2 # Equivalent to x = x // 2
print(f"x //= 2 = {x}") `} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                x = 5 <br/>
                x += 3 = 8 <br/>
                x -= 3 = 5 <br/>
                x //= 2 = 2<br/>
            </CodeCommand>
            <h3 className="title-h3">5 - عوامل الهوية  (Identity Operators).</h3>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success"> is :</b> ترجع <b>True</b> إذا كانت كلتا المتغيرات هي نفس الكائن.</li>
                    <li><b className="text-success"> is not :</b> ترجع <b>True</b> إذا كانت كلتا المتغيرات ليستا نفس الكائن.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`a = [1, 2, 3]
b = [1, 2, 3]

identity_result = a is b      # Result: False
identity_not_result = a is not b  # Result: True`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3">6 - عوامل الانتماء (Membership Operators).</h3>
            <p className="style_divv">
                <ul>
                    <li><b  className="text-success">in :</b> ترجع <b>True</b> إذا كانت القيمة موجودة في تسلسل.</li>
                    <li><b  className="text-success">not in :</b>  ترجع <b>True</b> إذا كانت القيمة غير موجودة في تسلسل.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_list = [1, 2, 3, 4]

in_result = 3 in my_list        # Result: True
not_in_result = 5 not in my_list  # Result: True`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
        </article>
        <article>
            <h2 id="lists" className="title-h2"> 13 - المصفوفة (list) . </h2>
            <p className="style_div">

            </p>
        </article>
    </section>
</main>
    )
}
/*
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={``} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
*/