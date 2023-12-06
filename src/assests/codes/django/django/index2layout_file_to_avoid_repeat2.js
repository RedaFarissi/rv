export default function index2layout_file_to_avoid_repeat2(){
    return `{% extends 'layoute.html' %}
{% block content %}
    <h1>Article: {{ article.title }}</h1>
    <p>{{ article.text }}</p>
{% endblock content %}
`
}