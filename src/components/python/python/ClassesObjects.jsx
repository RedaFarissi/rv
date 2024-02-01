import { CodeHighlighter , CodeCommand} from "../../path";

export default function ClassesObjects(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Classes Objects</h1>
        <article className="mt-5">
            <p className="style_divv">
                الكلاس هو نموذج أو تصميم لإنشاء الأشياء. يعرِّف الكلاس مجموعة من السمات <b>(Attributes)</b> والطرق <b>(Methods)</b> التي ستكون للأشياء التي تم إنشاؤها من الكلاس <br/>
                الأشياء <b>(Objects)</b> هي نماذج فعلية للكلاس. يمكنك إنشاء عدة أشياء من نفس الكلاس، وكل واحدة منها تحمل مجموعة خاصة من السمات. 

                <CodeHighlighter  code={`class ClassName:
    # Class variable
    class_variable = "I am a class variable"

    # Constructor method (initializer)
    def __init__(self, parameter1, parameter2):
        # Instance variables
        self.parameter1 = parameter1
        self.parameter2 = parameter2

    # Instance method
    def instance_method(self):
        return f"I am an instance method. My parameters are {self.parameter1} and {self.parameter2}"

    # Another instance method
    def another_method(self):
        return "I am another instance method"

# Creating an instance of the class
obj = ClassName("value1", "value2")

# Accessing instance variables and calling instance methods
print(obj.parameter1)  #Output: value1
print(obj.instance_method()) #Output: I am an instance method. My parameters are value1 and value2
print(obj.another_method()) #Output: I am another instance method

# Accessing class variable
print(ClassName.class_variable) #Output: I am a class variable`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                <ul>
                    <li><b className="text-success">class ClassName :</b> تعرف كلاس يسمى <b>ClassName</b> .</li>
                    <li><b className="text-success">class_variable  :</b> هو متغير كلاس يتم مشاركته بين جميع الكائنات .</li>
                    <li><b className="text-success">__init__(self, parameter1, parameter2) :</b> أسلوب خاص يُسمى البناء، ويُنفذ عند إنشاء الأشياء. يقوم بتهيئة سمات الكائن و يعتبر الطريقة المُنشئة التي تقوم بتهيئة متغيرات الكائن.</li>
                    <li><b className="text-success">self :</b>  يشير إلى النسخة الكائن <b>((object))</b> التي تم إنشاؤها .</li>
                    <li><b className="text-success">instance_method(self) :</b> هو أسلوب وظيفة <b>(method)</b> مرتبط بالكلاس .</li>
                    <li><b className="text-success">obj = ClassName("value1", "value2") :</b> ينشئ كائنًا من الكلاس .</li>
                    <li><b className="text-success"><bdi>obj.parameter1, obj.instance_method()</bdi>, و <bdi>obj.another_method()</bdi> :</b> وضح كيفية الوصول إلى متغيرات الكائن واستدعاء الطرق .</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def hello(self):
        print(f"Hello Mr {self.name}")

obj = Person("Reda Eskouni",27)
obj.hello()`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Hello Mr Reda Eskouni
            </CodeCommand>
        </article>
        </>
    )
}