import { CodeHighlighter , CodeCommand , Result} from "../../../path";
import images from "../../imagesPhp"

export default function Install(props){
    return(
    <>
        <h1 className="heading-style"> PHP Install </h1>
        <article className="mt-5">
            <p className="style_divv mt-5">
                لتثبيت <b>PHP</b>، يمكنك اتباع هذه الخطوات العامة. قد تختلف الخطوات المحددة وفقًا لنظام التشغيل الخاص بك. سأقدم لمحة موجزة عن نظام التشغيل ويندوز .
            </p>
            <h2 className="title-h2">1 - مع XAMPP </h2>
            <h3 className="title-h3"> 1 - قم بتنزيل وتثبيت XAMPP، الذي يتضمن PHP و Apache و MySQL والمزيد.</h3>
            <ul className="mb-3"><li> لتثبيت <b>xampp</b> انقر على الرابط : <a href="https://www.apachefriends.org/download.html" target="_blanck" rel="noopener">https://www.apachefriends.org/download.html</a> </li></ul>
            <img src={images.php2} alt="php" className="w-100 mb-2"/>
            <h3 className="title-h3"> 2 - اتبع تعليمات التثبيت المقدمة أثناء عملية الإعداد.</h3>
            <img src={images.php3} alt="php" className="w-100 my-2"/>
            <div className="row">
                <img src={images.php4} alt="php" className="col-6 mb-2"/>
                <img src={images.php5} alt="php" className="col-6 mb-2"/>
            </div>
            <h3 className="title-h3">3 - ابدأ تشغيل خادم <b>Apache</b> من لوحة تحكم <b>XAMPP</b>.</h3>
            <img src={images.php6} alt="php" className="w-100 my-2"/>
            <ul className="fs-5 my-2"><li> يمكنك إنشاء مجلد داخل المسار <kbd>C:\xampp\htdocs\</kbd></li></ul> 
            <div className="mital"> متال : </div>
            <ul><li>لقد قمت بإنشاء مجلد باسم "php-test" في مجلد htdocs</li></ul>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP TEST</title>
</head>
<body>
    <h2>
        <?php
            $bool = false;
            echo ($bool) ? "Amal El" : "Reda Eskouni";
        ?>
    </h2>  
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="PHP TEST" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">     
                <h2>Reda Eskouni</h2>                
            </Result>
            <h2 className="title-h2 mt-5">2 - بدون استخدام XAMPP</h2>
            <h3 className="title-h3"> 1 - تثبيت php .</h3>
            <ul className="mb-3"><li> لتثبيت <b>php</b> انقر على الرابط : <a href="https://www.php.net/downloads.php" target="_blanck" rel="noopener">https://www.php.net/downloads.php</a> </li></ul> 
            <img src={images.php1} alt="php" className="w-100 mb-2"/>
            <img src={images.php7} alt="php" className="w-100 my-2"/>
            <h3 className="title-h3">2 - إتبع تعليمات التثبيت المقدمة أثناء عملية الإعداد .</h3>
            <img src={images.php8} alt="php" className="w-100 my-2"/>
            <ul><li>استخراج المجلد في الدليل <kbd>C:/</kbd></li></ul>
            <img src={images.php9} alt="php" className="w-100 my-2"/>
            <div className="row">
                <img src={images.php11} alt="php" className="col-6 my-2"/>
                <img src={images.php10} alt="php" className="col-6 my-2"/>
            </div>
            <ul><li>  اضف هذا <kbd className="mx-2"><b>C:\php-8.3.3</b></kbd>إلى <b>Edit the system environment variables</b> </li></ul>
            <img src={images.php12} alt="php" className="w-100 my-2"/>
            <h3 className="title-h3">3 - تحقق من تثبيت PHP</h3>
            <CodeCommand>php -v</CodeCommand>
            <h3 className="title-h3">4 - إبدأ تشغيل .</h3>
            <ul><li>لقد قمت بإنشاء مجلد <b>"php-test"</b> على سطح المكتب وأنشأت فيه ملفًا بامتداد <b>php</b> .</li></ul>
            <img src={images.php13} alt="php" className="w-100 my-2"/>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP TEST</title>
</head>
<body>
    <h2>
        <?php
            $bool = false;
            echo ($bool) ? "Amal El" : "Reda Eskouni";
        ?>
    </h2>  
</body>
</html>`} language="php" file_name="C:\Users\username\Desktop\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>
            <Result title='PHP TEST' file_name="index.html" route="http://localhost:8000/">     
                <h2>Reda Eskouni</h2>                
            </Result>
            <ul><li>من الأفضل إستخدام <b>XAMPP</b> أو <b>MAMP</b> لأن لديهم قاعدة بيانات بشكل افتراضي</li></ul>
        </article>
    </>
    )
}