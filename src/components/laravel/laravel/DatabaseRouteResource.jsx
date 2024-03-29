import images from "../imagesLaravel";
import { CodeCommand , CodeHighlighter } from "../../path";

export default function DatabaseRouteResource(props){
      function getCurrentDate() {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
            const day = String(currentDate.getDate()).padStart(2, '0');
          
            return `${year}_${month}_${day}`;
      }

      return(
<>
      <h1 className="heading-style"> Laravel Route Resource Database </h1>
      <article id="New_project">
            <h2 className="title-h2">1 - إنشاء مشروع جديد  </h2>
            <ul><li> إنشاء مشروع جديد بالاسم <b>laravel-app</b></li></ul>
            <CodeCommand>composer create-project laravel/laravel:^9.0 laravel-app</CodeCommand>
            <CodeHighlighter code={`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel-app
DB_USERNAME=root
DB_PASSWORD=`} file_name="laravel-app / .env" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>
            <ul><li>إنشاء <b>Model</b> و <b>Table</b> و <b>Controller recource</b> :</li></ul>
            <CodeCommand>php artisan make:model Product -mcr</CodeCommand>
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
            $table->timestamps();
        });
    }
    public function down() {
        Schema::dropIfExists('products');
    }
};
`} file_name={`laravel-app / databse / migrations / ${getCurrentDate()}_222406_create_products_table.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>
            <ul><li> إنشاء مورد بالمسار <b>web.php</b></li></ul>
            <CodeHighlighter code={`<?php

use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\ProductController;   # new

Route::resource("/products", ProductController::class);`} file_name="laravel-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <div className="alert alert-danger">لا يمكنك إنشاء مورد بمسار فارغ، سيظهر خطأ في صفحة العرض.</div>   
            <CodeHighlighter code={`<?php
namespace App\\Http\\Controllers;

use App\\Models\\Product;      # new
use Illuminate\\Http\\Request;

class ProductController extends Controller {
    public function index(){    }
    public function create(){    }
    public function store(Request $request){    }
    public function show($id){    }
    public function edit($id){    }
    public function update(Request $request, $id){    }
    public function destroy($id){    }
}`} file_name={`laravel-app / app / Http / Controllers / ProductController.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <ul><li>في مجلد <bdi><b>views/</b></bdi> أقوم بإنشاء مجلد جديد بالاسم <bdi><b>home/</b></bdi> سيحتوي هذا المجلد على كل الملفات التي أحتاجها لاستخدام الموارد</li></ul>
            <img src={images.laravel5} className="w-100 mb-2" alt="model" />
            <CodeHighlighter code={`<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
     <title> Exemple </title>
</head>
<body>
     @yield('content')
</body>
</html>`} file_name={`laravel-app / resources / views / layout.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article id="index">
            <h2 className="title-h2">2 - index </h2>
            <ul><li>الحصول على جميع البيانات من جدول <b>Product</b> باستخدام <b>Resource</b></li></ul>
            
            <CodeHighlighter code={`#...
      public function index(){
        return view('home.index' , ['products'=> Product::all()] );
      }`} file_name={`laravel-app / app / Http / Controllers / ProductController.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`@extends('layout')

@section('content')
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Created At</th>
                <th>Updated At</th>
            </tr>
        </thead>
        <tbody>
            @foreach($products as $product)
            <tr>
                <td>{{ $product->id }}</td>
                <td>{{ $product->name }}</td>
                <td>
                    <a href={{ route('products.show' , [$product->id] ) }}>
                        <img 
                              src="{{ asset('storage/images/' . $product->image) }}" 
                              alt="{{ $product->name }}" style="max-width: 100px;" 
                        />
                    </a>
                </td>
                <td>{{ $product->description }}</td>
                <td>{{ $product->price }}</td>
                <td>{{ $product->available ? 'Available' : 'Not Available' }}</td>
                <td>{{ $product->created_at }}</td>
                <td>{{ $product->updated_at }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
@endsection`} file_name={`laravel-app / resources / views / home / index.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>

      </article>
      <article id='create'>
            <h2 className="title-h2">3 - create</h2>
            <ul><li>إنشاء صفحة للحصول على البيانات من المستخدم وحفظها في قاعدة بيانات</li></ul>
            <CodeHighlighter code={`#...
      public function create(){
        return view('home.create');    # you can use : home/create
      }`} file_name={`laravel-app / app / Http / Controllers / ProductController.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={`@extends('layout')

@section('content')
    <div class="container">
        <h1>Create Product</h1>
        <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            
            <label for="image">Image:</label><br>
            <input type="file" id="image" name="image"><br>
            
            <label for="description">Description:</label><br>
            <textarea id="description" name="description"></textarea><br>
            
            <label for="price">Price:</label><br>
            <input type="text" id="price" name="price"><br>
            
            <label for="available">Available:</label>
            <input type="checkbox" id="available" name="available" value="1"><br>
            
            <button type="submit">Create</button>
        </form>
    </div>
@endsection`} file_name={`laravel-app / resources / views / home / create.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
                  
      </article>
      <article id='Store_and_Upload_image'>
            <h2 className="title-h2">4 -  Store and Upload image  </h2>
            <CodeCommand>php artisan storage:link</CodeCommand>
            <CodeHighlighter code={`#...
      public function store(Request $request){
            $request->validate([
                'name' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
                'description' => 'required|string',
                'price' => 'required|integer',
                'available' => 'required|boolean',
            ]);

            $imagePath = $request->file('image')->store('public/images');
            $imageName = basename($imagePath); // Get the file name without the path

            $product = new Product();
            $product->name = strip_tags($request->input('name'));
            $product->description = strip_tags($request->input('description'));
            $product->price = strip_tags($request->input('price'));
            $product->available = strip_tags($request->input('available'));

            $product->image = $imageName; // Save only the image name
            $product->save();
            return redirect()-> route('products.index');
      }`} file_name={`laravel-app / app / Http / Controllers / ProductController.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <ul><li>تحميل صور متعددة <a href='https://www.scratchcode.io/laravel-9-multiple-images-upload-example/' target="_blanck">من هنا</a></li></ul>         
      </article>
      <article id='Show'>
            <h2 className="title-h2">5 - Show  </h2>
            <ul><li>إظهار التفاصيل بالمعرف <b>id</b></li></ul>
            <CodeHighlighter code={`#...
      public function show($id){ 
            return view('home.show', ["product" => Product::findOrFail($id)] );
      }`} file_name="laravel-app / app / Http / Controllers / ProductController.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`@extends('layout')

@section('content')
    <div class="container">
        <h1>{{ $product->name }}</h1>
        <p><strong>Description:</strong> {{ $product->description }}</p>
        <p><strong>Price:</strong> \${{ $product->price }}</p>
        <p><strong>Availability:</strong> {{ $product->available ? 'Available' : 'Not Available' }}</p>
        <p><strong>Image:</strong></p>
        <img src="{{ asset('storage/images/' . $product->image) }}" alt="{{ $product->name }}" style="max-width: 300px;">
        <br/><br/>
        <a class="btn btn-secondary" href="{{ route('products.index') }}">Back to Product List</a>
        <a class="btn btn-primary" href="{{ route('products.edit', $product->id) }}">Edit Product</a>

        <form action="{{ route('products.destroy', $product->id) }}" method="POST" style="display: inline;">
            @csrf
            @method('DELETE')
            <button class="btn btn-danger" type="submit" 
                onclick="return confirm('Are you sure you want to delete this product?')">
                Delete Product
            </button>
        </form>
    </div>
@endsection`} file_name="laravel-app / resources / views / home / show.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/> 
      </article>
      <article id='Edit'>  
            <h2 className="title-h2">6 - Edit </h2>
             <CodeHighlighter code={`#...
      public function edit(string $id){  
          return view('home.edit', ["product" => Product::findOrFail($id)] );
      }
      public function update(Request $request, $id){
            $request->validate([
                'name' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
                'description' => 'required|string',
                'price' => 'required|integer',
                'available' => 'required|boolean',
            ]);

            $imagePath = $request->file('image')->store('public/images');
            $imageName = basename($imagePath); // Get the file name without the path
      
            $up_date = Product::findOrFail($id);
            $up_date->name = strip_tags($request->input('name'));
            $up_date->description = strip_tags($request->input('description'));
            $up_date->price = strip_tags($request->input('price'));
            $up_date->available = strip_tags($request->input('available'));

            $up_date->image = $imageName; // Save only the image name
            $up_date->save();
            return redirect()-> route('products.show' , $id);
      }`} file_name="laravel-app / app / Http / Controllers / ProductController.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
             <CodeHighlighter code={`@extends('layout')

@section('content')
    <div class="container">
        <h1>Edit Product</h1>
        <form action="{{ route('products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" value="{{ $product->name }}" /><br>

            <label for="image">Image:</label><br>
            <input type="file" id="image" name="image" /><br>

            <label for="description">Description:</label><br>
            <textarea id="description" name="description">{{ $product->description }}</textarea><br>

            <label for="price">Price:</label><br>
            <input type="text" id="price" name="price" value="{{ $product->price }}" /><br>

            <label for="available">Available:</label>
            <input type="checkbox" id="available" name="available" value="1" {{ $product->available ? 'checked' : '' }} /><br>

            <button type="submit">Update</button>
        </form>
    </div>
@endsection
`} file_name="laravel-app / resources / views / home / edit.blade.php" language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article id='Destroy'>  
            <h2 className="title-h2">7 - Destroy </h2>
            <CodeHighlighter code={`#...
    public function destroy($id){
        $to_delete = Product::findOrFail($id);
        $to_delete->delete();
        return redirect()-> route('products.index');
    }`} file_name="laravel-app / app / Http / Controllers / ProductController.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article id='only_and_except'>
            <h2 className="title-h2">8 - only and except</h2>
            <p className="style_divv">
                  <ul>
                        <li> استخدام الطريقة <b>except</b> مع <b>Route::resource</b> يُستخدم عادة عندما نرغب في تقييد الوصول إلى بعض الإجراءات في متحكم المورد. </li>
                        <li></li>
                  </ul>
            </p>
            <CodeHighlighter code={`use App\\Http\\Controllers\\ProductController;
 
Route::resource('products', ProductController::class)->only([
    'index', 'show'
]);
 
Route::resource('products', ProductController::class)->except([
    'create', 'store', 'update', 'destroy'
]);`} file_name="laravel-app / routes / web.php" language="php" number={true} addclassName="mt-3 mb-3" copie={true}/> 
     </article>
   </>
   )
}