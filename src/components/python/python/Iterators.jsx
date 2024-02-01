import { CodeHighlighter , CodeCommand} from "../../path";

export default function Iterators(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Iterators</h1>        
        <article className="mt-5">
            <p className="style_divv">
                في <b>Python</b>، الطار <b>(Iterator)</b> هو كائن يمكن تكراره (التفاعل معه بواسطة الحلقة). الطوار يقومون بتنفيذ طريقتين، <bdi><b>__iter__()</b></bdi> و <bdi><b>__next__()</b></bdi>، يُشار إليهما مجتمعة باسم بروتوكول الطار <b>(Iterator Protocol)</b>. الكائنات التي تنفذ هذه الطرق تُعتبر قابلة للتكرار.
            </p>
            <div className="mital"> متال 1 : </div>
            <ul>
                <li><b>MyIterator :</b> هو كلاس ينفذ بروتوكول الطار باستخدام الطرق <b>__iter__</b> و <b>__next__</b>.</li>
                <li><b>__iter__</b>  تُستخدم لتهيئة الطار <b>(iterator)</b> وتعيد نفس الطار نفسه. هذه الطريقة تُطلق عندما تتم استدعاء <bdi><b>iter()</b></bdi> على الكائن، وهي تقوم بإعداد الطار للتكرار.</li>
                <li><b>__next__</b>  تعيد القيمة التالية في التسلسل وتثير استثناء <b>StopIteration</b> عندما لا تكون هناك قيم أخرى للإرجاع.</li>
            </ul>
            <CodeHighlighter  code={`class MyIterator:
    def __iter__(self):
        self.num = 1
        return self

    def __next__(self):
        if self.num <= 5:
            result = self.num
            self.num += 1
            return result
        else:
            raise StopIteration

# Creating an iterator object
my_iter = MyIterator()

# Iterating over the iterator
for num in my_iter:
    print(num)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                1<br/>2<br/>3<br/>4<br/>5
            </CodeCommand>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`class MyIterator:
    def __iter__(self):
        self.num = 1
        return self

    def __next__(self):
        if self.num <= 500:
            self.num *= 2
            return self.num
        else:
            raise StopIteration

# Creating an iterator object
my_iter = MyIterator()

# Iterating over the iterator
for num in my_iter:
    print(num)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                2<br/>4<br/>8<br/>16<br/>32<br/>64<br/>128<br/>256<br/>512
            </CodeCommand>
        </article>
        </>
    )
}