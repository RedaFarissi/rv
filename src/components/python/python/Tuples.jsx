import { CodeHighlighter , CodeCommand} from "../../path";

export default function Tuples(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Tuples</h1>   
        <article className="mt-5">
            <h2 className="title-h2">1 - ما هو Tuple </h2>
            <p className="style_divv">
                في <b>Python</b>، يعد <b>tuple</b> مجموعة مرتبة من العناصر وغير قابلة للتعديل. يعني ذلك أنه بمجرد إنشاء <b>tuple</b>، لا يمكنك تعديل عناصره - لا يمكنك إضافة عناصر جديدة أو إزالتها أو تغييرها في <b>tuple</b> بعد إنشائه.<br/><br/>
                إليك كيف يمكنك إنشاء <b>tuple</b> :
                <CodeHighlighter  code={`my_tuple = (1, 2, 3, "hello", 3.14)`} language="python"  addclassName="mt-3 mb-3" copie={true}/>   
                يمكن أن تحتوي <b>tuples</b> على عناصر من أنواع بيانات مختلفة، بما في ذلك الأرقام والسلاسل والـ <b>tuples</b> الأخرى.<br/>
                الوصول إلى العناصر في <b>tuple</b> مماثل للوصول إلى العناصر في <b>list</b> باستخدام الترقيم<br/><br/>
                عمليات التعبئة والفك تكون شائعة. التعبئة هي عند إنشاء <b>tuple</b> دون استخدام القوسين، والفك هو عند تعيين عناصر <b>tuple</b> إلى متغيرات متعددة:
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_tuple = (1, 2, 3, "hello", 3.14)

print(my_tuple[0])  # Output: 1
print(my_tuple[3])  # Output: hello
print(my_tuple[-1])  # Output: 3.14
print(my_tuple[1:4])  # Output: (2, 3, 'hello')`} language="python"  file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand> 
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                1<br/>hello<br/>3.14<br/>(2, 3, 'hello') 
            </CodeCommand>
            <h2 className="title-h2">2 - Tuple التعبئة والتفريغ (packing and unpacking)</h2>
            <p className="style_divv">
                عمليات التعبئة والفك تكون شائعة. التعبئة هي عند إنشاء <b>tuple</b> دون استخدام القوسين، والفك هو عند تعيين عناصر <b>tuple</b> إلى متغيرات متعددة
                <CodeHighlighter  code={`# Tuple packing
my_packed_tuple = 1, 2, 3

# Tuple unpacking
a, b, c = my_packed_tuple

print(a, b, c)  # Output: 1 2 3
`} language="python"  addclassName="mt-3 mb-3" copie={true}/>   
            </p>        
        </article>
    </>
    )
}