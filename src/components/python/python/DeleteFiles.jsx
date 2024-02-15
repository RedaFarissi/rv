import { CodeHighlighter } from "../../path";

export default function DeleteFiles(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Delete Files</h1>
        <article className="mt-5">
            <h2 className="title-h2">1 - حذف ملف </h2>
            <p className="style_divv">
                لحذف ملف، يجب عليك استيراد وحدة نظام التشغيل وتشغيل وظيفة <bdi><b>os.remove()</b></bdi> الخاصة بها 
                <CodeHighlighter  code={`import os
os.remove("demofile.txt")`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">2 - تحقق من وجود الملف </h2>
            <p className="style_divv">
                لتجنب الحصول على خطأ، قد ترغب في التحقق من وجود الملف قبل محاولة حذفه
                <CodeHighlighter  code={`import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist")`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">3 - احذف المجلد </h2>
            <p className="style_divv">
                لحذف مجلد بأكمله، استخدم الأسلوب <bdi><b>os.rmdir()</b></bdi>
                <CodeHighlighter  code={`import os
os.rmdir("myfolder")`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
        </article>
        </>
    )
}