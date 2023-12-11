export default function index8include_urls_and_files_html5(){
    return `{% extends "base.html" %}

{% block content %}
  <p>Logged out!</p>
  <a href="{% url 'login'%}">Click here to login again.</a>
{% endblock %}
`
}