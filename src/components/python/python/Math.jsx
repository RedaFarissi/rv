import { CodeHighlighter , CodeCommand} from "../../path";

export default function Math(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Math</h1>        
        <article className="mt-5">
            <h2 className="title-h2">1. استيراد وحدة math</h2>
            <p className="style_divv">
                في <b>Python</b>، توفر وحدة <b>math</b> مجموعة من الدوال الرياضية لأداء مختلف العمليات الرياضية. إليك نظرة عامة على بعض الدوال الشائعة المستخدمة في وحدة <b>math</b>
                <CodeHighlighter  code={`import math`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">2. الدوال الرياضية الأساسية</h2>
            <h3 className="title-h3">1 - جذر تربيعي (Square)</h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import math

num = 25
sqrt_result = math.sqrt(num)
print(sqrt_result)  # Output: 5.0`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                5.0
            </CodeCommand>
            <h3 className="title-h3">2 - الدالة الأسية (Exponential) </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import math

x = 2
exp_result = math.exp(x)
print(exp_result) # Output: e^2 ≈ 7.389`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                7.38905609893065
            </CodeCommand>
            <h3 className="title-h3">3 - الدوال اللوغاريتمية (Logarithmic) </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import math
x = 2

# Natural logarithm
log_result = math.log(x)
print(log_result)  # Output: ln(2) ≈ 0.693

# Base 10 logarithm
log10_result = math.log10(x)
print(log10_result)  # Output: log10(2) ≈ 0.301`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                0.6931471805599453<br/>0.3010299956639812
            </CodeCommand>
            <h3 className="title-h3">4 - الدوال الزائدية (Trigonometric) </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import math

angle_in_radians = math.radians(45)
sin_result = math.sin(angle_in_radians)
cos_result = math.cos(angle_in_radians)
tan_result = math.tan(angle_in_radians)

print(sin_result, cos_result, tan_result)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                0.7071067811865476&nbsp; 0.7071067811865476&nbsp; 0.9999999999999999
            </CodeCommand>
            <h3 className="title-h3">5 - القيمة المطلقة (Absolute Value) </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import math

num = -10
abs_result = math.fabs(num)
print(abs_result)  # Output: 10.0`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                10.0
            </CodeCommand>
            <h3 className="title-h3">6 - الثوابت </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import math

pi_value = math.pi
e_value = math.e

print(pi_value, e_value)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                3.141592653589793&nbsp; 2.718281828459045
            </CodeCommand>
            <h3 className="title-h3">7 - التقريب إلى الأعلى والأسفل (Ceiling and Floor) </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import math

float_num = 4.2
ceil_result = math.ceil(float_num)
floor_result = math.floor(float_num)

print(ceil_result, floor_result)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                5&nbsp; 4
            </CodeCommand>
        </article>
    </>
    )
}