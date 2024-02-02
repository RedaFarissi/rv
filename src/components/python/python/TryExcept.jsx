import { CodeHighlighter , CodeCommand} from "../../path";

export default function TryExcept(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Try Except </h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>Python</b>، تُستخدم كتل <b>try</b> و <b>except</b> للتعامل مع الاستثناءات. يتيح لك التعامل مع الاستثناءات بشكل لائق للتعامل مع الأخطاء التي قد تحدث أثناء تنفيذ الشيفرة.<br/>
                فيما يلي هي هيكلية أساسية لكتلة <b>try</b> و <b>except</b>:
                <CodeHighlighter  code={`try:
    # Code that may raise an exception
except ExceptionType as e:
    # Code to handle the exception
    # This block is executed only if an exception of type ExceptionType is raised in the try block
    # You can access the exception object using the variable 'e'
else:
    # Code to be executed if no exception occurs in the try block
    # Optional block
finally:
    # Code that will be executed no matter what, whether an exception occurred or not
    # Optional block`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                <ul>
                    <li>تحتوي كتلة <b>try</b> على الشيفرة التي قد تثير استثناء.</li>
                    <li>تُنفذ كتلة <b>except</b> إذا حدث استثناء في كتلة <b>try</b>. يمكنك تحديد نوع الاستثناء الذي سيتم التقاطه (على سبيل المثال، <b>except ValueError</b>) أو استخدام كتلة <b>except</b> أكثر عمومية لالتقاط أي استثناء.</li>
                    <li>تُنفذ كتلة <b>else</b> إذا لم تحدث أي استثناء في كتلة <b>try</b>. إنها اختيارية.</li>
                    <li>تحتوي كتلة <b>finally</b> على الشيفرة التي ستتم تنفيذها بغض النظر عن ما إذا كان حدث استثناء أم لا. إنها أيضًا اختيارية.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <ul><li>في هذا المثال، إذا قام المستخدم بإدخال قيمة غير رقمية، سيتم التقاط <b>ValueError</b>. إذا أدخل المستخدم الصفر، سيتم التقاط <b>ZeroDivisionError</b>. ستتم تنفيذ كتلة <b>else</b> إذا لم يحدث أي استثناء، وستتم تنفيذ كتلة <b>finally</b> دائمًا.</li></ul>
            <CodeHighlighter  code={`try:
    x = int(input("Enter a number: "))
    result = 10 / x
    print("Result:", result)
except ValueError:
    print("Invalid input. Please enter a valid number.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
else:
    print("No exceptions occurred.")
finally:
    print("This will be executed no matter what.")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
        <CodeCommand copy={false}>
            PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
            Enter a number: 200<br/>
            Result: 0.05<br/>
            No exceptions occurred.<br/>
            This will be executed no matter what.<br/><br/><br/>
            PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
            Enter a number: "200"<br/>
            Invalid input. Please enter a valid number.<br/>
            This will be executed no matter what.<br/>
        </CodeCommand>
        </article>
    </>
    )
}