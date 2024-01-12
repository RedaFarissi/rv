import images  from "./imagesMysql"
import { CodeHighlighter  } from "../path";

export default function Sql(props){
    const sql_list = [
        "Intro" , "Install Mysql","Create Database","Drop Database",
        "Comments","Data Types","Create Table","Drop Table",
        "Insert Row","Select Database","Retrieving Data from Table","Auto-increment",
        "Merge Columns while Retrieving","Column Name Repetition in Query",
        "Retrieve Data with Conditions","Retrieve Data with Sorting",
        "Retrieve Distinct Data","Merge Tables into One",
        "Delete Data from Table Command","Update Table Data Command",
        "Limit Rows Returned","Handling Null Fields","Retrieve Minimum Value in Column",
        "Retrieve Maximum Value in Column","Count Rows in Table","Sum of Column Values",
        "Average of Column Values","Aggregate Common Field Values",
        "Conditions on Aggregated Fields","Copy Data to Another Table",
        "Set Default Value for Column","Store Uniform Values in Column",
    ]   
    const arr = sql_list.map(e => <li className="list-group-item">
        <a href={`/mysql#${e.toLowerCase().replace(/\s/g, '-')}`}>
            <i className="fa-solid fa-caret-right me-1"></i> SQL {e}
        </a>
    </li>)
    return(    
<main>
    <aside className="aside">
        <ul className="list-group m-0">
            {arr}
            {
                // props.sql_list.map(e => <li className="list-group-item">
                //     <a href={`/sql#${e.toLowerCase().replace(/\s/g, '-')}`}>
                //         <i className="fa-solid fa-caret-right me-1"></i> SQL {e}
                //     </a>
                // </li>)
            }
        </ul>
    </aside>
    <section className="section-conetent">
        <article className="mt-5">
            <h1 className="heading-style heading-style-css-color"> MYSQL </h1>
            <h2 id="intro" className="title-h2"> 1 -مقدمة حول mysql </h2>
            <h3 className="title-h3"> 1 - ما هو mysql</h3>
            <p className="style_divv">
                <b>MySQL</b> هو نظام إدارة قواعد البيانات العلائقية <b>(RDBMS)</b>، وهو يعتبر من أحد أنظمة إدارة قواعد البيانات الأكثر استخدامًا في العالم. تم تطوير <b>MySQL</b> بواسطة شركة سون مايكروسيستمز (Sun Microsystems)، والتي فيما بعد أصبحت جزءًا من أوراكل كوربوريشن (Oracle Corporation) بعد استحواذها على سون مايكروسيستمز.<br/><br/>
                <b>MySQL</b> يستخدم لتخزين البيانات بطريقة منظمة في جداول تتكون من صفوف وأعمدة. يتيح <b>MySQL</b> للمستخدمين إجراء العديد من العمليات على البيانات مثل البحث والإدخال والتحديث والحذف. يتم التحكم في الوصول إلى البيانات باستخدام لغة SQL (Structured Query Language)، والتي تُستخدم لتعريف وإدارة البيانات في <b>MySQL</b> وغيرها من نظم إدارة قواعد البيانات العلائقية.<br/><br/>
                <b>MySQL</b> يعتبر مفتوح المصدر، مما يعني أنه يمكن للمستخدمين الحصول على رمز المصدر وتعديله واستخدامه بحرية. يُستخدم MySQL في تطبيقات الويب والتطبيقات الأخرى حول العالم، ويعد جزءًا أساسيًا في العديد من حلول إدارة البيانات.
            </p>
            <h3 className="title-h3"> 2 - ماذا يمكن أن تفعل mysql </h3>
            <p className="style_divv"> 
                MySQL يوفر مجموعة واسعة من الوظائف والإمكانيات لإدارة قواعد البيانات العلائقية. إليك بعض الأمور التي يمكن أن تفعلها باستخدام MySQL:<br/><br/>
                <ul>
                    <li> <span className="text-success">إنشاء قواعد بيانات:</span> يمكنك إنشاء قواعد بيانات لتنظيم وتخزين البيانات بطريقة منظمة. </li>
                    <li> <span className="text-success">إنشاء وإدارة الجداول:</span>  يمكنك إنشاء جداول داخل قواعد البيانات لتخزين معلوماتك. يمكنك أيضًا تعديل وحذف الجداول حسب الحاجة. </li>
                    <li> <span className="text-success">إدارة البيانات:</span> يتيح لك MySQL إدخال وتحديث واستعراض وحذف البيانات في الجداول باستخدام اللغة الهيكلية المستعلقة SQL.</li>
                    <li> <span className="text-success">الاستعلام والبحث:</span> يمكنك استخدام SQL لكتابة استعلامات معقدة لاسترجاع البيانات المطلوبة من الجداول.</li>
                    <li> <span className="text-success">الفهرسة:</span> يمكنك إنشاء فهارس على الحقول لتسريع عمليات البحث والاستعلام.</li>
                    <li> <span className="text-success">تحديثات وحذف البيانات:</span> يمكنك تحديث البيانات الموجودة في الجداول أو حذفها حسب الشروط التي تحددها.</li>
                    <li> <span className="text-success">: يقدم</span>   توفير أمان البيانات MySQL ميزات أمان متقدمة مثل تحكم في الوصول وتشفير البيانات لضمان حماية البيانات.</li>
                    <li> <span className="text-success">التعامل مع المؤشرات والتركيبات:</span> يمكنك إنشاء وإدارة المؤشرات لتحسين أداء استعلاماتك وعمليات البحث.</li>
                    <li> <span className="text-success">التعامل مع العمليات المتقدمة:</span> يتيح MySQL إمكانية التعامل مع العمليات المتقدمة مثل النسخ الاحتياطي والاسترجاع والتحكم في النسخ الاحتياطي.</li>
                    <li> <span className="text-success">التكامل مع لغات البرمجة:</span> يمكنك استخدام MySQL كجزء من تطبيقات الويب والبرامج باستخدام لغات البرمجة المختلفة مثل PHP، Python، Java، وغيرها.</li>
                </ul>
            </p>
            <h3 className="title-h3">3 - RDBMS</h3>
            <p className="style_divv"> 
                RDBMS تعني "نظام إدارة قواعد البيانات العلائقية"، وهو نوع من أنواع أنظمة إدارة قواعد البيانات (DBMS). يركز RDBMS على إدارة البيانات بطريقة تعتمد على العلاقات بين المعلومات وتنظيمها في جداول.<br/><br/>
                السمة الرئيسية لنظام إدارة قواعد البيانات العلائقي هي استخدام الجداول لتخزين البيانات، حيث تكون البيانات مُنظمة في صفوف وأعمدة. تستخدم هذه الجداول مفتاحًا رئيسيًا لربط الصفوف ببعضها البعض بناءً على علاقات محددة.<br/><br/>
                بعبارة أخرى، يتيح RDBMS للمستخدمين إنشاء قواعد بيانات تحتوي على جداول مترابطة تعكس العلاقات بين الكائنات والمفاهيم في العالم الحقيقي. يُستخدم لغة SQL (Structured Query Language) كواجهة للتفاعل مع RDBMS، وهي لغة تسمح بتحديد واسترجاع البيانات، وإدخال وتحديث المعلومات.<br/><br/>
                الأمثلة على أنظمة إدارة قواعد البيانات العلائقية تشمل MySQL، وOracle Database، وMicrosoft SQL Server، وPostgreSQL، وغيرها. تستخدم هذه الأنظمة على نطاق واسع في التطبيقات والأنظمة التي تتطلب تخزين واسترجاع البيانات بشكل فعّال وهيكلي.
            </p>
        </article>
        <article>
            <h2 className="title-h2" id="install-mysql"> 2 - تثبيت mysql على windows</h2>
            <ul><li><a href='https://www.youtube.com/watch?v=5OdVJbNCSso' target="_blanck">أول 4 دقائق لتثبيت MYSQL</a></li></ul>
            <h3 className="title-h3">انتقل إلى الرابط <a href="https://www.mysql.com/" target="_blanck"> https://www.mysql.com/ </a> لتثبيت mysql : </h3>
            <img src={images.mysql_install1} className="w-100 mt-2"/>
            <h3 className="title-h3"> انقر على DOWNLOADS</h3>
            <img src={images.mysql_install2} className="w-100 mt-2"/>
            <h3 className="title-h3"> انتقل الصفحة إلى الأسفل تم انقر على <bdi>MySQL Community (GPL) Downloads</bdi></h3>
            <img src={images.mysql_install3} className="w-100 mt-2"/>
            <h3 className="title-h3"> انقر على MySQL Installer for Windows</h3>
            <img src={images.mysql_install4} className="w-100 mt-2"/>
            <h3 className="title-h3"> حدد Microsoft Windows و انقر على Download </h3>
            <img src={images.mysql_install5} className="w-100 mt-2"/>
            <h3 className="title-h3"> انقر على No thanks, just start my download.</h3>
            <img src={images.mysql_install6} className="w-100 mt-2"/>
            <h3 className="title-h3">  انتقل إلى الملف الذي تم تنزيله و شغله. </h3>
            <img src={images.mysql_install7} className="w-100 mt-2"/>
            <img src={images.mysql_install8} className="w-100 mt-2"/>            
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="create-database"> 3 - إنشاء قاعدة بيانات جديدة .</h2>
            <p className="style_divv">
                الأمر <b>CREATE DATABASE</b> يستخدم لإنشاء قاعدة بيانات جديدة في نظام إدارة قواعد البيانات العلائقية (RDBMS). 
                <CodeHighlighter  code={"CREATE DATABASE database_name;"} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital">متال : </div>
            <CodeHighlighter  code={"CREATE DATABASE my_db;"} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.mysql_create_db1} className="w-100"/>
        </article>
        <article> 
            <h2 className="title-h2 mt-4" id="drop-database"> 4 - حدف قاعدة بيانات .</h2>
            <p className="style_divv">
                قاعدة البيانات هي مجموعة من البيانات المنظمة والمخزنة بحيث يمكن الوصول إليها وإدارتها بسهولة. تستخدم لتخزين مجموعة من المعلومات ذات الصلة مثل معلومات المستخدمين، الطلبات، المنتجات، وغيرها، وتوفر وسيلة فعالة لتنظيم وإدارة هذه البيانات.<br/><br/>
                عند حذف قاعدة البيانات، يتم محو كل البيانات المخزنة في هذه القاعدة بشكل دائم، وهو عملية لا رجعة فيها، ولا يمكن استعادة البيانات بعد حذفها ما لم يكن هناك نسخ احتياطية مخزنة.
                <CodeHighlighter  code={"DROP DATABASE database_name;"} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital">متال : </div>
            <CodeHighlighter  code={"DROP DATABASE my_db;"} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.mysql_drop_db} className="w-100"/>
            <ul className="mt-3"><li>في هذا المثال، "my_db" هو اسم قاعدة البيانات التي تريد حذفها. يجب أن تكون متأكدًا تمامًا من القاعدة التي تود حذفها قبل تنفيذ هذا الأمر، لأنه سيؤدي إلى حذف كل البيانات في تلك القاعدة دون إمكانية استعادتها.         </li></ul>
        </article>
        <article>  
            <h2 className="title-h2 mt-4" id="comments"> 5 - التعليقات .</h2>
            <p className="style_divv">
                في <b>MySQL</b>، يمكنك إضافة تعليقات (comments) إلى أوامر SQL لتوفير شرح أو وصف إضافي حول الجداول أو الأعمدة أو أي أمر <b>SQL</b> آخر. تعليقات <b>SQL</b> تكون مفيدة للتوثيق وفهم الشيفرة ويمكن أن تساعد المطورين الآخرين أو نفسك في المستقبل عند فحص الشيفرة. هناك عدة طرق لإضافة تعليقات في <b>MySQL</b>
            </p>
            <h3 className="title-h3">1 - تعليقات السطر الواحد</h3>
            <p className="style_divv">
                تستخدم لإضافة تعليق في سطر واحد.
            <CodeHighlighter  code={`-- This is a one-line comment
CREATE TABLE users (
    user_id INT, -- Comment on a column
    username VARCHAR(50)
);`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3">2 - تعليقات العديد من الأسطر</h3>
            <p className="style_divv"> 
                تستخدم لإضافة تعليق عبر عدة أسطر.
            <CodeHighlighter  code={`/*
    This is a 
    comment Multi-line
*/
CREATE TABLE orders (
    order_id INT,
    product_id INT,
    quantity INT
);`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
        </article>
        <article>  
            <h2 className="title-h2 mt-4" id="data-types"> 6 - أنواع بيانات المستخدم .</h2>
            <p className="style_divv">
                MySQL يدعم مجموعة متنوعة من أنواع البيانات التي يمكن استخدامها لتحديد نوع القيم التي يمكن تخزينها في الجداول. فيما يلي بعض أنواع البيانات الشائعة في MySQL
                <CodeHighlighter  code={"DROP DATABASE database_name;"} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 1 - INTEGER (INT)</h3>
            <p  className="style_divv">
                 يُستخدم لتخزين الأرقام الصحيحة (الأعداد الصحيحة) بدون أجزاء عشرية
                <CodeHighlighter  code={`CREATE TABLE example_table ( id INT , age INT );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 2 - VARCHAR</h3>
            <p  className="style_divv">
                يُستخدم لتخزين السلاسل النصية (النصوص) بطول متغير (حتى حد معين)
                <CodeHighlighter  code={`CREATE TABLE example_table ( name VARCHAR(50), address VARCHAR(255) );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 3 - DECIMAL</h3>
            <p  className="style_divv">
                يُستخدم لتخزين الأرقام العشرية (الأعداد الكسرية).
                <CodeHighlighter  code={`CREATE TABLE example_table ( price DECIMAL(10, 2) );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 4 - DATE</h3>
            <p  className="style_divv">
                يُستخدم لتخزين التواريخ.
                <CodeHighlighter  code={`CREATE TABLE example_table ( birthdate DATE );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 5 - TIME</h3>
            <p  className="style_divv">
                يُستخدم لتخزين الأوقات.
                <CodeHighlighter  code={`CREATE TABLE example_table ( log_time TIME );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 6 - BOOLEAN</h3>
            <p  className="style_divv">
                يُستخدم لتخزين القيم الصحيحة أو الخاطئة (صح أو خطأ).
                <CodeHighlighter  code={`CREATE TABLE example_table ( is_active BOOLEAN );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 7 - CHAR</h3>
            <p  className="style_divv">
                يُستخدم لتخزين السلاسل النصية بطول ثابت. يتم تحديد الطول عند إنشاء الجدول، ويتم ملء القيمة بواسطة مسافات إضافية إذا كانت القيمة أقل من الطول المحدد.
                <CodeHighlighter  code={`CREATE TABLE example_table ( code CHAR(5) );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 8 - ENUM</h3>
            <p  className="style_divv">
                يُستخدم لتخزين قائمة ثابتة من القيم. يمكن تحديد القيم المسموح بها عند إنشاء الجدول.
                <CodeHighlighter  code={`CREATE TABLE example_table ( status ENUM('active', 'inactive', 'pending') );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 9 - TEXT</h3>
            <p  className="style_divv">
                 يُستخدم لتخزين نصوص طويلة، ويمكن أن يكون لها حجم غير محدود. 
                <CodeHighlighter  code={`CREATE TABLE example_table ( description TEXT );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 10 - BLOB</h3>
            <p  className="style_divv">
                يُستخدم لتخزين بيانات ثنائية كبيرة مثل الصور والملفات.
                <CodeHighlighter  code={`CREATE TABLE example_table ( image BLOB );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 11 - DATETIME</h3>
            <p  className="style_divv">
                يُستخدم لتخزين التواريخ والأوقات.
            </p>
            <CodeHighlighter  code={`CREATE TABLE example_table ( creation_time DATETIME );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            <h3 className="title-h3"> 12 - INT UNSIGNED</h3>
            <p  className="style_divv">
                يستخدم لتخزين الأعداد الصحيحة بشكل إيجابي فقط (بدون قيم سالبة).
                <CodeHighlighter  code={`CREATE TABLE example_table ( quantity INT UNSIGNED );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 13 - FLOAT و DOUBLE</h3>
            <p  className="style_divv">
                تُستخدم لتخزين الأرقام العائمة (الأعداد ذات الفاصلة العائمة).
                <CodeHighlighter  code={`CREATE TABLE example_table ( price FLOAT, temperature DOUBLE );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 14 - JSON</h3>
            <p  className="style_divv">
                يستخدم لتخزين البيانات بتنسيق JSON.
                <CodeHighlighter  code={`CREATE TABLE example_table ( data JSON );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 15 - GEOMETRY</h3>
            <p  className="style_divv">
                يستخدم لتخزين البيانات المكانية والهندسية مثل النقاط والخطوط والمضلعات.
                <CodeHighlighter  code={`CREATE TABLE example_table ( location GEOMETRY );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 16 - SET</h3>
            <p  className="style_divv">
                يُستخدم لتخزين مجموعة من القيم، حيث يمكنك اختيار أكثر من قيمة من بين مجموعة محددة.
                <CodeHighlighter  code={`CREATE TABLE example_table ( permissions SET('read', 'write', 'execute') );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 17 - TIMESTAMP</h3>
            <p  className="style_divv">
                يُستخدم لتخزين التواريخ والأوقات، ويتم تخزينه بتنسيق خاص يعكس الزمن بتوقيت UTC.
                <CodeHighlighter  code={`CREATE TABLE example_table ( last_updated TIMESTAMP );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 18 - BIT</h3>
            <p  className="style_divv">
                يُستخدم لتخزين القيم الثنائية (0 أو 1) ويمكن أيضًا تعريفه بحيث يحتفظ بعدد محدد من البتات.
                <CodeHighlighter  code={`CREATE TABLE example_table ( flags BIT(8) );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h3 className="title-h3"> 19 - YEAR</h3>
            <p  className="style_divv">
                يُستخدم لتخزين السنوات، حيث يمكن تحديد القيمة بأربعة أرقام أو اثنين فقط (مثل 2022 أو 22).
                <CodeHighlighter  code={`CREATE TABLE example_table ( graduation_year YEAR );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="create-table"> 7 - إنشاء جدول .</h2>
            <p className="style_divv">
                في <b>MySQL،</b> يُستخدم البيان <b>CREATE TABLE</b> لإنشاء جدول جديد في قاعدة البيانات. فيما يلي البنية الأساسية لإنشاء جدول:
                <CodeHighlighter  code={`CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
    PRIMARY KEY (one_or_more_columns)
);`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
                لنقم بتفكيك مكونات هذا البيان :
                <ul>
                    <li className="mt-2"><b className="text-success">CREATE TABLE :</b> هو الأمر <b>SQL</b> المستخدم لإنشاء جدول.</li>
                    <li className="mt-2"><b className="text-success">table_name :</b> هو اسم الجدول الذي ترغب في إنشائه</li>
                    <li className="mt-2"><b className="text-success">(column1 datatype, column2 datatype, ...) :</b>هذا القسم يعرف أعمدة الجدول، مع أنواع بياناتها. يتم فصل كل عمود بواسطة فاصلة. يُحدد نوع البيانات نوع البيان الذي يمكن للعمود تخزينه (على سبيل المثال، INT للأعداد الصحيحة، VARCHAR للسلاسل النصية ذات الطول المتغير، DATE للتواريخ، وما إلى ذلك).</li>
                    <li className="mt-2"><b className="text-success">PRIMARY KEY (one_or_more_columns) :</b>هذا الجزء يعين عمودًا أو أعمدة أكثر كمفتاح أساسي للجدول. المفتاح الرئيسي يحدد بشكل فريد كل سجل في الجدول ويجب أن يحتوي على قيم فريدة. يمكنك تحديد مفتاح أساسي واحد فقط لكل جدول.</li>
                </ul>
            </p>
            <div className="mital"> متال 1 : </div>
            <img src={images.mysql_create_table} className="w-100" />
            <div className="mital"> متال 2 : </div>
            <img src={images.mysql_create_table2} className="w-100" />
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="drop-table"> 8 - حذف جدول .</h2>
            <p className="style_divv">
                لحذف جدول في <b>MySQL</b>، يُستخدم البيان <b>DROP TABLE</b>. إليك كيفية استخدامه:
                <CodeHighlighter  code={`DROP TABLE table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital"> متال : </div>
            <img src={images.mysql_drop_table} className="w-100" />
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="insert-row"> 9 - أمر إضافة سطر جديد في الجدول .</h2>
            <p className="style_divv">
                لإضافة سطر جديد إلى جدول في <b>MySQL،</b> يُستخدم الأمر <b>INSERT INTO</b> . إليك كيفية استخدامه:
                <CodeHighlighter  code={`INSERT INTO table_name (
    column1, 
    column2, 
    column3, ...
) VALUES ( value1 , value2 , value3 , ...);`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
                أو 
                <CodeHighlighter  code={`INSERT INTO table_name VALUES (value1, value2, value3, ...);`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`USE my_database;

INSERT INTO student (id, nom, ville) values (2000000, 'fatah', 'marakech');
INSERT INTO student (id, nom, ville) values (2000001, 'mouad' ,'sidi slimane');
INSERT INTO student (id, nom, ville) values (2000002 ,'malak' ,'casa blanca');
INSERT INTO student (id, nom, ville) values (2000003, 'louae', 'sidi hya');
INSERT INTO student (id, nom, ville) values (2000004, 'manal', 'taroudant');`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="select-database"> 10 - تحديد قاعدة البيانات المراد التعامل معها .</h2>
            <p className="style_divv">
                في <b>MySQL</b>، لتحديد قاعدة البيانات، يمكنك استخدام البيان USE. إليك الصياغة الأساسية:
                <CodeHighlighter  code={`USE database_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>    
                <ul>
                    <li><b className="text-success">USE :</b> هذا هو أمر SQL المستخدم لتحديد قاعدة البيانات المعينة.</li>
                    <li><b className="text-success">database_name :</b> هذا هو اسم قاعدة البيانات التي تريد الانتقال إليها.</li>
                </ul>
            </p>            
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="retrieving-data-from-table"> 11 - جلب البيانات من جدول .</h2>
            <p className="style_divv">
                في <b>MySQL،</b> يُستخدم البيان <b>SELECT</b> لاسترجاع البيانات من جدول أو أكثر. إليك بنية الأساسية لبيان SELECT:
                <CodeHighlighter  code={`SELECT column1, column2, ... FROM table_name`} language="sql" addclassName="mt-3 mb-3" copie={true}/>    
                <ul>
                    <li><b className="text-success">SELECT :</b> هذا هو أمر SQL المستخدم لاسترجاع البيانات من قاعدة البيانات.</li>
                    <li><b className="text-success">column1 , column2, ... :</b> هذه هي الأعمدة التي ترغب في استرجاعها في مجموعة النتائج. يمكنك استخدام * لاختيار جميع الأعمدة.</li>
                    <li><b className="text-success">FROM :</b> اسم_الجدول: هذا يحدد الجدول من الذي تريد استرجاع البيانات.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`USE my_database;

INSERT INTO student (id, nom, ville) values (2000000, 'fatah', 'marakech');
INSERT INTO student (id, nom, ville) values (2000001, 'mouad' ,'sidi slimane');
INSERT INTO student (id, nom, ville) values (2000002 ,'malak' ,'casa blanca');
INSERT INTO student (id, nom, ville) values (2000003, 'louae', 'sidi hya');
INSERT INTO student (id, nom, ville) values (2000004, 'manal', 'taroudant');

SELECT id, nom, ville FROM student;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>    
            <table dir="ltr" className="table"> 
                <thead className="bg-secondary">
                    <tr> <th>id</th> <th>nom</th> <th>ville</th> </tr>
                </thead>
                <tbody>
                    <tr> <td>2000000</td> <td>fatah</td> <td>marakech</td> </tr>
                    <tr> <td>2000001</td> <td>mouad</td> <td>sidi slimane</td> </tr>
                    <tr> <td>2000002</td> <td>malak</td> <td>casa blanca</td> </tr>
                    <tr> <td>2000003</td> <td>louae</td> <td>sidi hya</td> </tr>
                    <tr> <td>2000004</td> <td>manal</td> <td>taroudant</td> </tr>
                </tbody>
            </table>
        </article>
        <article>
        <h2 className="title-h2 mt-4" id="auto-increment"> 12 - الترقيم التلقائي .</h2>
            <p className="style_divv">

            </p>
            
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_9} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_10} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_11} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_12} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_13} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_14} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_15} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_16} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_17} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_18} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_19} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_20} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_21} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_22} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_23} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_24} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_25} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_26} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_27} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_28} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_29} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_31} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_32} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_33} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_34} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_35} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_36} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_37} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_38} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_39} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_40} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_41} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_42} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_43} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_44} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_45} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_46} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_47} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_48} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_49} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_50} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_51} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_52} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_53} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_54} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_54_5} className="w-100"/>
                <p className="alert alert-warning"><em>Skip 6 rows and return 3 rows </em></p>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_55} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_56} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_57} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_58} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_when_then} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.Relationships_between_tables_0} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.Relationships_between_tables_1} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.Relationships_between_tables_2} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.Relationships_between_tables_3} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.select_4_table} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.select_try_table} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.select_try_table2} className="w-100"/>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL__1} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_1_5} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_1_6} className="w-100"/>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_1_7} className="w-100"/>
                <p className="alert alert-warning">
                    <em> REGEXP so powerfull for search for string in<br/>in this exemple<br/> <b>WHERE last_name LIKE '%field%'</b> <b><b>{"<"}=={">"}</b></b> <b>WHERE last_name REGEXP 'field'</b> </em>
                </p>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_1_8} className="w-100"/>
                <p className="alert alert-warning"><em> in this exemple will return just string <b><u>start</u></b> with <b>field</b> </em></p>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_1_9} className="w-100"/>
                <p className="alert alert-warning"><em> in this exemple will return just string <b><u>end</u></b> with <b>field</b> </em></p>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_1_91} className="w-100"/>
                <p className="alert alert-warning"><em> in this exemple will return just string <b><u>content</u></b> with <b>field</b> or <b>mac</b> </em></p>
            </div>
            <div className="w-100 border border-primary border-2 my-4 rounded"> 
                <img src={images.SQL_0} className="w-100"/>
            </div>
        </article>
    </section>
</main>
    )
}