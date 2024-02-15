import images from "../imagesLaravel";
import { CodeCommand } from "../../path";

export default function Middleware(props){

   return(
   <>
      <h1 className="heading-style">Laravel middleware </h1>
      <article className="mt-5">
         <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
         <h1 className="mt-5"> Middleware </h1>
         <a href="https://laravel.com/docs/10.x/middleware#registering-middleware" target="_blanck"> https://laravel.com/docs/10.x/middleware#registering-middleware </a>
         <h2 id="middlewareExemple1">1 - middleware Exemple with Eloquent's built-in features to check if user is admin or not whit less code  </h2>
         <h3> - App\Models\User;</h3>
         <p className='fs-4'>Eloquent's built-in features to check if user is admin or not</p>
         <img src={images.laravel51} className="w-100 border mb-2" alt="ControllerPost"/>
         <h3>- Create Middleware with specific name </h3>
         <div className='alert bg-dark text-light pb-0'><pre>php artisan make:middleware <span className='text-danger'>NameMiddleware</span></pre></div>
         <div className='alert bg-dark text-light pb-0'><pre>php artisan make:middleware AdminMiddleware</pre></div>
         <p> this will create file AdminMiddleware in "App\Http\Middleware\AdminMiddleware.php" </p>
         <h3> - app\Http\Middleware\AdminMiddleware.php</h3>
         <img src={images.laravel52} className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - app/Http/Kernel.php</h3>
         <p> In laravel 10 you must add this line in $middlewareAliases array in other version you can add it in $routeMiddleware  . </p>
         <img src={images.laravel53} className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - App\Http\Controllers\ControllerName.php</h3>
         <p> You can use it in any Controller or in web.php if condition don't exept will take you to another page .</p>
         <img src={images.laravel54} className="w-100 border mb-2" alt="ControllerPost"/>

         <h2 id="middlewareExemple2">2 - middleware Create Second middleware In the same Controller </h2>
         <b>create new Middleware with name SuperAdminMiddleware</b>
         <h3> - app\Http\Middleware\SuperAdminMiddleware.php</h3>
         <img src={images.laravel57} className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - app/Http/Kernel.php</h3>
         <img src={images.laravel55} className="w-100 border mb-2" alt="ControllerPost"/>
         <h3> - App\Http\Controllers\ControllerName.php</h3>
         {/* <div className='alert bg-dark text-light'>
         <pre><span className='b'>class</span> ControllerAdminUser <span className='b'>extends</span> Controller {
            <span className='text-success'> //give middleware('admin') to all method in class </span>
            <span className='b'>public function</span> <span className='gold'>__construct</span>(){
               <span className='b'>$this</span>{"->"}<span className='gold'>middleware(<span className='o'>'admin'</span>)</span>;
            }
            <span className='text-success'>//all method will use middleware admin by default</span>
            <span className='b'>public function</span> <span className='gold'>admin_users_list</span>(){
               return view('admin.users.list' , ["users"=>User::all()]);
            }
            <span className='text-success'> // ..... method </span>
            <span className='b'>public function</span> <span className='gold'>admin_user_delete</span>($id){  
                  $user = User::findOrFail($id);
                  $user{"->"}delete();
                  return redirect(){"->"} route('admin_users_list');
            }
            <span className='b'>public function</span> <span className='gold'>admin_users_delete_selected</span>(Request $request){  
               $selectedItems = $request{"->"}input('selected_items');
               if (!is_null($selectedItems) && is_array($selectedItems)) {
                   User::whereIn('id', $selectedItems){"->"}delete();
               }
               return redirect(){"->"}route('admin_users_list'){"->"}with('success', 'Selected items deleted.');
            }
         }</pre></div> */}
         <h3> - web.php</h3>
         <p> the second middleware('admin') will not run if the middleware('super_admin') passes successfully.</p>
         {/* <div className='alert bg-dark text-light'>
         <pre>Route::controller(ControllerAdminUser::class){"->"}group(function(){
            Route::get('admin/users/list', "admin_users_list"){"->"}name('admin_users_list');
            Route::get('admin/user/create/view', "admin_user_create_views"){"->"}name('admin_user_create_views');
            Route::post('admin/user/create/store', "admin_user_create_store"){"->"}name('admin_user_create_store');
            Route::get('admin/user/edit/{id}/views', "admin_user_edit_views"){"->"}name('admin_user_edit_views');
            Route::get('admin/user/delete/{id}', "admin_user_delete"){"->"}<span className='gold'>middleware(<span className='o'>'super_admin'</span>)</span>{"->"}name('admin_user_delete');
            Route::post('admin/users/delete/selected', "admin_users_delete_selected"){"->"}<span className='gold'>middleware(<span className='o'>'super_admin'</span>)</span>{"->"}name('admin_users_delete_selected');
         });</pre></div> */}
      
      </article>
   </>
   )
}