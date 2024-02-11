import { CodeCommand } from "../../path";
import images from "../imagesLaravel";

export default function Database(props){

   return(
   <>
      <h1 className="heading-style heading-style-python-color">Laravel Database </h1>
      <article id="mt-5">
         <br/><hr style={{height: "0.9rem", border:"0.3rem solid black"}}/>
         <h1 className="mt-5"> Database </h1>
         <h2 id="Connect_with_database">1 - Connect with database </h2>
         <div className="alert alert-warning text-black fs-5">
            <p>To connect your project example-app go to path <kbd>.env</kbd></p>
            <b>Path : example-app/.env</b>
            <div className="alert bg-black text-white"><pre>
         ...

         DB_CONNECTION=mysql           <span style={{color:'green'}}> #mysql because we use MYSQL database</span>
         DB_HOST=127.0.0.1       
         DB_PORT=3306                
         DB_DATABASE=example-app       <span style={{color:'green'}}> #name database ussed</span>
         DB_USERNAME=root              
         DB_PASSWORD=                  

         ...
         </pre></div>
         Laravel supports different database like <b>MYSQL</b> and another .
         </div>

         <h2 id="Create_models">2 - model </h2>

            <p>   to use database you need to use model because as we seen </p>
            <div className="alert alert-danger mt-3">
               <ul>
                  <li><small><small>Modele : anything about data</small></small></li>
                  <li><small><small>View : anything about front-end</small></small></li>
                  <li><small><small>Controller : Control between Modele and View</small></small></li>
               </ul>
            </div>
            to create model use :
            <b>Create Model and Table</b>
            {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:model <span style="color:rgba(0 255 0/75%);">Country</span> --migration</pre></div> */}
            <b>Create Model and Table and Control</b>
            {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:model <span style="color:rgba(0 255 0/75%);">Country</span> -mc</pre></div> */}
            <b>Create Model and Table and Control recource</b>
            {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:model <span style="color:rgba(0 255 0/75%);">Country</span> -mcr</pre></div> */}

            <p>
               in this case Contry is name of model .<br/> 
               <ul>
                  <li><b>name of model must start with capital letter and word single.</b></li>
                  <li><b><u>--migration</u> : this with create table in database directelly or you can use <u>-m</u></b></li>
               </ul>
            </p>

            now go to <b>example-app\database\migrations\</b> you will see php file created automatically .<br/>
            <b>Path : example-app/databse/migrations/2023_01_24_235205_create_countries_table.php</b>
            <div className="alert bg-light mt-3"><img src={images.laravel0_model1} className="w-100" alt="model"/></div>
            <ul>
               <li> the function up() will create database countries and by defalut : $table-{">"}id() and $table-{">"}timestamps()
                  <ol>
                     <li><em>$table{"->"}id()</em> : create column id in table  </li>
                     <li><em>$table{"->"}string('contry')</em> : create column contry type string</li>
                     <li><em>$table{"->"}string('nationality')</em> : create column nationality type string</li>
                     <li><em>$table{"->"}timestamps()</em> : create two column in database first column get time to create <small>(create at)</small> and second get time to update <small>(updeted at)</small> </li>
                  </ol>
               </li>
            </ul>
            <div className='alert alert-info'><b>$table{"->"}timestamps()</b> : this create <u>updated_at</u> and <u>created_at</u>  </div>
            <b> This entity will be reflected on the database using the command </b>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>
            now in your database example-app countries table was created .
            <div className="alert bg-light mt-3"><img src={images.laravel0_model2} className="w-100" alt="model"/></div>
            <div className="alert alert-success"> 
               in <b>example-app/resources/views/countrys/</b> create file <b>create.blade.php</b>  <br/>
               we use page create.blade.php to get data from usser and puch him in store function in CountryController
            </div>
            to use data from <b>example-app/app/Http/Controllers/CountryController.php</b> use:
            <div className="alert bg-light pb-0 mt-3"><pre>use App\Models\Country;</pre></div>
            and add to function store variable content model Country 
            {/* <div className="alert bg-light pb-0 mt-3"><pre>
            <span className="b">public function</span> <span className="g">store(<span className="text-success">Request</span> <span className="bc">$request</span>)</span>{
               <span className="bc">$country</span> = <span className="b">new</span> <span className="text-success">Country()</span> ;
            } </pre></div> */}
            <b>When you create table wityh model in laravel you can use Conttry in your Controller or in Route</b>
            <img src={images.laravel20} className="w-100 mb-2" alt="model"/>
         
            <h2 id='create_table_in_db_from_laravel'>5 - create table in db from laravel</h2>
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
         
            <h2 id="AddColumnInTable">6 - Add Column In Table</h2>
            <div>
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration add_<span className='text-danger'>columnName</span>_to_<span className='text-danger'>tableName</span> </pre></div>      
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration add_description_to_sizes</pre></div>
               <img src={images.laravel22} className="w-100"/> 
               <img src={images.laravel23} className="w-100"/>   
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>      
               <img src={images.laravel24} className="w-25"/>   
            </div>
         
            <h2 id='droppingColumnsFromTable'>7 - dropping Columns From Table</h2>
            <div>
               {/* <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration  remove_<span className='text-danger'>columnName</span>_from_<span className='text-danger'>tableName<span> --table=tableName</pre></div>      
               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan make:migration remove_description_from_sizes --table=sizes</pre></div> */}
               <img src={images.laravel32} className="w-100"/> 

               <div className="alert bg-dark text-light mt-3 pb-0"><pre> php artisan migrate </pre></div>      
            
            </div>
            
            <h2 id="Foreign_Keys"> 8 - Foreign Keys</h2>
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
            
            
            <h2 id='truncate_models_table'>9 - truncate models table</h2>
            <div>
               <div className='alert alert-warning'> Product::truncate(); </div>
               <img src={images.laravel6} className="w-100 mb-2" alt="model"/>
            </div>
            
            <h2 id='DropTheLastMigrateInDB'>10 - Delete The Last Migrations in DataBase</h2>
            <div>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback</pre></div>
               <b>To delete many magration use (you can choose the number of migrations you want to delete)</b>
               {/* <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:rollback --step=<sapn className='text-danger'>2</span></pre></div> */}
            </div>
            
            <h2 id="Clearalltableindbandcreatehimagain">11 - Clear all table in db and create him again</h2>
            <div>
               <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate:refresh</pre></div>
            </div>
            
            <h2 id="soft_delete">12 - soft delete</h2>
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

            <h2 id="eloquent_scopes">13 - Eloquent scopes </h2>
            <a href='https://laravel.com/docs/10.x/eloquent#local-scopes' target='_blanck'>eloquent scopes documentation</a>

         
            <h2 id="Seeder_class">14 - Seeder class  </h2>
            <a href='https://laravel.com/docs/10.x/seeding#writing-seeders' target='_blanck'>seeders documentation</a>
            <p className='fs-5'> 
               In Laravel, seeders are used to populate database tables with initial or test data, making it easier to develop and test applications by providing a consistent data structure for testing and development environments.<br/>
               In this course we use seeder to create an admin account that cannot be deleted from the database, you can follow these steps.
            </p>
            <h3>1 - Create Seeder Class</h3>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:seeder NameSeeder</pre></div>      
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan make:seeder SuperAdminSeeder</pre></div>  
            <p>the seeder class will create in database/seeders/ folder</p>    
            <h3>2 - Create super admin account in seeder class</h3>
            <img src={images.laravel59} className="w-100 mb-2" alt="model"/>
            <h3>3 - Run seeder class</h3>
            <div className="alert bg-dark text-light mt-3 pb-0"><pre>php artisan db:seed --className=SuperAdminSeeder</pre></div>  
         </article>
      </>
   )
}