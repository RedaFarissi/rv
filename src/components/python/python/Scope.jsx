import { CodeHighlighter , CodeCommand} from "../../path";

export default function Scope(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Scope</h1>
        <article className="mt-5">
            <h2 className="title-h2">1 -  ما هو النطاق (Scope) .</h2>
            <p className="style_divv">
                باللغة البايثون، يشير مصطلح النطاق إلى المنطقة في البرنامج حيث يمكن الوصول إلى متغير أو اسم. يحدد النطاق مكان البرنامج حيث يمكن استخدام متغير معين، ويساعد في تجنب تعارض الأسماء ويسمح بالبرمجة النمطية. تحتوي اللغة البايثون على نوعين رئيسيين من النطاق
            </p>
            <h2 className="title-h2">2 - النطاق المحلي (Local Scope).</h2>
            <p className="style_divv">
                يتم إنشاء نطاق محلي عند استدعاء الدالة.<br/>
                عادةً ما تكون المتغيرات المحددة داخل الدالة محلية لتلك الدالة ويمكن الوصول إليها فقط داخلها.<br/>
                بمجرد اكتمال تنفيذ الدالة، يتم تدمير المتغيرات المحلية.<br/>
                <CodeHighlighter code={`def my_function():
    # This is the local scope of the function

    # Define a local variable
    local_variable = "I am local"

    # Access and use the local variable
    print(local_variable)

# Call the function
my_function()

# print(local_variable)  # Uncommenting this line will raise an error`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                <ul>
                    <li>المتغير المحلي يمكن الوصول إليه واستخدامه داخل الدالة.</li>
                    <li>إذا حاولت الوصول إلى المتغير المحلي خارج الدالة (كما هو موضح في السطر المعلق)، سيؤدي ذلك إلى حدوث خطأ لأن المتغير غير محدد في هذا النطاق.</li>
                </ul>
            </p>
            <h2 className="title-h2">3 -  النطاق العام (Global Scope).</h2>
            <p className="style_divv">
                يشير النطاق العام إلى النطاق الخارجي الأقصى لنص أو وحدة.<br/>
                عادةً ما تعتبر المتغيرات المحددة خارج أي دالة أو كتلة كتلة عامة.<br/>
                يمكن الوصول إلى المتغيرات العامة من أي مكان في الشيفرة.<br/>
                <CodeHighlighter code={`# Define a global variable
global_variable = "I am global"

# Access and use the global variable
print(global_variable)

def my_function():
    # Global variables can also be accessed within a function
    print(global_variable)

# Call the function
my_function()

# Modify the global variable within a function
def modify_global_variable():
    global global_variable
    global_variable = "Modified global variable"

# Call the function to modify the global variable
modify_global_variable()

# Print the modified global variable
print(global_variable)
`} language="python" addclassName="mt-3 mb-3" copie={true}/>
                <ul>
                    <li><b className="text-success">global_variable :</b> هو متغير عام يتم تعريفه في النطاق الخارجي الأقصى للنص أو الوحدة. يمكن الوصول إلى المتغير العام واستخدامه في جميع أنحاء الشيفرة.</li>
                    <li><b className="text-success">my_function :</b> يمكن للدالة <b>my_function</b> الوصول إلى المتغير العام</li>
                    <li><b className="text-success">الدالة modify_global_variable :</b> تستخدم الدالة كلمة <b>global</b> لتعديل قيمة المتغير العام.</li>
                </ul>
                يجب مراعاة أن تعديل المتغيرات العامة داخل الدوال باستخدام كلمة <b>global</b> يجب أن يتم بحذر، حيث يمكن أن يؤدي ذلك إلى سلوك غير متوقع ويجعل الشيفرة أكثر تعقيدًا. عمومًا يُعتبر من الجيد تجنب الاعتماد الكثير على المتغيرات العامة وبدلاً من ذلك استخدام معاملات الدوال وقيم الإرجاع لنقل المعلومات بين الدوال.
            </p>

        </article>
    </>
    )
}