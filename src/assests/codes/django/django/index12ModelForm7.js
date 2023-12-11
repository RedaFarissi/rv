export default function index12ModelForm7(){
    return `{% extends 'base.html' %}

{% block content %}
  <h2>Post List</h2>
  <ul>
    {% for post in posts %}
      <li>{{ post.title }}</li>
    {% endfor %}
  </ul>
{% endblock %}`
}