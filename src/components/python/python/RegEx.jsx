import { CodeHighlighter , CodeCommand} from "../../path";

export default function RegEx(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python RegEx </h1>
        <article className="mt-5">
            <p className="style_divv">
                <b>RegEx</b>، أو التعبير العادي <b>(Regular Expression)</b> ، عبارة عن سلسلة من الأحرف التي تشكل نمط بحث.<br/>
                يمكن استخدام <b>RegEx</b> للتحقق مما إذا كانت السلسلة تحتوي على نمط البحث المحدد.
            </p>
            <h2 className="title-h2">1 - وحدة RegEx  </h2>
            <p className="style_divv">
                تحتوي لغة <b>Python</b> على حزمة مدمجة تسمى <b>re</b>، والتي يمكن استخدامها للعمل مع التعبيرات العادية.<br/>
                استيراد وحدة إعادة:
                <CodeHighlighter code={`import re`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">2 - وظائف RegEx  </h2>
            <p className="style_divv">
                توفر الوحدة <b>re</b> مجموعة من الوظائف التي تسمح لنا بالبحث عن سلسلة متطابقة:
            </p>
            <h3 className="title-h3">1 - الدالة <bdi>findall()</bdi> </h3> 
            <p className="style_divv">
                تقوم الدالة <bdi><b>findall()</b></bdi> بإرجاع قائمة تحتوي على جميع التطابقات.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`import re

txt = "Rain seeps into the train"
x = re.findall("ai", txt)
print(x)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                ['ai', 'ai']
            </CodeCommand>
            <h3 className="title-h3">2 - الدالة <bdi>search()</bdi> </h3>
            <p className="style_divv">
                تقوم الدالة <bdi><b>search()</b></bdi> بالبحث في السلسلة عن التطابق، وإرجاع كائن المطابقة إذا كان هناك تطابق.<br/><br/>
                إذا كان هناك أكثر من تطابق، فسيتم إرجاع التواجد الأول فقط للمطابقة:
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`import re

txt = "The rain in Spain"
x = re.search(r"\\s", txt)

print("The first white-space character is located in position:", x.start())`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                The first white-space character is located in position: 3
            </CodeCommand>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`import re

txt = "The rain in Maroc"
x = re.search("Portugal", txt)
y = re.search("Maroc", txt)
print(x)
print(y)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                None<br/>{"<"}re.Match object; span=(12, 17), match='Maroc'{">"}
            </CodeCommand>
            <h3 className="title-h3">3 - الدالة <bdi>split()</bdi> </h3>
            <p className="style_divv">تقوم الدالة <bdi><b>Split()</b></bdi> بإرجاع قائمة حيث تم تقسيم السلسلة في كل مباراة</p>
            <CodeHighlighter  code={`import re

txt = "The rain in Moroc"
x = re.split(r"\\s", txt)
y = re.split(r"\\s", txt,1)
z = re.split(r"\\s", txt,2)

print(x)
print(y)
print(z)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                ['The', 'rain', 'in', 'Moroc']<br/>
                ['The', 'rain in Moroc']<br/>
                ['The', 'rain', 'in Moroc']<br/>
            </CodeCommand>
            <h3 className="title-h3">4 - الدالة <bdi>sub()</bdi> </h3>
            <p className="style_divv">تستبدل الدالة <bdi><b>sub()</b></bdi> المطابقات بالنص الذي تختاره</p>
            <CodeHighlighter  code={`import re

txt = "The rain in Moroc"

x = re.sub(r"\\s", "0", txt)
y = re.sub(r"\\s", "0", txt, 2)

print(x)
print(y)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                The0rain0in0Moroc<br/>The0rain0in Moroc
            </CodeCommand>
            <h2 className="title-h2">3 - Metacharacters </h2>
            <p className="style_divv">
                <b>Metacharacters</b> هي أحرف ذات معنى خاص 
            </p>
            <table className="table table-bordered text-light">
                <thead className="bg-secondary">
                    <tr className="text-center fs-5">
                        <th>مثال</th>
                        <th>الوصف</th>
                        <th>الترميز</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td dir="ltr" className="text-center"> "[a-m]" </td>
                        <td> مجموعة من الشخصيات </td>
                        <td className="text-center"> [ ] </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "\d" </td>
                        <td> يشير إلى تسلسل خاص (يمكن استخدامه أيضًا للهروب من الأحرف الخاصة) </td>
                        <td className="text-center"> \ </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "he..o" </td>
                        <td> أي حرف (باستثناء حرف السطر الجديد) </td>
                        <td className="text-center"> . </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "^hello" </td>
                        <td> ابدا ب </td>
                        <td className="text-center"> ^ </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "planet$" </td>
                        <td> ينتهي ب </td>
                        <td className="text-center"> $ </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "he.*o" </td>
                        <td> صفر أو أكثر من الأحداث </td>
                        <td className="text-center"> * </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> 	"he.+o" </td>
                        <td> حدث واحد أو أكثر </td>
                        <td className="text-center"> + </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "he.?o" </td>
                        <td> صفر أو حدث واحد </td>
                        <td className="text-center"> ? </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> 	"he.{"{"}2{"}"}o" </td>
                        <td> بالضبط العدد المحدد من مرات الظهور </td>
                        <td className="text-center"> {"{}"} </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "falls|stays" </td>
                        <td> إما او </td>
                        <td className="text-center"> | </td>
                    </tr>
                </tbody>
            </table>
            <h2 className="title-h2">4 - Special Sequences </h2>
            <p className="style_divv">
                <b>Special Sequences</b>  هو <b>\</b> متبوعًا بأحد الأحرف الموجودة في القائمة أدناه، وله معنى خاص :
            </p>
            <table className="table table-bordered text-light">
                <thead className="bg-secondary">
                    <tr className="text-center fs-5">
                        <th>مثال</th>
                        <th>الوصف</th>
                        <th>الترميز</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td dir="ltr" className="text-center"> "\AThe" </td>
                        <td> إرجاع تطابق إذا كانت الأحرف المحددة في بداية السلسلة </td>
                        <td className="text-center"> <bdi>\A</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> r"\bain"<br/>r"ain\b" </td>
                        <td>إرجاع تطابق حيث تكون الأحرف المحددة في بداية الكلمة أو في نهايتها<br/>(يتأكد "r" في البداية من أن السلسلة يتم التعامل معها على أنها "سلسلة خام")</td>
                        <td className="text-center"> <bdi>\b</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> r"\Bain"<br/>r"ain\B" </td>
                        <td> تقوم بإرجاع تطابق حيث توجد الأحرف المحددة، ولكن ليس في بداية (أو في نهاية) الكلمة<br/>(يتأكد "r" في البداية من أن السلسلة يتم التعامل معها على أنها "سلسلة خام")</td>
                        <td className="text-center"> <bdi>\B</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "\d" </td>
                        <td> إرجاع تطابق حيث تحتوي السلسلة على أرقام (أرقام من 0 إلى 9) </td>
                        <td className="text-center"> <bdi>\d</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "\D" </td>
                        <td> تقوم بإرجاع تطابق حيث لا تحتوي السلسلة على أرقام </td>
                        <td className="text-center"> <bdi>\D</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "\s" </td>
                        <td>إرجاع تطابق حيث تحتوي السلسلة على حرف مسافة بيضاء</td>
                        <td className="text-center"> <bdi>\s</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "\S" </td>
                        <td>تقوم بإرجاع تطابق حيث لا تحتوي السلسلة على مسافة بيضاء</td>
                        <td className="text-center"> <bdi>\S</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "\w" </td>
                        <td>إرجاع تطابق حيث تحتوي السلسلة على أي أحرف كلمة (الأحرف من a إلى Z، والأرقام من 0 إلى 9، وحرف _ الشرطة السفلية)</td>
                        <td className="text-center"> <bdi>\w</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "\W" </td>
                        <td>تقوم بإرجاع تطابق حيث لا تحتوي السلسلة على أي أحرف كلمة</td>
                        <td className="text-center"> <bdi>\W</bdi> </td>
                    </tr>
                    <tr>
                        <td dir="ltr" className="text-center"> "Spain\Z" </td>
                        <td>إرجاع تطابق إذا كانت الأحرف المحددة في نهاية السلسلة</td>
                        <td className="text-center"> <bdi>\Z</bdi> </td>
                    </tr>
                </tbody>
            </table>

        </article>
        </>
    )
}