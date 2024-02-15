import images from "../imagesLaravel";
import { CodeCommand } from "../../path";

export default function DatabaseRouteResource(props){

   return(
   <>
      <h1 className="heading-style"> Laravel Database Route::Resource </h1>
      <article id="mt-5">
            <h1  id='GetAllDataFromDB' className='h1'>resource</h1>
            <h2>1 - Get All Data From DB with resource</h2>
            <div>
               <h3>1 - first create Controller resource in my case i named it "ControllerHome"</h3>
               <b>routes/web.php</b>
               <div className='alert alert-info'><pre>&lt;?php
         
         use Illuminate\Support\Facades\Route;
         use App\Http\Controllers\ControllerHome;
         
         Route::resource("/products", ControllerHome::class);</pre>
                  <div className='alert bg-danger text-light'>
                     You can't create resource with empty path the will give error on show page . 
                  </div>
               </div>
         
               <b>app/Http/Controllers/ControllerHome.php</b>   
               <img src={images.laravel4} className="w-100 mb-2" alt="model"/>
               <b>resources/views/home/index.blade.php</b>   
               <p className='fs-3 text-success'> in <b>views/</b> folder i create new folder with name <b>home/</b> this folder will content all file i need to use recource  </p>
               <img src={images.laravel5} className="w-100 mb-2" alt="model"/>

            </div>
         
            <h2 id='Upload_image'>2 - Upload image & create  </h2>
            <div>
               <div className='alert bg-dark pb-0 text-light'><pre>php artisan storage:link</pre></div>
            </div>
            <b>App\Http\ControllerHome</b>
            <img src={images.laravel1} className="w-100 mb-2" alt="model"/>
            <b>resources\views\home\create.blade.php</b>
            <img src={images.laravel2} className="w-100 mb-2" alt="model"/>
            <b>resources\views\home\index.blade.php</b>
            <img src={images.laravel3} className="w-100 mb-2" alt="model"/>
            <br id='Multiple_Images_Upload'/><br/>
            <h3>multiple-images-upload <a href='https://www.scratchcode.io/laravel-9-multiple-images-upload-example/' target="_blanck">Here</a></h3>
         

         
            <h2 id='ShowDetail_with_recource'>3 - Show Detail with id </h2>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src={images.laravel9} className="w-100 mb-2" alt="ControllersHome"/>
            <b>resources\views\home\index.blade.php</b>
            <img src={images.laravel7} className="w-100 mb-2" alt="index.blade.php"/>
            <b>resources\views\home\show.blade.php</b>
            <img src={images.laravel8} className="w-100 mb-2" alt="show.blade.php"/>
            <b>Result</b>
            <img src={images.laravel10} className="w-100 mb-2" alt="Result"/>
         
            <h2 id='Update_by_id_with_recource'>4 - Update by id with recource </h2>
            <b>resources\views\home\show.blade.php</b>
            <img src={images.laravel12} className="w-100 mb-2" alt="show.blade.php"/>
            <b>resources\views\home\edit.blade.php</b>
            <img src={images.laravel13} className="w-100 mb-2" alt="edit.blade.php"/>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src={images.laravel14} className="w-100 mb-2" alt="ControllerHome"/>
         
            <h2 id='Delete_by_id_with_recource'>5 - Delete by id with recource </h2>
            <b>resources\views\home\show.blade.php</b>
            <img src={images.laravel15} className="w-100 mb-2" alt="ControllerHome"/>
            <b>App\Http\Controllers\ControllerHome</b>
            <img src={images.laravel16} className="w-100 mb-2" alt="ControllerHome"/>
         
            <h2 id='only_and_except'><span className='text-success'>only</span> and <span className='text-danger'>except</span> in recource Controller</h2>
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