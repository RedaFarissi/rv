import { CodeHighlighter , CodeCommand} from "../../path";

export default function Modules(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Modules</h1>             
        <article className="mt-5">
            <h2 className="title-h2"> 1 - ما هو Modules </h2>
            <p className="style_divv">
                في لغة البرمجة بايثون، يُعتبر الوحدة <b>(Module)</b> ملفًا يحتوي على شيفرة بايثون. يمكن للشيفرة في الوحدة تعريف وظائف، فصول، ومتغيرات، ويمكن أيضاً أن تتضمن شيفرة قابلة للتنفيذ. الغرض من الوحدة هو تنظيم الشيفرة إلى وحدات قابلة لإعادة الاستخدام.
            </p>
            <h2 className="title-h2"> 2 - إنشاء وحدة (Creating a Module)</h2>
            <p className="style_divv">
                لإنشاء وحدة، يُنشئ ببساطة ملف بايثون بامتداد <bdi><b>.py</b></bdi><br/>
                على سبيل المثال، إذا قمت بإنشاء ملف يسمى <b>example_module.py</b>، فإنه يصبح وحدة يمكنك استيرادها إلى سكربتات بايثون أخرى.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def greet(name):
    print(f"Hello, {name}!")

variable_in_module = "I am in the module"`} language="python" file_name="desktop / my-project / example_module.py" addclassName="mt-3 mb-3" copie={true}/>   
            <h2 className="title-h2"> 3 -  استيراد وحدة (Importing a Module)</h2>
            <p className="style_divv">
                يمكنك استخدام تعليمة <b>import</b> لجلب وظائف وحدة إلى سكربت بايثون آخر.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def greet(name):
    print(f"Hello, {name}!")

variable_in_module = "I am in the module"`} language="python" file_name="desktop / my-project / example_module.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`import example_module

example_module.greet("Alice")
print(example_module.variable_in_module)`} language="python" file_name="desktop / my-project / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Hello, Alice!<br/>
                I am in the module
            </CodeCommand>
            <h2 className="title-h2"> 3 -  استخدام الأسماء المستعارة (Aliases)</h2>
            <p className="style_divv">
                يمكنك استخدام الأسماء المستعارة عند استيراد وحدة لتعيين اسم أقصر أو أكثر ملاءمة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def greet(name):
    print(f"Hello, {name}!")

variable_in_module = "I am in the module"`} language="python" file_name="desktop / my-project / example_module.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`import example_module as em

em.greet("Bob")
print(em.variable_in_module)`} language="python" file_name="desktop / my-project / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Hello, Bob!<br/>
                I am in the module
            </CodeCommand>
            <h2 className="title-h2"> 4 - استيراد عناصر محددة </h2>
            <p className="style_divv">
                يمكنك استيراد وظائف أو متغيرات محددة من وحدة بدلاً من استيراد الوحدة بأكملها.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`def greet(name):
    print(f"Hello, {name}!")

variable_in_module = "I am in the module"`} language="python" file_name="desktop / my-project / example_module.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`from example_module import greet

greet("Reda")`} language="python" file_name="desktop / my-project / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Hello, Reda!<br/>
            </CodeCommand>
            <h2 className="title-h2"> 5 - المكتبة القياسية (Standard Library)</h2>
            <p className="style_divv">
                يأتي بايثون مع مكتبة قياسية تشمل مجموعة واسعة من الوحدات لأغراض مختلفة، مثل math، random، datetime، وغيرها. يمكنك استخدام هذه الوحدات بواسطة استيرادها إلى شيفراتك.
            </p>
            <CodeHighlighter  code={`import math

print(math.sqrt(25))`} language="python" file_name="desktop / my-project / app.py" addclassName="mt-3 mb-3" copie={true}/>
        </article>
    </>
    )
}