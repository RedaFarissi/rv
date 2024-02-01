import { CodeHighlighter , CodeCommand} from "../../path";

export default function Inheritance(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Inheritance</h1>
        <article className="mt-5">
            <p className="style_divv">
                الوراثة هي مفهوم أساسي في البرمجة الشيئية <b>(OOP)</b> يسمح للكلاس بأن يرث السمات والأساليب من كلاس آخر. يُطلق على الكلاس الذي يتم الوراثة منه اسم الكلاس الأساسي أو الكلاس الأب، والكلاس الذي يرث يُسمى الكلاس المشتق أو الكلاس الابن. في <b>Python</b>، يمكنك تحقيق الوراثة باستخدام عبارة <b>class</b>.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} barks")

class Cat(Animal):
    def meow(self):
        print(f"{self.name} meows")

# Creating instances
dog = Dog("Buddy")
cat = Cat("Whiskers")

# Using inherited methods
dog.speak()  # Output: Buddy makes a sound
cat.speak()  # Output: Whiskers makes a sound

# Using subclass-specific methods
dog.bark()   # Output: Buddy barks
cat.meow()   # Output: Whiskers meows`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                Buddy makes a sound<br/>
                Whiskers makes a sound<br/>
                Buddy barks<br/>
                Whiskers meows<br/>
            </CodeCommand>
        </article>
        </>
    )
}