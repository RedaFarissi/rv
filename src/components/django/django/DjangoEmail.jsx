import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function DjangoEmail(){
   return(
   <>
     <h1 className="heading-style heading-style-django-color"> Django Email</h1>   
      <article id="Django_Email" >
            <h2 className="title-h2" id="send_email"> 1 - Send Email</h2>
            <p className="style_divv">
               في Django، يمكنك استخدام وظيفة send_mail من الوحدة النمطية django.core.mail لإرسال رسائل البريد الإلكتروني
            </p>
            <h3 className="title-h3"> 1 -  التحقق بخطوتين من بريدك الإلكتروني <bdi>2 -Step Verification </bdi> </h3>
            <ul><li> انتقل أولاً إلى بريدك الإلكتروني وانقر على إدارة حساب Google الخاص بك (Manage your Google Account) </li> </ul> 
            <img src={images.django214} className="w-100 mt-2 mb-3"/> 
            <ul> 
               <li>  انقر فوق Security في اليسار   </li> 
               <li> انقر <bdi>2-Step Verification </bdi></li>
            </ul>
            <img src={images.django215} className="img"/> 
            <img src={images.django216} className="img"/> 
            <img src={images.django217} className="img"/> 
            <img src={images.django218} className="img"/> 
            <img src={images.django219} className="img"/> 
            <img src={images.django220} className="img"/> 
            <img src={images.django221} className="img"/> 
            <ul>
               <li>هذا الرمز هو كلمة المرور للبريد الإلكتروني لحسابي و الذي أحتاج إلى نسخه لاستخدامه في settings.py </li>
            </ul>
            <img src={images.django222} className="w-100 mt-2 mb-3"/> 
            <h3 className="title-h3">  2 - django  Email </h3>
            <ul><li> في هذا المثال أستخدم بريدًا إلكترونيًا آخر redaesskouni@gmail.com</li> </ul>
            <img src={images.django213} className="w-100 mt-2 mb-3"/> 
            <CodeHighlighter code={codes[9].send_email[0]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py startapp sendEmail</CodeCommand>
            
            <CodeHighlighter code={codes[9].send_email[1]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[9].send_email[2]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[9].send_email[3]} file_name="project / sendEmail / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[9].send_email[4]} file_name="project / sendEmail / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[9].send_email[5]} file_name="project / templates / send_email.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django223} className="img"/> 
            <ul><li> تم إرسال البريد الإلكتروني بنجاح </li></ul>
            <img src={images.django224} className="img"/> 
            
            <h2 className="title-h2" id="list_emails"> 2 - List Emails</h2>
            <p className="style_divv"> 
               في مقتطف الشفرة المقدم، يتم استخدام imap_server.select('INBOX') لتحديد صندوق البريد (المجلد) الذي تريد جلب رسائل البريد الإلكتروني منه. صندوق البريد "INBOX" هو صندوق بريد قياسي يمثل صندوق البريد الأساسي أو المجلد الرئيسي في حساب البريد الإلكتروني.<br/><br/>
               من خلال تحديد صندوق البريد "INBOX"، فإنك تحدد أنك تريد جلب رسائل البريد الإلكتروني من صندوق البريد/المجلد الأساسي لحساب البريد الإلكتروني. هذا هو عادةً المكان الذي يتم فيه تخزين رسائل البريد الإلكتروني الواردة افتراضيًا.
            </p>
            <CodeHighlighter code={codes[9].list_emails[0]} file_name="project /  sendEmail / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[9].list_emails[1]} file_name="project / sendEmail / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[9].list_emails[2]} file_name="project / templates / send_email.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django227} className="img"/>      
      </article>
   </>
    )
}