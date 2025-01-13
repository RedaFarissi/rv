import { CodeHighlighter  , Result} from "../../../path";

export default function StaticProperties(props){
    return(
    <>
        <h1 className="heading-style"> PHP Static Properties </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                يمكن استدعاء الخصائص الثابتة مباشرةً دون إنشاء مثيل للفئة.<br/><br/>
                يتم الإعلان عن الخصائص الثابتة باستخدام الكلمة الأساسية <b>static </b>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<?php
    class Logger {
        private static $i = 0;

        public function __construct() {
            self::$i++;
        }
        
        public static function getInstanceCount(): int {
            return self::$i;
        }
    }

    echo "<h2>" . Logger::getInstanceCount() . "</h2>"; 

    $logger1 = new Logger();
    $logger2 = new Logger();
    
    echo "<h2>" . Logger::getInstanceCount() . "</h2>"; 
?>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>0</h2>     
                <h2>2</h2>     
            </Result>
        </article>
    </>
    )
}