import { CodeHighlighter , CodeCommand} from "../../path";

export default function WhileLoops(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python While Loops</h1> 
        <article className="mt-5">
            <h2 className="title-h2">1 - الحلقة الشرطية (while)</h2>
            <p className="style_divv">
                في <b>Python</b>، يسمح لك الحلقة <b>while</b> بتنفيذ كتلة من الشيفرة بشكل متكرر طالما الشرط المحدد صحيح. صيغة حلقة <b>while</b> هي كما يلي:
                <CodeHighlighter  code={`while condition:
    # code to be executed while the condition is true`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <div className="mital"> متال : </div>
            <ul><li> فيما يلي مثال بسيط يعد من 1 إلى 5 باستخدام حلقة <b>while</b>:</li></ul>
            <CodeHighlighter  code={`counter = 1
    
    while counter <= 5:
        print(counter)
        counter += 1`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                1<br/>2<br/>3<br/>4<br/>5
            </CodeCommand>
            <ul><li>في هذا المثال، تستمر حلقة <b>while</b> في التنفيذ طالما الشرط <b>counter {"<"}= 5</b> صحيح. يتم زيادة قيمة المتغير <b>counter</b> داخل الحلقة، مما يضمن أن تنتهي الحلقة في نهاية المطاف عندما يصبح <b>counter</b> أكبر من 5.</li></ul>
            
            <h2 className="title-h2">2 - الخروج من الحلقة </h2>
            <p className="style_divv">
                يمكنك أيضًا استخدام تعليمة <b>break</b> للخروج من حلقة <b>while</b> مبكرًا إذا تم تحقيق شرط معين:
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`counter = 1

while counter <= 5:
    print(counter)
    if counter == 3:
        break
    counter += 1`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                1<br/>2<br/>3<br/>
            </CodeCommand>

            <h2 className="title-h2">3 - استخدام  continue لتجاوز بقية الشيفرة داخل الحلقة والانتقال إلى التكرار التالي </h2>
            <p className="style_divv">
                 عندما يكون <b>counter</b> يساوي 3، يتم مرور تعليمة <b>continue</b>، وتنتقل الحلقة إلى التكرار التالي دون تنفيذ تعليمة <b>print</b> في تلك التكرار الخاصة
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`counter = 0

while counter < 5:
    counter += 1
    if counter == 3:
        continue
    print(counter)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                1<br/>2<br/>4<br/>5<br/>
            </CodeCommand>
        </article>
    </>
    )
}