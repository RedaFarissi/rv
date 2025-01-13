import { Link } from "react-router-dom";
import { CodeHighlighter  , Result} from "../../../path";

export default function Connect(props){
    return(
    <>
        <h1 className="heading-style"> PHP Connect </h1>
        <article className="mt-5">
            <h2 className="title-h2 mt-5">1 - تحميل قاعدة بيانات MySQL </h2>
            <p className="style_divv">
                إذا لم يكن لديك خادم <b>PHP</b> مزود بقاعدة بيانات <b>MySQL</b> متل <b>xampp</b> ، فيمكنك تنزيله <Link to="/mysql#install-mysql">من هنا</Link>
            </p>
        <article>
        </article>
            <h2 className="title-h2"> 2 - اتصل بـ MySQL</h2>
            <p className="style_divv">
                يمكن لـ <b>PHP 5</b> والإصدارات الأحدث العمل مع قاعدة بيانات <b>MySQL</b> باستخدام: <br/>
                <ul>
                    <li>ملحق <b>MySQLi</b> (يشير الحرف <b>"i"</b> إلى التحسين)</li>
                    <li><b>PDO</b> (كائنات بيانات <b>PHP</b>)</li>
                </ul>
            </p>
        </article>
        <article>
            <h2 className="title-h2">3 - هل يجب علي استخدام MySQLi أو PDO ؟</h2>
            <p className="style_divv">
                إذا كنت بحاجة إلى إجابة قصيرة، فستكون <b>"كما تريد"</b>.<br/><br/>
                يتمتع كل من <b>MySQLi</b> و <b>PDO</b> بمزاياهما:<br/><br/>
                ستعمل شركة <b>PDO</b> على 12 نظامًا مختلفًا لقواعد البيانات، بينما يعمل <b>MySQLi</b> فقط مع قواعد بيانات <b>MySQL</b>.<br/><br/>
                لذا، إذا كان عليك تبديل مشروعك لاستخدام قاعدة بيانات أخرى، فإن شركة <b>PDO</b> تجعل العملية سهلة. ما عليك سوى تغيير سلسلة الاتصال وبعض الاستعلامات. باستخدام <b>MySQLi</b>، ستحتاج إلى إعادة كتابة التعليمات البرمجية بالكامل - بما في ذلك الاستعلامات.<br/><br/>
                كلاهما موجه للكائنات، لكن <b>MySQLi</b> يقدم أيضًا واجهة برمجة التطبيقات الإجرائية <b>(API)</b>.<br/><br/> 
                كلاهما يدعم البيانات المعدة. تحمي البيانات المعدة من حقن <b>SQL</b>، وهي مهمة جدًا لأمن تطبيقات الويب.           
            </p>
        </article>
        <article>
            <h2 className="title-h2">4 - افتح اتصالاً بـ MySQL </h2>
            <h3 className="title-h3">1 - PDO </h3>
            <div className="mital"> متال : </div>
            <ul><li>أولاً قمت بإنشاء قاعدة بيانات بالاسم<b>myDB</b></li></ul>
            <CodeHighlighter  code={`<?php
    $servername = "localhost";
    $username = "root";
    $password = "**************";

    $databaseName = "myDB";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$databaseName", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
        // code 
        
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Connected successfully
            </Result>

            <h3 className="title-h3">2 - MySQLi </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    $servername = "localhost";
    $username = "root";
    $password = "**************";

    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                Connected successfully
            </Result>
        </article>
    </>
    )
}