import { CodeHighlighter , CodeCommand} from "../../path";

export default function Sets(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python set</h1>
        <article className="mt-5">
            <p className="style_divv">
                في <b>Python</b>، يعد مجموعة <b>(Set)</b> مجموعة غير مرتبة من العناصر الفريدة. يتم تعريفها عن طريق وضع قائمة من العناصر المفصولة بفواصل داخل الأقواس الزوجية {"{}"}. لا تسمح المجموعات بتكرار العناصر، وعناصرها لا تأتي بترتيب. إليك كيفية إنشاء مجموعة:
                <CodeHighlighter  code={`my_set = {1, 2, 3, 4, 5}`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">1 - إنشاء مجموعة من قائمة list باستخدام بناء <bdi>set()</bdi>:</h2>
            <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
my_set_from_list = set(my_list)

print(my_set_from_list)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand> 
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}1, 2, 3, 4, 5{"}"}
            </CodeCommand>
            <h2 className="title-h2">2 -  التخلص من العناصر المكررة .</h2>
            <ul><li>تقوم المجموعات تلقائيًا بالتخلص من العناصر المكررة</li></ul>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_set_with_duplicates = {1, 2, 2, 3, 3, 4, 5, 5}
print(my_set_with_duplicates)  # Output: {1, 2, 3, 4, 5}`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand> 
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}1, 2, 3, 4, 5{"}"}
            </CodeCommand>
            <h2 className="title-h2">3 - جمع بين عناصر مجموعتين مع إزالة النسخ المكررة .</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`set1 = {1, 2, 3}
set2 = {3, 4, 5}

union_set = set1 | set2     #or union_set = set1.union(set2)
print(union_set)  # Output: {1, 2, 3, 4, 5}`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand> 
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}1, 2, 3, 4, 5{"}"}
            </CodeCommand>
            <h2 className="title-h2">4 - العناصر المشتركة بين مجموعتين .</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`set1 = {1, 2, 3}
set2 = {3, 4, 5}

intersection_set = set1 & set2
# or intersection_set = set1.intersection(set2)
print(intersection_set)  # Output: {3}`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand> 
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}3{"}"}
            </CodeCommand>
            <h2 className="title-h2">5 - العناصر التي تكون في إحدى المجموعتين وليست في كليهما .</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`set1 = {1, 2, 3}
set2 = {3, 4, 5}

symmetric_difference_set = set1 ^ set2
# أو symmetric_difference_set = set1.symmetric_difference(set2)
print(symmetric_difference_set)  # Output: {1, 2, 4, 5}`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand> 
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}1, 2, 4, 5{"}"}
            </CodeCommand>
            <h2 className="title-h2">6 - تعديل المجموعات  .</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_set = {1, 2, 3}

my_set.add(6)  # Add a single element
print(my_set)

my_set.update({7, 8, 9})  # Add multiple elements
print(my_set)

my_set.remove(3)  # Remove a specific element
print(my_set)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand> 
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}1, 2, 3, 6{"}"}<br/>
                {"{"}1, 2, 3, 6, 7, 8, 9{"}"}<br/>
                {"{"}1, 2, 6, 7, 8, 9{"}"}<br/>
            </CodeCommand>
            
        </article>
    </>
    )
}