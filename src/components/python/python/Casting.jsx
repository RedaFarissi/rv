import { CodeHighlighter } from "../../path";
export default function Casting(){
    return(
    <>
    <h1 className="heading-style heading-style-python-color"> Python Casting</h1>
    
    <article className="mt-5">
        <p className="style_divv">  
            في <b>Python</b>، يشير مصطلح التحويل <b>(Casting)</b> إلى عملية تحويل قيمة من نوع بيانات إلى نوع بيانات آخر. توفر <b>Python</b> عدة وظائف مدمجة للتحويل، مما يتيح لك تحويل المتغيرات من نوع إلى نوع آخر. فيما يلي بعض الوظائف الشائعة للتحويل:
        </p>
        <h2 className="title-h2"> 1 - وظيفة <bdi>int()</bdi> . </h2>
        <p className="style_divv">  
            <ul><li>تحويل قيمة إلى عدد صحيح. إذا كانت القيمة عبارة عن عدد عائم، يتم قص الجزء العشري.</li></ul>
            <CodeHighlighter  code={`x = int(3.14)
print(x)  # Output: 3`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h2 className="title-h2"> 2 - وظيفة <bdi>float()</bdi> . </h2>
        <p className="style_divv">  
            <ul><li>تحويل قيمة إلى عدد عائم.</li></ul>
            <CodeHighlighter  code={`y = float("5.7")
print(y)  # Output: 5.7`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h2 className="title-h2"> 3 - وظيفة <bdi>str()</bdi> . </h2>
        <p className="style_divv">  
            <ul><li>حويل قيمة إلى سلسلة نصية</li></ul>
            <CodeHighlighter  code={`z = str(123)
print(z)  # Output: "123"`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h2 className="title-h2"> 4 - وظيفة <bdi>bool()</bdi> . </h2>
        <p className="style_divv">  
            <ul><li>تحويل قيمة إلى قيمة منطقية <b>(boolean)</b>. تقوم بتحويل القيم التي تعتبر "فارغة" أو "كاذبة" (مثل 0، سلاسل فارغة، أو None) إلى <b>False</b>. باقي القيم تتحول إلى <b>True</b>.</li></ul>
            <CodeHighlighter  code={`a = bool(0)
print(a)  # Output: False`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h2 className="title-h2"> 5 - وظائف <bdi>list()</bdi>، <bdi>tuple()</bdi>، <bdi>set()</bdi>، و <bdi>dict()</bdi> . </h2>
        <p className="style_divv">  
            <ul><li>تحويل تسلسل أو هيكل بيانات قابل للتكرار إلى قائمة، ترتيب، مجموعة، أو قاموس على التوالي.</li></ul>
            <CodeHighlighter  code={`my_list = list("hello")
print(my_list)  # Output: ['h', 'e', 'l', 'l', 'o']`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`my_tuple = tuple([1, 2, 3])
print(my_tuple)  # Output: (1, 2, 3)`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`my_set = set([1, 2, 3, 1])
print(my_set)  # Output: {1, 2, 3}`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`my_dict = dict([('a', 1), ('b', 2)])
print(my_dict)  # Output: {'a': 1, 'b': 2}`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
    </article>
    </>
    )
}