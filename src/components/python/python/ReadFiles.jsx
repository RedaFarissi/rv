import { CodeHighlighter , CodeCommand} from "../../path";

export default function ReadFiles(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Read Files </h1>
        <article className="mt-5">
            <p className="style_divv">
                لفتح الملف، استخدم الدالة <bdi><b>open()</b></bdi> المضمنة.<br/>
                تقوم الدالة <bdi><b>open()</b></bdi> بإرجاع كائن ملف، والذي يحتوي على طريقة <bdi><b>read()</b></bdi> لقراءة محتوى الملف .<br/>
                بشكل افتراضي، تقوم طريقة <bdi><b>read()</b></bdi> بإرجاع النص بالكامل، ولكن يمكنك أيضًا تحديد عدد الأحرف التي تريد إرجاعها
                <CodeHighlighter  code={`f = open("file_name.extension", "r")
print(f.read())`} language="python" addclassName="mt-3 mb-3" copie={true}/>   

            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`Hello! Welcome to demofile.txt

This file is for testing purposes.`} language="txt" file_name="desktop / python-folder / demofile.txt" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`f = open("demofile.txt")

print(f.read())`} language="python" file_name="desktop / python-folder / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Hello! Welcome to demofile.txt    <br/><br/>
                This file is for testing purposes
            </CodeCommand>

            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`Reda Eskouni`} language="en" file_name="desktop / python-folder / demofile.txt" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`f = open("demofile.txt")

print(f.read(4))`} language="python" file_name="desktop / python-folder / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Reda 
            </CodeCommand>

            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`{"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}`} language="json" file_name="desktop / python-folder / demofile.json" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`import json
with open("demofile.json") as f:
    json_var = json.load(f)

print(json_var['widget']['text'])`} language="python" file_name="desktop / python-folder / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {"{"}
                    'data': 'Click Here', 
                    'size': 36, 
                    'style': 'bold', 
                    'name': 'text1', 
                    'hOffset': 250, 
                    'vOffset': 100, 
                    'alignment': 'center', 
                    'onMouseUp': 'sun1.opacity = (sun1.opacity / 100) * 90;'
                {"}"}
            </CodeCommand>
        </article>
    </>
    )
}