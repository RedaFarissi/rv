import { useRef, useState } from "react";
import { CodeHighlighter , Result} from "../../../path";

export default function FormHandling(props){
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const [submit, setSubmit] = useState(false);
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    function changeInputName() {
      setInputName(inputNameRef.current.value);
      setSubmit(false);
    }
    function changeInputEmail() {
      setInputEmail(inputEmailRef.current.value);
      setSubmit(false);
    }

    return(
    <>
        <h1 className="heading-style"> PHP Form Handling </h1>
        <article className="mt-5">
            <p className="style_divv">
                يعتبر <b>form</b> في <b>PHP</b> جانبًا أساسيًا لإنشاء تطبيقات ويب تفاعلية. حيث يسمح لك بجمع إدخال المستخدم من خلال الاستمارات ومعالجته على جانب الخادم باستخدام نصوص <b>PHP</b>. إليك تفصيل للمفاهيم الأساسية:<br/><br/>
                <b className="text-danger">إنشاء الاستمارة:</b>
                <ol>
                    <li className="mb-3"><b className="text-success">استمارة <b>HTML</b> :</b> تستخدم <b>HTML</b> لتحديد بنية الاستمارة ، بما في ذلك حقول الإدخال والأزرار والعناصر الأخرى. تحدد سمات مثل <b>name</b> و <b>type</b> لكل عنصر لتحديد غرضه وجمع إدخال المستخدم . </li>
                    <li className="mb-3"><b className="text-success">إجراء الاستمارة :</b> تحدد سمة <b>action</b> الخاصة بعلامة <b>form</b> البرنامج النصي <b>PHP</b> الذي سيتعامل مع إرسال الاستمارة. سيقوم هذا البرنامج النصي بمعالجة البيانات المجمعة.</li>
                    <li className="mb-3"><b className="text-success">طريقة الإرسال:</b>
                         تختار بين طريقتين لإرسال بيانات الاستمارة :
                        <ul>
                            <li><b>GET:</b>  يتم إلحاق البيانات إلى عنوان <b>URL</b> كأزواج قيمة المفتاح (مرئية في شريط العنوان). استخدم <b>GET</b> لاسترداد المعلومات ، مثل استعلامات البحث.</li>
                            <li><b>POST:</b> يتم إرسال البيانات ككيان منفصل ، غير مرئي في عنوان <b>URL</b>. استخدم <b>POST</b> للمعلومات الحساسة مثل بيانات تسجيل الدخول أو عمليات إرسال الاستمارات التي تعدل البيانات.</li>
                        </ul>
                    </li>
                </ol>
                <b className="text-danger">معالجة الاستمارة في PHP:</b>
                <ol>
                    <li> 
                        <b className="text-success">Superglobals:</b> يوفر PHP اثنين من superglobals للوصول إلى بيانات الاستمارة:
                        <ul>
                            <li><b>$_GET:</b> تستخدم للبيانات المرسلة عبر طريقة GET.</li>
                            <li><b>$_POST:</b> تستخدم للبيانات المرسلة عبر طريقة POST.</li>
                        </ul>
                    </li>                        
                    <li><b className="text-success">الوصول إلى بيانات الاستمارة :</b> يمكنك الوصول إلى قيم حقول الاستمارة الفردية باستخدام الأسماء المقابلة لها ضمن صفوف superglobal. على سبيل المثال ، $name = $_POST['name']; يسترد القيمة من حقل الاستمارة المسمى "name".</li>
                    <li>
                        <b className="text-success">معالجة الاستمارة :</b> بمجرد حصولك على البيانات ، يمكنك تنفيذ إجراءات مختلفة مثل:
                        <ul>
                            <li><b>التحقق من صحة البيانات:</b> التحقق مما إذا كانت البيانات في التنسيق المتوقع وتستوفي معايير محددة. </li>
                            <li><b>التعقيم:</b> إزالة أي أحرف ضارة أو كود لمنع ثغرات الأمان. </li>
                            <li><b>تفاعل قاعدة البيانات:</b> حفظ البيانات في قاعدة بيانات للتخزين والاسترداد. </li>
                            <li><b>إرسال رسائل البريد الإلكتروني:</b> إرسال رسائل تأكيد أو إشعارات أخرى بناءً على البيانات المرسلة. </li>
                            <li><b>إنشاء الاستجابات:</b> عرض رسالة تأكيد أو إعادة توجيه إلى صفحة أخرى أو تنفيذ أي إجراءات أخرى بناءً على إرسال الاستمارة. </li>
                        </ul>
                    </li>
                </ol>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
</head>
<body>

    <form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"/> <br/><br/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"/> <br/><br/>
        <button type="submit">Submit</button>
    </form>

    <br/>
    
    <?php if( isset($_POST['name']) && isset($_POST['email']) ){ ?>
        Welcome <b><?php echo $_POST["name"]; ?></b><br/>
        Your email address is: <b><?php echo $_POST["email"]; ?></b>
    <?php } ?>

</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="index" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <div className="mt-3">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" id="name" ref={inputNameRef} onInput={changeInputName} name="name" className="ms-2" /> <br/><br/>
                    <label htmlFor="email"> Email: </label>
                    <input type="email" id="email" ref={inputEmailRef} onInput={changeInputEmail} name="email" className="ms-2" /> <br/><br/>
                    <button type="submit"  className="btn border" onClick={() => setSubmit(true)}> Submit </button>
                    <br/><br/>
                    <div className={(submit && inputEmail.includes("@gmail.com")) ? "d-block" : "d-none"}>
                      Welcome <b>{inputName}</b><br/>
                      Your email address is: <b>{inputEmail}</b>
                    </div>
                </div>
            </Result>
        </article>
    </>
    )
}