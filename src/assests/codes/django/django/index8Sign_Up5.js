export default function index8Sign_Up5(){
    return `{% load static %}
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}  {% endblock %}</title>
   <link rel="icon" href="./html_logo.png" type="image/png">
   <meta name="viewport" content="width=device-width, initial-scale=1"> 
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
  <nav>
      <ul class="sidebar-nav">
        {% if user.is_authenticated %}
          <li>User: {{ user.get_username }}</li>
          <li><a href="{% url 'logout' %}?next={{ request.path }}">Logout</a></li>
        {% else %}
          <li><a href="{% url 'login' %}?next={{ request.path }}">Login</a></li>
          <li><a href="{% url 'sign_up' %}">Sign Up</a></li>  {% comment %} <!-- new add --> {% endcomment %}
        {% endif %}
      </ul>
  </nav>

  {% block content %}

  {% endblock %}

</body>
</html>`
}