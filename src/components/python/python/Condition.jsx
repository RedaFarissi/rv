import { CodeHighlighter , CodeCommand} from "../../path";

export default function Condition(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Condition </h1>
        <article className="mt-5">
            <h2 className="title-h2">1 - الشروط (if...else)</h2>
            <p className="style_divv">
                في <b>Python</b>، تُستخدم التعليمة <b>if...else</b> للتحكم في تدفق البرنامج بناءً على شرط محدد. صيغة التعليمة <b>if...else</b> كالتالي:
                <CodeHighlighter  code={`if condition:
    # code to be executed if the condition is True
else:
    # code to be executed if the condition is False`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = 10

if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                x is greater than 5
            </CodeCommand>
            <h2 className="title-h2"> 2 - شروط متعددة باستخدام elif (اختصارًا لـ "else if") </h2>
            <p className="style_divv">
                يتم فحص الشروط بتسلسل. إذا كان الشرط الأول صحيحًا، سيتم تنفيذ الشيفرة داخل الكتلة <b>if</b> المقابلة. إذا كان الشرط الأول خاطئًا، يقوم البرنامج بفحص الشرط التالي المحدد في كتلة <b>elif</b>. إذا لم يكن أي من الشروط صحيحًا، سيتم تنفيذ الشيفرة داخل الكتلة <b>else</b>.
                <CodeHighlighter  code={`if condition:
    #code to be executed if the condition is True
elif condition:
    #code to be executed if the condition is True
else:
    #code to be executed if the condition is False`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = 10

if x > 10:
    print("x is greater than 10")
elif x == 10:
    print("x is equal to 10")
else:
    print("x is less than 10")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                x is equal to 10
            </CodeCommand>
            <h2 className="title-h2">3 - دمج شروط متعددة بطرق (and و or و not)</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = 5
y = 12

if x > 0 and y > 10:
    print("Both conditions are true")
else:
    print("At least one condition is false")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Both conditions are true
            </CodeCommand>
        </article>
    </>
    )
}