import { CodeHighlighter , CodeCommand} from "../../path";

export default function Booleans(){
    return(
        <article className="mt-5">
            <h2 id="booleans" className="title-h2"> القيمة المنطقية (Boolean) . </h2>
            <p className="style_divv">
                في <b>Python</b>، يُمثل نوع البيانات البوليان <b>(Boolean)</b> القيم الصحيحة، ولديه قيمتين ممكنتين: <b>True</b> و <b>False</b>.<br/>
                يعتبر البيان البوليان أساسيًا لاتخاذ القرارات والتحكم في تدفق البرنامج من خلال التعبيرات الشرطية. فيما يلي بعض النقاط الرئيسية حول البيانات البوليانية في <b>Python</b>
            </p>
            <h3 className="title-h3">1 - قيم البيانات البوليانية .</h3>   
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">True :</b> يُمثل حالة صحيحة أو إيجابية .</li>
                    <li><b className="text-success">False :</b> يُمثل حالة خاطئة أو سلبية .</li>
                </ul>    
            </p>    
            <h3 className="title-h3">2 - العمليات البوليانية .</h3>       
            <p className="style_divv">
                توفر <b>Python</b> العديد من العمليات البوليانية لدمج أو تلاعب قيم البيانات البوليانية، بما في ذلك:
                <ul>
                    <li><b className="text-success">and :</b> تُرجع <b>True</b> إذا كانت كلتا العمليتين صحيحتين.</li>
                    <li><b className="text-success">or :</b> تُرجع <b>True</b> إذا كانت واحدة على الأقل من العمليتين صحيحة.</li>
                    <li><b className="text-success">not :</b> تُرجع <b>True</b> إذا كانت العملية غير صحيحة، والعكس صحيح أيضًا.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = True
y = False

# Logical AND
result_and = x and y  # Result: False

# Logical OR
result_or = x or y    # Result: True

# Logical NOT
result_not = not x    # Result: False
`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3">3 - عمليات المقارنة .</h3>       
            <p className="style_divv">
                تُستخدم عمليات المقارنة لمقارنة القيم وإرجاع نتائج بيانية. تشمل عمليات المقارنة الشائعة ما يلي:
                <ul>
                    <li><b className="text-success">{'=='} :</b>  يساوي</li>
                    <li><b className="text-success">{'!='} :</b>  لا يساوي</li>
                    <li><b className="text-success">{'<'} :</b>  أقل من</li>
                    <li><b className="text-success">{'>'} :</b>  أكبر من</li>
                    <li><b className="text-success">{'<='} :</b>  أقل من أو يساوي</li>
                    <li><b className="text-success">{'>='} :</b>  أكبر من أو يساوي</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`a = 5
b = 10

# a equal b 
result_equal = a == b  # Result: False

# a not equal b
result_not_equal = a != b  # Result: True

# a less than b
result_less_than = a < b  # Result: True`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3">4 - القيم الصحيحة والقيم الكاذبة .</h3>       
            <p className="style_divv">
                بالإضافة إلى <b>True</b> و <b>False</b>، هناك العديد من القيم الأخرى في <b>Python</b> تعتبر حقيقية أو كاذبة عند استخدامها في سياقات بيانية. على سبيل المثال، 0، والتسلسلات الفارغة (مثل السلاسل الفارغة أو القوائم الفارغة)، و <b>None</b> تعتبر كاذبة.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`falsy_value = 0
truthy_value = "Hello"
none_value = None

if falsy_value:
    print("This won't be executed.")

if none_value:
    print("This won't be executed.")

if truthy_value:
    print("This will be executed.")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                This will be executed.<br/>
            </CodeCommand>
        </article>
    )
}