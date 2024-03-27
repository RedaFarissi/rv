import images from "../imagesLaravel";
import { CodeCommand , CodeHighlighter } from "../../path";

export default function DatabaseRouteResource(props){

   return(
   <>
      <h1 className="heading-style"> Laravel Route Resource Database </h1>
      <article id="index">
            <h2 className="title-h2">1 - index </h2>
            <ul>
                <li>الحصول على جميع البيانات من جدول <b>Product</b> باستخدام <b>Resource</b></li>
                <li>قم أولاً بإنشاء Controller Resource في حالتي أطلقة عليه اسم ControllerHome </li>
            </ul>
            <CodeCommand>php artisan make:controller ControllerHome -r</CodeCommand>
            <div className="alert alert-danger">لا يمكنك إنشاء مورد بمسار فارغ، سيظهر خطأ في صفحة العرض.</div>
            <CodeHighlighter code={`<?php

use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\ControllerHome;

Route::resource("/products", ControllerHome::class);`} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`<?php
namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use App\\Models\\Product;    # new

class ControllerHome extends Controller {
    public function index(){
        return view('home.index' , ['products'=> Product::all()] );
    }
    public function create(){    }
    public function store(Request $request){    }
    public function show($id){    }
    public function edit($id){    }
    public function update(Request $request, $id){    }
    public function destroy($id){    }
}`} file_name="example-app / app / Http / Controllers / ControllerHome.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <ul><li>في مجلد <bdi><b>views/</b></bdi> أقوم بإنشاء مجلد جديد بالاسم <bdi><b>home/</b></bdi> سيحتوي هذا المجلد على كل الملفات التي أحتاجها لاستخدام الموارد</li></ul>

            {/* <CodeHighlighter code={``} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}

               <b>resources/views/home/index.blade.php</b>   
               <img src={images.laravel5} className="w-100 mb-2" alt="model"/>
      </article>
      <article id='create'>
            <h2 className="title-h2">2 - create</h2>
            {/* <CodeHighlighter code={``} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}
                  
      </article>
      <article id='Store_and_Upload_image'>
            <h2 className="title-h2">3 -  Store and Upload image  </h2>
            {/* <CodeHighlighter code={``} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}
            <CodeCommand>php artisan storage:link</CodeCommand>
            <b>App\Http\ControllerHome</b>
            <img src={images.laravel1} className="w-100 mb-2" alt="model"/>
            <b>resources\views\home\create.blade.php</b>
            <img src={images.laravel2} className="w-100 mb-2" alt="model"/>
            <b>resources\views\home\index.blade.php</b>
            <img src={images.laravel3} className="w-100 mb-2" alt="model"/>
            <br id='Multiple_Images_Upload'/><br/>
            <h3>multiple-images-upload <a href='https://www.scratchcode.io/laravel-9-multiple-images-upload-example/' target="_blanck">Here</a></h3>         
      </article>
      <article id='Show'>
            <h2 className="title-h2">4 - Show  </h2>
            {/* <CodeHighlighter code={``} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}
            <b>App\Http\Controllers\ControllerHome</b>
            <img src={images.laravel9} className="w-100 mb-2" alt="ControllersHome"/>
            <b>resources\views\home\index.blade.php</b>
            <img src={images.laravel7} className="w-100 mb-2" alt="index.blade.php"/>
            <b>resources\views\home\show.blade.php</b>
            <img src={images.laravel8} className="w-100 mb-2" alt="show.blade.php"/>
            <b>Result</b>
            <img src={images.laravel10} className="w-100 mb-2" alt="Result"/>
      </article>
      <article id='Edit'>  
            <h2 className="title-h2">5 - Edit </h2>
            {/* <CodeHighlighter code={``} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}
            <b>resources\views\home\show.blade.php</b>
            <img src={images.laravel12} className="w-100 mb-2" alt="show.blade.php"/>
            <b>resources\views\home\edit.blade.php</b>
            <img src={images.laravel13} className="w-100 mb-2" alt="edit.blade.php"/>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src={images.laravel14} className="w-100 mb-2" alt="ControllerHome"/>
      </article>
      <article id='Destroy'>  
            <h2 className="title-h2">5 - Destroy </h2>
            {/* <CodeHighlighter code={``} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}
            <b>resources\views\home\show.blade.php</b>
            <img src={images.laravel15} className="w-100 mb-2" alt="ControllerHome"/>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src={images.laravel16} className="w-100 mb-2" alt="ControllerHome"/>
      </article>
      <article id='only_and_except'>
            <h2 className="title-h2">6 - only and except</h2>
            {/* <CodeHighlighter code={``} file_name="example-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> */}
            <div>
         <pre>use App\Http\Controllers\PhotoController;
         
         Route::resource('photos', PhotoController::class){"->"}only([
             'index', 'show'
         ]);

         Route::resource('photos', PhotoController::class){"->"}except([
             'create', 'store', 'update', 'destroy'
         ]);</pre>
            </div>
      </article>
   </>
   )
}