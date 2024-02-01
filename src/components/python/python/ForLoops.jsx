import { CodeHighlighter , CodeCommand} from "../../path";

export default function ForLoops(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python For Loops</h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>Python</b>، يُستخدم الحلقة <b>for</b> لتكرار عبر تسلسل (مثل قائمة، أو <b>tuple</b>، أو سلسلة نصية، أو نطاق) أو كائنات قابلة للتكرار الأخرى. الصيغة الأساسية لحلقة <b>for</b> هي كما يلي:
                <CodeHighlighter  code={`for variable in iterable:
    # code block to be repeated for each item in the iterable
    # ...`} language="python"  addclassName="mt-3 mb-3" copie={true}/>
    هنا، <b>variable </b> هو بمثابة علامة تكميلية تأخذ قيمة كل عنصر في <b>iterable</b> أثناء كل دورة في الحلقة. يتم تنفيذ كتلة الشيفرة داخل الحلقة لكل عنصر في التسلسل.
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                apple<br/>
                banana<br/>
                cherry<br/>
            </CodeCommand>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`for char in "Python":
    print(char)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                P<br/>y<br/>t<br/>h<br/>o<br/>n<br/>
            </CodeCommand>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`for i in range(5):
    print(i)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                0<br/>1<br/>2<br/>3<br/>4<br/>
            </CodeCommand>
            <div className="mital"> متال 4 : </div>
            <CodeHighlighter  code={`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
    if number == 5:
        break  # exit the loop when number is 5
    if number % 2 == 0:
        continue  # skip even numbers
    print(number)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                1<br/>3
            </CodeCommand>
        </article>
    </>
    )
}