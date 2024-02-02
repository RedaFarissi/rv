import { CodeHighlighter , CodeCommand} from "../../path";

export default function StringFormatting(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python String Formatting</h1>        
        <article className="mt-5">
            <p className="style_divv">
                صياغة السلاسل في <b>Python</b> تشير إلى الطرق التي يمكن بها تلاعب السلاسل لتضمين المتغيرات أو التعابير أو سلاسل أخرى بتنسيق محدد. هناك عدة طرق لتنسيق السلاسل في <b>Python</b>، وسأغطي بعض الأساليب المستخدمة بشكل شائع:
            </p>
            <h2 className="title-h2">1 - الدمج (String Concatenation)</h2>
            <p className="style_divv">
                يمكنك دمج السلاسل باستخدام عامل الجمع <b>+</b>
                <CodeHighlighter  code={`name = "Reda Eskouni"
age = 27
sentence = "My name is " + name + " and I am " + str(age) + " years old"
print(sentence)   #Output : My name is Reda Eskouni and I am 27 years old`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">2 - تفريغ السلسلة باستخدام عامل % </h2>
            <p className="style_divv">
                تستخدم هذه الطريقة عامل <b>%</b> لاستبدال الحاويات بالقيم
                <CodeHighlighter  code={`name = "Reda Eskouni"
age = 27
sentence = "My name is %s and I am %d years old." % (name, age)
print(sentence)   #Output : My name is Reda Eskouni and I am 27 years old.`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">3 - تنسيق السلسلة باستخدام طريقة <bdi><b>format()</b></bdi> </h2>
            <p className="style_divv">
                طريقة <bdi><b>format()</b></bdi> هي طريقة حديثة ومرنة لتنسيق السلاسل.
                <CodeHighlighter  code={`name = "Reda Eskouni"
age = 27
sentence = "My name is {} and I am {} years old.".format(name, age)
print(sentence)   #Output : My name is Reda Eskouni and I am 27 years old.`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">4 - f-strings (نصوص السلسلة المنسقة)</h2>
            <p className="style_divv">
                تمت إضافتها في <b>Python 3.6</b>، حيث تعتبر <b>f-strings</b> وسيلة موجزة وقابلة للقراءة لتنسيق السلاسل.
                <CodeHighlighter  code={`name = "Reda Eskouni"
age = 27
sentence = f"My name is {name} and I am {age} years old."
print(sentence)   #Output : My name is Reda Eskouni and I am 27 years old.`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </p>
        </article>
    </>
    )
}