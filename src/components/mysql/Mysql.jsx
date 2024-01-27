import images  from "./imagesMysql"
import { CodeHighlighter  } from "../path";

export default function Sql(props){
    const arrays = props.sql_list.map(e => <li className="p-0 m-0 list-group-item">
        <a  href={`/mysql/${e.toLowerCase().replace(/\s/g, '-')}`}  className="p-2"> 
            <i className="fa-solid fa-caret-right me-1"></i>SQL {e}
        </a>
    </li>)
    
    return(
<main>
    <aside className="aside">
        <ul className="list-group m-0 p-0">
            {arrays}
            
        </ul>
    </aside>
    <section className="section-conetent">
        <h1 className="heading-style heading-style-css-color"> MYSQL </h1>
        <article className="mt-5">
            <h2 id="intro" className="title-h2"> 1 -مقدمة حول mysql </h2>
            <h3 className="title-h3"> 1 - ما هو mysql</h3>
            <p className="style_divv">
                <b>MySQL</b> هو نظام إدارة قواعد البيانات العلائقية <b>(RDBMS)</b>، وهو يعتبر من أحد أنظمة إدارة قواعد البيانات الأكثر استخدامًا في العالم. تم تطوير <b>MySQL</b> بواسطة شركة سون مايكروسيستمز <b>(Sun Microsystems)</b>، والتي فيما بعد أصبحت جزءًا من أوراكل كوربوريشن <b>(Oracle Corporation)</b> بعد استحواذها على سون مايكروسيستمز.<br/><br/>
                <b>MySQL</b> يستخدم لتخزين البيانات بطريقة منظمة في جداول تتكون من صفوف وأعمدة. يتيح <b>MySQL</b> للمستخدمين إجراء العديد من العمليات على البيانات مثل البحث والإدخال والتحديث والحذف. يتم التحكم في الوصول إلى البيانات باستخدام لغة <b>SQL (Structured Query Language)</b>، والتي تُستخدم لتعريف وإدارة البيانات في <b>MySQL</b> وغيرها من نظم إدارة قواعد البيانات العلائقية.<br/><br/>
                <b>MySQL</b> يعتبر مفتوح المصدر، مما يعني أنه يمكن للمستخدمين الحصول على رمز المصدر وتعديله واستخدامه بحرية. يُستخدم <b>MySQL</b> في تطبيقات الويب والتطبيقات الأخرى حول العالم، ويعد جزءًا أساسيًا في العديد من حلول إدارة البيانات.
            </p>
            <h3 className="title-h3"> 2 - ماذا يمكن أن تفعل mysql </h3>
            <p className="style_divv"> 
                <b>MySQL</b> يوفر مجموعة واسعة من الوظائف والإمكانيات لإدارة قواعد البيانات العلائقية. إليك بعض الأمور التي يمكن أن تفعلها باستخدام <b>MySQL</b>:<br/><br/>
                <ul>
                    <li> <b className="text-success">إنشاء قواعد بيانات:</b> يمكنك إنشاء قواعد بيانات لتنظيم وتخزين البيانات بطريقة منظمة. </li>
                    <li> <b className="text-success">إنشاء وإدارة الجداول:</b>  يمكنك إنشاء جداول داخل قواعد البيانات لتخزين معلوماتك. يمكنك أيضًا تعديل وحذف الجداول حسب الحاجة. </li>
                    <li> <b className="text-success">إدارة البيانات:</b> يتيح لك <b>MySQL</b> إدخال وتحديث واستعراض وحذف البيانات في الجداول باستخدام اللغة الهيكلية المستعلقة <b>SQL</b>.</li>
                    <li> <b className="text-success">الاستعلام والبحث:</b> يمكنك استخدام <b>SQL</b> لكتابة استعلامات معقدة لاسترجاع البيانات المطلوبة من الجداول.</li>
                    <li> <b className="text-success">الفهرسة:</b> يمكنك إنشاء فهارس على الحقول لتسريع عمليات البحث والاستعلام.</li>
                    <li> <b className="text-success">تحديثات وحذف البيانات:</b> يمكنك تحديث البيانات الموجودة في الجداول أو حذفها حسب الشروط التي تحددها.</li>
                    <li> <b className="text-success">: يقدم</b>   توفير أمان البيانات <b>MySQL</b> ميزات أمان متقدمة مثل تحكم في الوصول وتشفير البيانات لضمان حماية البيانات.</li>
                    <li> <b className="text-success">التعامل مع المؤشرات والتركيبات:</b> يمكنك إنشاء وإدارة المؤشرات لتحسين أداء استعلاماتك وعمليات البحث.</li>
                    <li> <b className="text-success">التعامل مع العمليات المتقدمة:</b> يتيح <b>MySQL</b> إمكانية التعامل مع العمليات المتقدمة مثل النسخ الاحتياطي والاسترجاع والتحكم في النسخ الاحتياطي.</li>
                    <li> <b className="text-success">التكامل مع لغات البرمجة:</b> يمكنك استخدام <b>MySQL</b> كجزء من تطبيقات الويب والبرامج باستخدام لغات البرمجة المختلفة مثل <b>PHP</b>، <b>Python</b>، <b>Java</b>، وغيرها.</li>
                </ul>
            </p>
            <h3 className="title-h3">3 - RDBMS</h3>
            <p className="style_divv"> 
                <b>RDBMS</b> تعني "نظام إدارة قواعد البيانات العلائقية"، وهو نوع من أنواع أنظمة إدارة قواعد البيانات <b>(DBMS)</b>. يركز <b>RDBMS</b> على إدارة البيانات بطريقة تعتمد على العلاقات بين المعلومات وتنظيمها في جداول.<br/><br/>
                السمة الرئيسية لنظام إدارة قواعد البيانات العلائقي هي استخدام الجداول لتخزين البيانات، حيث تكون البيانات مُنظمة في صفوف وأعمدة. تستخدم هذه الجداول مفتاحًا رئيسيًا لربط الصفوف ببعضها البعض بناءً على علاقات محددة.<br/><br/>
                بعبارة أخرى، يتيح <b>RDBMS</b> للمستخدمين إنشاء قواعد بيانات تحتوي على جداول مترابطة تعكس العلاقات بين الكائنات والمفاهيم في العالم الحقيقي. يُستخدم لغة <b>SQL (Structured Query Language)</b> كواجهة للتفاعل مع <b>RDBMS</b>، وهي لغة تسمح بتحديد واسترجاع البيانات، وإدخال وتحديث المعلومات.<br/><br/>
                الأمثلة على أنظمة إدارة قواعد البيانات العلائقية تشمل <b>MySQL</b>، و <b>Oracle Database</b>، و <b>Microsoft SQL Server</b> و <b>PostgreSQL،</b> وغيرها. تستخدم هذه الأنظمة على نطاق واسع في التطبيقات والأنظمة التي تتطلب تخزين واسترجاع البيانات بشكل فعّال وهيكلي.
            </p>
        </article>
        <article>
            <h2 className="title-h2" id="install-mysql"> 2 - تثبيت mysql على windows</h2>
            <ul><li><a href='https://www.youtube.com/watch?v=5OdVJbNCSso' target="_blanck">أول 4 دقائق لتثبيت MYSQL</a></li></ul>
            <h3 className="title-h3">انتقل إلى الرابط <a href="https://www.mysql.com/" target="_blanck"> https://www.mysql.com/ </a> لتثبيت mysql : </h3>
            <img src={images.mysql_install1} className="w-100 mt-2" alt="exemple"/>
            <h3 className="title-h3"> انقر على DOWNLOADS</h3>
            <img src={images.mysql_install2} className="w-100 mt-2" alt="exemple"/>
            <h3 className="title-h3"> انتقل الصفحة إلى الأسفل تم انقر على <bdi>MySQL Community (GPL) Downloads</bdi></h3>
            <img src={images.mysql_install3} className="w-100 mt-2" alt="exemple"/>
            <h3 className="title-h3"> انقر على MySQL Installer for Windows</h3>
            <img src={images.mysql_install4} className="w-100 mt-2" alt="exemple"/>
            <h3 className="title-h3"> حدد Microsoft Windows و انقر على Download </h3>
            <img src={images.mysql_install5} className="w-100 mt-2" alt="exemple"/>
            <h3 className="title-h3"> انقر على No thanks, just start my download.</h3>
            <img src={images.mysql_install6} className="w-100 mt-2" alt="exemple"/>
            <h3 className="title-h3">  انتقل إلى الملف الذي تم تنزيله و شغله. </h3>
            <img src={images.mysql_install7} className="w-100 mt-2" alt="exemple"/>
            <img src={images.mysql_install8} className="w-100 mt-2" alt="exemple"/>            
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="create-database"> 3 - إنشاء قاعدة بيانات جديدة .</h2>
            <p className="style_divv">
                الأمر <b>CREATE DATABASE</b> يستخدم لإنشاء قاعدة بيانات جديدة في نظام إدارة قواعد البيانات العلائقية <b>(RDBMS)</b>. 
                <CodeHighlighter  code={"CREATE DATABASE database_name;"} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital">متال : </div>
            <CodeHighlighter  code={"CREATE DATABASE my_db;"} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.mysql_create_db1} className="w-100" alt="exemple"/>
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
            <img src={images.mysql_drop_db} className="w-100" alt="exemple"/>
            <ul className="mt-3"><li>في هذا المثال، <b>"my_db"</b> هو اسم قاعدة البيانات التي تريد حذفها. يجب أن تكون متأكدًا تمامًا من القاعدة التي تود حذفها قبل تنفيذ هذا الأمر، لأنه سيؤدي إلى حذف كل البيانات في تلك القاعدة دون إمكانية استعادتها. </li></ul>
        </article>
        <article>  
            <h2 className="title-h2 mt-4" id="comments"> 5 - التعليقات .</h2>
            <p className="style_divv">
                في <b>MySQL</b>، يمكنك إضافة تعليقات <b>(comments)</b> إلى أوامر <b>SQL</b> لتوفير شرح أو وصف إضافي حول الجداول أو الأعمدة أو أي أمر <b>SQL</b> آخر. تعليقات <b>SQL</b> تكون مفيدة للتوثيق وفهم الشيفرة ويمكن أن تساعد المطورين الآخرين أو نفسك في المستقبل عند فحص الشيفرة. هناك عدة طرق لإضافة تعليقات في <b>MySQL</b>
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
                <b>MySQL</b> يدعم مجموعة متنوعة من أنواع البيانات التي يمكن استخدامها لتحديد نوع القيم التي يمكن تخزينها في الجداول. فيما يلي بعض أنواع البيانات الشائعة في <b>MySQL</b>
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
                <CodeHighlighter  code={`CREATE TABLE example_table ( creation_time DATETIME );`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
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
                يستخدم لتخزين البيانات بتنسيق <b>JSON</b>.
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
            <h2 className="title-h2 mt-4" id="select-database"> 7 - تحديد قاعدة البيانات المراد التعامل معها .</h2>
            <p className="style_divv">
                في <b>MySQL</b>، لتحديد قاعدة البيانات، يمكنك استخدام البيان <b>USE</b>. إليك الصياغة الأساسية:
                <CodeHighlighter  code={`USE database_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>    
                <ul>
                    <li><b className="text-success">USE :</b> هذا هو أمر <b>SQL</b> المستخدم لتحديد قاعدة البيانات المعينة.</li>
                    <li><b className="text-success">database_name :</b> هذا هو اسم قاعدة البيانات التي تريد الانتقال إليها.</li>
                </ul>
            </p>            
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="create-table"> 8 - إنشاء جدول .</h2>
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
                    <li className="mt-2"><b className="text-success">(column1 datatype, column2 datatype, ...) :</b>هذا القسم يعرف أعمدة الجدول، مع أنواع بياناتها. يتم فصل كل عمود بواسطة فاصلة. يُحدد نوع البيانات نوع البيان الذي يمكن للعمود تخزينه (على سبيل المثال، <b>INT</b> للأعداد الصحيحة، <b>VARCHAR</b> للسلاسل النصية ذات الطول المتغير، <b>DATE</b> للتواريخ، وما إلى ذلك).</li>
                    <li className="mt-2"><b className="text-success">PRIMARY KEY (one_or_more_columns) :</b>هذا الجزء يعين عمودًا أو أعمدة أكثر كمفتاح أساسي للجدول. المفتاح الرئيسي يحدد بشكل فريد كل سجل في الجدول ويجب أن يحتوي على قيم فريدة. يمكنك تحديد مفتاح أساسي واحد فقط لكل جدول.</li>
                </ul>
            </p>
            <div className="mital"> متال 1 : </div>
            <img src={images.mysql_create_table} className="w-100" alt="exemple"/>
            <div className="mital"> متال 2 : </div>
            <img src={images.mysql_create_table2} className="w-100" alt="exemple"/>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="drop-table"> 9 - حذف جدول .</h2>
            <p className="style_divv">
                لحذف جدول في <b>MySQL</b>، يُستخدم البيان <b>DROP TABLE</b>. إليك كيفية استخدامه:
                <CodeHighlighter  code={`DROP TABLE table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital"> متال : </div>
            <img src={images.mysql_drop_table} className="w-100" alt="exemple"/>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="insert-row"> 10 - أمر إضافة سطر جديد في الجدول .</h2>
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

CREATE TABLE student ( 
    id INT(9),
    nom VARCHAR(50),
    ville VARCHAR(50)
);

INSERT INTO student (id, nom, ville) values (2000000, 'fatah', 'marakech');
INSERT INTO student (id, nom, ville) values (2000001, 'mouad' ,'sidi slimane');
INSERT INTO student (id, nom, ville) values (2000002 ,'malak' ,'casa blanca');
INSERT INTO student (id, nom, ville) values (2000003, 'louae', 'sidi hya');
INSERT INTO student (id, nom, ville) values (2000004, 'manal', 'taroudant');`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="auto-increment"> 11 - الترقيم التلقائي .</h2>
            <p className="style_divv">
                في <b>MySQL</b>، يمكنك تحقيق الترقيم التلقائي باستخدام خاصية <b>AUTO_INCREMENT</b> مع عمود يكون هو المفتاح الرئيسي للجدول. يتيح ذلك لك تعيين قيم فريدة ومتتابعة لهذا العمود بدون الحاجة إلى تحديدها يدويًا، مما يُسهل إدارة السجلات.<br/><br/>
                الصياغة الأساسية لاستخدام <b>AUTO_INCREMENT</b> في <b>MySQL</b>:
                <CodeHighlighter  code={`CREATE TABLE table_name (
    column1 datatype AUTO_INCREMENT PRIMARY KEY,
    column2 datatype,
    ...
);`} language="sql" addclassName="mt-3 mb-3" copie={true}/>    
                <ul>
                    <li><b className="text-success">AUTO_INCREMENT :</b> يُستخدم لتحديد أن القيمة في هذا العمود ستزداد تلقائيًا وفقًا لترتيب متسلسل.</li>
                    <li><b className="text-success">PRIMARY KEY :</b> يحدد أن هذا العمود هو المفتاح الرئيسي للجدول.</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`USE my_database;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");`} language="sql" addclassName="mt-3 mb-3" copie={true}/>    
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="retrieving-data-from-table"> 12 - جلب البيانات من جدول .</h2>
            <p className="style_divv">
                في <b>MySQL،</b> يُستخدم البيان <b>SELECT</b> لاسترجاع البيانات من جدول أو أكثر. إليك بنية الأساسية لبيان <b>SELECT</b>:
                <CodeHighlighter  code={`SELECT column1, column2, ... FROM table_name`} language="sql" addclassName="mt-3 mb-3" copie={true}/>    
                <ul>
                    <li><b className="text-success">SELECT :</b> هذا هو أمر SQL المستخدم لاسترجاع البيانات من قاعدة البيانات.</li>
                    <li><b className="text-success">column1 , column2, ... :</b> هذه هي الأعمدة التي ترغب في استرجاعها في مجموعة النتائج. يمكنك استخدام * لاختيار جميع الأعمدة.</li>
                    <li><b className="text-success">FROM :</b> اسم_الجدول: هذا يحدد الجدول من الذي تريد استرجاع البيانات.</li>
                </ul>
            </p>
            <div className="mital"> متال 1: </div>
            <CodeHighlighter  code={`USE my_database;
CREATE TABLE student ( 
    id INT(9),
    nom VARCHAR(50),
    ville VARCHAR(50)
);

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
            <div className="mital"> متال 2: </div>
            <CodeHighlighter  code={`USE my_database;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");

SELECT * FROM users ;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <table dir="ltr" className="table"> 
                <thead className="bg-secondary">
                    <tr> <th>user_id</th> <th>username</th> <th>email</th> </tr>
                </thead>
                <tbody>
                    <tr> <td>1</td> <td>Reda Eskouni</td> <td>reda@gmail.com</td> </tr>
                    <tr> <td>2</td> <td>AMAL ...</td> <td>amal@gmail.com</td> </tr>
                    <tr> <td>3</td> <td>Name3 ...</td> <td>Name3@gmail.com</td> </tr>
                    <tr> <td>4</td> <td>Name4 ...</td> <td>Name4@gmail.com</td> </tr>
                    <tr> <td>5</td> <td>Name5 ...</td> <td>Name5@gmail.com</td> </tr>
                    <tr> <td>6</td> <td>Name6 ...</td> <td>Name6@gmail.com</td> </tr>
                    <tr> <td>7</td> <td>Name7 ...</td> <td>Name7@gmail.com</td> </tr>
                </tbody>
            </table>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="merge-columns-while-retrieving"> 13 - دمج الأعمدة أثناء الاسترجاع .</h2>
            <h3 className="title-h3">1 - دمج النصوص (string)</h3>
            <p className="style_divv">
                في <b>MySQL</b>، يمكنك دمج أو توحيد الأعمدة أثناء استرجاع البيانات باستخدام وظيفة <b>CONCAT</b>. تُستخدم وظيفة <b>CONCAT</b> لدمج قيم اثنين أو أكثر من الأعمدة في سلسلة واحدة. فيما يلي الصيغة الأساسية:
                <CodeHighlighter  code={`SELECT CONCAT(column1, column2, ...) AS merged_column
FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
                <ul>
                    <li><b className="text-success">CONCAT(column1, column2, ...) :</b> تقوم هذه الوظيفة بدمج قيم الأعمدة المحددة.</li>
                    <li><b className="text-success">AS merged_column :</b> يُعين هذا الجزء اسمًا بديلاً للنتيجة باعتبارها عمودًا جديدًا يُسمى merged_column. يمكنك تخصيص الاسم بحسب تفضيلك.</li>
                    <li><b className="text-success">FROM table_name :</b> يحدد الجدول الذي تريد استرجاع البيانات منه</li>
                </ul>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`USE my_database;

CREATE TABLE student ( 
    id INT(9),
    nom VARCHAR(50),
    ville VARCHAR(50)
);

INSERT INTO student (id, nom, ville) values (2000000, 'fatah', 'marakech');
INSERT INTO student (id, nom, ville) values (2000001, 'mouad' ,'sidi slimane');
INSERT INTO student (id, nom, ville) values (2000002 ,'malak' ,'casa blanca');
INSERT INTO student (id, nom, ville) values (2000003, 'louae', 'sidi hya');
INSERT INTO student (id, nom, ville) values (2000004, 'manal', 'taroudant');

SELECT CONCAT("Name is : " , nom , ' ville is : ', ville) AS info FROM student;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <table dir="ltr" className="table"> 
                <thead className="bg-secondary">
                    <tr> <th>info </th> </tr>
                </thead>
                <tbody>
                    <tr> <td className="text-start p-2">Name is : fatah ville is : marakech</td> </tr>
                    <tr> <td className="text-start p-2">Name is : mouad ville is : sidi slimane</td> </tr>
                    <tr> <td className="text-start p-2">Name is : malak ville is : casa blanca</td> </tr>
                    <tr> <td className="text-start p-2">Name is : louae ville is : sidi hya</td> </tr>
                    <tr> <td className="text-start p-2">Name is : manal ville is : taroudant</td> </tr>
                </tbody>
            </table>
            <h3 className="title-h3">2 - دمج الأرقام (Num)</h3>
            <p className="style_divv">
                يمكنك استخدام العمليات الرياضية الأربعة (+ للجمع، - للطرح، * للضرب، / للقسمة) لإجراء عمليات رياضية بين الأعداد في استعلام <b>SQL</b>. هذا يمكن أن يكون مفيدًا عند العمل مع أعمدة تحتوي على قيم رقمية.<br/>
                فيما يلي مثال على كيفية استخدام العمليات الرياضية في استعلام <b>SQL</b>:
                <CodeHighlighter  code={`SELECT column1 + column2 + ... AS 'newly_column_name'`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`USE my_database;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");

SELECT 
	user_id ,
	10 + user_id AS add_10 ,
    10 - user_id AS subtraction_10 ,
    10 * user_id AS multiplication_10  ,
    10 / user_id AS division_10 
FROM users;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <table dir="ltr" className="table"> 
                <thead className="bg-secondary">
                    <tr> <th>user_id</th> <th>add_10</th> <th>subtraction_10</th> <th>multiplication_10</th> <th>division_10</th> </tr>
                </thead>
                <tbody>
                    <tr> <td className="text-start">1</td> <td className="text-start">11</td> <td className="text-start">9</td> <td className="text-start">10</td> <td className="text-start">10.0000</td> </tr>
                    <tr> <td className="text-start">2</td> <td className="text-start">12</td> <td className="text-start">8</td> <td className="text-start">20</td> <td className="text-start">5.0000</td> </tr>
                    <tr> <td className="text-start">3</td> <td className="text-start">13</td> <td className="text-start">7</td> <td className="text-start">30</td> <td className="text-start">3.3333</td> </tr>
                    <tr> <td className="text-start">4</td> <td className="text-start">14</td> <td className="text-start">6</td> <td className="text-start">40</td> <td className="text-start">2.5000</td> </tr>
                    <tr> <td className="text-start">5</td> <td className="text-start">15</td> <td className="text-start">5</td> <td className="text-start">50</td> <td className="text-start">2.0000</td> </tr>
                    <tr> <td className="text-start">6</td> <td className="text-start">16</td> <td className="text-start">4</td> <td className="text-start">60</td> <td className="text-start">1.6667</td> </tr>
                    <tr> <td className="text-start">7</td> <td className="text-start">17</td> <td className="text-start">3</td> <td className="text-start">70</td> <td className="text-start">1.4286</td> </tr>
                </tbody>
            </table>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="if-exists"> 14 - IF EXISTS .</h2>
            <p className="style_divv">
                في <b>MySQL</b>، يُستخدم الجملة <b>IF EXISTS</b> عادةً بالتزامن مع بعض البيانات لفحص وجود كائن قاعدة بيانات (مثل جدول، فهرس، أو مشغل) قبل تنفيذ عملية عليه. إذا كان الكائن موجودًا، يتم تنفيذ العملية؛ وإلا، يتم تجاوزها.
                <CodeHighlighter  code={`IF EXISTS (SELECT * FROM information_schema.some_table WHERE some_condition)
THEN
    -- Your SQL statement or block of code here
END IF;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
                <ul>
                    <li><b className="text-success">IF EXISTS:</b> هذا هو فحص شرطي لوجود شرط محدد في بيان SELECT.</li>
                    <li><b className="text-success">SELECT * FROM information_schema.some_table WHERE some_condition:</b> يقوم بيان SELECT بفحص ما إذا كان شرط معين قد تحقق في جدول معين داخل قاعدة بيانات <b>information_schema</b>. يمكنك تخصيص هذا الجزء بناءً على احتياجاتك.</li>
                    <li><b className="text-success">THEN :</b> إذا كان الشرط صحيحًا (أي، الكائن موجود)، يتم تنفيذ كتلة الشيفرة أو العبارة الـ <b>SQL</b> التالية.</li>
                    <li><b className="text-success">END IF :</b> يميز نهاية الكتلة الشرطية.</li>
                </ul>
                هذا النوع من الهيكل يُستخدم عادة في الإجراءات المخزنة أو <b>SQL</b> الدينامي حيث ترغب في تنفيذ الإجراءات شرطيًا استنادًا إلى وجود كائنات قاعدة البيانات معينة.<br/><br/>
                إذا كان لديك سيناريو محدد أو عملية معينة في الاعتبار، يرجى تقديم المزيد من التفاصيل، وسأقدم لك مثالًا يتناسب أكثر مع طلبك.
            </p>
            <h3 className="title-h3">1 - حذف الجدول إذا كان موجودًا .</h3>
            <p className="style_divv">
                سيؤدي هذا البيان إلى حذف الجدول فقط إذا كان موجودًا. إذا كان الجدول غير موجود، فلن يتم طرح أي خطأ.
                <CodeHighlighter  code={`DROP TABLE IF EXISTS table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3">2 - حذف قاعدة البيانات إذا كانت موجودة .</h3>
            <p className="style_divv">
                سيقوم هذا البيان بحذف قاعدة البيانات فقط إذا كانت موجودة. إذا كانت قاعدة البيانات غير موجودة، فلن يتم طرح أي خطأ.
                <CodeHighlighter  code={`DROP DATABASE IF EXISTS database_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="if-not-exists"> 15 - IF NOT EXISTS .</h2>
            <h3 className="title-h3"> 1 - إنشاء الجدول إذا لم يكن موجودًا .</h3>
            <p className="style_divv">
                في <b>MySQL</b>، يتم استخدام <b>IF NOT EXISTS</b> في كثير من الأحيان بالتزامن مع بعض البيانات لفحص ما إذا كان كائن قاعدة البيانات المحدد، مثل جدول أو قاعدة بيانات، غير موجود قبل تنفيذ عملية معينة. إليك كيف يمكنك استخدامه مع بيان <b>CREATE TABLE</b> كمثال:
                <CodeHighlighter  code={`CREATE TABLE IF NOT EXISTS table_name (
    column1 datatype,
    column2 datatype,
    ...
);`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h3 className="title-h3"> 2 - إنشاء قاعدة البيانات إذا لم تكن موجودة .</h3>
            <p className="style_divv">
                لإنشاء قاعدة بيانات في <b>MySQL</b> مع شرط التحقق مما إذا كانت غير موجودة بالفعل.
                <CodeHighlighter  code={`CREATE DATABASE IF NOT EXISTS db_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
        </article>
        <article>
            <h2 className="title-h2 mt-4" id="retrieve-data-with-conditions"> 16 - جلب البيانات محددة بشروط .</h2>
            <p className="style_divv">
                لاسترجاع البيانات باستخدام شروط في <b>MySQL</b>، يمكنك استخدام بيان <b>SELECT</b> مع شرط <b>WHERE</b>. الشرط <b>WHERE</b> يسمح لك بتصفية الصفوف بناءً على شرط محدد. إليك الصيغة الأساسية:
                <CodeHighlighter  code={`SELECT column1, column2, ...
FROM table_name
WHERE condition;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
    );

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");

SELECT * FROM users WHERE user_id > 4 OR username = "Reda Eskouni";`} language="sql" addclassName="mt-3 mb-3" copie={true}/>       
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>user_id</th> <th>username</th> <th>email</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">reda@gmail.com</td> </tr>
                <tr> <td className="text-start">5</td> <td className="text-start">Name5 ...</td> <td className="text-start">Name5@gmail.com</td> </tr>
                <tr> <td className="text-start">6</td> <td className="text-start">Name6 ...</td> <td className="text-start">Name6@gmail.com</td> </tr>
                <tr> <td className="text-start">7</td> <td className="text-start">Name7 ...</td> <td className="text-start">Name7@gmail.com</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="retrieve-data-with-sorting"> 17 - جلب البيانات مع ترتيبها .</h2>
        <p className="style_divv">
            في <b>MySQL</b> ، يمكنك استخدام البيان <b>SELECT</b> لاسترجاع البيانات من جدول ، ويمكنك استخدام الجملة <b>ORDER BY</b> لفرز النتائج. إليك البنية الأساسية:
            <CodeHighlighter  code={`SELECT column1 ، column2 ، ...
FROM table_name
ORDER BY column1 [ASC | DESC] ، column2 [ASC | DESC] ، ...;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <ul>
                <li><b className="text-success">SELECT :</b> يحدد الأعمدة التي تريد استرجاعها.</li>
                <li><b className="text-success">FROM :</b> يحدد الجدول من الذي ستتم استرجاع البيانات.</li>
                <li><b className="text-success">ORDER BY :</b> يحدد العمود (الأعمدة) التي يجب فرز مجموعة النتائج حسبها.</li>
                <li><b className="text-success">[ASC | DESC] :</b> كلمة اختيارية لتحديد ترتيب الفرز (تصاعدي أو تنازلي). ASC هو الافتراضي.</li>
            </ul>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;
-- Create the employees table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    age INT
);

-- Insert some sample data
INSERT INTO employees (employee_id, first_name, last_name, age) VALUES
(1, 'Reda', 'Eskouni', 30),
(2, 'Adil', 'Eskouni', 25),
(3, 'Mohamed', 'Eskouni', 35),
(4, 'Aya', 'Eskouni', 28),
(5, 'Mohsin', 'Brown', 32);

-- Retrieve and sort data
SELECT * FROM employees ORDER BY last_name ASC, age DESC;
SELECT * FROM employees ORDER BY last_name ASC;
SELECT * FROM employees ORDER BY age DESC;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <ul dir="ltr"><li><kbd>SELECT * FROM employees ORDER BY last_name ASC, age DESC;</kbd></li></ul>
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>employee_id</th> <th>first_name</th> <th>last_name</th> <th>age</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">5</td> <td className="text-start">Mohsin</td> <td className="text-start">Brown</td> <td className="text-start">32</td> </tr>
                <tr> <td className="text-start">3</td> <td className="text-start">Mohamed</td> <td className="text-start">Eskouni</td> <td className="text-start">35</td> </tr>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda</td> <td className="text-start">Eskouni</td> <td className="text-start">30</td> </tr>
                <tr> <td className="text-start">4</td> <td className="text-start">Aya</td> <td className="text-start">Eskouni</td> <td className="text-start">28</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">Adil</td> <td className="text-start">Eskouni</td> <td className="text-start">25</td> </tr>
            </tbody>
        </table>
        <ul dir="ltr"><li><kbd>SELECT * FROM employees ORDER BY last_name ASC ;</kbd></li></ul>
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>employee_id</th> <th>first_name</th> <th>last_name</th> <th>age</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">5</td> <td className="text-start">Mohsin</td> <td className="text-start">Brown</td> <td className="text-start">32</td> </tr>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda</td> <td className="text-start">Eskouni</td> <td className="text-start">30</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">Adil</td> <td className="text-start">Eskouni</td> <td className="text-start">25</td> </tr>
                <tr> <td className="text-start">3</td> <td className="text-start">Mohamed</td> <td className="text-start">Eskouni</td> <td className="text-start">35</td> </tr>
                <tr> <td className="text-start">4</td> <td className="text-start">Aya</td> <td className="text-start">Eskouni</td> <td className="text-start">28</td> </tr>
            </tbody>
        </table>
        <ul dir="ltr"><li><kbd>SELECT * FROM employees ORDER BY age DESC;</kbd></li></ul>
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>employee_id</th> <th>first_name</th> <th>last_name</th> <th>age</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">3</td> <td className="text-start">Mohamed</td> <td className="text-start">Eskouni</td> <td className="text-start">35</td> </tr>
                <tr> <td className="text-start">5</td> <td className="text-start">Mohsin</td> <td className="text-start">Brown</td> <td className="text-start">32</td> </tr>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda</td> <td className="text-start">Eskouni</td> <td className="text-start">30</td> </tr>
                <tr> <td className="text-start">4</td> <td className="text-start">Aya</td> <td className="text-start">Eskouni</td> <td className="text-start">28</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">Adil</td> <td className="text-start">Eskouni</td> <td className="text-start">25</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="retrieve-distinct-data"> 18 - جلب بيانات خالية من التكرار  .</h2>
        <p className="style_divv">
            في <b>MySQL</b> ، يمكنك استخدام الكلمة الرئيسية <b>DISTINCT</b> مع بيان <b>SELECT</b> لاسترجاع قيم فريدة من عمود معين أو مجموعة من الأعمدة. إليك البنية الأساسية:
            <CodeHighlighter  code={`SELECT DISTINCT column1، column2، ... FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <ul>
                <li>SELECT: يحدد الأعمدة التي تريد استرجاعها.</li>
                <li>DISTINCT: كلمة رئيسية لاسترجاع قيم فريدة.</li>
            </ul>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

-- Drop the employees table if exists
DROP TABLE IF EXISTS employees ;

-- Create the employees table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    department VARCHAR(50),
    position VARCHAR(50)
);

-- Insert some sample data
INSERT INTO employees (employee_id, first_name, last_name, department, position) VALUES
(1, 'Reda', 'Eskouni', 'HR', 'Manager'),
(2, 'Reda', 'Smith', 'IT', 'Developer'),
(3, 'Kamal', 'Toumi', 'HR', 'Assistant'),
(4, 'Emily', 'Davis', 'IT', 'Manager'),
(5, 'David', 'Brown', 'Finance', 'Accountant'),
(6, 'Amal', 'Eskouni', 'HR', 'Manager'),
(7, 'Aya', 'Smith', 'IT', 'Developer'),
(8, 'Alan', 'Johnson', 'HR', 'Assistant'),
(9, 'Emily', 'Davis', 'IT', 'Manager');

SELECT DISTINCT department, position FROM employees;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>department</th> <th>position</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">HR</td> <td className="text-start">Manager</td> </tr>
                <tr> <td className="text-start">IT</td> <td className="text-start">Developer</td> </tr>
                <tr> <td className="text-start">HR</td> <td className="text-start">Assistant</td> </tr>
                <tr> <td className="text-start">IT</td> <td className="text-start">Manager</td> </tr>
                <tr> <td className="text-start">Finance</td> <td className="text-start">Accountant</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="merge-tables-into-one"> 19 - دمج الجداول في جدول واحد .</h2>
        <p className="style_divv">
            دمج الجداول في <b>MySQL</b> يتضمن عادة استخدام عاملي <b>UNION</b> أو <b>UNION ALL</b> لدمج نتائج اثنين أو أكثر من بيانات <b>SELECT</b>. يقوم المشغل <b>UNION</b> بإزالة الصفوف المكررة، بينما يحتفظ <b>UNION ALL</b> بجميع الصفوف بما في ذلك المكررة.
            <CodeHighlighter  code={`SELECT column1، column2، ...
FROM table1
UNION [ALL]
SELECT column1، column2، ...
FROM table2
[UNION [ALL] ...];`} language="sql" addclassName="mt-3 mb-3" copie={true}/>  
            <ul>
                <li><b>SELECT :</b> يحدد الأعمدة التي تريد استرجاعها.</li>
                <li><b>FROM :</b> يحدد الجدول من الذي ستتم استرجاع البيانات.</li>
                <li><b>UNION :</b> يدمج نتائج اثنين أو أكثر من بيانات SELECT.</li>
                <li><b>UNION ALL :</b> يدمج النتائج مع الاحتفاظ بالصفوف المكررة.</li>
            </ul> 
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

DROP TABLE IF EXISTS employees1 ;
DROP TABLE IF EXISTS employees2 ;

-- Create employees1 table
CREATE TABLE employees1 (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    department VARCHAR(50)
);

-- Insert some sample data into employees1
INSERT INTO employees1 (employee_id, first_name, last_name, department) VALUES
(1, 'Reda', 'Eskouni', 'HR'),
(2, 'Reda', 'Thami', 'IT'),
(3, 'Amal', 'Jhison', 'Finance');

-- Create employees2 table
CREATE TABLE employees2 (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    department VARCHAR(50)
);

-- Insert some sample data into employees2
INSERT INTO employees2 (employee_id, first_name, last_name, department) VALUES
(4, 'Adil', 'Davis', 'IT'),
(5, 'Malak', 'Brown', 'Marketing');


-- Merge data from employees1 and employees2 (remove duplicates)
SELECT employee_id, first_name, last_name, department
FROM employees1
UNION
SELECT employee_id, first_name, last_name, department
FROM employees2;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>employee_id</th> <th>first_name</th> <th>last_name</th> <th>department</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda</td>  <td className="text-start">Eskouni</td> <td className="text-start">HR</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">Reda</td>  <td className="text-start">Thami</td> <td className="text-start">IT</td> </tr>
                <tr> <td className="text-start">3</td> <td className="text-start">Amal</td>  <td className="text-start">Jhison</td> <td className="text-start">Finance</td> </tr>
                <tr> <td className="text-start">4</td> <td className="text-start">Adil</td>  <td className="text-start">Davis</td> <td className="text-start">IT</td> </tr>
                <tr> <td className="text-start">5</td> <td className="text-start">Malak</td> <td className="text-start">Brown</td> <td className="text-start">Marketing</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="delete-data-from-table"> 20 -  حذف البيانات من الجدول.</h2>
        <p className="style_divv">
            في <b>MySQL</b>، يمكنك استخدام بيان <b>DELETE</b> لإزالة السجلات من جدول بناءً على شروط معينة. إليك البنية الأساسية.
            <CodeHighlighter  code={`DELETE FROM table_name WHERE condition;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <ul>
                <li><b className="text-success">DELETE FROM :</b> يحدد الجدول الذي تريد حذف منه البيانات.</li>
                <li><b className="text-success">WHERE :</b> يحدد الشرط الذي يجب تحقيقه حتى يتم حذف السجلات.</li>
            </ul>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");

-- Deletes all rows where the condition True
DELETE FROM users WHERE user_id>3;

SELECT * FROM users;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>user_id</th> <th>username</th> <th>email</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">reda@gmail.com</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">AMAL ...</td> <td className="text-start">amal@gmail.com</td> </tr>
                <tr> <td className="text-start">3</td> <td className="text-start">Name3 ...</td> <td className="text-start">Name3@gmail.com</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="update-table-data"> 21 - تحديث البيانات المخزنة في الجدول .</h2>
        <p className="style_divv">
            ب <b>MySQL</b>، يمكنك استخدام بيان <b>UPDATE</b> لتعديل السجلات القائمة في جدول بناءً على شروط معينة. فيما يلي البنية الأساسية:
            <CodeHighlighter  code={`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <ul>
                <li><b className="text-success">UPDATE :</b> يحدد الجدول الذي سيتم تحديثه.</li>
                <li><b className="text-success">SET :</b> يسند قيمًا جديدة للأعمدة المحددة.</li>
                <li><b className="text-success">WHERE :</b> يحدد الشرط الذي يجب تحقيقه لحدوث التحديث. إذا حذفت عبارة WHERE، سيتم تحديث جميع الصفوف في الجدول.</li>
            </ul>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");

-- update email where user_id equal 3
UPDATE users SET email = 'update_email@example.com' WHERE user_id = 3;

SELECT * FROM users;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>user_id</th> <th>username</th> <th>email</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">reda@gmail.com</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">AMAL ...</td> <td className="text-start">amal@gmail.com</td> </tr>
                <tr> <td className="text-start">3</td> <td className="text-start">Name3 ...</td> <td className="text-start">update_email@example.com</td> </tr>
                <tr> <td className="text-start">4</td> <td className="text-start">Name4 ...</td> <td className="text-start">Name4@gmail.com</td> </tr>
                <tr> <td className="text-start">5</td> <td className="text-start">Name5 ...</td> <td className="text-start">Name5@gmail.com</td> </tr>
                <tr> <td className="text-start">6</td> <td className="text-start">Name6 ...</td> <td className="text-start">Name6@gmail.com</td> </tr>
                <tr> <td className="text-start">7</td> <td className="text-start">Name7 ...</td> <td className="text-start">Name7@gmail.com</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="limit-rows-returned"> 22 - تحديد عدد الصفوف المسترجعة من الجدول .</h2>
        <p className="style_divv">
           باستخدام العبارة <b>LIMIT</b> في <b>MySQL</b>، يمكنك تقييد عدد الصفوف المسترجعة من استعلام <b>SELECT</b>. يُستخدم هذا الأمر غالبًا لتقسيم النتائج أو لتحديد عدد الصفوف المسترجعة لأسباب أداء.
            <CodeHighlighter  code={`SELECT column1, column2, ...
FROM table_name
WHERE condition
LIMIT number_of_rows;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <ul>
                <li><b className="text-success">LIMIT :</b> يُحدد الحد الأقصى لعدد الصفوف التي سيتم استرجاعها.</li>
            </ul>
        </p>
        <div className="mital"> متال 1 : </div>
        <CodeHighlighter  code={`USE my_database;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");

SELECT * FROM users LIMIT 3; `} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>user_id</th> <th>username</th> <th>email</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">reda@gmail.com</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">AMAL ...</td> <td className="text-start">amal@gmail.com</td> </tr>
                <tr> <td className="text-start">3</td> <td className="text-start">Name3 ...</td> <td className="text-start">Name3@gmail.com</td> </tr>
            </tbody>
        </table>
        <div className="mital"> متال 2 : </div>
        <ul><li>سيقوم هذا الاستعلام بتجاوز أول 3 صفوف واسترجاع ال 3 صفوف التالية من جدول "users".</li></ul>
        <CodeHighlighter  code={`USE my_database;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO users VALUES ( Null , "Reda Eskouni" , "reda@gmail.com");
INSERT INTO users VALUES ( Null , "AMAL ..." , "amal@gmail.com");
INSERT INTO users VALUES ( Null , "Name3 ..." , "Name3@gmail.com");
INSERT INTO users VALUES ( Null , "Name4 ..." , "Name4@gmail.com");
INSERT INTO users VALUES ( Null , "Name5 ..." , "Name5@gmail.com");
INSERT INTO users VALUES ( Null , "Name6 ..." , "Name6@gmail.com");
INSERT INTO users VALUES ( Null , "Name7 ..." , "Name7@gmail.com");

SELECT * FROM users LIMIT 3 OFFSET 3;  `} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>user_id</th> <th>username</th> <th>email</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">4</td> <td className="text-start">Name4 ...</td> <td className="text-start">Name4@gmail.com</td> </tr>
                <tr> <td className="text-start">5</td> <td className="text-start">Name5 ...</td> <td className="text-start">Name5@gmail.com</td> </tr>
                <tr> <td className="text-start">6</td> <td className="text-start">Name6 ...</td> <td className="text-start">Name6@gmail.com</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="handling-null-fields"> 23 - التعامل مع الحقول الفارغة .</h2>
        <h3 className="title-h3">1 - ما هي الحقول الفارغة ز</h3>
        <p className="style_divv">
            الحقل الفارغ <b>(Null Value)</b> في قاعدة البيانات يشير إلى حقل لا يحتوي على قيمة محددة أو قيمة غير معروفة. يمثل الـ <b>Null</b> قيمة غير معرفة أو غير موجودة أو غير قابلة للتطبيق. يمكن أن تظهر القيمة <b>Null</b> في أي نوع من أنواع البيانات في قاعدة البيانات، سواء كانت أعدادًا أو سلاسل نصية أو تواريخ وما إلى ذلك.
        </p>
        <h3 className="title-h3">2 - تمثيل القيمة المفقودة أو غير المعروفة: </h3>
        <p className="style_divv">
            <b>Null</b> يستخدم لتمثيل حالات عدم المعرفة أو القيم المفقودة.
        </p>
        <h3 className="title-h3">3 - التحقق من الحقول الفارغة:</h3>
        <p className="style_divv">
            للتحقق مما إذا كان حقل معين فارغًا، يمكن استخدام <b>IS NULL</b> في جملة الاستعلام.
            <CodeHighlighter  code={`SELECT * FROM table_name WHERE column_name IS NULL;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            للتحقق من الحقول غير الفارغة، يمكن استخدام <b>IS NOT NULL</b>.
            <CodeHighlighter  code={`SELECT * FROM table_name WHERE column_name IS NOT NULL;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h3 className="title-h3">4 - تحديث الحقول الفارغة:</h3>
        <p className="style_divv">
            يمكن استخدام <b>UPDATE</b> مع <b>IS NULL</b> لتحديث الحقول الفارغة
            <CodeHighlighter  code={`UPDATE table_name SET column_name = 'new_value' WHERE column_name IS NULL;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <h3 className="title-h3">5 - استخدام دوال مثل COALESCE:</h3>
        <p className="style_divv">
            يمكن استخدام دوال مثل <b>COALESCE</b> لتحويل القيم الفارغة إلى قيم محددة.
            <CodeHighlighter  code={`SELECT COALESCE(column_name, 'default_value') AS cleaned_value FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            هذا يعيد قيمة افتراضية إذا كانت القيمة الأصلية فارغة.
        </p>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="retrieve-minimum-value-in-column"> 24 - استرجاع القيمة الدنيا في عمود معين .</h2>
        <p className="style_divv">
            لاسترجاع القيمة الدنيا في عمود معين، يمكنك استخدام دالة التجميع <b>MIN</b> في عبارة <b>SELECT</b>. إليك الصياغة الأساسية:
            <CodeHighlighter  code={`SELECT MIN(column_name) AS min_value
FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

-- Create the products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

-- Insert values into the products table
INSERT INTO products VALUES
(1, 'Laptop', 1200.00, 'Electronics'),
(2, 'Smartphone', 800.50, 'Electronics'),
(3, 'Headphones', 120.00, 'Electronics'),
(4, 'Book', 15.99, 'Books'),
(5, 'TV', 899.99, 'Electronics');

-- Retrieve the minimum price for products in the Electronics category
SELECT MIN(price) AS "min price Electronics" FROM products
WHERE category = 'Electronics';`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>min price Electronics</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">120.00</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="retrieve-maximum-value-in-column"> 25 - استرجاع القيمة القصوى في عمود معين .</h2>
        <p className="style_divv">
            لاسترجاع القيمة القصوى في عمود معين، يمكنك استخدام دالة التجميع <b>MAX</b> في عبارة <b>SELECT</b>. إليك الصياغة الأساسية:
            <CodeHighlighter  code={`SELECT MAX(column_name) AS max_value
FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

-- Create the products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

-- Insert values into the products table
INSERT INTO products VALUES
(1, 'Laptop', 1200.00, 'Electronics'),
(2, 'Smartphone', 800.50, 'Electronics'),
(3, 'Headphones', 120.00, 'Electronics'),
(4, 'Book', 15.99, 'Books'),
(5, 'TV', 899.99, 'Electronics');

-- Retrieve the maximum price for products in the Electronics category
SELECT MAX(price) AS "min price Electronics" FROM products
WHERE category = 'Electronics';`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>max price Electronics</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1200.00</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="count-rows-in-table"> 26 - احتساب عدد الصفوف في جدول .</h2>
        <p className="style_divv">
            لاحتساب عدد الصفوف في جدول، يمكنك استخدام دالة التجميع <b>COUNT</b> في عبارة <b>SELECT</b>. إليك الصياغة الأساسية:
            <CodeHighlighter  code={`SELECT COUNT(*) AS row_count
FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

-- Create the products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

-- Insert values into the products table
INSERT INTO products VALUES
(1, 'Laptop', 1200.00, 'Electronics'),
(2, 'Smartphone', 800.50, 'Electronics'),
(3, 'Headphones', 120.00, 'Electronics'),
(4, 'Book', 15.99, 'Books'),
(5, 'TV', 899.99, 'Electronics');

-- Count the number of rows in the products table
SELECT COUNT(*) AS "count rows" FROM products;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>count rows</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">5</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="sum-of-column-values"> 27 - حساب مجموع قيم العمود .</h2>
        <p className="style_divv">
            لحساب مجموع قيم العمود، يمكنك استخدام دالة التجميع <b>SUM</b> في عبارة <b>SELECT</b>. إليك الصياغة الأساسية:
            <CodeHighlighter  code={`SELECT SUM(column_name) AS sum_value FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

-- Create the products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

-- Insert values into the products table
INSERT INTO products VALUES
(1, 'Laptop', 1200.00, 'Electronics'),
(2, 'Smartphone', 800.50, 'Electronics'),
(3, 'Headphones', 120.00, 'Electronics'),
(4, 'Book', 15.99, 'Books'),
(5, 'TV', 899.99, 'Electronics');

SELECT SUM(price) AS "sum price" FROM products;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>sum price</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">3036.48</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="average-of-column-values"> 28 - حساب متوسط قيم العمود .</h2>
        <p className="style_divv">
            لحساب متوسط قيم العمود، يمكنك استخدام دالة التجميع <b>AVG</b> في عبارة <b>SELECT</b>. إليك الصياغة الأساسية:
            <CodeHighlighter  code={`SELECT AVG(column_name) AS average_value FROM table_name;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

-- Create the products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

-- Insert values into the products table
INSERT INTO products VALUES
(1, 'Laptop', 1200.00, 'Electronics'),
(2, 'Smartphone', 800.50, 'Electronics'),
(3, 'Headphones', 120.00, 'Electronics'),
(4, 'Book', 15.99, 'Books'),
(5, 'TV', 899.99, 'Electronics');

SELECT AVG(price) AS "average price" FROM products;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>average price</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">607.296000</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="aggregate-common-field-values"> 29 - تجميع قيم الحقول المشتركة في قاعدة البيانات .</h2>
        <p className="style_divv">
            تُستخدم وظائف التجميع في <b>MySQL</b> لأداء عمليات على مجموعة من القيم وإرجاع قيمة واحدة. تشمل وظائف التجميع الشائعة <b>COUNT</b> و <b>SUM</b> و <b>AVG</b> و <b>MIN</b> و <b>MAX</b>. لتجميع قيم الحقول المشتركة، يمكنك استخدام الجملة <b>GROUP BY</b> بالإضافة إلى هذه الوظائف.
            <CodeHighlighter  code={`SELECT column_name, AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name;
`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

-- droop table "products" if exists
DROP TABLE IF EXISTS products;

-- Create the "products" table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255),
    category VARCHAR(50)
);

-- Insert values into the "products" table
INSERT INTO products (product_id, product_name, category) VALUES
(1, 'Laptop', 'Electronics'),
(2, 'Smartphone', 'Electronics'),
(3, 'Desk Chair', 'Furniture'),
(4, 'Coffee Table', 'Furniture'),
(5, 'Running Shoes', 'Fashion'),
(6, 'T-shirt', 'Fashion');

-- Test the SELECT query
SELECT category, COUNT(category) as category_count
FROM products
GROUP BY category;
`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>category</th>  <th>category_count</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">Electronics</td> <td className="text-start">2</td> </tr>
                <tr> <td className="text-start">Furniture</td> <td className="text-start">2</td> </tr>
                <tr> <td className="text-start">Fashion</td> <td className="text-start">2</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="conditions-on-aggregated-fields"> 30 - تطبيق شروط على الحقول المجمعة .</h2>
        <p className="style_divv">
            يمكنك تطبيق شروط على الحقول المجمعة باستخدام جملة <b>HAVING</b> في <b>Mysql</b>. تُستخدم جملة <b>HAVING</b> لتصفية نتائج استعلام <b>GROUP BY</b> بناءً على شرط محدد.
            <CodeHighlighter  code={`SELECT column_name
FROM table_name
GROUP BY column_name
HAVING condition;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;

DROP TABLE IF EXISTS orders;

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    total_amount DECIMAL(10, 2)
);

INSERT INTO orders (order_id, customer_id, total_amount) VALUES
(1, 101, 150.50),
(2, 102, 200.75),
(3, 101, 50.25),
(4, 103, 300.00),
(5, 102, 100.00);

SELECT customer_id, SUM(total_amount) as total_spent
FROM orders
GROUP BY customer_id HAVING total_spent > 200;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>customer_id</th>  <th>total_spent</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">101</td> <td className="text-start">200.75</td> </tr>
                <tr> <td className="text-start">102</td> <td className="text-start">300.75</td> </tr>
                <tr> <td className="text-start">103</td> <td className="text-start">300.00</td> </tr>
            </tbody>
        </table>
    </article>    
    <article>  
        <h2 className="title-h2 mt-4" id="copy-data-to-another-table"> 31 - نسخ البيانات إلى جدول آخر .</h2>
        <p className="style_divv">
            في <b>MySQL</b>، يمكنك نسخ البيانات من جدول واحد إلى آخر باستخدام العبارة <b>INSERT INTO ... SELECT</b>. 
            <CodeHighlighter  code={`INSERT INTO destination_table (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM source_table
WHERE condition;`} language="sql" addclassName="mt-3 mb-3" copie={true}/> 
            <ul>
                <li><b className="text-success">destination_table :</b> الجدول الذي تريد نسخ البيانات إليه.</li>
                <li><b className="text-success">column1, column2, column3, : </b>  الأعمدة المحددة التي تريد نسخها. إذا كنت ترغب في نسخ جميع الأعمدة، يمكنك استخدام *.</li>
                <li><b className="text-success">source_table : </b> الجدول الذي تريد نسخ البيانات منه.</li>
                <li><b className="text-success">WHERE condition :</b>  اختياري. يحدد شرطًا لتصفية الصفوف التي تريد نسخها.</li>
            </ul>
        </p>
        <div className="mital"> متال : </div>
        <ul><li>لنفترض أن لديك جدولين، source_table و destination_table، وتريد نسخ جميع البيانات من source_table إلى destination_table :</li></ul>
        <CodeHighlighter  code={`INSERT INTO destination_table
SELECT * FROM source_table;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <ul><li> إذا أردت نسخ أعمدة محددة فقط : </li></ul>
        <CodeHighlighter  code={`INSERT INTO destination_table (column1, column2, column3)
SELECT column1, column2, column3 FROM source_table;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <ul><li> إذا كنت تريد نسخ صفوف محددة فقط استنادًا إلى شرط: </li></ul>
        <CodeHighlighter  code={`INSERT INTO destination_table
SELECT * FROM source_table
WHERE some_column = 'some_value';`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="set-default-value-for-column"> 32 - تعيين قيمة افتراضية لعمود في جدول .</h2>
        <p className="style_divv">
            لتعيين قيمة افتراضية لعمود في جدول <b>MySQL</b>، يمكنك استخدام كلمة <b>DEFAULT</b> في عبارة <b>ALTER TABLE</b>. إليك الصياغة الأساسية:
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;
DROP TABLE IF EXISTS employees ;

-- Create the employees table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary INT
);

-- Insert some test values
INSERT INTO employees (employee_id, employee_name, salary) VALUES
(1, 'Reda Eskouni', 60000),
(2, 'Amal', NULL),
(3, 'waeil', 55000),
(4, 'Alice', NULL);

UPDATE employees SET salary = 50000 WHERE salary IS NULL AND employee_id > 1;

SELECT * FROM employees;`} language="sql" addclassName="mt-3 mb-3" copie={true}/> 
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>employee_id</th>  <th>employee_name</th> <th>salary</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">60000</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">Amal</td> <td className="text-start">50000</td> </tr>
                <tr> <td className="text-start">3</td> <td className="text-start">waeil</td> <td className="text-start">55000</td> </tr>
                <tr> <td className="text-start">4</td> <td className="text-start">Alice</td> <td className="text-start">50000</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="case-condition"> 32 - تنفيذ منطق شرطي .</h2>
        <p className="style_divv">
            في <b>MySQL</b>، يتم استخدام عبارة <b>CASE</b> للمنطق الشرطي داخل الاستعلام. يسمح لك بتنفيذ إجراءات مختلفة بناءً على ظروف مختلفة. بناء الجملة الأساسي لبيان <b>CASE</b> كما يلي :
            <CodeHighlighter  code={`CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE default_result
END`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
            <ul>
                <li><b className="text-success">CASE :</b> كلمة رئيسية لبدء جملة CASE.</li>
                <li><b className="text-success">WHEN condition1 THEN result1 :</b> يحدد شرطًا والنتيجة المقابلة إذا كان هذا الشرط صحيحًا.</li>
                <li><b className="text-success">WHEN condition2 THEN result2 :</b> يمكن إضافة شروط إضافية والنتائج المقابلة.</li>
                <li><b className="text-success">ELSE default_result :</b> اختياري. يحدد النتيجة عندما لا يكون أي من الشروط السابقة صحيحًا.</li>
                <li><b className="text-success">END :</b> كلمة رئيسية لإنهاء جملة CASE.</li>
            </ul>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;
DROP TABLE IF EXISTS products ;

CREATE TABLE products (
    id INT PRIMARY KEY,
    product_name VARCHAR(255),
    quantity_in_stock INT
);

-- Insert sample data
INSERT INTO products (id, product_name, quantity_in_stock)
VALUES (1, 'Product A', 120),
    (2, 'Product B', 50),
    (3, 'Product C', 5),
    (4, 'Product D', 0);

-- Run the query to retrieve stock status
SELECT
    product_name,
    quantity_in_stock,
    CASE
        WHEN quantity_in_stock > 100 THEN 'In Stock'
        WHEN quantity_in_stock > 0 THEN 'Low Stock'
        ELSE 'Out of Stock'
    END AS stock_status
FROM
    products;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>product_name</th>  <th>quantity_in_stock</th> <th>stock_status</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">Product A</td>  <td className="text-start"> 120 </td> <td className="text-start">In Stock</td> </tr>
                <tr> <td className="text-start">Product B</td>  <td className="text-start"> 50 </td> <td className="text-start">Low Stock</td> </tr>
                <tr> <td className="text-start">Product C</td>  <td className="text-start"> 5 </td> <td className="text-start">Low Stock</td> </tr>
                <tr> <td className="text-start">Product D</td>  <td className="text-start"> 0 </td> <td className="text-start">Out of Stock</td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2 mt-4" id="relationships-between-tables"> 33 - العلاقات بين الجداول .</h2>
        <p className="style_divv">        
            ب <b>MySQL</b>، تتم إقامة العلاقات بين الجداول باستخدام المفاتيح. هناك عدة أنواع من العلاقات، ويتم تصنيفها استنادًا إلى كيفية ترتبط المفاتيح في جدول واحد بالمفاتيح في جدول آخر. المفاتيح الرئيسية والمفاتيح الخارجية تلعب دورًا حاسمًا في تحديد هذه العلاقات. 
        </p>
        <h3 className="title-h3">1 - علاقة واحد إلى واحد </h3>
        <p className="style_divv">
            في العلاقة واحد إلى واحد، يتوافق كل سجل في الجدول الأول بشكل دقيق مع سجل واحد في الجدول الثاني .<br/>
            هذه العلاقة تعني أن كل قيمة في الجدول, لا يمكن أن يستخدمها الجدول الآخر أكثر من مرة واحدة.
            عادةً، يشير مفتاح خارجي في جدول واحد إلى المفتاح الرئيسي في جدول آخر.
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;
DROP TABLE IF EXISTS users , user_profile ;

-- Create the user table
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255) UNIQUE
);

-- Create the user_profile table
CREATE TABLE user_profile (
    profile_id INT PRIMARY KEY,
    user_id INT UNIQUE,   -- FOREIGN KEY 
    full_name VARCHAR(255),
    email VARCHAR(255),
    -- Other profile columns
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- Insert data into the user table
INSERT INTO users (user_id, username) VALUES
    (1, 'reda-eskouni'),
    (2, 'kamal-el');

-- Insert data into the user_profile table
INSERT INTO user_profile (profile_id, user_id, full_name, email) VALUES
    (101, 1, 'Reda Eskouni', 'john.doe@example.com'),
    (102, 2, 'Kamal EL', 'jane.smith@example.com');
    
    
SELECT u.user_id, u.username, up.full_name, up.email
FROM users u JOIN user_profile up 
ON u.user_id = up.user_id;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th> user_id </th>  <th>username</th> <th>full_name</th> <th>email</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1</td> <td className="text-start">reda-eskouni</td> <td className="text-start">Reda Eskouni</td>  <td className="text-start">john.doe@example.com</td> </tr>
                <tr> <td className="text-start">2</td> <td className="text-start">kamal-el</td> <td className="text-start">Kamal EL</td> <td className="text-start">jane.smith@example.com</td> </tr>
            </tbody>
        </table>
        <h3 className="title-h3">2 - علاقة واحد إلى العديد </h3>
        <p className="style_divv">   
            في العلاقة واحد إلى العديد، يمكن لكل سجل في الجدول الأول أن يحتوي على سجلات متعلقة متعددة في الجدول الثاني، ولكن كل سجل في الجدول الثاني يتعلق بسجل واحد فقط في الجدول الأول.<br/>
            يتم وضع المفتاح الخارجي عادة في الجدول الذي يمثل الجانب "العديد".
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;
DROP TABLE IF EXISTS department , employee ;

CREATE TABLE department (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(255)
);

CREATE TABLE employee (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(255),
    department_id INT,
    -- عمود آخر للموظف
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

-- Insert data into the department table
INSERT INTO department (department_id, department_name) VALUES
    (1, 'developer'),
    (2, 'Information Technology');

-- Insert data into the employee table
INSERT INTO employee (employee_id, employee_name, department_id) VALUES
    (101, 'Reda Eskouni', 1),   -- John Smith works in Human Resources
    (102, 'Kamal El', 2),     -- Jane Doe works in Information Technology
    (103, 'Achraf El', 1); -- Alice Johnson works in Marketing
    
    
-- Retrieve employee information with department
SELECT e.employee_id, e.employee_name, d.department_name
FROM employee e JOIN department d 
ON e.department_id = d.department_id;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>employee_id</th>  <th>employee_name</th> <th>department_name</th>  </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">101</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">developer</td> </tr>
                <tr> <td className="text-start">103</td> <td className="text-start">Achraf El</td> <td className="text-start">developer</td> </tr>
                <tr> <td className="text-start">102</td> <td className="text-start">Kamal El</td> <td className="text-start">Information Technology</td> </tr>
            </tbody>
        </table>
        <h3 className="title-h3">3 - علاقة العديد إلى العديد </h3>
        <p className="style_divv">     
            في العلاقة العديد إلى العديد، يمكن أن يتعلق كل سجل في كلي الجدولين بسجلات متعددة في الجدول الآخر.<br/>
            لتنفيذ ذلك، يتم استخدام جدول "تواصل" ثالث يحتوي على مفاتيح خارجية تشير إلى المفاتيح الرئيسية للجدولين الآخرين.
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter  code={`USE my_database;
DROP TABLE IF EXISTS student , course , enrollment ;

-- Create the student table
CREATE TABLE student (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(255)
);

-- Create the course table
CREATE TABLE course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(255)
);

-- Create the enrollment table
CREATE TABLE enrollment (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_details VARCHAR(255), -- Additional enrollment details column
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);


-- Insert data into the student table
INSERT INTO student (student_id, student_name) VALUES
    (1, 'Reda Eskouni'),
    (2, 'Kamal El'),
    (3, 'Amal El');

-- Insert data into the course table
INSERT INTO course (course_id, course_name) VALUES
    (101, 'Mathematics'),
    (102, 'Arabic'),
    (103, 'Computer Science');

-- Insert data into the enrollment table
INSERT INTO enrollment (enrollment_id, student_id, course_id, enrollment_details) VALUES
    (1001, 1, 101, 'Fall 2023'),
    (1002, 1, 102, 'Fall 2023'),
    (1003, 2, 103, 'Spring 2024'),
    (1004, 3, 101, 'Spring 2024');



-- Retrieve enrollment information with student and course details
SELECT 
    e.enrollment_id AS "enrollment ID",
    s.student_name AS "Student Name",
    c.course_name AS "Course Name",
    e.enrollment_details AS "Details"
FROM  enrollment e JOIN student s 
ON e.student_id = s.student_id JOIN course c 
ON e.course_id = c.course_id;`} language="sql" addclassName="mt-3 mb-3" copie={true}/>   
        <table dir="ltr" className="table"> 
            <thead className="bg-secondary">
                <tr> <th>enrollment ID</th>  <th>Student Name</th> <th>Course Name</th> <th>Details</th> </tr>
            </thead>
            <tbody>
                <tr> <td className="text-start">1001</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">Mathematics</td> <td className="text-start">Fall 2023</td> </tr>
                <tr> <td className="text-start">1002</td> <td className="text-start">Reda Eskouni</td> <td className="text-start">Arabic</td> <td className="text-start">Fall 2023</td> </tr>
                <tr> <td className="text-start">1003</td> <td className="text-start">Kamal El</td> <td className="text-start">Computer Science</td> <td className="text-start">Spring 2024</td> </tr>
                <tr> <td className="text-start">1004</td> <td className="text-start">Amal El</td> <td className="text-start">Mathematics</td> <td className="text-start">Spring 2024</td> </tr>
            </tbody>
        </table>
    </article>    
</section>
</main>
    )
}

