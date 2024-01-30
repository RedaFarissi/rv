import { CodeHighlighter , CodeCommand} from "../../path";
import images from "../imagesPython"
export default function Lambda(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Lambda</h1>        
        <article className="mt-5">
            <h2 className="title-h2">1 - ما هي الدالة lambda .</h2>
            <p className="style_divv">
                في <b>Python</b>، الدالة <b>lambda</b> هي دالة صغيرة ومجهولة تعرف باستخدام الكلمة الرئيسية <b>lambda</b>. تُعرف الدوال <b>lambda</b> أيضًا باسم الدوال المجهولة أو تعابير <b>lambda</b>. يُستخدمون لإنشاء دوال صغيرة، لاستخدام واحد، دون الحاجة إلى تعريف دالة رسمية.<br/>
                بنية الدالة <b>lambda</b> الأساسية هي كما يلي:            
                <CodeHighlighter  code={`lambda arguments: expression`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                <ul>
                    <li><b className="text-success">lambda</b> تُقدم الدالة <b>lambda</b>.</li>
                    <li><b className="text-success">arguments :</b>  معاملات الإدخال .</li>
                    <li><b className="text-success">expression</b> هو التعبير الذي يحدد ما تقوم به الدالة.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`multiply = lambda x, y: x * y
result = multiply(3, 4)

print(result)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                12
            </CodeCommand>
            <h2 className="title-h2">2 - استخدام Lambda مع <bdi>map()</bdi>  .</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`numbers = [1, 2, 3, 4, 5]
squared_numbers = map(lambda x: x**2, numbers)

print(squared_numbers)
print(list(squared_numbers))`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {"<"}map object at 0x000001F4296199F0{">"}<br/> [1, 4, 9, 16, 25]
            </CodeCommand>
            <h2 className="title-h2">3 - استخدام Lambda مع <bdi>filter()</bdi>  .</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`numbers = [1, 2, 3, 4, 5]
even_numbers = filter(lambda x: x % 2 == 0, numbers)

print(even_numbers)
print(list(even_numbers))`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {"<"}filter object at 0x000001B4CA979A80{">"}<br/>[2, 4]
            </CodeCommand>
            <h2 className="title-h2">4 - استخدام Lambda مع <bdi>sorted()</bdi>  .</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`students = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 22},
    {"name": "Charlie", "age": 28}
]

sorted_students = sorted(students, key=lambda x: x['age'])

print(sorted_students)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                [{"{"}'name': 'Bob', 'age': 22{"}"}, {"{"}'name': 'Alice', 'age': 25{"}"}, {"{"}'name': 'Charlie', 'age': 28{"}"}]
            </CodeCommand>
        </article>
        </>
    )
}