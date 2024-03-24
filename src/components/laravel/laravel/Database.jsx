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
            <div className="mital">متال :</div>
            <CodeHighlighter code={``} file_name={`example-app / app / Http / Controllers / CountryController.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article  id='create_table_in_db_from_laravel'>
            <h2 className="title-h2">4 - create table in db from laravel</h2>
            <div>
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration create_sizes_table </pre></div>
               <div className='alert bg-info text-light'><b>Note</b>: the table will create with name <b>sizes</b></div>
               <img src={images.laravel17} className="w-100 mb-2" alt="model"/>
               <img src={images.laravel19} className="w-100 mb-2" alt="model"/>
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate</pre></div>
               <div className='row'>
                  <img src={images.laravel18} className="col-md-6 border border-dark border-3 mb-2" alt="model"/>
                  <img src={images.laravel21} className="col-md-6 border border-dark border-3 mb-2" alt="model"/>   
               </div>
            </div>
      </article>
      <article id="AddColumnInTable">
            <h2 className="title-h2">5 - Add Column In Table</h2>
            <div>
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration add_<span className='text-danger'>columnName</span>_to_<span className='text-danger'>tableName</span> </pre></div>      
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration add_description_to_sizes</pre></div>
               <img src={images.laravel22} className="w-100"/> 
               <img src={images.laravel23} className="w-100"/>   
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>      
               <img src={images.laravel24} className="w-25"/>   
            </div>
      </article>
      <article id='droppingColumnsFromTable'>  
            <h2 className="title-h2">6 - dropping Columns From Table</h2>
            <div>
               {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration  remove_<span className='text-danger'>columnName</span>_from_<span className='text-danger'>tableName<span> --table=tableName</pre></div>      
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration remove_description_from_sizes --table=sizes</pre></div> */}
               <img src={images.laravel32} className="w-100"/> 

               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>
            </div>
      </article>
      <article id="Foreign_Keys">
            <h2 className="title-h2"> 7 - Foreign Keys</h2>
            <a href='https://laravel.com/docs/9.x/migrations#foreign-key-constraints' target="_blanck">foreign-key-constraints</a>
            <div>
               <br/><br/>
               <h4 className='fs-2'>Exemple 1</h4>
               <p><b>By Default laravel create users table</b></p>
               <img src={images.laravel25} className="w-100 mb-2" alt="model"/>
               to use foreign key with user from sizes <></>table we can use :
               <div className="h3 text-success">Old method</div>
               <div className='alert border pb-0 '>
         <pre>$table{"->"}unsignedBigInteger(<span className='orange'>'user_id'</span>);
            
         $table{"->"}foreign(<span className='orange'>'user_id'</span>){"->"}references(<span className='orange'>'id'</span>){"->"}on(<span className='orange'>'users'</span>);</pre>
               </div>
               <img src={images.laravel27} className="w-100 mb-2" alt="model"/>
               <img src={images.laravel26} className="w-100 mb-2" alt="model"/>
               <img src={images.laravel28} className="w-25 mb-2" alt="model"/>
               <div className="h3 text-success">New method</div>
               {/* <div className='alert border pb-0 '>
                  <pre>$table{"->"}foreignId(<span className='orange'>'user_id'</span>){"->"}constrained(<span className='orange'>'users'</span>);</pre>
               </div> */}
               <b>You can use cascadeOnDelete with user_id</b>
               {/* <div className='alert border pb-0 '>
                  <pre>$table{"->"}foreignId(<span className='orange'>'user_id'</span>){"->"}constrained(<span className='orange'>'users'</span>){"->"}cascadeOnDelete();</pre>
               </div> */}
               <img src={images.laravel29} className="w-100 mb-2" alt="model"/>
               <br/><br/><br/><br/>
               <h4 className='fs-2'>Exemple 2</h4>
               <b> categories table </b>
               <img src={images.laravel46} className="w-100 mb-2" alt="model"/>
               <b> Products table </b>
               <img src={images.laravel45} className="w-100 mb-2" alt="model"/>
               <b> App/Models/Category.php </b>
               <img src={images.laravel47} className="w-100 mb-2" alt="model"/>
               <b> App/Models/Product.php </b>
               <img src={images.laravel48} className="w-100 mb-2" alt="model"/>
               <b> App/Http/Controllers/ControllerName.php </b>
               <img src={images.laravel49} className="w-100 mb-2" alt="model"/>
               <b> list.blade.php </b>
               <img src={images.laravel50} className="w-100 mb-2" alt="model"/>
            </div>
            
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
            <div>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback</pre></div>
               <b>To delete many magration use (you can choose the number of migrations you want to delete)</b>
               {/* <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback --step=<sapn className='text-danger'>2</span></pre></div> */}
            </div>
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