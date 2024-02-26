import { useRef, useState } from "react";
import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function Superglobals(props){
    const [pagePhp1,setPagePhp1] = useState("index");
    const [pageInput1,setPageInput1] = useState(null);
    const myInputRef1 = useRef(null);
    function clickExemple1(){
        setPagePhp1("demo"); 
        setPageInput1(myInputRef1.current.value);
    }
    /********************************************************/
    const [pageInput2,setPageInput2] = useState(null);
    const myInputRef2 = useRef(null);
    function clickExemple2(){
        setPageInput2(myInputRef2.current.value);
    }
    /********************************************************/
    const [pagePhp3,setPagePhp3] = useState("index");
    const [pageInput3,setPageInput3] = useState(null);
    const [pageInputEmail3,setPageInputEmail3] = useState(null);
    const myInputRef3 = useRef(null);
    const myInputRefEmail3 = useRef(null);
    function clickExemple3(){
        setPagePhp3("demo"); 
        setPageInput3(myInputRef3.current.value);
        setPageInputEmail3(myInputRefEmail3.current.value);
    }
    /********************************************************/
    const [pagePhp4,setPagePhp4] = useState("index");
    const [pageInput4,setPageInput4] = useState(null);
    const [pageInputEmail4,setPageInputEmail4] = useState(null);
    const [routeChange,setRouteChange] = useState("");
    const myInputRef4 = useRef(null);
    const myInputRefEmail4 = useRef(null);
    function clickExemple4(){
        setPagePhp4("demo"); 
        setPageInput4(myInputRef4.current.value);
        setPageInputEmail4(myInputRefEmail4.current.value);
        let newEmail = myInputRefEmail4.current.value.replace("@", "i%40");
        setRouteChange(`?name=${myInputRef4.current.value}&email=${newEmail}`)
    }

    return(
    <>
        <h1 className="heading-style"> PHP Superglobals </h1>
        <article className="mt-5">
            <details  className="mt-5 my-4">
                <summary className='text-danger'> جميع العناوين  </summary>
                <ul dir="ltr">
                    <li><a className="text-decoration-none" href="#GLOBALS"> $GLOBALS </a></li>
                    <li><a className="text-decoration-none" href="#SERVER"> $_SERVER </a></li>
                    <li><a className="text-decoration-none" href="#REQUEST"> $_REQUEST </a></li>
                    <li><a className="text-decoration-none" href="#POST"> $_POST </a></li>
                    <li><a className="text-decoration-none" href="#GET"> $_GET </a></li>
                    <li><a className="text-decoration-none" href="#FILES"> $_FILES </a></li>
                    <li><a className="text-decoration-none" href="#COOKIE"> $_COOKIE </a></li>
                    <li><a className="text-decoration-none" href="#SESSION"> $_SESSION </a></li>
                </ul>
            </details>
            <p className="style_divv">
                بعض المتغيرات المحددة مسبقًا في <b>PHP</b> هي <b>"superglobals"</b>، مما يعني أنه يمكن الوصول إليها دائمًا، بغض النظر عن النطاق - ويمكنك الوصول إليها من أي وظيفة أو فئة أو ملف دون الحاجة إلى القيام بأي شيء خاص.<br/><br/>
                بعض متغيرات <b>PHP superglobal</b> : <br/>
                <ul dir="ltr">
                    <li><bdi><b>$GLOBALS</b></bdi></li>
                    <li><bdi><b>$_SERVER</b></bdi></li>
                    <li><bdi><b>$_REQUEST</b></bdi></li>
                    <li><bdi><b>$_POST</b></bdi></li>
                    <li><bdi><b>$_GET</b></bdi></li>
                    <li><bdi><b>$_FILES</b></bdi></li>
                    <li><bdi><b>$_COOKIE</b></bdi></li>
                    <li><bdi><b>$_SESSION</b></bdi></li>
                </ul>
            </p>
            <h2 className="title-h2" id="GLOBALS">1 - <bdi>$GLOBALS</bdi></h2>
            <p className="style_divv">
                <bdi><b>$GLOBALS</b></bdi> عبارة عن مصفوفة تحتوي على كافة المتغيرات العامة.<br/><br/>
                المتغيرات العامة هي متغيرات يمكن الوصول إليها من أي نطاق.<br/>
                المتغيرات من النطاق الخارجي هي متغيرات عمومية تلقائيًا، ويمكن استخدامها من قبل أي نطاق، على سبيل المثال. داخل وظيفة.<br/>
                لاستخدام متغير عام داخل دالة، عليك إما تعريفها على أنها عمومية باستخدام الكلمة الأساسية العامة، أو الرجوع إليها باستخدام بناء جملة <bdi><b>$GLOBALS</b></bdi>.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={`<?php
    $x = 75;

    function myfunction() {
        echo "<h2>". $GLOBALS['x'] ."</h2>";
    }

    myfunction();
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>75</h2>
            </Result>
            <h2 className="title-h2" id="SERVER">2 - <bdi>$_SERVER</bdi></h2>
            <p className="style_divv">
                <bdi><b>$_SERVER</b></bdi> هو متغير عالمي فائق <b>PHP</b> يحتوي على معلومات حول الرؤوس والمسارات ومواقع البرامج النصية.<br/>
                يوضح المثال أدناه كيفية استخدام بعض العناصر في <bdi><b>$_SERVER</b></bdi>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={`<?php
    echo "<h2>".$_SERVER['PHP_SELF']."</h2>";
    echo "<h2>".$_SERVER['SERVER_NAME']."</h2>";
    echo "<h2>".$_SERVER['HTTP_HOST']."</h2>";
    echo "<h2>".$_SERVER['HTTP_USER_AGENT']."</h2>";
    echo "<h2>".$_SERVER['SCRIPT_NAME']."</h2>";
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>/php-test/index.php</h2>
                <h2>localhost</h2>
                <h2>localhost</h2>
                <h2>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36</h2>
                <h2>/php-test/index.php</h2>
            </Result>
            
            <h2 className="title-h2" id="REQUEST">3 - <bdi>$_REQUEST</bdi></h2>
            <p className="style_divv">
                <bdi><b>$_REQUEST</b></bdi> هو متغير <bdi><b>PHP</b></bdi> شامل يحتوي على بيانات النموذج المرسل وجميع بيانات ملفات تعريف الارتباط.<br/>
                بمعنى آخر، <bdi><b>$_REQUEST</b></bdi> عبارة عن مصفوفة تحتوي على بيانات من <bdi><b>$_GET</b></bdi> و <bdi><b>$_POST</b></bdi> و <bdi><b>$_COOKIE</b></bdi>.<br/>
                يمكنك الوصول إلى هذه البيانات باستخدام الكلمة الأساسية <bdi><b>$_REQUEST</b></bdi> متبوعة باسم حقل النموذج، أو ملف تعريف الارتباط، مثل هذا
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title> index </title>
</head>
<body>

    <form  method="POST" action="demo.php">
        Name: <input type="text" name="f_name" />
        <input type="submit" value="submit" />
    </form>

</body>
</html>`} language="jsx" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>demo</title>
</head>
<body>
    <h2>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $name = htmlspecialchars($_REQUEST['f_name']) ;
                echo (empty($name))? "Name is empty" : $name ;
            }
        ?>
    </h2>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\demo.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title={pagePhp1} file_name="index.html" logo={props.xampp_logo}  route={`http://localhost/php-test/${pagePhp1}.php`}>
                {
                    (pagePhp1 === "index")?(<>
                        Name: <input type="text" name="f_name" ref={myInputRef1} className="me-1"/>
                        <input type="submit"  value="submit" onClick={clickExemple1} className="px-1"/>
                    </>):(<>
                        <h2> {pageInput1} </h2>
                    </>)
                }
            </Result>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter code={`
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> index </title>
</head>
<body>
    <form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
        Name: <input type="text" name="full_name" />
        <input type="submit">
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = htmlspecialchars($_REQUEST['full_name']) ;
            echo (empty($name)) ? "<h2> Name is empty </h2>" : "<h2>". $name ."</h2>" ;
        }
    ?>

</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route={`http://localhost/php-test/${pagePhp1}.php`}>
                Name: <input type="text" name="f_name" ref={myInputRef2} className="me-1"/>
                <input type="submit"  value="submit" onClick={clickExemple2} className="px-1"/>
                
                <h2> {pageInput2} </h2>
            </Result>
            <h2 className="title-h2" id="POST">4 - <bdi>$_POST</bdi></h2>
            <p className="style_divv">
                
                في <b>PHP</b> ، <bdi><b>$_POST</b></bdi> هو متغير سوبر جلوبال يُستخدم لجمع بيانات النموذج بعد تقديم نموذج <b>HTML</b> باستخدام طريقة <b>"POST"</b>. عند تقديم نموذج بطريقة <b>"POST"</b>، يتم إرسال بيانات النموذج إلى الخادم في جسم طلب <b>HTTP</b>، و <bdi><b>$_POST</b></bdi> يُستخدم للوصول إلى تلك البيانات في سكريبت PHP.
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> index </title>
</head>
<body>

    <form method="POST" action="demo.php">
        Name: <input type="text" name="name"><br />
        Email: <input type="text" name="email"><br/>
        <input type="submit" value="Submit" />
    </form>
        
</body>
</html>`} language="jsx" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> demo </title>
</head>
<body>
    
    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $email = $_POST["email"];
    ?>
    <h2>
        <?php
                echo "Name: " . $name . "<br/>";
                echo "Email: " . $email;
            }
        ?>
    <h2>
    
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\demo.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title={pagePhp3} file_name="index.html" logo={props.xampp_logo}  route={`http://localhost/php-test/${pagePhp3}.php`}>
                {
                    (pagePhp3 === "index")?(<>
                        Name: <input type="text" name="name" ref={myInputRef3}/><br />
                        Email: <input type="text" name="email" ref={myInputRefEmail3}/><br/>
                        <input type="submit" value="Submit" onClick={clickExemple3} className="px-1"/>
                    </>):(<>
                        <h2>Name: {pageInput3} <br/>Email: {pageInputEmail3} </h2>
                    </>)
                }
            </Result>

            <h2 className="title-h2" id="GET">5 - <bdi>$_GET</bdi></h2>
            <p className="style_divv">
                <bdi><b>$_GET</b></bdi> هو متغير سوبر جلوبال آخر يُستخدم لجمع بيانات النموذج، ولكنه عادة يُستخدم عندما ترسل بيانات النموذج باستخدام طريقة <b>"get"</b> في <b>HTTP</b>. باستخدام طريقة <b>"get"</b>، يتم إلحاق بيانات النموذج بعنوان <b>URL</b> كمعلمات الاستعلام. يتم ذلك عند تقديم النموذج، وهو يظهر في عنوان <b>URL</b> ويمكن حفظه، وهذا يمكن أن يكون مفيدًا لمشاركة الروابط.
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> index </title>
</head>
<body>

    <form method="GET" action="demo.php">
        Name: <input type="text" name="name" /><br/>
        Email: <input type="text" name="email" /><br/>
        <input type="submit" value="Submit" />
    </form>
    
</body>
</html>`} language="jsx" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> demo </title>
</head>
<body>
    
    <?php
        if ($_SERVER["REQUEST_METHOD"] === "GET") {
            
            $name = $_GET["name"];
            $email = $_GET["email"];

            echo "<h2> Name: " . $name . "</h2>";
            echo "<h2> Email: " . $email . "</h2>";
        }
    ?>
    
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\demo.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" url_change={routeChange} logo={props.xampp_logo} route={`http://localhost/php-test/${pagePhp4}.php`}>
                {
                    (pagePhp4 === "index")?(<>
                        Name: <input type="text" name="name" ref={myInputRef4}/><br />
                        Email: <input type="text" name="email" ref={myInputRefEmail4}/><br/>
                        <input type="submit" value="Submit" onClick={clickExemple4} className="px-1"/>
                    </>):(<>
                        <h2>Name: {pageInput4} <br/>Email: {pageInputEmail4} </h2>
                    </>)
                }
            </Result>
                                                                                                                                                                                                                                                                                                                                       
            <h2 className="title-h2" id="FILES">6 - <bdi>$_FILES</bdi></h2>
            <p className="style_divv">
                يلعب المتغير <bdi><b>$_FILES</b></bdi> في <b>PHP</b> دورًا حاسمًا في التعامل مع تحميلات الملفات المرسلة من خلال نماذج <b>HTML</b>. وهو يوفر مصفوفة ترابطية تحتوي على معلومات حول كل ملف تم تحميله، ويمكن الوصول إليها من خلال سمة اسم عنصر إدخال الملف.
            </p>
            <div className="mital"> متال : </div>
            <ul><li>قم بإنشاء مجلد في المسار <kbd>C:\xampp\htdocs\php-test\</kbd> بالاسم <bdi><b>uploads/</b></bdi></li></ul>
            <CodeHighlighter code={`<!DOCTYPE html>
<html>
<head>
    <title>File Upload</title>
</head>
<body>
    <form action="upload.php" method="POST" enctype="multipart/form-data">
        <label for="file">Select a file:</label>
        <input type="file" id="file" name="file" />
        <br/>
        <button type="submit">Upload</button>
    </form>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`<?php
    // Check if the file was uploaded successfully
    if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {

        // Get file information
        $target_dir = "uploads/"; // Replace with your desired upload directory
        $target_file = $target_dir . basename($_FILES["file"]["name"]);

        // Validate file type (optional)
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["file"]["tmp_name"]);
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }

        // Move the uploaded file to the target directory
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["file"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }

    } else {
        // Handle upload errors
        switch ($_FILES['file']['error']) {
            case UPLOAD_ERR_INI_SIZE:
                echo "The uploaded file exceeds the upload_max_filesize directive in php.ini.";
                break;
            case UPLOAD_ERR_FORM_SIZE:
                echo "The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form.";
                break;
            case UPLOAD_ERR_PARTIAL:
                echo "The uploaded file was only partially uploaded.";
                break;
            case UPLOAD_ERR_NO_FILE:
                echo "No file was uploaded.";
                break;
            case UPLOAD_ERR_NO_TMP_DIR:
                echo "Missing a temporary folder.";
                break;
            case UPLOAD_ERR_CANT_WRITE:
                echo "Failed to write file to disk.";
                break;
            case UPLOAD_ERR_EXTENSION:
                echo "A PHP extension stopped the file upload.";
                break;
            default:
                echo "An unknown error occurred.";
        }
    }
?>`} language="php" file_name="C:\xampp\htdocs\php-test\upload.php" addclassName="mt-3 mb-3" copie={true}/>
            <ul><li className="fs-5">سيتم تحميل الملف الذي اختاره المستخدم وحفظه في <bdi><b>uploads/</b></bdi></li></ul>
            <h2 className="title-h2" id="COOKIE">7 - <bdi>$_COOKIE</bdi></h2>
            <p className="style_divv">
                متغير <bdi><b>$_COOKIE</b></bdi> العالمي الفائق في لغة البرمجة <b>PHP</b> يوفر مصفوفة تجميعية تحتوي على معلومات حول ملفات تعريف الارتباط المرسلة من المتصفح إلى الخادم. ملفات تعريف الارتباط هذه عبارة عن قطع صغيرة من البيانات يخزنها موقع الويب على جهاز الكمبيوتر الخاص بالمستخدم لتذكر التفضيلات أو تتبع الجلسات أو الحفاظ على حالة المستخدم عبر صفحات مختلفة.<br/><br/>
                <b className="text-success"> إنشاء COOKIE </b>
                <CodeHighlighter code={`# setcookie(name, value, expire, path, domain, secure, httponly);

setcookie('username', 'Reda Eskouni', time() + 3600); // Expires in 1 hour
setcookie('language', 'en', time() + 86400 * 7); // Expires in 7 days`} language="php" addclassName="mt-3 mb-3" copie={true}/>
                <b className="text-success"> الوصول إلى COOKIE </b>
                <CodeHighlighter code={`$username = $_COOKIE['username'];
$language = $_COOKIE['language'];`} language="php" addclassName="mt-3 mb-3" copie={true}/>
                <b className="text-success"> حدف COOKIE </b>
                <CodeHighlighter code={`setcookie("username", "", time() - 3600);
setcookie("language", "", time() - 3600);`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            
            </p>
            <h2 className="title-h2" id="SESSION">8 - <bdi>$_SESSION</bdi></h2>
            <p className="style_divv">
                يوفر المتغير الفائق <bdi><b>$_SESSION</b></bdi> في لغة البرمجة <b>PHP</b> مصفوفة تجميعية تخزن المعلومات عبر طلبات صفحات متعددة ضمن جلسة المستخدم. يتيح لك هذا الحفاظ على حالة المستخدم والبيانات دون الاعتماد فقط على ملفات تعريف الارتباط، والتي لها قيود في الحجم والأمان.<br/><br/>
                <b className="text-success"> بدء SESSION </b>
                <CodeHighlighter code={`session_start();`} language="php" addclassName="mt-3 mb-3" copie={true}/>
                <b className="text-success"> تخزين بيانات SESSION </b>
                <CodeHighlighter code={`$_SESSION['username'] = 'Reda Eskouni';
$_SESSION['cart'] = array('Product 1', 'Product 2');`} language="php" addclassName="mt-3 mb-3" copie={true}/>
                <b className="text-success"> الوصول إلى بيانات SESSION </b>
                <CodeHighlighter code={`$username = $_SESSION['username'];
$cart = $_SESSION['cart'];`} language="php" addclassName="mt-3 mb-3" copie={true}/>
                <b className="text-success"> انتهاء صلاحية SESSION </b>
                <CodeHighlighter code={`session_cache_expire(60 * 30); // Expires in 30 minutes`} language="php" addclassName="mt-3 mb-3" copie={true}/>
                <b className="text-success"> إلغاء SESSION </b>
                <CodeHighlighter code={`session_destroy();`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
        </article>
    </>
    )
}