import { CodeHighlighter , CodeCommand , Result} from "../../path";

export default function Superglobals(props){
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
                    <li><a className="text-decoration-none" href="#ENV"> $_ENV </a></li>
                    <li><a className="text-decoration-none" href="#COOKIE"> $_COOKIE </a></li>
                    <li><a className="text-decoration-none" href="#SESSION"> $_SESSION </a></li>
                </ul>
            </details>
            <p className="style_divv">
                بعض المتغيرات المحددة مسبقًا في <b>PHP</b> هي <b>"superglobals"</b>، مما يعني أنه يمكن الوصول إليها دائمًا، بغض النظر عن النطاق - ويمكنك الوصول إليها من أي وظيفة أو فئة أو ملف دون الحاجة إلى القيام بأي شيء خاص.<br/><br/>
                المتغيرات <b>PHP superglobal</b> هي: <br/>
                <ul dir="ltr">
                    <li><bdi><b>$GLOBALS</b></bdi></li>
                    <li><bdi><b>$_SERVER</b></bdi></li>
                    <li><bdi><b>$_REQUEST</b></bdi></li>
                    <li><bdi><b>$_POST</b></bdi></li>
                    <li><bdi><b>$_GET</b></bdi></li>
                    <li><bdi><b>$_FILES</b></bdi></li>
                    <li><bdi><b>$_ENV</b></bdi></li>
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
            <p className="style_divv"></p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
            </Result>
            <h2 className="title-h2" id="POST">4 - <bdi>$_POST</bdi></h2>
            <p className="style_divv"></p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
            </Result>
            <h2 className="title-h2" id="GET">5 - <bdi>$_GET</bdi></h2>
            <p className="style_divv"></p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
            </Result>
            <h2 className="title-h2" id="FILES">6 - <bdi>$_FILES</bdi></h2>
            <p className="style_divv"></p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
            </Result>
            <h2 className="title-h2" id="ENV">7 - <bdi>$_ENV</bdi></h2>
            <p className="style_divv"></p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
            </Result>
            <h2 className="title-h2" id="COOKIE">8 - <bdi>$_COOKIE</bdi></h2>
            <p className="style_divv"></p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
            </Result>
            <h2 className="title-h2" id="SESSION">9 - <bdi>$_SESSION</bdi></h2>
            <p className="style_divv"></p>
            <div className="mital"> متال : </div>
            <CodeHighlighter code={``} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
            </Result>
        </article>
    </>
    )
}