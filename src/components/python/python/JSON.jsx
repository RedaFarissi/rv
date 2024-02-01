import { CodeHighlighter , CodeCommand} from "../../path";

export default function JSON(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python JSON</h1>        
        <article className="mt-5">
            <h2 className="title-h2">1 - استيراد وحدة json</h2>
            <p className="style_divv">
                في <b>Python</b>، يُستخدم وحدة <b>json</b> لترميز وفك ترميز بيانات <b>JSON (JavaScript Object Notation)</b>. <b>JSON</b> هو تنسيق تبادل بيانات خفيف يسهل قراءته وكتابته بواسطة البشر وسهل فهمه وتحليله وإنشاءه بواسطة الآلات.<br/>
                استيراد وحدة json <br/>
                <CodeHighlighter  code={`import json`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">2 - الترميز (Serialization) </h2>
            <p className="style_divv">
                لتحويل كائن <b>Python</b> إلى سلسلة متنسقة بتنسيق <b>JSON</b>، يُستخدم الدالة <bdi><b>json.dumps()</b></bdi> (تسلسل إلى سلسلة).
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import json

# Example dictionary
data = {
    'name': "Reda Eskouni",
    'age': 28,
    'city': "Sidi Slimane"
}

# Convert dictionary to JSON string
json_string = json.dumps(data)
print(json_string)
print(data)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {"{"}"name": "Reda Eskouni", "age": 28, "city": "Sidi Slimane"{"}"}<br/>
                {"{"}'name': 'Reda Eskouni', 'age': 28, 'city': 'Sidi Slimane'{"}"}
            </CodeCommand>
            <h2 className="title-h2">3 - الفك ترميز (Deserialization) </h2>
            <p className="style_divv">
                لتحويل سلسلة متنسقة بتنسيق <b>JSON</b> إلى كائن <b>Python</b>، يُستخدم الدالة <bdi><b>json.loads()</b></bdi> (تحميل السلسلة).
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import json

# JSON string
json_string = '{"name": "John", "age": 30, "city": "New York"}'

# Convert JSON string to Python object (dictionary)
python_object = json.loads(json_string)
print(python_object)
print(python_object['age'])`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {"{"}'name': 'John', 'age': 30, 'city': 'New York'{"}"}<br/>
                30
            </CodeCommand>

        </article>
    </>
    )
}