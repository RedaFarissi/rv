export default function index2layout_file_to_avoid_repeat0(){
    return `<!DOCTYPE html>
<html>
<head>
   <title> articles </title>
</head>
<body>
   <header>
      <a href="{% url 'home' %}">  home </a>
      <a href="{% url 'articles' %}">  articles </a>
   </header>

   {% block content %}
   {% endblock content %}
   
</body>
</html>`
}