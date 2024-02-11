import { CodeCommand } from "../../path";
import images from "../imagesLaravel";

export default function DatabaseQueryBuilder(props){

   return(
   <>
      <h1 className="heading-style heading-style-python-color">Laravel Database Query Builder </h1>
      <article id="mt-5">
            <div className='h1'>Query builder</div>
            <br id='Intro_QueryBuilder'/><br/>
            <h2>1 - Intro Query Builder</h2>
            <p className='fs-5'>
               Query Builder allows you to construct database queries using a fluent and expressive syntax, 
               making it easier to retrieve, insert, update, and delete records in 
               your application's database with the Laravel PHP framework.
               <div className='alert bg-dark text-light pb-0'><pre> use Illuminate\Support\Facades\DB; </pre></div>
            </p>   

            <h2 id='insertInQueryBuilder'>1 - Insert With Query builder </h2>
            <ul className='fs-5'>
               <li> in this part I will create "posts" table in my Database and i will use it for exemple </li>
               <li> Create Controller to handle route && Insert Data with Query builder</li>
            </ul>
            <b> create "posts" table in my Database </b>
            <img src={images.laravel30} className="w-100 mb-2" alt="posts"/>
            <b> routes/web.php </b>
            <img src={images.laravel31} className="w-100 border mb-2" alt="web"/>
            <b> App/Http/Controller/ControllerPost.php </b>
            <img src={images.laravel33} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/home.blade.php </b>
            <img src={images.laravel34} className="w-100 border mb-2" alt="ControllerPost"/>

            <h2 id='GetWithQueryBuilder'>2 - Get With Query builder </h2>
            <b> routes/web.php </b>
            <img src={images.laravel35} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> App/Http/Controller/ControllerPost.php </b>
            <img src={images.laravel36} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/all_data.blade.php </b>
            <img src={images.laravel37} className="w-100 border mb-2" alt="ControllerPost"/>

            <h2 id='full_Exemple_Create_Edit_Delete'>3 - full Exemple Create && Edit && Delete  </h2>
            <b> routes/web.php </b>
            <img src={images.laravel38} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> App/Http/Controller/ControllerPost.php </b>
            <img src={images.laravel39} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/layout.blade.php </b>
            <img src={images.laravel40} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/index.blade.php </b>
            <img src={images.laravel41} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/create.blade.php </b>
            <img src={images.laravel42} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> resources/views/edit.blade.php </b>
            <img src={images.laravel43} className="w-100 border mb-2" alt="ControllerPost"/>
            <b> Result</b>
            <img src={images.laravel44} className="w-100 border mb-2" alt="ControllerPost"/>

            <h2 id='Delete_all_Data_with_Query_Builder'>3 -  Delete all Data with Query Builder  </h2>
            <div className='alert alert-warning'><pre>DB::table('tableName'){"->"}delete();</pre></div>
            <div className='alert alert-warning'><pre>DB::table('posts'){"->"}delete();</pre></div>

            <h2 id='truncate_with_Query_Builder'>4 -  truncate with Query Builder </h2>
            <div><pre>DB::table('tableName'){"->"}truncate();</pre></div>
            <div><pre>DB::table('posts'){"->"}truncate();</pre></div>
      </article>
   </>
   )
}