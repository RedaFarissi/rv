export default function index8include_urls_and_files_html10(){
    return `{% extends "base.html" %}

{% block content %}
  <h1>The password has been changed!</h1>
  <p><a href="{% url 'login' %}">log in again?</a></p>
{% endblock %}
`
}