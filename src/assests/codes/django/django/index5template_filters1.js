export default function index5template_filters1(){
    return`<!DOCTYPE html>
<html>
<head>
   <title> date </title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
   <link rel="stylesheet" href="{% static 'index.css' %}"> 
</head>
<body>
    <h2> Products created updated </h2>
    <main class='main'>    
        {% for item in created_updated %}
            <p class="bg-dark text-light">
                <ul>
                    <li>created :{{ item.created|date:"F j, Y" }} </li>
                    <li>updated :{{ item.updated }}   </li>  
                </ul>
            </p>
        {% endfor %}
    </main>  
</body>
</html>`
}