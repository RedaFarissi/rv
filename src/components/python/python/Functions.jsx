import { CodeHighlighter , CodeCommand} from "../../path";
import images from "../imagesPython"
export default function Functions(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Functions</h1>
        <article className="mt-5">
            <h2 className="title-h2"> 1 -  ما هي الدالة </h2>
            <p className="style_divv">
                في <b>Python</b>، تُعد الدوال كتلة من الشيفرة القابلة لإعادة الاستخدام التي تقوم بأداء مهمة محددة. تساعد الدوال في تجزئة الشيفرة وجعلها أكثر قراءةً وصيانةً وإعادة استخدامًا. إليك أهم جوانب إنشاء واستخدام الدوال في <b>Python</b>:
            </p>
            <h2 className="title-h2"> 2 - تعريف الدالة </h2>
            <p className="style_divv">
                لتعريف دالة، يُستخدم الكلمة الرئيسية <b>def</b> تليها اسم الدالة، زوج من القوسين ()، ونقطة وفاصلة :. يتم التبويب في جسم الدالة ويحتوي على الشيفرة التي ستُنفَّذ عند استدعاء الدالة
                <CodeHighlighter  code={`def function_name(param):
    # code to be executed 
    print(f"Hello, {param}!")`} language="python"  addclassName="mt-3 mb-3" copie={true}/>
                <ul>
                    <li><b className="text-success">function_name :</b> هو اسم الدالة.</li>
                    <li><b className="text-success">param :</b>  هو المعامل الذي تأخذه الدالة</li>
                </ul>
            </p>
            <h2 className="title-h2"> 3 - استدعاء الدالة </h2>
            <p className="style_divv">
                لاستخدام الدالة، يتم استدعاؤها باسمها تليها قوسين. إذا كانت الدالة تأخذ معاملاً، يتم تمرير القيم داخل القوسين.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def message(name):
    print(f"Hello , {name}!")

message("Reda Eskouni")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Hello , Reda Eskouni!<br/>
            </CodeCommand>
            <h2 className="title-h2"> 4 - تعليمة الإرجاع </h2>
            <p className="style_divv">
                يمكن للدالة إرجاع قيمة باستخدام تعليمة <b>return</b>. يمكن تخصيص القيمة المُرَجَّعَة إلى متغير أو استخدامها في التعابير.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def add_numbers(a, b):
    return a + b

result = add_numbers(3, 4)

print(result)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                7
            </CodeCommand>
            <h2 className="title-h2"> 5 - المعاملات الافتراضية</h2>
            <p className="style_divv">
                يمكنك توفير قيم افتراضية للمعاملات في الدالة. إذا لم يتم تمرير قيمة لمعامل ما، سيتم استخدام القيمة الافتراضية.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def message(name="User"):
    print(f"Hello, {name}!")

message() 
message("Reda Eskouni") `} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Hello, User!<br/>
                Hello, Reda Eskouni!<br/>
            </CodeCommand>
            <h2 className="title-h2"> 6 - عدد متغير من المعاملات </h2>
            <p className="style_divv">
                يمكنك استخدام الصيغة <bdi><b>*args</b></bdi> للسماح بعدد متغير من المعاملات في الدالة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def add_all(*args):
    return sum(args)

result = add_all(1, 2, 3, 4)
print(result)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                10
            </CodeCommand>
            <h2 className="title-h2"> 7 - معاملات الكلمات الرئيسية </h2>
            <p className="style_divv">
            يمكنك استخدام الصيغة <bdi><b>**kwargs</b></bdi> للسماح بعدد متغير من معاملات الكلمات الرئيسية في الدالة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Reda Eskouni", age=25 , year=2024)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                name: Reda Eskouni<br/>
                age: 25<br/>
                year: 2024<br/>
            </CodeCommand>
        </article>
        </>
    )
}