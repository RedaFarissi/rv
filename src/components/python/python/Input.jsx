import { CodeHighlighter , CodeCommand} from "../../path";

export default function Input(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Input</h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>Python</b>، يمكنك استخدام وظيفة <bdi><b>input()</b></bdi> لاستخلاص إدخال المستخدم من وحدة التحكم. فيما يلي مثال بسيط:
                <CodeHighlighter  code={`# Getting user input and storing it in a variable
user_input = input("Enter something: ")

# Displaying the user input
print("You entered:", user_input)`} language="python" addclassName="mt-3 mb-3" copie={true}/>
                عند تنفيذ هذا الشيفرة، سيتم عرض رسالة للمستخدم تقول "أدخل شيئاً:" وتنتظر من المستخدم إدخال قيمة. يمكن للمستخدم بعد ذلك كتابة إدخاله والضغط على <b>Enter</b>. يتم تخزين القيمة المدخلة في المتغير <b>user_input</b>، ومن ثم يقوم البرنامج بطباعة ما قام المستخدم بإدخاله.<br/><br/>
                من المهم أن نلاحظ أن وظيفة <bdi><b>input()</b></bdi> تعيد إدخال المستخدم كسلسلة نصية. إذا كنت بحاجة إلى استخدام الإدخال كقيمة رقمية، يجب عليك تحويلها باستخدام وظائف مثل <bdi><b>int()</b></bdi> أو <bdi><b>float()</b></bdi>.
            </p>
            <div className="mital"> متال : </div>
            <ul><li>في هذا المثال، يُستخدم الوظيفة <bdi><b>int()</b></bdi> لتحويل إدخال المستخدم إلى عدد صحيح. يُستخدم كتل <b>try</b> و <b>except</b> للتعامل مع حالة إدخال المستخدم لشيء لا يمكن تحويله إلى عدد صحيح. إذا كان التحويل ناجحًا، يقوم البرنامج بطباعة الرقم المدخل؛ وإلا، يتم طباعة رسالة خطأ.</li></ul>
            <CodeHighlighter  code={`# Getting a number from the user
user_input = input("Enter a number: ")

# Converting the input to an integer
try:
    number = int(user_input)
    print("You entered:", number)
except ValueError:
    print("Invalid input. Please enter a valid number.")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Enter a number: reda<br/>Invalid input. Please enter a valid number.<br/><br/>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Enter a number: 20<br/>You entered: 20
            </CodeCommand>
        </article>
    </>
    )
}