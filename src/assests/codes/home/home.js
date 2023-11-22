class Code{
constructor(){
    this.headerTop = { }
    this.dir = this.language === "arabic" ? "rtl" : "ltr";       
}
HomeHtml(){
return `<!DOCTYPE html>
<html>
 <head>
  <title> Page Title </title>
 </head >
 <body>
  <h1> HTML Content </h1>
 </body>
</html>`
}

HomeCss(){
return `body{
    background-color: red;
    color: white;
    border: 2px solid rgb(255 255 255);
}

h1{
    font-size: 23px;
    position: relative;
}`
}
HomeJs(){
 return `function getRandomColor() {
 const letters = '0123456789ABCDEF';
 let color = '#';
 for (let i = 0; i < 6; i++) {
   color += letters[
     Math.floor(Math.random() * 16)
 ];
 }
 return color;
}`
}
HomeReact(){
    return `import "./ComonentName.css"
const ComonentName = (props) => {
 return (
   <p dir={props.language}>
     {props.text}
   </p>
 );
};
export default ComonentName`
}
HomeVue(){
    return `<template>
    <p :dir="language"> {{ text }} </p>
</template>
<script>
    export default {
        props: {
            text: String , language: String
        }
    };
</script>`
}
HomePhp(){
    return `$message = "Hello, World!";
$number = 42;
echo "The answer is: " . $number;
if ($number > 0) {
    echo "<br>Positive number!";
} else {
    echo "<br>Non-positive number!";
}`
}

HomeLaravel(){
    return `namespace App\Http\Controllers;
use Illuminate\Http\Request;
class MyController extends Controller{
    public function index(){
    $message = "Hello, Laravel!";
    return view('myview', [
        'message' => $message
    ]);
  }
}`
}


HomePython(){
    return `def subtract(x, y):
    return x - y
def multiply(x, y):
    return x * y
def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Cannot divide by zero"`
}

HomeDjango(){
    return `from django.shortcuts import render
from .models import Book

def book_list(request):
    books = Book.objects.all()
    return render(request, 
        'myapp/book_list.html', {
        'books': books
    })`
}
HomeGit(){
    return `project>git init

project>git add .

project>git commit -m "my app"

project>git status

project>git push origin main`
}
HomePowerSehll(){
    return `mkdir folder_name
    
rmdir /s folder_name

attrib -hs *

type nul > index.html

del index.html`
}
 
}

const get_code = new Code()
const home_html = get_code.HomeHtml()
const home_css = get_code.HomeCss()
const home_js = get_code.HomeJs()
const home_react = get_code.HomeReact()
const home_vue = get_code.HomeVue()
const home_php = get_code.HomePhp()
const home_laravel = get_code.HomeLaravel()
const home_python = get_code.HomePython()
const home_django = get_code.HomeDjango()
const home_git = get_code.HomeGit()
const home_powerSehll = get_code.HomePowerSehll()

const home = {
    home_html , home_css , home_js , home_react , home_vue , home_php , 
    home_laravel ,home_python ,home_django ,home_git ,home_powerSehll,
};

export default home;
