import images from "../imagesLaravel";
import { CodeCommand , CodeHighlighter } from "../../path";

export default function Database(props){
   function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(currentDate.getDate()).padStart(2, '0');
    
      return `${year}_${month}_${day}`;
   }

   return(
   <>
      <h1 className="heading-style">Laravel Database </h1>
      <article id="Connect_with_database">
         <h2 className="title-h2">1 - تواصل مع قاعدة البيانات </h2>
         <p className="style_divv"> 
               لتوصيل التطبيق المثالى لمشروعك، انتقل إلى المسار <kbd>.env</kbd> <br/><br/>
               يدعم <b>Laravel</b> قواعد بيانات مختلفة مثل <b>MYSQL</b> وأخرى .

         </p>
<CodeHighlighter code={`...

DB_CONNECTION=mysql            #mysql because we use MYSQL database
DB_HOST=127.0.0.1       
DB_PORT=3306                
DB_DATABASE=example-app        #name database ussed
DB_USERNAME=root              
DB_PASSWORD=                  

...`} file_name="example-app / .env" language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article id="Create_models">
         <h2 className="title-h2">2 - إنشاء  model </h2>
         <p className="style_divv">
               لاستخدام قاعدة البيانات تحتاج إلى استخدام النموذج لأنه كما رأينا <b>Laravel</b> يستخدم <b>MVC</b> . <br/><br/>
               <ul>
                  <li><b>Modele :</b> أي شيء يتعلق بالبيانات</li>
                  <li><b>view :</b> أي شيء عن الواجهة الأمامية</li>
                  <li><b>Controller :</b> التحكم بين <b>Modele</b> و <b>View</b></li>
               </ul>
               <b>إنشاء Model  و Table :</b>
               <CodeCommand>php artisan make:model Country --migration</CodeCommand>
               <b>إنشاء Model  و Table و Control:</b>
               <CodeCommand>php artisan make:model Country -mc</CodeCommand>
               <b>إنشاء Model  و Table و Control recource:</b>
               <CodeCommand>php artisan make:model Country -mcr</CodeCommand>
               <ul>
                  <li>في هذه الحالة <b>Country</b> هو إسم <b>model</b>.</li>
                  <li>يجب أن يبدأ اسم النموذج بحرف كبير وكلمة مفردة.</li>
                  <li> <bdi><b>--migration </b></bdi> &nbsp; يتم ذلك من خلال إنشاء جدول في قاعدة البيانات مباشرة أو يمكنك استخدام -m</li>
               </ul>
               اذهب الآن إلى : <kbd>example-app\database\migrations\</kbd> سترى ملف <b>php</b> تم إنشاؤه تلقائيًا بهذه الطريقة :<br/>
               <bdi><b>example-app/databse/migrations/{getCurrentDate()}_235205_create_countries_table.php</b></bdi>
         </p>
         <CodeHighlighter code={`<?php
use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('country');    #new
            $table->string('nationality');     #new
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('countries');
    }
};`} file_name={`example-app / databse / migrations / ${getCurrentDate()}_235205_create_countries_table.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <p className="style_divv">
                ستقوم الدالة <bdi><b>up()</b></bdi> بإنشاء جدول <b>countries</b> في قاعدة البيانات ويكون لها افتراضيًا :  
                <ul>
                   <li><bdi>$table-{">"}id()</bdi></li>
                   <li><bdi>$table-{">"}timestamps()</bdi></li>
                </ul><br/>
                <ol>
                   <li><bdi><b className="text-success">$table{"->"}id()</b></bdi> : إنشاء معرف العمود في الجدول  </li>
                   <li><bdi><b className="text-success">$table{"->"}string('country')</b></bdi> : إنشاء عمود <b>country</b> من نوع سلسلة <b>(string)</b> </li>
                   <li><bdi><b className="text-success">$table{"->"}string('nationality')</b></bdi> : إنشاء عمود <b>nationality</b> من نوع سلسلة <b>(string)</b> </li>
                   <li><bdi><b className="text-success">$table{"->"}timestamps()</b></bdi> : إنشاء عمودين يحصل العمود الأول على وقت للإنشاء <b>(created_at)</b> والثاني يحصل على وقت للتحديث <b>(updated_at)</b> </li>
                </ol>         
            </p>
      </article>
      <article id='migrate'>
            <h2 className="title-h2"> 3 - migrate </h2>
            <p className="style_divv">
               سوف ينعكس هذا الكيان على قاعدة البيانات باستخدام الأمر
               <CodeCommand>php artisan migrate</CodeCommand>
               <ul><li>الآن في قاعدة البيانات الخاصة بك، تم إنشاء جدول <b>countries</b> </li></ul>
            </p> 
            <ul><li>لاستخدام <b>Models</b> في وحدة التحكم <b>CountryController.php</b> إستخدم :</li></ul>
            <CodeHighlighter code={`<?php namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

use App\\Models\\Country;    #new

class CountryController extends Controller {
      # .....
      public function store(Request $request){
         $country = new Country() ;   #new
      }  
      # .....
}`} file_name={`example-app / app / Http / Controllers / CountryController.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <div className="alert alert-info">
            عندما تقوم بإنشاء جدول ب <b>Models</b> في <b>Laravel</b>، يمكنك استخدام <b>Models Country</b> في وحدة التحكم الخاصة بك أو في <b>Route</b> .
         </div>
      </article>
      <article id='Create_Table_without_Models'>
            <h2 className="title-h2">4 - إنشاء جدول بدون استخدام Models </h2>
            <ul><li>إنشاء جدول بالاسم <b>sizes</b></li></ul>
            <CodeCommand>php artisan make:migration create_sizes_table</CodeCommand>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration{
    public function up()  {
        Schema::create('sizes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    public function down()  {
        Schema::dropIfExists('sizes');
    }
};`} file_name={`example-app / database / migrations / ${getCurrentDate()}_164059_create_sizes_table.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>         
      </article>
      <article id="Add_Column_In_Table">
            <h2 className="title-h2">5 - إضافة عمود في الجدول</h2>
            <ul><li>إضافة عمود في الجدول <b>sizes</b> بالاسم  <b>description</b></li></ul>
            <CodeCommand>php artisan make:migration add_description_to_sizes</CodeCommand>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration{
    public function up()  {
        Schema::table('sizes', function (Blueprint $table) {
            $table->text('description')->after('id');      #new
        });
    }

    public function down()  {
        Schema::table('sizes', function (Blueprint $table) {

        });
    }
};`} file_name={`example-app / database / migrations / ${getCurrentDate()}_170347_add_description_to_sizes.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>
      </article>
      <article id='Remove_Column_From_Table'>  
            <h2 className="title-h2">6 - حذف العمود من الجدول</h2>
            <CodeCommand>php artisan make:migration remove_description_from_sizes --table=sizes</CodeCommand>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration
{
    public function up() {
        Schema::table('sizes', function (Blueprint $table) {
        });
    }

    public function down() {
        Schema::table('sizes', function (Blueprint $table) {
            Schema::dropColumn('description');   #new
        });
    }
};`} file_name={`example-app / database / migrations / ${getCurrentDate()}_173039_remove_description_from_sizes.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>
      </article>

      <article id="Foreign_Keys">
            <h2 className="title-h2"> 7 - Foreign Keys</h2>
            <p className="style_divv">
               في <b>Laravel</b> ، يمكنك تحديد مفاتيح خارجية في ترحيلاتك لإنشاء علاقات بين جداول قاعدة البيانات. يُستخدم الأسلوب <bdi><b>foreign()</b></bdi> المقدم من بنّاء الهيكل لتحديد المفاتيح الخارجية. يأخذ هذا الأسلوب اسم عمود المفتاح الخارجي كوسيطة ويسمح لك بتحديد العمود المشار إليه والجدول المرجعي باستخدام الأسلوب <bdi><b>references()</b></bdi>. بالإضافة إلى ذلك، يمكنك استخدام بناء الاستعلام المتميز لتحديد المفاتيح الخارجية مباشرة. لإسقاط المفاتيح الخارجية، يمكنك استخدام الأسلوب <bdi><b>dropForeign()</b></bdi>. تحديد المفاتيح الخارجية بشكل صحيح يضمن التكامل الإشاري في مخطط قاعدة البيانات الخاص بك، مما يحافظ على الاتساق وسلامة البيانات عبر الجداول ذات الصلة.<br/><br/>
               من هنا للذهاب إلى الموقع الرسمي <a href='https://laravel.com/docs/9.x/migrations#foreign-key-constraints' target="_blanck">foreign-key-constraints</a>
            </p>
            <h3 className="title-h3">متال 1 :</h3>
            <h5 className="title-h5">بشكل افتراضي، يقوم Laravel بإنشاء جدول المستخدمين users </h5>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
};`} file_name={`example-app / database / migrations / 2014_10_12_000000_create_users_table.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <h5 className="title-h5">استخدم المفتاح الخارجي <b>(foreign key)</b> مع المستخدم <b>(user)</b> في الجدول <b>sizes</b> . يمكننا استخدام :</h5>
            <CodeCommand>php artisan make:migration add_user_id_to_sizes</CodeCommand>
            <h6 className="title-h6">الطريقة القديمة</h6>
            <CodeHighlighter code={`$table->unsignedBigInteger('user_id');
$table->foreign('user_id')->references('id')->on('users');`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('sizes', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');    #new
            $table->foreign('user_id')->references('id')->on('users');    #new
        });
    }

    public function down() {
        Schema::table('sizes', function (Blueprint $table) {
            Schema::dropColumn('user_id');   #new
        });
    }
};`} file_name={`example-app /  database / migrations / ${getCurrentDate()}_225049_add_user_id_to_sizes.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeCommand>php artisan migrate</CodeCommand>
            <ul><li>تم إنشاء عمود <b>user_id</b> في جدول <b>sizes</b></li></ul>
            <h6 className="title-h6">الطريقة الحديثة</h6>
            <CodeHighlighter code={`$table->foreignId('user_id')->constrained('users');`} language="php" number={false} addclassName="mt-3 mb-3" copie={true} />
            <ul><li>يمكنك استخدام <b>cascadeOnDelete</b> مع <b>user_id</b></li></ul>
            <CodeHighlighter code={`$table->foreignId('user_id')->constrained('users')->cascadeOnDelete();`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('sizes', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();   #new
        });
    }

    public function down() {
        Schema::table('sizes', function (Blueprint $table) {
            Schema::dropColumn('user_id');     #new
        });
    }
};
`} file_name={`example-app / database / migrations / ${getCurrentDate()}_225049_add_user_id_to_sizes.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
         
            <h3 className="title-h3">متال 2 :</h3>
            <CodeCommand>php artisan make:model Category --migration</CodeCommand>
            <CodeCommand>php artisan make:model Product --migration</CodeCommand>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('categories');
    }
};`} file_name={`example-app / database / migrations / ${getCurrentDate()}_002334_create_categories_table.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->string('description');
            $table->float('price');
            $table->boolean('available');
            $table->foreignId('category_id')->constrained('categories')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('products');
    }
};`} file_name={`example-app / database / migrations / ${getCurrentDate()}_002404_create_products_table.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeCommand>php artisan migrate</CodeCommand>
            <CodeHighlighter code={`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Category extends Model
{
    use HasFactory;
    public function products(){      #new
        return $this->hasMany(Product::class);
    }
}`} file_name={`example-app / app / Models / Category.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={`<?php

namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Database\\Eloquent\\Model;

class Product extends Model
{
    use HasFactory;
    public function category()  {
        return $this->belongsTo(Category::class);
    }
}`} file_name={`example-app / app / Models / Product.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            
        
            <CodeHighlighter code={`
public function admin_products_list(){
  return view('admin.products.list', ["products"=>Product::all()]);
}`} file_name={`example-app / app / Http / Controllers / ControllerName.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`
@foreach ($products as $product)
    <tr>
        <td><a href="{{ route('admin_product_edit_views' , [$product->id]) }}">{{$product->name}} <a></td>
        <td> {{ $product->price }} </td>
        <td> {{ $product->category->name }} </td>
        <td>
        @if( $product->available === 1 )
                <input type="checkbox" checked />
        @endif
        </td>
        <td> {{ $product->created_at }} </td>
        <td> {{ $product->updated_at }} </td>
    </tr>
@endforeach`} file_name={`example-app / resources / views / admin / products / list.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
                
            {/* <CodeHighlighter code={``} file_name={`example-app / `} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}
      </article>
      <article id='truncate_models_table'>
            <h2 className="title-h2">8 - truncate models table</h2>
            <div>
               <div className='alert alert-warning'> Product::truncate(); </div>
               <img src={images.laravel6} className="w-100 mb-2" alt="model"/>
            </div>
      </article>
      <article id='DropTheLastMigrateInDB'>
            <h2 className="title-h2">9 - Delete The Last Migrations in DataBase</h2>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback</pre></div>
            <b>To delete many magration use (you can choose the number of migrations you want to delete)</b>
            {/* <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback --step=<sapn className='text-danger'>2</span></pre></div> */}
      
      </article>
      <article id="Clearalltableindbandcreatehimagain">
            <h2 className="title-h2">10 - Clear all table in db and create him again</h2>
            <div>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:refresh</pre></div>
            </div>
      </article>
      <article id="soft_delete">     
            <h2 className="title-h2">11 - soft delete</h2>
            <a href='https://laravel.com/docs/9.x/eloquent#soft-deleting' target='_blanck'>soft delete documentation</a>
            <a href='https://www.youtube.com/watch?v=TiCvGwxqWlQ&list=PLftLUHfDSiZ4GfPZxaFDsA7ejUzD7SpWa&index=40' target='_blanck'> Youtube </a> 
            <div className='alert fs-5 alert-info mt-3'><b>soft delete</b> : is way to retain data after deleting it </div>
            <h4> 1) First Go to Models you want to use soft delete with it </h4>
            {/* <div className='alert alert-warning pb-0'><pre>
         use Illuminate\Database\Eloquent\SoftDeletes;
            
         class Product extends Model{
             use SoftDeletes;
         }</pre>
            </div> */}
            <h4> 2) in your database add  </h4>
            {/* <div className='alert alert-warning pb-0'><pre>   Schema::table('products', function (Blueprint $table) {
                  .... 
                  $table{"->"}softDeletes();
            });</pre>
            </div> */}
            <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate</pre></div>

            <p className='fs-5'> 
               when you use <b>SoftDeletes</b> Laravel add Column <b>deleted_at</b> to your table.<br/>
               When you Create instance of Product the Column <b>deleted_at take null</b> .<br/>
               When you Delete the Product instance deleted_at take date and time So you can rerun him if you want .
            </p>

            <h4> 3) Get All instance deleted </h4>
            {/* <div className='alert alert-warning pb-0'><pre>Product::withTrashed()-{">"}get()</pre></div> */}
            <b>See documentation to restore and force Delete</b>
      </article>
      <article id="eloquent_scopes">
            <h2 className="title-h2">12 - Eloquent scopes </h2>
            <a href='https://laravel.com/docs/10.x/eloquent#local-scopes' target='_blanck'>eloquent scopes documentation</a>
      </article>
      <article id="Seeder_class">
            <h2 className="title-h2">13 - Seeder class  </h2>
            <a href='https://laravel.com/docs/10.x/seeding#writing-seeders' target='_blanck'>seeders documentation</a>
            <p className='fs-5'> 
               In Laravel, seeders are used to populate database tables with initial or test data, making it easier to develop and test applications by providing a consistent data structure for testing and development environments.<br/>
               In this course we use seeder to create an admin account that cannot be deleted from the database, you can follow these steps.
            </p>
            <h3 className="title-h3">1 - Create Seeder Class</h3>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:seeder NameSeeder</pre></div>      
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:seeder SuperAdminSeeder</pre></div>  
            <p>the seeder class will create in database/seeders/ folder</p>    
            <h3 className="title-h3">2 - Create super admin account in seeder class</h3>
            <img src={images.laravel59} className="w-100 mb-2" alt="model"/>
            <h3 className="title-h3">3 - Run seeder class</h3>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan db:seed --className=SuperAdminSeeder</pre></div>  
      </article>
   </>
   )
}