import { CodeHighlighter , CodeCommand} from "../../path";

export default function Operators(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Operators</h1>  
        <article className="mt-5">
            <p className="style_divv">
                <b>Python</b> تدعم مجموعة متنوعة من العوامل التي تتيح لك أداء عمليات مختلفة على المتغيرات والقيم. فيما يلي نظرة عامة على بعض العوامل الرئيسية في <b>Python</b>           
            </p>
            <h2 className="title-h2">1 - العوامل الحسابية (Arithmetic Operators).</h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">الجمع (+) :</b> يستخدم لجمع قيمتين.</li>
                    <li><b className="text-success">الطرح (-) :</b> يستخدم لطرح قيمة من أخرى . </li>
                    <li><b className="text-success">الضرب (*) :</b> يستخدم لضرب قيمتين .</li>
                    <li><b className="text-success">القسمة (/) :</b> يستخدم لقسمة قيمة على أخرى. يعيد نتيجة عدد عشري .</li>
                    <li><b className="text-success">قسمة الكل (//) :</b> ستخدم لقسمة قيمة على أخرى، ولكن يعيد النتيجة كعدد صحيح (بدون جزء عشري) .</li>
                    <li><b className="text-success">الباقي (%) :</b> يستخدم للحصول على باقي القسمة .</li>
                    <li><b className="text-success">التربيع (**) :</b> يستخدم لرفع رقم إلى قوة أخرى .</li>
                </ul>                
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`a = 5
b = 2

addition_result = a + b            # Result: 7
subtraction_result = a - b        # Result: 3
multiplication_result = a * b     # Result: 10
division_result = a / b              # Result: 2.5
floor_division_result = a // b    # Result: 2
modulus_result = a % b           # Result: 1
exponentiation_result = a ** b  # Result: 25`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h2 className="title-h2">2 - العوامل المقارنة (Comparison Operators).</h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success">يساوي (==) :</b>يُستخدم للتحقق مما إذا كانت قيمتين متساويتين. إذا كانت متساويتين، فإن النتيجة هي <b>True</b>، وإلا فإنها <b>False</b>.</li>
                    <li><b className="text-success">لا يساوي (!=) :</b> يُستخدم للتحقق مما إذا كانت قيمتين غير متساويتين. إذا كانت غير متساويتين، فإن النتيجة هي True، وإلا فإنها False.</li>
                    <li><b className="text-success">أقل من ({"<"}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أقل من القيمة على اليمين. إذا كانت القيمة على اليسار أقل، فإن النتيجة هي True، وإلا فإنها False. </li>
                    <li><b className="text-success">أكبر من ({">"}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أكبر من القيمة على اليمين. إذا كانت القيمة على اليسار أكبر، فإن النتيجة هي True، وإلا فإنها False. </li>
                    <li><b className="text-success">أكبر من أو يساوي ({">="}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أقل من أو تساوي القيمة على اليمين. إذا كانت القيمة على اليسار أقل أو تساوي، فإن النتيجة هي True، وإلا فإنها False.</li>
                    <li><b className="text-success">أكبر من أو يساوي ({">="}) :</b> يُستخدم للتحقق مما إذا كانت القيمة على اليسار أكبر من أو تساوي القيمة على اليمين. إذا كانت القيمة على اليسار أكبر أو تساوي، فإن النتيجة هي True، وإلا فإنها False.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = 5
y = 10

equal_result = x == y       # Result: False
not_equal_result = x != y   # Result: True
less_than_result = x < y    # Result: True
greater_than_result = x > y # Result: False`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h2 className="title-h2">3 - العوامل المنطقية  (Logical Operators).</h2>
            <p className="style_divv">
                تعتبر العوامل المنطقية في Python وسائل لدمج أو تلاعب بقيم البيانات البوليانية (True/False). <br/>
                فيما يلي تفاصيل حول العوامل المنطقية الرئيسية :
                <ul>
                    <li><b className="text-success">(and) :</b> يُستخدم للتحقق مما إذا كانت كلتا العبارتين صحيحتين. إذا كانت العبارتين صحيحتين، فإن النتيجة هي <b>True</b>، وإلا فإنها <b>False</b></li>
                    <li><b className="text-success">(or) :</b> يُستخدم للتحقق مما إذا كانت إحدى العبارتين أو كلتاهما صحيحة. إذا كانت إحدى العبارتين (أو كلتاهما) صحيحة، فإن النتيجة هي True، وإلا فإنها False.</li>
                    <li><b className="text-success">(not) :</b> يُستخدم لعكس قيمة العبارة. إذا كانت العبارة صحيحة، فإن not سيجعلها غير صحيحة، والعكس صحيح أيضًا.</li>
                </ul>
            </p>
            <div className="mital"> متال 1: </div>
            <CodeHighlighter  code={`p = True
q = False

logical_and_result = p and q  # Result: False
logical_or_result = p or q    # Result: True
logical_not_result = not p    # Result: False`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                False<br/>
                True <br/>
                False<br/>
            </CodeCommand>
            <div className="mital"> متال 2: </div>
            <CodeHighlighter  code={`a = True
b = False
c = True

# (a and b) => False 
# (not c) => False
# False or False => False

result = (a and b) or (not c)
print(result)  # Result: False`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                False<br/>
            </CodeCommand>
            <h2 className="title-h2">4 - عوامل الإسناد (Assignment Operators).</h2>
            <p className="style_divv">
                عوامل الإسناد في <b>Python</b> تستخدم لتعيين قيمة لمتغير. فيما يلي تفاصيل حول العوامل الرئيسية للإسناد
                <ul>
                    <li><b className="text-success">الإسناد (=) :</b> يُستخدم لتعيين قيمة لمتغير. القيمة الموجودة على الجهة اليمنى تُسند إلى المتغير المحدد على الجهة اليسرى.</li>
                    <li><b className="text-success">جمع وإسناد (+=) :</b> يُستخدم لجمع قيمة إلى قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">طرح وإسناد (-=) :</b> يُستخدم لطرح قيمة من قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">ضرب وإسناد (*=) :</b> يُستخدم لضرب قيمة في قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">قسمة وإسناد (/=) :</b> يُستخدم لقسمة قيمة على قيمة متغير وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">قسمة الكل وإسناد (//=) :</b> يُستخدم لقسمة قيمة على قيمة متغير باستخدام قسمة الكل وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">الباقي وإسناد (%=) :</b> يُستخدم للحصول على باقي القسمة وتخزين النتيجة في المتغير نفسه.</li>
                    <li><b className="text-success">تربيع وإسناد (**=) :</b> يُستخدم لرفع قيمة متغير إلى قوة أخرى وتخزين النتيجة في المتغير نفسه.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`x = 5
print(f"x = {x}") 

x += 3  # Equivalent to x = x + 3
print(f"x += 3 = {x}") 

x -= 3  # Equivalent to x = x - 3
print(f"x -= 3 = {x}") 

x //= 2 # Equivalent to x = x // 2
print(f"x //= 2 = {x}") `} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                x = 5 <br/>
                x += 3 = 8 <br/>
                x -= 3 = 5 <br/>
                x //= 2 = 2<br/>
            </CodeCommand>
            <h2 className="title-h2">5 - عوامل الهوية  (Identity Operators).</h2>
            <p className="style_divv">
                <ul>
                    <li><b className="text-success"> is :</b> ترجع <b>True</b> إذا كانت كلتا المتغيرات هي نفس الكائن.</li>
                    <li><b className="text-success"> is not :</b> ترجع <b>True</b> إذا كانت كلتا المتغيرات ليستا نفس الكائن.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`a = [1, 2, 3]
b = [1, 2, 3]

identity_result = a is b      # Result: False
identity_not_result = a is not b  # Result: True`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h2 className="title-h2">6 - عوامل الانتماء (Membership Operators).</h2>
            <p className="style_divv">
                <ul>
                    <li><b  className="text-success">in :</b> ترجع <b>True</b> إذا كانت القيمة موجودة في تسلسل.</li>
                    <li><b  className="text-success">not in :</b>  ترجع <b>True</b> إذا كانت القيمة غير موجودة في تسلسل.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_list = [1, 2, 3, 4]

in_result = 3 in my_list        # Result: True
not_in_result = 5 not in my_list  # Result: True`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
        </article>
    </>
    )
}