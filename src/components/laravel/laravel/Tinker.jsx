import { CodeCommand , CodeHighlighter } from "../../path";

export default function Tinker(props){
   function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(currentDate.getDate()).padStart(2, '0');

      return `${year}_${month}_${day}`;
   }
   return(
   <>
      <h1 className="heading-style">Laravel Tinker </h1>
      <article className="mt-5">
         <p className="style_divv">
            لارافيل تينكر هو واجهة تفاعلية قوية مضمنة في إطار العمل <b>Laravel</b>، تتيح للمطورين التفاعل مع تطبيق <b>Laravel</b> الخاص بهم من سطر الأوامر في بيئة <b>REP (Read-Eval-Print Loop)</b>، وتوفر طريقة مريحة لتجربة الشيفرة، واختبار الاستعلامات، وتلاعب البيانات مباشرة ضمن سياق تطبيق <b>Laravel</b>.<br/><br/>
            <b>Tinker</b> يستفيد من واجهة سطر الأوامر لارافيل <b>Artisan</b> ويوفر بيئة رملية حيث يمكن للمطورين تنفيذ شيفرة <b>PHP</b> ضد نماذج وخدمات تطبيق لارافيل الخاص بهم في الوقت الحقيقي. يمكن أن يكون ذلك مفيدًا بشكل لا يصدق للتصحيح، واختبار استعلامات قواعد البيانات، وزراعة البيانات، وبرمجة الوظائف بسرعة.<br/><br/>
            لاستخدام <b>Laravel Tinker</b> عادةً ما يقوم المطورون بالانتقال إلى دليل مشروع لارافيل الخاص بهم في الطرفية وتشغيل الأمر  :<br/>
            <CodeCommand>php artisan tinker</CodeCommand>
             سيفتح هذا الواجهة التفاعلية حيث يمكنك بدء تنفيذ شيفرة <b>PHP</b> والتفاعل مع مكونات التطبيق الخاص بك
         </p>   
         <h3 className="title-h3">1 - إضافة عمود <b>role</b> إلى جدول <b>users</b> </h3>
         <CodeCommand>php artisan make:migration add_role_to_users</CodeCommand>
         <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('user');
        });
    }

    public function down() {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
        });
    }
};`} file_name={`laravel-app / databse / migrations / ${getCurrentDate()}_004250_add_role_to_users.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <CodeCommand>php artisan migrate</CodeCommand>

         <h3 className="title-h3">2 - استخدم Tinker لإضافة مستخدمين إلى الجدول  </h3>
         <CodeCommand>php artisan tinker</CodeCommand>
         <div className="alert bg-dark text-light" dir="ltr">
         C:\xampp\htdocs\laravel-app{">"} php artisan tinker<br/>
         <div className="text-secondary">Psy Shell v0.12.2 (PHP 8.0.30 — cli) by Justin Hileman</div>
{">"} use Illuminate\Support\Facades\DB;<br/>
{">"} DB::table('users')-{">"}insert([<br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "name" {"=>"} "Adil",<br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "email" {"=>"} "adil@gmail.com",<br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "password" {"=>"} "adil1997", <br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "role" {"=>"} "user",<br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "created_at" {"=>"} now(), <br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "updated_at" {"=>"} now() <br/>
. ]);<br/>
= <b className="text-primary">true</b>
         </div>
         <ul><li><b>أو</b></li></ul>
         <div className="alert bg-dark text-light" dir="ltr">
         C:\xampp\htdocs\laravel-app{">"} php artisan tinker<br/>
         <div className="text-secondary">Psy Shell v0.12.2 (PHP 8.0.30 — cli) by Justin Hileman</div>
{">"} use App\Models\User;<br/>
{">"} User::create([ <br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "name"{"=>"}"Reda",<br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "email"{"=>"}"reda00@gmail.com",<br/>
. &nbsp; &nbsp; &nbsp; &nbsp; "password" {"=>"} "reda00",<br/> 
. &nbsp; &nbsp; &nbsp; &nbsp; "role" {"=>"} "admin",<br/>
])<br/>
<span className="text-primary">= App\Models\User {"{"}#4983</span><br/>
    <span className="text-primary">name</span>: <span className="text-success">"Reda"</span>,<br/>
    <span className="text-primary">email</span>: <span className="text-success">"reda00@gmail.com"</span>,<br/>
    <span className="text-warning">#password</span>: <span className="text-success">"reda00"</span>,<br/>
    <span className="text-primary">role</span>: <span className="text-success">"admin"</span>,<br/>
    <span className="text-primary">updated_at</span>: <span className="text-success">"2024-03-30 22:12:20"</span>,<br/>
    <span className="text-primary">created_at</span>: <span className="text-success">"2024-03-30 22:12:20"</span>,<br/>
    <span className="text-primary">id</span>: 2,<br/>
  {"}"}
         </div>   
      </article>
   </>

   )
}