import { CodeCommand , CodeHighlighter } from "../../path";
import images from "../imagesLaravel";

export default function DatabaseQueryBuilder(props){
   function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
      const day = String(currentDate.getDate()).padStart(2, '0');

      return `${year}_${month}_${day}`;
   }
   return(
   <>
      <h1 className="heading-style">Laravel Database Query Builder </h1>
      <article id='What_is_Query_Builder'>
            <h2 className="title-h2">1 - ما هو Query Builder</h2>
            <p className='style_divv'>
               يسمح لك <b>Query Builder</b> بإنشاء استعلامات قاعدة البيانات باستخدام بناء جملة سلس ومعبر، مما يسهل استرداد السجلات وإدراجها وتحديثها وحذفها في قاعدة بيانات التطبيق الخاص بك باستخدام إطار عمل Laravel PHP.<br/>
               لإستخدام <b>Query Builder</b> أضاف :
               <CodeHighlighter code={`use Illuminate\\Support\\Facades\\DB;`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            </p>   
      </article>
      <article id='Insert'>
            <h2 className="title-h2">2 - insert  </h2>
            <h3 className="title-h3">1 - إنشاء جدول posts في قاعدة البيانات الخاصة بي </h3>
            <CodeCommand>php artisan make:migration create_posts_table</CodeCommand>
            <CodeHighlighter code={`<?php

use Illuminate\\Database\\Migrations\\Migration;
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('posts');
    }
};
`} file_name={`laravel-app / databse / migrations / ${getCurrentDate()}_221654_create_posts_table.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan migrate</CodeCommand>
            <h3 className="title-h3">2 - إنشاء ControllerPost </h3>
            <CodeCommand>php artisan make:controller ControllerPost</CodeCommand>
            <CodeHighlighter code={`<?php

namespace App\\Http\\Controllers;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;

class ControllerPost extends Controller {
    public function create(){
        return view('posts.create');
    }
    public function store(Request $request){
        DB::table('posts')->insert([
            'name'=>strip_tags($request->name) ,
            'description'=>strip_tags($request->description) ,
        ]);
        return "Create Success";
    }
}`} file_name={`laravel-app / app / Http / Controllers / ControllerPost.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <h3 className="title-h3">3 - web.php </h3>
            <CodeHighlighter code={`<?php
use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\ControllerPost;

Route::get("/posts/create", [ControllerPost::class , 'create'])->name('create-post');
Route::post("/posts/store", [ControllerPost::class , 'store'])->name('store-post');`} file_name={`laravel-app / routes / web.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>

            <CodeHighlighter code={`@extends('layout')

@section('content')
    <div class="container">
        <h1>Create POST</h1>
        <form action="{{ route('store-post') }}" method="POST">
            @csrf
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br/>            
            
            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>
            <br/>
           
            <input type="submit" value="Create POST" class="btn btn-primary" />
        </form>
    </div>
@endsection`} file_name={`laravel-app / resources / views / posts / create.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article id='Get'>
            <h2 className="title-h2">3 - Get  </h2>
            <CodeHighlighter code={`use Illuminate\\Support\\Facades\\DB;

DB::table('tableName')->get()`} language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>            
      </article>
      <article id='Full_Example'>
            <h2 className="title-h2">4 - مثال كامل . </h2>
            <CodeHighlighter code={`<?php

use Illuminate\\Support\\Facades\\Route;
use App\\Http\\Controllers\\ControllerPost;

Route::get("/", [ControllerPost::class , 'index'])->name('all-posts');
Route::get("/posts/create", [ControllerPost::class , 'create'])->name('create-post');
Route::post("/post/store", [ControllerPost::class , 'store'])->name('store-post');
Route::get("/post/edit/{id}", [ControllerPost::class , 'edit'])->name('edit-post');
Route::put("/post/update/{id}", [ControllerPost::class , 'update'])->name('update-post');
Route::DELETE("/posts/delete/{id}", [ControllerPost::class , 'destroy'])->name('destroy-post');



/*
OR YOU CAN USE :


Route::controller(ControllerPost::class)->group(function(){
    Route::get("/", 'index' )->name('all-posts');
    Route::get("/posts/create", 'create' )->name('create-post');
    Route::post("/posts/store", 'store' )->name('store-post');
    Route::get("/posts/edit/{id}", 'edit' )->name('edit-post');
    Route::put("/posts/update/{id}", 'update' )->name('update-post');
    Route::DELETE("/posts/delete/{id}", 'destroy' )->name('destroy-post');
});

*/`} file_name={`laravel-app / routes / web.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>php artisan make:controller ControllerPost</CodeCommand>
            <CodeHighlighter code={`<?php

namespace App\\Http\\Controllers;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;


class ControllerPost extends Controller {
    public function index(){
        $posts = DB::table('posts')->get();
        return view('posts.index' , ["posts" => $posts]);
    }
    public function create(){
        return view('posts.create');
    }
    public function store(Request $request){
        DB::table('posts')->insert([
            'name'=>strip_tags($request->name) ,
            'description'=>strip_tags($request->description)
        ]);
        return redirect()->route('all-posts');        
    }
    public function edit(string $id){  
        $post = DB::table('posts')->where('id' , $id)->first();
        return view('posts.edit', ["post" => $post] );
    }
    public function update(Request $request, $id){
        DB::table('posts')->where('id' , $id)->update([
            'name' => strip_tags($request->name) ,
            'description' => strip_tags($request->description) 
        ]);
        return redirect()->route('all-posts');
    }
    public function destroy(string $id){
        DB::table('posts')->where('id' , $id)->delete();    
        return redirect()->route('all-posts');
    }
}`} file_name={`laravel-app / app / Http / Controllers / ControllerPost.php`} language="php" number={true} addclassName="mt-3 mb-3" copie={true}/>
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
     <header>
          <nav class="nav">
               <ul>
                    <li><a href="{{ route('all-posts') }}"> all posts </a></li>
                    <li><a href="{{ route('create-post') }}"> create post </a></li>
               </ul>
          </nav>
     </header>
     @yield('content')
</body>
</html>`} file_name={`laravel-app / resources / views / posts / layoute.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`@extends('layoute')

@section('content')
    <table class="table">
        <thead  class="t-header">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
            @foreach($posts as $post)
            <tr>
                <td>{{ $post->id }}</td>
                <td>{{ $post->name }}</td>
                <td>{{ $post->description }}</td>
                <td> <a href="{{ route('edit-post' , $post->id) }}" class="btn btn-primary">Edit</a></td>
                <td>
                    <form action="{{ route('destroy-post' , $post->id) }}" method="POST">
                        @csrf
                        @method('DELETE') 
                        <button class="btn btn-danger"> Delete </button>
                    </form> 
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
@endsection`} file_name={`laravel-app / resources / views / posts / index.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`@extends('layoute')

@section('content')
    <div class="container">
        <h1>Create POST</h1>
        <form action="{{ route('store-post') }}" method="POST">
            @csrf
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br/>            
            
            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>
            <br/>
           
            <input type="submit" value="Create POST" class="btn btn-primary" />
        </form>
    </div>
@endsection`} file_name={`laravel-app / resources / views / posts / create.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`@extends('layoute')

@section('content')
    <div class="container">
        <h1>UPDATE POST</h1>

        <form action="{{ route('update-post' , $post->id ) }}" method="POST">
            @csrf
            @method('PUT') 


            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="{{ $post->name }}" />

            <br/>

            <label for="description">Description:</label>
            <textarea id="description" name="description"> {{ $post->description }} </textarea>

            <br/>

            <input type="submit" value="Update POST" class="btn btn-primary" />
        </form>
    </div>
@endsection`} file_name={`laravel-app / resources / views / posts / edit.blade.php`} language="html" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.laravel_query_builder_result} className="w-100 border mb-2" alt="ControllerPost"/>
      </article>
      <article id='Delete_All'>
            <h2 className="title-h2">5 -  حذف كافة البيانات في الجدول  </h2>
            <CodeHighlighter code={`DB::table('tableName')->delete();`}  language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`DB::table('posts')->delete();`}  language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
      </article>
      <article id='truncate'>
            <h2 className="title-h2">6 -  truncate </h2>
            <CodeHighlighter code={`DB::table('tableName')->truncate();`}  language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={`DB::table('posts')->truncate();`}  language="php" number={false} addclassName="mt-3 mb-3" copie={true}/>
      </article>
   </>
   )
}