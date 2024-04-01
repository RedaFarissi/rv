import { CodeCommand , CodeHighlighter } from "../../path";
import images from "../imagesLaravel";

export default function Packages(props){
   return(
   <>
      <h1 className="heading-style"> Laravel Packages </h1>
      <article id="Authentication_UI" className="mt-5">
            <h2 className="title-h2">1 - واجهة المستخدم المصادقة </h2>
            <h3 className="title-h3"> 1 - تثبيت مشروع لارافيل </h3>
            <CodeCommand>composer create-project --prefer-dist laravel/laravel laravel-auth</CodeCommand>
            <ul><li>أو إذا قمت بتثبيت <b>Laravel Installer</b></li></ul>
            <CodeCommand>laravel new laravel-auth</CodeCommand>
            <h3 className="title-h3"> 2 - تكوين قاعدة البيانات (Configure)</h3>
            <CodeHighlighter code={`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_auth
DB_USERNAME=root
DB_PASSWORD=`} file_name={`laravel-app / .env`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>
            <h3 className="title-h3">3 - إنشاء المصادقة </h3>
            <CodeCommand>composer require laravel/ui</CodeCommand>
            <ul><li><b>إنشاء السقالات الأساسية ونموذج تسجيل الدخول والتسجيل bootstrap</b></li></ul>
            <CodeCommand>php artisan ui bootstrap</CodeCommand>
            <CodeCommand>php artisan ui bootstrap --auth</CodeCommand>
            <ul><li><b> أو إنشاء السقالات الأساسية ونموذج تسجيل الدخول والتسجيل Vue</b></li></ul>
            <CodeCommand>php artisan ui vue</CodeCommand>
            <CodeCommand>php artisan ui vue --auth</CodeCommand>
            <ul><li><b>أو إنشاء السقالات الأساسية ونموذج تسجيل الدخول والتسجيل React</b></li></ul>
            <CodeCommand>php artisan ui react</CodeCommand>
            <CodeCommand>php artisan ui react --auth</CodeCommand>
            <h3 className="title-h3">4 - إنشاء السقالات الأساسية</h3>
            <CodeCommand>php artisan ui bootstrap</CodeCommand>
            <CodeCommand>php artisan ui bootstrap --auth</CodeCommand>
            <b>أو</b>
            <CodeCommand>php artisan ui vue</CodeCommand>
            <CodeCommand>php artisan ui vue --auth</CodeCommand>
            <b>أو</b>
            <CodeCommand>php artisan ui react</CodeCommand>
            <CodeCommand>php artisan ui react --auth</CodeCommand>
            <h3 className="title-h3">5 - تثبيت تبعيات NPM</h3>
            <CodeCommand>npm install && npm run dev</CodeCommand>
            <img className="w-100" src={images.laravel_run_dev} alt="laravel run dev" />            
            <h3 className="title-h3">6 - اختبار نظام المصادقة</h3>
            <ul><li>افتح موجه أوامر جديد وإستخدم :</li></ul>
            <CodeCommand>cd C:\xampp\htdocs\laravel-auth</CodeCommand>
            <CodeCommand>php artisan serve</CodeCommand>
            <img className="w-100" src={images.laravel_auth1} alt="laravel auth 1"  />
            <img className="w-100 mt-3" src={images.laravel_auth2} alt="laravel auth 2"  />
      </article>
      <article id="Authentication_Breeze">
            <h2 className="title-h2">2 - واجهة المستخدم المصادقة Breeze </h2>
            <ul><li> التفاصيل من <a href='https://www.itsolutionstuff.com/post/laravel-9-authentication-using-breeze-tutorialexample.html' target='_blanck'> هنا </a></li></ul>
            <h3 className="title-h3"> 1 - تثبيت مشروع لارافيل</h3>
            <CodeCommand>composer create-project laravel/laravel example-app</CodeCommand>
            <h3 className="title-h3"> 2 - تكوين قاعدة البيانات (Configure)</h3>
            <CodeHighlighter code={`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_example_app
DB_USERNAME=root
DB_PASSWORD=`} file_name={`laravel-app / .env`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>
            <h3 className="title-h3">3 - إنشاء المصادقة breeze </h3>
            <CodeCommand>composer require laravel/breeze --dev</CodeCommand>
            <ul><li> بعدها إستخدم :</li></ul>
            <CodeCommand>php artisan breeze:install</CodeCommand>
            <h3 className="title-h3">4 - تثبيت تبعيات NPM </h3>
            <CodeCommand>npm install && npm run dev</CodeCommand>
            <h3 className="title-h3">5 - افتح موجه أوامر جديد  </h3>
            <CodeCommand>cd C:\xampp\htdocs\example-app</CodeCommand>
            <CodeCommand>php artisan migrate</CodeCommand>
            <h3 className="title-h3">6 -  اختبار نظام المصادقة </h3>
            <CodeCommand>php artisan serve</CodeCommand>
            <img className="w-100" src={images.laravel_auth1} alt="laravel auth breeze"  />
            <img className="w-100 mt-3" src={images.laravel_auth_breez1} alt="laravel auth breeze"  />
            
      </article>
      <article  id="Paypal_Payment">
            <h2 className="title-h2">3 - Paypal Payment </h2>
            <ul><li> التفاصيل من <a href='https://www.laravelia.com/post/laravel-10-paypal-payment-and-dive-into-details#google_vignette' target='_blanck'> هنا </a></li></ul>
            <h3 className="title-h3">1 - حول لوحة تحكم مطور PayPal Developer </h3>         
            <ul> 
               <li>في هذا المثال نستخدم التطبيق الافتراضي في <kbd>Apps & Credentials</kbd> </li>
               <li>بشكل افتراضي، يمنحك <bdi>paypal "API Credentials"</bdi> للاختبار ويمكنك إنشاء واحد آخر إذا كنت تريد ذلك.</li>
            </ul>
            <img src={images.laravel64} className="w-100 mb-2" alt="ControllerPost"/>
            <ul>
               <li>في Testing Tools ستجد التطبيق الذي يمكنك من خلاله اختبار <b>API Credentials</b></li>
               <li>دائمًا ما تكون بيانات <b>Credentials</b> لواجهة برمجة التطبيقات في أدوات الاختبار حسابًا تجاريًا (business account)</li>
            </ul>
            <img src={images.laravel65} className="w-100 mb-2" alt="ControllerPost"/>
            <ul><li>هذا هو <b>API Credentials</b> الافتراضي في أدوات الاختبار، ويمكنك معرفة ذلك من خلال  <b>Client ID</b></li></ul>
            <img src={images.laravel65} className="w-100 mb-2" alt="ControllerPost"/>
            <h3 className="title-h3">2 - تثبيت الحزمة srmklive/PayPal </h3>
            <CodeCommand>composer require srmklive/PayPal</CodeCommand>
            <h3 className="title-h3">3 - config/app.php </h3>
            <CodeHighlighter code={`'providers' => ServiceProvider::defaultProviders()->merge([
      #....
      srmklive\\PayPal\\Providers\\PayPalServiceProvider::class,
  ])`} file_name={`laravel-app / config / app.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>

            <h3 className="title-h3">4 -  لنشر ملفات التكوين الخاصة بحزمة PayPal </h3>
            <CodeCommand>php artisan vendor:publish --provider="Srmklive\PayPal\Providers\PayPalServiceProvider::class"</CodeCommand>
            <ul><li>تأكد من وجود ملف فئة موفر خدمة PayPal وأنه غير تالف. يمكنك التحقق من ذلك عن طريق فتح <kbd>"vendor/rmklive/paypal/src/Providers/PayPalServiceProvider.php"</kbd> للتحقق من وجود class</li></ul>
            <div className='alert alert-danger'>
               <ul><li>إذا حدث خطأ ما عند محاولة نشر <b>vendor</b> مثل هذا : </li></ul>
               <img src={images.laravel61} className="w-100" alt="ControllerPost"/>
               <ul><li>استخدم هذا الأمر لحل الخطأ</li></ul>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan config:cache</pre></div>
               <ul><li>وثم :</li></ul>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan vendor:publish</pre></div>
               <ul><li>اختر رقم المزود وانتهيت.  (في حالتي أستخدم 9)</li></ul>
               <img src={images.laravel62} className="w-100" alt="ControllerPost"/>
               <ul><li> سيؤدي هذا إلى إنشاء ملف <b>paypal.php</b> داخل المجلد  <bdi><b>config/</b></bdi>  <kbd>config/paypal.php</kbd> </li></ul>
            </div>

            <h3 className="title-h3">5 - <bdi>.env</bdi> </h3>
            <ul><li> أضف هذا إلى الملف <bdi><b>.env</b></bdi></li></ul>
            <h6 className="title-h6"> الطريقة الأولى </h6>
            <CodeHighlighter code={`PAYPAL_MODE=sandbox
PAYPAL_SANDBOX_API_USERNAME=..
PAYPAL_SANDBOX_API_PASSWORD=..
PAYPAL_SANDBOX_API_SECRET=..
PAYPAL_CURRENCY=USD
PAYPAL_SANDBOX_API_CERTIFICATE=`} file_name={`laravel-app / .env`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <h6 className="title-h6">  الطريقة الثانية </h6>
         <CodeHighlighter code={`PAYPAL_MODE=sandbox
PAYPAL_SANDBOX_CLIENT_ID=
PAYPAL_SANDBOX_CLIENT_SECRET=`} file_name={`laravel-app / .env`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <h5 className="title-h5">  نحتاج الآن إلى إضافة معلومات إلى <bdi>.env</bdi> للتواصل مع paypal </h5>
            <ul  className="alert alert-secondary">
               <li>أولا عليك أن تذهب إلى testing tools{">"}sandbox account وابحث عن الحساب التجاري الذي أنشأه التطبيق <kbd>Apps & Credentials</kbd> </li>
               <li>من المهم أن تختار <b>View/Edit account</b> </li>
            </ul>
            <img src={images.laravel67} className="w-100" alt="ControllerPost"/>
            <img src={images.laravel68} className="w-100 mt-3" alt="ControllerPost"/>
            <h6 className="title-h6">اضف إليه الطريقة الأولى </h6>
            <CodeHighlighter code={`PAYPAL_MODE=sandbox
PAYPAL_SANDBOX_API_USERNAME=sb-enz1z26813155_api1.business.example.com
PAYPAL_SANDBOX_API_PASSWORD=ABPFXEWWN2PK5RKZ
PAYPAL_SANDBOX_API_SECRET=AMXv0WG6E0oyHPtur6YqWGuOvwuMAHF09Cm82S5lcy4IZswVrmaulq76
PAYPAL_CURRENCY=USD
PAYPAL_SANDBOX_API_CERTIFICATE=`} file_name={`laravel-app / .env`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <h6 className="title-h6">اضف إليه الطريقة الثانية </h6>
         <CodeHighlighter code={`PAYPAL_MODE=sandbox
PAYPAL_SANDBOX_CLIENT_ID=AfILyKjspPjvt8p4rdHjB_PnX4IQcf_J4BLskhHZJF7ae8sxApDItgXzPqhBOUeYa1wYVQD5rHjjn7C9
PAYPAL_SANDBOX_CLIENT_SECRET=EMe7LGGXl1PUMYL7SUnlX8Mq4poVpaorCZX6ypxi9ZBEPp0bgF0m23Jox9iMcNvggjh4kXRQFG1A6327`} file_name={`laravel-app / .env`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <h3 className="title-h3">6 - config/paypal.php </h3>
            <ul>
               <li>التعامل مع رمز <b>paypal.php</b></li>
               <li>التفاصيل من <a href='https://stackoverflow.com/questions/64928459/i-tried-implementing-srmklive-paypal-1-0-into-my-laravel-project-locally' target="_blanck">هنا</a></li>
            </ul>
            <h6 className="title-h6"> الطريقة الأولى </h6>
            <CodeHighlighter code={`return [
'mode'    => env('PAYPAL_MODE', 'sandbox'), // Can only be 'sandbox' Or 'live'. If empty or invalid, 'live' will be used.
'sandbox' => [
    'username'    => env('PAYPAL_SANDBOX_API_USERNAME', ''),
    'password'    => env('PAYPAL_SANDBOX_API_PASSWORD', ''),
    'secret'      => env('PAYPAL_SANDBOX_API_SECRET', ''),
    'certificate' => env('PAYPAL_SANDBOX_API_CERTIFICATE', ''), 
    'app_id'      => 'APP-80W284485P519543T',
],

'live' => [
     'username'    => env('PAYPAL_LIVE_API_USERNAME', ''),
     'password'    => env('PAYPAL_LIVE_API_PASSWORD', ''),
     'secret'      => env('PAYPAL_LIVE_API_SECRET', ''),
     'certificate' => env('PAYPAL_LIVE_API_CERTIFICATE', ''),
     'app_id'      => '',
],

'payment_action' => env('PAYPAL_PAYMENT_ACTION', 'Sale'), // Can only be 'Sale', 'Authorization' or 'Order'
'currency'       => env('PAYPAL_CURRENCY', 'USD'),
'billing_type'   => 'MerchantInitiatedBilling',
'notify_url'     => '', 
'locale'         => '', 
'validate_ssl'   => true, 
];   `} file_name={`laravel-app / config / paypal.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <h6 className="title-h6"> الطريقة الثانية </h6>

            <CodeHighlighter code={`return [
    'mode'    => env('PAYPAL_MODE', 'sandbox'), 
    'sandbox' => [
        'client_id'         => env('PAYPAL_SANDBOX_CLIENT_ID', ''),
        'client_secret'     => env('PAYPAL_SANDBOX_CLIENT_SECRET', ''),
        'app_id'            => 'APP-80W284485P519543T',
    ],
    
    'live' => [
        'client_id'         => env('PAYPAL_LIVE_CLIENT_ID', ''),
        'client_secret'     => env('PAYPAL_LIVE_CLIENT_SECRET', ''),
        'app_id'            => env('PAYPAL_LIVE_APP_ID', ''),
    ],

    'payment_action' => 'Sale', 
    'currency'       => env('PAYPAL_CURRENCY', 'USD'),
    'billing_type'   => 'MerchantInitiatedBilling',
    'notify_url'     => '', 
    'locale'         => '', 
    'validate_ssl'   => true,
];`} file_name={`laravel-app / config / paypal.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <h2 className="title-h5"><a href="https://www.itsolutionstuff.com/post/laravel-10-stripe-payment-gateway-integration-tutorialexample.html" target="_blanck"> Stripe Payment Integration</a></h2>
      </article>
      <article id="send_mail">
            <h2 className="title-h2">4 - send email</h2>
            <ul><li> التفاصيل من <a href="https://www.itsolutionstuff.com/post/laravel-10-mail-laravel-10-send-mail-tutorialexample.html">هنا</a> </li></ul>
      </article>
   </>
   )
}