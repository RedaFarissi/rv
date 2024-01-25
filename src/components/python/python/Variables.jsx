import { CodeHighlighter } from "../../path";
export default function Variables(){
    return(
        <article className="mt-5">
            <h2 id="variables" className="title-h2">  المتغيرات . </h2>
            <h3 className="title-h3"> 1 - تسمية المتغير . </h3>
            <p className="style_divv">
                <ul>
                    <li>يمكن أن تحتوي أسماء المتغيرات في <b>Python</b> على الأحرف والأرقام وشرطة السفل.</li>
                    <li>لا يمكن أن تبدأ أسماء المتغيرات برقم.</li>
                    <li>أسماء المتغيرات حساسة لحالة الأحرف (مثل <b>myVar</b> و <b>myvar</b> هما متغيران مختلفان).</li>
                </ul>
            </p>
            <h3 className="title-h3"> 2 - تخصيص المتغير . </h3>
            <p className="style_divv">
                <ul>
                    <li>يمكنك تخصيص قيمة لمتغير باستخدام علامة اليسار <b>(=)</b> .</li>
                    <li>يتم تحديد نوع البيانات للمتغير بشكل دينامي استنادًا إلى القيمة المخصصة.</li>
                </ul>
            </p>
            <h3 className="title-h3"> 3 - أنواع البيانات . </h3>
            <p className="style_divv">
                <ul>
                    <li>تدعم <b>Python</b> مجموعة متنوعة من أنواع البيانات، بما في ذلك الأعداد الصحيحة، الأعداد العائمة، السلاسل النصية، القيم البولية، القوائم، الأزواج، القواميس، وغيرها.</li>
                    <li>لا يلزم عليك تحديد نوع البيانات للمتغير بشكل صريح؛ يحسب <b>Python</b> نوع البيانات استنادًا إلى القيمة المخصصة.</li>
                </ul>
            </p>
            <CodeHighlighter  code={`# Examples of variable assignments with different data types
age = 25            # Integer
height = 1.75       # Float
name = "John"       # String
is_student = True   # Boolean
my_list = [1, 2, 3]  # List`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3"> 4 - إعادة تخصيص المتغير . </h3>
            <p className="style_divv"><ul><li> يمكنك إعادة تخصيص متغير بقيمة جديدة، حتى مع نوع بيانات مختلف . </li></ul></p>
            <CodeHighlighter  code={`x = 5
x = "Hello"`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3"> 5 - طباعة المتغيرات . </h3>
            <p className="style_divv"><ul><li>يمكنك طباعة قيمة المتغير باستخدام وظيفة <b>print</b>.</li></ul></p>
            <CodeHighlighter  code={`my_variable = "Hello Word"
print(my_variable)`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <h3 className="title-h3"> 6 - الطباعة الدينامية . </h3>
            <p className="style_divv"><ul><li><b>Python</b> هي لغة ذات طبيعة دينامية، وهذا يعني أنه لا يلزم عليك تحديد نوع البيانات بشكل صريح.</li></ul></p>
            <CodeHighlighter  code={`x = 10  # Integer
x = "Hello"  # String`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            <h3 className="title-h3"> 7 - الثوابت . </h3>
            <p className="style_divv">في حين أن <b>Python</b> لا تحتوي على ثوابت بالمعنى الدقيق، إلا أنه من المألوف استخدام أسماء بأحرف كبيرة للمتغيرات التي يجب التعامل معها كثوابت.</p>
            <CodeHighlighter  code={`PI = 3.14`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
        </article>
    )
}