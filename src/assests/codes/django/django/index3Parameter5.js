export default function index3Parameter5(){
    return`<!DOCTYPE html>
<html>
<head>
   <title> author_books </title>
</head>
<body>
    <h2> Author : {{author_name}}</h2>
    <div>
        {% for book in author_books %}
            <div style="background-color: red; color: white; font-size: 26px;">
                <h5> {{book.title}} </h5> 
            </div>     
        {% endfor %}
    </div>
</body>
</html>`
}