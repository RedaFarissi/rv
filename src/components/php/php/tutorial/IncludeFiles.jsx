import { CodeHighlighter , CodeCommand , Result} from "../../../path";

export default function IncludeFiles(props){
    return(
    <>
        <h1 className="heading-style"> PHP Include Files </h1>
        <article className="mt-5">
            <p className="style_divv">
                تأخذ عبارة التضمين (<b>include</b> أو <b>require</b>) كل النص/الكود/العلامات الموجودة في الملف المحدد وتنسخها إلى الملف الذي يستخدم عبارة التضمين. <br/>
                يعد تضمين الملفات مفيدًا جدًا عندما تريد تضمين نفس لغة <b>PHP</b> أو <b>HTML</b> أو النص في صفحات متعددة بموقع الويب.<br/><br/>
                من الممكن إدراج محتوى أحد ملفات <b>PHP</b> في ملف <b>PHP</b> آخر (قبل أن ينفذه الخادم)، مع عبارة <b>include</b> أو <b>require</b> .<br/><br/>
                عبارات التضمين والطلب متطابقة، إلا في حالة الفشل:
                <ul>
                    <li><b className="text-success">require :</b> سوف ينتج خطأ فادح <b>(E_COMPILE_ERROR)</b> ويوقف البرنامج النصي </li>
                    <li><b className="text-success">include :</b> سينتج فقط تحذيرًا <b>(E_WARNING)</b> وسيستمر البرنامج النصي </li>
                </ul>
                <CodeHighlighter  code={`include 'filename';`} language="php" addclassName="mt-3 mb-3" copie={true}/>
                <CodeHighlighter  code={`require 'filename';`} language="php" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Document </title>
</head>
<body>
    <header>
        <h2>Header</h2>
    </header>
    <main>
        <h2>Main</h2>
    </main>
    <?php include 'footer.php'; ?>
    <hr />
    <h3> Variable from footer file : <?php echo $name; ?> </h3>
</body>
</html>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeHighlighter  code={`<?php $name = "Reda Eskouni"; ?>
<footer>
    <h2> Footer </h2>
</footer>`} language="php" file_name="C:\xampp\htdocs\php-test\index.php" addclassName="mt-3 mb-3" copie={true}/>   
            <Result title="localhost/php-test/index.php" file_name="index.html" logo={props.xampp_logo}  route="http://localhost/php-test/index.php">
                <h2>Header</h2>
                <h2>Main</h2>
                <h2>Footer</h2>
                <hr />
                <h3> Variable from footer file : Reda Eskouni</h3>
            </Result>
        </article>
    </>
    )
}