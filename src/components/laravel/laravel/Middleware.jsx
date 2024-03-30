import images from "../imagesLaravel";
import { CodeCommand , CodeHighlighter } from "../../path";

export default function Middleware(props){
   return(
   <>
      <h1 className="heading-style">Laravel middleware </h1>
      <article className="mt-5">
         <p className="style_divv">
               الوسيط <b>(middleware)</b> في  هو آلية <b>Laravel</b> لتصفية طلبات <b>HTTP</b> التي تدخل إلى تطبيقك. يقوم الوسيط بالتقاط الطلبات ويمكنه أداء مهام مثل المصادقة، وتسجيل الأحداث، وتعديل كائنات الطلب/الاستجابة، أو إنهاء الطلبات. يعمل الوسيط كجسر بين العميل ومسارات التطبيق أو التحكمات، مما يتيح لك تنفيذ الشفرة قبل أو بعد تنفيذ الطلب. يتم تعريف الوسيط كفئات تحتوي على طريقة <bdi><b>handle()</b></bdi>، التي تستقبل الطلب الوارد، واختياريًا، طريقة <bdi><b>terminate()</b></bdi> التي يتم استدعاؤها بعد إرسال الاستجابة. يمكن تسجيل الوسيط على مستوى عالمي لتشغيله في كل طلب، أو تطبيقه على مسارات محددة أو مجموعات مسارات، أو تجميعه معًا لإدارته بسهولة.<br/><br/>
               من هنا للذهاب إلى الموقع الرسمي  <a href="https://laravel.com/docs/10.x/middleware#registering-middleware" target="_blanck"> middleware </a>
         </p>
      </article>
      <article id="Example_1">
         <h2 className="title-h2">  مثال 1 </h2>
         <p className="style_divv">
               مثال على البرامج الوسيطة مع ميزات <b>Eloquent</b> المضمنة للتحقق مما إذا كان المستخدم مسؤولاً أم لا مع تعليمات برمجية أقل
         </p>
         <h3 className="title-h3">1 - ميزات Eloquent المضمنة للتحقق مما إذا كان المستخدم مسؤولاً أم لا </h3>
         <CodeHighlighter code={`<?php

namespace App\\Models;

use Illuminate\\Contracts\\Auth\\MustVerifyEmail;
use Illuminate\\Database\\Eloquent\\Factories\\HasFactory;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;
use Illuminate\\Notifications\\Notifiable;
use Laravel\\Sanctum\\HasApiTokens;

class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [ 'name', 'email', 'password', ];
    protected $hidden = [ 'password', 'remember_token',];
    protected $casts = [ 'email_verified_at' => 'datetime', ];

    public function isSuperAdmin(){    #new
        return $this->role === "super admin";
    }
    public function isAdmin(){         #new
        return $this->role === "admin";
    }
    public function isUser(){          #new
        return $this->role === "user";
    }
}`} file_name={`laravel-app / App / Models / User.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <h3 className="title-h3">2 - إنشاء وسيط (Middleware) باسم محدد </h3>
         <div dir="ltr" className="bg-dark text-light alert">php artisan make:middleware <span className="text-warning">NameMiddleware</span></div>    
         <CodeCommand>php artisan make:middleware AdminMiddleware</CodeCommand>  
         <ul><li> سيؤدي هذا إلى إنشاء ملف <b>AdminMiddleware</b> في <kbd>App\Http\Middleware\AdminMiddleware.php</kbd> </li></ul>  
         <CodeHighlighter code={`<?php

namespace App\\Http\\Middleware;
use App\\Models\\User;      #new

use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;       #new
use Symfony\\Component\\HttpFoundation\\Response;       #new

class AdminMiddleware {
    public function handle(Request $request, Closure $next) {
        #  Get the user if Auth
        $userAuth = Auth::user();
        # Find user Auth in User Models to use isSuperAdmin() and isAdmin()
        $user = User::find($userAuth->id);

        if( Auth::check() && ( $user->isAdmin() || $user->isSuperAdmin() ) ){
            return $next($request);   
        }
        return redirect()->route('all-posts');
    }
}`} file_name={`laravel-app / App / Http / Middleware / AdminMiddleware.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <ul><li>في <b>laravel 10</b> يجب عليك إضافة هذا السطر في <bdi><b>$middlewareAliases</b></bdi> وفي إصدار آخر يمكنك إضافته في <bdi><b>$routeMiddleware</b></bdi> .</li></ul>
         <CodeHighlighter code={` protected $routeMiddleware = [
        'admin'=> \\App\\Http\\Middleware\\AdminMiddleware::class,   #new
        'auth' => \\App\\Http\\Middleware\\Authenticate::class,
        'auth.basic' => \\Illuminate\\Auth\\Middleware\\AuthenticateWithBasicAuth::class,
        'cache.headers' => \\Illuminate\\Http\\Middleware\\SetCacheHeaders::class,
        'can' => \\Illuminate\\Auth\\Middleware\\Authorize::class,
        'guest' => \\App\\Http\\Middleware\\RedirectIfAuthenticated::class,
        'password.confirm' => \\Illuminate\\Auth\\Middleware\\RequirePassword::class,
        'signed' => \\Illuminate\\Routing\\Middleware\\ValidateSignature::class,
        'throttle' => \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,
        'verified' => \\Illuminate\\Auth\\Middleware\\EnsureEmailIsVerified::class,
    ];`} file_name={`laravel-app / App / Http / Kernel.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
         <h3 className="title-h3">3 - إنشاء ControllerAdmin</h3>
         <ul>
            <li><strong>يمكنك استخدامه في أي Controller أو في web.php </strong></li>
            <li><strong>إذا لم يتحقق الشرط فسينقلك  إلى المسار :  all-posts.</strong></li>
         </ul>
         <CodeHighlighter code={`<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class ControllerAdmin extends Controller
{
     public function __construct() {
        $this->middleware('admin'); 
    }
    public function admin_home(){
        return view('admin.index');
    }
}`} file_name={`laravel-app / App / Http / Controllers / ControllerAdmin.php`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article>
         <h2 className="title-h2">  مثال 2 </h2>

         <ul><li>  middleware Create Second middleware In the same Controller </li></ul>
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